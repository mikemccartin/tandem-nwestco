# Nwestco Information Architecture - Service Consolidation & Site Structure

**Project:** Nwestco Website Redesign
**Document:** Information Architecture & Service Consolidation Strategy
**Author:** workflow-architect-ux Agent
**Date:** November 26, 2025
**Status:** Ready for Stakeholder Review
**Version:** 1.0

---

## Executive Summary

This document solves the "ragù problem" identified in Phase 0 Discovery by consolidating 7 competing service verticals into a clear 3-pillar market structure supported by lifecycle services. The new information architecture reduces cognitive load, clarifies Nwestco's one-stop-shop value proposition, and creates intuitive navigation that passes the "Don't make me think" test.

**Key Changes:**
- **7 verticals → 3 market pillars**: Fuel Systems, Car Wash Systems, Environmental Solutions
- **Service types repositioned as lifecycle capabilities**: Not competing verticals but supporting services across all markets
- **Clear user paths**: Customers can self-identify by market, then explore lifecycle services
- **Estimated page count**: 25-30 pages (down from fragmented 15+ with unclear relationships)

---

## Part 1: Service Consolidation Strategy

### 1.1 The Problem: Current 7 Verticals

**Current Structure (Problematic):**

| Vertical | Current Description | Issue |
|----------|-------------------|-------|
| **Petroleum** | Retail fuel systems, c-stores | Overlaps with Industrial, Aviation, Automotive |
| **Car Wash** | Equipment, chemicals, service | Standalone but clear (KEEP as pillar) |
| **Automotive** | Auto service equipment | Confused relationship - is this c-store bays or separate auto repair shops? |
| **Aviation** | Airport fueling systems | Subset of petroleum/fuel systems |
| **Electrical** | Electricians and electrical work | This is a SERVICE TYPE, not a market vertical |
| **Industrial** | Fleet, hospitals, bulk plants | Heavy overlap with Petroleum |
| **Tanks** | Steel storage tanks | This is a PRODUCT, not a vertical |

**Analysis:** The current structure mixes:
- Market verticals (Petroleum, Car Wash, Automotive, Aviation)
- Service types (Electrical - applies across all markets)
- Product categories (Tanks - equipment used in projects)
- Overlapping markets (Industrial vs. Petroleum)

This creates the "ragù" - everything mixed together with no organizing principle.

---

### 1.2 The Solution: 3 Market Pillars + Lifecycle Services

**New Structure (Recommended):**

```
MARKETS WE SERVE (Primary Navigation)
├── Fuel Systems
│   ├── Retail Fuel (gas stations, c-stores)
│   ├── Commercial/Fleet (bulk plants, marinas, fleets)
│   ├── Aviation Fueling (airports, FBOs)
│   └── Industrial Applications (hospitals, data centers, generators)
│
├── Car Wash Systems
│   ├── Tunnel Washes
│   ├── In-Bay Automatics
│   └── Self-Serve Washes
│
└── Environmental Solutions
    ├── Tank Testing & Compliance
    ├── Leak Detection Systems
    └── Remediation & Cleanup

SERVICES WE PROVIDE (Secondary Navigation)
├── Design & Engineering
├── Installation & Construction
├── 24/7 Service & Maintenance
├── Remodels & Upgrades
├── Equipment Sales & Parts
├── Testing & Compliance
└── Training & Certification
```

---

### 1.3 Service Consolidation Mapping (7 → 3)

**Old Structure → New Structure Mapping:**

#### Petroleum → Fuel Systems (Market Pillar 1)
- **Retail Fuel subsection**: Gas stations, c-stores, truck stops
- **Keep**: All petroleum equipment capabilities, manufacturer partnerships
- **Absorbs**: Automotive (c-store automotive service bays), Aviation (as subsection), Industrial (as subsection)
- **Rationale**: These are all fuel storage and dispensing applications - same technical expertise, different contexts

#### Car Wash → Car Wash Systems (Market Pillar 2)
- **Keep as standalone**: Clear market, distinct equipment, separate customer base
- **No changes**: This vertical works well, maintain current structure
- **Enhance**: Better organization by wash type (tunnel, in-bay, self-serve)

#### Environmental Solutions (NEW Market Pillar 3)
- **New category**: Elevates compliance and environmental services to pillar status
- **Rationale**: EPA compliance, environmental concerns are TOP priorities for fuel retailers
- **Content**: Tank testing, leak detection, remediation, compliance consulting
- **Strategic benefit**: Differentiates Nwestco from competitors who only offer equipment

#### Electrical → Cross-Cutting Service Capability
- **Remove from primary navigation**: Not a market vertical
- **Reposition**: Lifecycle service that supports ALL markets
- **Implementation**: Feature electrical capabilities within each market page
- **Example**: "Our Master Electricians handle all fuel dispenser wiring, canopy lighting, and control systems"

#### Tanks → Product Offering within Fuel Systems
- **Remove from primary navigation**: Equipment, not a service vertical
- **Integrate**: Feature prominently on Fuel Systems pages
- **Detail page**: Maintain tank specification page, link from service pages
- **Example**: "We supply and install premium Wilray tanks from 500-30,000 gallons"

#### Industrial → Subsection of Fuel Systems
- **Remove as standalone**: Heavy overlap with petroleum
- **Integrate**: Fuel Systems > Industrial Applications subsection
- **Keep examples**: Fleet services, hospitals, bulk plants, marinas (show breadth)
- **Rationale**: Industrial fuel systems use same tech as retail, just different scale/application

#### Automotive → Subsection of Fuel Systems
- **Remove as standalone**: Clarify this is c-store automotive bays, not separate auto repair market
- **Integrate**: Fuel Systems > Retail Fuel subsection (automotive service bays)
- **If separate market**: Keep only if Nwestco serves standalone auto repair shops (needs clarification)
- **Recommendation**: Consolidate into Fuel Systems unless strategic decision to expand into auto repair vertical

---

### 1.4 Lifecycle Services Framework

**Philosophy:** Services are not separate verticals - they're capabilities that apply across all markets.

**The Lifecycle Wheel:**

```
        DESIGN & ENGINEERING
                ↓
         INSTALLATION
                ↓
      SERVICE & MAINTENANCE ←→ EQUIPMENT SALES
                ↓
         REMODELS & UPGRADES
                ↓
      TESTING & COMPLIANCE
                ↓
    TRAINING & CERTIFICATION
                ↓
      (Cycle repeats)
```

**Lifecycle Services Defined:**

1. **Design & Engineering**
   - CAD drawings and site planning
   - Regulatory compliance consulting
   - Permitting assistance
   - System design optimization
   - Applies to: New construction, major remodels

2. **Installation & Construction**
   - Turn-key project management
   - Equipment installation (fuel systems, car wash, tanks)
   - Electrical systems (lighting, controls, wiring)
   - Underground tank installation
   - Applies to: All new projects and major upgrades

3. **24/7 Service & Maintenance**
   - Emergency response (2-hour target)
   - Preventative maintenance programs
   - Equipment troubleshooting and repair
   - Parts replacement and upgrades
   - Applies to: All markets, ongoing customer relationships

4. **Remodels & Upgrades**
   - Facility renovations
   - Equipment replacement and modernization
   - Canopy and lighting upgrades
   - Point-of-sale system updates
   - Applies to: Existing facilities needing refresh

5. **Equipment Sales & Parts**
   - Premium manufacturer equipment (40+ brands)
   - Next-day parts delivery
   - Chemical and consumables (car wash)
   - Vending products and merchandise
   - Applies to: All customers, ongoing revenue stream

6. **Testing & Compliance**
   - Tank integrity testing
   - Leak detection system certification
   - EPA compliance documentation
   - State and local regulatory compliance
   - Applies to: All fuel system customers, regulatory requirement

7. **Training & Certification**
   - Portland and Spokane training centers
   - On-site customer training
   - Manufacturer certification programs
   - Safety and compliance training
   - Applies to: Customer staff, employee development

---

## Part 2: Complete Site Map & Navigation

### 2.1 Primary Navigation Structure

**Desktop Header Navigation:**

```
[LOGO]  Markets ▼  |  Services ▼  |  Why Nwestco  |  Projects  |  About  |  Careers  |  [GET SERVICE NOW] [800-775-1892]
```

**Markets Dropdown Menu:**

```
MARKETS WE SERVE

Fuel Systems                          Car Wash Systems
├─ Retail Fuel & C-Stores            ├─ Tunnel Washes
├─ Commercial & Fleet                ├─ In-Bay Automatics
├─ Aviation Fueling                  └─ Self-Serve Washes
└─ Industrial Applications

Environmental Solutions
├─ Testing & Compliance
├─ Leak Detection
└─ Remediation
```

**Services Dropdown Menu:**

```
SERVICES WE PROVIDE

Lifecycle Solutions                   Specialized Services
├─ Design & Engineering              ├─ Equipment Sales & Parts
├─ Installation & Construction       ├─ Testing & Compliance
├─ 24/7 Service & Maintenance        └─ Training & Certification
└─ Remodels & Upgrades
```

---

### 2.2 Full Site Map

