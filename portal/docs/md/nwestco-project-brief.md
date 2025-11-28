# Nwestco Website Project Brief

**Client:** Nwestco
**Project:** Website Redesign
**Launch Target:** April 1, 2026
**Platform:** WordPress (client-hosted)

---

## Brand Guidelines (Extracted from Current Site)

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Brand Blue** | `#476789` | Links, buttons, CTAs, accents, hover states |
| **Dark Text** | `#363636` | Headings, titles |
| **Body Text** | `#626262` | Paragraphs, secondary content |
| **Accent Blue** | `#1e73be` | Section backgrounds |
| **White** | `#ffffff` | Backgrounds |
| **Black** | `#000000` | High contrast elements |

### Logo Colors (Extracted from Logo File)
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Nwestco Blue** | `#25617C` | rgb(37, 97, 124) | Outer ring (top arc) |
| **Nwestco Green** | `#709944` | rgb(112, 153, 68) | Inner ring (bottom arc) |
| **Nwestco Gray** | `#3A3A3C` | rgb(58, 58, 60) | "NWESTCO" wordmark |

### Typography
| Element | Font |
|---------|------|
| Primary | **Open Sans** (300-800 weights) |
| Secondary | **Lato** (100-900 weights) |

### Font Sizes
- Small: 13px
- Medium: 20px
- Large: 36px
- X-Large: 42px

### Button Styles
- **Style 1**: Solid fill `#476789`
- **Style 2**: Border with hover fill animation

### Design Note
**Color inconsistency discovered:** The website CSS uses `#476789` for buttons/links, but the actual logo uses `#25617C` - these don't match. The logo blue is deeper/richer.

**Recommendation:** Standardize on the logo colors for the new site. The logo's `#25617C` blue is closer to the bold navy blues competitors use. Consider whether to keep or evolve the green `#709944` as an accent.

### Assets Location
Logo and image files extracted from current site: `./current-site-assets/`

---

## The Client

### Company Overview
- **Business**: Equipment/parts distributor and service provider for fuel systems and car washes
- **Revenue**: $66M → $120M (current), targeting $500M in 10 years
- **Structure**: PE-backed, acquisition-focused (6 acquisitions to date)
- **Footprint**: 9 branches, 6 states (Western US)
- **Employees**: 360+
- **Leadership**: New CEO Mike Ochoa (6 months in role)
- **Referral**: Adam from Petro West

### 10-Year Targets
- Revenue: $500M
- EBITDA: $75M (15% margin)
- Strategy: M&A + organic growth

---

## Current Website Problems

### Client's Assessment
- "Like ragù" - everything thrown together
- Unprofessional appearance
- Unclear messaging and value proposition
- 6-7 years old, hasn't kept pace with company growth
- Doesn't reflect their current size or capabilities

### Technical Analysis (nwestco.com)
- **Platform**: WordPress 6.8.3 with WPBakery page builder
- **Server**: NGINX 1.27.4
- **Forms**: Ninja Forms
- **Analytics**: GA4
- **Key Gaps**:
  - No CRM integration
  - No marketing automation
  - No CDN
  - Underutilized WooCommerce

### Content/UX Problems Observed
1. **Overwhelming scope** - 7 service verticals competing for attention
2. **Generic language** - "we can help", "let us help" lack specificity
3. **Weak differentiation** - No clear competitive advantage articulated
4. **Mixed audience appeal** - Homepage tries to speak to customers, employees, and investors simultaneously without segmentation
5. **Dated design** - Heavy stock photography, traditional layout
6. **Buried value prop** - "Maximize uptime" promise not prominent

---

## Strategic Positioning (From Internal Marketing Deck)

### Core Values
1. People-first, always
2. Customer-focus
3. Integrity, Respect, Transparency, Honesty
4. Work hard, Be nice, Have fun
5. Best-in-Class

### Mission
"Be Best-In-Class in everything we do"

