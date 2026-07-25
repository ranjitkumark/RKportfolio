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
├── vercel.json          ← SPA rewrite (kept for future sub-pages)
├── src/
│   ├── main.jsx
│   ├── App.jsx                ← app shell: header, home page, chat overlay
│   ├── index.css
│   ├── components/
│   │   ├── Header.jsx         ← Work/Life toggle + Resume + Ask Ranjit
│   │   ├── Footer.jsx         ← gray band footer
│   │   ├── CaseStudyCard.jsx  ← mockup + LIVE status + case study row
│   │   └── ChatOverlay.jsx    ← full-screen AI chat (design-matched)
│   ├── data/
│   │   └── caseStudies.js     ← the 4 featured case studies
│   └── pages/
│       └── Home.jsx           ← hero, role, case studies, archive, quote, contact
├── api/
│   └── chat.js            ← serverless function, holds API keys, calls Claude/OpenAI
├── package.json
├── vite.config.js
├── tailwind.config.js     ← semantic color tokens (ink, body, accent, navy, live, mint…)
└── postcss.config.js
```

The site is a single page now (About/Work/Writing were removed to match the new design). The
header's **Work / Life** toggle switches the body content between professional case studies and a
personal-interests section — the "Life" content is a placeholder since no design was provided for
it yet.

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

`api/chat.js` already supports both — it routes on a `provider` field (`"claude"` or `"openai"`) in
the request body. The chat overlay currently always sends `"claude"` (no picker in the new design);
change the hardcoded `provider: "claude"` in `src/components/ChatOverlay.jsx` if you want to default
to ChatGPT instead, or add a picker back in. Default model is Claude (`claude-sonnet-4-6`); ChatGPT
uses `gpt-4o-mini` — change either model string in `api/chat.js` if you want something else.

## Content to personalize

- `api/chat.js` — `RESUME_CONTEXT` at the top holds everything the assistant knows about Ranjit.
  Update it as his experience changes; this is the single source of truth (nothing else needs editing).
- `src/data/caseStudies.js` — the 4 featured case studies (title, description, link). Point `href` at
  real case study pages once they exist.
- Add an actual resume PDF to `public/ranjit-resume.pdf` — the "Resume" button already links there.
- `src/pages/Home.jsx` — the "Life" section content (interests, currently reading) is placeholder;
  swap in real content whenever ready.

## Responsiveness notes

- Layout is fluid down to small phone widths (~375px): hero type scales via `sm`/`md` breakpoints,
  case study rows stack to a single column on mobile, and the header switches from a centered
  single row to a stacked, centered layout so nothing overlaps or clips.

## Next steps

- **Archive / "Browse the archive"** and **"Read my design philosophy"** links are placeholders
  (`href="#"`) — point them at real pages once that content exists.
- Swap the placeholder resume link for a real PDF (`public/ranjit-resume.pdf`).
- Add a real Medium link in `src/pages/Home.jsx` (currently `href="#"`).
- The **Life** tab content has no design reference yet — currently a simple interests/reading
  placeholder section; send a design when ready and I'll build it to match.
