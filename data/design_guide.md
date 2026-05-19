This is the Creative Director. We are going to take this functional but visually dated site and completely transform it into a **high-velocity, premium tech-marketing agency** platform. 

The original site relies heavily on basic blocks and unrefined typography. We are upgrading the visual language to communicate *authority, data-driven results, and elite performance*. We will use high-contrast dark sections, ultra-clean bento grids for their services, and a pristine white/surface rhythm to make their analytics charts pop. 

Here is the digital transformation blueprint.

---

## 1. Site Info
SITE_TYPE: Agency / B2B Services
HTML_LANG: nl

## 2. Visual Identity & Brand Soul

The original brand DNA relies on an electric Cyan (action/results) and a Deep Blue (trust/authority). We are keeping this palette but elevating the execution. No more muddy gradients or basic CSS blues. We are shifting to a "High-End Tech Agency" aesthetic—think Stripe or Linear, but tailored for a performance marketing brand. Sharp edges, subtle glassmorphism, glowing accents on dark modes, and crisp, spacious light modes.

```text
---DESIGN_MD_START---
## Visual Theme
High-Velocity Tech Agency. The aesthetic should feel data-driven, elite, and highly structured. We will use sharp contrasts between rich dark slates (for authority) and pristine white/cool-gray surfaces (for clarity). Interactive elements should feel snappy, using the electric cyan for primary actions to drive conversions. 

## Colors
- background: hsl(0 0% 100%)
- foreground: hsl(220 39% 11%)
- muted-foreground: hsl(215 16% 47%)
- border: hsl(214 32% 91%)
- surface: hsl(210 20% 98%)
- primary: hsl(195 96% 45%)
- primary-foreground: hsl(0 0% 100%)
- primary-hover: hsl(195 96% 40%)
- secondary: hsl(206 61% 33%)
- secondary-foreground: hsl(0 0% 100%)
- secondary-hover: hsl(206 61% 28%)
- dark: hsl(222 47% 11%)
- dark-foreground: hsl(0 0% 100%)
- dark-muted: hsl(215 20% 65%)
- dark-border: hsl(217 33% 17%)
- success: hsl(142 76% 36%)
- error: hsl(0 72% 51%)
- warning: hsl(38 92% 50%)
- favicon-color: #05b1e5

## Typography
- Headlines: plus-jakarta-sans — Premium, geometric, and tech-forward. Commands authority.
- Body: inter — Maximum legibility for data-heavy case studies and process steps.

## Components
- Buttons: Slight radius (`rounded-md`), solid vibrant fill for primary, subtle glowing shadow on hover in dark sections.
- Cards: Minimalist. On light modes: pure white background with a very subtle, sharp drop shadow (`shadow-sm` + `border border-border`). On dark modes: transparent surface with a faint border (`border-dark-border`) and subtle glassmorphism (`backdrop-blur`). 
- Sections: Spacious vertical rhythm (`py-20 md:py-32`). Use alternating backgrounds (Dark -> Light -> Surface) to naturally segment the high volume of content.

## Do's and Don'ts
- DO use the analytics images inside constrained card wrappers so they look like dashboard widgets.
- DO ensure the electric cyan is used sparingly to draw the eye exclusively to CTAs and key metrics.
- DON'T stretch the chart/document screenshots to fill the screen or use them as backgrounds.
- DON'T use full-opacity backgrounds on dark mode cards—use subtle translucency for a modern feel.
---DESIGN_MD_END---
```

## 3. Sections & Content Mapping

**RHYTHM:** Dark Hero → Light Minimal → Surface Bento → Light Grid → Minimal Certs → Dark Cards → Surface Bento → Light Two-Column → Primary CTA Reveal.

*Note: All content is mapped directly from `index.md` by reference.*

**Hero** id="hero": DARK section, layout: `hero-editorial`
- **Content:** The main heading ("Slimme advertentiefunnels..."), the introductory paragraph, the first CTA button, and the 3 bullet points with the €5.2M+ ad budget metric.
- **Visuals:** Do NOT use any of the document images as a background. Use a sleek, tech-inspired CSS gradient or a dark subtle mesh pattern (`bg-dark`). The 3 bullet points should be styled as premium badges or a clean horizontal list below the CTA.

**PainPoints** id="pain-points": LIGHT section, layout: `centered-minimal`
- **Content:** The "Worstel je met..." heading and its 3 corresponding bullet points.
- **Visuals:** Keep this ultra-clean. Present the 3 bullet points as large, typography-driven items or minimal, un-bordered cards to let the text breathe. 

