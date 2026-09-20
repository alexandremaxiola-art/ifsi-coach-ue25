(function(){
const {modules,sources}=window.UE12_DATA;
const API='/api/coach12',SESSION='ifsi-coach-ue12-participant-v1',TOKEN='ifsi-coach-ue12-token-v1',STORE='ifsi-coach-ue12-state-v1';
const base={moduleScores:{},cardsSeen:[],casesDone:[],lastDiagnosticTopic:null,moduleValidations:{},validatedModules:[],streak:1};
let state=loadLocal(),participant=null,filter='Tous',diagFilter='Tous',caseFilter='Tous',study=null,studyCards=[],cardIndex=0,revealed=false;
let quizModule=null,quizQuestions=[],quizIndex=0,quizChoice=null,quizValidated=false,quizAnswers=[];
let caseIndex=0,caseChoice=null,caseValidated=false,syncTimer=null,pendingTopic=null,notifications=[];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function loadLocal(){try{return{...base,...JSON.parse(localStorage.getItem(STORE)||'{}')}}catch{return{...base}}}
function saveLocal(){localStorage.setItem(STORE,JSON.stringify(state));refresh()}
function setSession(p,t){participant=p;sessionStorage.setItem(SESSION,JSON.stringify(p));if(t)sessionStorage.setItem(TOKEN,t)}
function readSession(){try{return JSON.parse(sessionStorage.getItem(SESSION)||'null')}catch{return null}}
function token(){return sessionStorage.getItem(TOKEN)||''}
function clearSession(){sessionStorage.removeItem(SESSION);sessionStorage.removeItem(TOKEN)}
async function secure(action,body={}){
  const r=await fetch(API,{method:'POST',cache:'no-store',headers:{'Content-Type':'application/json',...(token()?{'x-coach-session':token()}:{})},body:JSON.stringify({action,...body})});
  const d=await r.json().catch(()=>({}));
  if(!r.ok){const e=new Error(d.error||'Erreur de synchronisation');e.status=r.status;throw e}
  return d;
}
function mergeServer(d){
  if(!d)return;
  state={...state,...d,moduleScores:d.moduleScores||state.moduleScores||{},cardsSeen:Array.isArray(d.cardsSeen)?d.cardsSeen:state.cardsSeen||[],casesDone:Array.isArray(d.casesDone)?d.casesDone:state.casesDone||[],moduleValidations:d.moduleValidations||state.moduleValidations||{},validatedModules:Array.isArray(d.validatedModules)?d.validatedModules:state.validatedModules||[]};
  saveLocal();
}
function applyParticipant(p){
  participant=p;const n=p?.firstName||'Étudiant';
  $('#profile-name').textContent=n;$('#avatar').textContent=n.slice(0,2).toUpperCase();$('#hello').textContent='BONJOUR '+n.toUpperCase()+' · UE 1.2 S3';
  $('#app').classList.remove('hidden');$('#login').classList.add('hidden');
}
async function init(){
  const p=readSession();if(!p||!token()){showLogin();return}
  try{const d=await secure('student_session');setSession(d.participant);applyParticipant(d.participant);mergeServer(d.state);await loadNotifications()}catch(e){clearSession();showLogin()}
}
function showLogin(){$('#login').classList.remove('hidden');$('#app').classList.add('hidden')}
$('#login-form').onsubmit=async e=>{
  e.preventDefault();const err=$('#login-error'),btn=e.currentTarget.querySelector('button');err.textContent='';btn.disabled=true;
  try{const d=await secure('student_join',{first_name:$('#login-name').value.trim(),password:$('#login-password').value});setSession(d.participant,d.token);applyParticipant(d.participant);mergeServer(d.state);await loadNotifications()}
  catch(x){err.textContent=x.message||'Connexion impossible.'}finally{btn.disabled=false}
};
async function logout(){try{await secure('logout')}catch{}clearSession();location.reload()}
$('#logout').onclick=logout;
function sync(attempt=null){
  if(!participant||!token())return;
  if(attempt)pendingTopic=attempt;
  clearTimeout(syncTimer);
  syncTimer=setTimeout(async()=>{try{await secure('student_progress',{moduleScores:state.moduleScores||{},cardsSeen:state.cardsSeen||[],casesDone:state.casesDone||[],lastDiagnosticTopic:state.lastDiagnosticTopic||null,attemptedTopic:pendingTopic});pendingTopic=null;$('#sync-status').textContent='Progression synchronisée'}catch{$('#sync-status').textContent='Sauvegarde locale · sync en attente'}},250);
}
function save(attempt=null){saveLocal();sync(attempt)}
function moduleById(id){return modules.find(m=>m.id===id)}
function show(id){
  $$('.view').forEach(v=>v.classList.toggle('active',v.id===id));
  $$('.nav[data-view]').forEach(n=>n.classList.toggle('active',n.dataset.view===id));
  const labels={home:'Accueil',learn:'Réviser',diagnostic:'Diagnostic',quiz:'Diagnostic',cases:'Situations',results:'Ma progression'};
  $('#crumb').textContent='S3 › UE 1.2 › '+(labels[id]||'Santé publique');
  if(id==='learn')renderModules();if(id==='diagnostic')renderDiagnostics();if(id==='cases')renderCases();if(id==='results')renderResults();if(id==='home')refresh();
  scrollTo({top:0,behavior:'smooth'});
}
$$('[data-view]').forEach(b=>b.onclick=()=>show(b.dataset.view));
$$('[data-go]').forEach(b=>b.onclick=()=>show(b.dataset.go));
$$('[data-quick]').forEach(b=>b.onclick=()=>show(b.dataset.quick));
function avgScore(){
  const vals=Object.values(state.moduleScores||{}).map(Number).filter(Number.isFinite);
  return vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):null;
}
function validationsDone(){
  let n=0;for(const m of modules){for(const t of ['test','revise','case'])if(state.moduleValidations?.[m.title]?.[t])n++}return n;
}
function refresh(){
  const a=avgScore();$('#home-score').textContent=a===null?'À évaluer':a+'%';
  $('#home-questions').textContent=String(Object.keys(state.moduleScores||{}).length*10);
  $('#home-cards').textContent=state.cardsSeen.length+' / '+(modules.length*10);
  $('#home-cases').textContent=state.casesDone.length+' / '+modules.length;
  $('#case-count').textContent=state.casesDone.length+'/'+modules.length;
  $('#diag-count').textContent=Object.keys(state.moduleScores||{}).length+'/'+modules.length;
  const pct=Math.round(validationsDone()/(modules.length*3)*100);$('#learn-progress').textContent=pct+'%';$('#side-progress').style.width=pct+'%';
  $('#streak').textContent=(state.streak||1)+' jour'+((state.streak||1)>1?'s':'');
}
function makeFilters(host,active,setter){
  const cats=['Tous',...new Set(modules.map(m=>m.category))];
  host.innerHTML=cats.map(c=>'<button class="filter '+(c===active?'active':'')+'" data-cat="'+c+'">'+c+'</button>').join('');
  host.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>setter(b.dataset.cat));
}
function validationChips(m){
  return ['test','revise','case'].map((t,i)=>'<span class="'+(state.moduleValidations?.[m.title]?.[t]?'done':'')+'">'+(state.moduleValidations?.[m.title]?.[t]?'✓ ':'')+['Test','Révision','Situation'][i]+'</span>').join('');
}
function renderModules(){
  makeFilters($('#learn-filters'),filter,v=>{filter=v;renderModules()});
  const list=modules.filter(m=>filter==='Tous'||m.category===filter);
  $('#module-grid').innerHTML=list.map((m,i)=>'<button class="module-card" data-module="'+m.id+'" style="--color:'+m.color+'"><span class="pill">'+m.category+'</span><h3>'+m.title+'</h3><p>'+m.short+'</p><div class="module-foot"><span>10 cartes · ouvrir →</span><strong>'+(state.moduleScores?.[m.title]!==undefined?state.moduleScores[m.title]+'%':'—')+'</strong></div><div class="chips">'+validationChips(m)+'</div></button>').join('');
  $('#module-grid').querySelectorAll('[data-module]').forEach(b=>b.onclick=()=>openModule(b.dataset.module));
}
function openModule(id){
  study=moduleById(id);if(!study)return;studyCards=[...study.cards];cardIndex=0;revealed=false;show('learn');
  $('#study').classList.remove('hidden');$('#study-category').textContent=study.category;$('#study-title').textContent=study.title;$('#study-source').textContent='Source principale : '+study.source;
  $('#lesson').innerHTML=Object.entries(study.sections).map(([h,items],i)=>'<details '+(!i?'open':'')+'><summary>'+h+'</summary><ul>'+items.map(x=>'<li>'+x+'</li>').join('')+'</ul></details>').join('');
  renderFlash();renderValidation($('#revise-validation'),study.title,'revise','Valider ma révision');
  $('#study').scrollIntoView({behavior:'smooth'});
}
$('#close-study').onclick=()=>$('#study').classList.add('hidden');
function renderFlash(){
  const c=studyCards[cardIndex];if(!c)return;revealed=false;$('#flash-front').hidden=false;$('#flash-back').hidden=true;$('#flash-front').textContent=c.q;$('#flash-back').textContent=c.a;$('#flash-count').textContent='Carte '+(cardIndex+1)+' / '+studyCards.length;$('#flashcard .eyebrow').textContent='QUESTION';
}
$('#flashcard').onclick=()=>{revealed=!revealed;$('#flash-front').hidden=revealed;$('#flash-back').hidden=!revealed;$('#flashcard .eyebrow').textContent=revealed?'RÉPONSE':'QUESTION'};
function nextCard(known){const c=studyCards[cardIndex];if(known&&!state.cardsSeen.includes(c.id))state.cardsSeen.push(c.id);cardIndex=(cardIndex+1)%studyCards.length;save();renderFlash()}
$('#again').onclick=()=>nextCard(false);$('#know').onclick=()=>nextCard(true);
$('#shuffle').onclick=()=>{studyCards.sort(()=>Math.random()-.5);cardIndex=0;renderFlash()};
async function toggleValidation(topic,type){
  try{const d=await secure('student_validate',{topic,type});state.moduleValidations=d.moduleValidations||{};state.validatedModules=d.validatedModules||[];saveLocal();refresh();renderModules();renderDiagnostics();renderCases();return true}catch{return false}
}
function renderValidation(host,topic,type,label){
  const done=!!state.moduleValidations?.[topic]?.[type];
  host.innerHTML='<button class="'+(done?'ghost':'primary')+'" type="button">'+(done?'✓ '+label+' validée':label)+'</button>';
  host.querySelector('button').onclick=async e=>{e.currentTarget.disabled=true;await toggleValidation(topic,type);renderValidation(host,topic,type,label)};
}
function distractors(m,idx){
  const ans=[];for(let o=1;ans.length<3&&o<m.cards.length;o++){const a=m.cards[(idx+o)%m.cards.length].a;if(!ans.includes(a))ans.push(a)}return ans;
}
function buildQuiz(m){
  return m.cards.slice(0,10).map((c,i)=>{
    const opts=[c.a,...distractors(m,i)];const seed=(i*3+m.id.length)%opts.length;const rotated=[...opts.slice(seed),...opts.slice(0,seed)];
    return{q:c.q,options:rotated,ok:rotated.indexOf(c.a),why:c.a};
  });
}
function renderDiagnostics(){
  makeFilters($('#diag-filters'),diagFilter,v=>{diagFilter=v;renderDiagnostics()});
  const list=modules.filter(m=>diagFilter==='Tous'||m.category===diagFilter);
  $('#diag-grid').innerHTML=list.map(m=>'<article class="module-card" style="--color:'+m.color+'"><span class="pill">'+m.category+'</span><h3>'+m.title+'</h3><p>'+m.short+'</p><div class="module-foot"><span>'+(state.moduleScores?.[m.title]!==undefined?'Dernier score':'Non évalué')+'</span><strong>'+(state.moduleScores?.[m.title]!==undefined?state.moduleScores[m.title]+'%':'—')+'</strong></div><button class="primary start-diag" data-diag="'+m.id+'">Commencer · 10 questions →</button><div class="chips">'+validationChips(m)+'</div></article>').join('');
  $('#diag-grid').querySelectorAll('[data-diag]').forEach(b=>b.onclick=()=>startQuiz(b.dataset.diag));
}
function startQuiz(id){quizModule=moduleById(id);quizQuestions=buildQuiz(quizModule);quizIndex=0;quizChoice=null;quizValidated=false;quizAnswers=[];state.lastDiagnosticTopic=quizModule.title;show('quiz');renderQuiz()}
function renderQuiz(){
  const q=quizQuestions[quizIndex];quizChoice=null;quizValidated=false;$('#quiz-position').textContent='Question '+(quizIndex+1)+' / '+quizQuestions.length;$('#quiz-bar').style.width=((quizIndex+1)/quizQuestions.length*100)+'%';$('#quiz-topic').textContent=quizModule.title;$('#quiz-kicker').textContent=quizModule.category.toUpperCase();$('#quiz-question').textContent=q.q;$('#quiz-feedback').className='feedback';$('#quiz-feedback').textContent='';$('#quiz-next').disabled=true;$('#quiz-next').textContent='Valider';
  $('#quiz-options').innerHTML=q.options.map((o,i)=>'<button class="answer" data-answer="'+i+'"><span>'+String.fromCharCode(65+i)+'</span><div>'+o+'</div></button>').join('');
  $('#quiz-options').querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(quizValidated)return;quizChoice=+b.dataset.answer;$('#quiz-options').querySelectorAll('.answer').forEach((z,i)=>z.classList.toggle('selected',i===quizChoice));$('#quiz-next').disabled=false});
}
function validateQuiz(){
  const q=quizQuestions[quizIndex];if(quizChoice===null)return;
  if(!quizValidated){quizValidated=true;const ok=quizChoice===q.ok;quizAnswers.push(ok);$('#quiz-options').querySelectorAll('.answer').forEach((b,i)=>{if(i===q.ok)b.classList.add('correct');if(i===quizChoice&&i!==q.ok)b.classList.add('wrong')});$('#quiz-feedback').className='feedback show '+(ok?'good':'bad');$('#quiz-feedback').innerHTML='<b>'+(ok?'Bonne réponse.':'À revoir.')+'</b> '+q.why;$('#quiz-next').textContent=quizIndex===quizQuestions.length-1?'Voir mon bilan':'Question suivante';return}
  if(quizIndex<quizQuestions.length-1){quizIndex++;renderQuiz()}else finishQuiz()
}
async function finishQuiz(){
  const score=Math.round(quizAnswers.filter(Boolean).length/quizQuestions.length*100);state.moduleScores={...(state.moduleScores||{}),[quizModule.title]:score};state.lastDiagnosticTopic=quizModule.title;save(quizModule.title);if(!state.moduleValidations?.[quizModule.title]?.test)await toggleValidation(quizModule.title,'test');show('results');
}
$('#quiz-next').onclick=validateQuiz;$('#quiz-skip').onclick=()=>{quizChoice=-1;validateQuiz()};$('#quit-quiz').onclick=()=>show('diagnostic');
function renderCases(){
  makeFilters($('#case-filters'),caseFilter,v=>{caseFilter=v;caseIndex=0;renderCases()});
  const allowed=modules.map((m,i)=>({m,i})).filter(x=>caseFilter==='Tous'||x.m.category===caseFilter);
  if(!allowed.length)return; if(!allowed.some(x=>x.i===caseIndex))caseIndex=allowed[0].i;
  $('#case-list').innerHTML=allowed.map(x=>'<button class="case-item '+(x.i===caseIndex?'active':'')+'" data-case="'+x.i+'"><span>'+x.m.category+'</span><small>'+x.m.title+'</small></button>').join('');
  $('#case-list').querySelectorAll('[data-case]').forEach(b=>b.onclick=()=>{caseIndex=+b.dataset.case;renderCases()});
  const m=modules[caseIndex],c=m.case;$('#case-category').textContent=m.category;$('#case-title').textContent=c.title;$('#case-context').textContent=c.context;$('#case-clues').innerHTML=c.clues.map(x=>'<span>'+x+'</span>').join('');$('#case-question').textContent=c.question;
  $('#case-options').innerHTML=c.options.map((o,i)=>'<button class="answer" data-case-answer="'+i+'"><span>'+String.fromCharCode(65+i)+'</span><div>'+o+'</div></button>').join('');
  caseChoice=null;caseValidated=false;$('#case-next').disabled=true;$('#case-next').textContent='Valider mon choix';$('#case-feedback').className='feedback';$('#case-feedback').textContent='';$('#case-debrief').classList.add('hidden');$('#case-debrief').innerHTML='';
  $('#case-options').querySelectorAll('[data-case-answer]').forEach(b=>b.onclick=()=>{if(caseValidated)return;caseChoice=+b.dataset.caseAnswer;$('#case-options').querySelectorAll('.answer').forEach((z,i)=>z.classList.toggle('selected',i===caseChoice));$('#case-next').disabled=false});
  renderValidation($('#case-validation'),m.title,'case','Valider cette situation');
}
function validateCase(){
  const m=modules[caseIndex],c=m.case;if(caseChoice===null)return;
  if(!caseValidated){caseValidated=true;const ok=caseChoice===c.ok;$('#case-options').querySelectorAll('.answer').forEach((b,i)=>{if(i===c.ok)b.classList.add('correct');if(i===caseChoice&&i!==c.ok)b.classList.add('wrong')});$('#case-feedback').className='feedback show '+(ok?'good':'bad');$('#case-feedback').innerHTML='<b>'+(ok?'Bonne décision.':'Décision à revoir.')+'</b> '+c.why;$('#case-next').textContent='Voir le débrief';if(!state.casesDone.includes(m.id))state.casesDone.push(m.id);save();return}
  $('#case-debrief').innerHTML='<b>À retenir</b><p>'+c.debrief+'</p>';$('#case-debrief').classList.remove('hidden');if(!state.moduleValidations?.[m.title]?.case)toggleValidation(m.title,'case').then(()=>renderValidation($('#case-validation'),m.title,'case','Valider cette situation'));else renderValidation($('#case-validation'),m.title,'case','Valider cette situation');
}
$('#case-next').onclick=validateCase;
function renderResults(){
  const a=avgScore();$('#global-score').textContent=a===null?'—':a+'%';
  $('#mastery').innerHTML=modules.map(m=>'<div class="mastery-row"><div><strong>'+m.title+'</strong><br><small>'+m.category+'</small></div><div class="bar"><i style="width:'+(state.moduleScores?.[m.title]||0)+'%;background:'+m.color+'"></i></div><strong>'+(state.moduleScores?.[m.title]!==undefined?state.moduleScores[m.title]+'%':'—')+'</strong></div>').join('');
}
async function loadNotifications(){
  if(!token())return;try{const d=await secure('notifications_list');notifications=d.notifications||[]}catch{notifications=[]}
  const n=notifications.filter(x=>!x.read_at).length;$('#notif-count').textContent=n;$('#notif-count').hidden=!n;
}
$('#notif-btn').onclick=async()=>{await loadNotifications();$('#notif-list').innerHTML=notifications.length?notifications.map(n=>'<button class="notif '+(!n.read_at?'unread':'')+'" data-notif="'+n.id+'"><small>'+new Date(n.created_at).toLocaleString('fr-FR')+'</small><p>'+String(n.message).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))+'</p><b>'+(n.read_at?'✓ Lu':'Marquer comme lu')+'</b></button>').join(''):'<p>Aucun message.</p>';$('#notif-modal').classList.remove('hidden');$('#notif-list').querySelectorAll('[data-notif]').forEach(b=>b.onclick=async()=>{const n=notifications.find(x=>x.id===b.dataset.notif);if(n&&!n.read_at){await secure('notifications_read',{notification_id:n.id});await loadNotifications();b.classList.remove('unread');b.querySelector('b').textContent='✓ Lu'}})};
$('#notif-close').onclick=()=>$('#notif-modal').classList.add('hidden');$('#notif-modal').onclick=e=>{if(e.target===$('#notif-modal'))$('#notif-modal').classList.add('hidden')};
$('#source-list').innerHTML='<ul>'+sources.map(s=>'<li>'+s+'</li>').join('')+'</ul>';
renderModules();renderDiagnostics();renderCases();renderResults();refresh();show('home');init();
setInterval(()=>participant&&secure('student_heartbeat').catch(()=>{}),30000);
setInterval(()=>participant&&loadNotifications(),30000);
})();