```
NWESTCO.COM
│
├─── HOMEPAGE (/)
│    ├─ Hero: "Maximize Your Uptime - Fuel Systems & Car Wash Solutions Across the Western US"
│    ├─ Quick Access: [Emergency Service] [Request Quote] [Browse Services]
│    ├─ Section: 3 Market Pillars (Fuel / Car Wash / Environmental)
│    ├─ Section: Lifecycle Service Wheel
│    ├─ Section: Why Nwestco (3 Uniques)
│    ├─ Section: 48-Hour Service Commitment
│    ├─ Section: 9 Branches Across 6 States (Map)
│    ├─ Section: 40+ Premium Brand Partners
│    ├─ Section: Customer Success Stories (3 testimonials)
│    └─ CTA: Get Service Now / Request Quote
│
├─── MARKETS WE SERVE
│    │
│    ├─── FUEL SYSTEMS (/markets/fuel-systems/)
│    │    ├─ Overview: Complete fuel system solutions from design to 24/7 service
│    │    ├─ Pain Points: Downtime costs, compliance stress, vendor juggling
│    │    ├─ Solutions: One-stop shop, lifecycle approach, technical expertise
│    │    ├─ Market Segments:
│    │    │   ├─ Retail Fuel & C-Stores (/markets/fuel-systems/retail/)
│    │    │   │   └─ Gas stations, convenience stores, truck stops
│    │    │   │   └─ C-store automotive service bays
│    │    │   ├─ Commercial & Fleet (/markets/fuel-systems/commercial/)
│    │    │   │   └─ Bulk plants, fuel terminals, marinas, fleet services
│    │    │   ├─ Aviation Fueling (/markets/fuel-systems/aviation/)
│    │    │   │   └─ Airports, FBOs, private runways
│    │    │   └─ Industrial Applications (/markets/fuel-systems/industrial/)
│    │    │       └─ Hospitals, data centers, generators, rail-to-storage
│    │    ├─ Equipment: Dispensers, tanks, pumps, monitoring systems
│    │    ├─ Brands: Gilbarco, Veeder-Root, OPW, Franklin, Xerxes, Husky
│    │    ├─ Services Available: Full lifecycle (link to Services section)
│    │    ├─ Case Studies: 3-5 fuel system project examples
│    │    ├─ Testimonials: Customer success stories
│    │    └─ CTA: Request Fuel System Quote
│    │
│    ├─── CAR WASH SYSTEMS (/markets/car-wash/)
│    │    ├─ Overview: Turn-key car wash solutions with 24/7 support
│    │    ├─ Pain Points: Equipment downtime, chemical costs, maintenance burden
│    │    ├─ Solutions: Expert service, next-day parts, chemistry optimization
│    │    ├─ Car Wash Types:
│    │    │   ├─ Tunnel Washes (equipment, chemicals, maintenance)
│    │    │   ├─ In-Bay Automatics (installation, service, parts)
│    │    │   └─ Self-Serve Washes (equipment, vending, support)
│    │    ├─ Equipment: Ryko, Belanger, Rotary, J.E. Adams, Quantum
│    │    ├─ Chemicals: Turtle Wax, Blue Coral, Diamond Shine, Rain-X
│    │    ├─ Vending Products: Air fresheners, towels, merchandise (profit opportunity)
│    │    ├─ Services: Turn-key installs, renovations, service, parts, chemicals
│    │    ├─ Coverage: Rockies and Northwest US, next-day delivery
│    │    ├─ Case Studies: Car wash installations and renovations
│    │    ├─ Testimonials: Car wash operator success stories
│    │    └─ CTA: Request Car Wash Quote
│    │
│    └─── ENVIRONMENTAL SOLUTIONS (/markets/environmental/)
│         ├─ Overview: Protect your business with compliance and environmental services
│         ├─ Why It Matters: EPA fines, environmental liability, regulatory complexity
│         ├─ Services Offered:
│         │   ├─ Tank Testing & Compliance
│         │   │   └─ Integrity testing, certification, documentation
│         │   ├─ Leak Detection Systems
│         │   │   └─ Installation, monitoring, reporting, compliance
│         │   └─ Remediation & Cleanup
│         │       └─ Spill response, soil remediation, regulatory coordination
│         ├─ Regulatory Expertise: EPA, state, local compliance knowledge
│         ├─ Documentation: Complete compliance records for inspections
│         ├─ Peace of Mind: Protect your business from environmental liability
│         ├─ Case Studies: Compliance projects, remediation success stories
│         └─ CTA: Schedule Compliance Assessment
│
├─── SERVICES WE PROVIDE
│    │
│    ├─── DESIGN & ENGINEERING (/services/design-engineering/)
│    │    ├─ Overview: Expert design and permitting for new projects
│    │    ├─ Services: CAD drawings, site planning, compliance consulting, permitting
│    │    ├─ Process: Initial consultation → Site analysis → Design → Permitting → Approval
│    │    ├─ Markets Served: Fuel Systems, Car Wash, Industrial
│    │    ├─ Why Nwestco: 25+ years experience, regulatory expertise, faster approvals
│    │    └─ CTA: Request Design Consultation
│    │
│    ├─── INSTALLATION & CONSTRUCTION (/services/installation/)
│    │    ├─ Overview: Turn-key project management from start to finish
│    │    ├─ Services: Equipment installation, electrical, underground tanks, construction
│    │    ├─ Capabilities: Master Electricians, certified installers, project management
│    │    ├─ Process: Planning → Coordination → Installation → Testing → Handoff
│    │    ├─ On-Time Delivery: Project timeline commitments
│    │    ├─ Markets Served: All markets (fuel, car wash, industrial)
│    │    └─ CTA: Request Installation Quote
│    │
│    ├─── 24/7 SERVICE & MAINTENANCE (/services/service-maintenance/)
│    │    ├─ Overview: Maximize uptime with expert service and preventative maintenance
│    │    ├─ Emergency Service: 24/7 hotline, 2-hour response target, rapid dispatch
│    │    ├─ Preventative Maintenance: Scheduled programs, reduce downtime, extend equipment life
│    │    ├─ Repair Services: Troubleshooting, parts replacement, system optimization
│    │    ├─ Coverage: 9 branches across Western US for fast response
│    │    ├─ Technician Expertise: Factory-certified, manufacturer-trained
│    │    ├─ Response Commitment: 48-hour completion for 90%+ of service calls
│    │    └─ CTA: Request Service / Emergency Hotline
│    │
│    ├─── REMODELS & UPGRADES (/services/remodels-upgrades/)
│    │    ├─ Overview: Modernize your facility without complete reconstruction
│    │    ├─ Services: Equipment replacement, canopy upgrades, facility refresh, POS systems
│    │    ├─ Why Upgrade: Attract customers, improve efficiency, meet new regulations
│    │    ├─ Process: Assessment → Planning → Phased Implementation → Minimize Downtime
│    │    ├─ Markets: Fuel station remodels, car wash renovations, industrial upgrades
│    │    └─ CTA: Request Remodel Assessment
│    │
│    ├─── EQUIPMENT SALES & PARTS (/services/equipment-parts/)
│    │    ├─ Overview: Premium equipment and next-day parts delivery
│    │    ├─ Equipment Sales: 40+ manufacturer partnerships (link to Brands page)
│    │    ├─ Parts Inventory: Next-day delivery across Western US
│    │    ├─ Chemicals & Consumables: Car wash chemicals, vending products
│    │    ├─ Brands: Gilbarco, Veeder-Root, OPW, Ryko, Belanger, Turtle Wax, etc.
│    │    ├─ Warranty Support: Full manufacturer warranty support
│    │    └─ CTA: Request Parts Quote / Browse Equipment
│    │
│    ├─── TESTING & COMPLIANCE (/services/testing-compliance/)
│    │    ├─ Overview: Stay compliant with EPA and state regulations
│    │    ├─ Tank Testing: Integrity testing, certification, documentation
│    │    ├─ Leak Detection: System installation, monitoring, compliance reporting
│    │    ├─ Regulatory Consulting: EPA, state, local compliance guidance
│    │    ├─ Documentation: Complete records for inspections and audits
│    │    ├─ Why It Matters: Avoid fines, protect environment, ensure operations
│    │    └─ CTA: Schedule Compliance Testing
│    │
│    └─── TRAINING & CERTIFICATION (/services/training/)
│         ├─ Overview: Best-in-class technical training programs
│         ├─ Training Centers: Portland OR and Spokane WA facilities
│         ├─ Course Offerings:
│         │   ├─ Fuel Dispenser Maintenance (Gilbarco, Veeder-Root)
│         │   ├─ Electrical Systems (Petroleum facility electrical codes)
│         │   ├─ Tank Systems & Compliance (Testing procedures, EPA compliance)
│         │   └─ Car Wash Equipment (Ryko, tunnel systems, water treatment)
│         ├─ Training Formats: Public classes, private/on-site, custom curriculum
│         ├─ Certifications: Manufacturer certifications, industry safety certs
│         ├─ Schedule: Upcoming classes calendar
│         ├─ Registration: Online enrollment form
│         └─ CTA: Register for Training
│
├─── WHY NWESTCO (/why-nwestco/)
│    ├─ Overview: What makes Nwestco different
│    ├─ The 3 Uniques:
│    │   ├─ 1. Cradle-to-Grave Solutions (lifecycle capabilities)
│    │   ├─ 2. Western US Coverage (9 branches, 6 states, fast response)
│    │   └─ 3. Technical Expertise (best-in-class training, certified techs)
│    ├─ 48-Hour Service Commitment (90%+ calls completed within 48 hours)
│    ├─ 40+ Premium Brand Partnerships (authorized service, factory training)
│    ├─ One-Stop Shop Value Prop (eliminate vendor juggling)
│    ├─ Uptime Guarantee (maximize customer operations)
│    ├─ Customer Success Stories (testimonials with results)
│    ├─ Industry Certifications (manufacturer certs, safety ratings)
│    └─ CTA: Experience the Nwestco Difference
│
├─── PROJECTS (/projects/)
│    ├─ Overview: Completed projects across Western US
│    ├─ Filter Options: By Market (Fuel/Car Wash/Industrial), By Service Type, By State
│    ├─ Project Gallery: Photo grid with project details
│    ├─ Featured Case Studies:
│    │   ├─ Case Study 1: Major c-store chain fuel system upgrades
│    │   ├─ Case Study 2: Turn-key car wash installation
│    │   ├─ Case Study 3: Airport aviation fueling system
│    │   ├─ Case Study 4: Industrial bulk plant compliance project
│    │   └─ Case Study 5: Multi-site remodel program
│    ├─ Each Case Study Includes:
│    │   ├─ Customer challenge
│    │   ├─ Solution approach
│    │   ├─ Implementation details
│    │   ├─ Results/outcomes (uptime improvement, compliance achieved, ROI)
│    │   ├─ Customer testimonial quote
│    │   └─ Before/after photos
│    └─ CTA: Start Your Project
│
├─── ABOUT (/about/)
│    ├─ Company Overview: $120M company, 9 branches, 360+ employees
│    ├─ Mission & Values: Best-in-class, people-first, customer-focus
│    ├─ Company History:
│    │   ├─ Growth story: $66M → $120M → targeting $500M
│    │   ├─ Acquisition timeline (6 acquisitions highlighted)
│    │   ├─ Geographic expansion across Western US
│    │   └─ Evolution from regional player to Western US leader
│    ├─ Leadership Team:
│    │   ├─ CEO Mike Ochoa (video message, bio)
│    │   ├─ Executive team bios and photos
│    │   └─ Board/investor relationships (PE-backed platform)
│    ├─ Company Culture: Work hard, be nice, have fun
│    ├─ Industry Recognition: Awards, certifications, partnerships
│    ├─ Community Involvement: Local presence in 9 branch communities
│    └─ CTA: Join Our Team / Partner With Us
│
├─── CAREERS (/careers/)
│    ├─ Overview: "Build Your Career With a Growing Industry Leader"
│    ├─ Growth Story: $120M → $500M, expanding opportunities
│    ├─ Why Work at Nwestco:
│    │   ├─ Career advancement (internal promotion examples)
│    │   ├─ Best-in-class training (Portland/Spokane centers)
│    │   ├─ Competitive compensation and benefits
│    │   ├─ People-first culture
│    │   └─ Work-life balance
│    ├─ Employee Testimonials: 3-5 employee success stories with photos
│    ├─ Open Positions:
│    │   ├─ Job board (embedded ATS or link to external system)
│    │   ├─ Filter by: Location, Department, Job Type
│    │   └─ Featured roles: Technicians, Sales, Operations Leaders
│    ├─ Benefits Overview:
│    │   ├─ Health, dental, vision insurance
│    │   ├─ 401(k) with company match
│    │   ├─ PTO and holidays
│    │   ├─ Factory training and certifications (all expenses paid)
│    │   ├─ Career development programs
│    │   ├─ Company vehicle for field positions
│    │   └─ Latest tools and equipment
│    ├─ Life at Nwestco: Photo gallery (teams, projects, training, events)
│    ├─ Application Process: 5-step process visualization
│    └─ CTA: Apply Now / Submit Resume
│
├─── BRANCHES (/branches/)
│    ├─ Overview: "9 Branches Across 6 Western States - We're Where You Need Us"
│    ├─ Interactive Map: Coverage area visualization with branch locations
│    ├─ Branch Listings:
│    │   ├─ Kalispell, Montana (Headquarters)
│    │   ├─ Spokane, Washington (Training Center)
│    │   ├─ Billings, Montana
│    │   ├─ Boise, Idaho
│    │   ├─ Portland, Oregon (Training Center)
│    │   ├─ Springdale, Arkansas
│    │   ├─ Fresno, California
│    │   └─ Bakersfield, California
│    │   └─ San Jose, California
│    ├─ Each Branch Includes:
│    │   ├─ Address and contact information
│    │   ├─ Phone numbers (toll-free and local)
│    │   ├─ Hours of operation
│    │   ├─ 24/7 emergency service availability
│    │   ├─ Services available at this location
│    │   ├─ Branch photo (exterior, trucks, team)
│    │   └─ Get directions link (Google Maps)
│    ├─ Geographic Coverage: "Serving 6 Western States" (WA, OR, ID, MT, CA, AR)
│    ├─ Response Time: "Average emergency response under 4 hours"
│    └─ CTA: Contact Your Nearest Branch
│
├─── BRANDS (/brands/)
│    ├─ Overview: "Authorized Partners Of The Industry's Leading Manufacturers"
│    ├─ Why Partnerships Matter:
│    │   ├─ Factory-certified technicians
│    │   ├─ Full warranty support
│    │   ├─ Latest training on new equipment
│    │   └─ Priority parts availability
│    ├─ Brand Categories:
│    │   ├─ Fuel Systems Equipment (Gilbarco, Veeder-Root, OPW, Franklin, etc.)
│    │   ├─ Storage Systems (Xerxes, Husky, Wilray Manufacturing)
│    │   ├─ Car Wash Equipment (Ryko, Belanger, Rotary, J.E. Adams, Quantum)
│    │   ├─ Chemicals & Cleaning (Turtle Wax, Blue Coral, Diamond Shine, Rain-X)
│    │   ├─ Lighting & Electrical (LSI Industries, Square D, Honeywell, Cree)
│    │   ├─ Pumps & Fluid Handling (Graco, Gorman-Rupp, CAT Pumps, Fillrite)
│    │   ├─ Payment Systems (Verifone, Clover)
│    │   └─ Monitoring & Controls (Omntec, Hikvision)
│    ├─ Logo Grid: 40+ brand logos organized by category
│    ├─ Certifications: Manufacturer certification badges
│    └─ CTA: Ask About Equipment Options
│
├─── RESOURCES (/resources/)
│    ├─ Overview: "Industry Insights and Compliance Resources"
│    ├─ Resource Categories:
│    │   ├─ Compliance Guides (EPA regulations, state requirements, checklists)
│    │   ├─ Maintenance Guides (Preventative maintenance, troubleshooting)
│    │   ├─ Equipment Buying Guides (How to select dispensers, tanks, car wash equipment)
│    │   ├─ Industry News (Blog articles, company updates, market trends)
│    │   └─ FAQs (Common questions by market and service type)
│    ├─ Downloadable Assets:
│    │   ├─ Compliance checklists (PDF downloads)
│    │   ├─ Product catalogs and spec sheets
│    │   ├─ Service brochures
│    │   └─ Training course descriptions
│    ├─ Search Functionality: Search resources by keyword or category
│    └─ CTA: Contact Us With Questions
│
├─── CONTACT (/contact/)
│    ├─ Overview: "How Can We Help?"
│    ├─ Three-Path Routing (Prominent Button Options):
│    │   ├─ [REQUEST EMERGENCY SERVICE] (Red button - urgent)
│    │   ├─ [GET A QUOTE] (Blue button - primary)
│    │   └─ [GENERAL INQUIRY] (Outline button - secondary)
│    │
│    ├─ Emergency Service Modal (if clicked):
│    │   ├─ 24/7 Emergency Hotline: 800-775-1892 (click-to-call)
│    │   ├─ Emergency form (name, phone, location, issue description)
│    │   ├─ "We'll dispatch a technician immediately"
│    │   └─ Average response time: 2-4 hours
│    │
│    ├─ Quote Request Form (Multi-Step - if clicked):
│    │   ├─ Step 1: Your Project
│    │   │   ├─ Market: [Dropdown: Fuel Systems/Car Wash/Environmental/Other]
│    │   │   ├─ Service Type: [Dropdown: New Install/Renovation/Service/Quote]
│    │   │   ├─ Timeline: [Dropdown: Emergency/This Week/This Month/Planning]
│    │   │   └─ Email: [Required for save/resume]
│    │   ├─ Step 2: Location & Contact
│    │   │   ├─ Location (City, State): [Auto-assigns to nearest branch]
│    │   │   ├─ Name: [Required]
│    │   │   ├─ Phone: [Required]
│    │   │   └─ Company: [Optional]
│    │   ├─ Step 3: Project Details
│    │   │   ├─ Description: [Textarea]
│    │   │   ├─ Upload Photos/Documents: [Optional]
│    │   │   └─ Budget Range: [Optional dropdown]
│    │   └─ Confirmation: "Thanks! We'll contact you within 4 hours."
│    │
│    ├─ General Contact Form (Simple):
│    │   ├─ Name, Email, Phone, Message
│    │   ├─ Submit button
│    │   └─ "We'll respond within 4 hours during business hours"
│    │
│    ├─ Contact Information:
│    │   ├─ Main Hotline: 800-775-1892 (24/7 Service Available)
│    │   ├─ Email: info@nwestco.com
│    │   ├─ Hours: Monday-Friday 8am-5pm (Emergency service 24/7)
│    │   └─ Branches: [Link to Branches page with all 9 locations]
│    │
│    └─ Alternative Contact Methods: Email, phone, branch locations
│
└─── FOOTER (Global)
     ├─ Column 1: Company
     │   ├─ About Us
     │   ├─ Why Nwestco
     │   ├─ Careers
     │   ├─ News & Updates
     │   └─ Contact Us
     │
     ├─ Column 2: Markets
     │   ├─ Fuel Systems
     │   ├─ Car Wash Systems
     │   └─ Environmental Solutions
     │
     ├─ Column 3: Services
     │   ├─ Design & Engineering
     │   ├─ Installation
     │   ├─ Service & Maintenance
     │   ├─ Remodels & Upgrades
     │   ├─ Equipment & Parts
     │   ├─ Testing & Compliance
     │   └─ Training
     │
     ├─ Column 4: Resources
     │   ├─ Branches & Locations
     │   ├─ Brand Partners
     │   ├─ Projects & Case Studies
     │   ├─ Resource Library
     │   └─ FAQs
     │
     ├─ Contact Strip:
     │   ├─ Emergency: 800-775-1892 (24/7)
     │   ├─ Email: info@nwestco.com
     │   └─ 9 Branches Across 6 Western States
     │
     ├─ Social Media: LinkedIn, Facebook, YouTube (if applicable)
     │
     ├─ Legal:
     │   ├─ Privacy Policy
     │   ├─ Terms of Service
     │   └─ Accessibility Statement
     │
     └─ Copyright: © 2026 Nwestco. All rights reserved.
```

