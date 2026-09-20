const UPSTREAM='https://bzmwtjkjuihbrhiumdul.supabase.co/functions/v1/coach-api';
const KEY='sb_publishable_k2hNQO9qxjtwCMlnAMjzwg_yOiEb2RI';

export default async function handler(req,res){
  if(req.method!=='POST'){
    res.setHeader('Allow','POST');
    return res.status(405).json({error:'method_not_allowed'});
  }
  try{
    const headers={
      'Content-Type':'application/json',
      'apikey':KEY
    };
    const token=req.headers['x-coach-session'];
    if(token)headers['x-coach-session']=String(token);
    const upstream=await fetch(UPSTREAM,{
      method:'POST',
      headers,
      body:JSON.stringify(req.body||{})
    });
    const text=await upstream.text();
    res.status(upstream.status);
    res.setHeader('Cache-Control','no-store');
    res.setHeader('Content-Type',upstream.headers.get('content-type')||'application/json');
    return res.send(text);
  }catch(error){
    console.error('coach proxy',error);
    return res.status(502).json({error:'upstream_unreachable'});
  }
}
