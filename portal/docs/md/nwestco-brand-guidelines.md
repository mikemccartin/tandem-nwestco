# Nwestco Brand Guidelines

**Company**: Nwestco
**Industry**: Fuel Systems & Car Wash Equipment
**Revenue**: $120M (targeting $500M)
**Market**: Western United States
**Brand Guardian**: Claude Brand Guardian Agent
**Date**: November 26, 2025
**Version**: 1.0

---

## Brand Foundation

### Brand Purpose
Nwestco exists to maximize the uptime and performance of fuel systems and car wash locations across the Western United States through comprehensive lifecycle solutions delivered by expert technicians who genuinely care about customer success.

### Brand Vision
To become the $500M premier provider of fuel systems and car wash solutions across the Western United States, recognized for unmatched technical expertise, geographic coverage, and customer-first service excellence.

### Brand Mission
Be best-in-class in everything we do - from technical expertise to customer service to operational excellence - ensuring our customers' operations run smoothly, compliantly, and profitably.

### Brand Values
1. **People-First, Always**: Our employees and customers come before everything else - we invest in their success and wellbeing
2. **Customer-Focus**: Every decision starts with "How does this help our customers maximize uptime?"
3. **Integrity, Respect, Transparency, Honesty**: We operate with unwavering ethical standards in all relationships
4. **Work Hard, Be Nice, Have Fun**: Professional excellence delivered with genuine kindness and joy
5. **Best-In-Class**: Continuous improvement and excellence in technical training, service delivery, and customer outcomes

### Brand Personality
- **Expert**: Deep technical knowledge across fuel systems and car wash equipment
- **Reliable**: Dependable 24/7 support when customers need us most
- **Confident**: Assured in our capabilities while remaining approachable and humble
- **Customer-Focused**: Genuinely invested in customer success and outcomes
- **Professional**: $120M company scale with personalized local service feel

### Brand Promise
"Comprehensive turnkey solutions delivered seamlessly across the Western US to maximize your uptime and operating performance."

### The 3 Uniques (Competitive Differentiators)
1. **Cradle-to-Grave Solutions**: Complete lifecycle capabilities from installation through maintenance, remodels, compliance, and environmental services - not just point solutions
2. **Western US Geographic Coverage**: 9 branches across six Western states providing peace of mind and rapid response
3. **Subject Matter Expertise**: Best-in-class technical training programs producing the most knowledgeable technicians in the industry

---

## Visual Identity System

### Color Strategy Decision

**RECOMMENDATION**: Standardize on logo colors for all brand applications

**Rationale**: The current website uses `#476789` (lighter, grayer blue) which does not match the actual logo blue `#25617C` (deeper, richer navy). This color inconsistency weakens brand recognition and dilutes brand equity. The logo's deeper navy blue:
- Projects more confidence and authority appropriate for a $120M company
- Aligns with successful competitor sites (Petro West, United Uptime, Kinley) that use bold navy blues
- Creates stronger contrast and visual impact
- Better reflects the company's growth from $66M to $120M and aspirations to $500M

### Primary Brand Colors

```css
/* PRIMARY BRAND PALETTE */
:root {
  /* Nwestco Blue - Primary Brand Color */
  --nwestco-blue: #25617C;
  --nwestco-blue-rgb: 37, 97, 124;
  /* Use for: Primary buttons, links, header backgrounds, CTAs, key UI elements */

  /* Nwestco Green - Secondary Brand Color */
  --nwestco-green: #709944;
  --nwestco-green-rgb: 112, 153, 68;
  /* Use for: Accent elements, success states, environmental services highlighting, secondary CTAs */

  /* Nwestco Gray - Brand Neutral */
  --nwestco-gray: #3A3A3C;
  --nwestco-gray-rgb: 58, 58, 60;
  /* Use for: Headlines, logo wordmark, high-contrast text */
}
```

### Extended Color System