---

## Part 3: User Flow Diagrams

### 3.1 User Flow 1: Customer Seeking Emergency Service

**Persona:** Fuel station operator with pump failure, losing revenue every minute

**Entry Points:**
- Google search: "emergency fuel pump repair [location]"
- Direct navigation to nwestco.com (existing customer)
- Phone call to branch (offline path)

**User Flow:**

```
1. ARRIVAL
   ├─ Homepage or any page (sticky header with emergency CTA always visible)
   └─ Sees: [REQUEST EMERGENCY SERVICE] red button in header

2. CLICK EMERGENCY CTA
   ├─ Modal opens immediately (no page navigation delay)
   └─ Shows:
       ├─ "24/7 Emergency Hotline: 800-775-1892" (click-to-call on mobile)
       ├─ Emergency form (name, phone, location, issue)
       └─ "Average response time: 2-4 hours"

3. USER CHOICE:
   ├─ Option A: Click-to-call hotline (fastest) → Speak with dispatcher
   └─ Option B: Submit emergency form

4. FORM SUBMISSION
   ├─ Auto-routes to nearest branch based on location
   ├─ Confirmation message: "Emergency request received. Dispatcher calling you within 10 minutes."
   └─ Email confirmation with request details and hotline number

5. FOLLOW-UP (Backend)
   ├─ Dispatcher contacts customer within 10 minutes
   ├─ Technician dispatched from nearest branch
   └─ Average arrival: 2-4 hours

SUCCESS METRICS:
- Time from homepage to form submission: Under 60 seconds
- Clear expectation of response time
- Multiple contact methods (call or form)
- Mobile-optimized for on-the-go operators
```

**Navigation Path:**
- **Homepage → [Emergency CTA] → Modal Form → Confirmation** (3 clicks maximum)
- **Any Page → [Emergency CTA] → Modal Form → Confirmation** (sticky header access)

**Conversion Barriers Eliminated:**
- No need to navigate multiple pages
- Emergency CTA visible on every page (sticky header)
- Form requires minimal information (name, phone, location, issue)
- Click-to-call alternative for users who prefer phone
- Clear response time expectations reduce anxiety

---

### 3.2 User Flow 2: Customer Requesting Quote for New Project

**Persona:** C-store owner planning fuel system upgrade, researching options

**Entry Points:**
- Google search: "fuel system installation [location]" or "car wash equipment quote"
- LinkedIn ad targeting c-store owners
- Referral from existing customer

**User Flow:**

