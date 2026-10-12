# Mexico City 2027: family trip hub

A small mobile-first, read-only site for the family to follow the trip plans. Plain HTML/CSS/JS, no build step, no database, no accounts, and nothing stored beyond the plans themselves.

## Pages
Home, Proposed Dates, Flights, Experiences, Food, Around town and Guide, all driven by `data.js`.

## Updating content
Edit `data.js`: add a line to `news` for each update, keep `decisions` to what is still open, and change dates, hotels or to-dos as plans firm up. Pushing to `main` redeploys on Vercel automatically.

## Deploy
Import the repo in Vercel and deploy. No settings or environment variables are needed.

## Privacy
Never put passport numbers, booking confirmation numbers or card details in this repo. The site sends `noindex` headers, but anyone with the link can read it.
