# Mr Gelato frontend sample

The current hero uses `public/assets/hero-realistic.png`, an illustrative AI-generated gelato cone with floating motion and spring-based pointer tilt. It is an animated product image rather than a rotatable mesh. Hero motion is implemented in `src/gelato.js` and `src/gelato.css`.

Open `public/index.html` for the prebuilt sample. No API key or server is required.

To edit and rebuild, install Node.js, then run:
```
npm install
npm run build
npm run preview
```
Preview: http://localhost:4188

Edit HTML in `public/`, styles in `src/gelato.css`, interactions in `src/gelato.js`, and the procedural cone in `src/gelato-3d.js`.

All generated photography is illustrative. Vegan suitability, nutrition, testimonials, current contacts/locations/hours/social links require approval. Newsletter and pint functions are demonstrations; there is no backend.

The menu coverflow uses React and TypeScript. Its reusable component lives in `components/ui/3-d-coverflow-carousel.tsx`, with styles in `src/coverflow.css` and its page entry in `src/menu.tsx`. Read `INTEGRATION.md` for the shadcn-compatible aliases, props, and setup instructions. Run `npm run typecheck` to check TypeScript.

Read SAMPLE-NOTES.md before public release. The new coverflow photographs are illustrative stock imagery, rather than photographs of actual Mr Gelato products.
