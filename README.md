# win126-dn

Legacy `index.html` static snapshot of `https://betwin126.com/?cid=295044` (siteCode 12151, PT-BR/BRL, skinType 6, lobby template), captured 2026-11-11T02:22:03Z.

The file is the original server response with the two origins rewritten by name:

| placeholder | replacement |
|---|---|
| `4f010` | `4f011` |
| `4f011` | `4gikiw-12151-ppp` |
| `4f012` | `s3.sa-east-1.amazonaws.com` |

All runtime API payloads are already baked into the inline script as `window.LOBBY_SITE_CONFIG`. No backend is contacted to render the HTML.

## Deploy (GitHub Pages)

Repo root is already publishable. No build step.

1. Push to `main`.
2. Settings → Pages → Source: `Deploy from a branch` → Branch `main`, folder `/ (root)` → Save.
3. Site appears at `https://<owner>.github.io/win126-dn/` within ~60 s.

Page assets are requested from `/assets/theme-0/…`, `/cocos/…`, `/siteadmin/…`, which resolve against the Pages origin and will 404. The skeleton renders, the shell does not.

For the shell to load, prepend `<base href="https://betwin126.com/">` to `<head>`. That points every relative asset at the live origin.

### Cloudflare Pages

Build command: none. Output directory: `/`. Same caveats.

## Contents

- `index.html` — 205,150 B, 13 inline scripts, 6 external module entries.
- `NOTES-PT.md` — full capture notes.
- `_ref/` — fetch script and parsed artifacts.

## Behavior notes

- Cloudflare edge, cf-cache-status HIT, origin S3 `s3.sa-east-1.amazonaws.com`.
- Client-side redirect logic keys on `__device_redirect`, `tgma`, `tgmg`, `tgWebAppData`.
- Legacy browsers fall through to `/pages/browser/index.html`.
- `frameProxyInit` (CGFrameStorageProxy 1.0) mirrors localStorage across iframes via `postMessage`, 102400-byte chunks.
