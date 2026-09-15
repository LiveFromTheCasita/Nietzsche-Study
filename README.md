# Nietzsche Study

The source for [thewilltopower.com](https://www.thewilltopower.com), an independent Nietzsche reading guide edited by Bob Smith. Built with Next.js App Router and React.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Copy `.env.example` to `.env.local` if you need to configure analytics or Google Search Console verification. The canonical URL defaults to the production domain; set `NEXT_PUBLIC_SITE_URL` for an intentional domain change.

## Verify and build

```sh
npm test
npm start
```

The content check verifies passage references, course navigation, and dates for the 1887 additions to *The Gay Science*. The production build prerenders the reading guides. Before publishing a UI change, also check mobile navigation, navigator filters and browser Back, and course progress after a reload.

## Content and routes

- `content/corpusData.js`: works, passage references, essential selections, and developmental arcs. Keep a passage's own date and period when it differs from its work's first edition.
- `content/studyContent.js`: theme descriptions, book summaries, essay descriptions, and relationships.
- `content/beginnerCourse.json`: the complete seven-session course. Lessons give exact assignments and external reading links; do not reproduce the assigned primary passages.
- `content/papers/` and `content/genealogy*Essay.js`: individual interpretive essays.
- `/lessons`, `/works`, `/themes`, and `/navigator`: the main reading destinations.
- `/about`, `/method`, and `/editions`: editorial responsibility, reading standards, and translation guidance.
- `/the-will-to-power`: the posthumous notebook compilation, distinguished from Nietzsche's finished works.

Course progress is stored locally in the reader's browser, under a versioned key. Navigator themes, filters, tabs, and open passages are encoded in the URL and support browser history. Neither feature requires an account. Old homepage section links and `/corpus` lead to the corresponding study pages.

## Publication

The repository's existing Vercel integration builds production from `main`. Review changes and run the checks before updating that branch. No database or new environment variables are required by the course and navigation features.
