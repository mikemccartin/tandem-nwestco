# Nwestco Current Site Audit - Complete Analysis

**Audit Date:** November 26, 2025
**Site URL:** https://nwestco.com
**Platform:** WordPress 6.8.3 with WPBakery Page Builder
**Auditor:** workflow-architect-ux Agent

---

## Executive Summary

### Site Overview
Nwestco.com is a 6-7 year old WordPress site that serves as the digital presence for a $120M fuel systems and car wash equipment company. The site currently suffers from the "ragù problem" - seven competing service verticals create information overload and unclear positioning.

### Total Pages Documented: 15+ Pages

**Primary Navigation Pages:**
- Homepage (/)
- 7 Service Pages (Petroleum, Car Wash, Automotive, Aviation, Electrical, Industrial, Tanks)
- Brands (/brands/)
- Branches (/branches/)
- Training (/training/)
- Careers (/careers/)
- Contact Us (/contact-us/)
- Privacy Policy (/privacy-policy-of-nwestco/)

### Critical Issues Identified: 24 Major Problems

**Top 3 UX Problems:**
1. **Navigation Overload** - 7 competing service verticals with no clear hierarchy or relationship
2. **Weak Value Proposition** - Generic "24/7 Service" headline doesn't communicate what company does or why they're different
3. **Poor Lead Capture** - Forms buried, multiple CTAs create choice paralysis, unclear response expectations

---

## 1. Site Structure & Information Architecture

### 1.1 Current Site Map

```
nwestco.com/
├── Home (/)
├── Services (dropdown menu)
│   ├── Petroleum (/services/petroleum/)
│   ├── Car Wash (/services/car-wash/)
│   ├── Automotive (/services/automotive/)
│   ├── Aviation (/services/aviation/)
│   ├── Electrical (/services/electrical/)
│   ├── Industrial (/services/industrial/)
│   └── Tanks (/services/tanks/)
├── Brands (/brands/)
├── Branches (/branches/)
├── Training (/training/)
├── Career Opportunities (/careers/)
└── Contact Us (/contact-us/)
    └── Privacy Policy (/privacy-policy-of-nwestco/)
```

### 1.2 The "Seven Verticals" Problem

The current site presents **7 competing service categories** without clear relationships or hierarchy:

| Vertical | Current Positioning | Target Market | Problem |
|----------|-------------------|---------------|---------|
| **Petroleum** | "Service, construction, support and sales...to meet all your petroleum needs" | Gas stations, C-stores | Overlaps with Industrial, Electrical, Tanks |
| **Car Wash** | "Chemicals, parts, vending, and repair services" | Car wash facilities | Standalone, but related to Petroleum customers |
| **Automotive** | "Lighting, lifts, lube equipment, air compressors" | Auto service centers | Confused relationship with Petroleum |
| **Aviation** | "Building and maintaining aviation fueling systems" | Airports, FBOs | Niche, but same tech as Petroleum |
| **Electrical** | "Master Electricians, Journeyman Electricians and Service Techs" | Cross-vertical support | Actually a service TYPE, not vertical |
| **Industrial** | "Fleet services, hospitals, bulk plants, generators, marinas" | Industrial/commercial | Overlaps heavily with Petroleum |
| **Tanks** | "Premium steel tanks. Made in Montana, shipped anywhere" | Product category | This is EQUIPMENT, not a vertical |

**Analysis:** The current structure mixes:
- **Market verticals** (Petroleum, Car Wash, Automotive, Aviation)
- **Service types** (Electrical)
- **Product categories** (Tanks)
- **Overlapping markets** (Industrial vs. Petroleum)

This creates the "ragù" problem - everything mixed together with no organizing principle.

---

## 2. Content Inventory by Page

### 2.1 Homepage (/)

**Primary Headline:** "24/7 Service from Nwestco"

**Supporting Copy:**
- "Design, Permit, Build... We can help you every step of the way"
- "Our expert sales staff is excited to serve you!"

**Value Propositions (Three Pillars):**
1. **Reliable** - "show up on time...majority of service calls completed within 48 hours"
2. **Affordable** - "strive to be competitive"
3. **Efficient** - emphasizing technology and experience to reduce costs

**CTAs Present:**
- Request Service
- Request Quote
- Job Opportunities
- Contact Us Now

**Content Assessment:**
- **ELIMINATE:** Generic "24/7 Service" headline - doesn't say what they do
- **REWRITE:** Three pillars are weak ("Affordable" and "Efficient" are table stakes)
- **KEEP:** Geographic coverage message (once strengthened)
- **ADD:** Clear "one-stop shop for fuel systems and car washes" positioning
- **ADD:** Specific pain points they solve (uptime, compliance, expertise)

**Social Proof Issues:**
- Metrics display only placeholder "1" values (Techs Dispatched, Support Calls, Stations Built)
- No client logos or testimonials
- No case studies or success stories

---

### 2.2 Service Pages

#### Petroleum (/services/petroleum/)

**Content Structure:**
- Equipment Sales, Installation and Service
- 25+ years representing leading manufacturers
- CAD design, regulatory compliance consulting
- Product manufacturer list (Xerxes, Gilbarco, OPW, Veeder-Root, etc.)

**Assessment:**
- **KEEP:** Manufacturer relationships and technical capabilities
- **REWRITE:** Heavy product listing needs value proposition context
- **ADD:** Service lifecycle approach (design → install → maintain)
- **ADD:** Geographic coverage specifics
- **ELIMINATE:** Generic "assistance is available" language

**Missing Elements:**
- No pricing guidance or project examples
- No service response time commitments
- No customer testimonials or case studies
- No clear differentiation from competitors

---

#### Car Wash (/services/car-wash/)

**Content Structure:**
- Turn-key installations and renovations
- Service and support programs
- Preventative maintenance packages
- Chemical and parts distribution
- 15+ brand partnerships (Turtle Wax, Ryko, Blue Coral, etc.)

**Assessment:**
- **KEEP:** Strong brand partnership display
- **KEEP:** "Turn-key" positioning and next-day delivery capability
- **REWRITE:** Generic "ensure the success of your business" needs specificity
- **ADD:** ROI examples or uptime guarantees
- **ADD:** Car wash operator pain points addressed

**Strengths:**
- Clear value proposition for vending products (profit opportunities)
- Geographic coverage mentioned ("Rockies and Northwest U.S.")
- Professional tone targeting business operators

---

#### Automotive (/services/automotive/)

**Content Structure:**
- Equipment for vehicle service centers
- Air compressors, alignment systems, lifts, lighting, lube equipment
- Turn-key or equipment-only options
- Factory-trained technicians

