const fs = require('fs'), path = require('path');
const dir = process.argv[2];
const cfg = JSON.parse(fs.readFileSync(path.join(dir,'config.json'),'utf8'));
const ID = cfg.INJECT_DATA;
const out = [];

out.push('# Win126 — betwin126.com/?cid=295044 — static-lobby capture');
out.push('');
out.push('Fetched: 2026-11-11T02:22:03Z (Sampled at 02:19:17Z render, 02:19:19Z last-modified)'.replace(/\s*$/,''));
out.push('Origin: Cloudflare (cf-ray a589d3b4dd8a28e7-GIG, Miami), origin S3 sa-east-1, cf-cache-status HIT, content-length 205150, HTTP 200, no redirect'.replace(/%/g,'%'));
out.push('');

// head-level data attributes
const html = fs.readFileSync(path.join(dir,'body.html'),'utf8');
const attrs = {};
for (const m of html.slice(0,400).matchAll(/data-([a-z-]+)=("[^"]*"|[^\s>]+)/g)) attrs[m[1]] = m[2].replace(/"/g,'');
out.push('## Render markers');
for (const [k,v] of Object.entries(attrs)) out.push(`data-${k} = ${v}`);
out.push('');

out.push('## Site core');
const keys = ['siteCode','clubType','ossType','ossName','languageCode','currencyCode','skinType','type','antiSwitch','humanVerify','clientType','antiDebugStatus','vestBagSaveLocal','shortcutSwitch','CREATED_TIME'];
for (const k of keys) out.push(`${k} = ${JSON.stringify(cfg[k])}`);
out.push('');

out.push('## Bundle versions');
out.push('rolldown-runtime.CQz4Dufc.js / chunk-closure-startup.BpCaoJAK.js / chunk-closure-foundation.B3xgeT10.js / chunk-closure-entry-reuse.DpOJROPe.js (theme-0)'.replace(/\s+/g,' '));
out.push('optimized-chunk-1.1Y5yzUDV.js / optimized-chunk-1.xDWTrwoE.css (home preload)'.replace(/\s+/g,' '));
out.push('data-render-init = v7.6.8');
out.push('apiGetGameCateExtLinkList version = ' + (ID.apiGetGameCateExtLinkList?.data?.version || '?'));
out.push('');

out.push('## Exposed identifiers (public config, no auth)');
const sys = ID.apiGetSystemStatus.data.data.homeGetSysInfo;
out.push('geetest_captcha_id.login = ' + sys.geetest_captcha_id.login);
out.push('geetestDeviceAppId = ' + sys.geetestDeviceAppId);
out.push('geetestDeviceAndroidAppId = ' + sys.geetestDeviceAndroidAppId);
out.push('geetestDeviceIOSAppId = ' + sys.geetestDeviceIOSAppId);
out.push('google.app_id = ' + sys.google.app_id);
out.push('fingerprintJS.publicKey = ' + sys.fingerprintJS.publicKey);
out.push('sensorBaseUrl = ' + JSON.stringify(cfg.sensorBaseUrl));
out.push('');

out.push('## Third-party / cross-site endpoints in config');
const jumps = [];
(function walk(o){
  if (!o || typeof o !== 'object') return;
  if (typeof o.jumpUrl === 'string') jumps.push(o.jumpUrl);
  for (const v of Object.values(o)) walk(v);
})(ID);
for (const j of [...new Set(jumps)]) out.push('jumpUrl: ' + j);
out.push('');

out.push('## App distribution');
const app = ID.apiGetAppDownloadInfo.data.data;
for (const a of app.androidList) out.push(`android ${a.version} type=${a.type} size=${a.size}MB pkg64=${a.package64Size||'-'} -> ${a.downloadPath}`);
for (const d of app.downloadList) out.push(`ios mobileconfig -> ${d.value}`);
out.push('');
fs.writeFileSync(path.join(dir,'notes.md'), out.join('\n'));
console.log(out.join('\n'));
