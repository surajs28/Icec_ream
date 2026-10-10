---
name: Mr Gelato
description: Ivory café surfaces, chocolate structure and wine-berry photographic appetite.
colors:
  berry: "#941b3b"
  berry-dark: "#75172f"
  berry-light: "#f3dce0"
  cream: "#fff9ef"
  cocoa: "#38251f"
  muted: "#6c584d"
  line: "#d9cfc0"
  focus: "#941b3b"
  field-line: "#b7aa98"
  filter-surface: "#f0e9dd"
  outline-hover: "#eee8dc"
  card-line: "#c7b39d"
  choice-selected: "#f5e6e9"
typography:
  display:
    fontFamily: "Jakarta, Arial, sans-serif"
    fontSize: "clamp(52px,6.6vw,96px)"
    fontWeight: 800
    lineHeight: 1.01
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Jakarta, Arial, sans-serif"
    fontSize: "clamp(32px,3.4vw,48px)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-.04em"
  title:
    fontFamily: "Jakarta, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 750
    lineHeight: 1.25
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 650
rounded:
  field: "10px"
  choice: "12px"
  photo: "12px"
  coverflow: "14px"
  surface: "16px"
  feature: "20px"
  pill: "100px"
spacing:
  hero-action-gap: "18px"
  grid-gap: "24px"
  gutter: "48px"
  gutter-tablet: "30px"
  gutter-mobile: "20px"
  gutter-small: "16px"
  section: "76px"
  section-mobile: "54px"
components:
  button-primary:
    backgroundColor: "{colors.berry}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cocoa}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  hero-primary:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.cocoa}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  hero-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  contact-field:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.cocoa}"
    rounded: "{rounded.field}"
    padding: "12px"
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.cocoa}"
    rounded: "{rounded.pill}"
    padding: "9px 17px"
  filter-chip-selected:
    backgroundColor: "{colors.cocoa}"
    textColor: "{colors.cream}"
  navigation:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.cocoa}"
---

# Design System: Mr Gelato

## Overview

**Creative North Star: "The Welcoming Scoop Café"**

Ivory connects the café reading surfaces; chocolate provides structure and wine berry accents its actions. Bright food photography carries appetite, with cream text over the berry hero and plain ivory caption bands beneath signature photography. The temporary Mr Gelato wordmark retains the locally shipped Jakarta display face and Inter reading face.

Generous section spacing surrounds compact pill controls, warm outlines and softly lifted photographic cards. Optional pointer and coverflow motion supports exploration without becoming a requirement for reading or navigation.

**Evidence and status:** Reconciled from src/gelato.css and its coverflow, berry and last-imported ivory styles; the hero/carousel components; src/signature-flavours.ts; src/menu.tsx; src/gelato.js; and public/index.html. PRODUCT.md and .impeccable/ivory-direction.md provide the approved direction and factual boundaries. This records source behavior; it does not certify exact reference fidelity, whole-site review approval or physical-phone gesture quality.

**Key Characteristics:**
- Ivory surfaces with chocolate text and wine-berry actions.
- Heavy Jakarta headings with Inter reading and controls.
- Bright illustrative photography and separate pale caption bands.
- Pill controls, warm boundaries and diffuse product depth.
- Optional motion with reduced-motion and pause behavior.

## Colors

The frontmatter owns the palette; the sidecar's synthesized eight-step ramps are panel previews, not implemented colour scales.

### Primary
- **Wine Berry:** Primary actions, carousel links, active dots and visible keyboard focus.
- **Deep Wine Berry:** Primary hover and expanded homepage mobile navigation.
- **Light Berry / Selected Berry:** Pale feedback for berry selections and inherited inversion details.

### Neutral
- **Ivory / Chocolate:** Continuous reading surfaces and structural text, inverted in the hero and chocolate footer.
- **Muted Chocolate:** Supporting prose and illustrative captions.
- **Warm Line / Field Line / Card Line:** Dividers, fields and photographic-card boundaries.
- **Filter Surface / Outline Hover:** Quiet controls and hover feedback.

**The Ivory Continuity Rule.** Keep reading sections on ivory; let photography and berry actions carry the colour changes.

**The Chocolate Structure Rule.** Keep chocolate text and outlines as the default structure on pale surfaces; use cream foregrounds on berry and chocolate grounds.

## Typography

Plus Jakarta Sans is locally registered as Jakarta; Inter is the reading and control face. Both retain Arial/sans-serif fallbacks and ship as local variable TTF files.

**The Two Voices Rule.** Use Jakarta for brand and headings; use Inter for reading, navigation and controls.

The display role belongs to the hero. At 800px it becomes clamp(44px,9.7vw,72px) with 1.04 line height; the final ivory rule repeats the scale at 760px. Section headlines use the headline role. Carousel headings begin at 30px rather than 32px and become 32px below 600px. Carousel titles use 18px/700 with -.03em tracking; café category titles are 22px/700, then 19px below 800px and 18px below 400px. Menu flavour titles use the frontmatter title role, becoming 18px at 800px.

