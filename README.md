# Ranjit Kumar — Portfolio

React (Vite) frontend + a Vercel serverless function that proxies chat requests to Claude or ChatGPT,
so your API keys stay on the server and never ship to the browser.

```
Visitor → your-domain.vercel.app
               ↓
          index.html / React UI loads
               ↓
       Visitor asks a question
               ↓
     fetch POST → /api/chat
               ↓
    api/chat.js (Vercel, server-side secret keys)
    calls Anthropic (Claude) or OpenAI (ChatGPT)
               ↓
       Reply comes back as JSON
               ↓
     Chat bubble shows the answer
```

## Project structure

```
├── index.html
├── vercel.json          ← SPA rewrite so /about, /work, /writing resolve on direct load
├── src/
│   ├── main.jsx
│   ├── App.jsx           ← router shell (Home / About / Work / Writing) + shared Header
│   ├── index.css
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── CaseStudyCard.jsx         ← split layout, used on Home
│   │   ├── StackedCaseStudyCard.jsx  ← full-width stacked layout, used on About
│   │   └── mocks.jsx                 ← dashboard/app mockup visuals shared across pages
│   └── pages/
│       ├── Home.jsx      ← hero, ask bar, case studies, AI chat overlay
│       ├── About.jsx     ← hero illustration, case study highlights, experience/skills
│       ├── Work.jsx      ← placeholder listing (no dedicated design yet)
│       └── Writing.jsx   ← blog listing (placeholder posts)
├── api/
│   └── chat.js            ← serverless function, holds API keys, calls Claude/OpenAI
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and add your real API keys:
   ```bash
   cp .env.example .env.local
   ```
3. **Important:** `npm run dev` (plain Vite) will *not* run `/api/chat.js` — Vite only serves the
   frontend. To test the chat locally, use the Vercel CLI instead, which runs both the frontend and
   the serverless function together:
   ```bash
   npm install -g vercel
   vercel dev
   ```

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Import the repo in [vercel.com/new](https://vercel.com/new). Vercel auto-detects Vite for the
   frontend and treats everything in `/api` as serverless functions — no extra config needed.
3. In the Vercel project → **Settings → Environment Variables**, add:
   - `ANTHROPIC_API_KEY`
   - `OPENAI_API_KEY`
4. Deploy. Your chat will call `https://your-domain.vercel.app/api/chat` automatically since the
   frontend uses a relative `/api/chat` path.
5. Point your custom domain (e.g. `agent.yourdomain.com` or your main domain) at the Vercel project
   in Vercel's Domains settings.

## Switching between Claude and ChatGPT

The chat header has a Claude / ChatGPT toggle. Whichever is selected is sent as `provider` in the
request body; `api/chat.js` routes to the matching API. Default model is Claude
(`claude-sonnet-4-6`); ChatGPT uses `gpt-4o-mini` — change either model string in `api/chat.js` if
you want something else.

## Content to personalize

- `api/chat.js` — `RESUME_CONTEXT` at the top holds everything the assistant knows about Ranjit.
  Update it as his experience changes; this is the single source of truth (nothing else needs editing).
- `src/App.jsx` — `CASE_STUDIES` array holds the three featured project cards; swap in real case study
  links once those pages exist.
- Add an actual resume PDF to `public/ranjit-resume.pdf` — the "Download Resume" button already links
  there.

## Responsiveness notes

- Layout is fluid down to small phone widths (~320px): hero type scales via `sm`/`md` breakpoints,
  case study cards stack vertically on mobile, and the header nav tightens its spacing.
- The scattered "sticker" illustrations in the footer band use an absolute-positioned layout on
  `md+` screens and switch to a simple wrapped flex layout on mobile so nothing overlaps or clips.
- The footer is embedded directly into the dotted background band on the home view (no visual seam),
  and reverts to a plain footer under the chat view, matching the two designs provided.

## Next steps

- **Work page** doesn't have a dedicated design yet — it currently reuses the Home page's split
  case-study cards as a placeholder so the nav link isn't broken. Send a design when ready and I'll
  build it properly (the old site had more case studies — Optage, Onecto, Smart Cowork, PashminaGoat,
  TML, Linict — that could round it out).
- **Writing page** posts are all Lorem Ipsum placeholders — swap the `POSTS` array in
  `src/pages/Writing.jsx` for real content whenever it's ready; the markup won't need to change.
- Swap the placeholder resume link for a real PDF (`public/ranjit-resume.pdf`).
- Add real social links (Dribbble, Twitter) in `src/components/Footer.jsx`.
- The About page hero illustration (meditating character + skill bubbles) is a simplified CSS/SVG
  approximation of the Figma art, not a pixel match — let me know if you want it closer to the
  original illustration style.
