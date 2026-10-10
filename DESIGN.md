---
name: Mr Gelato
description: Warm playful gelato with sculptural product stages and crisp modern type.
colors:
  cream: "#fff9ef"
  cocoa: "#38251f"
  pistachio: "#d8e8b5"
  strawberry: "#f2b7c9"
  midnight: "#182b29"
  muted: "#6c584d"
  line: "#d9cfc0"
  herb: "#537342"
  focus: "#406548"
  field-line: "#b7aa98"
  filter-surface: "#f0e9dd"
  outline-hover: "#eee8dc"
  nav-glass: "rgba(255,249,239,.85)"
typography:
  display:
    fontFamily: "Jakarta, Arial, sans-serif"
    fontSize: "clamp(56px,6.6vw,92px)"
    fontWeight: 800
    lineHeight: 1.05
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
  action-gap: "13px"
  bento-gap: "18px"
  grid-gap: "24px"
  gutter: "48px"
  gutter-tablet: "30px"
  gutter-mobile: "20px"
  gutter-small: "16px"
  section: "100px"
  section-mobile: "65px"
components:
  button-primary:
    backgroundColor: "{colors.cocoa}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
    height: "55px"
  button-primary-hover:
    backgroundColor: "{colors.midnight}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cocoa}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
    height: "55px"
  button-outline-hover:
    backgroundColor: "{colors.outline-hover}"
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
  bento-card:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.cocoa}"
    rounded: "{rounded.surface}"
    padding: "28px"
  navigation:
    backgroundColor: "{colors.nav-glass}"
    textColor: "{colors.cocoa}"
---

# Design System: Mr Gelato

## Overview

**Creative North Star: "The Happy Scoop Stage"**

Warm cream and cocoa make an approachable setting for gelato. Pistachio and strawberry add flavour and playfulness; bold modern headings keep the composition direct. Rounded product stages, photographic panels and quiet frosted overlays give the collection room to lead.

The system pairs generous section separation with compact navigation and controls. Motion responds to exploration: the realistic gelato hero floats and tilts gently, flavour cards tilt and a custom pint changes as choices are made. The hero uses a transparent product image with no WebGL dependency.

**Evidence and status:** Source-extracted from `work/motion-build/gelato.css`, `gelato.js`, `gelato-3d.js` and `outputs/site/index.html`, reconciled with `work/design-direction-v4.md` and PRODUCT.md's latest approved implementation. This approved identity replacement supersedes the teal/serif system archived in `work/design-before-v4/`. No rendered desktop or mobile screenshots were available. WebGL output, animation feel, font rendering and physical-device gestures remain unverified. This document records implementation, not launch approval.

**Key Characteristics:**
- Warm cream surfaces with cocoa structure.
- Heavy Jakarta headings with restrained Inter body text.
- Rounded product imagery, pill controls and asymmetrical bento highlights.
- Frosted overlays and limited illuminated borders.
- Optional motion with a photographic 3D fallback.

## Colors

The palette follows gelato flavours around a warm neutral base; frontmatter values are normative.

The sidecar's eight-step OKLCH ramps are synthesized panel previews, not implemented colour scales. Its scoped component snippets expand the source CSS for independent static previews; selection and menu interaction remain in the site JavaScript.

### Primary
- **Cocoa:** Default text, thin action outlines and primary buttons.
- **Pistachio:** Product halos and highlighted story tiles; herb provides the darker companion for text and icons.

### Secondary
- **Strawberry:** The playful hero stamp and newsletter surface.

### Tertiary
- **Midnight:** Footer ground and primary-button hover.

### Neutral
- **Cream:** Body, default sections, cards and field fills.
- **Muted Cocoa:** Supporting copy.
- **Warm Line / Field Line:** Separators and field boundaries respectively.
- **Filter Surface / Outline Hover:** Quiet filled controls and outline-button feedback.
- **Navigation Glass:** Translucent cream for the sticky header.
- **Leaf Focus:** Visible keyboard focus.

**The Cocoa Structure Rule.** Keep dark cocoa text and outlines as the default structure on pale flavour surfaces.

## Typography

**Display Font:** Plus Jakarta Sans, locally registered under the CSS family `Jakarta`, with Arial/sans-serif fallback.
**Body Font:** Inter, locally hosted, with Arial/sans-serif fallback.

**Character:** Heavy sans-serif headlines provide playful scale. Inter keeps navigation, product descriptions and forms calm and legible. Variable TTF fonts ship locally, without a runtime remote font service.

### Hierarchy
- **Display:** Base hero uses the frontmatter role. At 1100px it becomes 74px; at 800px it uses `clamp(54px,9vw,74px)`; at 420px it becomes 51px. Inner pages use smaller contextual clamps.
- **Headline:** Section headings use the headline role; newsletter and occasion headings are contextual variants.
- **Title:** Flavour titles use the title role, with a final mobile override to 18px. Bento titles use 22px, with a larger wide tile.
- **Body:** Base text uses the body role. Hero lead is 17px/1.7. Final story copy is 15px desktop and 14px mobile, bounded to 58ch on desktop. Final flavour descriptions are 14px desktop and 13px mobile.
- **Label:** Actions and contact labels use the label role. Navigation is 13px/550 desktop and 16px mobile. Form controls grow to 16px mobile.

**The Two Voices Rule.** Use Jakarta for brand and headings; use Inter for reading, navigation and controls.

