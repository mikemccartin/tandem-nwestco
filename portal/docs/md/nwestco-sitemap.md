# Nwestco Website Sitemap - Visual Hierarchy

**Project:** Nwestco Website Redesign
**Document:** Visual Sitemap
**Author:** workflow-architect-ux Agent
**Date:** November 26, 2025
**Version:** 1.0

---

## Complete Site Hierarchy

```
NWESTCO.COM
│
├─── 🏠 HOMEPAGE (/)
│
├─── 🏭 MARKETS WE SERVE
│    │
│    ├─── ⛽ FUEL SYSTEMS (/markets/fuel-systems/)
│    │    ├─ Retail Fuel & C-Stores (/markets/fuel-systems/retail/)
│    │    ├─ Commercial & Fleet (/markets/fuel-systems/commercial/)
│    │    ├─ Aviation Fueling (/markets/fuel-systems/aviation/)
│    │    └─ Industrial Applications (/markets/fuel-systems/industrial/)
│    │
│    ├─── 🚗 CAR WASH SYSTEMS (/markets/car-wash/)
│    │    ├─ Tunnel Washes (section on main page)
│    │    ├─ In-Bay Automatics (section on main page)
│    │    └─ Self-Serve Washes (section on main page)
│    │
│    └─── 🌱 ENVIRONMENTAL SOLUTIONS (/markets/environmental/)
│         ├─ Tank Testing & Compliance (section on main page)
│         ├─ Leak Detection Systems (section on main page)
│         └─ Remediation & Cleanup (section on main page)
│
├─── 🔧 SERVICES WE PROVIDE
│    │
│    ├─ 📐 Design & Engineering (/services/design-engineering/)
│    ├─ 🏗️ Installation & Construction (/services/installation/)
│    ├─ ⚡ 24/7 Service & Maintenance (/services/service-maintenance/)
│    ├─ ♻️ Remodels & Upgrades (/services/remodels-upgrades/)
│    ├─ 📦 Equipment Sales & Parts (/services/equipment-parts/)
│    ├─ ✅ Testing & Compliance (/services/testing-compliance/)
│    └─ 🎓 Training & Certification (/services/training/)
│
├─── ⭐ WHY NWESTCO (/why-nwestco/)
│
├─── 📸 PROJECTS (/projects/)
│    ├─ Project Gallery (filterable by market, service, state)
│    └─ Case Study Pages (/projects/{project-name}/) [5-10 pages]
│
├─── ℹ️ ABOUT US (/about/)
│    ├─ Company Overview (section)
│    ├─ Mission & Values (section)
│    ├─ Company History (section)
│    ├─ Leadership Team (section)
│    ├─ Company Culture (section)
│    └─ Industry Recognition (section)
│
├─── 💼 CAREERS (/careers/)
│    ├─ Why Work at Nwestco (section)
│    ├─ Employee Testimonials (section)
│    ├─ Benefits Overview (section)
│    ├─ Open Positions (section with job listings)
│    ├─ Life at Nwestco (section)
│    ├─ Application Process (section)
│    └─ Job Detail Pages (/careers/{job-title}-{location}/) [variable]
│
├─── 📍 BRANCHES (/branches/)
│    ├─ Branch Listings (section with map)
│    └─ Branch Detail Pages:
│         ├─ Kalispell, Montana (/branches/kalispell/)
│         ├─ Spokane, Washington (/branches/spokane/)
│         ├─ Billings, Montana (/branches/billings/)
│         ├─ Boise, Idaho (/branches/boise/)
│         ├─ Portland, Oregon (/branches/portland/)
│         ├─ Springdale, Arkansas (/branches/springdale/)
│         ├─ Fresno, California (/branches/fresno/)
│         ├─ Bakersfield, California (/branches/bakersfield/)
│         └─ San Jose, California (/branches/san-jose/)
│
├─── 🏷️ BRANDS (/brands/)
│    ├─ Brand Partnerships Overview (section)
│    ├─ Fuel Systems Brands (section)
│    ├─ Car Wash Brands (section)
│    ├─ Electrical & Lighting Brands (section)
│    ├─ Pumps & Fluid Handling Brands (section)
│    ├─ Storage Systems Brands (section)
│    ├─ Payment Systems Brands (section)
│    └─ Monitoring & Controls Brands (section)
│
├─── 📚 RESOURCES (/resources/)
│    ├─ Compliance Guides (section)
│    ├─ Maintenance Guides (section)
│    ├─ Equipment Buying Guides (section)
│    ├─ Industry News & Blog (section)
│    └─ FAQs (section)
│
├─── 📞 CONTACT (/contact/)
│    ├─ Emergency Service Form (modal)
│    ├─ Quote Request Form (multi-step)
│    ├─ General Inquiry Form (simple)
│    └─ Confirmation Pages (/contact/thank-you/)
│
└─── 📄 LEGAL & UTILITY PAGES
     ├─ Privacy Policy (/privacy-policy/)
     ├─ Terms of Service (/terms-of-service/)
     └─ Accessibility Statement (/accessibility/)
```

