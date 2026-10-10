---
name: Mr Gelato
description: Berry-red photographic gelato with cream actions and bold modern type.
colors:
  berry: "#a50e36"
  berry-dark: "#7f0d2c"
  berry-light: "#f7dce2"
  cream: "#fff9ef"
  cocoa: "#38251f"
  pistachio: "#d8e8b5"
  strawberry: "#f2b7c9"
  midnight: "#182b29"
  muted: "#6c584d"
  line: "#d9cfc0"
  focus: "#406548"
  field-line: "#b7aa98"
  filter-surface: "#f0e9dd"
  outline-hover: "#eee8dc"
  nav-glass: "rgba(255,249,239,.85)"
typography:
  display:
    fontFamily: "Jakarta, Arial, sans-serif"
    fontSize: "clamp(52px,6.1vw,96px)"
    fontWeight: 800
    lineHeight: 1.01
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Jakarta, Arial, sans-serif"
    fontSize: "clamp(36px,4.5vw,60px)"
    fontWeight: 800
    lineHeight: 1.1
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
  section: "clamp(64px,6.5vw,100px)"
components:
  button-primary:
    backgroundColor: "{colors.cocoa}"
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
    backgroundColor: "{colors.nav-glass}"
    textColor: "{colors.cocoa}"
---

# Design System: Mr Gelato

## Overview

**Creative North Star: "The Happy Scoop Stage"**

Berry red sets an appetising photographic stage; cream actions and heavy, close-set headings keep Mr Gelato immediate. Warm cream and cocoa support the reading surfaces, while pistachio and strawberry remain flavour accents. The approved hero direction replaces the earlier floating cone composition.

Generous section separation surrounds compact navigation and controls. Product depth responds gently to a fine pointer; coverflow exploration and the concept pint remain optional enhancements to a frontend-only sample.

**Evidence and status:** Reconciled from `src/gelato.css`, `src/berry-redesign.css`, `src/coverflow.css`, `components/ui/berry-hero-image.tsx`, `components/ui/3-d-coverflow-carousel.tsx`, `src/menu.tsx` and `public/index.html`, using PRODUCT.md and `.impeccable/hero-direction.md`. This records source behavior; it does not certify pixel-exact reference matching, whole-site review approval or physical-phone gesture quality.

**Key Characteristics:**
- Berry-red photography with cream foreground actions.
- Heavy Jakarta headings with restrained Inter reading text.
- Cream information surfaces, pill controls and rounded product imagery.
- Midnight coverflow with soft photographic depth.
- Optional motion with reduced-motion and global pause controls.

## Colors

The frontmatter owns the palette; the sidecar's synthesized eight-step ramps are panel previews, not implemented colour scales.

### Primary
- **Berry:** Homepage photographic ground, menu action and newsletter.
- **Deep Berry:** Mobile homepage navigation and menu-action hover.
- **Light Berry:** Newsletter field boundary and placeholder.

### Secondary
- **Pistachio / Strawberry:** Product staging, coverflow action and focus accents.

### Tertiary
- **Midnight:** Coverflow and footer grounds; default primary-button hover.

### Neutral
- **Cream / Cocoa:** Main surface and structural text; inverted on the hero.
- **Muted Cocoa:** Supporting reading text.
- **Warm Line / Field Line:** Dividers and form boundaries.
- **Filter Surface / Outline Hover:** Quiet controls and hover feedback.
- **Navigation Glass:** Sticky header on inner pages.
- **Leaf Focus:** Default visible keyboard focus.

**The Cocoa Structure Rule.** Keep cocoa text and outlines as the default structure on pale surfaces; use cream foregrounds on berry and midnight grounds.

## Typography

Plus Jakarta Sans is locally registered as `Jakarta`; Inter is the reading and control face. Both retain Arial/sans-serif fallbacks and ship as local variable TTF files.

**The Two Voices Rule.** Use Jakarta for brand and headings; use Inter for reading, navigation and controls.

The display role is the berry hero. At 800px it becomes `clamp(44px,9.7vw,72px)` with 1.04 line height; at 400px it is 44px. Section headlines use the headline role. Flavour titles become 18px at 800px. Hero supporting copy uses `clamp(16px,1.55vw,23px)` and 1.4 line height, becoming 17px on mobile. Story text is 16px/1.75, bounded to 60ch; flavour descriptions are 14px/1.55. Coverflow headings and card titles have contextual scales. Small annotations are not a default body-text prescription.