Small annotations below the body scale are not a general reading-text prescription; their rendered legibility remains unverified.

## Layout

The centered shell stops at 1280px. Side gutters step through the frontmatter desktop, tablet, mobile and small-phone values at 1100px, 800px and 420px. Standard sections use the recorded section rhythm, reduced at 800px.

Desktop flavour collections use three columns with 30px row gaps and the recorded grid-gap between columns; below 800px they use two. Hero, story, builder, visit and contact layouts become single-column at 800px. Story bento moves from `1fr 1fr 2fr` to two columns with the wide tile spanning both; its intermediate tablet ratio is `1fr 1fr 1.5fr`. Contact starts at `1.2fr 1fr`. Footer starts with four unequal columns and becomes two, with its brand spanning both.

The sticky header is 91px tall desktop and 76px mobile. At 800px its navigation becomes a disclosed vertical panel. Safe-area top padding, `viewport-fit=cover`, touch manipulation and a hero pointer tilt limited to fine pointers exist in source. Actual phone behavior remains a device verification gate.

## Elevation & Depth

Depth combines tonal surfaces, diffuse shadows and translucent cream overlays. The header uses 16px backdrop blur; photo and scene overlays use 12px. Bento tiles remain tonal. The builder uses a single-pixel pistachio-to-pink illuminated edge.

### Shadow Vocabulary
- **Builder ambient:** `0 20px 70px rgba(64,43,30,.08)` separates preview and controls.
- **Action hover:** `0 6px 18px #38251f22` appears for fine hover pointers.
- **Mobile navigation:** `0 12px 18px #38251f12` separates the expanded menu.
- **Product cutout:** `drop-shadow(12px 23px 18px rgba(45,56,24,.13))` grounds the pint.

**The Soft Stage Rule.** Use diffuse shadows for product depth and frosted cream for overlays; keep information cards primarily tonal.

## Shapes

Rounded rectangles frame imagery and information with the surface radius; the builder uses the feature radius with inner 19px corners. Fields use the field radius, rectangular choices the choice radius, and actions/filter chips use the pill radius. Circular halos, swatches and organic scoop silhouettes are product-specific forms. Thin warm outlines define controls and dividers.

## Components

### Buttons
Confident cocoa pills and outlined peers share the frontmatter geometry. The recorded height is a minimum in source. Primary hover becomes midnight with an ambient shadow; outline hover uses its neutral fill. Active state scales to .97. Fine-pointer magnetic tracking is restrained and disabled with reduced motion. All controls inherit a visible 3px leaf focus outline with a 5px offset. Disabled buttons reduce opacity to .5.

### Chips
Filter chips sit in a filled pill group; cocoa/cream indicates pressed state via `aria-pressed`. Native checked size/topping choices use a pale green fill and visible keyboard focus. Preserve selected-state semantics beyond colour.

### Cards / Containers
Flavour cards place copy outside rounded photographic panels. Desktop imagery is 275px high, stepping to 230px at 800px and 175px at 420px. A frosted category pill labels imagery. Bento uses the recorded padding and surface radius; its wide highlight is pistachio. Fine-pointer tilt and modest image scale provide exploration feedback.

### Inputs / Fields
Contact fields use cream fill, a warm field stroke, field radius and recorded padding; text is 14px desktop and 16px mobile. Search and newsletter fields have underline boundaries and also grow to 16px mobile. Native validation and inline status text exist; no custom error/disabled-field visual system has been established.

### Navigation
Sticky frosted cream, a compact Jakarta wordmark and Inter links. Current page gets a small cocoa line; fine-pointer hover uses green. The mobile menu reveals vertical navigation and communicates expanded state. Keyboard focus stays visible.

### Product stage and pint builder
A photorealistic AI-generated strawberry, pistachio and chocolate waffle cone sits over a pistachio orbit. The transparent image has a 900ms entrance, a subtle six-second float, and desktop pointer tilt using a spring with stiffness 100 and damping 10. Motion pauses offscreen, in hidden tabs and when reduced motion is enabled. This is an animated image rather than a rotatable mesh. The earlier Three.js source remains available but is not loaded by this hero. The builder combines a shaped scoop preview with native layer, size and topping controls. Neither is a confirmed catalogue photograph or an ordering flow.

Motion uses `cubic-bezier(.23,1,.32,1)`: control transforms 160ms, image/tilt transitions 250ms, section reveals 550ms and hero entrance 650ms with 65ms stagger. The headline gradient runs once over 3.5s. Reduced-motion CSS removes transitions and smooth scrolling; JavaScript gates tilt, magnetism and reveals. The footer toggle pauses optional motion. These timings describe source intent and have not passed rendered motion review.

## Do's and Don'ts

### Do:
- **Do** use cocoa structure on pale cream and flavour surfaces.
- **Do** keep Jakarta headings and Inter reading/control text.
- **Do** preserve keyboard focus, pressed/checked semantics and reduced-motion behavior.
- **Do** use soft product depth, frosted overlays and restrained illuminated edges.
- **Do** verify desktop, mobile, 3D fallback and real touch behavior before visual approval.

### Don't:
- **Don't** restore the superseded teal/serif system on new v4 surfaces.
- **Don't** turn tiny annotations into the default body-text scale.
- **Don't** present illustrative imagery, quotes or location layouts as verified brand evidence.
- **Don't** make optional motion or WebGL a requirement for reading or completing controls.

