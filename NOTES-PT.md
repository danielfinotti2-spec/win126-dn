# betwin126.com/?cid=295044 — notas

Coleta: 2026-11-11 02:22:03Z.
Método: Node 26.1.0 `https.get`. curl 8.21.0 Schannel falha (SEC_E_NO_CREDENTIALS); Invoke-WebRequest fecha a conexão.

## Transporte
- A 104.18.12.119, 104.18.13.119. AAAA 2606:4700::6812:d77, 2606:4700::6812:c77.
- HTTP 200, sem redirect. `cf-cache-status: HIT`, `server: cloudflare`, origem S3 (`x-amz-*`).
- `strict-transport-security: max-age=15552000`, `alt-svc: h3=":443"`, `__cf_bm` HttpOnly Partitioned 30 min.
- content-length 205150.

## Render
- `data-render-init=v7.6.8`, `data-template-type=lobby`, `data-inject-game-cate=v2`.
- `data-render=Wed Nov 11 2026 02:19:17`, `data-version=Tue Nov 10 2026 01:30:09`.

## Arquitetura
- HTML único. 13 blocos inline. Sem chamada de API em runtime: tudo pré-renderizado em `window.LOBBY_SITE_CONFIG`.
- Substituição antes do parse: `4f010→4f011`, `4f011→4gikiw-12151-ppp`, `4f012→s3.sa-east-1.amazonaws.com`.
- Bloco 01: CGFrameStorageProxy 1.0, bridge `postMessage` de localStorage, chunks 102400 B.
- Bloco 03: switcher mobile/`/pc/`. Gatilhos: `__device_redirect`, `tgma`, `tgmg`, `tgWebAppData`.
- Bloco 05: retry de módulo, 3 tentativas, 500·2^n, um reload.
- Bloco 07/08/12: fallback legado → `/pages/browser/index.html`.

## Núcleo
- siteCode 12151, clubType 117, type 11, skinType 6.
- pt (id 8) + en (id 1). BRL id 11, usdtRate 5.6026503491806, siteRate 5.42, UTC-03:00.
- parentSiteCode 5091, deployEnv northAmerica.
- antiSwitch 0, humanVerify -1, antiDebugStatus 0.

## KYC / cadastro
- UI cita pagcor.ph. Todos os `legalUser*` em "0".
- regKycSwitch 0, withdrawKycSwitch 0, legalUserFreezeHours 72.
- registermode 3, cpfValidateType 2, realName 2, inviter_code_required 0, nowallet.status 1.
- loginPasswdStrengthDetectSwitch 0.
- largeAmountRange {"BRL":2000}; largeAmountMustBind email/googleAuth/phone todos 0.
- legal_config_location_detection "0", legal_config_login_status "0".

## Identificadores públicos
- GeeTest captcha: 62c528ead784206de7e6db17765b9ac0 (login, register, recharge, feedback iguais).
- Device: 9ia4hndgblg9xihxcwgdjt9ztg8sjwaf. Android: ew2as8ojhn1vyjy8xtxd0myhkxscgqay. iOS: ewkvbrw52ypxzpni86epjpwg9l19ieer.
- Google OAuth: 92637484352-qm7khdhfsulhunhpa7irqjdoc9e2sg10.apps.googleusercontent.com.
- FingerprintJS: cIMrDd2qJKZFByajXD7O.
- Sensor: https://*.svenmon.com.
- Token de config: b2e3d672-9d88-47a7-81b4-9d7ffc62054f.

## Provedores
13 WG · 200 PG · 301 PP · 313 MG · 310 JDB · 302 TADA · 358 759Gaming · 414 Dragoon Soft · 307 CP · 316 CQ9 · 32 Redtiger · 320 NetEnt · 398 Thunderkick · 362 JOKER · 124 Play'n Go · 1018 2J · 323 XGAME · 369 FC · 1043 Baison · 327 Ezugi · 317 EVO · 1045 Poly · 328 SABA · 1048 3 SING.
Categorias: Slots, Minijogos, Pescaria, Cartas, Jogo Ao Vivo, Esporte.

## Saltos externos no config
- https://betbing.co/?cid=666510
- https://888rrr18.com/?cid=1920285
- https://266win.cc/?cid=5287633
- Internos: win126.cc, telegram.me/+waoYNb67_wc2ODJl, whatsapp.com/channel/0029Vb8rE1yFy723xdfYgW1f, facebook.com/win126bet.

## Distribuição
- Android arm 1.1.80, 43413c_sn.apk, 6.95 MB.
- Android arm64 6.9.76, 43413c_nn_v3.apk, 91.83 MB (pkg64 70.61 MB).
- iOS: 2072565971846651905.mobileconfig (bucket 2hulez-12151-ppp).
- Base: https://4gikiw-12151-ppp.s3.sa-east-1.amazonaws.com/cocos/download/

## Tamanhos INJECT_DATA
apiGetSystemStatus 33.0 KB · apiGetGameSubGameSummary 29.5 KB · apiGetMessageAll 23.1 KB · apiGetGameCateExtLinkList 18.0 KB · apiGetHotGameList 17.0 KB · apiGetAllCurrency 15.6 KB · apiGetOptimizationSiteConfigV2 10.5 KB · ossGetPublicityInfoList 8.9 KB · apiGetSiteInfo 3.6 KB · restantes 24.0 KB.
