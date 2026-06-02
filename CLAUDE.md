# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Next.js Version Warning

This project uses **Next.js 16.2.1** with **React 19** — both have breaking changes from what most training data covers. Before writing any Next.js or React-specific code, read the relevant guide in `node_modules/next/dist/docs/`. Heed deprecation notices.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite exists in this project.

## Architecture

Single-page portfolio site. The only route is `app/page.tsx`, which composes all page sections in order: `Hero → About → Skills → Projects → Contact`.

**Data layer:** `data/projects.ts` is the sole source of truth for project content. It exports the `Project` type and `projects` array. Adding or modifying a project means editing only this file — all rendering is data-driven.

**Component organization:**
- `components/layout/` — `Navbar` (fixed bottom pill, smooth-scrolls to section anchor IDs) and `Footer`
- `components/sections/` — one file per page section; sections marked `"use client"` where they need interactivity
- `components/ui/` — reusable primitives (`Section`, `Button`, `Container`, `Square`, `Deck`, `DeckCard`, `ProjectCard`, `ProjectModal`)

**Section wrapper:** `Section` enforces consistent vertical padding and responsive max-width. Pass `id` for anchor targets and `background` to override the default `bg-primary-1050` class.

**Projects flow:** `Projects.tsx` holds `activeProject` state. Clicking a `ProjectCard` sets it; this renders `ProjectModal`, which implements a full accessibility pattern — focus trap, scroll lock, Escape key, enter/exit CSS transitions, and return focus on close.

**About section:** Uses `useBreakpoint` (from `hooks/useBreakpoint.ts`) to reposition decorative `Square` elements at the `md` breakpoint. `Deck` + `Deck.css` implement the stacking card scroll animation.

## Styling

Tailwind v4 — uses `@import "tailwindcss"` in `globals.css`, not the v3 `@tailwind` directives.

Custom token defined in `globals.css` via `@theme inline`:
- `primary-1050` → `#010e16` (near-black dark background used throughout)

Custom utility classes in `globals.css` (use these, don't recreate them):
- `glass` — frosted glass effect (`bg-black/10 backdrop-blur-sm`)
- `btn` / `btn-hero` — interactive button styles with inset box-shadow on hover/focus
- `nav-button` — pill nav segment styling (first/last child get rounded ends)
- `bg-about` — radial purple-tinted dark gradient used in About sections
- `custom-scrollbar` — styled scrollbar for `ProjectModal`

Icons come from `@heroicons/react/24/outline` and `/24/solid`.