### Purpose
- Build a great company with great people and great results
- Help make our customers wildly successful

### Value Proposition

> *"A broad-spectrum of turnkey, lifecycle solutions, seamlessly delivered, to maximize the uptime and performance of fuel systems and car wash locations"*

### Supporting Pillars
| Pillar | Message |
|--------|---------|
| One-stop shop | We service the whole location |
| Geographic coverage | Peace of mind - we have you covered |
| Technical expertise | Best-in-class training, best techs |
| Response times | Minimize downtime, maximize uptime |
| Premium brands | Best-in-class equipment, parts, chemicals |
| Technology & Data | Seamless experience + customer insights |

### The "3 Uniques" (Differentiators)
1. **Cradle-to-grave** - Broad lifecycle solutions, turnkey capabilities
2. **Western US coverage** - Geographic reach and peace of mind
3. **Subject matter expertise** - Best-in-class technical training
4. *(Bonus)* **Agility & speed** - Quick to change and adapt

### Guarantee
"Solutions that maximize customers' uptime and operating performance"

---

## Target Markets

### Simplified Focus (from 7 → 3)
1. **Fuel Systems** - retail, commercial, industrial
2. **Car Washes** - tunnels, in-bay, self-serve
3. **Environmental** - petroleum-related

### Customer Segmentation
| Dimension | Options |
|-----------|---------|
| Segment | National, Regional, Local |
| Sub-Segment | Retail, Commercial, Industrial, GC, Jobber |
| Verticals | C-Store, Gas Station, Mass Merchant, Car Wash, Car Dealer, School District, Municipality, Telecom, Data Center, Truck Stop, Airport, Marina |

---

## Service Lifecycle Wheel

The internal deck presents services as a lifecycle, not separate verticals:

```
        Installation
            ↓
    Environmental ← → Service & Maintenance
    Solutions           ↓
        ↑           Remodels & Upgrades
    Chemistry ← → Equipment Sales
            ↖   ↗
      Testing & Compliance
```

**Seven service touchpoints:**
1. Installation
2. Service & Maintenance
3. Remodels & Upgrades
4. Equipment Sales
5. Testing & Compliance
6. Environmental Solutions
7. Chemistry

---

## Target Audiences

### Primary
1. **Customers** - Retail fuel stations, c-stores, car washes needing equipment/service
2. **Future Employees** - Technicians, sales, operations talent
3. **Investors** - PE stakeholders, potential future investors

### Secondary
4. **Acquisition Targets** - Companies Nwestco may want to acquire (need to see a credible, growing platform)

---

## Website Requirements

### Must-Haves
- Professional appearance matching company size/growth
- Clear value proposition (uptime/lifecycle focus)
- Effective lead capture forms
- Career/recruiting section
- Mobile responsive

### Key Asks from Client
- "Don't make me think" - clear navigation
- Forms that actually work and get responses
- Reflect that they're a $120M company, not a small regional shop

---

## Visual Analysis (From Screenshots)

### Nwestco Current Site - Problems Identified

**Hero Section:**
- Generic stock photo (guy in hard hat) - no brand personality
- Weak headline: "24/7 Service from Nwestco" - doesn't say what they do
- Doesn't convey $120M company scale

**Content Structure:**
- **Seven service boxes competing for attention** (Petroleum, Car Wash, Automotive, Electrical, Aviation, Industrial, Tanks) - the "ragù" problem Mike described
- "Turnkey peace of mind" buried below the fold
- "Reliable, Affordable, Efficient" is generic - could be any company

**Design:**
- Muted color palette - blue isn't confident
- Footer is text-heavy, hard to scan
- Overall looks like a 2017 site (because it is)
- Looks like a $10M regional player, not a $120M company

---

### Petro West - Why It Works

**Hero:** "We Fuel Your Business" - clear, confident, immediate understanding