```css
/* BLUE VARIATIONS */
:root {
  --nwestco-blue-dark: #1A4456;      /* Darker blue for hover states */
  --nwestco-blue-light: #3A7A98;     /* Lighter blue for backgrounds */
  --nwestco-blue-pale: #E8F1F5;      /* Very light blue for subtle backgrounds */

  /* GREEN VARIATIONS */
  --nwestco-green-dark: #5A7A35;     /* Darker green for hover states */
  --nwestco-green-light: #8FAE5E;    /* Lighter green for backgrounds */
  --nwestco-green-pale: #F0F5EA;     /* Very light green for subtle backgrounds */

  /* NEUTRAL PALETTE */
  --nwestco-neutral-900: #1A1A1B;    /* Deepest gray - body text */
  --nwestco-neutral-700: #3A3A3C;    /* Dark gray - headings (brand gray) */
  --nwestco-neutral-500: #626262;    /* Medium gray - secondary text */
  --nwestco-neutral-300: #9E9E9E;    /* Light gray - tertiary text */
  --nwestco-neutral-100: #E5E5E5;    /* Very light gray - borders */
  --nwestco-neutral-50: #F5F5F5;     /* Lightest gray - backgrounds */

  /* UTILITY COLORS */
  --nwestco-white: #FFFFFF;
  --nwestco-black: #000000;

  /* SEMANTIC COLORS */
  --nwestco-success: #709944;        /* Use brand green */
  --nwestco-warning: #F59E0B;        /* Amber for warnings */
  --nwestco-error: #DC2626;          /* Red for errors */
  --nwestco-info: #25617C;           /* Use brand blue */
}
```

### Color Usage Guidelines

| Color | Primary Use Cases | Avoid Using For |
|-------|------------------|-----------------|
| **Nwestco Blue** | Primary CTAs, navigation headers, links, key service callouts | Body text, backgrounds (use light variation instead) |
| **Nwestco Green** | Environmental services section, success messages, secondary CTAs, accent elements | Primary CTAs (reserve blue), error states |
| **Nwestco Gray** | Headlines, logo wordmark, high-emphasis text | Backgrounds (too dark), body text (use neutral-900) |
| **Neutral 900** | Body copy, paragraph text, standard content | Headlines (use gray or blue for emphasis) |
| **Neutral 500** | Secondary text, captions, metadata, less emphasized content | Primary headlines, CTAs |

### Accessibility Requirements

All color combinations must meet WCAG 2.1 Level AA standards (4.5:1 contrast ratio for normal text):

**Approved Combinations:**
- Nwestco Blue `#25617C` on White `#FFFFFF` = 6.2:1 ✓
- Nwestco Gray `#3A3A3C` on White `#FFFFFF` = 11.8:1 ✓
- White text on Nwestco Blue `#25617C` = 6.2:1 ✓
- Nwestco Green `#709944` on White `#FFFFFF` = 3.8:1 ✗ (use for large text/UI only)
- White text on Nwestco Green `#709944` = 3.8:1 ✗ (use dark green variation for text)

---

## Logo System

### Logo Variations

**Primary Logo - Full Color**
- File: `nwestco_logo_flat.png`
- Components: Blue arc (top), green arc (bottom), gray "NWESTCO" wordmark, white circle background
- Use: Primary application on white/light backgrounds, header, marketing materials, business cards

**Logo - Black Version**
- File: `nwestco_logo_black.png`
- Components: Single color (black/dark gray) for all elements
- Use: Single-color printing, engraving, embroidery, black & white documents, fax headers

**Logo - White Reverse** (to be created)
- Components: White version of entire logo
- Use: Dark blue backgrounds, photography overlays, footer backgrounds

**Icon-Only Mark** (to be created)
- Components: Blue/green circular arc symbol without wordmark
- Use: Favicon (done), app icons, social media profile images, small-scale applications under 60px

### Logo Clear Space

**Minimum Clear Space**: Equal to the height of the letter "N" in the wordmark

```
    [N-height spacing]
         ↓
    ← → LOGO ← →
         ↑
    [N-height spacing]
```

No other graphic elements, text, or imagery should appear within this protected zone.

### Logo Minimum Sizes

- **Digital/Web**: 120px wide minimum
- **Print**: 1 inch (2.54cm) wide minimum
- **Icon-Only**: 40px × 40px minimum

### Logo Usage Guidelines

**DO:**
- Use the full-color logo on white or light backgrounds whenever possible
- Use the black version for single-color applications
- Maintain aspect ratio when resizing (never stretch or distort)
- Ensure adequate clear space around logo
- Use provided logo files only (never recreate)

**DON'T:**
- Change logo colors or substitute different blues/greens
- Rotate or skew the logo
- Add effects (drop shadows, glows, gradients, outlines)
- Place logo on busy backgrounds where legibility suffers
- Use logo smaller than minimum sizes
- Separate the circular icon from the wordmark (except for approved icon-only usage)

### Logo Backgrounds

**Preferred Backgrounds:**
- White or very light grays (`#F5F5F5` or lighter)
- Solid Nwestco Blue (use white reverse logo)
- Clean photography with clear negative space

**Avoid:**
- Busy patterns or textures
- Photography without sufficient contrast
- Colored backgrounds other than brand colors (without testing legibility)