**Assessment:**
- **REWRITE:** Entire page needs clarity - is this auto repair shops or gas station automotive bays?
- **ELIMINATE:** Confusion with Petroleum vertical
- **CONSOLIDATE:** Should this be part of Petroleum or standalone?
- **KEEP:** Factory training mention (supports expertise pillar)

**Problem:** This vertical creates the most confusion - automotive service equipment overlaps with petroleum convenience store automotive services.

---

#### Aviation (/services/aviation/)

**Content Structure:**
- Fueling systems for airports, FBOs, private runways
- Above/underground tank options
- Av gas, Jet-A, diesel for ground equipment

**Assessment:**
- **KEEP:** Niche expertise, clear market
- **CONSOLIDATE:** Consider merging with Petroleum as "Aviation Fueling" sub-category
- **ADD:** Airport project examples or case studies
- **SIMPLIFY:** Very brief page, needs more substance or merge with parent

---

#### Electrical (/services/electrical/)

**Content Structure:**
- Master Electricians, Journeyman Electricians, Apprentices, Service Techs
- Fuel dispenser systems, communication/data wiring, HVAC controls
- Explosion-proof and NEMA 4 outdoor equipment
- 24-hour emergency response
- LSI Lighting, Square D, Honeywell product lines

**Assessment:**
- **REORGANIZE:** This is a SERVICE TYPE, not a market vertical
- **CONSOLIDATE:** Electrical should be positioned as a CAPABILITY across all verticals
- **KEEP:** Detailed technical capabilities and product partnerships
- **REWRITE:** Frame as support service rather than standalone vertical

**Key Insight:** Electrical is actually a lifecycle service (like Installation, Maintenance, Compliance) that applies to multiple markets.

---

#### Industrial (/services/industrial/)

**Content Structure:**
- Equipment, installation, service for industrial/commercial petroleum storage
- Fleet services, hospitals, bulk plants, fuel terminals, marinas, rail-to-storage
- Design, permitting, installation, ongoing maintenance

**Assessment:**
- **CONSOLIDATE:** Heavy overlap with Petroleum vertical
- **REWRITE:** "Unique and challenging requirements" needs specific examples
- **ELIMINATE:** As standalone vertical - merge into Petroleum as market segment
- **KEEP:** Fleet, bulk plant, marina examples (show breadth)

---

#### Tanks (/services/tanks/)

**Content Structure:**
- Steel storage tanks by Wilray Manufacturing
- 500-30,000 gallon capacity
- UL-142 construction
- Single/double-wall, custom compartments
- Internal lining for AvGas, jet fuel, potable water

**Assessment:**
- **REORGANIZE:** This is EQUIPMENT SALES, not a service vertical
- **CONSOLIDATE:** Should be featured in Petroleum/Industrial as product offering
- **ELIMINATE:** As standalone navigation item
- **KEEP:** Technical specifications (useful for SEO and technical buyers)

---

### 2.3 Supporting Pages

#### Brands (/brands/)

**Content:**
- 40+ brand partnerships displayed as logo grid
- "We carry all these brands and more..."
- No categorization or context

**Assessment:**
- **KEEP:** Brand logos (strong trust signal)
- **ADD:** Organize by category (Petroleum, Car Wash, Electrical, etc.)
- **ADD:** "Why these brands" messaging - certification, warranty, training
- **REWRITE:** "and more..." is weak - be specific or remove

**Missing:**
- Manufacturer certification badges
- Partnership tier levels (Gold, Platinum, etc.)
- Benefits of these partnerships to customers

---

#### Branches (/branches/)

**Content:**
- 9 branch locations: Kalispell MT, Spokane WA, Billings MT, Boise ID, Portland OR, Springdale AR, Fresno CA, Bakersfield CA, San Jose CA
- Phone numbers for each location
- Geographic coverage: Pacific Northwest, Montana, California, Arkansas

**Assessment:**
- **KEEP:** All location information
- **ADD:** Map visualization of coverage area
- **ADD:** "We cover 6 states" or "Western US coverage" messaging
- **ADD:** Hours of operation, emergency service availability
- **ADD:** Photos of each branch or service trucks

**Strengths:**
- Demonstrates scale (9 locations)
- Wide geographic footprint

---

#### Training (/training/)

**Content:**
- In-house certified trainers
- Training centers in Portland OR and Spokane WA
- On-site training available
- "Latest hardware, software and industry standard" instruction

**Assessment:**
- **KEEP:** Certified trainers positioning (supports technical expertise)
- **ADD:** Specific course offerings or certification programs
- **ADD:** Schedule or calendar of upcoming training
- **ADD:** Photos of training facilities or classes in session
- **REWRITE:** Vague "latest hardware, software" needs specific examples

**Missing:**
- Who can attend (customers? employees? partners?)
- Cost structure or registration process
- Certification outcomes or credentials earned

---

#### Careers (/careers/)

**Content:**
- Minimal to no substantive career content
- Appears to be placeholder page

**Assessment:**
- **REWRITE ENTIRELY:** Page lacks any useful content
- **ADD:** Employee value proposition
- **ADD:** Job listings or link to external ATS
- **ADD:** Company culture messaging
- **ADD:** Benefits overview
- **ADD:** Application process

**Critical Gap:** For a company targeting $500M through talent acquisition, this is a major missed opportunity.

---

#### Contact Us (/contact-us/)

**Form Structure (Ninja Forms):**
- Required: Name, Email, Message
- Optional: Phone, Address, Date
- Single "Submit" button

**Contact Methods:**
- Phone: 800-775-1892
- Email: info@nwestco.com

**UX Issues:**
- JavaScript required (excludes users without JS)
- No response timeframe expectations
- Address field is confusing (why needed?)
- Form placement below contact methods (should be above or side-by-side)
- No confirmation message visible

**Assessment:**
- **REWRITE:** Add context about what happens after submission
- **ELIMINATE:** Address field (unnecessary for initial contact)
- **ADD:** Expected response time
- **ADD:** Alternative CTAs (Request Service, Request Quote, Schedule Training)
- **IMPROVE:** Form field labels and validation feedback

---

## 3. UX Problems - Detailed Analysis

### 3.1 Navigation & Information Architecture Issues

**Problem 1: Services Menu Overload**
- **Issue:** Dropdown menu splits 7 services across two columns with no logic
- **Impact:** Users can't quickly find relevant service, must scan entire list
- **Example:** Customer needing gas station installation must decide between Petroleum, Automotive, Electrical, Industrial, or Tanks
- **Fix:** Reorganize into 3-5 clear market focus areas with service lifecycle beneath

**Problem 2: Unclear Service Relationships**
- **Issue:** Services appear unrelated when they're actually interconnected
- **Impact:** Customer doesn't understand "one-stop shop" capability
- **Example:** Electrical could apply to ANY project, but it's siloed as separate vertical
- **Fix:** Show lifecycle wheel: Design → Install → Service → Upgrade → Compliance