**Trust Signals:**
- CEO video front and center - builds trust immediately
- Partnership badges (Titan Cloud) above the fold
- Client logos reinforce credibility

**Design:**
- Dark navy blue feels premium and industrial
- Yellow/gold accent for CTAs pops against blue
- Services as clear pillars with strong imagery
- Real project photos, not stock
- "Certified Training Classes" with Las Vegas imagery - memorable

**Steal for Nwestco:** CEO video, bold navy blue, partnership badges, real photography

---

### Kinley Construction - Why It Works

**Hero:** "Built on Service Since 1895" - instant credibility through heritage

**Structure:**
- Clear division structure with icons (not wall of text)
- 5 service divisions with photos
- Featured Projects slider with real work

**Trust Signals:**
- "Six Generations of Excellence" - powerful proof point
- Customer testimonials with photos
- Partner logos section
- "Safety Is Our Priority" badge

**CTA:** "Let's Work Together" - inviting, not pushy

**Steal for Nwestco:** Division structure, project photos, testimonials with faces, heritage storytelling

---

### United Uptime - Why It Works

**Hero:** "We Keep You" (Running. Compliant. Profitable.) - outcome-focused

**Messaging:**
- "We Understand Your Challenges" with specific pain points
- "Straight Answers. Zero Guesswork." - confident
- FAQ-style layout addresses objections directly

**Design:**
- Navy + cyan + yellow - modern, energetic
- Cleaner, more contemporary feel
- Real photos of technicians and equipment

**Steal for Nwestco:** Pain-point messaging, "We Understand Your Challenges" framing, modern typography

---

### Guardian Fueling - The Floor, Not the Ceiling

**What Works:**
- "Fueling The Future" headline
- Clean grid layout for services
- "Guardian Connect" product feature prominent
- Service truck imagery (real, not stock)
- Dark blue/navy palette

**What's Weaker:**
- Less personality than Petro West or Kinley
- More corporate/sterile
- No faces, no testimonials visible
- Less emotional connection

**Note:** This is what "decent" looks like - Nwestco should aim higher

---

### Design Direction Summary

| Element | Current Nwestco | Recommendation |
|---------|----------------|----------------|
| **Hero Message** | "24/7 Service from Nwestco" | "We Keep You Running" or similar outcome-focused |
| **Color** | Muted `#476789` | Deeper navy `#25617C` (match logo), green accent |
| **Structure** | 7 competing service boxes | 3-5 clear service pillars |
| **Imagery** | Stock photos | Real photos of techs, trucks, projects |
| **Trust Signals** | None visible | CEO video, client logos, testimonials with faces |
| **Messaging** | Feature-focused | Pain-point and outcome-focused |
| **CTA** | Buried | Sticky header with "Request Service" always visible |

---

## Reference Sites Analysis

Sites the client likes - analyzed for patterns and inspiration:

---

### 1. Petro West (petrowestinc.com)
**Tandem Theory client** - "Really nice and professional" - CEO Mike

**Hero Message**: "We Fuel Your Business"

**What Works**:
- Clear one-stop-shop positioning (construction → service → maintenance → training)
- Customer-centric messaging ("doing business the right way")
- CEO video content builds trust
- Client carousel demonstrates reach
- SiteHarmony product showcase (compliance/monitoring tool)
- Multiple conversion paths (web form, phone prominent)

**Design**:
- Blue/white corporate palette
- Clean sans-serif typography
- Professional industrial photography
- Card-based service layouts

**Navigation**:
- Ground-Up Construction
- Light Construction & Upgrades
- Service & Maintenance
- Tank Cleaning
- Training Classes
- About Us
- Contact

**Notable Features**:
- Lazy-loading for performance
- Interactive video tabs
- Customer testimonial carousel
- Certification badges (Gilbarco, Passport, Veeder-Root)

---

### 2. Kinley Construction (kinleyconstruction.com)
**Tandem Theory client** - Aviation fueling, similar industry