**Services** id="services": LIGHT section (use `bg-surface`), layout: `bento-grid`
- **Content:** The heading "Zo helpen wij jou aan nieuwe leads..." and the 3 service offerings (Campagnes, Funnels, AI) including their short descriptions and the CTA button.
- **Visuals:** Map these 3 services into a gorgeous bento grid. 
- **Images:** Use the corresponding illustration images provided in the markdown for each service (the UI/Funnels SVG/PNGs). Constrain their size inside the cards.

**Results** id="results": LIGHT section, layout: `card-grid` (3 columns)
- **Content:** The "Enkele resultaten van onze partners" heading and the massive list of case study headings (e.g., "4.147 nieuwe bellers...", "124.106 nieuwe inschrijvingen...").
- **Visuals:** This is the core proof of the agency. Create a dense, highly professional grid of "Performance Cards". Each card gets a heading text + the associated analytics screenshot.
- **Images:** Images 6-14 (the analytics dashboards/charts). **CRITICAL DOCUMENT RULE:** Do NOT crop or stretch these charts. Use `max-w-full h-auto object-contain` inside the top half of the cards so the data remains fully readable. 

**Certifications** id="certifications": LIGHT section, layout: `centered-minimal`
- **Content:** The text "Gecertificeerd in online marketing", the rating (4.8, 44 beoordelingen).
- **Visuals:** Display this as a minimal "Trust/Logo ribbon" acting as a visual breather between the heavy grids.

**Testimonials** id="testimonials": DARK section, layout: `card-grid`
- **Content:** The "Wat een aantal partners over ons zeggen" heading and the 3 client quotes/names.
- **Visuals:** Premium dark mode cards (`bg-dark-muted/10 border-dark-border`). Quote marks should be subtly oversized in the background.

**Process** id="process": LIGHT section (use `bg-surface`), layout: `bento-grid`
- **Content:** The "Hoe het werkt" heading and the 6 numbered steps (Analyseren through Evalueren) along with the CTA button at the end.
- **Visuals:** Use large, striking typography for the numbers (1-6) using the `primary` color, mapped into a clean 6-card grid.

**About** id="about": LIGHT section, layout: `two-column`
- **Content:** The "Over Joeri Detering" heading, the two biographical paragraphs, and the CTA button.
- **Visuals:** Text on one side, image on the other. 
- **Images:** Use the portrait photo of the founder holding the blue award (mapped from the markdown under the Over Joeri section). Use `rounded-2xl` and a subtle shadow for the image.

**BottomCTA** id="contact-cta": PRIMARY section (use `bg-primary text-primary-foreground`), layout: `editorial-reveal`
- **Content:** The "Neem contact met ons op" heading, the short descriptive text about asking questions, and the final CTA button.
- **Visuals:** High-impact, vibrant section to drive final conversions. Button should be white with primary text (`bg-background text-primary`).

## 4. Navigation
- **Style:** `bg-background backdrop-blur-lg sticky top-0 border-b border-border`. We use a light background because the brand's logo text is likely dark/blue, providing maximum contrast and legibility.
- **Logo:** Image ONLY (Image 1 - `600x115px`). 
- **Classes:** Use `h-10 w-auto` for the logo. NO text next to it to avoid duplication.
- **Links:** Map the 4 menu links from the top of the markdown. Convert them to anchor links pointing to their respective sections (e.g., `#services`, `#about`, `#contact-cta`).
- **CTA:** Style the "Contact" link in the nav as a primary solid button (`bg-primary text-primary-foreground rounded-md px-4 py-2`).

## 5. Footer
- **Style:** `bg-dark text-dark-foreground`.
- **Content:** Create a structured 3-column footer. 
  - Col 1: Logo (`h-8 w-auto`, use brightness filters if needed to make it white, or use the text name if the image logo disappears on dark backgrounds) + copyright.
  - Col 2: Menu links (mapped from the "Menu" list at the bottom of `index.md`).
  - Col 3: Contact info (Address, KvK mapped from the "Contact" list at the bottom of `index.md`).
- **Bottom Bar:** Privacyverklaring & Algemene voorwaarden links aligned horizontally.

