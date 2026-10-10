# React coverflow integration

The site now supports React, TypeScript, Tailwind CSS v4 and a shadcn-compatible source layout. The React carousel mounts only on the menu page, keeping the remaining static pages lightweight. No context provider or extra state-management library is required.

- Reusable UI: `components/ui/3-d-coverflow-carousel.tsx`
- Demo: `components/demo.tsx`
- Page entry and pint handoff: `src/menu.tsx`
- Shared Tailwind entry: `src/gelato.css`
- Scoped carousel styles: `src/coverflow.css`
- Utility: `lib/utils.ts`
- Aliases and strict checking: `tsconfig.json`; `@/components/ui` resolves to `components/ui`.
- shadcn CLI configuration: `components.json`.

The `components/ui` folder keeps registry components in a predictable reusable location and makes the supplied import path work. The shadcn CLI uses `aliases.ui` to place new components there.

## Run and rebuild
```powershell
npm.cmd ci
npm.cmd run typecheck
npm.cmd run build
npm.cmd run preview
```

For a new project, the official shadcn setup starts with `npx.cmd shadcn@latest init`. For this existing manually configured project, do not reinitialize it and overwrite the theme. To add a future registry component, use `npx.cmd shadcn@latest add button` after reviewing its generated changes. Tailwind and TypeScript are already installed here; no additional setup is needed to run this integration.

Official configuration reference: https://ui.shadcn.com/docs/components-json

## Data and behavior
The supplied restaurant demo is adapted to five Mr Gelato flavour highlights. Three existing generated gelato photos and illustrative Unsplash stock imagery are used, with origin records in `public/assets`. No stock photograph is represented as actual Mr Gelato product photography. No bestseller claim is invented.

The complete 24-flavour filter/search menu and pint builder remain below the carousel. Its CTA selects the named flavour in the first pint layer, scrolls to the builder and focuses the native selector. Props retain `items`, `sectionLabel`, `autoplay`, `autoplayDelay`, `className`, and `onCtaClick`; `imgAlt` is added for honest alternative text.

Autoplay pauses on pointer hover, keyboard focus, offscreen, hidden tabs, global Pause Motion, or OS reduced-motion preference. Manual navigation pauses it until resumed. Keyboard arrows are scoped to the carousel and do not interfere with the pint form. Non-active cards are excluded from keyboard navigation. Swipe distinguishes horizontal intent from vertical scrolling. Empty, single, two-item and changing item arrays are handled safely.

The supplied transition-all declarations, window-wide arrow listener and fixed phone sizing were replaced with explicit transitions, scoped keyboard handling and measured responsive geometry. Physical-phone gesture validation remains separate from desktop browser viewport checks.
