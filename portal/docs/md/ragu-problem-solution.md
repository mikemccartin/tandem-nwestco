# The "Ragù" Problem and Recommended Solution

**Project:** NWESTCO Website Redesign
**Purpose:** Client communication document explaining the navigation consolidation
**Date:** December 1, 2025

---

## Section 1: What The Client Actually Had - The "Ragù" Problem

### The REAL "Ragù": Multiple Competing Organizational Structures

They had **4-5 valid ways to organize the same business** all thrown together with no clear hierarchy:

---

### 1. **7 "Service Verticals"** (on current website homepage)
These were the main navigation boxes competing for attention:

- **Petroleum** - "Service, construction, support and sales for petroleum needs"
- **Car Wash** - "Chemicals, parts, vending, and repair services"
- **Automotive** - "Lighting, lifts, lube equipment, air compressors"
- **Aviation** - "Building and maintaining aviation fueling systems"
- **Electrical** - "Master Electricians, Journeyman Electricians and Service Techs"
- **Industrial** - "Fleet services, hospitals, bulk plants, generators, marinas"
- **Tanks** - "Premium steel tanks. Made in Montana, shipped anywhere"

**The Problem:** These mix:
- **Market verticals** (Petroleum, Car Wash, Automotive, Aviation)
- **Service types** (Electrical - actually a capability, not a market)
- **Product categories** (Tanks - equipment, not a vertical)
- **Overlapping markets** (Industrial vs. Petroleum? Aviation vs. Petroleum?)

---

### 2. **12+ Industry Verticals** (from internal segmentation thinking)
Their internal marketing deck showed they were trying to serve:

- C-Store
- Gas Station
- Mass Merchant
- Car Wash
- Car Dealer
- School District
- Municipality
- Telecom
- Data Center
- Truck Stop
- Airport
- Marina

**The Problem:** Too many distinct industries to organize in navigation - impossible to present clearly

---

### 3. **Customer Segments** (from internal strategy)
They were thinking about organizing by customer size:

- **National operators** (large chains)
- **Regional operators** (multi-state)
- **Local operators** (single/few locations)

**Sub-segments they tracked:**
- Retail
- Commercial
- Industrial
- GC (General Contractors)
- Jobber (fuel distributors)

**The Problem:** No clear way to organize site navigation around this - forces customers to self-identify by size (awkward)

---

### 4. **Service Lifecycle Stages** (from internal strategy deck)
They had a "service wheel" showing lifecycle stages:

1. **Installation** - Turn-key project management
2. **Service & Maintenance** - 24/7 emergency response
3. **Remodels & Upgrades** - Equipment refresh
4. **Equipment Sales** - Products and parts
5. **Testing & Compliance** - EPA/environmental
6. **Environmental Solutions** - Tank testing, remediation
7. **Chemistry** - Car wash chemicals

**The Problem:** These lifecycle services were buried - not clearly organized or prominent. This is their TRUE differentiator but it was hidden.

---

### 5. **Geographic Organization**
**8 branches across 6 states:**

**Branches:**
1. Kalispell, MT (headquarters)
2. Spokane, WA
3. Billings, MT
4. Boise, ID
5. Portland, OR
6. Springdale, AR
7. Fresno, CA
8. Bakersfield, CA
9. San Jose, CA

*(Note: Documentation shows 8-9 branches - messaging uses "8 branches")*

**States served:**
- Washington
- Oregon
- Idaho
- Montana
- California
- Arkansas

**Extended service:** Wyoming, Nevada, Utah, Missouri

**The Problem:** Branch coverage not emphasized as competitive advantage; could organize by geography but that's not how customers think

---

## The Core "Ragù" Problem:

**All 5 organizational models competing simultaneously with no hierarchy:**

```
Current Site = CONFUSION

7 Service Verticals  +  12 Industry Types  +  Customer Segments  +  Lifecycle Services  +  8 Branches
(Petroleum, Car Wash)  (C-Store, Airport)   (National, Local)      (Install, Service)     (Geography)
         ↓                      ↓                    ↓                      ↓                    ↓
    WHAT IS IT?           WHO IS IT FOR?        HOW BIG ARE THEY?      WHAT DO THEY DO?       WHERE ARE THEY?

= Customer can't self-identify
= Value proposition buried
= Looks fragmented, not integrated
```

---

**Result:**
- Customers confused: "Which box do I click?"
- Lifecycle expertise hidden: "They just sell stuff"
- Scale unclear: "Looks like $10M company, not $120M"
- No clear entry point for any audience

---
---

## Section 2: Recommended Solution Through The Prototypes - Clear Hierarchy

### We Consolidated 5 Competing Structures Into 2 Clear Ones

**All 3 prototypes (A, B, C) implement the same simplified structure:**

---

### **PRIMARY ORGANIZATION: Markets We Serve** (WHO you help)

**3 Clear Market Pillars:**

#### 1. **⛽ Fuel Systems**
- **Includes:** Retail fuel, c-stores, commercial fleets, aviation fueling, industrial applications
- **Consolidates old verticals:** Petroleum + Aviation + Industrial + Automotive + Tanks

#### 2. **🚗 Car Wash Systems**
- **Includes:** Tunnel washes, in-bay automatics, self-serve operations
- **Consolidates old verticals:** Car Wash (unchanged - already clear)

#### 3. **🌱 Environmental Solutions**
- **Includes:** Tank testing, compliance, leak detection, remediation
- **Consolidates old verticals:** Testing & Compliance (elevated to standalone pillar)

**Result:** Customer self-identifies in 1 click - "I run a c-store → Fuel Systems"

---

### **SECONDARY ORGANIZATION: Services We Provide** (HOW you help them)

