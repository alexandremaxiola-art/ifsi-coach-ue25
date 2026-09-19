(function(){
  const SB='https://bzmwtjkjuihbrhiumdul.supabase.co';
  const API=SB+'/functions/v1/coach-api';
  const TOKEN_KEY='ifsi-coach-secure-token-v1';
  const SESSION='ifsi-coach-ue28-participant-v4';
  const OLD=['ifsi-coach-ue28-participant-v2','ifsi-coach-ue28-participant-v3'];
  const ADMIN='../admin/#ue28';
  const nativeFetch=window.fetch.bind(window);
  let validationMap={},legacyValidated=[],validationLoadedFor=null,notifications=[];

  if(location.hash==='#admin'){ location.replace(ADMIN); return; }
  try{ OLD.forEach(k=>localStorage.removeItem(k)); }catch{}

  const now=()=>new Date().toISOString();
  const norm=v=>(v||'').trim().replace(/\s+/g,' ').toLocaleLowerCase('fr');
  const clean=v=>(v||'').trim().replace(/\s+/g,' ').slice(0,30);
  const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});

  async function rest(){throw new Error('direct_database_disabled')}){
    const r=await nativeFetch(SB+'/rest/v1/'+path,{...init,cache:'no-store',headers:{apikey:KEY,'Content-Type':'application/json','Cache-Control':'no-cache',...(init.headers||{})}});
    const t=await r.text();
    if(!r.ok) throw new Error(t||String(r.status));
    return t?JSON.parse(t):null;
  }
  function getLocal(){try{return JSON.parse(localStorage.getItem(SESSION)||'null')}catch{return null}}
  function getToken(){try{return localStorage.getItem(TOKEN_KEY)||''}catch{return ''}}
  function setLocal(p,token){try{localStorage.setItem(SESSION,JSON.stringify(p));if(token)localStorage.setItem(TOKEN_KEY,token)}catch{}}
  function clearLocal(){try{localStorage.removeItem(SESSION);localStorage.removeItem(TOKEN_KEY);OLD.forEach(k=>localStorage.removeItem(k))}catch{}}
  async function secureCall(action,body={}){
    const token=getToken();
    const r=await nativeFetch(API,{method:'POST',cache:'no-store',headers:{'Content-Type':'application/json','Cache-Control':'no-cache',...(token?{'x-coach-session':token}:{})},body:JSON.stringify({action,...body})});
    const data=await r.json().catch(()=>({}));
    if(!r.ok){const e=new Error(data.error||'secure_api_error');e.status=r.status;throw e}
    return data;
  }

  async function findStudentByName(name){
    const key=norm(name);
    const rows=await rest('students?select=*&first_name_key=eq.'+encodeURIComponent(key)+'&limit=1');
    return rows?.[0]||null;
  }
  async function getStudent(id){
    const rows=await rest('students?select=*&id=eq.'+encodeURIComponent(id)+'&limit=1');
    return rows?.[0]||null;
  }
  async function ensureProgress(studentId,touch=true){
    let rows=await rest('ue28_progress?select=*&student_id=eq.'+encodeURIComponent(studentId)+'&limit=1');
    let p=rows?.[0]||null;
    const ts=now();
    if(!p){
      const created=await rest('ue28_progress?select=*',{method:'POST',headers:{Prefer:'return=representation'},body:JSON.stringify({student_id:studentId,last_seen_at:ts,updated_at:ts})});
      p=created?.[0]||null;
    }else if(touch){
      const updated=await rest('ue28_progress?student_id=eq.'+encodeURIComponent(studentId)+'&select=*',{method:'PATCH',headers:{Prefer:'return=representation'},body:JSON.stringify({last_seen_at:ts,updated_at:ts})});
      p=updated?.[0]||p;
    }
    return p;
  }
  function toState(p){return {moduleScores:p?.module_scores||{},cardsSeen:Array.isArray(p?.cards_seen)?p.cards_seen:[],casesDone:Array.isArray(p?.cases_done)?p.cases_done:[],lastDiagnosticTopic:p?.last_diagnostic_topic||null,moduleValidations:p?.module_validations||{}};}
  async function join(body){
  try{
    const d=await secureCall('student_join',{ue:'28',first_name:clean(body?.firstName),password:body?.password||''});
    if(!d?.participant)return json({error:'Connexion impossible.'},500);
    setLocal(d.participant,d.token);
    validationMap=d.state?.moduleValidations||{};
    legacyValidated=d.state?.validatedModules||[];
    validationLoadedFor=d.participant.id;
    setTimeout(()=>{refreshValidationUI();loadNotifications().catch(()=>{})},0);
    return json({participant:d.participant,state:d.state||{}});
  }catch(e){return json({error:e?.message||'Connexion impossible.'},e?.status||500)}
}
  async function session(){
  const part=getLocal();if(!part?.id||!getToken())return json({error:'signin_required'},401);
  try{
    const d=await secureCall('student_session',{ue:'28'});
    if(!d?.participant){clearLocal();return json({error:'signin_required'},401)}
    setLocal(d.participant);
    validationMap=d.state?.moduleValidations||{};
    legacyValidated=d.state?.validatedModules||[];
    validationLoadedFor=d.participant.id;
    setTimeout(()=>{refreshValidationUI();loadNotifications().catch(()=>{})},0);
    return json({participant:d.participant,state:d.state||{}});
  }catch(e){if(e?.status===401)clearLocal();return json({error:e?.message||'signin_required'},e?.status||500)}
}
  async function progress(body){
  if(!getToken())return json({error:'signin_required'},401);
  try{
    await secureCall('student_progress',{ue:'28',moduleScores:body?.moduleScores||{},cardsSeen:Array.isArray(body?.cardsSeen)?body.cardsSeen:[],casesDone:Array.isArray(body?.casesDone)?body.casesDone:[],lastDiagnosticTopic:body?.lastDiagnosticTopic||null,attemptedTopic:body?.attemptedTopic||null});
    return json({ok:true});
  }catch(e){return json({error:e?.message||'sync_error'},e?.status||500)}
}
  async function heartbeat(){
  if(!getToken())return json({error:'signin_required'},401);
  try{await secureCall('student_heartbeat',{ue:'28'});return json({ok:true})}
  catch(e){return json({error:e?.message||'sync_error'},e?.status||500)}
}
  async function validate(method,body){
  if(!getToken())return json({error:'signin_required'},401);
  try{
    if(method==='GET'){const d=await secureCall('student_session',{ue:'28'});return json({validatedModules:d.state?.validatedModules||[]})}
    const topic=(body?.topic||'').trim();if(!topic)return json({error:'topic_required'},400);
    const d=await secureCall('student_validate',{ue:'28',topic,type:'revise'});return json({validatedModules:d.validatedModules||[]});
  }catch(e){return json({error:e?.message||'sync_error'},e?.status||500)}
}

  async function loadValidationMap(force=false){
  const part=getLocal();if(!part?.id||!getToken())return;
  if(!force&&validationLoadedFor===part.id)return;
  const d=await secureCall('student_session',{ue:'28'});
  validationMap=d.state?.moduleValidations||{};
  legacyValidated=d.state?.validatedModules||[];
  validationLoadedFor=part.id;refreshValidationUI();
}
  function validationDone(topic,type){return !!validationMap?.[topic]?.[type]}
  async function togglePartValidation(topic,type){
  const part=getLocal();if(!part?.id||!topic||!getToken())return;
  const d=await secureCall('student_validate',{ue:'28',topic,type});
  validationMap=d.moduleValidations||{};legacyValidated=d.validatedModules||[];validationLoadedFor=part.id;refreshValidationUI();
}
  function addPartButton(host,topic,type,label){
    if(!host||!topic) return;
    let row=host.querySelector(':scope > .ue28-validation-row[data-type="'+type+'"]');
    if(!row){
      row=document.createElement('div');row.className='ue28-validation-row';row.dataset.type=type;
      row.innerHTML='<span></span><button type="button" class="ue28-valid-btn"></button>';
      host.appendChild(row);
      row.querySelector('button').onclick=async e=>{e.preventDefault();e.stopPropagation();const b=e.currentTarget,r=b.closest('.ue28-validation-row');b.disabled=true;try{await togglePartValidation(r.dataset.topic,r.dataset.type)}finally{b.disabled=false}};
    }
    row.dataset.topic=topic;
    const done=validationDone(topic,type),b=row.querySelector('button');
    row.querySelector('span').textContent=done?'✓ Validation enregistrée':'Validation personnelle';
    b.textContent=done?'✓ '+label+' validé':'Valider '+label;
    b.classList.toggle('done',done);
  }
  function updateJourneyProgress(){
    const total=42;
    const done=Object.values(validationMap||{}).reduce((sum,v)=>sum+['test','revise','case'].filter(k=>v?.[k]===true).length,0);
    const pct=Math.max(0,Math.min(100,Math.round(done/total*100)));
    const el=document.getElementById('learn-total-value');
    if(el) el.textContent=pct+'%';
  }
  function refreshValidationUI(){
    document.querySelectorAll('.diag-card').forEach(card=>{const topic=card.querySelector('h3')?.textContent?.trim();if(topic)addPartButton(card,topic,'test','le test')});
    const stage=document.getElementById('study-stage'),studyTopic=document.getElementById('study-title')?.textContent?.trim();
    if(stage && !stage.hidden && studyTopic){
      let host=stage.querySelector('.ue28-study-validation');
      if(!host){host=document.createElement('div');host.className='ue28-study-validation';const layout=stage.querySelector('.study-layout');stage.insertBefore(host,layout||null)}
      addPartButton(host,studyTopic,'revise','la révision');
    }
    const activeCase=document.querySelector('.case-pick.active small')?.textContent?.trim();
    const decision=document.querySelector('.decision-card');
    if(decision&&activeCase)addPartButton(decision,activeCase,'case','le cas clinique');
    document.querySelectorAll('.module-card[data-topic]').forEach(card=>{
      const topic=card.dataset.topic; let chips=card.querySelector('.ue28-validation-chips');
      if(!chips){chips=document.createElement('div');chips.className='ue28-validation-chips';card.appendChild(chips)}
      chips.innerHTML=['test','revise','case'].map((t,i)=>'<span class="'+(validationDone(topic,t)?'done':'')+'">'+(validationDone(topic,t)?'✓ ':'')+['Test','Réviser','Cas'][i]+'</span>').join('');
    });
    updateJourneyProgress();
  }
  async function notificationApi(action,extra={}){
  const part=getLocal();if(!part?.id||!getToken())throw new Error('signin_required');
  if(action==='student_list')return secureCall('notifications_list',{});
  if(action==='student_read')return secureCall('notifications_read',{notification_id:extra.notification_id});
  throw new Error('notification_action_invalid');
}){
    const part=getLocal(); if(!part?.id) throw new Error('signin_required');
    const r=await nativeFetch(SB+'/functions/v1/notifications-api',{method:'POST',cache:'no-store',headers:{apikey:KEY,'Content-Type':'application/json','Cache-Control':'no-cache'},body:JSON.stringify({action,student_id:part.id,first_name:part.firstName,password:PASS,...extra})});
    const data=await r.json().catch(()=>({})); if(!r.ok) throw new Error(data.error||'notification_error'); return data;
  }
  async function loadNotifications(){
    if(!getLocal()?.id) return;
    try{const d=await notificationApi('student_list');notifications=d.notifications||[]}catch{notifications=[]}
    const unread=notifications.filter(n=>!n.read_at).length,b=document.getElementById('ue28-notif-count');
    if(b){b.textContent=unread;b.hidden=!unread}
  }
  function escapeHtml(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  async function openNotifications(){
    await loadNotifications();
    const modal=document.getElementById('ue28-notif-modal'),list=document.getElementById('ue28-notif-list'); if(!modal||!list)return;
    list.innerHTML=notifications.length?notifications.map(n=>'<button type="button" class="ue28-notif-item '+(!n.read_at?'unread':'')+'" data-id="'+n.id+'"><small>'+new Date(n.created_at).toLocaleString('fr-FR')+'</small><p>'+escapeHtml(n.message)+'</p><b>'+(n.read_at?'✓ Lu':'Marquer comme lu')+'</b></button>').join(''):'<p class="ue28-empty">Aucun message pour le moment.</p>';
    list.querySelectorAll('[data-id]').forEach(btn=>btn.onclick=async()=>{const n=notifications.find(x=>x.id===btn.dataset.id);if(n&&!n.read_at){await notificationApi('student_read',{notification_id:n.id});await openNotifications()}});
    modal.hidden=false;
  }
  function injectExtras(){
    if(!document.getElementById('ue28-extra-style')){
      const s=document.createElement('style');s.id='ue28-extra-style';s.textContent=`
      .ue28-validation-row{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:12px;padding:10px 12px;border:1px solid #d7e5e2;border-radius:11px;background:#f8fcfb;font-size:12px}.ue28-valid-btn{border:0;border-radius:9px;padding:9px 11px;background:#071d35;color:#fff;font-weight:850;cursor:pointer}.ue28-valid-btn.done{background:#dff4eb;color:#16624e;border:1px solid #a9d9c9}.ue28-study-validation{margin:0 0 16px}.ue28-study-validation>.ue28-validation-row{margin-top:0}.ue28-validation-chips{display:flex;gap:5px;flex-wrap:wrap;margin-top:10px}.ue28-validation-chips span{font-size:10px;padding:4px 6px;border-radius:999px;background:#eef3f3;color:#7a898d}.ue28-validation-chips span.done{background:#dff4eb;color:#16624e;font-weight:850}.ue28-notif-btn{position:relative;border:1px solid #d9e3e4;background:#fff;border-radius:10px;padding:8px 10px;cursor:pointer;font-size:18px}.ue28-notif-count{position:absolute;right:-5px;top:-6px;min-width:18px;height:18px;padding:0 5px;border-radius:999px;background:#c54454;color:#fff;font:800 10px/18px system-ui;text-align:center}.ue28-notif-modal{position:fixed;inset:0;background:#082b33c7;z-index:10000;display:grid;place-items:center;padding:16px}.ue28-notif-modal[hidden]{display:none}.ue28-notif-card{width:min(620px,100%);max-height:88dvh;overflow:auto;background:#fff;border-radius:20px;padding:20px}.ue28-notif-head{display:flex;align-items:center;justify-content:space-between;gap:12px}.ue28-notif-close{border:0;border-radius:9px;padding:8px 11px;cursor:pointer}.ue28-notif-list{display:grid;gap:9px;margin-top:14px}.ue28-notif-item{border:1px solid #dfe8e9;background:#fff;border-radius:12px;padding:12px;text-align:left;cursor:pointer}.ue28-notif-item.unread{border-left:4px solid #0d776f;background:#f4fbf9}.ue28-notif-item small{color:#718187}.ue28-notif-item p{white-space:pre-wrap}.ue28-empty{color:#718187}@media(max-width:560px){.ue28-validation-row{align-items:stretch;flex-direction:column}.ue28-valid-btn{width:100%}}`;
      document.head.appendChild(s);
    }
    const top=document.querySelector('.topbar');
    if(top&&!document.getElementById('ue28-notif-btn')){
      const b=document.createElement('button');b.id='ue28-notif-btn';b.className='ue28-notif-btn';b.type='button';b.setAttribute('aria-label','Messages');b.innerHTML='🔔 <span id="ue28-notif-count" class="ue28-notif-count" hidden>0</span>';b.onclick=openNotifications;const streak=top.querySelector('.streak');top.insertBefore(b,streak||null);
    }
    if(!document.getElementById('ue28-notif-modal')){
      const m=document.createElement('div');m.id='ue28-notif-modal';m.className='ue28-notif-modal';m.hidden=true;m.innerHTML='<div class="ue28-notif-card"><div class="ue28-notif-head"><div><span class="eyebrow accent">MESSAGES IFSI COACH</span><h2>Messages d’Alexandre</h2></div><button type="button" class="ue28-notif-close">Fermer</button></div><div id="ue28-notif-list" class="ue28-notif-list"></div></div>';document.body.appendChild(m);m.querySelector('.ue28-notif-close').onclick=()=>m.hidden=true;m.onclick=e=>{if(e.target===m)m.hidden=true};
    }
  }

  window.fetch=async function(input,init={}){
    try{
      const raw=typeof input==='string'?input:input?.url;
      if(!raw) return nativeFetch(input,init);
      const u=new URL(raw,location.href);
      if(u.origin!==location.origin || !u.pathname.startsWith('/api/')) return nativeFetch(input,init);
      const method=(init.method||(typeof input!=='string'&&input?.method)||'GET').toUpperCase();
      let body={}; if(init.body){try{body=JSON.parse(init.body)}catch{}}
      if(u.pathname==='/api/join'&&method==='POST') return await join(body);
      if(u.pathname==='/api/session'&&method==='GET') return await session();
      if(u.pathname==='/api/progress'&&method==='POST') return await progress(body);
      if(u.pathname==='/api/heartbeat'&&method==='POST') return await heartbeat();
      if(u.pathname==='/api/logout'&&method==='POST'){try{await secureCall('logout',{})}catch{}clearLocal();return json({ok:true})}
      if(u.pathname==='/api/validate'&&(method==='GET'||method==='POST')) return await validate(method,body);
      if(u.pathname.startsWith('/api/admin/')) return json({error:'central_admin'},401);
      return json({error:'not_found'},404);
    }catch(e){console.error('IFSI Coach sync error',e);return json({error:'sync_error',detail:String(e?.message||e)},500)}
  };

  function installUI(){
    injectExtras();
    document.addEventListener('click',e=>{
      const a=e.target.closest('[data-view="admin"],[data-mobile-view="admin"],.admin-login-link');
      if(a){e.preventDefault();location.href=ADMIN;return}
      if(e.target.closest('.module-card,.diag-card,[data-diagnostic-filter],[data-case-pick],[data-case-filter],.task-button,#review-btn,#start-btn')) setTimeout(refreshValidationUI,120);
    },true);
    setInterval(()=>{injectExtras();if(getLocal()?.id){loadValidationMap().catch(()=>{});refreshValidationUI()}},1000);
    setInterval(()=>{if(getLocal()?.id)loadNotifications().catch(()=>{})},30000);
    loadValidationMap(true).catch(()=>{});loadNotifications().catch(()=>{});
    const badge=document.createElement('div');badge.textContent='SYNC v5';badge.style.cssText='position:fixed;right:8px;top:8px;z-index:9999;font:700 9px system-ui;padding:4px 6px;border-radius:7px;background:#071d35;color:#8ff0c8;opacity:.72';document.body.appendChild(badge);setTimeout(()=>badge.remove(),5000);
  }
  const legacy=document.createElement('script');
  legacy.src='/legacy-app.js?v=20260914-5';legacy.async=false;
  legacy.onload=installUI;
  legacy.onerror=()=>document.body.insertAdjacentHTML('beforeend','<div style="position:fixed;inset:20px;z-index:999;background:white;padding:30px;border-radius:18px">Impossible de charger IFSI Coach UE 2.8. Actualise la page.</div>');
  document.body.appendChild(legacy);
})();