## Layout

The centered shell stops at 1280px. Side gutters step at 1100px, 800px and 420px using the frontmatter values; the mobile berry hero explicitly keeps 20px gutters. Sections use the recorded fluid rhythm.

The desktop berry hero is `clamp(440px,32.1vw,620px)` high with 48% copy width over a full-cover photograph. At 800px it stacks copy above a 330px cropped image, with a 650px minimum overall height. At 400px image height is 290px and minimum overall height is 630px. Homepage navigation overlays the hero; inner-page navigation remains sticky. Navigation shell minimum heights are 80px desktop and 72px mobile.

Coverflow mounts on the homepage immediately after the hero. The menu retains all 24 flavours, filters/search and its pint builder. Flavour grids use three columns, becoming two at 800px. Story, builder, visit and contact layouts stack at 800px; story fact rows become two columns with a full-width final cell.

## Elevation & Depth

Photographic scale and overlap create hero depth. Coverflow cards use `0 24px 50px #0005`; builder uses `0 20px 70px rgba(64,43,30,.08)`. Inner-page navigation has 16px backdrop blur, and expanded mobile navigation uses `0 12px 18px #38251f12`. The homepage header is transparent without blur. Story fact cells are flat, separated by warm single-pixel rules.

**The Soft Stage Rule.** Keep product depth diffuse and information surfaces quiet; use the existing frosted overlays where they support labels.

## Shapes

Pill actions and filter chips share the pill radius. Fields use the field radius, size choices the choice radius, photographs the surface radius and the pint container the feature radius. Story fact rows have square corners. Circular swatches and organic scoop silhouettes belong to product staging.

## Components

### Buttons

Default actions are cocoa pills with a 55px minimum height; hero actions invert to cream/cocoa or cream outlines with a 52px minimum, becoming 48px mobile. Fine-pointer hover is restrained; active state scales to .97. Default focus is a 3px leaf outline at 5px offset, while coverflow uses strawberry at 4px offset.

### Chips

Filters use `aria-pressed` and cocoa/cream selection. Pint choices retain native checked semantics, pale green selected fills and visible focus. Selection must remain understandable beyond colour.

### Cards / Containers

Flavour copy sits outside rounded product images. Story facts now form a ruled row without rounded tile fills. Coverflow cards use photographic vignettes, a 20px radius (16px below 600px) and centered cream text; only the active card exposes its actions to keyboard navigation.

### Inputs / Fields

Contact fields retain cream fills, warm borders and the recorded geometry. Search and newsletter inputs use underlines. Newsletter foreground and field borders follow the berry inversion. Native validation and inline statuses remain; no custom error theme is established.

### Navigation

Homepage cream links sit over berry photography, with a cream menu pill. Inner pages retain frosted cream and a berry menu pill. At 800px a disclosed vertical menu communicates expanded state and preserves keyboard focus.

### Photographic hero and coverflow

`public/assets/hero-berry.png` is illustrative strawberry/pistachio gelato with a metal scoop. A static HTML image renders before the React island. Motion uses stiffness 100 and damping 10, driving at most ±4px horizontally and ±3px vertically at scale 1.025 for fine pointers. Touch, reduced motion, hidden tabs and the global pause suppress optional pointer response. There is no WebGL dependency for this hero.

Coverflow supports arrows, dots, scoped keyboard navigation and horizontal-intent swipe. Autoplay defaults to 5000ms and pauses on hover, focus, offscreen, hidden tabs, global pause or reduced motion; manual navigation pauses until resumed. Its CTA selects the matching first pint layer, scrolls to the homepage builder and focuses the native selector. The pint is a demonstration, with no checkout.

## Do's and Don'ts

### Do:
- **Do** keep cocoa structure on pale surfaces and cream foregrounds on berry or midnight.
- **Do** keep Jakarta headings and Inter reading/control text.
- **Do** preserve keyboard focus, pressed/checked semantics and reduced-motion behavior.
- **Do** keep the homepage coverflow directly after the hero and retain the full menu collection.

### Don't:
- **Don't** present illustrative imagery or location previews as verified brand evidence.
- **Don't** make optional motion a requirement for reading or completing controls.
- **Don't** turn tiny annotations or decorative eyebrows into default reading or heading roles.