**7 Lifecycle Services (Complete Cradle-to-Grave):**

1. **📐 Design & Engineering** - CAD drawings, permitting, compliance consulting
2. **🏗️ Installation & Construction** - Turn-key project management, underground tanks
3. **⚡ 24/7 Service & Maintenance** - Emergency response, preventative maintenance
4. **♻️ Remodels & Upgrades** - Equipment refresh, EMV compliance, technology updates
5. **📦 Equipment Sales & Parts** - 40+ manufacturer brands, next-day delivery
6. **✅ Testing & Compliance** - Tank testing, leak detection, EPA compliance
7. **🎓 Training & Certification** - Portland/Spokane training centers, manufacturer certs

**Result:** Lifecycle expertise is front and center - "We're not a distributor, we're a lifecycle partner"

---

### What Happened to the Other Organizational Models?

#### **12+ Industry Verticals** → **Rolled into 3 Market Pages**
- C-Store, Gas Station, Mass Merchant → **Fuel Systems > Retail**
- Airport, Aviation → **Fuel Systems > Aviation**
- Data Center, Municipality, Industrial → **Fuel Systems > Industrial/Commercial**
- Car Wash → **Car Wash Systems** (standalone)
- School District, Hospital → **Fuel Systems > Commercial/Fleet**

#### **Customer Segments (National, Regional, Local)** → **Backend Intelligence**
- **Not visible in navigation** (avoids awkward self-selection)
- **Smart form routing** - Forms detect company size/needs and route to appropriate branch
- **Implementation:** WordPress Phase 6

#### **Service Lifecycle** → **Front and Center**
- **Primary navigation:** Services dropdown with all 7 stages
- **Interactive timeline** (Option C) or grid display (Options A & B)
- **Every market page** links to relevant lifecycle services

#### **8 Branches / 6 States** → **Supporting Evidence**
- **Locations page** with branch details and coverage map
- **Stats section** highlighting "8 Branches Across 6 Western States"
- **Footer messaging** emphasizing geographic coverage
- **Not primary navigation** (geography supports the story, doesn't organize it)

---

### The New Structure (Visual):

```
CLEAR HIERARCHY

STEP 1: WHO ARE YOU? (Markets)
┌────────────┐  ┌────────────┐  ┌─────────────────┐
│ ⛽ FUEL     │  │ 🚗 CAR     │  │ 🌱 ENVIRONMENTAL │
│  SYSTEMS   │  │  WASH      │  │  SOLUTIONS       │
└────────────┘  └────────────┘  └─────────────────┘
      ↓                ↓                  ↓
   Market Page     Market Page        Market Page

STEP 2: WHAT DO YOU NEED? (Lifecycle Services)
┌──────────────────────────────────────────────────────────┐
│ Design → Install → Service → Upgrade → Equipment → Test │
│                         → Train                          │
└──────────────────────────────────────────────────────────┘
                           ↓
                 Individual Service Pages

STEP 3: WHERE ARE YOU? (Geography - Supporting Info)
┌──────────────────────────────────────────────────────────┐
│ 8 Branches Across 6 Western States                       │
│ (Presented as capability, not primary navigation)         │
└──────────────────────────────────────────────────────────┘
                           ↓
                   Locations Page

STEP 4: TAKE ACTION (Conversion)
┌──────────────────────────────────────────────────────────┐
│ [GET SERVICE NOW]  [REQUEST QUOTE]  [📞 800-775-1892]   │
└──────────────────────────────────────────────────────────┘
```

---

### How This Solves Each Problem:

| Old Problem | New Solution |
|------------|--------------|
| **7 competing verticals** | → 3 clear market choices |
| **Electrical = service type mixed with markets** | → Services dropdown (cross-cutting capability) |
| **Tanks = product mixed with markets** | → Equipment Sales service page |
| **Industrial vs. Petroleum overlap** | → Both roll into Fuel Systems with subsections |
| **12+ industry verticals** | → Subsections within 3 main markets |
| **Segment confusion (National/Regional/Local)** | → Backend form routing (invisible to user) |
| **Lifecycle hidden** | → Primary navigation + prominent timeline/grid |
| **Branch coverage buried** | → Stats, locations page, footer messaging |
| **No clear entry point** | → 3 market pillars = instant self-identification |

---

### Result:

**Before:** 5 competing organizational models = confusion

**After:** 2-level hierarchy = clarity
1. **Markets** (WHO) → 3 pillars
2. **Services** (HOW) → 7 lifecycle stages

**Customer journey:**
```
Homepage → Pick Market (1 click) → See Services (scan) → Request Quote (1 click) = 3 clicks total
```

---

## Summary for Client Discussion

### The Challenge You Described:
> "The website is like ragù - everything thrown together"

### What We Found:
Not just 7 verticals - **5 different valid ways to organize your business** all competing with no clear hierarchy (service verticals, industry types, customer segments, lifecycle services, geography).

### Our Solution in All 3 Prototypes:
**Simplified to 2 clear levels:**
1. **Markets We Serve** - 3 pillars (Fuel Systems, Car Wash, Environmental)
2. **Services We Provide** - 7 lifecycle stages (Design → Install → Service → Upgrade → Equipment → Test → Train)

### The Result:
- **Customers self-identify instantly** - "I run a c-store → Fuel Systems"
- **Lifecycle expertise front and center** - "We're a lifecycle partner, not a distributor"
- **Reflects $120M scale** - Confident, clear, organized
- **3 clicks to conversion** - Homepage → Market → Quote

---

**All 3 prototype options (A, B, C) implement this same structure.** The choice is about *presentation style*, not organizational approach.

---

**End of Document**
