# Mr Gelato frontend sample

Berry-red illustrative photography leads the homepage, followed immediately by the interactive flavour coverflow. The separate menu keeps all 24 flavours, filter/search controls and its concept pint builder. This static frontend has no live checkout or backend.

Run from this source folder with Node.js installed:

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd run preview
```

Open http://localhost:4188. The preview serves `public/`; prebuilt `public/index.html` can also be opened directly, though the local server is the intended preview. `npm.cmd run typecheck` checks TypeScript separately; build includes it.

Edit HTML in `public/`, shared styles and static interactions in `src/gelato.css` and `src/gelato.js`, berry overrides in `src/berry-redesign.css`, and React mounts in `src/menu.tsx`. The hero island is `components/ui/berry-hero-image.tsx`; its image is `public/assets/hero-berry.png`. Carousel source is `components/ui/3-d-coverflow-carousel.tsx` with `src/coverflow.css`. Build emits bundled JavaScript and CSS into `public/`; publish the contents of that folder for static hosting.

Local Jakarta and Inter fonts are included. Carousel stock photos can require network access and have an illustrative local fallback. No API key is required. The retained procedural `src/gelato-3d.js` is built but is not loaded by the current hero.

Read `INTEGRATION.md` for React/TypeScript aliases and carousel props, `DESIGN.md` for the current source-derived system, and `SAMPLE-NOTES.md` before release. Photography, pint sizes/toppings and the location layout are illustrative. Newsletter input is neither sent nor stored. Nutrition, dietary suitability, current outlet details and social links require brand confirmation. The docs do not assert whole-site review approval or pixel-exact reference matching.