```
1. ARRIVAL
   ├─ Homepage or Market page (Fuel Systems or Car Wash)
   └─ Sees: Clear value proposition, service offerings, project examples

2. EXPLORATION PHASE (User educates themselves)
   ├─ Reads market landing page (Fuel Systems or Car Wash Systems)
   ├─ Views case studies on Projects page
   ├─ Checks branch locations (coverage area validation)
   ├─ Reviews brand partnerships (equipment options)
   └─ Reads "Why Nwestco" differentiators

3. READY TO REQUEST QUOTE
   ├─ Clicks [GET A QUOTE] button (visible on every page in header)
   └─ Multi-step quote form opens:

4. QUOTE REQUEST FORM (Multi-Step)

   STEP 1: Your Project (30 seconds)
   ├─ Market: [Dropdown: Fuel Systems/Car Wash/Environmental/Other]
   ├─ Service Type: [New Installation/Renovation/Equipment Only/Not Sure]
   ├─ Timeline: [Emergency/Within 1 Month/Within 3 Months/Planning Stage/Not Sure]
   └─ Email: [Required] → User receives save-and-resume link

   STEP 2: Location & Contact (30 seconds)
   ├─ Location (City, State): [Text inputs]
   ├─ System auto-identifies nearest branch and displays: "Your project will be handled by our [Spokane] branch"
   ├─ Name: [Text]
   ├─ Phone: [Text]
   └─ Company: [Text - Optional]

   STEP 3: Project Details (60 seconds)
   ├─ Description: [Textarea: "Tell us about your project..."]
   ├─ Upload Photos/Documents: [Optional file upload]
   ├─ Budget Range: [Dropdown: <$50K / $50K-$100K / $100K-$250K / $250K+ / Not Sure]
   └─ How did you hear about us?: [Dropdown - for marketing attribution]

5. SUBMISSION & CONFIRMATION
   ├─ Confirmation page: "Thanks! We'll contact you within 4 hours."
   ├─ What happens next:
   │   ├─ "Your nearest branch ([Spokane]) will review your request"
   │   ├─ "A project specialist will call you within 4 hours"
   │   └─ "Check your email for quote request confirmation"
   ├─ Email confirmation sent with request details and branch contact info
   └─ Recommended next steps: View similar projects, download compliance guide

6. FOLLOW-UP (Backend)
   ├─ Lead auto-routed to appropriate branch based on location
   ├─ Project specialist contacts customer within 4 hours
   ├─ Schedule site visit or phone consultation
   └─ Prepare detailed quote

SUCCESS METRICS:
- Form completion rate >60% (industry average is 30-40%)
- Average completion time: 2-3 minutes
- Email capture in Step 1 for abandonment recovery
- Lead qualification data (market, timeline, budget)
- Auto-routing to correct branch (no manual sorting)
```

**Navigation Path:**
- **Homepage → Fuel Systems → Case Studies → [Get Quote] → Form → Confirmation** (5 clicks)
- **Shortcut: Homepage → [Get Quote] → Form → Confirmation** (3 clicks)

**Conversion Optimizations:**
- Multi-step form reduces intimidation (3 steps vs. 1 long form)
- Email captured in Step 1 for save-and-resume
- Progress indicator shows user how far through form
- Auto-branch assignment eliminates manual routing
- Budget range optional (reduces friction, but provides valuable data if completed)
- Response time commitment ("within 4 hours") manages expectations

---

### 3.3 User Flow 3: Job Seeker Looking for Careers

**Persona:** Experienced fuel equipment technician considering job change, values training/development

**Entry Points:**
- Google search: "fuel systems technician jobs [location]"
- Indeed/LinkedIn job posting (links to Careers page)
- Employee referral (word of mouth)

**User Flow:**

```
1. ARRIVAL
   ├─ Direct to Careers page (/careers/) or Homepage
   └─ If Homepage: Navigation → Careers in header

2. CAREERS PAGE EXPLORATION
   ├─ Hero: "Build Your Career With a Growing Industry Leader"
   ├─ Growth Story: "$120M → $500M, expanding opportunities"
   ├─ Why Work at Nwestco section:
   │   ├─ Career advancement examples (internal promotions)
   │   ├─ Best-in-class training (Portland/Spokane centers highlighted)
   │   ├─ Competitive compensation and benefits
   │   ├─ People-first culture (Work hard, be nice, have fun)
   │   └─ Work-life balance messaging
   ├─ Employee Testimonials: 3-5 success stories with photos
   │   └─ Example: "I started as an apprentice and now lead our Spokane branch"
   └─ Benefits Overview (health insurance, 401k match, PTO, training, company vehicle)

3. JOB SEARCH
   ├─ Open Positions section (embedded job board or link to ATS)
   ├─ Filter Options:
   │   ├─ Location: [Dropdown: All Locations / Kalispell MT / Spokane WA / etc.]
   │   ├─ Department: [Dropdown: All / Technicians / Sales / Operations / Admin]
   │   └─ Job Type: [Dropdown: All / Full-Time / Part-Time / Apprentice]
   ├─ Job Listings Display:
   │   └─ Each listing shows: Job Title, Location, Department, Brief Description
   └─ User clicks job of interest

4. JOB DETAIL PAGE
   ├─ Job Title and Location
   ├─ Job Description (responsibilities, qualifications, requirements)
   ├─ What We Offer (salary range, benefits, training opportunities)
   ├─ About This Branch (specific location details)
   ├─ Application Process: 5-step visualization
   │   └─ "Apply → Phone Screen → Interview → Technical Assessment → Offer"
   └─ [APPLY NOW] button

5. APPLICATION
   ├─ Option A: Internal application form (simple)
   │   ├─ Name, Email, Phone, Location
   │   ├─ Resume upload
   │   ├─ Cover letter (optional)
   │   └─ LinkedIn profile (optional)
   ├─ Option B: Link to external ATS (Workday, Greenhouse, etc.)
   │   └─ User completes application in ATS system
   └─ Confirmation: "Thanks for applying! We'll review your application and contact you within 1 week."

6. FOLLOW-UP (Backend)
   ├─ HR reviews application
   ├─ Phone screen scheduled (1 week)
   ├─ Interview process (hiring manager, team)
   ├─ Technical assessment (for tech roles)
   └─ Offer extended

SUCCESS METRICS:
- Application start rate (% who click Apply Now)
- Application completion rate (% who submit)
- Time to complete application: <5 minutes
- Quality of candidates (technical qualifications match)
- Source tracking (Indeed vs. LinkedIn vs. direct vs. referral)
```

**Navigation Path:**
- **Homepage → Careers → Job Listings → Job Detail → Apply → Confirmation** (5 clicks)
- **Direct Landing: Careers Page → Job Listings → Job Detail → Apply → Confirmation** (4 clicks)

**Conversion Optimizations:**
- Careers page sells the company before showing jobs (employee value prop first)
- Employee testimonials build trust and authenticity
- Clear benefits overview (training emphasis for technician audience)
- Filter jobs by location (users find relevant opportunities faster)
- Application process visualization reduces anxiety
- Mobile-optimized job search and application (many technicians search on phones)
- "Don't see the right fit?" CTA for general resume submission

---

### 3.4 User Flow 4: Existing Customer Needing Maintenance

**Persona:** Car wash operator with annual maintenance contract, needs routine service scheduled

**Entry Points:**
- Direct navigation to nwestco.com (existing relationship)
- Email from Nwestco (maintenance reminder)
- Phone call to branch (offline - but web path available)

**User Flow:**

```
1. ARRIVAL
   ├─ Homepage (returning customer, types nwestco.com directly)
   └─ Sees: Primary navigation options and service CTAs

2. NAVIGATION DECISION
   ├─ User already knows Nwestco services their car wash
   └─ Looking for: Contact info or service request method

3. SERVICE REQUEST OPTIONS (Multiple Paths)

   PATH A: Header CTA (Fastest)
   ├─ Clicks [GET SERVICE NOW] in sticky header
   ├─ Modal opens with three options:
   │   ├─ Emergency Service (not needed)
   │   ├─ Request Quote (not needed, already customer)
   │   └─ General Inquiry / Service Request ← Selects this
   └─ Simple form: Name, Phone, Email, Service Needed, Preferred Date

   PATH B: Navigate to Services
   ├─ Hovers "Services" in navigation
   ├─ Clicks "24/7 Service & Maintenance"
   ├─ Reads page content (preventative maintenance programs)
   └─ Clicks [Schedule Service] CTA on page

   PATH C: Navigate to Market Page
   ├─ Hovers "Markets" in navigation
   ├─ Clicks "Car Wash Systems"
   ├─ Sees section: "Ongoing Service & Maintenance"
   └─ Clicks [Request Service] CTA

   PATH D: Contact Directly
   ├─ Clicks "Branches" in navigation
   ├─ Finds their branch (e.g., Portland)
   ├─ Sees phone number: 800-262-3369
   └─ Calls directly (offline path) or uses branch contact form

4. SERVICE REQUEST FORM (if web path)
   ├─ Market: [Pre-filled: Car Wash] (if coming from Car Wash page)
   ├─ Service Type: [Dropdown: Routine Maintenance/Repair/Inspection/Other]
   ├─ Location: [City, State] → System identifies branch
   ├─ Name, Phone, Email
   ├─ Company Name (if applicable)
   ├─ Preferred Service Date: [Calendar picker]
   ├─ Service Description: [Textarea: "Tell us what you need..."]
   └─ Submit

5. CONFIRMATION
   ├─ Confirmation message: "Service request received. Your [Portland] branch will contact you within 4 hours to confirm scheduling."
   ├─ Email confirmation with request details
   └─ Next steps: "We'll confirm your service appointment and send a technician reminder"

6. FOLLOW-UP (Backend)
   ├─ Request routed to appropriate branch service manager
   ├─ Service manager reviews request and checks technician availability
   ├─ Customer contacted within 4 hours to confirm date/time
   ├─ Appointment scheduled in system
   └─ Technician dispatched on scheduled date

SUCCESS METRICS:
- Returning customer recognition (pre-fill if logged in, or smart forms)
- Multiple clear paths to request service (header, services page, market page, branches page)
- Simple form for routine service (not as detailed as new project quote)
- 4-hour response commitment for scheduling confirmation
- Branch auto-routing based on location
```

**Navigation Paths:**
- **Fastest: Any Page → [Get Service Now] → Form → Confirmation** (2 clicks)
- **Services Path: Homepage → Services → Service & Maintenance → Form → Confirmation** (4 clicks)
- **Market Path: Homepage → Markets → Car Wash → Service CTA → Form → Confirmation** (4 clicks)
- **Direct Contact: Homepage → Branches → Portland Branch → Call** (3 clicks + phone call)

**Conversion Optimizations:**
- Multiple paths accommodate different user mental models
- Sticky header CTA always visible (fastest access)
- Smart form pre-fills market if user came from specific market page
- Calendar picker for preferred date (reduces phone tag)
- Confirmation includes branch name (personalizes response)
- Existing customer recognition (if CRM integration available, pre-fill contact info)