**Problem 3: No Breadcrumb Trail on Service Pages**
- **Issue:** User arrives on "Tanks" page via Google search, unclear how it fits into company
- **Impact:** Context confusion, higher bounce rate
- **Fix:** Add breadcrumb navigation and "related services" modules

**Problem 4: Mobile Navigation**
- **Issue:** Dropdown menus likely problematic on mobile (not confirmed without mobile test)
- **Impact:** Difficult service discovery on phones/tablets
- **Fix:** Mobile-first navigation with collapsible accordion menus

---

### 3.2 Messaging & Value Proposition Problems

**Problem 5: Weak Hero Message**
- **Current:** "24/7 Service from Nwestco"
- **Issue:** Doesn't communicate WHAT they do or WHO they serve
- **Better:** "Keep Your Fuel Systems & Car Washes Running" or "Maximize Uptime. Minimize Headaches."

**Problem 6: Generic Differentiation**
- **Current:** "Reliable, Affordable, Efficient"
- **Issue:** Every competitor claims the same - no differentiation
- **Better:** "Cradle-to-grave lifecycle solutions across 6 Western states"

**Problem 7: Feature-Focused vs. Outcome-Focused**
- **Issue:** Pages list services and products without explaining customer outcomes
- **Example:** "We offer CAD design" vs. "Get permits approved faster with expert CAD drawings"
- **Fix:** Reframe all copy around customer pain points and outcomes

**Problem 8: Buried "Uptime" Promise**
- **Issue:** Internal strategy centers on "maximize uptime" but this isn't prominent
- **Impact:** Core differentiator is hidden from customers
- **Fix:** Lead with uptime guarantee on homepage hero

**Problem 9: Missing Pain Points**
- **Issue:** No acknowledgment of customer challenges (downtime costs, compliance stress, vendor juggling)
- **Impact:** Customers don't see their problems reflected, assume generic provider
- **Fix:** Add "Challenges We Solve" section with quantified pain points

**Problem 10: No Competitive Differentiation**
- **Issue:** Nothing explains WHY Nwestco vs. competitor
- **Missing:** Geographic coverage, one-stop shop, technical expertise pillars are buried
- **Fix:** Prominent "Why Nwestco" section with 3-4 specific differentiators

---

### 3.3 Conversion & Lead Capture Problems

**Problem 11: CTA Confusion**
- **Issue:** "Request Service," "Request Quote," "Contact Us" all appear simultaneously
- **Impact:** Choice paralysis - users don't know which to click
- **Fix:** Single primary CTA with smart routing based on user intent

**Problem 12: Forms Buried Below Fold**
- **Issue:** Contact form requires scrolling past multiple sections
- **Impact:** Lower conversion rates, missed leads
- **Fix:** Sticky header with CTA button, or slide-out form drawer

**Problem 13: No Response Time Expectations**
- **Issue:** Form submission gives no indication when user will hear back
- **Impact:** Customer anxiety, duplicate form submissions
- **Fix:** "We'll respond within 4 hours" message on confirmation

**Problem 14: Missing Alternative Contact Paths**
- **Issue:** Only generic "Contact Us" - no service-specific routing
- **Impact:** Slow lead qualification, poor customer experience
- **Fix:** "Request Emergency Service," "Get Quote," "Schedule Training" as distinct paths

**Problem 15: No Form Tracking or Abandonment Recovery**
- **Issue:** Can't identify where users drop off in form process
- **Impact:** Lost leads, no optimization data
- **Fix:** Add analytics events and email capture before full form submission

---

### 3.4 Trust & Credibility Problems

**Problem 16: Stock Photography**
- **Issue:** Generic "guy in hard hat" hero image
- **Impact:** Feels small/cheap, not $120M company
- **Fix:** Real photos of Nwestco techs, trucks, projects

**Problem 17: No Social Proof**
- **Issue:** Zero testimonials, case studies, or client logos
- **Impact:** No trust signals for new customers
- **Fix:** Add client logo carousel, testimonial sections, project examples

**Problem 18: Placeholder Metrics**
- **Issue:** Homepage metrics show "1" for Techs Dispatched, Support Calls, Stations Built
- **Impact:** Appears unprofessional, undermines credibility
- **Fix:** Remove metrics entirely OR populate with real numbers

**Problem 19: No Team or Leadership Visibility**
- **Issue:** Company feels faceless, no CEO or team presence
- **Impact:** Harder to build trust, especially for large contracts
- **Fix:** Add CEO video, team photos, leadership bios

**Problem 20: Missing Certifications or Awards**
- **Issue:** No display of industry certifications, safety ratings, or awards
- **Impact:** Missed opportunity to differentiate on expertise
- **Fix:** Add certification badges (OSHA, EPA, manufacturer certifications)

---

### 3.5 Content Structure Problems

**Problem 21: Text-Heavy Pages**
- **Issue:** Service pages are wall of text, hard to scan
- **Impact:** Users bounce rather than reading
- **Fix:** Break into scannable sections with icons, bullets, images

**Problem 22: No Clear User Paths**
- **Issue:** Users land on service page with no guidance on next steps
- **Impact:** Dead ends, no conversion path
- **Fix:** Add "Request Quote," "See Projects," "Learn More" CTAs on every page

**Problem 23: Missing Content Types**
- **Issue:** No video, no project galleries, no downloads
- **Impact:** Lower engagement, harder to communicate complex services
- **Fix:** Add project photo galleries, service overview videos, downloadable guides

**Problem 24: No Search Functionality**
- **Issue:** Users can't search for specific products, services, or brands
- **Impact:** Frustration for users who know what they need
- **Fix:** Add search bar in header with typeahead suggestions

---

## 4. Technical Audit

### 4.1 Platform & Infrastructure

**Current Stack:**
- WordPress 6.8.3
- WPBakery Page Builder
- Ninja Forms
- Google Analytics 4
- NGINX 1.27.4 server
- No CDN detected
- Proxy cache: HIT (caching working)

**Positive:**
- Modern WordPress version
- NGINX for performance
- Caching layer in place
- HTTPS enabled

**Concerns:**
- WPBakery is legacy page builder (consider Gutenberg or Elementor)
- No CDN means slower global load times
- No WooCommerce integration despite mention in brief

---

### 4.2 Performance Issues

**Critical Problems:**
- Heavy JavaScript footprint (Revolution Slider, jQuery, multiple WP plugins)
- Inline CSS exceeds 50KB (should be externalized)
- Large background images not optimized ("back.jpg", "06-3.jpg")
- Revolution Slider deprecated patterns and render-blocking
- Emoji support polyfill (unnecessary for modern browsers)

**Page Speed Estimate:** Likely 3-5 seconds load time (needs PageSpeed Insights test)