---

## Primary Navigation Structure

### Desktop Header Navigation

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Markets ▼  │  Services ▼  │  Why Nwestco  │  Projects  │  About  │  Careers │
│                                                                                      │
│                                           [GET SERVICE NOW] [📞 800-775-1892]       │
└────────────────────────────────────────────────────────────────────────────────────┘
```

### Markets Dropdown Menu

```
┌─────────────────────────────────────────────────────────────────┐
│  MARKETS WE SERVE                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ⛽ Fuel Systems                  🚗 Car Wash Systems          │
│  ├─ Retail Fuel & C-Stores       ├─ Tunnel Washes             │
│  ├─ Commercial & Fleet           ├─ In-Bay Automatics         │
│  ├─ Aviation Fueling             └─ Self-Serve Washes         │
│  └─ Industrial Applications                                    │
│                                                                 │
│  🌱 Environmental Solutions                                     │
│  ├─ Testing & Compliance                                       │
│  ├─ Leak Detection                                             │
│  └─ Remediation                                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Services Dropdown Menu

```
┌─────────────────────────────────────────────────────────────────┐
│  SERVICES WE PROVIDE                                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Lifecycle Solutions              Specialized Services         │
│  ├─ 📐 Design & Engineering       ├─ 📦 Equipment & Parts      │
│  ├─ 🏗️ Installation               ├─ ✅ Testing & Compliance   │
│  ├─ ⚡ Service & Maintenance       └─ 🎓 Training               │
│  └─ ♻️ Remodels & Upgrades                                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Mobile Navigation Structure

### Mobile Header (Collapsed)

```
┌─────────────────────────────────────────┐
│ [☰]  [LOGO]      [⚡Service] [📞]       │
└─────────────────────────────────────────┘
```

### Mobile Menu (Expanded - Accordion Style)

```
┌─────────────────────────────────────────┐
│ [✕ Close]                               │
├─────────────────────────────────────────┤
│                                         │
│ ▼ Markets We Serve                      │
│   ⛽ Fuel Systems                        │
│     ├─ Retail Fuel & C-Stores           │
│     ├─ Commercial & Fleet               │
│     ├─ Aviation Fueling                 │
│     └─ Industrial Applications          │
│   🚗 Car Wash Systems                   │
│   🌱 Environmental Solutions            │
│                                         │
│ ▼ Services We Provide                   │
│   📐 Design & Engineering               │
│   🏗️ Installation & Construction        │
│   ⚡ 24/7 Service & Maintenance         │
│   ♻️ Remodels & Upgrades                │
│   📦 Equipment Sales & Parts            │
│   ✅ Testing & Compliance               │
│   🎓 Training & Certification           │
│                                         │
│ ⭐ Why Nwestco                          │
│ 📸 Projects                             │
│ ℹ️ About Us                             │
│ 💼 Careers                              │
│ 📍 Branches                             │
│ 🏷️ Brands                               │
│ 📚 Resources                            │
│ 📞 Contact Us                           │
│                                         │
│ [GET SERVICE NOW]                       │
│ [📞 CALL 800-775-1892]                  │
│                                         │
└─────────────────────────────────────────┘
```

---

## Footer Navigation

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                      │
│  COMPANY              MARKETS              SERVICES             RESOURCES            │
│  ├─ About Us          ├─ Fuel Systems      ├─ Design           ├─ Branches          │
│  ├─ Why Nwestco       ├─ Car Wash          ├─ Installation     ├─ Brand Partners    │
│  ├─ Careers           └─ Environmental     ├─ Service          ├─ Projects          │
│  ├─ News                                   ├─ Remodels         ├─ Resource Library  │
│  └─ Contact                                ├─ Equipment        └─ FAQs              │
│                                            ├─ Testing                                │
│                                            └─ Training                               │
│                                                                                      │
│  ─────────────────────────────────────────────────────────────────────────────────  │
│                                                                                      │
│  📞 24/7 Emergency: 800-775-1892   |   📧 info@nwestco.com                          │
│  📍 9 Branches Across 6 Western States                                              │
│                                                                                      │
│  🔗 LinkedIn  Facebook  YouTube                                                      │
│                                                                                      │
│  ─────────────────────────────────────────────────────────────────────────────────  │
│                                                                                      │
│  Privacy Policy  |  Terms of Service  |  Accessibility Statement                    │
│  © 2026 Nwestco. All rights reserved.                                               │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Page Count Summary

### By Category

| Category | Page Count | Priority |
|----------|------------|----------|
| **Homepage** | 1 | Critical |
| **Market Landing Pages** | 3 | Critical |
| **Market Subsections** | 4 | High (Fuel subsections) |
| **Service Pages** | 7 | Critical |
| **Top-Level Pages** | 5 | Critical-High |
| **Branch Pages** | 9 | High |
| **Case Studies** | 5-10 | Medium |
| **Job Detail Pages** | Variable | Medium |
| **Legal/Utility** | 3 | Required |

### Total Page Estimate

**Critical Pages (Must Have for Launch):** 15
- Homepage (1)
- Market Landing Pages (3)
- Service Pages (7)
- About (1)
- Contact (1)
- Careers (1)
- Projects Gallery (1)

**High Priority Pages:** 18
- Why Nwestco (1)
- Branches Landing (1)
- Branch Detail Pages (8)
- Fuel Systems Subsections (4)
- Brands (1)
- Resources (1)
- Legal Pages (3)

**Medium Priority Pages (Phase 2):** 5-15
- Case Study Detail Pages (5-10)
- Job Detail Pages (variable)
- Blog/News Articles (future)

**Grand Total: 38-48 pages**

**Recommended Launch Scope: 25-30 pages**
(Critical + High Priority, excluding some branch detail pages and case studies that can be added post-launch)

---

## Service Consolidation Visual

### Old Structure (Current - 7 Competing Verticals)

```
┌──────────────────────────────────────────────────────────────────┐
│  CURRENT NAVIGATION (Problematic)                                │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  🟥 Petroleum      🟥 Aviation      🟥 Tanks                     │
│  🟥 Car Wash       🟥 Electrical    🟥 Industrial                │
│  🟥 Automotive                                                   │
│                                                                  │
│  Problem: 7 competing items with unclear relationships          │
│  User can't determine which applies to their needs              │
│  Overlaps create confusion (Industrial vs Petroleum?)           │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### New Structure (Recommended - 3 Pillars + Lifecycle)

