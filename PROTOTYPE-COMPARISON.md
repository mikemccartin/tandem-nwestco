# Nwestco Website Prototype Comparison

## Overview

Three distinct design approaches for the Nwestco website redesign, each addressing the core business needs: showcasing fuel systems & car wash solutions, emphasizing 24/7 service, and driving conversions across the Western US market.

---

## Option A: "Service-First Professional"

### Design Approach
Clean, corporate layout with traditional navigation. Focuses on clear information hierarchy and straightforward user paths. White backgrounds with blue accents create a trustworthy, professional feel.

### Key Features
- Traditional sticky header with dropdown navigation
- Full-viewport hero with gas station background image
- "Challenges You Face" pain points section
- Three market cards (Fuel, Car Wash, Environmental)
- Services lifecycle wheel/grid
- "Why Choose Nwestco" 3-column feature cards
- Full 39-brand partner grid displayed on homepage
- Customer testimonials with photos
- About/Careers split section
- Comprehensive contact form

### Pros
- Familiar navigation pattern - low learning curve
- All brand partners visible on single page (builds credibility)
- Clear service categories
- Strong SEO foundation with semantic structure

### Cons
- More conventional design - less memorable
- Longer page with all brands displayed
- May feel similar to competitor sites

### Best For
Audiences who prefer traditional B2B websites; companies prioritizing SEO and comprehensive information display.

---

## Option B: "Bold & Confident"

### Design Approach
Modern, bold typography with strong visual hierarchy. Features a more condensed homepage with links to dedicated subpages. Blue-dominant color scheme with impactful statistics.

### Key Features
- Streamlined header with prominent CTAs
- Full-viewport hero with large headline
- Market cards with dedicated subpages (Fuel, Car Wash, Environmental)
- Services grid with icons
- Statistics showcase section
- Brand partners preview (full list on separate page)
- Success stories/testimonials
- Careers callout section
- Multi-path contact options

### Subpages Included
- `/pages/fuel-systems.html`
- `/pages/car-wash.html`
- `/pages/environmental.html`
- `/pages/about.html`
- `/pages/careers.html`
- `/pages/contact.html`

### Pros
- Scalable architecture with subpages
- Less overwhelming - focused content per page
- Bold typography creates strong brand presence
- Better for content expansion over time

### Cons
- Requires more clicks to access all information
- More pages to maintain
- Brand partners not immediately visible on homepage

### Best For
Companies planning ongoing content growth; audiences who prefer focused, scannable pages.

---

## Option C: "Premium Interactive"

### Design Approach
Cinematic, immersive experience with animations and interactive elements. Full-screen navigation overlay, animated hero text, and split-screen layouts create a premium, modern feel.

### Key Features
- Minimal header with hamburger menu (full-screen nav overlay)
- Animated hero with staggered text reveal ("We Keep You Running. Compliant. Profitable.")
- Flip cards for market segments
- Interactive timeline for service lifecycle (7 steps with expandable details)
- Split-screen "Why Choose Nwestco" with sticky image
- Testimonial carousel
- Video placeholder section
- Brand partners with fade-in animation
- Dark-themed contact section

### Pros
- Most visually distinctive and memorable
- Interactive elements increase engagement
- Premium feel differentiates from competitors
- Strong mobile-first design

### Cons
- More complex to maintain
- Animations may not appeal to all audiences
- Hamburger menu hides navigation (extra click)
- Interactive timeline requires user engagement

### Best For
Companies wanting to stand out; audiences who appreciate modern, interactive experiences; mobile-first users.

---

## Feature Comparison Matrix

| Feature | Option A | Option B | Option C |
|---------|----------|----------|----------|
| Navigation Style | Traditional dropdown | Traditional + subpages | Full-screen overlay |
| Hero Treatment | Static with image | Static with image | Animated text reveal |
| Market Sections | Cards on page | Cards → subpages | Interactive flip cards |
| Services Display | Grid layout | Grid layout | Interactive timeline |
| Brand Partners | All 39 on homepage | Preview (separate page) | Preview with animations |
| Testimonials | 3-column grid | Carousel | Carousel |
| Mobile Experience | Responsive | Responsive | Mobile-optimized |
| Animation Level | Minimal | Minimal | Heavy |
| Page Count | 1 main page | 7+ pages | 1 main page |

---

## Shared Elements (All Options)

- Same hero background image (gas station at night)
- Consistent brand colors (Nwestco blue palette)
- Same typography (Lato + Open Sans)
- Identical contact information (800-775-1892)
- Same brand partner logos
- ADA accessibility features
- Responsive design (mobile, tablet, desktop)
- Footer with consistent links

---

## Recommendation

**For most B2B fuel/car wash audiences:** Option A or B provides the clearest path to information with familiar patterns.

**For brand differentiation:** Option C creates the strongest visual impression and memorable experience.

**Hybrid approach:** Consider combining Option B's page architecture with Option C's interactive elements for the best of both worlds.

---

## Files Location

```
prototypes/
├── option-a/
│   ├── index.html
│   ├── css/option-a.css
│   └── js/option-a.js
├── option-b/
│   ├── index.html
│   ├── css/option-b.css
│   ├── js/option-b.js
│   └── pages/
│       ├── fuel-systems.html
│       ├── car-wash.html
│       ├── environmental.html
│       ├── about.html
│       ├── careers.html
│       └── contact.html
├── option-c/
│   ├── index.html
│   ├── css/option-c.css
│   └── js/option-c.js
└── shared/
    └── css/
        ├── reset.css
        ├── variables.css
        ├── base.css
        ├── buttons.css
        └── forms.css
```

---

*Document created: November 2024*
*Project: Nwestco Website Redesign*