Hero supporting copy is clamp(16px,1.48vw,22px), 1.5 line height and up to 50ch; below 760px it is 17px within 31ch. Story text is 16px/1.75 within 60ch; café experience text is 17px/1.75 within 44ch, becoming 16px below 800px. Caption text is 12px and is not a default body-text prescription. Builder supporting text now has a 12px floor for the overridden functional labels.

## Layout

The centered shell and navigation stop at 1160px. Side gutters step at 1100px, 800px and 420px using the frontmatter values; the mobile berry hero explicitly keeps 20px gutters. Main sections use 76px vertical spacing and 54px below 800px. Carousel has its own 1280px outer container with 20px padding and a 1160px heading width.

The desktop hero is clamp(440px,34.2vw,620px) high with 50% copy width over a full-cover photograph. At 800px it stacks copy above a 330px cropped image with a 650px minimum overall height; at 400px the image is 290px and the minimum is 630px. Homepage navigation overlays the hero; inner navigation is sticky ivory. Navigation minimum heights are 80px desktop and 72px mobile.

The six-signature homepage coverflow follows the hero and initially centers Strawberry Cheese Cake, showing up to five cards on desktop. It leads to the 30-entry menu, comprising six signatures and all 24 incumbent flavours. The concept pint builder is on the menu only. Café categories use four columns, becoming two at 800px. Story and café experience use two columns with 72px gaps, stacking at 800px with 30px gaps. Visit, builder and contact also stack at 800px. Café interior and location map remain fictional previews.

## Elevation & Depth

Photographic scale and coverflow perspective create depth; plain caption bands keep text separate from food. Coverflow cards use 0 12px 26px #38251f1a; the builder retains 0 20px 70px rgba(64,43,30,.08). Expanded mobile navigation uses 0 12px 18px #38251f12. Header blur is removed; inherited individual photo/map labels may still use backdrop blur.

**The Soft Stage Rule.** Keep product depth diffuse and information surfaces quiet.

## Shapes

Pill actions and filter chips share the pill radius. Fields use the field radius; café photographs use the photo radius; coverflow uses its radius, becoming the photo radius below 600px. Menu photographs retain the surface radius and the builder the feature radius. Story fact rows retain square ruled edges. Circular swatches and organic scoop silhouettes remain product-specific geometry.

## Components

### Buttons

Primary actions are wine-berry pills with a 55px minimum height; outline actions use chocolate borders. Hero actions invert to cream/chocolate or cream outlines with a 52px minimum, becoming 48px mobile. Fine-pointer hover changes colour; active state scales to .97. Default focus is a 3px berry outline at 5px offset, while coverflow uses a 4px offset. Visit us is the primary hero action, then Explore flavours.

### Chips

Filters use aria-pressed and chocolate/ivory selection. Pint choices preserve native checked semantics, pale berry selected fills and berry focus. Selection must remain understandable beyond colour.

### Cards / Containers

Flavour copy sits outside rounded menu photography. Café categories use open compositions with square photographs, titles and berry links. Coverflow cards use a 315px photo and a 90px ivory caption band, a warm outline and soft shadow; below 600px the photo is 290px. Only the active card exposes its action to keyboard navigation.

### Inputs / Fields

Contact fields retain ivory fills, warm borders and recorded geometry. Search/newsletter inputs use underlines. Native validation and inline statuses remain; no custom error theme is established. Contact opens the user's email application and newsletter input is not stored.

### Navigation

Homepage cream links sit over berry photography with an ivory menu pill. Inner pages use ivory, chocolate links and a berry menu pill. At 800px a disclosed vertical menu communicates expanded state. The temporary text identity is not a confirmed logo replacement.

### Photographic hero and coverflow

public/assets/hero-berry.png is illustrative gelato with a metal scoop. Static HTML photography renders before the React island. Its fine-pointer spring uses stiffness 100 and damping 10, at most ±4px horizontal and ±3px vertical at scale 1.025. Touch, reduced motion, hidden tabs and global pause suppress optional response. This hero has no WebGL dependency.

The carousel sources six items from src/signature-flavours.ts and the generated 3×2 signature atlas. Arrows, dots, scoped keyboard navigation and horizontal-intent swipe drive selection. Autoplay defaults to 5000ms and pauses on hover, focus, offscreen, hidden tabs, global pause or reduced motion; manual navigation pauses until resumed. Card actions link to matching menu search. Movement uses 650ms transform and 450ms opacity transitions, disabled for reduced motion. The pint remains a demonstration, with no checkout.

## Do's and Don'ts

### Do:
- **Do** keep ivory reading surfaces, chocolate structure and wine-berry actions.
- **Do** keep Jakarta headings and Inter reading/control text.
- **Do** preserve keyboard focus, pressed/checked semantics and reduced-motion behavior.
- **Do** use separate pale caption bands beneath signature photography.

### Don't:
- **Don't** present illustrative photography or location previews as verified brand evidence.
- **Don't** make optional motion a requirement for reading or completing controls.
- **Don't** introduce green UI fields or dark photographic card overlays into the ivory direction.
- **Don't** turn tiny annotations or decorative eyebrows into default reading or heading roles.

Not canonized: inherited builder-border gradient and older unused colour/hero selectors remain source drift; they are not recommendations for new surfaces. No UI repair or final visual approval is claimed by this documentation pass.