```
┌──────────────────────────────────────────────────────────────────┐
│  NEW NAVIGATION (Clear Hierarchy)                                │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  MARKETS WE SERVE (3 Pillars)                                   │
│  ┌────────────┐  ┌────────────┐  ┌─────────────────┐           │
│  │ ⛽ FUEL     │  │ 🚗 CAR     │  │ 🌱 ENVIRONMENTAL │           │
│  │  SYSTEMS   │  │  WASH      │  │  SOLUTIONS       │           │
│  └────────────┘  └────────────┘  └─────────────────┘           │
│                                                                  │
│  SERVICES WE PROVIDE (Lifecycle)                                │
│  ┌──────────────────────────────────────────────────────┐       │
│  │ Design → Install → Service → Upgrade → Test → Train │       │
│  └──────────────────────────────────────────────────────┘       │
│                                                                  │
│  Solution: 3 clear market choices + lifecycle services          │
│  User self-identifies by market, then explores services         │
│  No overlaps, clear relationships                               │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Mapping: Old → New

```
OLD VERTICAL              NEW LOCATION
─────────────────────────────────────────────────────────
Petroleum           →     Fuel Systems (main pillar)
Aviation            →     Fuel Systems > Aviation Fueling
Industrial          →     Fuel Systems > Industrial Applications
Automotive          →     Fuel Systems > Retail Fuel (c-store bays)
Car Wash            →     Car Wash Systems (unchanged, standalone pillar)
Electrical          →     Services > Installation (cross-cutting capability)
Tanks               →     Equipment featured within Fuel Systems pages
Environmental (NEW) ←     Testing & Compliance elevated to pillar
```

---

## User Journey Paths

### Path 1: Emergency Service User

```
User needs immediate pump repair
         ↓
   ANY PAGE
         ↓
   Sees sticky header: [GET SERVICE NOW]
         ↓
   Clicks button
         ↓
   Modal opens with 3 options
         ↓
   Selects: [EMERGENCY SERVICE] (red button)
         ↓
   Emergency form or click-to-call
         ↓
   Service dispatched
```

**Result:** 2 clicks from any page to emergency service

---

### Path 2: Project Quote User

```
C-store owner researching fuel system upgrade
         ↓
   Google search or referral
         ↓
   HOMEPAGE
         ↓
   Reads value prop, sees 3 market pillars
         ↓
   Clicks: Fuel Systems
         ↓
   FUEL SYSTEMS MARKET PAGE
         ↓
   Reads pain points, solutions, case studies
         ↓
   Clicks: [REQUEST FUEL SYSTEMS QUOTE]
         ↓
   MULTI-STEP QUOTE FORM
   Step 1: Project type, timeline, email
   Step 2: Location, contact info
   Step 3: Project details, budget
         ↓
   CONFIRMATION PAGE
         ↓
   Branch contacts within 4 hours