---

## Typography System

### Typeface Selection

**Primary Typeface: Open Sans**
- Purpose: Headlines, subheadings, UI elements, navigation
- Weights Available: 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)
- Character: Clean, modern, professional, highly readable, geometric sans-serif
- Web Implementation: Google Fonts

**Secondary Typeface: Lato**
- Purpose: Body copy, paragraphs, supporting content
- Weights Available: 300 (Light), 400 (Regular), 700 (Bold), 900 (Black)
- Character: Warm, humanist, approachable while remaining professional
- Web Implementation: Google Fonts

### Typography Hierarchy

```css
/* TYPOGRAPHY SYSTEM */
:root {
  /* Font Families */
  --font-primary: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-secondary: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Font Sizes */
  --text-xs: 0.75rem;      /* 12px - Fine print, captions */
  --text-sm: 0.8125rem;    /* 13px - Small labels, metadata */
  --text-base: 1rem;       /* 16px - Body text baseline */
  --text-lg: 1.125rem;     /* 18px - Large body, intro paragraphs */
  --text-xl: 1.25rem;      /* 20px - Subheadings, callouts */
  --text-2xl: 1.5rem;      /* 24px - H4 */
  --text-3xl: 1.875rem;    /* 30px - H3 */
  --text-4xl: 2.25rem;     /* 36px - H2 */
  --text-5xl: 2.625rem;    /* 42px - H1 */
  --text-6xl: 3.5rem;      /* 56px - Hero headlines */

  /* Line Heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;

  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.02em;
}

/* HEADING STYLES */
h1, .h1 {
  font-family: var(--font-primary);
  font-size: var(--text-5xl);      /* 42px */
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--nwestco-gray);
  margin-bottom: 1.5rem;
}

h2, .h2 {
  font-family: var(--font-primary);
  font-size: var(--text-4xl);      /* 36px */
  font-weight: 600;
  line-height: var(--leading-tight);
  color: var(--nwestco-gray);
  margin-bottom: 1.25rem;
}

h3, .h3 {
  font-family: var(--font-primary);
  font-size: var(--text-3xl);      /* 30px */
  font-weight: 600;
  line-height: var(--leading-normal);
  color: var(--nwestco-gray);
  margin-bottom: 1rem;
}

h4, .h4 {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);      /* 24px */
  font-weight: 600;
  line-height: var(--leading-normal);
  color: var(--nwestco-gray);
  margin-bottom: 0.75rem;
}

h5, .h5 {
  font-family: var(--font-primary);
  font-size: var(--text-xl);       /* 20px */
  font-weight: 600;
  line-height: var(--leading-normal);
  color: var(--nwestco-gray);
  margin-bottom: 0.5rem;
}

h6, .h6 {
  font-family: var(--font-primary);
  font-size: var(--text-base);     /* 16px */
  font-weight: 700;
  line-height: var(--leading-normal);
  color: var(--nwestco-gray);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  margin-bottom: 0.5rem;
}

/* BODY TEXT STYLES */
body, p, .body-text {
  font-family: var(--font-secondary);
  font-size: var(--text-base);     /* 16px */
  font-weight: 400;
  line-height: var(--leading-relaxed);
  color: var(--nwestco-neutral-900);
}

.lead-text {
  font-family: var(--font-secondary);
  font-size: var(--text-lg);       /* 18px */
  font-weight: 400;
  line-height: var(--leading-relaxed);
  color: var(--nwestco-neutral-900);
}

.small-text {
  font-family: var(--font-secondary);
  font-size: var(--text-sm);       /* 13px */
  font-weight: 400;
  line-height: var(--leading-normal);
  color: var(--nwestco-neutral-500);
}

.caption {
  font-family: var(--font-secondary);
  font-size: var(--text-xs);       /* 12px */
  font-weight: 400;
  line-height: var(--leading-normal);
  color: var(--nwestco-neutral-500);
}

/* SPECIAL TEXT STYLES */
.hero-headline {
  font-family: var(--font-primary);
  font-size: var(--text-6xl);      /* 56px */
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--nwestco-gray);
}

.section-label {
  font-family: var(--font-primary);
  font-size: var(--text-sm);       /* 13px */
  font-weight: 700;
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--nwestco-blue);
}

/* LINK STYLES */
a, .link {
  color: var(--nwestco-blue);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover, .link:hover {
  color: var(--nwestco-blue-dark);
  text-decoration: underline;
}
```

### Typography Usage Guidelines

