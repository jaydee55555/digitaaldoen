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