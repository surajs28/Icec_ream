# Mr Gelato frontend sample

Berry photography leads into ivory café surfaces, chocolate text and wine-berry actions. Visit us is the primary hero action. The six-signature homepage coverflow starts with Strawberry Cheese Cake, followed by four café menu categories, a fictional interior preview and visit planning. The menu retains all 24 incumbent flavours plus the six signatures (30 entries), filters/search and the concept pint builder. The builder is on the menu only. This static frontend has no live orders or backend.

Run from this source folder with Node.js installed:

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd run preview
```

Open http://localhost:4188. Preview serves public/; publish its contents for static hosting. The local server is the intended preview. npm.cmd run typecheck checks TypeScript separately; build includes it.

Edit HTML in public/, shared styles/interactions in src/gelato.css and src/gelato.js, and current overrides in last-imported src/ivory-redesign.css. Earlier hero styles remain in src/berry-redesign.css; carousel styles are in src/coverflow.css. React mounts are in src/menu.tsx. Hero source is components/ui/berry-hero-image.tsx; carousel source is components/ui/3-d-coverflow-carousel.tsx. Signature names, atlas positions, illustrative copy and scoop colours are centralized in src/signature-flavours.ts and shared with the menu. Rebuild after changing source.

Local Jakarta/Inter fonts and generated illustrative photos are included. The current default carousel uses a local signature atlas; no API key is required. The retained src/gelato-3d.js is built but is not loaded by the current hero.

Read INTEGRATION.md for aliases, atlas mapping and behavior, DESIGN.md for the current source-derived system, and SAMPLE-NOTES.md before release. Food photos, café interior, pint sizes/toppings and location map are illustrative. Final dishes, recipes, prices and availability require confirmation. Address, hours, social links, dietary/health facts and final brand identity are pending. Newsletter input is neither sent nor stored. These docs do not assert whole-site review approval, exact mockup fidelity or physical-phone gesture verification.
