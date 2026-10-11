# Mexico City 2027: family trip hub

A small mobile-first site for the family to follow the trip planning. Plain HTML/CSS/JS plus two Vercel serverless functions. No build step.

## What it does
- Home, Dates, Flights, Stay and Guide pages, all driven by `data.js`.
- First visit asks "Who's this?" and records that person as having opened the site (`api/hello.js`).
- `/admin` shows who has opened it and when (`api/visits.js`, protected by `ADMIN_KEY`).

## Deploy on Vercel
1. In Vercel, **Add New > Project**, import this repo, and deploy (no settings needed).
2. **Storage tab > Create database > Upstash Redis** (free plan), then connect it to this project. This adds the `KV_REST_API_*` or `UPSTASH_REDIS_REST_*` environment variables.
3. **Settings > Environment Variables:** add `ADMIN_KEY` with a long random value only you know.
4. **Deployments > Redeploy** so the new variables take effect.
5. Visit `/admin`, enter the key, and see who has opened the site.

Without steps 2 to 4 the site still works; it just doesn't record visits.

## Updating content
Edit `data.js` (dates, hotels, flight status, to-dos). Pushing to `main` redeploys automatically.

## Privacy
Never put passport numbers, booking confirmation numbers or card details in this repo. The site sends `noindex` headers, but anyone with the link can read it.