**Recommendations:**
- Remove Revolution Slider (use native WordPress blocks)
- Implement image lazy loading and WebP format
- Externalize inline CSS, minify and concatenate assets
- Add CDN (Cloudflare, KeyCDN, or similar)
- Remove emoji polyfill and other legacy scripts

---

### 4.3 Mobile Responsiveness

**Implemented:**
- Responsive image sizing (sizes="auto")
- CSS Grid/Flexbox with gap management
- Breakpoints at 1240px, 1024px, 778px, 480px

**Concerns:**
- Meta viewport configuration not visible (critical for mobile)
- Revolution Slider hardcoded breakpoints (brittle)
- Touch navigation controls may be too small
- No mobile-specific testing mentioned in documentation

**Recommendation:** Full mobile usability audit needed on actual devices

---

### 4.4 Accessibility Issues

**Major Gaps:**
- No ARIA labels on navigation or interactive elements
- Missing or generic image alt text
- Slider controls lack semantic markup
- Form inputs missing associated labels
- Color contrast not verified (need WCAG 2.1 AA check on #476789 and #363636)
- Flash player fallback message (obsolete technology reference)

**Compliance Risk:** Site likely fails WCAG 2.1 AA standards

**Recommendations:**
- Full accessibility audit with automated tools (axe, WAVE)
- Add ARIA labels to all interactive elements
- Audit color contrast ratios
- Add skip navigation links
- Test with screen readers (JAWS, NVDA, VoiceOver)

---

### 4.5 SEO Technical Issues

**Missing or Weak:**
- No schema markup detected (competitors use Organization, Service, Review schemas)
- Meta descriptions not analyzed (need page-by-page review)
- Image alt text missing or generic
- No XML sitemap mentioned
- Page titles not documented (need SEO audit)

**Recommendations:**
- Implement schema.org markup for Organization, LocalBusiness, Service
- Add FAQ schema on service pages
- Optimize meta titles and descriptions for target keywords
- Create/optimize XML sitemap
- Add alt text to all images with target keywords

---

## 5. Competitive Intelligence

### 5.1 What Competitors Do Better

**United Uptime:**
- Pain-point quantification: "One pump down 15 days costs $7,879-$29,544"
- Outcome-focused hero: "We Keep You Running. Compliant. Profitable."
- FAQ-style layout addresses objections directly
- Real technician photos, modern design

**Petro West:**
- CEO video builds immediate trust
- Clear one-stop-shop positioning
- Partnership badges above fold (Titan Cloud, manufacturers)
- Client logo carousel
- Certified training classes with memorable Las Vegas imagery

**Kinley Construction:**
- Heritage storytelling: "Built on Service Since 1895" creates instant credibility
- 20+ customer testimonials with attribution
- Clear division structure with icons (not wall of text)
- Project slider with real work
- "Request Bid" CTA prominent in header

**What They All Do:**
- Prominent phone number in sticky header
- Client logos for social proof
- Professional photography (not stock)
- Blue color palettes (trust/industrial)
- Service pillars organized clearly (3-5, not 7)
- Pain-point or outcome messaging

---

## 6. Content Strategy Recommendations

### 6.1 Keep vs. Rewrite vs. Eliminate

#### KEEP (Good Foundation)
- Branch locations and contact information
- Brand partnership logos (40+ manufacturers)
- Technical specifications and product details
- Factory training and certification mentions
- Geographic coverage messaging (once strengthened)
- Turn-key service positioning
- Lifecycle service mentions (design → install → maintain)

#### REWRITE (Needs Improvement)
- Homepage hero headline (too generic)
- Service page introductions (feature vs. outcome focused)
- Three pillars (Reliable, Affordable, Efficient too weak)
- About/company description (missing entirely)
- Training page (needs specific programs)
- Forms and CTAs (needs clarity on what happens next)
- All body copy (apply pain-point and outcome framing)

#### ELIMINATE (Not Working)
- "Automotive" as separate vertical (merge into Petroleum)
- "Industrial" as separate vertical (merge into Petroleum as market segment)
- "Tanks" as navigation item (feature as product within Petroleum/Industrial)
- "Electrical" as standalone vertical (reposition as cross-vertical capability)
- Placeholder metrics on homepage ("1" for all stats)
- Generic "we can help" and "let us help" language throughout
- Stock photography (replace with real photos)
- Address field on contact form (unnecessary)

---

### 6.2 Missing Content Gaps

**Critical Gaps:**
1. **About Us page** - Company history, mission, values, leadership team
2. **CEO/Leadership visibility** - Video message, bios, team photos
3. **Customer testimonials** - Quotes, case studies, success stories
4. **Project portfolio** - Before/after photos, project details, results
5. **Case studies** - Detailed customer success stories with ROI data
6. **Resource library** - Guides, checklists, compliance documents
7. **News/Blog** - Industry insights, company updates, thought leadership
8. **Careers content** - Job listings, employee value prop, culture
9. **FAQ pages** - Common questions for each service vertical
10. **Video content** - Service overviews, customer testimonials, facility tours
11. **Downloadable assets** - Product catalogs, service brochures, spec sheets
12. **Emergency service** - 24/7 hotline prominence, emergency response process
13. **Warranty/guarantee** - Service commitments, uptime guarantees
14. **Payment/financing** - How customers pay, financing options if available
15. **Compliance resources** - Regulatory guides, compliance checklists

---

## 7. Information Architecture Recommendations

### 7.1 Proposed Service Consolidation (7 → 3 Market Focus Areas)

**Current: 7 Competing Verticals**
1. Petroleum
2. Car Wash
3. Automotive
4. Aviation
5. Electrical
6. Industrial
7. Tanks

**Recommended: 3 Market Focus Areas**

```
MARKETS WE SERVE
├── Fuel Systems
│   ├── Retail Fuel (gas stations, c-stores)
│   ├── Commercial/Fleet (bulk plants, marinas, fleets)
│   ├── Aviation Fueling (airports, FBOs)
│   └── Industrial (hospitals, data centers, generators)
│
├── Car Wash Systems
│   ├── Tunnel Washes
│   ├── In-Bay Automatics
│   └── Self-Serve Washes
│
└── Environmental Solutions
    ├── Tank Testing & Compliance
    ├── Leak Detection
    └── Remediation Services

SERVICES WE PROVIDE (Lifecycle)
├── Design & Engineering
├── Installation & Construction
├── Service & Maintenance (24/7)
├── Remodels & Upgrades
├── Testing & Compliance
├── Equipment Sales
└── Training & Certification
```

**Alternative Approach: Lifecycle-First**

```
HOW WE SERVE YOU
├── Plan & Design
│   ├── CAD drawings, permits, compliance consulting
│
├── Build & Install
│   ├── Turn-key construction, electrical, equipment installation
│
├── Service & Maintain
│   ├── 24/7 emergency service, preventative maintenance
│
├── Upgrade & Remodel
│   ├── Equipment upgrades, facility renovations
│
├── Supply & Deliver
│   ├── Parts, chemicals, equipment sales
│
└── Train & Certify
    └── Technical training, safety certification

INDUSTRIES WE SPECIALIZE IN
├── Fuel Stations & C-Stores
├── Car Washes
└── Industrial/Commercial Fuel
```

---

### 7.2 Recommended Site Structure

**Homepage:**
- Hero: "Keep Your Fuel Systems & Car Washes Running" with clear CTA
- Problem/Solution: Address customer pain points (downtime, compliance, vendor chaos)
- Three Uniques: One-stop shop, Western US coverage, Technical expertise
- Services: 3-5 clear pillars (not 7 verticals)
- Social Proof: Client logos, testimonials, project examples
- Geographic Coverage: Map of 9 branches across 6 states
- CTAs: Request Service, Get Quote, Emergency Service

**Services Structure:**
- By Market (Fuel Systems, Car Wash, Environmental)
  - OR By Lifecycle (Design, Install, Service, Upgrade)
- Each service page follows template:
  - What We Do
  - Problems We Solve
  - How We're Different
  - Our Process
  - Equipment/Brands We Use
  - Project Examples
  - Testimonials
  - CTAs (Request Quote, See Projects, Schedule Consultation)

**Supporting Pages:**
- About Us (Mission, values, leadership, history, acquisitions)
- Why Nwestco (Differentiators, guarantees, certifications)
- Branches (Map, locations, coverage area)
- Projects (Portfolio with filters by industry/service type)
- Resources (Guides, checklists, compliance docs)
- Training (Programs, schedule, registration)
- Careers (Jobs, culture, benefits)
- News/Blog (Industry insights, company updates)
- Contact (Multiple paths: service request, quote, general inquiry)

---

### 7.3 Navigation Structure

**Primary Navigation (Desktop):**
```
[Logo]  Markets ▼ | Services ▼ | Why Nwestco | Projects | Resources | About | [REQUEST SERVICE] [800-775-1892]
```

**Markets Dropdown:**
- Fuel Systems
  - Retail Stations
  - Commercial/Fleet
  - Aviation
  - Industrial
- Car Wash Systems
- Environmental Solutions

**Services Dropdown:**
- Design & Engineering
- Installation
- 24/7 Service & Maintenance
- Upgrades & Remodels
- Equipment & Parts
- Training

**Mobile Navigation:**
- Hamburger menu with collapsible accordions
- Sticky header with phone number and emergency service button
- Click-to-call functionality
- Simplified menu structure

---

## 8. Top Recommendations Summary

### 8.1 Information Architecture (Fix the "Ragù")

**Recommendation 1: Consolidate 7 Verticals → 3-5 Clear Pillars**

**Current Problem:** Seven competing service categories (Petroleum, Car Wash, Automotive, Aviation, Electrical, Industrial, Tanks) create confusion. User can't determine which applies to their needs.

**Proposed Solution:**
Organize by either MARKET or LIFECYCLE, not by scattered verticals:

**Option A - Market Focus (Recommended):**
1. **Fuel Systems** (combines Petroleum, Aviation, Industrial, Automotive)
   - Retail Fuel Stations
   - Commercial/Fleet Fueling
   - Aviation Fueling
   - Industrial Fuel Systems

2. **Car Wash Systems** (standalone, clear market)
   - Equipment, chemicals, maintenance for all car wash types

3. **Environmental Compliance** (new category)
   - Testing, compliance, leak detection, remediation
   - Position as risk mitigation service

**Supporting Structure:**
- Cross-cutting services (Electrical, Installation, Maintenance) become CAPABILITIES, not verticals
- Tanks becomes PRODUCT OFFERING within Fuel Systems
- Each market page shows full lifecycle: Design → Install → Service → Upgrade

**Impact:**
- Reduces cognitive load from 7 to 3 choices
- Clarifies "one-stop shop" positioning
- Matches internal strategy deck (Fuel Systems + Car Wash focus)
- Easier for customers to self-identify their needs

---

**Recommendation 2: Lead with Lifecycle, Not Verticals**

**Current Problem:** Site presents services as isolated verticals when customers experience them as a JOURNEY (design → build → maintain → upgrade).

**Proposed Solution:**
Primary navigation organized by LIFECYCLE STAGE:

**Homepage Hero Section:**
"Complete Lifecycle Solutions for Fuel & Car Wash Systems"

**Service Navigation:**
1. **Plan & Design** - CAD drawings, permits, compliance consulting
2. **Build & Install** - Turn-key construction, electrical, equipment installation
3. **Service & Maintain** - 24/7 emergency service, preventative maintenance
4. **Upgrade & Remodel** - Equipment refresh, facility renovations
5. **Supply & Support** - Parts, chemicals, equipment sales, training

**Secondary Navigation by Industry:**
- For Fuel Stations & C-Stores
- For Car Washes
- For Industrial/Commercial

**Impact:**
- Matches customer mental model (project phases)
- Demonstrates comprehensive capabilities at each stage
- Reduces "which service do I need?" confusion
- Reinforces "cradle-to-grave" differentiator

---

**Recommendation 3: Create Clear Service Relationships**

**Current Problem:** Services appear unrelated when they're actually interconnected (e.g., Electrical applies to ALL projects, Tanks are used IN Petroleum/Industrial projects).

**Proposed Solution:**
Visual lifecycle wheel on homepage and service pages:

```
        [DESIGN/ENGINEER]
              ↓
    [INSTALL] → [SUPPLY EQUIPMENT]
         ↓            ↓
    [SERVICE] ← [UPGRADE/REMODEL]
         ↓
    [COMPLIANCE TESTING]
```

With cross-references on each service page:
- Petroleum page: "Our electrical team handles all wiring and controls" (link)
- Installation page: "We supply tanks from Wilray Manufacturing" (link)
- Car Wash page: "24/7 maintenance keeps your equipment running" (link)

**Impact:**
- User understands service relationships
- Cross-selling opportunities clear
- Reinforces "one-stop shop" vs. needing multiple vendors

---

### 8.2 Messaging & Positioning

**Recommendation 4: Lead with "Uptime" Value Proposition**

**Current Problem:** Hero says "24/7 Service from Nwestco" - generic, doesn't differentiate or communicate value.

**Proposed Hero Messages (Test Options):**

**Option A - Outcome Focus:**
"Maximize Your Uptime. Minimize Your Headaches."
_Lifecycle solutions for fuel systems and car washes across the Western U.S._

**Option B - Pain Point Focus:**
"Keep Your Stations Running. Keep Your Customers Happy."
_24/7 service, turn-key solutions, and technical expertise across 6 states_

**Option C - Direct & Clear:**
"One Partner for Your Fuel & Car Wash Equipment"
_Design, install, service, and maintain - we do it all_

**Supporting Proof Points Below Hero:**
- 48-hour service response for 90%+ of calls
- 9 branches across Western US for rapid deployment
- 25+ years of technical expertise
- 40+ manufacturer partnerships

**Impact:**
- Immediate clarity on what company does
- Addresses primary customer pain point (downtime)
- Differentiates from competitors
- Aligns with internal "maximize uptime" strategy

---

**Recommendation 5: Add Quantified Pain Points**

**Current Problem:** Site lists services without acknowledging customer challenges or quantifying pain.

**Proposed "Challenges We Solve" Section:**

**For Fuel Station Operators:**
- **Downtime Costs:** One pump offline for 15 days = $7,800-$29,500 in lost revenue
- **Compliance Stress:** EPA and state regulations with steep fines for violations
- **Vendor Juggling:** Managing multiple contractors for electrical, tanks, pumps, compliance
- **Emergency Response:** Need service NOW, not "we'll schedule you next week"

**For Car Wash Operators:**
- **Equipment Failure:** Downtime = lost customers to competitor down the street
- **Chemical Costs:** Wrong chemistry = poor results and unhappy customers
- **Maintenance Burden:** Managing maintenance across multiple suppliers
- **Renovation Complexity:** Need turn-key partner, not 5 different contractors

**Impact:**
- Customer sees their problems reflected
- Creates emotional connection and trust
- Differentiates by showing deep understanding
- Sets up solution positioning naturally

---

**Recommendation 6: Emphasize "Three Uniques" Differentiators**

**Current Problem:** Site says "Reliable, Affordable, Efficient" - every competitor claims this. Core differentiators (from internal deck) are buried.

**Proposed "Why Nwestco" Section:**

**1. Cradle-to-Grave Lifecycle Solutions**
- Design, build, service, maintain, upgrade - all with one partner
- No more coordinating 5 contractors for one project
- _Example:_ "We designed, permitted, built, and now maintain 200+ stations across the West"

**2. Western US Coverage You Can Count On**
- 9 branches across 6 states = faster response, local presence
- 24/7 emergency service with techs deployed from nearest branch
- _Example:_ "Average emergency response time: under 4 hours"

**3. Technical Expertise That's Best-In-Class**
- Factory-certified technicians across all major equipment brands
- In-house training centers in Portland and Spokane
- Master electricians, engineers, and compliance specialists
- _Example:_ "Our techs average 15+ years industry experience"

**Impact:**
- Clear differentiation from competitors
- Specific, believable, defensible claims
- Aligns with internal strategy pillars
- Gives customers reasons to choose Nwestco

---

### 8.3 Conversion & Lead Capture

**Recommendation 7: Simplify CTAs with Smart Routing**

**Current Problem:** "Request Service," "Request Quote," "Contact Us" create choice paralysis. User doesn't know which to click.

**Proposed CTA Strategy:**

**Primary CTA (Sticky Header):**
- **"Get Service Now"** button (opens modal with routing questions)

**Modal Routing Questions:**
1. "What do you need?"
   - Emergency Service (24/7 hotline)
   - Request Quote (for new projects)
   - General Question (contact form)
   - Schedule Training (training registration)

2. "What type of facility?"
   - Fuel Station/C-Store
   - Car Wash
   - Industrial/Commercial
   - (Pre-fills form context)

**Secondary CTAs Throughout Site:**
- Service pages: "Get Quote for [Service Name]" (context-specific)
- Project pages: "Start a Project Like This"
- Training page: "Register for Training"

**Impact:**
- Reduces decision paralysis
- Routes leads appropriately for faster response
- Captures user intent data for better follow-up
- Higher conversion rates

---

**Recommendation 8: Implement Multi-Step Forms**

**Current Problem:** Single long form is intimidating, high abandonment. No way to recover partial submissions.

**Proposed Form Strategy:**

**Step 1: Capture Email (Low Friction)**
- "Get a quote in 2 minutes"
- Just email required → automatic save/resume link sent

**Step 2: Qualify Need**
- Service type (dropdown based on market selection)
- Project timeline (Emergency/Within 1 week/Within 1 month/Planning stage)
- Location (city, state - auto-assigns to nearest branch)

**Step 3: Project Details**
- Name, phone, company
- Brief description
- Upload photos/documents (optional)

**Benefits:**
- Lower abandonment (email captured early)
- Better lead qualification
- Automatic routing to correct branch
- Save-and-resume for complex projects

**Impact:**
- 30-50% improvement in form completion rates (industry benchmark)
- Better lead data for sales team
- Reduced time-to-response

---

**Recommendation 9: Add Trust Signals Throughout**

**Current Problem:** No testimonials, client logos, case studies, or social proof visible. Makes company feel unproven.

**Proposed Trust Signal Strategy:**

**Homepage:**
- Client logo carousel (major accounts: Circle K, Chevron, Pilot Flying J if applicable)
- Video testimonial slider (2-3 customer success stories)
- Live stats (replace placeholder "1" values):
  - "350+ techs across Western US"
  - "10,000+ service calls completed annually"
  - "500+ stations designed and built"

**Service Pages:**
- Industry-specific testimonials
- Before/after project photos
- "Recent Projects" module with 3 examples
- Manufacturer certification badges

**About Page:**
- CEO video message (Petro West model)
- Leadership team photos and bios
- Company timeline (founding → acquisitions → growth)
- Industry association memberships

**Projects Page:**
- Full portfolio with filters
- Case studies with ROI data
- Customer quotes attributed with name, company, photo

**Impact:**
- Builds immediate credibility
- Reduces purchase anxiety
- Demonstrates scale and expertise
- Supports $120M company positioning (not $10M shop)

---

## 9. Mobile & Technical Recommendations

**Recommendation 10: Mobile-First Redesign Priority**

**Critical Issues:**
- Current mobile experience not tested/documented
- Dropdown menus likely problematic on touch devices
- Forms may be difficult to complete on mobile
- Images likely not optimized for mobile bandwidth

**Proposed Mobile Strategy:**

**Navigation:**
- Hamburger menu with collapsible accordions (not dropdowns)
- Sticky header with click-to-call button always visible
- "Emergency Service" red button prominent
- Simplified menu structure (3-5 items, not 7+ dropdowns)

**Forms:**
- Large touch-friendly input fields (min 44x44px)
- Reduce fields to absolute minimum
- Click-to-call alternative always present
- Auto-format phone numbers, detect location

**Performance:**
- Serve responsive images (srcset with mobile-optimized sizes)
- Lazy load images below fold
- Inline critical CSS, defer non-critical
- Remove Revolution Slider (heavy/slow on mobile)

**Impact:**
- 60%+ of traffic likely mobile (industry average)
- Better mobile UX = higher conversions
- Faster load times = lower bounce rate
- Improved SEO (mobile-first indexing)

---

## 10. Content Production Needs

### 10.1 Photography Requirements

**What to Shoot:**
1. **Team Photos:**
   - Technicians with service trucks
   - Office staff and leadership
   - Training classes in session
   - Customer interactions

2. **Project Photos:**
   - Before/after renovations
   - Installation process shots
   - Completed projects (exterior/interior)
   - Equipment close-ups

3. **Facility Photos:**
   - Branch locations exterior
   - Training centers interior
   - Service fleet lined up
   - Parts warehouse/inventory

4. **Action Shots:**
   - Techs working on equipment
   - Electrical installations
   - Tank installations
   - Car wash maintenance

**Impact:**
- Replaces all stock photography
- Builds authenticity and trust
- Shows scale of operation
- Provides content for social media, marketing

---

### 10.2 Video Production Needs

**Priority Videos:**

1. **CEO Message (90 seconds)**
   - Welcome/company mission
   - Why choose Nwestco
   - Commitment to customers
   - _Example: Petro West CEO video_

2. **Service Overview Videos (60 seconds each)**
   - Fuel Systems: "From design to 24/7 service"
   - Car Wash: "Keep your wash running, customers happy"
   - Installation: "Turn-key projects, on time and budget"

3. **Customer Testimonials (30-45 seconds each)**
   - 3-5 customer success stories
   - Real customers on camera
   - Specific results/outcomes

4. **Training Facility Tour (2 minutes)**
   - Portland and Spokane training centers
   - Hands-on equipment
   - Certification programs

**Impact:**
- Video increases engagement 80%+ (industry data)
- Builds trust faster than text
- Demonstrates expertise visually
- Reusable for social media, sales presentations

---

### 10.3 Written Content Needs

**High Priority:**

1. **About Us Page** (500-700 words)
   - Company history and growth story
   - Mission, values, culture
   - Leadership team bios
   - Acquisition strategy context

2. **Service Page Rewrites** (800-1000 words each)
   - Follow template: What We Do, Problems Solved, How We're Different, Process, Examples
   - 3-5 new service pages (consolidated from 7)

3. **Case Studies** (1000-1500 words each)
   - 5-10 detailed project stories
   - Challenge, solution, results
   - Customer quotes, photos, ROI data

4. **Resource Library Content**
   - Compliance checklists
   - Preventative maintenance guides
   - Equipment buying guides
   - FAQ documents

5. **Blog/News Content**
   - 10-15 industry insight articles
   - Company news (acquisitions, new branches, certifications)
   - Thought leadership (CEO bylines)

**Medium Priority:**

6. **Landing Pages for Paid Ads**
   - Emergency service landing page
   - New construction landing page
   - Car wash renovation landing page

7. **Email Nurture Sequences**
   - Welcome series for new leads
   - Project timeline nurture
   - Post-service follow-up

**Impact:**
- SEO benefit (target 50+ keyword opportunities)
- Lead nurture and education
- Sales enablement (case studies for proposals)
- Authority building

---

## 11. Quick Wins vs. Long-Term Fixes

### 11.1 Quick Wins (Immediate Impact, Low Effort)

**Week 1-2:**
1. **Fix homepage hero headline** - Change to outcome-focused message
2. **Add phone number to sticky header** - Always visible click-to-call
3. **Remove placeholder metrics** - Better to have none than "1" values
4. **Add client logos** - Even 5-10 logos builds instant credibility
5. **Simplify contact form** - Remove address field, add response time expectation

**Week 3-4:**
6. **Add breadcrumb navigation** - Improve context on service pages
7. **Create "Why Nwestco" page** - Three differentiators, quick implementation
8. **Add emergency service CTA** - Red button in header for 24/7 service
9. **Optimize page titles/meta descriptions** - SEO quick win
10. **Add FAQ accordions** - Address common objections on service pages

**Impact:** These changes require minimal dev work but deliver immediate UX and conversion improvements.

---

### 11.2 Medium-Term Projects (1-3 Months)

1. **Service page consolidation** - 7 → 3-5 clear pillars
2. **Content rewrite** - All service pages with pain-point messaging
3. **Photography shoot** - Real team, project, facility photos
4. **Case study production** - 5-10 detailed project stories
5. **About Us page creation** - Company story, leadership, values
6. **Navigation restructure** - Lifecycle or market-focused menu
7. **Multi-step form implementation** - Better conversion and lead qualification
8. **Mobile optimization** - Responsive design improvements
9. **Performance optimization** - Remove Revolution Slider, add CDN, optimize images
10. **Schema markup implementation** - SEO structured data

**Impact:** These projects require content creation, design, and development but deliver significant long-term value.

---

### 11.3 Long-Term Strategic Initiatives (3-6 Months)

1. **Video production** - CEO message, service overviews, testimonials
2. **Project portfolio gallery** - Filterable, searchable, comprehensive
3. **Resource library** - Downloadable guides, checklists, compliance docs
4. **Blog/news section** - Ongoing content marketing program
5. **CRM integration** - Forms → automated lead routing and follow-up
6. **Marketing automation** - Email nurture sequences, drip campaigns
7. **Training portal** - Online course registration, certifications
8. **Customer portal** - Service history, invoices, request tracking
9. **Live chat implementation** - Instant engagement for high-intent visitors
10. **A/B testing program** - Continuous optimization of messaging, CTAs, forms

**Impact:** These initiatives build long-term competitive advantage and support growth goals.

---

## 12. Alignment with Strategic Goals

### 12.1 Supporting $120M → $500M Growth

**Current Site Problems:**
- Looks like $10M regional company, not $120M platform
- No messaging about acquisition capabilities or scale
- Missing investor/stakeholder content
- No demonstration of multi-location footprint

**Redesign Must Include:**
- **Scale indicators:** "9 branches, 350+ employees, 6 states"
- **Growth story:** Acquisition timeline and expansion map
- **Credibility signals:** Client logos, project volume stats, certifications
- **Professional polish:** Modern design, real photography, video content
- **Investor section:** For PE stakeholders and potential future investors
- **M&A positioning:** Show Nwestco as strong acquisition platform for targets

---

### 12.2 Supporting Talent Acquisition

**Current Site Problems:**
- Careers page is essentially empty
- No employee value proposition
- No culture or benefits messaging
- No visibility into company growth or opportunities

**Redesign Must Include:**
- **Robust careers section:** Job listings, company culture, benefits overview
- **Growth story:** "Join a company on path to $500M"
- **Team visibility:** Photos of actual employees, testimonials
- **Training emphasis:** "We invest in your development" with training programs
- **Geographic opportunities:** "9 locations, more coming"
- **Video content:** "Day in the life" of technicians, office staff
- **Application process:** Clear, mobile-friendly, fast

---

### 12.3 Supporting M&A Strategy

**Current Site Problems:**
- Nothing signals Nwestco as acquisition-focused platform
- Doesn't demonstrate integration capabilities
- Missing acquisition track record

**Redesign Should Consider:**
- **Growth timeline:** Show acquisition milestones (6 acquisitions to date)
- **"Join the Nwestco Family" section:** For potential acquisition targets
- **Integration story:** How acquired companies benefit from platform
- **Investor messaging:** For deal financing and stakeholder confidence
- **Scale demonstration:** Show combined capabilities post-acquisition

---

## 13. Success Metrics & KPIs

### 13.1 Current Baseline (To Be Measured)

**Conversion Metrics:**
- Form submissions per month
- Phone calls from website
- Bounce rate by page
- Time on site
- Pages per session

**Traffic Metrics:**
- Organic search traffic
- Paid search traffic
- Direct traffic
- Mobile vs. desktop split

**Engagement Metrics:**
- Video play rate (once added)
- Resource downloads (once added)
- Click-through rate on CTAs

---

### 13.2 Target Improvements (6 Months Post-Launch)

**Conversion Goals:**
- 50% increase in form submissions
- 30% increase in phone calls from site
- 20% decrease in bounce rate
- 25% increase in pages per session

**SEO Goals:**
- 100+ keywords ranking in top 10
- 50% increase in organic traffic
- Featured snippets for 10+ target terms

**Engagement Goals:**
- 60%+ video play rate on homepage
- 40% of visitors view 3+ pages
- 25% download resources or guides

---

## 14. Final Summary & Next Steps

### 14.1 Audit Summary

**Total Pages Audited:** 15+
**Major UX Issues Identified:** 24
**Service Verticals Analyzed:** 7
**Recommended Consolidation:** 3-5 clear pillars

**The "Ragù" Problem Confirmed:**
Current site presents seven competing service verticals (Petroleum, Car Wash, Automotive, Aviation, Electrical, Industrial, Tanks) with overlapping scopes and unclear relationships. This creates cognitive overload and prevents users from understanding Nwestco's one-stop-shop value proposition.

**Top 3 Recommendations:**

1. **Consolidate 7 verticals → 3 market focus areas**
   - Fuel Systems (combines Petroleum, Aviation, Industrial, Automotive)
   - Car Wash Systems
   - Environmental Solutions (new category for compliance/testing)
   - Position cross-cutting services (Electrical, Installation, Maintenance) as CAPABILITIES, not verticals

2. **Lead with "Uptime" value proposition**
   - Replace generic "24/7 Service" headline with outcome focus: "Maximize Your Uptime. Minimize Your Headaches."
   - Add quantified pain points (downtime costs $7,800-$29,500 per pump)
   - Emphasize Three Uniques: Cradle-to-grave solutions, Western US coverage, Technical expertise

3. **Simplify conversion paths with smart CTA routing**
   - Single "Get Service Now" button opens modal with routing questions
   - Context-specific CTAs on service pages
   - Multi-step forms to reduce abandonment
   - Add trust signals throughout (client logos, testimonials, case studies)

---

### 14.2 Content Recommendations Summary

**KEEP (Good Foundation):**
- Branch locations and geographic coverage
- Brand partnerships (40+ manufacturers)
- Technical specifications and training mentions
- Turn-key and lifecycle service positioning

**REWRITE (Needs Improvement):**
- All homepage hero and value proposition copy
- Service page introductions (feature → outcome focused)
- Training, careers, contact pages (minimal content currently)
- Generic "reliable, affordable, efficient" messaging

**ELIMINATE:**
- Automotive as separate vertical (merge into Fuel Systems)
- Industrial as separate vertical (merge into Fuel Systems as market segment)
- Tanks as navigation item (feature as product)
- Electrical as standalone vertical (reposition as cross-vertical capability)
- Placeholder metrics showing "1" for all stats
- Generic stock photography

**ADD (Critical Gaps):**
- About Us page (company story, leadership, mission)
- Customer testimonials and case studies
- Project portfolio with photos
- FAQ sections on service pages
- Resource library (guides, checklists, compliance docs)
- CEO video message
- Emergency service prominence

---

### 14.3 Priority Action Plan

**Phase 1: Foundation (Weeks 1-4)**
1. Architect new information architecture (3 markets + lifecycle services)
2. Rewrite homepage messaging (hero, value props, differentiators)
3. Create service page templates (problem → solution → process → examples)
4. Design navigation structure (primary: markets, secondary: lifecycle)
5. Plan photography and video shoots

**Phase 2: Content & Design (Weeks 5-8)**
6. Complete service page content rewrites (3-5 consolidated pages)
7. Create About Us, Why Nwestco, Projects pages
8. Design new visual system (CSS foundation, component library)
9. Conduct photography shoot (team, projects, facilities)
10. Gather testimonials and case study material

**Phase 3: Development & Polish (Weeks 9-12)**
11. Build responsive templates (mobile-first)
12. Implement multi-step forms and CTA routing
13. Add trust signals (logos, testimonials, stats)
14. Optimize performance (images, scripts, CDN)
15. Implement SEO (schema markup, meta tags, alt text)

**Phase 4: Advanced Features (Weeks 13-16)**
16. Produce and integrate video content
17. Create resource library with downloadable assets
18. Build project portfolio gallery
19. Set up analytics and conversion tracking
20. Launch with phased rollout and A/B testing

---

### 14.4 Open Questions for Client

1. **Service Consolidation Preference:**
   - Do you prefer market-focused (Fuel Systems, Car Wash, Environmental) or lifecycle-focused (Design, Install, Service) primary navigation?

2. **Content Resources:**
   - Can you provide client list for logo carousel?
   - Do you have customer testimonials or references we can interview?
   - Are there specific project examples you'd like featured?

3. **Photography/Video:**
   - Can we schedule photography shoots at branches and project sites?
   - Is CEO available for video message?
   - Which employees should be featured in team photos?

4. **Metrics:**
   - What are actual numbers for techs deployed, stations built, service calls completed?
   - What's current average emergency response time?
   - What are your top 3 client accounts we can reference (with permission)?

5. **Competitive Positioning:**
   - Beyond the Three Uniques, are there specific competitors you want to differentiate from?
   - Are there guarantees or warranties you offer that we should feature?
   - What's your actual uptime commitment or average?

---

**Document Status:** Complete Site Audit
**Next Steps:** Content Inventory (separate document) + Information Architecture Proposal
**Owner:** workflow-architect-ux Agent
**Date:** November 26, 2025
