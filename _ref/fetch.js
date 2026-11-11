const https = require('https');
const fs = require('fs');
const url = 'https://betwin126.com/?cid=295044';
const opts = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
    'Accept-Encoding': 'identity',
    'Referer': 'https://betwin126.com/'
  },
  timeout: 60000
};
https.setGlobalAgent ? null : null;
const req = https.get(url, opts, (res) => {
  console.log('STATUS', res.statusCode);
  console.log('HEADERS', JSON.stringify(res.headers, null, 1));
  if ([301,302,303,307,308].includes(res.statusCode) && res.headers.location) {
    console.log('REDIRECT ->', res.headers.location);
  }
  const chunks = [];
  res.on('data', c => chunks.push(c));
  res.on('end', () => {
    const buf = Buffer.concat(chunks);
    fs.writeFileSync(process.argv[2], buf);
    console.log('BYTES', buf.length);
  });
});
req.on('error', e => console.log('ERR', e.code, e.message));
req.on('timeout', () => { console.log('ERR timeout'); req.destroy(); });