| Element | Typeface | Size | Weight | Use Case |
|---------|----------|------|--------|----------|
| **Hero Headline** | Open Sans | 56px | 800 | Homepage hero, major landing page heroes |
| **H1** | Open Sans | 42px | 700 | Page titles, section headlines |
| **H2** | Open Sans | 36px | 600 | Major section divisions |
| **H3** | Open Sans | 30px | 600 | Service categories, subsections |
| **H4** | Open Sans | 24px | 600 | Service details, card titles |
| **H5** | Open Sans | 20px | 600 | Smaller subheadings, list headers |
| **H6** | Open Sans | 16px | 700 | Overlines, small labels (uppercase) |
| **Body** | Lato | 16px | 400 | Standard paragraphs, content |
| **Lead Text** | Lato | 18px | 400 | Opening paragraphs, emphasized content |
| **Small Text** | Lato | 13px | 400 | Metadata, secondary information |
| **Caption** | Lato | 12px | 400 | Image captions, fine print |

### Responsive Typography

```css
/* MOBILE ADJUSTMENTS (max-width: 768px) */
@media (max-width: 768px) {
  :root {
    --text-6xl: 2.5rem;    /* 40px - Reduce hero headline */
    --text-5xl: 2rem;      /* 32px - Reduce H1 */
    --text-4xl: 1.75rem;   /* 28px - Reduce H2 */
    --text-3xl: 1.5rem;    /* 24px - Reduce H3 */
  }
}
```

---

## Brand Voice & Messaging

### Voice Characteristics

**Expert**
- Nwestco speaks with confident technical knowledge without using jargon that alienates customers
- We demonstrate expertise through specific solutions and outcomes, not generic claims
- Example: "Our certified technicians diagnose and repair all major fuel dispenser brands" vs. "We know fuel equipment"

**Reliable**
- Our voice reflects dependability and 24/7 availability when customers need us most
- We emphasize uptime, response times, and proven track records
- Example: "We respond within 2 hours to keep your operations running" vs. "We're here when you need us"

**Outcome-Focused**
- Every message connects to customer results: uptime, compliance, profitability
- We lead with benefits before features
- Example: "Maximize your uptime with proactive maintenance programs" vs. "We offer maintenance services"

**Confident but Approachable**
- We project confidence of a $120M company while maintaining warmth and accessibility
- Avoid arrogance; embrace "we're in this together" partnership mentality
- Example: "Let's find the right solution for your operation" vs. "We have all the answers"

**Straightforward**
- Clear, direct communication without marketing fluff or corporate speak
- Short sentences, active voice, plain language
- Example: "We install, service, and maintain fuel systems across six Western states" vs. "Nwestco is a leading provider of comprehensive fuel system solutions"

### Tone Variations by Context

| Context | Tone Adjustment | Example |
|---------|----------------|---------|
| **Emergency/Service** | Urgent, reassuring, solution-focused | "We're dispatching a technician now. Expected arrival: 90 minutes." |
| **Sales/Marketing** | Confident, benefit-driven, professional | "9 branches across the Western US means faster response when you need us." |
| **Technical Support** | Knowledgeable, patient, helpful | "Let's walk through the diagnostic process together to identify the issue." |
| **About/Culture** | Warm, authentic, people-focused | "Our technicians aren't just skilled - they genuinely care about your success." |
| **Compliance/Legal** | Precise, authoritative, thorough | "We ensure full EPA compliance with documented testing and reporting." |

### Messaging Architecture

**Brand Tagline**
"Maximize Your Uptime"

**Value Proposition**
"Comprehensive turnkey solutions for fuel systems and car washes across the Western US - delivered seamlessly to maximize your uptime and operating performance."

**Positioning Statement**
"For fuel retailers and car wash operators across the Western United States, Nwestco is the best-in-class partner that provides cradle-to-grave solutions with unmatched geographic coverage and technical expertise, unlike competitors who offer only point solutions or limited service areas."

### Key Messages by Audience

**For Fuel Retailers & C-Stores:**
1. **Uptime Promise**: "Every minute your pumps are down costs you money. We keep you running."
2. **One-Stop Shop**: "From installation to maintenance to emergency repairs - one call, one partner, complete peace of mind."
3. **Compliance Confidence**: "Stay compliant with EPA, state, and local regulations through our testing and documentation services."

**For Car Wash Operators:**
1. **Equipment Expertise**: "We service all major car wash brands with certified technicians trained on your specific equipment."
2. **Maximize Revenue**: "Equipment uptime directly impacts your bottom line - we keep your bays running and profitable."
3. **Chemistry Optimization**: "The right chemicals at the right price with expert guidance on application and results."

