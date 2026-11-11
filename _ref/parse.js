const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const src = fs.readFileSync(path.join(dir,'script_02.js'),'utf8');
const start = src.indexOf('JSON.stringify({') + 'JSON.stringify('.length;
const end = src.indexOf('),t=[[');
let lit = src.slice(start, end);
const table = [["4f010","c2NyaXB0"],["4f011","NGdpa2l3LTEyMTUxLXBwcA=="],["4f012","czMuc2EtZWFzdC0xLmFtYXpvbmF3cy5jb20="]];
for (const [k,v] of table) {
  const rep = decodeURIComponent(Buffer.from(v.split('@')[0],'base64').toString('utf8'));
  lit = lit.split(k).join(rep);
}
const expr = lit.slice(1, -1); // drop outer { } -> re-add
const obj = new Function('return ' + lit + ';')();
fs.writeFileSync(path.join(dir,'config.json'), JSON.stringify(obj, null, 1));
console.log('top keys:', Object.keys(obj).join(', '));
console.log('INJECT_DATA keys:', Object.keys(obj.INJECT_DATA).join(', '));
console.log('config.json bytes:', fs.statSync(path.join(dir,'config.json')).size);