```

**Result:** 5 clicks total (Homepage → Market → Quote → Form → Confirmation)

---

### Path 3: Job Seeker User

```
Technician looking for career opportunity
         ↓
   Google or Indeed job listing
         ↓
   CAREERS PAGE
         ↓
   Reads "Why Work at Nwestco", employee testimonials
         ↓
   Filters jobs by location
         ↓
   Clicks: Fuel Systems Technician - Spokane
         ↓
   JOB DETAIL PAGE
         ↓
   Reads job description, qualifications, benefits
         ↓
   Clicks: [APPLY NOW]
         ↓
   APPLICATION FORM
         ↓
   CONFIRMATION PAGE
```

**Result:** 4 clicks (Careers → Job Listing → Job Detail → Apply → Confirmation)

---

### Path 4: Existing Customer Service Request

```
Car wash operator needs routine maintenance
         ↓
   Direct to nwestco.com (existing relationship)
         ↓
   HOMEPAGE
         ↓
   Clicks sticky header: [GET SERVICE NOW]
         ↓
   Modal opens with 3 options
         ↓
   Selects: [GENERAL INQUIRY] (service request)
         ↓
   SERVICE REQUEST FORM
   Simple form: Name, phone, service needed, date
         ↓
   CONFIRMATION PAGE
         ↓
   Branch schedules service
```

**Result:** 2 clicks (Any page → Service Modal → Form → Confirmation)

---

## Cross-Linking Strategy

### Market Pages Link To:
- Related lifecycle services (Design, Installation, Service, etc.)
- Case studies filtered by market
- Brand partners relevant to market
- Branch locations serving that market
- FAQ sections specific to market

### Service Pages Link To:
- All markets that use this service
- Related complementary services
- Case studies showcasing this service
- Equipment/brands used in this service
- Training courses for this service

### Branch Pages Link To:
- Markets served from this location
- Services available at this location
- Projects completed by this branch
- Training center information (Portland, Spokane)
- Contact forms pre-filled with branch

### Projects/Case Studies Link To:
- Market pages (category)
- Service pages (services used)
- Branch locations (project location)
- Similar projects
- Quote request with project type pre-filled

---

## SEO URL Structure

### Clean, Descriptive URLs

```
✅ GOOD URL STRUCTURE
──────────────────────────────────────────
/markets/fuel-systems/
/markets/fuel-systems/retail/
/markets/fuel-systems/aviation/
/markets/car-wash/
/markets/environmental/

/services/design-engineering/
/services/installation/
/services/service-maintenance/

/projects/
/projects/circle-k-fuel-system-upgrade/
/projects/express-car-wash-installation/

/branches/spokane/
/branches/portland/

/careers/
/careers/fuel-systems-technician-spokane/
```

```
❌ AVOID (Current Structure Problems)
──────────────────────────────────────────
/services/petroleum/  (too vague, mixes with other services)
/services/automotive/  (unclear - auto repair or c-store?)
/services/tanks/  (product, not service)
/services/electrical/  (service type, not market)
```

### URL Naming Conventions

**Markets:**
- `/markets/{market-name}/`
- Subsections: `/markets/{market-name}/{subsection}/`

**Services:**
- `/services/{service-name}/`
- No subsections (services apply across markets)

**Projects:**
- `/projects/` (gallery)
- `/projects/{project-slug}/` (case study detail)

**Branches:**
- `/branches/` (overview with map)
- `/branches/{city-name}/` (branch detail)

**Careers:**
- `/careers/` (landing page)
- `/careers/{job-title}-{location}/` (job detail)

---

## Accessibility Navigation Features

### Keyboard Navigation Support
- Tab order follows logical hierarchy
- Skip navigation link (skip to main content)
- All dropdowns accessible via keyboard (Enter to open, Arrow keys to navigate)
- Esc key closes modals and dropdowns

### Screen Reader Support
- ARIA labels on navigation elements
- ARIA roles for dropdown menus (menu, menuitem)
- ARIA live regions for dynamic content (form validation, modals)
- Breadcrumb navigation with aria-label="Breadcrumb"

### Visual Indicators
- Focus states clearly visible (blue outline)
- Active page highlighted in navigation
- Hover states distinct from focus states
- Sufficient color contrast (WCAG 2.1 AA)

---

**Document Complete**

**Next Steps:**
1. Stakeholder review and approval of information architecture
2. Confirm service consolidation mapping (7 → 3 pillars)
3. Approve navigation structure and page count
4. Proceed to UX-003: Wireframe Development

**Dependencies:**
- This sitemap must be approved before wireframe work begins
- Any changes to IA will impact all design and development work

---

**End of Sitemap Document**
