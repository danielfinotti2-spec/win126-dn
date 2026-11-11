const fs = require('fs'), path = require('path');
const dir = process.argv[2];
const cfg = JSON.parse(fs.readFileSync(path.join(dir,'config.json'),'utf8'));
const strip = (o, d=0) => o; // keep all
const keys = ['siteCode','clubType','ossType','ossName','languageCode','currencyCode','skinType','type','antiSwitch','humanVerify','CREATED_TIME','sensorBaseUrl','clientType','antiDebugStatus','vestBagSaveLocal','shortcutSwitch','footerStatisticalCode','statisticalCode','technologyStatisticalCode','commonOssBucket','commonOssDomain'];
console.log('=== TOP-LEVEL ===');
for (const k of keys) console.log(k, '=', JSON.stringify(cfg[k]));
console.log('\n=== apiGetSystemStatus ===');
console.log(JSON.stringify(cfg.INJECT_DATA.apiGetSystemStatus, null, 1).slice(0, 4000));
console.log('\n=== apiGetSiteInfo ===');
console.log(JSON.stringify(cfg.INJECT_DATA.apiGetSiteInfo, null, 1).slice(0, 4000));