**For Potential Employees:**
1. **Career Growth**: "Join a company growing from $120M to $500M with expanding opportunities across the Western US."
2. **Best Training**: "We invest in best-in-class technical training so our technicians are the most knowledgeable in the industry."
3. **Culture Matters**: "Work hard, be nice, have fun - that's not just a slogan, it's how we operate every day."

**For Investors/Acquisition Targets:**
1. **Growth Trajectory**: "From $66M to $120M with clear path to $500M through strategic M&A and organic growth."
2. **Market Position**: "Dominant presence across six Western states with 9 branches and 360+ employees."
3. **PE-Backed Platform**: "Well-capitalized acquisition platform with proven integration capabilities."

### Writing Style Guidelines

**DO:**
- Start with customer outcomes and benefits
- Use active voice ("We respond" not "Responses are provided")
- Be specific with numbers and timeframes ("2-hour response" not "fast response")
- Write in second person when addressing customers ("your uptime" not "customer uptime")
- Use short paragraphs (3-4 lines maximum)
- Lead sections with clear subheadings
- Break up text with bullet points for scannability

**DON'T:**
- Use jargon without explanation ("API compatibility" → "works with your existing systems")
- Make generic claims without proof ("best service" → "2-hour emergency response across the Western US")
- Use passive voice excessively
- Write long, complex sentences
- Use corporate buzzwords ("synergy", "solutions-oriented", "leverage")
- Oversell or make unrealistic promises

### Vocabulary Preferences

**Preferred Terms:**
- "Technicians" (not "techs" or "mechanics")
- "Uptime" (not "availability" or "operational time")
- "Car wash" (not "car-wash" or "carwash")
- "C-store" (acceptable abbreviation for convenience store)
- "Western US" or "Western United States" (not "West Coast")
- "Emergency response" (not "emergency service")
- "Best-in-class" (approved superlative based on training investment)

**Terms to Avoid:**
- "World-class" (unsubstantiated claim)
- "Cutting-edge" (overused, meaningless)
- "Solutions" as vague noun (be specific: "maintenance services" not "maintenance solutions")
- "Leverage" as business verb
- "Revolutionary" or "game-changing" (hyperbolic)

---

## Visual Direction & Photography

### Photography Style

**Authentic Over Stock**
Nwestco should prioritize real photography of actual technicians, equipment, and job sites over generic stock photography. The brand reflects real people doing real work.

**Subject Matter:**
- Nwestco technicians in branded uniforms on job sites
- Real customer locations (fuel stations, c-stores, car washes)
- Nwestco trucks and service vehicles with visible branding
- Close-ups of hands working on equipment (conveys expertise)
- Before/after shots of installations and remodels
- Team photos at branches (conveys people-first culture)

**Photography Characteristics:**
- **Lighting**: Bright, natural lighting preferred; well-lit job sites
- **Composition**: Clean, professional framing with clear subjects
- **Color Treatment**: True-to-life colors; avoid heavy filters or unnatural saturation
- **Context**: Show work in progress, not just finished results
- **People**: Include faces when possible to humanize the brand; diversity in representation

