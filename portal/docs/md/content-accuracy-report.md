# Nwestco Prototype Content Accuracy Report

## Overview
This document identifies which content in the prototypes is **verified from the live site** versus **fabricated placeholder content** that requires client verification before launch.

---

## VERIFIED CONTENT (Safe to Use)

### Company Information
| Content | Source |
|---------|--------|
| Company name: Nwestco | Live site |
| Toll-free: 800-775-1892 | Live site |
| Headquarters: Kalispell, MT | Live site footer |
| 9 branch locations | Live site /branches/ |

### Branch Locations & Phone Numbers
All verified from https://nwestco.com/branches/:

| Branch | Toll Free | Local | Fax |
|--------|-----------|-------|-----|
| Kalispell, MT (HQ) | 800-775-1892 | 406-755-4343 | 406-755-4582 |
| Spokane, WA | 888-747-7560 | 509-534-3206 | 509-534-3358 |
| Billings, MT | 866-316-1099 | 406-896-1099 | 406-896-8101 |
| Boise, ID | 800-473-3558 | 208-344-6483 | 208-344-6495 |
| Portland, OR | 800-262-3369 | 503-254-9455 | 503-254-9481 |
| Fresno, CA | — | 559-485-3456 | 559-485-3165 |
| Bakersfield, CA | 800-339-9930 | 661-631-3870 | — |
| San Jose, CA | 800-339-9930 | 669-200-0678 | — |
| Springdale, AR | 800-632-0031 | 479-756-6851 | 479-756-6963 |

### Markets (from live site navigation)
- Fuel Systems
- Car Wash
- Environmental

### Services (from live site navigation)
- Design & Engineering
- Installation & Construction
- Service & Maintenance
- Equipment Sales & Parts
- Testing & Compliance
- Training & Certification

### Technology
- ClearCompany career platform (verified - their actual ATS)

---

## FABRICATED CONTENT (Needs Client Verification)

### Financial & Growth Claims
| Claim | Status | Action Required |
|-------|--------|-----------------|
| "$120M revenue" | **MADE UP** | Get actual revenue or remove |
| "$500M goal" | **MADE UP** | Verify growth target or remove |
| "360+ employees" | **MADE UP** | Get actual headcount |
| "350+ team members" | **MADE UP** | Get actual headcount |

### Performance Metrics
| Claim | Status | Action Required |
|-------|--------|-----------------|
| "4-hour emergency response" | **MADE UP** | Verify SLA or remove |
| "98% uptime" | **MADE UP** | Verify metric or remove |
| "24/7 service" | **UNVERIFIED** | Confirm with client |
| "40+ years combined experience" | **MADE UP** | Verify or remove |
| "25+ years" | **MADE UP** | Verify founding date |

### Company Culture & Taglines
| Content | Status |
|---------|--------|
| "Work hard, be nice, have fun" | **MADE UP** |
| "People-first culture" | **MADE UP** |
| "Western US's most trusted partner" | **MADE UP** |
| "Maximize your uptime" | **MADE UP** |

### Training Claims
| Claim | Status | Action Required |
|-------|--------|-----------------|
| "2 training centers" | **PARTIALLY VERIFIED** | Portland & Spokane mentioned on live site, but "training center" designation unverified |
| "Best-in-class training" | **MADE UP** | Marketing claim - verify or soften |
| "Factory certification programs" | **UNVERIFIED** | Confirm they offer this |
| Specific certification names | **MADE UP** | Get actual certifications |

### Service Descriptions
All detailed service descriptions are **MADE UP** placeholder copy, including:
- Specific capabilities listed
- Process descriptions
- Technical specifications
- Compliance claims (CARB, EPA, etc.)

### Email Addresses
| Email | Status |
|-------|--------|
| info@nwestco.com | **UNVERIFIED** - common format but not confirmed |
| careers@nwestco.com | **UNVERIFIED** - not found on live site |

### Project Examples
Any specific project descriptions, case studies, or client references are **COMPLETELY FABRICATED**.

### Testimonials
Any quotes or testimonials are **COMPLETELY FABRICATED** and should not be used.

---

## RECOMMENDATIONS FOR CLIENT

### Before Launch, Client Must:

1. **Verify or Remove Financial Claims**
   - Confirm revenue figures or remove them
   - Confirm employee count or remove it
   - Confirm growth targets or remove them

2. **Verify Performance Metrics**
   - Confirm response time SLAs
   - Confirm uptime guarantees
   - Confirm 24/7 availability

3. **Provide Accurate Company Info**
   - Company founding year
   - Actual tagline/mission statement
   - Correct email addresses

4. **Review All Service Descriptions**
   - Each service page needs client review
   - Technical claims need verification
   - Compliance certifications need confirmation

5. **Replace Placeholder Content**
   - Real testimonials (with permission)
   - Real project photos
   - Real case studies

---

## PROTOTYPE LIMITATIONS

> **Note:** These prototypes are for design review purposes. Some functionality will not work in the prototype environment.

### Contact Forms Do Not Work
All contact forms in the prototypes are **non-functional**. They are HTML/CSS only and are not connected to any backend or email system. In production, forms will need to be connected to:
- Email notification system
- CRM integration (if applicable)
- Form validation and spam protection

### Careers Page Has Known Bugs
The careers pages integrate with Nwestco's actual **ClearCompany** job listing system. In the prototype environment:
- Job listings load but may display inconsistently
- The "Virtual Recruiter" chatbot appears but **will not function** (domain-restricted)
- Styling may not fully apply to all ClearCompany elements
- Apply buttons may not work correctly outside production domain

**In production:** Once deployed to the live nwestco.com domain, the ClearCompany integration should work fully as it does on the current live site.

---

## SAFE TO PUBLISH AS-IS

- Navigation structure
- Page layouts
- Branch locations and phone numbers
- ClearCompany integration (pulls real job listings)
- General market categories
- General service categories

---

*Generated: November 2024*
*This report should be shared with the client before any content goes live.*
