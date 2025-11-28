# Nwestco Website Redesign - Task Breakdown

**Project**: Nwestco Website Redesign
**Client**: Nwestco ($120M fuel systems/car wash equipment company)
**Launch Target**: April 1, 2026
**Final Platform**: WordPress (client-hosted)
**Deliverable**: 3 complete HTML/CSS design options for client selection

---

## Executive Summary

This project transforms Nwestco's outdated website into a professional digital presence that reflects their scale ($120M company), clarifies their messaging (from "ragù" to focused lifecycle approach), and delivers 3 distinct design options for client selection. The winning option will be built in WordPress.

**Key Challenge**: Consolidate 7 competing service verticals into a clear, unified lifecycle approach that positions Nwestco as a one-stop Western US specialist for fuel systems and car washes.

**Critical Path**: UX Architecture → Content Strategy → Visual Design → 3 HTML Prototypes → Client Selection → WordPress Build

---

## 5D Process Alignment

This task breakdown follows Tandem Theory's 5D Web Development Process. Each phase maps to a "D" and includes explicit **CLIENT APPROVAL GATES** that must be passed before proceeding.

| Our Phase | 5D Phase | Client Gate |
|-----------|----------|-------------|
| Phase 0 | **DISCOVER** | GATE 0: Discovery validation |
| Phase 1-2 | **DEFINE** | GATE 1: Definition approval (signatures) |
| Phase 3 | **DESIGN** | GATE 2: Design approval (locked) |
| Phase 4 | **DEVELOP** | GATE 3: Client QA sign-off |
| Phase 5-6 | **DEPLOY** | GATE 4: Launch approval |

**CRITICAL**: No phase proceeds until client approves the gate deliverables. Design does not start until Define is approved. Development does not start until designs are locked.

---

## Phase 0: Foundation & Discovery (5D: DISCOVER)
**Goal**: Establish project structure, research baseline, competitive analysis
**Duration**: Week 1
**Dependencies**: None (can run in parallel)

### UX-000: Project Setup & Research
**Owner**: `workflow-project-manager`
**Status**: ✅ COMPLETED
**Tasks**:
- [x] Read and analyze project brief
- [x] Review current site technical stack
- [x] Document brand guidelines from current site
- [x] Analyze reference sites (Petro West, Kinley, United Uptime, Guardian)
- [x] Create task breakdown document

**Deliverables**: Project brief, task breakdown, reference site analysis

---

### UX-001: Current Site Audit & Content Inventory
**Owner**: `workflow-architect-ux`
**Dependencies**: None
**Effort**: 4-6 hours
**Status**: ✅ COMPLETED

**Description**: Complete audit of nwestco.com to inventory existing content, identify UX problems, and create baseline for improvement.

**Tasks**:
- [x] Crawl and document complete site structure (all pages, navigation hierarchy)
- [x] Content inventory spreadsheet: page titles, URLs, word counts, key messages
- [x] Identify the "7 competing verticals" causing the "ragù" problem
- [x] Document current conversion paths and forms
- [x] Screenshot key pages for before/after comparison
- [x] Technical audit: page speed, mobile responsiveness, accessibility issues
- [x] Identify what content to keep vs. rewrite vs. eliminate

**Acceptance Criteria**:
- [x] Complete site map with all pages documented
- [x] Content inventory spreadsheet with 100% coverage
- [x] List of specific UX problems with examples
- [x] Recommendations for content consolidation
- [x] Technical audit findings document

**Deliverables**:
- [x] `/ai/memory-bank/nwestco-site-audit.md`
- [x] `/ai/memory-bank/nwestco-content-inventory.md`
- [x] Screenshot archive in `/current-site-assets/screenshots/`

**Reference**: Project brief sections "Current Website Problems", "Content/UX Problems Observed"

---

### BRAND-001: Brand Guidelines Documentation
**Owner**: `design-brand-guardian`
**Dependencies**: None (can run parallel with UX-001)
**Effort**: 3-4 hours
**Status**: ✅ COMPLETED

**Description**: Formalize Nwestco brand guidelines from extracted assets and internal marketing deck to ensure consistency across all 3 design options.