**Avoid:**
- Generic stock photos of anonymous workers in hard hats
- Overly staged or posed scenarios that feel inauthentic
- Dark, moody, or overly artistic photography (we're industrial services, not lifestyle brand)
- Equipment-only shots without human context
- Clipart, illustrations, or cartoon-style imagery

### Acceptable Stock Photography Guidelines

When custom photography isn't available:

**Look For:**
- Fuel stations and c-stores from exterior views
- Car wash facilities in operation
- Industrial/commercial settings with authentic feel
- Technicians working (ensure diversity in representation)
- Western US landscapes for geographic context

**Avoid:**
- Overly generic business handshakes or office scenes
- Models that look too polished or fashion-oriented
- International locations that don't match Western US aesthetic
- Dated imagery or outdated equipment

### Photography Treatment Standards

```css
/* IMAGE OVERLAYS FOR TEXT LEGIBILITY */
.hero-image-overlay {
  background: linear-gradient(
    135deg,
    rgba(37, 97, 124, 0.85) 0%,
    rgba(37, 97, 124, 0.65) 100%
  );
}

.section-image-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
}
```

**Image Sizing:**
- Hero images: Minimum 1920px wide, optimized to 200KB or less
- Section backgrounds: 1600px wide minimum
- Card images: 800px × 600px (4:3 ratio)
- Thumbnail images: 400px × 300px
- Profile photos: 400px × 400px (1:1 ratio)

---

## Icon & Graphic Elements

### Icon Style

**Approach**: Line icons with consistent stroke weight, not filled solid icons

**Specifications:**
- Stroke width: 2px
- Corner radius: 2px (slightly rounded, not sharp angles)
- Color: Nwestco Blue (#25617C) or Nwestco Gray (#3A3A3C)
- Size: 48px × 48px standard, scalable to 24px and 64px
- Style: Simple, geometric, industrial (not decorative or whimsical)

**Icon Usage:**
- Service category indicators (wrench, car wash, fuel pump, compliance checklist)
- Feature callouts (24/7 clock, geographic pin, certification badge)
- Navigation elements (menu, search, contact)
- UI elements (arrows, chevrons, close buttons)

### Pattern & Texture Guidelines

**Minimal Pattern Use**
Nwestco brand should rely primarily on clean layouts, strong typography, and photography rather than decorative patterns.

**Acceptable Subtle Patterns:**
- Light grid patterns (very subtle, 5% opacity) for background texture
- Topographic map patterns at low opacity for geographic coverage sections
- Circuit/connection line patterns to illustrate lifecycle/integration concepts

**Avoid:**
- Busy textures that compete with content
- Decorative flourishes or ornamental elements
- Heavy geometric patterns
- Gradient meshes or complex backgrounds

### Graphic Element System

**Dividers & Separators:**
- Color: Nwestco Neutral 100 (#E5E5E5)
- Weight: 1px standard, 2px for emphasis
- Style: Solid lines (avoid dashed or dotted)

**Accent Lines:**
- Color: Nwestco Blue or Nwestco Green
- Weight: 4px for accent bars
- Use: Left border on callouts, top border on cards, section dividers

**Shapes & Containers:**
- Border radius: 8px for cards and containers (modern but not overly rounded)
- Border radius: 4px for buttons and small UI elements
- Drop shadows: Subtle (0 2px 8px rgba(0, 0, 0, 0.1))

---

## Brand Applications

### Website Design System

**Header/Navigation:**
- Background: White with 1px border bottom (Neutral 100)
- Logo: Full color, left-aligned
- Navigation links: Nwestco Blue on hover
- CTA button: Nwestco Blue background, white text
- Mobile: Hamburger menu (Nwestco Gray)

**Hero Section:**
- Background: Full-width photography with dark overlay for text legibility
- Headline: White text, Open Sans Bold, 56px
- Subheadline: White text, Lato Regular, 20px
- CTA: Nwestco Green button (stands out against blue photo overlay)

**Content Sections:**
- Background: Alternating white and Neutral 50 for visual separation
- Section headlines: Nwestco Gray, 36px
- Body text: Neutral 900, 16px
- Cards: White background with subtle shadow

**Footer:**
- Background: Nwestco Gray (dark)
- Text: White or Neutral 100
- Links: White with green underline on hover
- Social icons: White outlines

### Button Styles

```css
/* PRIMARY BUTTON */
.btn-primary {
  background-color: var(--nwestco-blue);
  color: var(--nwestco-white);
  padding: 14px 32px;
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--nwestco-blue-dark);
}

/* SECONDARY BUTTON */
.btn-secondary {
  background-color: var(--nwestco-green);
  color: var(--nwestco-white);
  padding: 14px 32px;
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  transition: background-color 0.2s ease;
}

.btn-secondary:hover {
  background-color: var(--nwestco-green-dark);
}

/* OUTLINE BUTTON */
.btn-outline {
  background-color: transparent;
  color: var(--nwestco-blue);
  padding: 14px 32px;
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  border: 2px solid var(--nwestco-blue);
  transition: all 0.2s ease;
}

.btn-outline:hover {
  background-color: var(--nwestco-blue);
  color: var(--nwestco-white);
}

/* GHOST BUTTON (for dark backgrounds) */
.btn-ghost {
  background-color: transparent;
  color: var(--nwestco-white);
  padding: 14px 32px;
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  border: 2px solid var(--nwestco-white);
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background-color: var(--nwestco-white);
  color: var(--nwestco-blue);
}
```

### Form Design Standards

**Form Fields:**
- Border: 1px solid Neutral 300, focus state 2px solid Nwestco Blue
- Border radius: 4px
- Padding: 12px 16px
- Font: Lato Regular 16px
- Background: White
- Label: Lato Bold 14px, Neutral 700

**Form Validation:**
- Error state: Red border (#DC2626), red text
- Success state: Green border (Nwestco Green), green checkmark
- Helper text: Neutral 500, 13px

**CTA Placement:**
- Primary button: Nwestco Blue
- Align left (not centered) for better scannability
- Sufficient spacing (24px) from last form field

---

## Partner Brand Integration

### Partner Logo Display

Nwestco represents premium brands including Autec, Belanger, Graco, Husky, OPW, Rotary, Turtle Wax, and others. Partner logos should be displayed professionally to build credibility.

**Logo Grid Specifications:**
- Background: Light gray (Neutral 50) or white
- Logo container: 200px × 120px per logo
- Padding: 16px around each logo
- Alignment: Center-aligned within container
- Grayscale treatment: Optional for visual consistency (all logos same visual weight)
- Grid: 4-6 logos per row on desktop, 2-3 on tablet, 2 on mobile

**Section Headline:**
- "Authorized Partner Of:" or "Premium Brands We Service:"
- Open Sans Semi-Bold, 20px, Neutral 700

**Usage Context:**
- Homepage: Show 8-12 top partner logos
- Services pages: Show relevant partners for that service vertical
- Footer: Condensed partner logo strip (smaller scale)

---

## Brand Protection & Usage

### Trademark & Legal Protection

**Registered Marks:**
- Nwestco® name (verify current trademark status)
- Nwestco circular logo design (verify registration)

**Usage Requirements:**
- First mention of Nwestco on marketing materials should include ® symbol
- Partner/vendor materials require brand approval before publication
- Third parties must request logo usage permission in writing

**Prohibited Uses:**
- Modifying logo colors, proportions, or design elements
- Using outdated logo versions
- Creating derivative works based on Nwestco branding
- Implying partnership or endorsement without written agreement

### Brand Compliance Monitoring

**Internal Monitoring:**
- Quarterly brand audit of all customer-facing materials (website, social media, printed collateral)
- Branch location signage audit annually
- Vehicle wrap and uniform compliance checks
- Marketing materials review before publication

**Vendor/Partner Management:**
- Require brand guidelines acknowledgment from marketing vendors
- Approval process for co-branded materials
- Templates provided for common applications (presentations, business cards, letterhead)

**Quality Standards:**
- All brand applications must meet accessibility standards (WCAG 2.1 AA)
- Print materials: Minimum 300dpi resolution for logo reproduction
- Digital materials: Proper logo file formats (PNG with transparency for web, SVG when possible)

### Brand Asset Library

**Required Logo Files:**
- Full-color PNG (transparent background): `nwestco_logo_flat.png` ✓ (exists)
- Black version PNG: `nwestco_logo_black.png` ✓ (exists)
- White reverse PNG: `nwestco_logo_white.png` (to be created)
- Full-color SVG vector: `nwestco_logo.svg` (to be created)
- Icon-only variations in all color formats (to be created)
- Favicon: `favicon.png` ✓ (exists)

**Supporting Assets Needed:**
- Brand guidelines PDF (this document)
- PowerPoint/Keynote template
- Business card template
- Letterhead template
- Email signature template
- Social media cover image templates
- Vehicle wrap guidelines
- Uniform specifications

---

## Cultural Considerations & Inclusivity

### Inclusive Visual Representation

**Photography & People:**
- Represent diversity in gender, age, and ethnicity across all marketing materials
- Show technicians of different backgrounds (the team is diverse, the imagery should be too)
- Avoid stereotypical representations (e.g., only men working on equipment)
- Include people with visible disabilities when authentic to job roles

**Language & Accessibility:**
- Use plain language that's accessible to non-native English speakers
- Avoid idioms or regional slang that may not translate across Western US markets
- Provide Spanish-language materials for key customer communications (safety, compliance)
- Ensure all digital materials meet WCAG 2.1 AA standards for accessibility

### Geographic & Cultural Sensitivity

**Western US Context:**
- Acknowledge different state regulations and requirements (California vs. Nevada vs. Arizona, etc.)
- Use photography that reflects Western US landscapes and architecture
- Respect local business cultures (more formal in California metros, more casual in smaller Western markets)

**Avoid:**
- Assumptions about customer size or sophistication
- Coastal bias or urban-centric language
- Political or controversial references
- Religious or culturally specific holidays in general marketing (use "holiday season" not specific holidays)

---

## Brand Evolution & Maintenance

### When to Refresh Brand Elements

**Annual Review:**
- Color accessibility compliance
- Typography rendering across new devices/browsers
- Photography library updates (new projects, new team members)
- Competitive brand positioning assessment

**Trigger Points for Evolution:**
- Major company milestones (reaching $250M, $500M revenue targets)
- Significant geographic expansion (entering new states)
- Major acquisition that changes service mix
- Shift in competitive landscape requiring repositioning

**Protected Elements (Do Not Change Without Executive Approval):**
- Logo design and core colors (blue, green, gray)
- Company name spelling and presentation
- Core brand promise ("Maximize Your Uptime")
- The 3 Uniques positioning

### Brand Guidelines Updates

**This document should be updated when:**
- New brand assets are created (white logo, icon variations, etc.)
- Typography system changes
- New service verticals are added or consolidated
- Major marketing campaigns establish new visual patterns
- Website redesign introduces new components

**Version Control:**
- Document version number and date on cover
- Maintain changelog of significant updates
- Distribute updated guidelines to all marketing staff, agencies, and vendors
- Archive previous versions for reference

---

## Quick Reference Guide

### At-a-Glance Brand Essentials

**Primary Brand Colors:**
- Nwestco Blue: `#25617C` (primary CTAs, links, headers)
- Nwestco Green: `#709944` (secondary CTAs, accents)
- Nwestco Gray: `#3A3A3C` (headlines, wordmark)

**Typography:**
- Headlines: Open Sans (600-800 weight)
- Body: Lato (400 weight)

**Logo Minimum Sizes:**
- Digital: 120px wide
- Print: 1 inch wide

**Brand Voice:**
Expert, Reliable, Outcome-Focused, Confident but Approachable, Straightforward

**Key Messages:**
1. Maximize uptime through comprehensive lifecycle solutions
2. Western US coverage provides peace of mind
3. Best-in-class technical expertise and training
4. People-first culture: Work hard, be nice, have fun

**Photography Style:**
Authentic over stock; real technicians, real job sites, bright natural lighting

**Brand Promise:**
"Maximize Your Uptime"

---

## Implementation Checklist

### Immediate Actions (Website Redesign)
- [ ] Standardize all blue elements to logo blue `#25617C` (replace `#476789`)
- [ ] Implement typography system with Open Sans and Lato
- [ ] Create white reverse logo for dark backgrounds
- [ ] Establish button component system (primary, secondary, outline, ghost)
- [ ] Update hero messaging to outcome-focused language
- [ ] Add partner logo section with proper grid layout
- [ ] Ensure all color combinations meet WCAG AA contrast standards

### Short-Term (Next 3 Months)
- [ ] Commission custom photography of Nwestco technicians, trucks, and job sites
- [ ] Create icon library for service categories and features
- [ ] Develop PowerPoint template with brand system
- [ ] Create business card and letterhead templates
- [ ] Design email signature template for all employees
- [ ] Produce brand guidelines PDF for distribution

### Medium-Term (3-6 Months)
- [ ] Audit all branch locations for brand compliance (signage, uniforms)
- [ ] Update vehicle wraps to use correct logo blue
- [ ] Create Spanish-language safety and compliance materials
- [ ] Develop social media templates and cover images
- [ ] Train marketing staff and branch managers on brand guidelines

### Long-Term (6-12 Months)
- [ ] Establish quarterly brand compliance review process
- [ ] Build comprehensive brand asset library/portal
- [ ] Create video brand guidelines for motion graphics standards
- [ ] Develop brand measurement framework (awareness, perception tracking)
- [ ] Plan brand evolution strategy aligned with $500M growth target

---

## Contact & Approval

### Brand Guideline Stewardship

**Brand Guardian**: Marketing Director (to be designated)

**Approval Authority:**
- Minor updates (photography additions, template creation): Marketing Director
- Moderate changes (color variations, new typography weights): CMO + CEO
- Major changes (logo redesign, color palette shift, repositioning): Executive Team + Board

**Questions or Requests:**
For questions about brand usage or to request brand assets, contact:
[Marketing Department Contact - To Be Added]

---

**Document Control:**
- Version: 1.0
- Date: November 26, 2025
- Created by: Brand Guardian Agent
- Next Review: May 26, 2026 (6 months)
- Distribution: All marketing staff, agency partners, executive team

---

## Appendix: Color Reference Values

### Color Conversion Reference

**Nwestco Blue (#25617C)**
- RGB: 37, 97, 124
- CMYK: 70, 22, 0, 51
- HSL: 199°, 54%, 32%
- Pantone: Closest match 7470 C

**Nwestco Green (#709944)**
- RGB: 112, 153, 68
- CMYK: 27, 0, 56, 40
- HSL: 89°, 38%, 43%
- Pantone: Closest match 7490 C

**Nwestco Gray (#3A3A3C)**
- RGB: 58, 58, 60
- CMYK: 3, 3, 0, 76
- HSL: 240°, 2%, 23%
- Pantone: Closest match Black 6 C

---

**End of Brand Guidelines**
