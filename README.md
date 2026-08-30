# GAV & Associates — Demo Site (Next.js)

Recreation of the gavassociates.com Home + About pages, built with Next.js (App Router),
with a self-contained, working AI chat widget in the bottom-right corner (no external
service or API key needed — great for a client demo).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Structure

- `app/page.js` — Home page
- `app/about/page.js` — About page
- `app/components/Header.js` / `Footer.js` — shared nav/footer
- `app/components/HeroSlider.js` — rotating hero background
- `app/components/ChatWidget.js` — the chat assistant widget (edit `KB` in this file
  to change its canned answers, or swap in a real API call later)
- `app/globals.css` — all site + widget styling

## Notes

- Images are pulled from Unsplash by URL — swap in your own photography before going live.
- The chatbot currently uses simple keyword matching (`KB` array in `ChatWidget.js`).
  To connect a real AI backend, replace the `getReply()` logic with a `fetch()` call to
  your API/LLM endpoint.