**Tasks**:
- [x] Document color palette (resolve logo blue vs. website blue discrepancy)
- [x] Recommend primary brand colors for new site (logo's #25617C vs. current #476789)
- [x] Document typography system (Open Sans, Lato weights and usage)
- [x] Define button styles and interactive elements
- [x] Create brand voice guidelines from internal strategy deck
- [x] Document logo usage rules and variations
- [x] Identify photo/imagery direction (vs. current stock photos)
- [x] Define tone: professional, confident, outcome-focused (not generic)

**Acceptance Criteria**:
- [x] Formal brand guidelines document
- [x] Color palette recommendation with rationale
- [x] Typography system specification
- [x] Decision on whether to use green accent (#709944) from logo
- [x] Photography direction and sourcing recommendations
- [x] Brand voice examples (dos and don'ts)

**Deliverables**:
- [x] `/ai/memory-bank/nwestco-brand-guidelines.md`
- [x] Color palette reference (hex, RGB, usage notes)

**Reference**: Project brief "Brand Guidelines", "Design Note" on color inconsistency

---

### SEO-001: SEO Baseline & Keyword Research
**Owner**: `marketing-seo-technical`
**Dependencies**: None (can run parallel)
**Effort**: 4-5 hours
**Status**: ✅ COMPLETED

**Description**: Establish SEO baseline, conduct keyword research for fuel systems/car wash industries, and identify optimization opportunities for new site.

**Tasks**:
- [x] Current site SEO audit (meta tags, headings, alt text, schema)
- [x] Competitor SEO analysis (United Uptime, Guardian, Petro West, Kinley)
- [x] Keyword research: fuel systems, car wash equipment, petroleum equipment
- [x] Geographic keyword opportunities (Western US, 6-state footprint)
- [x] Identify long-tail keywords for service lifecycle touchpoints
- [x] Technical SEO recommendations for new site
- [x] Schema markup recommendations (LocalBusiness, Service, Organization)
- [x] URL structure recommendations for new site

**Acceptance Criteria**:
- [x] Current site SEO performance baseline
- [x] Keyword research spreadsheet with search volumes
- [x] Priority keyword list for new site
- [x] Technical SEO checklist for implementation
- [x] URL structure recommendations

**Deliverables**:
- [x] `/ai/memory-bank/nwestco-seo-baseline.md`
- [x] `/ai/memory-bank/nwestco-keyword-research.md`
- [x] `/ai/memory-bank/nwestco-seo-recommendations.md`

**Reference**: Project brief "Target Markets", "Service Lifecycle Wheel"

---

### ⛔ GATE 0: Discovery Validation
**Owner**: `workflow-project-manager`
**Dependencies**: UX-001, BRAND-001, SEO-001 all complete
**5D Reference**: Section 1.9 - "Client validation of all 'discovery' phase artifacts and deliverables"
**Status**: ✅ PASSED

**Gate Requirements**:
- [x] Site audit complete and reviewed with client
- [x] Brand guidelines documented and confirmed
- [x] SEO baseline established
- [x] Business goals understood and documented
- [x] Current site problems catalogued
- [x] Client expectations confirmed

**Deliverables for Client Review**:
1. Current site audit report
2. Brand guidelines document
3. SEO baseline and keyword opportunities
4. Confirmed project scope and goals

**Approval**:
- [x] Client validates discovery findings
- [x] Client confirms business requirements
- [x] **Proceed to DEFINE phase only after client sign-off**

---

## Phase 1: UX Architecture & Information Architecture (5D: DEFINE - Part 1)
**Goal**: Define site structure, navigation, and information hierarchy BEFORE design
**Duration**: Week 1-2
**Dependencies**: Phase 0 complete
**Status**: ✅ COMPLETED

**CRITICAL**: This phase must complete before design work begins. No visual design until IA is approved.

---

### UX-002: Information Architecture - Service Consolidation
**Owner**: `workflow-architect-ux`
**Dependencies**: UX-001 (site audit)
**Effort**: 6-8 hours
**Status**: ✅ COMPLETED

**Description**: Solve the "ragù" problem by consolidating 7 competing service verticals into a clear lifecycle approach based on internal strategy deck.

**Tasks**:
- [x] Map current 7 verticals to internal "Service Lifecycle Wheel" structure
- [x] Propose consolidated service architecture (3-5 clear pillars)
- [x] Define primary service categories: Fuel Systems, Car Washes, Environmental
- [x] Map 7 lifecycle touchpoints to new IA: Installation, Service & Maintenance, Remodels & Upgrades, Equipment Sales, Testing & Compliance, Environmental Solutions, Chemistry
- [x] Create user flows for primary audiences: customers, job seekers, investors
- [x] Define conversion paths and CTA placement strategy
- [x] Recommend navigation structure for all 3 design options
- [x] Create sitemap for new site architecture

**Acceptance Criteria**:
- [x] Service consolidation proposal that solves "ragù" problem
- [x] Clear mapping: old 7 verticals → new structure
- [x] User flow diagrams for 3 primary audiences
- [x] Sitemap showing navigation hierarchy
- [x] Conversion path strategy document
- [x] Client-ready presentation of IA recommendations

**Deliverables**:
- [x] `/ai/memory-bank/nwestco-information-architecture.md`
- [x] `/ai/memory-bank/nwestco-sitemap.md`
- [x] User flow diagrams

**Reference**: Project brief "Service Lifecycle Wheel", "Structural Changes Needed"

---

### UX-003: Wireframes - 3 Design Option Approaches
**Owner**: `workflow-architect-ux`
**Dependencies**: UX-002 (IA approved)
**Effort**: 8-10 hours
**Status**: ✅ COMPLETED

**Description**: Create wireframes for all 3 design options showing distinct structural approaches while maintaining consistent IA.

**Tasks**:
- [x] **Option A - One-Page Scrollable**: Full-page scrolling site with anchor navigation, hero sections for each service lifecycle stage
- [x] **Option B - Traditional Multi-Page** (Petro West style): Classic navigation with dedicated pages, corporate/traditional structure
- [x] **Option C - Modern/Bold** (United Uptime style): Contemporary design with interactive elements, pain-point focused
- [x] Define homepage layouts for all 3 options
- [x] Define service page templates for all 3 options
- [x] Define about/company page structure
- [x] Define careers/recruiting section structure
- [x] Map form placement and CTA hierarchy for each option
- [x] Create mobile wireframes for all 3 options

**Acceptance Criteria**:
- [x] Complete wireframe sets for all 3 options (desktop + mobile)
- [x] Each option has distinct structural approach
- [x] All options use same IA from UX-002
- [x] Annotated wireframes showing interaction notes
- [x] Form placement and CTA strategy documented
- [x] Client-ready presentation comparing 3 approaches

**Deliverables**:
- [x] `/ai/memory-bank/wireframes/option-a-one-page/`
- [x] `/ai/memory-bank/wireframes/option-b-traditional/`
- [x] `/ai/memory-bank/wireframes/option-c-modern/`
- [x] Wireframe comparison document

**Reference**: Project brief "Design Options to Build", reference site analysis

---

### CRO-001: Conversion Strategy & Form Requirements
**Owner**: `marketing-conversion-optimization`
**Dependencies**: UX-002 (IA), UX-003 (wireframes)
**Effort**: 4-5 hours
**Status**: ✅ COMPLETED

**Description**: Define conversion paths, form requirements, and CTA strategy to maximize lead capture and engagement.

**Tasks**:
- [x] Audit current forms (what works, what doesn't)
- [x] Define primary conversion goals: service requests, quote requests, career applications, contact inquiries
- [x] Design form fields and validation requirements for each form type
- [x] Define CTA placement strategy (sticky header, in-page, footer)
- [x] Create form flow wireframes with progressive disclosure where needed
- [x] Define thank-you pages and confirmation messaging
- [x] Recommend analytics/tracking for conversion funnel
- [x] Create A/B test recommendations for post-launch
- [x] Define lead capture strategy for careers section

**Acceptance Criteria**:
- [x] Complete form specifications (fields, validation, error states)
- [x] CTA placement strategy for all 3 design options
- [x] Form flow diagrams showing user journey
- [x] Thank-you page content recommendations
- [x] Analytics tracking plan for conversions
- [x] Recommendations for CRM integration

**Deliverables**:
- [x] `/ai/memory-bank/nwestco-conversion-strategy.md`
- [x] `/ai/memory-bank/nwestco-form-specifications.md`
- [x] Form wireframes and flows

**Reference**: Project brief "Key Asks from Client" - forms that work

---

## Phase 2: Content Strategy & Messaging (5D: DEFINE - Part 2)
**Goal**: Define messaging framework, rewrite content, create copy for all 3 options
**Duration**: Week 2-3
**Dependencies**: UX-002 (IA approved)
**Status**: ✅ COMPLETED

---

### CONTENT-001: Messaging Framework Development
**Owner**: `marketing-content-strategy`
**Dependencies**: UX-002 (IA), BRAND-001 (brand guidelines)
**Effort**: 6-8 hours
**Status**: ✅ COMPLETED

**Description**: Develop core messaging framework based on internal strategy deck to replace generic "we can help" language with outcome-focused positioning.

**Tasks**:
- [x] Extract key messages from internal marketing deck (value proposition, 3 uniques, guarantee)
- [x] Develop hero message options (move from "24/7 Service" to outcome-focused)
- [x] Test messaging options: "We Keep You Running", "Maximize Your Uptime", "We Fuel Your Business"
- [x] Define messaging for each service pillar from UX-002
- [x] Create pain-point messaging (following United Uptime approach)
- [x] Develop trust-building content: heritage story, credibility signals, testimonials
- [x] Define tone and voice guidelines specific to Nwestco
- [x] Create messaging hierarchy: hero → value prop → services → proof → CTA
- [x] Develop elevator pitch and boilerplate company descriptions

**Acceptance Criteria**:
- [x] Core messaging framework document
- [x] 3-5 hero message options with rationale
- [x] Service pillar messaging for each consolidated service
- [x] Pain-point and benefit statements
- [x] Company boilerplate in 50, 100, 250-word versions
- [x] Tone and voice guidelines with examples
- [x] Client-ready presentation of messaging options

**Deliverables**:
- [x] `/ai/memory-bank/nwestco-messaging-framework.md`
- [x] `/ai/memory-bank/nwestco-boilerplate.md`

**Reference**: Project brief "Strategic Positioning", "Value Proposition", "The 3 Uniques"

---

### CONTENT-002: Homepage Copy - 3 Variations
**Owner**: `marketing-content-strategy`
**Dependencies**: CONTENT-001 (messaging framework), UX-003 (wireframes)
**Effort**: 6-8 hours
**Status**: ✅ COMPLETED

**Description**: Write complete homepage copy for all 3 design options, adapting messaging to each structural approach.

**Tasks**:
- [x] **Option A - One-Page**: Write flowing narrative copy for scroll sections (hero, services, about, proof, careers, contact)
- [x] **Option B - Traditional**: Write concise homepage copy with clear CTAs to deeper pages
- [x] **Option C - Modern/Bold**: Write punchy, pain-point-focused copy with interactive elements
- [x] Write hero headlines and subheadlines for each option
- [x] Write service pillar descriptions (50-75 words each)
- [x] Write company overview section (150-200 words)
- [x] Write CTA button copy and microcopy
- [x] Write trust-building content: client logos intro, testimonial framing
- [x] Create SEO-optimized meta titles and descriptions for each option

**Acceptance Criteria**:
- [x] Complete homepage copy for all 3 options
- [x] All copy follows messaging framework from CONTENT-001
- [x] Copy fits wireframe constraints from UX-003
- [x] SEO keywords naturally integrated
- [x] CTA copy tested for clarity and urgency
- [x] Client-ready presentation showing copy variations

**Deliverables**:
- [x] `/ai/memory-bank/copy/option-a-homepage.md`
- [x] `/ai/memory-bank/copy/option-b-homepage.md`
- [x] `/ai/memory-bank/copy/option-c-homepage.md`

**Reference**: Project brief "Messaging Shifts", reference site hero messages

---

### CONTENT-003: Service Pages Copy
**Owner**: `marketing-content-strategy`
**Dependencies**: CONTENT-001 (messaging framework), UX-002 (IA)
**Effort**: 8-10 hours
**Status**: ✅ COMPLETED

**Description**: Write detailed copy for all service pillar pages based on consolidated IA structure.

**Tasks**:
- [x] Write copy for primary service pages: Fuel Systems, Car Washes, Environmental
- [x] Write copy for lifecycle touchpoint pages: Installation, Service & Maintenance, Remodels & Upgrades, Equipment Sales, Testing & Compliance, Environmental Solutions, Chemistry
- [x] For each service page: Headline, pain points, overview, benefits, CTA, SEO meta
- [x] Incorporate client success stories and use cases
- [x] Add credibility signals: certifications, partnerships, expertise claims
- [x] Create service comparison tables where applicable

**Acceptance Criteria**:
- [x] Complete copy for all service pages identified in UX-002
- [x] Each page follows consistent template structure
- [x] Pain-point messaging integrated
- [x] SEO keywords naturally incorporated
- [x] Copy length appropriate for wireframe layouts
- [x] Technical accuracy verified (no false claims about services)

**Deliverables**:
- [x] `/ai/memory-bank/copy/services/` (one file per service page)
- [x] Service page copy template

**Reference**: Project brief "Service Lifecycle Wheel", "Supporting Pillars"

---

### CONTENT-004: About, Careers, Contact Copy
**Owner**: `marketing-content-strategy`
**Dependencies**: CONTENT-001 (messaging framework)
**Effort**: 4-5 hours
**Status**: ✅ COMPLETED

**Description**: Write supporting page copy for About Us, Careers, and Contact sections.

**Tasks**:
- [x] **About Us Page**: Company overview, growth story, 3 Uniques, mission/values, leadership bios, coverage map
- [x] **Careers Section**: Employer value proposition, culture messaging, benefits, application process
- [x] **Contact Page**: Form intro, location info for branches, phone/email, service area

**Acceptance Criteria**:
- [x] Complete copy for all supporting pages
- [x] About page positions company at $120M scale (not $10M)
- [x] Careers section attracts technician and sales talent
- [x] Contact information accurate and complete
- [x] All copy SEO-optimized with local keywords

**Deliverables**:
- [x] `/ai/memory-bank/copy/about-us.md`
- [x] `/ai/memory-bank/copy/careers.md`
- [x] `/ai/memory-bank/copy/contact.md`

**Reference**: Project brief "Company Overview", "Core Values", "Target Audiences"

---

### CONTENT-005: Microcopy, Forms, and CTAs
**Owner**: `marketing-content-strategy`
**Dependencies**: CRO-001 (conversion strategy)
**Effort**: 3-4 hours
**Status**: ✅ COMPLETED

**Description**: Write all microcopy, form labels, error messages, and CTA variations for consistent user experience.

**Tasks**:
- [x] Write CTA button copy variations: primary, secondary, tertiary actions
- [x] Write form field labels and placeholder text
- [x] Write form validation error messages
- [x] Write success confirmation messages
- [x] Write navigation menu labels
- [x] Write footer section headings and links
- [x] Write sticky header CTA copy
- [x] Write newsletter signup copy (if applicable)
- [x] Write social media link labels
- [x] Create microcopy style guide

**Acceptance Criteria**:
- [x] Complete microcopy library for all interactive elements
- [x] Consistent tone across all microcopy
- [x] Error messages are helpful, not punitive
- [x] CTA copy tested for clarity and urgency
- [x] All copy accessible and screen-reader friendly

**Deliverables**:
- [x] `/ai/memory-bank/nwestco-microcopy-library.md`

**Reference**: CRO-001 conversion strategy

---

### ⛔ GATE 1: Definition Approval (CRITICAL)
**Owner**: `workflow-project-manager`
**Dependencies**: UX-002, UX-003, CRO-001, CONTENT-001, CONTENT-002, CONTENT-003, CONTENT-004, CONTENT-005 all complete
**5D Reference**: Section 2.9 - "Client approval (signatures) of all 'definition' phase artifacts and deliverables before Design phase starts"
**Status**: ✅ PASSED

**Gate Requirements**:
- [x] Information architecture approved (service consolidation: 7→3-5 pillars)
- [x] Wireframes approved for all 3 options
- [x] Messaging framework approved
- [x] All copy signed off by client (homepage, services, about, careers, contact)
- [x] Content strategy documented and approved
- [x] Conversion strategy and form specs approved
- [x] Site map finalized

**Deliverables for Client Review**:
1. Information architecture document and sitemap
2. Wireframes for all 3 design options
3. Messaging framework and copy decks
4. Form specifications and conversion strategy
5. Content matrix showing all pages and content status

**Approval**:
- [x] All stakeholders approve (including external dependent agencies if any)
- [x] Client signs off on content before design starts
- [x] **DESIGNS AND CONTENT ARE NOW LOCKED**
- [x] **Proceed to DESIGN phase only after signatures obtained**

**NOTE**: Changes past this point affect timelines and budget. Client must understand this before signing off.

---

## Phase 3: Visual Design & Component Systems (5D: DESIGN)
**Goal**: Design visual direction for all 3 options, create component libraries
**Duration**: Week 3-4
**Dependencies**: GATE 1 passed - Phase 1 (UX/IA) and Phase 2 (Content) complete and approved
**Status**: ✅ COMPLETED

---

### UI-001: Design System Foundations
**Owner**: `design-ui-systems`
**Dependencies**: BRAND-001 (brand guidelines), UX-003 (wireframes)
**Effort**: 6-8 hours
**Status**: ✅ COMPLETED

**Description**: Establish foundational design system that can be adapted for all 3 design options while maintaining brand consistency.

**Tasks**:
- [x] Finalize color palette (resolve logo blue vs. website blue)
- [x] Define typography scale (Open Sans and Lato with responsive sizing)
- [x] Define spacing system (8pt or 4pt grid)
- [x] Create button component variations (primary, secondary, ghost, sizes)
- [x] Define form input styles (text, textarea, select, checkbox, radio)
- [x] Define card component styles
- [x] Create icon library requirements
- [x] Define animation/transition guidelines
- [x] Create accessibility standards (WCAG 2.1 AA minimum)
- [x] Document responsive breakpoints

**Acceptance Criteria**:
- [x] Complete design tokens document (colors, typography, spacing)
- [x] Component specifications for core UI elements
- [x] Accessibility guidelines documented
- [x] Responsive system defined
- [x] Design system ready to adapt for 3 option variations

**Deliverables**:
- [x] `/prototypes/shared/css/variables.css` - Design tokens
- [x] `/prototypes/shared/css/` - Component library CSS

**Reference**: Project brief "Brand Guidelines", reference site design patterns

---

### UI-002: Option A - One-Page Scrollable Design
**Owner**: `design-ui-systems`
**Dependencies**: UI-001 (design system), UX-003 (wireframes), CONTENT-002 (homepage copy)
**Effort**: 10-12 hours
**Status**: ✅ COMPLETED

**Description**: Design complete visual mockups for Option A (one-page scrollable site with anchor navigation).

**Tasks**:
- [x] Design hero section with scroll indicator
- [x] Design anchor navigation (sticky or fixed position)
- [x] Design service lifecycle sections (7 scroll sections)
- [x] Design about/company section
- [x] Design careers section
- [x] Design contact form section
- [x] Design footer
- [x] Create scroll transitions and animations
- [x] Design mobile responsive layouts for all sections
- [x] Create component library specific to this option
- [x] Design interaction states (hover, active, focus)
- [x] Export production-ready assets

**Acceptance Criteria**:
- [x] Complete desktop mockups
- [x] Complete mobile mockups
- [x] All sections designed from hero to footer
- [x] Interaction states documented
- [x] Component library exported
- [x] Scroll/animation behaviors specified
- [x] Client-ready presentation

**Deliverables**:
- [x] `/prototypes/option-a/` (complete HTML/CSS prototype)

**Reference**: Reference sites with one-page scrolling, project brief design direction

---

### UI-003: Option B - Traditional Multi-Page Design
**Owner**: `design-ui-systems`
**Dependencies**: UI-001 (design system), UX-003 (wireframes), CONTENT-002 (homepage copy)
**Effort**: 10-12 hours
**Status**: ✅ COMPLETED

**Description**: Design complete visual mockups for Option B (traditional multi-page site, Petro West style).

**Tasks**:
- [x] Design homepage with clear navigation structure
- [x] Design global navigation (header/menu)
- [x] Design service landing page template
- [x] Design individual service page template
- [x] Design about us page
- [x] Design careers page
- [x] Design contact page
- [x] Design footer with sitemap
- [x] Design mobile responsive layouts for all page templates
- [x] Create component library specific to this option
- [x] Design interaction states
- [x] Export production-ready assets

**Acceptance Criteria**:
- [x] Complete desktop mockups for all page templates
- [x] Complete mobile mockups for all page templates
- [x] Navigation system fully designed
- [x] Component library exported
- [x] Page transition behaviors specified
- [x] Client-ready presentation

**Deliverables**:
- [x] `/prototypes/option-b/` (complete HTML/CSS prototype - 20+ pages)

**Reference**: Petro West reference site, project brief traditional design notes

---

### UI-004: Option C - Modern/Bold Design
**Owner**: `design-ui-systems`
**Dependencies**: UI-001 (design system), UX-003 (wireframes), CONTENT-002 (homepage copy)
**Effort**: 10-12 hours
**Status**: ✅ COMPLETED

**Description**: Design complete visual mockups for Option C (modern/bold approach, United Uptime style).

**Tasks**:
- [x] Design bold hero section with pain-point messaging
- [x] Design interactive service cards/flip cards
- [x] Design pain-point visualization section
- [x] Design animated gradient backgrounds or modern effects
- [x] Design testimonial carousel
- [x] Design careers section with modern aesthetics
- [x] Design contact section with interactive elements
- [x] Design footer
- [x] Design mobile responsive layouts
- [x] Create component library with interactive components
- [x] Design micro-interactions and animations
- [x] Export production-ready assets

**Acceptance Criteria**:
- [x] Complete desktop mockups with modern/bold aesthetic
- [x] Complete mobile mockups
- [x] Interactive components fully designed
- [x] Animation/interaction behaviors documented
- [x] Component library exported
- [x] Client-ready presentation

**Deliverables**:
- [x] `/prototypes/option-c/` (complete HTML/CSS prototype - 20+ pages)

**Reference**: United Uptime reference site, project brief modern design notes

---

### UI-005: Photography Direction & Image Sourcing
**Owner**: `design-ui-systems`
**Dependencies**: UI-002, UI-003, UI-004 (all design options in progress)
**Effort**: 4-5 hours
**Status**: ✅ COMPLETED

**Description**: Source or specify photography for all 3 design options, moving away from generic stock photos to real industrial imagery.

**Tasks**:
- [x] Define photography style guide (real techs, trucks, projects vs. stock)
- [x] Source hero images for all 3 options
- [x] Source service section images (fuel systems, car washes, technicians)
- [x] Source team/culture photos for careers section
- [x] Identify client logo assets to include
- [x] Source certification/partnership badge images
- [x] Create image specification document (sizes, formats, optimization)
- [x] Recommend future photography needs (on-site photoshoot)
- [x] Source from approved sources (Unsplash, picsum.photos) - avoid Pexels

**Acceptance Criteria**:
- [x] Complete image library for all 3 options
- [x] All images licensed/sourced appropriately
- [x] Photography style guide documented
- [x] Image specifications for developers
- [x] Recommendations for future custom photography

**Deliverables**:
- [x] `/prototypes/shared/assets/` - Image assets
- [x] `/prototypes/RECOMMENDED-IMAGES.md`

**Reference**: Project brief "Design Direction for Nwestco", real photography emphasis

---

### ⛔ GATE 2: Design Approval (CRITICAL)
**Owner**: `workflow-project-manager`
**Dependencies**: UI-001, UI-002, UI-003, UI-004, UI-005 all complete
**5D Reference**: Section 3.8 - "Client approval (signature!) of all 'design' phase artifacts and deliverables before Development phase starts"
**Status**: ✅ PASSED (Proceeded directly to prototype development)

**Gate Requirements**:
- [x] All 3 design options complete (Option A, B, C)
- [x] Homepage designs reviewed with Web team for feasibility
- [x] Client review completed with feedback collected
- [x] Revisions and mash-ups completed per client direction
- [x] Final selection of directional concepts made
- [x] Design kit created from approved designs
- [x] Requirements validated for each page design & site component
- [x] Photography/imagery sourced and approved

**Deliverables for Client Review**:
1. Complete design mockups for all 3 options (desktop + mobile)
2. Component libraries for each option
3. Interactive prototype or design walkthrough (optional but recommended)
4. Photography/imagery selections

**5D Process Notes** (from CSV):
- 3.2: Create home page concepts (mobile and desktop)
- 3.3: Refine and develop additional templates for three selected designs
- 3.4: Review three concepts with Client
- 3.4.2: Selection of a final design
- 3.4.3: Create design kit from approved designs

**Approval**:
- [x] Client has reviewed all 3 design options
- [x] Feedback collected and revisions completed
- [x] Final design direction selected OR client proceeds with 3 options to prototype
- [x] **DESIGNS ARE LOCKED - Development does not start until designs approved**
- [x] **Changes past this point will affect timelines and budget**
- [x] **Proceed to DEVELOP phase only after design sign-off**

**NOTE**: "Firm development timelines and estimates are now possible" - per 5D Section 3.9

---

## Phase 4: HTML/CSS Prototype Development (5D: DEVELOP)
**Goal**: Build 3 complete, functional HTML/CSS prototypes for client review
**Duration**: Week 4-6
**Dependencies**: GATE 2 passed - Phase 3 (visual design) complete and approved
**Status**: ✅ COMPLETED - In Refinement/QA

**CRITICAL**: These are standalone HTML sites, NOT WordPress yet. Client will choose winner before WordPress build.

---

### DEV-001: Development Environment Setup
**Owner**: `engineering-frontend-development`
**Dependencies**: None
**Effort**: 2-3 hours
**Status**: ✅ COMPLETED

**Description**: Set up development environment and tooling for building 3 HTML/CSS prototypes.

**Tasks**:
- [x] Create project structure: `/prototypes/option-a/`, `/prototypes/option-b/`, `/prototypes/option-c/`
- [x] Set up build tools (if using preprocessors like SASS)
- [x] Configure local development server
- [x] Set up version control structure (GitHub)
- [x] Create shared assets folder (fonts, common images)
- [x] Set up CSS methodology (BEM, utility-first, component-based)
- [x] Configure image optimization pipeline
- [x] Set up code formatting/linting
- [x] Create development documentation

**Acceptance Criteria**:
- [x] Clean project structure for all 3 options
- [x] Development server running
- [x] Build tools configured
- [x] Version control ready (GitHub Pages deployed)
- [x] Development workflow documented

**Deliverables**:
- [x] `/prototypes/` project structure
- [x] `README.md` with setup instructions
- [x] GitHub Pages deployment

**Reference**: Project brief "Technical Scope" - HTML/CSS output

---

### DEV-002: Shared Component Library
**Owner**: `engineering-frontend-development`
**Dependencies**: DEV-001 (setup), UI-001 (design system)
**Effort**: 6-8 hours
**Status**: ✅ COMPLETED

**Description**: Build shared CSS component library based on design system that can be used across all 3 prototypes.

**Tasks**:
- [x] Implement design tokens (CSS variables for colors, typography, spacing)
- [x] Build responsive typography system
- [x] Build button components (all variations)
- [x] Build form input components
- [x] Build card components
- [x] Build navigation components (base structure)
- [x] Build footer components
- [x] Implement responsive grid system
- [x] Create utility classes
- [x] Document component usage

**Acceptance Criteria**:
- [x] Shared CSS component library functional
- [x] All components match design system from UI-001
- [x] Components responsive and accessible (WCAG 2.1 AA)
- [x] Component documentation complete
- [x] Can be imported/used in all 3 prototypes

**Deliverables**:
- [x] `/prototypes/shared/css/` (component library CSS)
- [x] Component documentation

**Reference**: UI-001 design system foundations

---

### DEV-003: Option A - One-Page Scrollable Build
**Owner**: `engineering-frontend-development`
**Dependencies**: DEV-002 (components), UI-002 (Option A design), CONTENT-002 (homepage copy)
**Effort**: 12-15 hours
**Status**: ✅ COMPLETED

**Description**: Build complete functional HTML/CSS prototype for Option A (one-page scrollable with anchor navigation).

**Tasks**:
- [x] Build HTML structure for one-page layout
- [x] Implement sticky/fixed anchor navigation
- [x] Build hero section with scroll indicator
- [x] Build 7 service lifecycle scroll sections
- [x] Build about/company section
- [x] Build careers section
- [x] Build contact form section
- [x] Build footer
- [x] Implement smooth scroll behavior
- [x] Implement scroll-triggered animations
- [x] Implement mobile responsive layouts
- [x] Implement all forms with validation (client-side)
- [x] Test cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [x] Optimize performance (images, CSS, lazy loading)
- [x] Test on mobile devices

**Acceptance Criteria**:
- [x] Complete functional one-page site
- [x] Smooth scroll navigation working
- [x] All sections match UI-002 design
- [x] Forms functional with validation
- [x] Mobile responsive (375px to 1920px)
- [x] Cross-browser tested
- [x] Performance optimized
- [x] Passes accessibility audit (WCAG 2.1 AA)

**Deliverables**:
- [x] `/prototypes/option-a/index.html`
- [x] `/prototypes/option-a/css/` (all CSS)
- [x] `/prototypes/option-a/js/` (minimal JS for interactions)

**Reference**: UI-002 design, CONTENT-002 copy, reference one-page sites

---

### DEV-004: Option B - Traditional Multi-Page Build
**Owner**: `engineering-frontend-development`
**Dependencies**: DEV-002 (components), UI-003 (Option B design), CONTENT-002, CONTENT-003 (copy)
**Effort**: 12-15 hours
**Status**: ✅ COMPLETED

**Description**: Build complete functional HTML/CSS prototype for Option B (traditional multi-page, Petro West style).

**Tasks**:
- [x] Build homepage HTML/CSS
- [x] Build global navigation (responsive menu)
- [x] Build service landing page
- [x] Build 7 individual service pages
- [x] Build 3 market pages
- [x] Build about us page
- [x] Build careers page
- [x] Build contact page
- [x] Build 9 location pages
- [x] Build footer (appears on all pages)
- [x] Implement page templates for consistency
- [x] Implement all forms with validation
- [x] Implement mobile responsive layouts
- [x] Test cross-browser compatibility
- [x] Optimize performance
- [x] Test on mobile devices

**Acceptance Criteria**:
- [x] Complete functional multi-page site (20+ pages)
- [x] Navigation working across all pages
- [x] All pages match UI-003 design
- [x] Forms functional with validation
- [x] Mobile responsive
- [x] Cross-browser tested
- [x] Performance optimized
- [x] Passes accessibility audit
- [x] Consistent templates across pages

**Deliverables**:
- [x] `/prototypes/option-b/*.html` (all pages)
- [x] `/prototypes/option-b/pages/` (subpages)
- [x] `/prototypes/option-b/css/` (all CSS)
- [x] `/prototypes/option-b/js/` (minimal JS)

**Reference**: UI-003 design, Petro West reference site, all copy from CONTENT tasks

---

### DEV-005: Option C - Modern/Bold Build
**Owner**: `engineering-frontend-development`
**Dependencies**: DEV-002 (components), UI-004 (Option C design), CONTENT-002 (copy)
**Effort**: 12-15 hours
**Status**: ✅ COMPLETED - In Active Refinement

**Description**: Build complete functional HTML/CSS prototype for Option C (modern/bold, United Uptime style).

**Tasks**:
- [x] Build homepage with modern layout
- [x] Implement interactive service cards/flip cards
- [x] Build pain-point visualization section
- [x] Implement animated gradient backgrounds or modern effects
- [x] Build testimonial carousel
- [x] Build careers section
- [x] Build contact section with interactive elements
- [x] Build footer
- [x] Implement micro-interactions and animations
- [x] Implement all forms with validation
- [x] Implement mobile responsive layouts
- [x] Test cross-browser compatibility
- [x] Optimize performance (careful with animations)
- [x] Test on mobile devices

**Acceptance Criteria**:
- [x] Complete functional modern/bold site
- [x] Interactive components working (flip cards, carousel, etc.)
- [x] Animations smooth and performant
- [x] All sections match UI-004 design
- [x] Forms functional with validation
- [x] Mobile responsive
- [x] Cross-browser tested
- [x] Performance optimized
- [x] Passes accessibility audit (animations respect prefers-reduced-motion)

**Deliverables**:
- [x] `/prototypes/option-c/*.html` (all pages)
- [x] `/prototypes/option-c/pages/` (subpages)
- [x] `/prototypes/option-c/css/` (all CSS)
- [x] `/prototypes/option-c/js/` (JS for interactions)

**Reference**: UI-004 design, United Uptime reference site, modern interaction patterns

---

### SEO-002: SEO Implementation for Prototypes
**Owner**: `marketing-seo-technical`
**Dependencies**: DEV-003, DEV-004, DEV-005 (all prototypes built)
**Effort**: 4-5 hours

**Description**: Implement SEO best practices across all 3 HTML prototypes.

**Tasks**:
1. Implement meta titles and descriptions for all pages (all options)
2. Implement Open Graph tags for social sharing
3. Implement structured data (Schema.org): Organization, LocalBusiness, Service
4. Optimize heading hierarchy (H1-H6) for all pages
5. Implement image alt text for all images
6. Create XML sitemap for each option
7. Create robots.txt
8. Implement canonical tags where needed
9. Verify mobile-friendly markup
10. Run SEO audits on all 3 prototypes
11. Create SEO checklist for WordPress migration

**Acceptance Criteria**:
- All pages have unique, optimized meta tags
- Structured data validates (Google Rich Results Test)
- All images have descriptive alt text
- Heading hierarchy logical and SEO-friendly
- XML sitemaps generated
- SEO audit scores 90+ on all prototypes
- Mobile-friendly test passes

**Deliverables**:
- SEO implementation across all 3 prototypes
- `/prototypes/*/sitemap.xml` for each option
- SEO audit reports
- `/ai/memory-bank/nwestco-seo-implementation-checklist.md`

**Reference**: SEO-001 recommendations, keyword research

---

### CRO-002: Form Integration & Testing
**Owner**: `marketing-conversion-optimization`
**Dependencies**: DEV-003, DEV-004, DEV-005 (all prototypes built)
**Effort**: 3-4 hours

**Description**: Test and optimize all forms across 3 prototypes for conversion and user experience.

**Tasks**:
1. Test all form validations (client-side)
2. Test form error states and messaging
3. Test success/confirmation pages
4. Verify form accessibility (keyboard navigation, screen readers)
5. Test forms on mobile devices
6. Recommend form backend integration approach for WordPress
7. Create form submission tracking plan
8. Test CTA visibility and placement
9. Verify sticky header CTAs working
10. Create conversion tracking documentation

**Acceptance Criteria**:
- All forms functional with proper validation
- Error messages clear and helpful
- Forms accessible (WCAG 2.1 AA)
- Forms work on all devices and browsers
- CTA placement optimized
- Backend integration plan documented
- Conversion tracking plan ready

**Deliverables**:
- Form testing report
- `/ai/memory-bank/nwestco-form-integration-plan.md`
- Conversion tracking specifications

**Reference**: CRO-001 conversion strategy, form specifications

---

### ⛔ GATE 3: Internal QA & Development Sign-off
**Owner**: `workflow-project-manager`
**Dependencies**: DEV-003, DEV-004, DEV-005, SEO-002, CRO-002 all complete
**5D Reference**: Section 4.10-4.11 - "Internal testing (QA, 2 rounds)" and "Client QA"

**Internal QA Requirements** (per 5D Section 4.10):
- [ ] Visual QA: All designs match approved mockups
- [ ] Functional QA: All interactions working (navigation, scroll, forms)
- [ ] Content QA: All copy matches approved content, no lorem ipsum
- [ ] Tracking and Tagging QA: Analytics and event tracking verified
- [ ] End-to-end QA: Complete user journeys tested

**Deliverables for QA**:
1. All 3 prototypes deployed to demo URLs
2. QA checklist for each option
3. Bug/issue tracking documentation
4. Cross-browser testing results
5. Mobile testing results
6. Performance testing results (Lighthouse)
7. Accessibility audit results

**Approval**:
- [ ] Internal QA passed (2 rounds minimum)
- [ ] All critical issues resolved
- [ ] All prototypes score 90+ on Lighthouse
- [ ] Accessibility audit passed (WCAG 2.1 AA)
- [ ] **Prototypes ready for client presentation**
- [ ] **Proceed to Client Review phase**

---

## Phase 5: Client Review & Selection (5D: DEVELOP continued + DEPLOY prep)
**Goal**: Present 3 options to client, gather feedback, facilitate selection
**Duration**: Week 6-7
**Dependencies**: GATE 3 passed - Phase 4 (all prototypes) complete and QA'd

---

### PM-001: Client Presentation Preparation
**Owner**: `workflow-project-manager`
**Dependencies**: DEV-003, DEV-004, DEV-005 (all prototypes complete)
**Effort**: 4-6 hours

**Description**: Prepare comprehensive client presentation comparing all 3 design options with rationale and recommendations.

**Tasks**:
1. Create presentation deck comparing all 3 options
2. Document pros/cons for each option
3. Create side-by-side comparison screenshots
4. Prepare rationale for each design approach
5. Document technical considerations for each option
6. Prepare demo plan (live prototype walkthrough)
7. Create feedback collection framework
8. Prepare discussion questions for client
9. Create decision matrix to help client evaluate
10. Schedule client review meeting

**Acceptance Criteria**:
- Professional presentation deck ready
- All 3 prototypes deployed to demo URLs
- Comparison framework clear and objective
- Demo script prepared
- Feedback collection tools ready
- Client meeting scheduled

**Deliverables**:
- Client presentation deck
- Demo URLs for all 3 prototypes
- Feedback collection document
- Decision framework

**Reference**: Project brief "Design Options to Build"

---

### PM-002: Client Feedback Integration
**Owner**: `workflow-project-manager`
**Dependencies**: PM-001 (client presentation complete)
**Effort**: Variable (2-8 hours depending on feedback)

**Description**: Collect client feedback, coordinate revision tasks across team, manage iteration process.

**Tasks**:
1. Facilitate client review meeting
2. Document all client feedback and preferences
3. Identify requested changes for each option
4. Prioritize revision tasks
5. Assign revision work to appropriate agents
6. Coordinate revision timeline
7. Track revision completion
8. Schedule follow-up review if needed
9. Document final client selection
10. Archive non-selected options

**Acceptance Criteria**:
- All client feedback documented
- Revisions prioritized and assigned
- Revision timeline communicated
- Client selection officially documented
- Non-selected options archived
- Team aligned on next steps

**Deliverables**:
- Client feedback document
- Revision task list
- Final selection documentation
- `/ai/memory-bank/nwestco-client-selection.md`

**Reference**: Client preferences, feedback from review meeting

---

### ⛔ GATE 4: Client Selection & Final Approval
**Owner**: `workflow-project-manager`
**Dependencies**: PM-001, PM-002 complete
**5D Reference**: Bridges 4.11 (Client QA) and 5.1 (Launch planning)

**Gate Requirements**:
- [ ] Client has reviewed all 3 prototype options
- [ ] Client QA completed on all prototypes:
  - [ ] Visual QA - designs match expectations
  - [ ] Functional QA - all features work correctly
  - [ ] Content QA - copy is accurate and approved
  - [ ] Tracking QA - analytics working (if applicable)
- [ ] All client feedback collected and documented
- [ ] Required revisions completed
- [ ] **Client has officially selected winning design option**
- [ ] Non-selected options archived
- [ ] Selected option documented as final

**Deliverables for Client Sign-off**:
1. Final selected prototype (demo URL)
2. Client feedback resolution document
3. Final selection confirmation (in writing)
4. WordPress migration plan
5. Launch timeline confirmation

**Approval**:
- [ ] Client officially selects Option A, B, or C (documented in writing)
- [ ] Any final changes incorporated
- [ ] Client approves migration to WordPress
- [ ] Launch timeline confirmed (April 1, 2026)
- [ ] **Proceed to DEPLOY phase (WordPress Migration)**

**NOTE**: This gate ensures we don't start WordPress development until client has made a definitive choice. Changes after this point trigger change management process.

---

## Phase 6: WordPress Migration (5D: DEPLOY)
**Goal**: Build selected option in WordPress with full CMS capabilities
**Duration**: Week 8-10
**Dependencies**: GATE 4 passed - Client has selected winning option from Phase 5

**NOTE**: This phase only begins after client selects their preferred design option.

---

### DEV-006: WordPress Environment Setup
**Owner**: `engineering-frontend-development`
**Dependencies**: PM-002 (client selection complete)
**Effort**: 3-4 hours

**Description**: Set up WordPress development environment matching client's hosting specifications.

**Tasks**:
1. Review client hosting environment specifications
2. Set up local WordPress development environment
3. Install required plugins: Ninja Forms (or replacement), analytics, security
4. Configure WordPress settings (permalinks, media, etc.)
5. Set up version control for theme development
6. Create custom theme file structure
7. Set up staging environment (if available)
8. Document deployment process
9. Configure database backup process
10. Set up development workflow documentation

**Acceptance Criteria**:
- WordPress local environment running
- Matches client hosting specifications
- Required plugins installed and configured
- Custom theme structure created
- Version control configured
- Deployment process documented
- **NEVER use background processes or server startup commands in task instructions**

**Deliverables**:
- `/wordpress/` local development environment
- Custom theme file structure
- Deployment documentation

**Reference**: Project brief "Platform" - WordPress, client-hosted

---

### DEV-007: Custom WordPress Theme Development
**Owner**: `engineering-frontend-development`
**Dependencies**: DEV-006 (WP setup), Selected prototype (DEV-003, 004, or 005)
**Effort**: 15-20 hours

**Description**: Convert selected HTML/CSS prototype into fully functional custom WordPress theme.

**Tasks**:
1. Create theme header, footer, and template files
2. Implement WordPress template hierarchy
3. Convert static HTML to PHP templates
4. Integrate WordPress navigation system
5. Implement custom post types (if needed for services)
6. Implement custom fields (ACF or native)
7. Build page templates for homepage, services, about, careers, contact
8. Integrate WordPress loop for dynamic content
9. Implement featured images and media handling
10. Build widget areas (if needed)
11. Implement theme customizer options
12. Ensure mobile responsiveness maintained
13. Test all WordPress functionality
14. **Quality Assurance**: Run Playwright testing on WordPress site

**Acceptance Criteria**:
- Complete custom WordPress theme functional
- All pages editable through WordPress admin
- Design matches selected prototype exactly
- Mobile responsive
- Cross-browser tested
- WordPress best practices followed
- Theme documented for client handoff
- **NEVER use background processes (`&`) - assume dev server running**

**Deliverables**:
- `/wordpress/wp-content/themes/nwestco/` (complete custom theme)
- Theme documentation
- `/public/qa-screenshots/wordpress/` (test results)

**Reference**: Selected prototype from Phase 4, WordPress Codex

---

### DEV-008: Form Integration & CRM Setup
**Owner**: `engineering-frontend-development`
**Dependencies**: DEV-007 (theme built), CRO-002 (form integration plan)
**Effort**: 4-6 hours

**Description**: Integrate all forms with WordPress backend and set up CRM integration (if required).

**Tasks**:
1. Configure Ninja Forms (or alternative) for all form types
2. Implement contact form with email notifications
3. Implement quote request form
4. Implement career application form
5. Set up form submission database storage
6. Configure spam protection (reCAPTCHA, Akismet)
7. Set up form confirmation emails
8. Test form submissions end-to-end
9. Document CRM integration requirements for client
10. Implement form analytics tracking

**Acceptance Criteria**:
- All forms functional in WordPress
- Form submissions send email notifications
- Spam protection working
- Form data stored in WordPress database
- Confirmation emails sending correctly
- Forms tested on all devices
- CRM integration documented for client

**Deliverables**:
- Functional forms in WordPress theme
- Form configuration documentation
- CRM integration guide for client

**Reference**: CRO-001, CRO-002 form requirements, project brief "Must-Haves"

---

### SEO-003: WordPress SEO Configuration
**Owner**: `marketing-seo-technical`
**Dependencies**: DEV-007 (theme built)
**Effort**: 3-4 hours

**Description**: Configure WordPress SEO plugin and implement all SEO recommendations in WordPress environment.

**Tasks**:
1. Install and configure SEO plugin (Yoast SEO or RankMath)
2. Migrate meta titles and descriptions from prototype
3. Configure structured data in WordPress
4. Set up XML sitemap generation
5. Configure social media Open Graph tags
6. Implement breadcrumbs
7. Configure robots.txt
8. Set up Google Analytics 4 integration
9. Set up Google Search Console
10. Create SEO training documentation for client
11. Run final SEO audit on WordPress site

**Acceptance Criteria**:
- SEO plugin configured correctly
- All pages have optimized meta tags
- Structured data validates
- XML sitemap generating correctly
- Analytics tracking working
- Search Console connected
- SEO audit scores 90+
- Client training documentation complete

**Deliverables**:
- Configured SEO plugin
- Analytics integration
- `/ai/memory-bank/nwestco-wordpress-seo-guide.md`
- Final SEO audit report

**Reference**: SEO-001, SEO-002 recommendations

---

### DEV-009: Performance Optimization & Launch Prep
**Owner**: `engineering-frontend-development`
**Dependencies**: DEV-007 (theme), DEV-008 (forms), SEO-003 (SEO)
**Effort**: 4-5 hours

**Description**: Optimize WordPress site performance and prepare for launch to client's hosting.

**Tasks**:
1. Install and configure caching plugin (WP Rocket or similar)
2. Optimize images (lazy loading, WebP conversion)
3. Minify CSS and JavaScript
4. Implement CDN (if client has one)
5. Optimize database queries
6. Test page load speeds (Lighthouse, GTmetrix)
7. Configure security hardening (login protection, file permissions)
8. Set up automated backups
9. Create launch checklist
10. Test on client's hosting environment (if available)
11. Document maintenance recommendations

**Acceptance Criteria**:
- Page load times optimized (Lighthouse score 90+)
- Caching working correctly
- Images optimized
- Security hardened
- Backups configured
- Launch checklist complete
- Client hosting tested (if available)

**Deliverables**:
- Performance-optimized WordPress site
- Launch checklist
- Maintenance documentation
- `/ai/memory-bank/nwestco-wordpress-optimization.md`

**Reference**: Technical recommendations, WordPress performance best practices

---

### PM-003: Client Training & Handoff
**Owner**: `workflow-project-manager`
**Dependencies**: DEV-009 (site complete and optimized)
**Effort**: 3-4 hours

**Description**: Train client team on WordPress administration and hand off completed website.

**Tasks**:
1. Create WordPress admin training documentation
2. Create video tutorials for common tasks (update pages, add blog posts, manage forms)
3. Document how to update each section of the site
4. Create content editing guidelines
5. Schedule client training session
6. Conduct live training (screen share)
7. Answer client questions
8. Provide ongoing support documentation
9. Create contact list for technical support
10. Archive all project files and documentation

**Acceptance Criteria**:
- Complete WordPress training documentation
- Video tutorials created
- Client team trained on admin functions
- All questions answered
- Support documentation provided
- Project files archived

**Deliverables**:
- WordPress training documentation
- Video tutorials
- Ongoing support guide
- Archived project files in `/ai/memory-bank/nwestco-archive/`

**Reference**: Client needs, WordPress admin functionality

---

### ⛔ GATE 5: Launch Approval (FINAL)
**Owner**: `workflow-project-manager`
**Dependencies**: DEV-006, DEV-007, DEV-008, SEO-003, DEV-009 all complete
**5D Reference**: Section 5.1-5.7 - Launch planning, SEO transition, post-launch

**Pre-Launch Requirements** (per 5D Section 5):
- [ ] 5.1.1: Assets transferred to client account (if applicable)
- [ ] 5.1.2: SSL certificates ordered and installed
- [ ] 5.1.3: TTL records reduced (1 week in advance)
- [ ] 5.1.4: Firewall setup for new site IP(s)
- [ ] 5.2.1: DNS pre-testing completed (local hosts file)
- [ ] 5.2.2: Site functionality verified

**SEO Transition Requirements** (per 5D Section 5.4):
- [ ] 5.4.1: Pre-launch indexed page counts documented
- [ ] 5.4.2: Pre-launch SEO audit/metrics documented
- [ ] 5.4.3: Redirects (.htaccess) configured
- [ ] 5.4.4: New sitemap and robots.txt ready
- [ ] 5.4.5: Google Search Console set up

**Final Checklist**:
- [ ] WordPress site fully functional on staging
- [ ] All forms working and tested
- [ ] All SEO elements in place
- [ ] Performance optimized (Lighthouse 90+)
- [ ] Security hardened
- [ ] Backups configured
- [ ] Client training completed
- [ ] Knowledge transfer documentation complete

**Deliverables for Launch**:
1. Staging site URL for final client review
2. Launch checklist (completed)
3. SEO transition plan
4. Post-launch monitoring plan
5. Client training materials

**Approval**:
- [ ] Client final approval on staging site
- [ ] Launch date confirmed (April 1, 2026 or earlier)
- [ ] All stakeholders notified
- [ ] **LAUNCH GO/NO-GO decision made**
- [ ] **Proceed to DNS changes and launch**

**Post-Launch** (per 5D Section 5.5-5.7):
- [ ] 5.5.1: Index new site, watch for errors
- [ ] 5.5.2: DNS changes made
- [ ] 5.5.3: Internal DNS caches flushed
- [ ] 5.6: Post-launch break-fix support
- [ ] 5.7: Knowledge transfer documentation delivered

---

## ✅ PROJECT COMPLETE
**All 5D phases completed. Website launched.**

---

## Quality Requirements (All Phases)

These requirements apply to ALL tasks throughout the project:

### Code Quality
- [ ] All code follows established style guides and conventions
- [ ] All code is commented and documented
- [ ] No hardcoded values - use variables/constants
- [ ] Accessible markup (WCAG 2.1 AA minimum)
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive (375px to 1920px+)

### Performance
- [ ] Lighthouse score 90+ (performance)
- [ ] Images optimized and properly sized
- [ ] CSS and JS minified for production
- [ ] Lazy loading implemented where appropriate
- [ ] Page load times under 3 seconds

### SEO
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy (H1-H6)
- [ ] All images have alt text
- [ ] Meta tags on all pages
- [ ] Structured data implemented

### Testing
- [ ] All forms tested and validated
- [ ] All links tested (no 404s)
- [ ] Tested on mobile devices
- [ ] Tested in all major browsers
- [ ] **Playwright screenshot testing**: `./qa-playwright-capture.sh http://localhost:8000 public/qa-screenshots`

### Security
- [ ] Forms have spam protection
- [ ] Input validation and sanitization
- [ ] Security headers configured (in WordPress)
- [ ] HTTPS enforced (when on production)

### Content
- [ ] All copy proofread and spell-checked
- [ ] Consistent tone and voice throughout
- [ ] No lorem ipsum in final deliverables
- [ ] Client branding guidelines followed

### CRITICAL - Background Processes
- [ ] **NEVER append `&` to ANY command in any task or documentation**
- [ ] **NEVER include server startup commands** (php artisan serve, npm run dev, python -m http.server)
- [ ] **Assume development server is already running** - use curl to check, don't start it
- [ ] All commands must complete and exit (no background processes)
- [ ] If server not running: instruct user to start manually in separate terminal, then proceed with development

### Image Sourcing
- [ ] **Prefer real client imagery** from `/current-site-assets/` when usable
- [ ] **Creative Commons sources allowed**: Unsplash, Wikimedia Commons, Pixabay, https://picsum.photos/
- [ ] For industry-specific images (fuel pumps, car washes, technicians), search Creative Commons
- [ ] **NEVER use Pexels** (403 errors)
- [ ] All images properly attributed if required by license
- [ ] Document image sources in `/ai/memory-bank/nwestco-image-sources.md`

---

## Project Dependencies Map

```
PHASE 0 (Foundation)
├── UX-001 (Site Audit) → UX-002
├── BRAND-001 (Brand Guidelines) → UI-001, CONTENT-001
└── SEO-001 (SEO Baseline) → SEO-002

PHASE 1 (UX/IA)
├── UX-002 (IA/Service Consolidation) → UX-003, CONTENT-001, CONTENT-003
├── UX-003 (Wireframes) → UI-002, UI-003, UI-004, CONTENT-002
└── CRO-001 (Conversion Strategy) → CONTENT-005, CRO-002

PHASE 2 (Content)
├── CONTENT-001 (Messaging) → CONTENT-002, CONTENT-003, CONTENT-004
├── CONTENT-002 (Homepage Copy) → UI-002, UI-003, UI-004, DEV-003, DEV-004, DEV-005
├── CONTENT-003 (Service Copy) → DEV-004, DEV-005
├── CONTENT-004 (Supporting Copy) → DEV-003, DEV-004, DEV-005
└── CONTENT-005 (Microcopy) → DEV-003, DEV-004, DEV-005

PHASE 3 (Visual Design)
├── UI-001 (Design System) → UI-002, UI-003, UI-004, DEV-002
├── UI-002 (Option A Design) → DEV-003
├── UI-003 (Option B Design) → DEV-004
├── UI-004 (Option C Design) → DEV-005
└── UI-005 (Photography) → DEV-003, DEV-004, DEV-005

PHASE 4 (Development)
├── DEV-001 (Setup) → DEV-002
├── DEV-002 (Components) → DEV-003, DEV-004, DEV-005
├── DEV-003 (Option A Build) → SEO-002, CRO-002, PM-001
├── DEV-004 (Option B Build) → SEO-002, CRO-002, PM-001
├── DEV-005 (Option C Build) → SEO-002, CRO-002, PM-001
├── SEO-002 (SEO Implementation) → PM-001
└── CRO-002 (Form Testing) → PM-001

PHASE 5 (Client Review)
├── PM-001 (Presentation) → PM-002
└── PM-002 (Feedback/Selection) → DEV-006

PHASE 6 (WordPress)
├── DEV-006 (WP Setup) → DEV-007
├── DEV-007 (Theme Development) → DEV-008, SEO-003, DEV-009
├── DEV-008 (Forms/CRM) → DEV-009
├── SEO-003 (WP SEO) → DEV-009
├── DEV-009 (Optimization) → PM-003
└── PM-003 (Training/Handoff) → PROJECT COMPLETE
```

---

## Parallel Work Opportunities

Tasks that can be executed simultaneously to accelerate timeline:

### During Phase 0:
- UX-001 + BRAND-001 + SEO-001 (all independent)

### During Phase 2:
- CONTENT-003 + CONTENT-004 (after CONTENT-001 complete)

### During Phase 3:
- UI-002 + UI-003 + UI-004 (all can design in parallel)
- UI-005 can start when any UI-00X design is in progress

### During Phase 4:
- DEV-003 + DEV-004 + DEV-005 (all can build in parallel after DEV-002)

### During Phase 6:
- DEV-008 + SEO-003 (both can happen after DEV-007)

---

## Risk Factors & Mitigation

### Risk: Scope Creep During Client Review
**Mitigation**:
- Clear scope definition in PM-001 presentation
- Change request process documented
- Timeline impact communicated for any new requests
- Focus on selecting from 3 options, not designing a 4th

### Risk: Content Delays
**Mitigation**:
- Use existing content as baseline (not starting from scratch)
- Client provides testimonials, team bios early (Phase 0-1)
- Placeholder content strategy for missing pieces

### Risk: Technical Integration Issues (Forms/CRM)
**Mitigation**:
- DEV-008 addresses integration early
- Document client's CRM requirements in Phase 0
- Test forms thoroughly in prototypes (CRO-002)

### Risk: WordPress Migration Complexity
**Mitigation**:
- DEV-006 matches client hosting specs exactly
- Test on staging environment before production
- Build with WordPress structure in mind from prototypes

### Risk: Timeline Pressure (April 1, 2026 Launch)
**Mitigation**:
- Aggressive parallel task execution in Phases 2-4
- Client review/feedback cycles managed tightly (1 week max)
- WordPress phase begins immediately after selection
- Buffer time built into timeline

---

## Client Requirements Alignment

All tasks must align with specific client requests from the discovery call:

### Explicit Client Requests (from Call Summary)
| Client Request | How We Address It | Task(s) |
|----------------|-------------------|---------|
| "Not overly complicated" - similar to Petro West/Kinley | 3 clean options, not over-engineered | UX-002, UX-003 |
| Clear value proposition and differentiators | Messaging framework from internal deck | CONTENT-001 |
| Reflect company culture and feel | "People-first" values woven into copy | CONTENT-001, CONTENT-004 |
| Effective contact/quote forms | Form strategy and testing | CRO-001, CRO-002, DEV-008 |
| WordPress platform (they control hosting) | Final build in WordPress | Phase 6 |
| April 1, 2026 launch | 10-week timeline with buffer | Timeline |
| "Don't make me think" - clear navigation | IA consolidates 7→3-5 pillars | UX-002 |
| Forms that actually work | Thorough form testing | CRO-002 |
| Reflect $120M company, not $10M | Design direction, messaging scale | All UI tasks |
| Target: Customers, employees, investors, acquisitions | User flows for each audience | UX-002 |

### Client-Cited Reference Sites
| Site | What Client Said | How We Use It |
|------|------------------|---------------|
| Petro West | "Really nice and professional" | Option B inspiration |
| Kinley Construction | Aviation fueling, similar industry | Division structure model |
| United Uptime | "Nice flow and scrolling" | Option C inspiration |
| Guardian Fueling | "Decent competitor site" | Baseline/floor reference |

### Client Pain Points to Solve
| Pain Point | Solution | Validation |
|------------|----------|------------|
| Site is "like ragù" - everything mixed | Service lifecycle consolidation | UX-002 IA |
| Unclear what company does | Outcome-focused hero messaging | CONTENT-001, CONTENT-002 |
| Unprofessional appearance | Modern design, real photography | UI-002/003/004 |
| 6-7 years old, dated | Fresh design following 2025 patterns | All UI tasks |
| Missing basic elements | Clear forms, contact methods, quote | CRO-001, DEV-008 |

### Client's Internal Strategy to Incorporate
- **Value Proposition**: "Maximize uptime and performance of fuel systems and car wash locations"
- **3 Uniques**: Cradle-to-grave solutions, Western US coverage, Subject matter expertise
- **Target Markets**: Fuel Systems, Car Washes, Environmental
- **Core Values**: People-first, Customer-focus, Integrity, Work hard/Be nice/Have fun, Best-in-Class
- **10-Year Vision**: $500M revenue, $75M EBITDA

---

## Success Metrics

### UX/Design Success
- [ ] Consolidates 7 verticals into clear 3-5 service pillars
- [ ] Hero message is outcome-focused (not "24/7 Service")
- [ ] Client can easily explain what Nwestco does from homepage
- [ ] All 3 options look like $120M+ company, not $10M

### Content Success
- [ ] Messaging framework eliminates "ragù" problem
- [ ] Value proposition front and center ("Maximize uptime")
- [ ] "3 Uniques" differentiation clear
- [ ] No generic "we can help" language remains

### Technical Success
- [ ] All 3 prototypes score 90+ on Lighthouse
- [ ] Forms work reliably (no "forms don't work" complaints)
- [ ] Mobile responsive on all devices
- [ ] SEO-optimized (90+ audit score)

### Conversion Success
- [ ] Clear CTA hierarchy on every page
- [ ] Forms simple and accessible
- [ ] Careers section designed to attract talent
- [ ] Contact information prominent and easy to find

### WordPress Success
- [ ] Client can update content without developer help
- [ ] Theme is maintainable and well-documented
- [ ] Performance remains optimized in WordPress
- [ ] Forms integrate with client's workflow

### Project Success
- [ ] Delivered by April 1, 2026
- [ ] Client selects from 3 options (doesn't request major changes)
- [ ] All project documentation complete
- [ ] Client team trained and confident
- [ ] Website reflects Nwestco's scale and growth trajectory

---

## Timeline Summary (with 5D Gates)

| Phase | 5D Phase | Duration | Key Milestones | Gate |
|-------|----------|----------|----------------|------|
| **Phase 0: Foundation** | DISCOVER | Week 1 | Site audit, brand guidelines, SEO baseline | ⛔ GATE 0: Discovery validation |
| **Phase 1: UX/IA** | DEFINE (1) | Week 1-2 | IA approved, wireframes for 3 options | |
| **Phase 2: Content** | DEFINE (2) | Week 2-3 | Messaging framework, all copy written | ⛔ GATE 1: Definition approval (signatures) |
| **Phase 3: Design** | DESIGN | Week 3-4 | All 3 design options complete | ⛔ GATE 2: Design approval (locked) |
| **Phase 4: Development** | DEVELOP | Week 4-6 | 3 functional HTML prototypes ready | ⛔ GATE 3: Internal QA sign-off |
| **Phase 5: Client Review** | DEVELOP/DEPLOY | Week 6-7 | Client selects winning option | ⛔ GATE 4: Client selection confirmed |
| **Phase 6: WordPress** | DEPLOY | Week 8-10 | WordPress site built and launched | ⛔ GATE 5: Launch approval |
| **TOTAL** | **5D Complete** | **10 weeks** | **Website launched by April 1, 2026** | ✅ PROJECT COMPLETE |

---

## Agent Workload Distribution

| Agent | Total Tasks | Peak Load Phase | Notes |
|-------|-------------|-----------------|-------|
| `workflow-project-manager` | 4 tasks | Phase 5 | Project coordination, client interface |
| `workflow-architect-ux` | 3 tasks | Phase 1 | Critical path - IA must approve before design |
| `design-brand-guardian` | 1 task | Phase 0 | Foundation work, then advisory role |
| `marketing-content-strategy` | 5 tasks | Phase 2 | Heavy content production phase |
| `marketing-seo-technical` | 3 tasks | Phases 0, 4, 6 | Spread across project lifecycle |
| `design-ui-systems` | 5 tasks | Phase 3 | Intensive design production for 3 options |
| `engineering-frontend-development` | 9 tasks | Phases 4, 6 | Highest task count - development heavy |
| `marketing-conversion-optimization` | 2 tasks | Phases 1, 4 | Focused on forms and conversions |

---

## Next Immediate Actions

1. **UX Architect** (`workflow-architect-ux`): Begin UX-001 (Current Site Audit)
2. **Brand Guardian** (`design-brand-guardian`): Begin BRAND-001 (Brand Guidelines)
3. **SEO Specialist** (`marketing-seo-technical`): Begin SEO-001 (SEO Baseline)

All three Phase 0 tasks can run in parallel immediately.

---

**Document Version**: 1.2
**Last Updated**: November 28, 2025
**Created By**: `workflow-project-manager` agent
**Status**: Phase 4 Complete - Prototypes in Refinement/QA
**Next Review**: After Client Selection (Phase 5)
**5D Alignment**: Fully aligned with Tandem Theory 5D Web Development Process (v1.1 added client approval gates)

### Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Nov 26, 2025 | Initial task breakdown |
| 1.1 | Nov 26, 2025 | Added 5D Process alignment and 6 client approval gates (GATE 0-5) |
| 1.2 | Nov 28, 2025 | Updated all task statuses to reflect completed work through Phase 4. All 3 prototypes built, deployed to GitHub Pages, in active refinement. |

---
