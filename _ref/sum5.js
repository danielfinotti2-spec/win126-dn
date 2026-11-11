const fs = require('fs'), path = require('path');
const dir = process.argv[2];
const cfg = JSON.parse(fs.readFileSync(path.join(dir,'config.json'),'utf8'));
const ID = cfg.INJECT_DATA;
const stats = {};
for (const [k,v] of Object.entries(ID)) {
  const s = JSON.stringify(v);
  stats[k] = (s.length/1024).toFixed(1)+'KB';
}
const lines = ['## INJECT_DATA sizes','```'];
for (const [k,v] of Object.entries(stats)) lines.push(k.padEnd(40)+v);
lines.push('```');
fs.appendFileSync(path.join(dir,'notes.md'), '\n'+lines.join('\n')+'\n');
console.log(lines.join('\n'));
