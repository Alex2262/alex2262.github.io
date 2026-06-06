# Personal Site

Alexander Tian's personal website — a minimal, text-first static site built with
[Astro](https://astro.build/) and plain CSS. No client-side framework.

## Local development

```bash
npm install
npm run dev
```

Then open the printed URL (usually `http://localhost:4321`).

To build the production site locally:

```bash
npm run build      # outputs to dist/
npm run preview    # serve the built site
```

## Add a blog post

Create a new Markdown file in `src/content/writing/`:

```md
---
title: "Post title"
date: "2026-06-04"
description: "Short description."
tags: ["systems"]
draft: false
---

Write content here.
```

Set `draft: true` while a post is in progress — drafts are visible in
`npm run dev` but excluded from the production build.

## Add a project

Create a new Markdown file in `src/content/projects/`:

```md
---
title: "Project title"
date: "2026-06-04"
description: "One-line summary."
tags: ["ml-systems", "triton"]
category: "ML systems / kernels"
featured: false
links:
  github: "https://github.com/Alex2262/example"
---

A paragraph or two about the project.
```

Projects are grouped by `category` on the projects page and sorted by `date`
(newest first). Existing categories: `ML systems / kernels`,
`Algorithms / engines`, `Machine learning experiments`,
`Simulations / older projects`. New categories appear automatically.

## Editing common pages

- Home page: `src/pages/index.astro`
- Projects: `src/content/projects/`
- Writing: `src/content/writing/`
- Interests: `src/pages/interests.md`
- Resume PDF: `public/resume.pdf`

## Deploy

Push to `main`. The GitHub Actions workflow in `.github/workflows/deploy.yml`
builds the site and deploys it to GitHub Pages automatically.

This repo is configured for a **user site** at
`https://alex2262alexander.github.io` (see `site` in `astro.config.mjs`). If you
move it to a project repo instead, add a matching `base` (e.g.
`base: "/personal-site"`) in `astro.config.mjs`.

One-time setup: in the repo's **Settings → Pages**, set the source to
**GitHub Actions**.