## 6. Image Constraints (CRITICAL)
This site relies heavily on *document-style images* (charts, dashboard screenshots, UI panels). 
- **Analytics Dashboards (Images 6-14 & 15):** These are DATA. Treat them as documents. They must reside *inside* constrained card containers. Use `w-full h-auto object-contain bg-surface` to ensure no data is cut off or distorted.
- **Illustrations (Images 2-5):** Use these inside the Services bento cards. `max-w-[200px] h-auto mx-auto` or similar to keep them neat and icon-like.
- **Portrait/About Image:** Constrain inside the `two-column` layout using standard aspect ratios (e.g., `aspect-square` or `aspect-[4/5] object-cover rounded-xl`). 
- **Hero:** No image provided is suitable as a full-bleed hero background. Rely on high-end CSS typography, gradients, or subtle patterns instead. DO NOT force an analytics chart into a hero background.

## 7. Image Sizing Rules

**CRITICAL: Never upscale images - causes blur/pixelation.**

| Image Type | Rule | Example |
|------------|------|---------|
| Logo (nav) | max-h-8 to max-h-12, w-auto | `class="h-10 w-auto"` |
| Logo (footer) | Same or slightly larger | `class="h-12 w-auto"` |
| Hero | Full width ONLY if image >= 1200px wide AND landscape | `class="w-full object-cover"` |
| Portrait (tall) | Constrain to actual width, never w-full | `class="max-w-[Xpx] h-auto object-cover"` |
| Content | Never exceed original dimensions | Use max-w-[Xpx] |
| Cards | Fixed aspect ratio | `class="aspect-video object-cover"` |
| Small images (<400px) | Use in cards/thumbnails only | `class="max-w-[Xpx] object-cover"` |

### Detected Images

- **SMALL** - (600x115px): Use in card/thumbnail only. Set max-w-[600px].
- Section: **Slimme advertentiefunnels voor ambiteuze ondernemers** | - Het aantrekken van de juiste klanten: Use object-cover, respect original size.
- Section: **Zo helpen wij jou aan nieuwe leads en klanten online** | Effectieve campagnes die jouw ideale klanten aantrekken op de grote platformen: Use object-cover, respect original size.
- Section: **Campagnes** | Strategisch ontworpen funnels die bezoekers naadloos omzetten in leads en klanten (2000x2000px): Use object-cover, respect original size.
- Section: **Funnels** | Slimme AI oplossingen die jouw marketing automatiseren en je concurrenten een stap voor blijven: Use object-cover, respect original size.
- Section: **Enkele resultaten van onze partners** | **Gecertificeerd in online marketing** (1000x667px): Use object-cover, respect original size.
- Section: **4.147 nieuwe bellers voor een vakman in één jaar met een conversie van 11,11%** | **Gecertificeerd in online marketing** (1000x667px): Use object-cover, respect original size.
- Section: **124.106 nieuwe inschrijvingen voor een coach op een mailinglijst binnen 18 maanden** | **Gecertificeerd in online marketing** (1112x688px): Use object-cover, respect original size.
- Section: **Lage leadkosten voor een dienstverlener via Google Ads met een conversie van 12,77% naar afspraken** | **Gecertificeerd in online marketing** (1112x688px): Use object-cover, respect original size.
- Section: **57 nieuwe afspraken in één maand voor een coach, waarvan een mooi deel klant werd** | **Gecertificeerd in online marketing** (1000x667px): Use object-cover, respect original size.
- Section: **€740.073,17 omzet in één jaar met een ROAS van 2,27 bij lage productprijzen en een marge van 95%** | **Gecertificeerd in online marketing** (1000x667px): Use object-cover, respect original size.
- Section: **Dagelijkse verkopen voor een high ticket product van een coach** | **Gecertificeerd in online marketing** (1913x1020px): Use object-cover, respect original size.
- Section: **VANKO® Lead Funnel met een conversie van 7,56% naar nieuwe afspraken** | **Gecertificeerd in online marketing** (1000x667px): Use object-cover, respect original size.
- Section: **Tientallen afspraken per maand voor een dienstverlener met een bescheiden advertentiebudget** | **Gecertificeerd in online marketing** (1000x667px): Use object-cover, respect original size.
- Section: **1.193 nieuwe leads binnen 30 dagen in een concurrerende branche voor gemiddeld €1,35 per lead** | **Gecertificeerd in online marketing** (2100x1400px): Use object-cover, respect original size.

**NEVER set width/height larger than original_width/original_height from fetch_scraped_image.**