---

## Part 4: Conversion Path Strategy

### 4.1 Primary Conversion Goals

**Goal Hierarchy:**

1. **Emergency Service Requests** (Highest Revenue/Urgency)
   - Target: Immediate service dispatch
   - Revenue: $500-$5,000+ per call
   - Timeframe: Immediate need, must respond within hours

2. **Project Quote Requests** (Highest Long-Term Value)
   - Target: New installations, renovations, major upgrades
   - Revenue: $50,000-$500,000+ per project
   - Timeframe: 1-6 month sales cycle

3. **Routine Service Requests** (Recurring Revenue)
   - Target: Maintenance, repairs, inspections
   - Revenue: $500-$5,000 per visit, recurring customer relationships
   - Timeframe: Scheduled service, ongoing contracts

4. **Equipment/Parts Sales** (Transactional)
   - Target: Equipment purchases, parts orders
   - Revenue: $1,000-$50,000 per order
   - Timeframe: Immediate to 1 month

5. **Talent Acquisition** (Strategic Growth)
   - Target: Hire qualified technicians, sales professionals, operations leaders
   - Value: Enable $500M growth target, expand service capacity
   - Timeframe: Ongoing recruitment

---

### 4.2 CTA Strategy & Hierarchy

#### Primary CTAs (Highest Priority - Always Visible)

**Sticky Header CTAs (Desktop & Mobile):**

```
[LOGO]  Navigation...  [GET SERVICE NOW] [800-775-1892]
                       Primary CTA       Secondary CTA
                       (Blue Button)     (Click-to-Call)
```

