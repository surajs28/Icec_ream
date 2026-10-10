# React islands integration

The static site uses React, TypeScript, Motion and Tailwind CSS v4 with a shadcn-compatible source layout. `src/menu.tsx` mounts the hero image into `#berry-hero-image` when present, and mounts coverflow into homepage `#flavours` only when `body[data-page="index.html"]` matches. The menu page keeps its static 24-flavour filters/search and pint controls. No context provider or additional state-management library is needed.

- Hero: `components/ui/berry-hero-image.tsx`; asset `public/assets/hero-berry.png`.
- Carousel: `components/ui/3-d-coverflow-carousel.tsx`; demo `components/demo.tsx`.
- React entry and homepage pint handoff: `src/menu.tsx`.
- Shared Tailwind entry: `src/gelato.css`; scoped styles: `src/coverflow.css` and `src/berry-redesign.css`.
- Utility: `lib/utils.ts`; strict checking and `@/*` root aliases: `tsconfig.json`.
- shadcn configuration: `components.json`, with `@/components/ui` resolving to `components/ui`.

## Run and rebuild

```powershell
npm.cmd ci
npm.cmd run typecheck
npm.cmd run build
npm.cmd run preview
```

Preview is http://localhost:4188 and serves `public/`. Build runs typecheck, bundles islands through esbuild into `public/menu.js`, bundles static scripts, and compiles Tailwind to `public/gelato.css`. Publish `public/` contents for static hosting. This project is already configured; no shadcn initialization is needed to run it.

## Data and behavior

The homepage highlights five flavour/pint stories, using illustrative generated imagery and stock photography. Stock origins are recorded in `public/assets`; stock URLs can require network access and fall back to a local illustrative cone. These are not verified catalogue photographs or bestseller evidence.

Carousel props are `items`, `sectionLabel`, `autoplay`, `autoplayDelay`, `className` and `onCtaClick`. `CarouselItem` includes `imgAlt` for descriptive alternative text. Autoplay defaults to true with a 5000ms delay (minimum 3000ms). The homepage callback matches `titleLine1` against the first native layer selector, dispatches its change event, scrolls to `#builder` and focuses the selector. The custom-pint item guides users to choose layers without inventing a matching flavour.

Autoplay pauses on pointer hover, keyboard focus, offscreen, hidden tabs, global Pause motion or OS reduced motion. Manual navigation pauses until resumed. Arrow keys are scoped to the carousel; inactive cards are excluded from keyboard navigation. Swipe distinguishes horizontal intent from vertical scrolling. Empty, single, two-item and changing item arrays are handled in the component.

The hero has static HTML imagery before JavaScript mounts. Motion applies a gentle fine-pointer spring (stiffness 100, damping 10); touch, reduced motion, hidden tabs and global pause suppress optional pointer response. The hero does not load the retained procedural Three.js implementation.

The sample has no API keys, checkout, newsletter storage or backend. Pint controls and downloads are demonstrations. Physical-phone gesture quality and whole-site visual approval must not be inferred from these integration notes.
