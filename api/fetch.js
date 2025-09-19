module.exports = async function (req, res) {
  try{
    const url = req.query.url;
    if(!url) return res.status(400).json({error:'Missing url'});
    const u = new URL(url);
    if(!/^https?:$/.test(u.protocol)) return res.status(400).json({error:'Bad protocol'});

    const ac = new AbortController();
    const t = setTimeout(()=>ac.abort(), 8000);

    const r = await fetch(u.toString(), { redirect:'follow', signal: ac.signal, headers:{'user-agent':'Mozilla/5.0 SEO-Tools Bot'} });
    clearTimeout(t);

    const ct = r.headers.get('content-type') || '';
    const cl = Number(r.headers.get('content-length')||0);
    const status = r.status;

    let text = '';
    if(ct.includes('text/html') || ct.includes('text/plain')){
      const buf = await r.arrayBuffer();
      const slice = buf.byteLength > 512*1024 ? buf.slice(0, 512*1024) : buf;
      text = new TextDecoder('utf-8', {fatal:false}).decode(slice);
    }

    res.setHeader('Access-Control-Allow-Origin','*');
    res.json({ status, contentType: ct, contentLength: cl, url: r.url, text });
  }catch(e){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.status(500).json({error:String(e)});
  }
}