**Hero Message**: "Built On Relationships. Reputation. Excellence. Service. Trust. Since 1895."

**What Works**:
- 129-year heritage creates instant credibility
- Deep industry specialization (not a generalist)
- 20+ customer testimonials with attribution
- Partnership logos build trust
- Six-generation company story
- Clear division structure

**Design**:
- Navy blue/white - corporate, trustworthy
- Clean sans-serif, focus on readability
- Industrial project photography
- Formal but approachable tone

**Navigation**:
- Our Story
- Our Divisions (Aviation, Government, Railroad, Energy, Buildings)
- Work with Us
- Projects
- Safety
- News
- Contact

**Notable Features**:
- "Request Bid" CTA prominent in header
- Interactive project slider
- Brochure download (lead capture)
- Project map

**Weakness**: Dense information hierarchy, homepage covers a lot

---

### 3. United Uptime (uniteduptime.com)
**Competitor** - "Just rebranded, nice flow and scrolling" - CEO Mike

**Hero Message**: "We Keep You Running. Compliant. Profitable."

**What Works**:
- Pain-point targeting with quantified impact ("One pump down 15 days can cost $7,879–$29,544")
- Transformation story (formerly D&H United Fueling Solutions)
- Addresses three customer fears: downtime, compliance, costs
- Recognizable client logos (Circle K, Tesla, Walmart, Pilot Flying J)
- Process visualization (diagnostic → dispatch → verify)
- Deep FAQ section