**[GET SERVICE NOW]** - Primary CTA
- Color: Nwestco Blue (#25617C), White text
- Placement: Sticky header, right side, always visible
- Action: Opens modal with three routing options:
  - Emergency Service (red)
  - Request Quote (blue)
  - General Inquiry (outline)
- Mobile: Collapses to icon (⚡️) with "Service" label

**[800-775-1892]** - Secondary CTA
- Color: Nwestco Green outline button or text-only with phone icon
- Placement: Sticky header, far right
- Action: Click-to-call on mobile, displays number on desktop
- Mobile: Direct tel: link, one tap to call

#### Secondary CTAs (Page-Level, Context-Specific)

**Homepage Hero:**
- Primary: [GET SERVICE NOW] (Blue, large button)
- Secondary: [BROWSE SERVICES] (Outline button)
- Tertiary: "Call 24/7: 800-775-1892" (Text link below buttons)

**Market Landing Pages (Fuel Systems, Car Wash, Environmental):**
- Primary: [REQUEST QUOTE FOR {MARKET}] (Blue button, context-specific)
- Secondary: [SEE PROJECT EXAMPLES] (Outline button, link to Projects filtered by market)
- Tertiary: [24/7 EMERGENCY SERVICE] (Green button if applicable to market)

**Service Pages (Design, Installation, Service, etc.):**
- Primary: [REQUEST {SERVICE} QUOTE] (Blue button, context-specific)
- Secondary: [SCHEDULE CONSULTATION] (Outline button)
- Tertiary: [DOWNLOAD SERVICE GUIDE] (Text link, lead capture)

**Projects/Case Studies Page:**
- Primary: [START YOUR PROJECT] (Blue button)
- Secondary: [CONTACT PROJECT SPECIALIST] (Outline button)
- Per Case Study: [REQUEST SIMILAR QUOTE] (Text link)

**Careers Page:**
- Primary: [APPLY NOW] (Blue button, per job listing)
- Secondary: [SUBMIT GENERAL RESUME] (Outline button if no perfect match)
- Tertiary: [TALK TO RECRUITER] (Text link)

**Branches Page:**
- Primary: [CONTACT THIS BRANCH] (Blue button, per branch)
- Secondary: [REQUEST SERVICE] (Green button, goes to service form with branch pre-selected)
- Tertiary: Click-to-call phone numbers (tel: links)

**Footer (Global):**
- Primary: "24/7 Emergency: 800-775-1892" (Large, bold, click-to-call)
- Secondary: [REQUEST SERVICE] (Blue button)
- Tertiary: Email link (info@nwestco.com)

---

### 4.3 CTA Placement Matrix

| Page Type | Hero CTA | Mid-Page CTA | Exit CTA | Sticky Header |
|-----------|----------|--------------|----------|---------------|
| **Homepage** | GET SERVICE NOW<br/>BROWSE SERVICES | Per Section:<br/>- Fuel Systems → Request Quote<br/>- Car Wash → Request Quote<br/>- Environmental → Schedule Assessment | "Ready to Get Started?"<br/>GET SERVICE NOW | GET SERVICE NOW<br/>800-775-1892 |
| **Market Landing** | REQUEST {MARKET} QUOTE<br/>SEE PROJECTS | Per Service:<br/>- Installation → Request Install Quote<br/>- Service → Schedule Service | "Start Your Project"<br/>REQUEST QUOTE | GET SERVICE NOW<br/>800-775-1892 |
| **Service Page** | REQUEST {SERVICE}<br/>SCHEDULE CONSULT | Per Section:<br/>- Process → Get Started<br/>- Case Study → Similar Quote | "Ready for {Service}?"<br/>GET STARTED | GET SERVICE NOW<br/>800-775-1892 |
| **Projects/Case Studies** | START YOUR PROJECT<br/>CONTACT SPECIALIST | Per Case Study:<br/>- Request Similar Quote<br/>- Download Case Study | "Let's Build Your Success Story"<br/>START PROJECT | GET SERVICE NOW<br/>800-775-1892 |
| **About/Why Nwestco** | EXPERIENCE DIFFERENCE<br/>REQUEST CONSULT | Per Differentiator:<br/>- Coverage → See Branches<br/>- Expertise → See Training | "Partner With Us"<br/>GET IN TOUCH | GET SERVICE NOW<br/>800-775-1892 |
| **Careers** | (No hero CTA) | Per Job Listing:<br/>APPLY NOW | "Don't See Right Fit?"<br/>SUBMIT RESUME | GET SERVICE NOW<br/>800-775-1892 |
| **Branches** | (No hero CTA) | Per Branch:<br/>- CONTACT BRANCH<br/>- Get Directions | "Can't Find Your Location?"<br/>CONTACT US | GET SERVICE NOW<br/>800-775-1892 |
| **Resources** | DOWNLOAD RESOURCE<br/>BROWSE LIBRARY | Per Resource:<br/>- Download PDF<br/>- Read Article | "Have Questions?"<br/>CONTACT EXPERT | GET SERVICE NOW<br/>800-775-1892 |

---

### 4.4 Conversion Funnel Optimization

#### Top of Funnel (Awareness/Discovery)

**Goal:** Help users understand what Nwestco does and who we serve

**Pages:** Homepage, Market Landing Pages, About, Why Nwestco

**CTA Strategy:**
- Soft CTAs: "Browse Services," "See Projects," "Learn About Us"
- Educational focus: Case studies, testimonials, brand partnerships
- No aggressive sales pressure
- Clear navigation to help users self-educate

**Conversion Barriers to Remove:**
- Confusing service structure (solved with 3 pillars)
- Generic messaging (solved with pain-point focus)
- Lack of social proof (solved with testimonials, case studies, client logos)
- Unclear differentiation (solved with "Why Nwestco" and 3 Uniques)

#### Middle of Funnel (Consideration/Evaluation)

**Goal:** Convince users Nwestco is the right choice for their needs

**Pages:** Service Pages, Projects, Why Nwestco, Branches, Brands

**CTA Strategy:**
- Medium-commitment CTAs: "Request Quote," "Schedule Consultation," "Download Guide"
- Proof-driven: Case studies with results, testimonials with attribution
- Comparative: "Why Nwestco" differentiators vs. competitors
- Geographic validation: Branch locations, coverage area

**Conversion Barriers to Remove:**
- Uncertainty about capabilities (solved with detailed service pages, lifecycle wheel)
- Lack of geographic coverage (solved with branch map, "9 branches across 6 states")
- Price concerns (solved with "affordable" positioning, but no specific pricing - requires quote)
- Trust deficit (solved with manufacturer partnerships, certifications, client logos)

#### Bottom of Funnel (Decision/Conversion)

**Goal:** Make it easy to take action (request service, get quote, apply for job)

**Pages:** Contact, Quote Forms, Application Forms

**CTA Strategy:**
- High-commitment CTAs: "Submit Request," "Get Quote Now," "Apply Now"
- Friction reduction: Multi-step forms, auto-routing, clear expectations
- Urgency: "We'll respond within 4 hours," "24/7 emergency service"
- Trust signals: Branch assignment, technician credentials, response time commitments

**Conversion Barriers to Remove:**
- Long, intimidating forms (solved with multi-step, progressive disclosure)
- Unclear response time (solved with "within 4 hours" commitment)
- Manual routing confusion (solved with auto-branch assignment based on location)
- Lack of alternative contact methods (solved with phone CTA always visible)

---

### 4.5 Mobile Conversion Strategy

**Mobile-Specific Considerations:**

**Sticky Header (Mobile Optimized):**
```
[☰] [LOGO]           [⚡️ Service] [📞]
    Hamburger         Primary CTA  Call
```

- Hamburger menu (left): Full navigation
- Primary CTA (right side, blue): "Service" button opens modal
- Call button (far right, green): Click-to-call 800-775-1892

**Mobile Form Optimization:**
- Large touch targets (minimum 44×44px buttons)
- Minimize text input fields (use dropdowns where possible)
- Auto-format phone numbers, detect location
- Single-column layout, clear progress indicators
- "Save and resume" via email capture (for longer forms)
- Click-to-call always visible as alternative to form

**Mobile-First CTA Hierarchy:**
1. **Call Button** (fastest, preferred on mobile)
2. **Service Modal** (form-based request)
3. **Email Link** (low-commitment alternative)

**Mobile Performance:**
- Forms load fast (<2 seconds)
- No page refreshes on form validation errors
- Clear error messages inline with fields
- Success confirmation on same page (no redirect delay)

---

## Part 5: Page Template Inventory

### 5.1 Template Architecture

**Total Templates Needed:** 8 distinct page templates

| Template | Use Cases | Quantity | Priority |
|----------|-----------|----------|----------|
| **Homepage** | Homepage only | 1 page | Critical |
| **Market Landing** | Fuel Systems, Car Wash, Environmental | 3 pages | Critical |
| **Service Page** | 7 lifecycle services | 7 pages | High |
| **Standard Content** | About, Why Nwestco, Resources | 3 pages | High |
| **Projects/Portfolio** | Projects gallery, Case Studies | 2-8 pages | High |
| **Branch Location** | 9 branch detail pages | 8 pages | Medium |
| **Careers** | Careers landing + job listings | 1-2 pages | High |
| **Contact/Forms** | Contact page, form confirmations | 2 pages | Critical |

**Total Estimated Pages:** 25-35 pages (compared to current 15+ fragmented pages)

---

### 5.2 Template Specifications

#### Template 1: Homepage

**Purpose:** Primary entry point, introduce company, guide users to relevant section

**Sections:**

1. **Hero Section**
   - Full-width background image (real photography: technicians, trucks, or facilities)
   - Dark overlay for text legibility
   - Headline: "Maximize Your Uptime - Fuel Systems & Car Wash Solutions Across the Western US"
   - Subheadline: "Complete lifecycle solutions delivered by expert technicians from 9 branches"
   - Primary CTA: [GET SERVICE NOW] (blue)
   - Secondary CTA: [BROWSE SERVICES] (outline)
   - Tertiary: "24/7 Emergency: 800-775-1892" (text link)

2. **Problem/Pain Points Section**
   - Headline: "The Challenges You Face"
   - Three-column layout:
     - Column 1: Downtime Costs (icon: clock with $$)
       - "Every hour your pumps are down costs revenue"
       - "Equipment failures happen at the worst times"
     - Column 2: Compliance Stress (icon: checklist)
       - "EPA and state regulations are complex and constantly changing"
       - "Fines for violations can be steep"
     - Column 3: Vendor Juggling (icon: multiple vendors)
       - "Managing 5 different contractors is exhausting"
       - "Finger-pointing between vendors wastes time"
   - Background: Light gray section for visual break

3. **Markets We Serve Section**
   - Headline: "One Partner for All Your Needs"
   - Three-column card layout:
     - Card 1: Fuel Systems (icon: fuel pump)
       - Image: Fuel dispenser/station
       - Short description: "Complete fuel system solutions for retail, commercial, aviation, and industrial applications"
       - CTA: [EXPLORE FUEL SYSTEMS →]
     - Card 2: Car Wash Systems (icon: car wash)
       - Image: Car wash tunnel/equipment
       - Short description: "Turn-key car wash solutions with equipment, chemicals, and expert service"
       - CTA: [EXPLORE CAR WASH →]
     - Card 3: Environmental Solutions (icon: compliance badge)
       - Image: Testing equipment or compliance documentation
       - Short description: "Tank testing, leak detection, and compliance services to protect your business"
       - CTA: [EXPLORE ENVIRONMENTAL →]
   - Background: White

4. **Lifecycle Service Wheel Section**
   - Headline: "Comprehensive Services at Every Stage"
   - Visual: Circular diagram showing lifecycle services around a center point
   - Center: "One-Stop Shop"
   - Outer ring: Design → Install → Service → Upgrade → Comply → Train (cycle)
   - Each service is clickable icon linking to service page
   - Subheadline: "From design through 24/7 maintenance, we handle every stage of your project lifecycle"
   - Background: Light blue tint (Nwestco blue at 5% opacity)

5. **Why Nwestco / 3 Uniques Section**
   - Headline: "Why Choose Nwestco?"
   - Three-column layout:
     - Column 1: Cradle-to-Grave Solutions (icon: lifecycle diagram)
       - "Complete lifecycle capabilities from design through maintenance"
       - "One partner eliminates vendor coordination headaches"
       - "Turn-key projects delivered on time and on budget"
     - Column 2: Western US Coverage (icon: map pin)
       - "9 branches across 6 states for rapid response"
       - "Average emergency response: under 4 hours"
       - "Local presence with regional scale"
     - Column 3: Technical Expertise (icon: certification badge)
       - "Factory-certified technicians on all major brands"
       - "Portland and Spokane training centers"
       - "Technicians average 15+ years industry experience"
   - CTA: [LEARN MORE ABOUT OUR ADVANTAGES →] (link to Why Nwestco page)
   - Background: White

6. **Service Commitment Section**
   - Headline: "Our Promise: Maximize Your Uptime"
   - Two-column layout:
     - Left: Large statistic "48 HOURS"
       - "90%+ of service calls completed within 48 hours"
     - Right: Supporting points
       - "24/7 emergency hotline with rapid dispatch"
       - "Next-day parts delivery across Western US"
       - "Preventative maintenance programs reduce downtime"
   - Background: Nwestco Blue with white text

7. **Geographic Coverage Section**
   - Headline: "9 Branches Across 6 Western States"
   - Interactive map showing branch locations (or static map with pins)
   - States covered: Washington, Oregon, Idaho, Montana, California, Arkansas
   - CTA: [FIND YOUR NEAREST BRANCH →]
   - Background: Light gray section

8. **Brand Partners Section**
   - Headline: "Authorized Partners of Premium Brands"
   - Logo grid: 12-16 top brand logos (Gilbarco, Veeder-Root, OPW, Ryko, Belanger, Turtle Wax, etc.)
   - Subheadline: "Factory-certified technicians on 40+ manufacturer brands"
   - CTA: [SEE ALL BRAND PARTNERSHIPS →]
   - Background: White

9. **Customer Success Stories Section**
   - Headline: "What Our Customers Say"
   - Three-column testimonial cards:
     - Card 1: Fuel station operator
       - Photo, name, company, location
       - Quote: "Nwestco upgraded our 12 locations in 90 days with zero downtime"
       - Industry: Retail Fuel
     - Card 2: Car wash owner
       - Photo, name, company, location
       - Quote: "Their 24/7 service keeps my wash running and profitable"
       - Industry: Car Wash
     - Card 3: Fleet manager
       - Photo, name, company, location
       - Quote: "One-stop shop eliminated our vendor coordination headaches"
       - Industry: Commercial/Industrial
   - CTA: [READ MORE SUCCESS STORIES →] (link to Projects page)
   - Background: Light gray section

10. **Final CTA Section**
    - Headline: "Ready to Maximize Your Uptime?"
    - Subheadline: "Get a quote, request service, or speak with a specialist today"
    - Three CTA options:
      - [GET SERVICE NOW] (blue button)
      - [REQUEST A QUOTE] (green button)
      - "Call 24/7: 800-775-1892" (large, click-to-call)
    - Background: Dark blue with subtle texture/pattern

**Template Components:**
- Sticky header (always visible)
- Hero section with full-width image and overlay
- Alternating white/gray background sections for visual hierarchy
- Consistent CTA buttons (blue primary, green secondary, outline tertiary)
- Icon system for services and features
- Responsive grid layouts (3-column desktop, 1-column mobile)
- Footer (global)

---

#### Template 2: Market Landing Page

**Purpose:** Deep dive into specific market (Fuel Systems, Car Wash, Environmental)

**Use Cases:**
- Fuel Systems landing page (/markets/fuel-systems/)
- Car Wash Systems landing page (/markets/car-wash/)
- Environmental Solutions landing page (/markets/environmental/)

**Sections:**

1. **Hero Section**
   - Full-width background image specific to market
   - Market-specific headline:
     - Fuel: "Complete Fuel System Solutions for Retail, Commercial, and Industrial Applications"
     - Car Wash: "Keep Your Car Wash Running and Profitable"
     - Environmental: "Stay Compliant and Protect Your Business"
   - Market-specific subheadline
   - Primary CTA: [REQUEST {MARKET} QUOTE]
   - Secondary CTA: [SEE PROJECT EXAMPLES]

2. **Problem/Pain Points Section**
   - Headline: "The Challenges {Market} Operators Face"
   - Three-column pain point cards specific to market:
     - Fuel Systems:
       - Downtime Costs: "One pump down 15 days = $7,800-$29,500 lost revenue"
       - Compliance Stress: "EPA and state regulations with steep fines"
       - Vendor Juggling: "Managing electrical, tanks, pumps, compliance separately"
     - Car Wash:
       - Equipment Failure: "Downtime sends customers to competitors"
       - Chemical Costs: "Wrong chemistry = poor results and unhappy customers"
       - Maintenance Burden: "Multiple suppliers for equipment, chemicals, parts"
     - Environmental:
       - Regulatory Complexity: "EPA, state, and local requirements are confusing"
       - Liability Risk: "Environmental violations carry heavy fines"
       - Testing Burden: "Tank testing and leak detection requirements"
   - Background: Light gray

3. **Solution Overview Section**
   - Headline: "How Nwestco Solves These Challenges"
   - Two-column layout:
     - Left: Descriptive copy
       - Market-specific solution narrative
       - One-stop shop positioning
       - Lifecycle approach
     - Right: Solution benefits (bulleted list with icons)
       - 3-5 key benefits specific to market
   - CTA: [SEE HOW WE DO IT →] (links to services or process section)
   - Background: White

4. **Market Segments / Subsections**
   - Headline: "{Market} Applications We Serve"
   - Four-column icon cards:
     - Fuel Systems:
       - Retail Fuel & C-Stores
       - Commercial & Fleet
       - Aviation Fueling
       - Industrial Applications
     - Car Wash:
       - Tunnel Washes
       - In-Bay Automatics
       - Self-Serve Washes
       - (4th card: All Wash Types)
     - Environmental:
       - Tank Testing
       - Leak Detection
       - Remediation
       - Compliance Consulting
   - Each card links to detail page or scrolls to section on same page
   - Background: Light blue tint

5. **Services Available Section**
   - Headline: "Complete Lifecycle Services for {Market}"
   - Grid layout showing lifecycle services:
     - Design & Engineering (icon, short description, link)
     - Installation & Construction
     - 24/7 Service & Maintenance
     - Remodels & Upgrades
     - Equipment Sales & Parts
     - Testing & Compliance
     - Training & Certification
   - Each service card clickable to service detail page
   - Background: White

6. **Equipment & Brands Section**
   - Headline: "Premium Equipment from Trusted Brands"
   - Market-specific brand logos (12-16 logos)
   - Fuel Systems: Gilbarco, Veeder-Root, OPW, Franklin, Xerxes, Husky, etc.
   - Car Wash: Ryko, Belanger, Rotary, J.E. Adams, Turtle Wax, Blue Coral, etc.
   - Environmental: Omntec, Veeder-Root, OPW leak detection, etc.
   - Brief copy: "We're factory-certified on all major brands with full warranty support"
   - CTA: [SEE ALL BRANDS →]
   - Background: Light gray

7. **Process / How We Work Section**
   - Headline: "Our Process for {Market} Projects"
   - Step-by-step visualization (5-7 steps)
   - Example for Fuel Systems:
     - Step 1: Initial Consultation (icon: handshake)
     - Step 2: Site Assessment & Design (icon: blueprint)
     - Step 3: Permitting & Approvals (icon: document)
     - Step 4: Installation & Testing (icon: tools)
     - Step 5: Training & Handoff (icon: training)
     - Step 6: Ongoing Service & Support (icon: 24/7)
   - Timeline indication (e.g., "Typical project: 8-12 weeks")
   - Background: White

8. **Case Studies Section**
   - Headline: "{Market} Projects We've Completed"
   - Three-column case study cards:
     - Each card: Project photo, customer name/location, brief description, results
     - Example: "12-Station Fuel System Upgrade - Zero Downtime"
     - CTA per card: [READ FULL CASE STUDY →]
   - Section CTA: [SEE ALL {MARKET} PROJECTS →]
   - Background: Light gray

9. **Testimonials Section**
   - Headline: "What {Market} Customers Say"
   - Two-column testimonial layout (2-3 testimonials)
   - Each testimonial: Quote, photo, name, company, location
   - Market-specific testimonials (fuel operators, car wash owners, etc.)
   - Background: White

10. **Why Nwestco for {Market} Section**
    - Headline: "Why {Market} Operators Choose Nwestco"
    - Three-column benefits:
      - Column 1: One-Stop Shop (no vendor coordination)
      - Column 2: Rapid Response (9 branches, fast service)
      - Column 3: Expert Technicians (factory-certified, experienced)
    - Market-specific benefit examples
    - Background: Nwestco Blue with white text

11. **Geographic Coverage Section**
    - Headline: "Serving {Market} Across 6 Western States"
    - Map showing coverage area
    - Branch locations with services available
    - CTA: [FIND YOUR NEAREST BRANCH →]
    - Background: Light gray

12. **FAQ Section**
    - Headline: "Common Questions About {Market} Services"
    - Accordion-style FAQ (5-10 questions)
    - Market-specific questions:
      - Fuel: "How long does a fuel system installation take?"
      - Car Wash: "What brands of car wash equipment do you service?"
      - Environmental: "How often do I need tank testing?"
    - Background: White

13. **Final CTA Section**
    - Headline: "Ready to Get Started?"
    - Subheadline: "Request a quote or speak with a {market} specialist"
    - Primary CTA: [REQUEST {MARKET} QUOTE]
    - Secondary: "Call 24/7: 800-775-1892"
    - Background: Dark blue

**Template Variations:**
- Fuel Systems: Emphasize breadth (retail, commercial, aviation, industrial)
- Car Wash: Emphasize turn-key and next-day parts delivery
- Environmental: Emphasize compliance and liability protection

---

#### Template 3: Service Page

**Purpose:** Detail specific lifecycle service offering

**Use Cases:**
- Design & Engineering (/services/design-engineering/)
- Installation & Construction (/services/installation/)
- 24/7 Service & Maintenance (/services/service-maintenance/)
- Remodels & Upgrades (/services/remodels-upgrades/)
- Equipment Sales & Parts (/services/equipment-parts/)
- Testing & Compliance (/services/testing-compliance/)
- Training & Certification (/services/training/)

**Sections:**

1. **Hero Section**
   - Service-specific background image
   - Headline: "{Service Name}: {Benefit Statement}"
   - Examples:
     - Design & Engineering: "Expert Design and Permitting for Faster Project Approvals"
     - 24/7 Service & Maintenance: "Maximize Uptime with Expert Service When You Need It"
     - Training: "Best-in-Class Technical Training Programs"
   - Subheadline: Brief service description
   - Primary CTA: [REQUEST {SERVICE}] or [SCHEDULE {SERVICE}]

2. **What We Do Section**
   - Headline: "What's Included in {Service}"
   - Two-column layout:
     - Left: Narrative description of service
     - Right: Bulleted list of specific offerings (icons)
   - Service-specific details
   - Background: White

3. **Why It Matters Section**
   - Headline: "Why {Service} Is Critical"
   - Three-column pain points this service solves
   - Customer challenges addressed
   - Outcomes achieved
   - Background: Light gray

4. **How We're Different Section**
   - Headline: "What Makes Nwestco's {Service} Best-in-Class"
   - Three-column differentiators
   - Examples:
     - Design: "25+ years regulatory expertise means faster permit approvals"
     - Service: "9 branches across Western US means under 4-hour response"
     - Training: "Portland and Spokane training centers with hands-on equipment"
   - Background: White

5. **Process Section**
   - Headline: "Our {Service} Process"
   - Step-by-step workflow (4-6 steps)
   - Timeline indication
   - What customer can expect at each stage
   - Background: Light blue tint

6. **Markets Served Section**
   - Headline: "{Service} for All Markets"
   - Three-column cards:
     - Fuel Systems (how service applies)
     - Car Wash (how service applies)
     - Environmental/Industrial (how service applies)
   - Shows service is cross-cutting capability
   - Background: White

7. **Equipment/Brands Section** (if applicable)
   - Headline: "Equipment and Brands for {Service}"
   - Relevant brand logos
   - Manufacturer certifications
   - Warranty support
   - Background: Light gray

8. **Case Studies Section**
   - Headline: "{Service} Success Stories"
   - Two-column case study cards (2-3 examples)
   - Real projects where this service was delivered
   - Results achieved
   - Background: White

9. **Testimonials Section**
   - Headline: "What Customers Say About Our {Service}"
   - 2-3 customer quotes specific to this service
   - Photos, names, companies, locations
   - Background: Light gray

10. **Related Services Section**
    - Headline: "Complete Your Project with Related Services"
    - Three-card grid showing complementary services
    - Example for Installation page:
      - Related: Design & Engineering
      - Related: Service & Maintenance
      - Related: Training
    - Links to other service pages
    - Background: White

11. **FAQ Section**
    - Headline: "Common Questions About {Service}"
    - Accordion FAQ (5-8 questions)
    - Service-specific questions
    - Background: Light gray

12. **Final CTA Section**
    - Headline: "Ready for {Service}?"
    - Primary CTA: [REQUEST {SERVICE} QUOTE]
    - Secondary: [SCHEDULE CONSULTATION]
    - Phone: "Call 24/7: 800-775-1892"
    - Background: Dark blue

**Template Variations:**
- Service & Maintenance page: Emphasize 24/7 emergency hotline
- Training page: Include course catalog and registration system
- Equipment Sales page: Link to brand partnerships, parts catalog

---

#### Template 4: Standard Content Page

**Purpose:** Informational pages with standard layout

**Use Cases:**
- About Us (/about/)
- Why Nwestco (/why-nwestco/)
- Resources (/resources/)

**Sections:**

1. **Hero Section**
   - Page-specific background image
   - Headline: Page title
   - Subheadline: Brief page description
   - No CTA (informational page)

2. **Main Content Area**
   - Standard content layout
   - Left column (70%): Primary content
   - Right sidebar (30%): Related links, CTAs, quick facts
   - Sections with H2 headings
   - Subsections with H3 headings
   - Mixed media: text, images, video embeds

3. **Content-Specific Sections** (varies by page)

   **About Us:**
   - Company Overview (mission, values, scale)
   - Company History (growth timeline, acquisitions)
   - Leadership Team (CEO video, bios, photos)
   - Company Culture
   - Industry Recognition
   - Community Involvement

   **Why Nwestco:**
   - The 3 Uniques (detailed breakdown)
   - Service Commitment (48-hour promise)
   - Brand Partnerships (why it matters)
   - Geographic Coverage (map, branch details)
   - Technical Expertise (training programs, certifications)
   - Customer Success Metrics

   **Resources:**
   - Resource categories (guides, articles, FAQs)
   - Search functionality
   - Filterable resource library
   - Download buttons for PDFs
   - Newsletter signup

4. **Related Content Section**
   - Headline: "Related Content"
   - Three-card grid linking to related pages
   - Background: Light gray

5. **Final CTA Section**
   - Page-appropriate CTA
   - About: "Join Our Team" or "Partner With Us"
   - Why Nwestco: "Experience the Difference"
   - Resources: "Can't Find What You Need? Contact Us"

---

#### Template 5: Projects/Portfolio Page

**Purpose:** Showcase completed projects and case studies

**Use Cases:**
- Projects Gallery (/projects/)
- Individual Case Studies (/projects/{project-name}/)

**Projects Gallery Sections:**

1. **Hero Section**
   - Headline: "Completed Projects Across the Western US"
   - Subheadline: "See the results we've delivered for customers like you"
   - Filter options (dropdowns):
     - By Market: All / Fuel Systems / Car Wash / Environmental
     - By Service: All / Installation / Renovation / Service / Compliance
     - By State: All / WA / OR / ID / MT / CA / AR

2. **Project Grid**
   - Grid layout: 3 columns desktop, 2 tablet, 1 mobile
   - Each project card:
     - Project photo
     - Project title
     - Market tag (Fuel / Car Wash / Industrial)
     - Location (City, State)
     - Brief description (1-2 sentences)
     - CTA: [READ CASE STUDY →]
   - Pagination or infinite scroll

3. **Featured Case Studies**
   - Headline: "Featured Success Stories"
   - 2-3 highlighted case studies with more detail
   - Larger cards with customer testimonials

4. **CTA Section**
   - Headline: "Let's Build Your Success Story"
   - Primary CTA: [START YOUR PROJECT]

**Case Study Detail Sections:**

1. **Hero Section**
   - Project title
   - Customer name, location
   - Project photo (large, hero-style)
   - Market and service tags

2. **Project Overview**
   - Quick facts (sidebar):
     - Customer: Company name
     - Location: City, State
     - Market: Fuel Systems / Car Wash / etc.
     - Services: Installation, Service, etc.
     - Timeline: Project duration
     - Equipment: Major brands used
   - Main content:
     - Customer background
     - Challenge description

3. **Solution Section**
   - Headline: "How We Solved It"
   - Solution approach
   - Services provided
   - Process followed
   - Equipment installed

4. **Results Section**
   - Headline: "Results Achieved"
   - Quantified outcomes:
     - Uptime improvement
     - Cost savings
     - Compliance achieved
     - Revenue impact
   - Customer testimonial (quote, photo)

5. **Photo Gallery**
   - Before/after photos
   - Installation process photos
   - Completed project photos

6. **Related Projects**
   - Headline: "Similar Projects"
   - Three-card grid of related case studies
   - CTA: [REQUEST SIMILAR QUOTE]

---

#### Template 6: Branch Location Page

**Purpose:** Detail page for each branch location

**Use Cases:**
- 9 branch detail pages (Kalispell, Spokane, Billings, Boise, Portland, Springdale, Fresno, Bakersfield, San Jose)

**Sections:**

1. **Hero Section**
   - Branch name: "{City}, {State}"
   - Branch photo (exterior, trucks, or team)
   - Quick actions:
     - [CONTACT THIS BRANCH]
     - [GET DIRECTIONS]
     - Click-to-call phone number

2. **Contact Information**
   - Address (full street address)
   - Phone numbers:
     - Toll-free: 800-XXX-XXXX
     - Local: (XXX) XXX-XXXX
     - Fax: (XXX) XXX-XXXX
   - Email: {branch}@nwestco.com
   - Hours of Operation:
     - Regular: Monday-Friday 8am-5pm
     - Emergency: 24/7 service available

3. **Services Available**
   - Headline: "Services Provided at {Branch} Branch"
   - List of services available at this location
   - Training center callout (if applicable: Portland, Spokane)

4. **Coverage Area**
   - Headline: "Areas We Serve from {Branch}"
   - Map showing coverage radius
   - List of cities/regions served

5. **Branch Team** (optional)
   - Branch manager name and photo
   - "Meet our team" group photo
   - Team size: "15 technicians, 3 sales specialists" (example)

6. **Map & Directions**
   - Embedded Google Map
   - Link to Google Maps directions

7. **CTA Section**
   - Primary: [REQUEST SERVICE FROM {BRANCH}]
   - Secondary: Click-to-call

---

#### Template 7: Careers Page

**Purpose:** Recruit talent, showcase culture, list open positions

**Use Cases:**
- Careers landing page (/careers/)
- Job detail pages (/careers/{job-title}-{location}/)

**Careers Landing Sections:**

1. **Hero Section**
   - Headline: "Build Your Career With a Growing Industry Leader"
   - Subheadline: "Join Nwestco on our journey from $120M to $500M"
   - Background: Team photo or action shot of technicians
   - CTA: [VIEW OPEN POSITIONS]

2. **Why Work at Nwestco**
   - Headline: "Why Join Nwestco?"
   - Six-benefit grid:
     - Career Growth (internal promotion examples)
     - Best Training (Portland/Spokane centers)
     - Competitive Pay (salary + bonuses)
     - Comprehensive Benefits (health, 401k, PTO)
     - People-First Culture (work hard, be nice, have fun)
     - Work-Life Balance

3. **Employee Testimonials**
   - Headline: "Hear From Our Team"
   - Three-column testimonial cards
   - Employees from different roles/locations
   - Photos, names, job titles, tenure

4. **Benefits Overview**
   - Headline: "What We Offer"
   - Two-column detailed benefits list
   - Health, dental, vision, 401k match, PTO, training, company vehicle, tools, etc.

5. **Life at Nwestco**
   - Headline: "Life at Nwestco"
   - Photo gallery (6-9 photos)
   - Teams, projects, training, company events
   - Video embed: "Day in the Life" (if available)

6. **Open Positions**
   - Headline: "Open Positions"
   - Filter options:
     - By Location: All / {9 branch locations}
     - By Department: All / Technicians / Sales / Operations / Admin
     - By Job Type: All / Full-Time / Part-Time / Apprentice
   - Job listing cards:
     - Job title
     - Location
     - Department
     - Brief description
     - CTA: [VIEW JOB] or [APPLY NOW]
   - "Don't see the right fit?" CTA: [SUBMIT GENERAL RESUME]

7. **Application Process**
   - Headline: "Our Application Process"
   - 5-step process visualization:
     - Apply → Phone Screen → Interview → Assessment → Offer
   - Timeline: "Most candidates move through process in 2-3 weeks"

8. **CTA Section**
   - Headline: "Ready to Join Our Team?"
   - Primary: [VIEW OPEN POSITIONS]
   - Secondary: [SUBMIT GENERAL RESUME]
   - Tertiary: "Questions? Contact recruiting@nwestco.com"

**Job Detail Page Sections:**

1. **Job Header**
   - Job title
   - Location, Department, Job Type
   - CTA: [APPLY NOW] (always visible, sticky)

2. **Job Overview**
   - Brief description
   - Key responsibilities (bulleted)
   - Qualifications (bulleted)
   - Preferred qualifications (bulleted)

3. **What We Offer**
   - Salary range (if disclosed)
   - Benefits specific to role
   - Training opportunities
   - Career growth path

4. **About This Branch**
   - Branch location details
   - Team size, services provided
   - Link to branch page

5. **Application**
   - [APPLY NOW] button
   - Links to application form or external ATS

---

#### Template 8: Contact/Forms Page

**Purpose:** Contact page with multiple routing options

**Use Cases:**
- Contact page (/contact/)
- Form confirmation pages

**Contact Page Sections:**

1. **Hero Section**
   - Headline: "How Can We Help?"
   - Subheadline: "Choose the option that best fits your needs"
   - No background image (clean, functional)

2. **Three-Path Routing**
   - Large button options (three columns):
     - [REQUEST EMERGENCY SERVICE] (red button)
       - "For immediate 24/7 service needs"
     - [GET A QUOTE] (blue button)
       - "For new projects, installations, renovations"
     - [GENERAL INQUIRY] (outline button)
       - "Questions, training, general information"

3. **Conditional Form Display**
   - Based on button clicked, appropriate form displays
   - Emergency form (minimal fields, urgent tone)
   - Quote request form (multi-step, detailed)
   - General inquiry form (simple, straightforward)

4. **Contact Information**
   - Headline: "Other Ways to Reach Us"
   - Main hotline: 800-775-1892 (24/7 Service Available)
   - Email: info@nwestco.com
   - Hours: Monday-Friday 8am-5pm (Emergency 24/7)
   - CTA: [VIEW ALL BRANCH LOCATIONS]

5. **Map (optional)**
   - Coverage area map with 9 branch locations
   - Links to branch detail pages

**Confirmation Page Sections:**

1. **Confirmation Message**
   - Headline: "Request Received - Thank You!"
   - Confirmation details:
     - Request type
     - Request ID number
     - Assigned branch (if applicable)
     - Expected response time ("within 4 hours")
   - Email confirmation sent message

2. **What Happens Next**
   - Step-by-step what customer can expect:
     - "We'll review your request"
     - "A specialist will contact you"
     - "We'll schedule your service/consultation"
   - Timeline expectations

3. **Recommended Next Steps**
   - Three-column suggestions:
     - [VIEW SIMILAR PROJECTS]
     - [DOWNLOAD RESOURCE GUIDE]
     - [READ CUSTOMER SUCCESS STORIES]

4. **Alternative Contact**
   - "Need immediate assistance?"
   - Emergency hotline: 800-775-1892
   - Email: info@nwestco.com

---

## Part 6: Summary & Recommendations

### 6.1 Final 3-Pillar Structure

**Markets We Serve:**

1. **Fuel Systems**
   - Retail Fuel & C-Stores (includes c-store automotive bays)
   - Commercial & Fleet (bulk plants, fuel terminals, marinas, fleet services)
   - Aviation Fueling (airports, FBOs, private runways)
   - Industrial Applications (hospitals, data centers, generators, rail-to-storage)

2. **Car Wash Systems**
   - Tunnel Washes
   - In-Bay Automatics
   - Self-Serve Washes
   - (All wash types supported)

3. **Environmental Solutions**
   - Tank Testing & Compliance
   - Leak Detection Systems
   - Remediation & Cleanup
   - Regulatory Consulting

**Services We Provide (Lifecycle):**

1. Design & Engineering
2. Installation & Construction
3. 24/7 Service & Maintenance
4. Remodels & Upgrades
5. Equipment Sales & Parts
6. Testing & Compliance
7. Training & Certification

---

### 6.2 Primary Navigation Menu Items

**Desktop Header Navigation:**

```
[LOGO]  Markets ▼  |  Services ▼  |  Why Nwestco  |  Projects  |  About  |  Careers  |  [GET SERVICE NOW] [800-775-1892]
```

**Markets Dropdown (9 items):**
- Fuel Systems (with 4 subsections)
- Car Wash Systems (with 3 subsections)
- Environmental Solutions (with 3 subsections)

**Services Dropdown (7 items):**
- Design & Engineering
- Installation & Construction
- 24/7 Service & Maintenance
- Remodels & Upgrades
- Equipment Sales & Parts
- Testing & Compliance
- Training & Certification

**Top-Level Pages (5 items):**
- Why Nwestco
- Projects
- About
- Careers
- (Contact - via CTA buttons)

**Total Primary Nav Items:** 21 clickable items (9 market pages + 7 service pages + 5 top-level pages)

**Compared to Current:** 7 competing service verticals → 3 clear market pillars + 7 lifecycle services = Better organization, clearer hierarchy

---

### 6.3 Estimated Total Page Count for New Site

**Critical Pages (Must Have):** 15 pages
- Homepage (1)
- Market Landing Pages (3): Fuel Systems, Car Wash, Environmental
- Service Pages (7): Design, Installation, Service, Remodels, Equipment, Testing, Training
- About Us (1)
- Contact (1)
- Careers (1)
- Projects/Portfolio Gallery (1)

**High Priority Pages:** 10 pages
- Why Nwestco (1)
- Branches Landing (1)
- Branch Detail Pages (8): One per branch location

**Medium Priority Pages:** 5-10 pages
- Case Study Detail Pages (5-10): Individual project success stories
- Resources/Library Landing (1)
- FAQ Pages (0-3): General, Fuel Systems, Car Wash-specific FAQs

**Supporting Pages:** 3 pages
- Privacy Policy (1)
- Terms of Service (1)
- Accessibility Statement (1)

**Total Estimated Pages: 33-43 pages**

**Breakdown:**
- 15 critical pages (must have for launch)
- 10 high priority pages (launch or phase 2)
- 5-10 medium priority pages (phase 2)
- 3 supporting pages (legal)

**Compared to Current Site:**
- Current: 15+ pages with unclear relationships
- Recommended: 33-43 pages with clear hierarchy and cross-linking
- Increase in pages is intentional to separate concerns and improve SEO/UX

---

## Approval & Next Steps

### Stakeholder Review Required

This information architecture must be approved before proceeding to wireframe development (UX-003).

**Review Questions for Stakeholders:**

1. **Service Consolidation:**
   - Approve 7 → 3 pillar consolidation strategy?
   - Confirm Automotive should merge into Fuel Systems?
   - Confirm Electrical should be repositioned as cross-cutting capability?

2. **Market Pillars:**
   - Approve Fuel Systems, Car Wash, Environmental as three pillars?
   - Any missing market segments?
   - Environmental Solutions as standalone pillar vs. subsection of services?

3. **Navigation:**
   - Approve Markets vs. Services dual-navigation approach?
   - Comfortable with "Services We Provide" as lifecycle services?
   - Any required pages missing from sitemap?

4. **User Flows:**
   - Do the 4 primary user flows match actual customer journeys?
   - Any critical personas or flows missing?

5. **Page Count:**
   - Comfortable with estimated 33-43 pages for complete site?
   - Any pages in scope that should be out of scope for initial launch?

---

**Document Status:** Ready for Stakeholder Review
**Next Task:** UX-003 - Wireframe Development (pending IA approval)
**Dependencies:** This IA must be approved before design work begins

---

**End of Information Architecture Document**
