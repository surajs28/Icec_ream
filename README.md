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

Functional DOM tests pass. Desktop/mobile visual review and actual WebGL playback remain open due to browser-tool connection timeout. Read SAMPLE-NOTES.md before public release.
