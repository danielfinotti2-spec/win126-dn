const fs = require('fs'), path = require('path');
const dir = process.argv[2];
const cfg = JSON.parse(fs.readFileSync(path.join(dir,'config.json'),'utf8'));
const ID = cfg.INJECT_DATA;
const sys = ID.apiGetSystemStatus.data.data.homeGetSysInfo;
console.log('=== homeGetSysInfo keys ===');
console.log(Object.keys(sys).join(', '));
for (const k of ['kyc','limit','siteDomain','domain','compensation','withdraw','recharge','pay','customerService','onlineService','appVersion','version']) {
  if (sys[k]) console.log('\n--- '+k+' ---\n'+JSON.stringify(sys[k],null,1).slice(0,2500));
}
console.log('\n=== apiGetGameCateExtLinkList ===');
console.log(JSON.stringify(ID.apiGetGameCateExtLinkList,null,1).slice(0,3000));