**Design**:
- Navy (#003B4A), Cyan (#0096D0), Lime (#43B12E)
- "Azo Sans" headlines, "Inter Tight" body
- Professional photography of technicians and equipment
- Modern, clean aesthetic

**Navigation**:
- About Us
- Tanknology (subsidiary)
- Services (8 offerings)
- Sales
- Financing
- Careers
- Contact

**Notable Features**:
- Interactive flip cards revealing benefits
- Animated gradient backgrounds
- Real-time search with typeahead
- Sticky header
- Schema markup (4.8/5 rating)

**Weakness**: Some placeholder content visible, dense on mobile

---

### 4. Guardian Fueling Technologies (guardianfueltech.com)
**Competitor** - "Decent competitor site" - CEO Mike

**Hero Message**: "Petroleum Equipment, Service, & Construction"

**What Works**:
- Three clear service pillars (equipment, service, construction)
- Robust technical implementation
- Mobile-optimized
- Strong security/performance optimization

**Design**:
- Professional neutral tones (grays, whites)
- Montserrat font family
- Corporate, clean aesthetic
- Fixed-width layouts with mobile adaptation

**Navigation**: Standard business layout with dropdowns

**Notable Features**:
- Advanced prefetching for performance
- Service worker integration
- Smooth page transitions

**Weakness**: Less distinctive personality than others

---

## Patterns Across Reference Sites

### What They All Do Well
| Pattern | Petro West | Kinley | United Uptime | Guardian |
|---------|------------|--------|---------------|----------|
| Clear hero message | ✓ | ✓ | ✓ | ✓ |
| Service pillars (3-5) | ✓ | ✓ | ✓ | ✓ |
| Client logos | ✓ | ✓ | ✓ | - |
| Prominent phone/CTA | ✓ | ✓ | ✓ | ✓ |
| Blue color palette | ✓ | ✓ | ✓ | - |
| Professional photography | ✓ | ✓ | ✓ | ✓ |
| Testimonials | ✓ | ✓ | ✓ | - |

### Design Direction for Nwestco
Based on what the client likes:
1. **Blue-dominant palette** - All favorites use navy/blue (Nwestco already has blue/green brand)
2. **Service pillars, not lists** - Organize around 3-5 clear offerings
3. **Pain-point messaging** - United Uptime's quantified impact resonates
4. **Heritage/credibility signals** - Kinley's history, Petro West's partnerships
5. **Sticky header with CTA** - "Request Service" or "Get Quote" always visible
6. **Client logos** - Build trust immediately
7. **Clean, professional photography** - Industrial but not stock-feeling

### What Nwestco Should Steal
1. **From Petro West**: "We Fuel Your Business" clarity, CEO video content
2. **From Kinley**: Division structure, "Request Bid" prominence, heritage storytelling
3. **From United Uptime**: Pain-point quantification, "Keep You Running" promise, flip cards
4. **From Guardian**: Technical performance, mobile optimization

---

## Website Strategy Implications

### Structural Changes Needed
1. **Consolidate service verticals** - Organize around lifecycle wheel, not 7 separate service lines
2. **Lead with uptime** - "Maximize uptime" should be the hero message
3. **Geographic confidence** - "We have you covered" across Western US
4. **Audience segmentation** - Consider separate paths/landing pages for customers vs. careers vs. M&A

### Messaging Shifts
| Current | Should Be |
|---------|-----------|
| "We can help" | "Maximize your uptime" |
| 7 competing verticals | Unified lifecycle approach |
| Generic service company | Western US fuel/car wash specialists |
| List of services | One-stop shop promise |

### Technical Recommendations
- Add CRM integration (forms → sales pipeline)
- Implement marketing automation for lead nurturing
- Add CDN for performance
- Proper analytics/conversion tracking

---

## Project Team (AI Agents)

| Agent | Role | Responsibility |
|-------|------|----------------|
| `workflow-project-manager` | Project Manager | Break project into tasks, manage scope, track progress |
| `workflow-architect-ux` | UX Architect | Site architecture, IA, UX foundations, CSS systems |
| `design-brand-guardian` | Brand Strategist | Ensure alignment with Nwestco brand, consistency |
| `marketing-content-strategy` | Content Strategist | Messaging framework, copy direction, editorial |
| `marketing-seo-technical` | SEO Specialist | SEO-friendly architecture, technical optimization |
| `design-ui-systems` | UI Designer | Component design, visual system, style guide |
| `engineering-frontend-development` | Frontend Developer | WordPress build, implementation |
| `marketing-conversion-optimization` | CRO Specialist | Forms, CTAs, conversion paths |

---

## Project Scope

### Approach
1. Take existing site content and improve it (not starting from scratch)
2. Fix UX problems identified (ragù issue, unclear messaging, buried CTAs)
3. Make it polished, clear, and professional ($120M company, not $10M)
4. **Deliver 3 design options** as full HTML sites for client to choose from

### Design Options to Build
| Option | Description |
|--------|-------------|
| **Option A** | Fully scrollable one-page website with anchor navigation |
| **Option B** | TBD (traditional multi-page, Petro West style?) |
| **Option C** | TBD (modern/bold, United Uptime style?) |

### Technical Scope
- **Output**: 3 complete HTML/CSS sites (not WordPress yet)
- **Forms**: Contact forms, quote request forms (minimal complexity)
- **No heavy application development** - informational site with forms
- **Final deliverable**: Client picks preferred option → build in WordPress

### Content Scope
- Rewrite/improve existing content (not net-new)
- Apply messaging framework from internal strategy deck
- Consolidate 7 verticals into cleaner service structure

---

## Next Steps

1. ~~Read client documents~~ Done
2. ~~Analyze current website~~ Done
3. ~~Review internal marketing strategy~~ Done
4. ~~Analyze reference sites~~ Done
5. ~~Visual analysis from screenshots~~ Done
6. **Project Manager**: Create task breakdown (UX first)
7. **UX Architect**: Propose site architecture/IA
8. **Content Strategist**: Develop messaging framework
9. **Brand Guardian**: Validate brand alignment
10. **UI Designer**: Design direction/component system
11. **Frontend Developer**: Build 3 HTML options

---

## Contacts

**Client**: Mike Ochoa, CEO
**Referral**: Adam (Petro West)

---

*Last Updated: November 26, 2025*
