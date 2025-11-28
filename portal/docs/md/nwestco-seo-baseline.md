# Nwestco SEO Baseline Audit & Competitor Analysis

**Project:** Nwestco Website Redesign
**Audit Date:** November 26, 2025
**Audited By:** Technical SEO Specialist
**Current Site:** https://nwestco.com

---

## Executive Summary

### Current SEO Health Score: 4/10

Nwestco's current website suffers from fundamental technical SEO deficiencies that significantly limit organic search visibility. While the site has acceptable URL structure and basic schema implementation, critical gaps in meta optimization, content depth, and local SEO strategy prevent the company from competing effectively against established competitors like United Uptime and Petro West.

### Critical Issues Identified
1. Missing or inadequate meta descriptions across all pages
2. Weak title tag optimization (generic "Service - Nwestco" patterns)
3. No LocalBusiness schema markup for 8-location footprint
4. Missing alt text on hero images and key visual assets
5. Poor heading hierarchy (H1 gaps, improper H3/H4 usage)
6. No location-specific landing pages for branch offices
7. Minimal geographic keyword targeting
8. Heavy JavaScript/CSS bloat impacting Core Web Vitals

---

## Current Site Technical SEO Audit

### Platform & Infrastructure
- **CMS:** WordPress 6.8.3 with WPBakery page builder
- **Server:** NGINX 1.27.4
- **Analytics:** Google Analytics 4 (properly implemented)
- **Forms:** Ninja Forms
- **Hosting:** No CDN detected (performance risk)
- **Security:** HTTPS properly configured

### On-Page SEO Elements

#### Title Tags (Score: 2/10)
**Issues:**
- Homepage: "Home - Nwestco" - Misses primary keywords entirely
- Service pages: "Petroleum - Nwestco", "Car Wash - Nwestco" - Generic, no value proposition
- Lacking: geographic modifiers, service keywords, differentiators

**Recommendations:**
- Homepage: "Fuel System & Car Wash Equipment | Western US Service | Nwestco"
- Petroleum: "Petroleum Equipment Installation & Service | WA, OR, ID, MT | Nwestco"
- Car Wash: "Car Wash Equipment Sales & Service | 9 Locations | Nwestco"

#### Meta Descriptions (Score: 1/10)
**Critical Gap:** Meta descriptions missing or not visible on:
- Homepage
- All service pages (Petroleum, Car Wash, Automotive, Aviation, Electrical, Industrial)
- About Us page
- Location pages

**Impact:** Zero control over SERP snippet presentation, losing potential click-through rate improvements of 20-30%.

**Recommendation:** Write compelling 150-160 character descriptions emphasizing:
- Service lifecycle coverage
- Geographic reach (6 states, 9 branches)
- Uptime guarantee
- 24/7 availability

#### Heading Structure (Score: 4/10)
**Homepage:**
- H1 tag not clearly defined or weak
- Multiple service sections lack proper H2 hierarchy
- Content jumps from H3 to H6 without intermediate levels

**Service Pages:**
- Petroleum: H1 "Petroleum" (too generic)
- Car Wash: H1 "Car Wash" (no context)
- Improper H3/H4 usage without H2 foundation

**Best Practice:** Each page should have ONE clear H1 with keyword-rich text, followed by logical H2/H3/H4 hierarchy.

#### Schema Markup (Score: 5/10)
**Currently Implemented:**
- WebPage schema
- BreadcrumbList schema
- WebSite schema with SearchAction

**Missing Critical Schemas:**
- LocalBusiness schema for headquarters (Spokane, WA)
- LocalBusiness schemas for 9 branch locations
- Service schema for each service offering
- Organization schema with aggregate ratings
- Review schema (if applicable)

**Competitor Advantage:** United Uptime has 4.8/5 rating schema with 150 reviews displayed in SERPs. Nwestco shows no ratings.

#### Image Optimization (Score: 3/10)
**Issues:**
- Multiple images lack alt attributes
- Logo missing descriptive alt text ("Nwestco logo" vs. current blank)
- Hero slider images no alt text
- Equipment photos not optimized for keywords

**File Size Concerns:**
- No lazy loading detected on below-fold images
- Potential Core Web Vitals impact

**Fix:** Add descriptive, keyword-rich alt text to all images. Example:
- Current: `<img src="hero.jpg" alt="">`
- Fixed: `<img src="hero.jpg" alt="Nwestco technician installing petroleum dispensing equipment in Western US convenience store">`

#### Internal Linking (Score: 6/10)
**Strengths:**
- Clear navigation to service verticals
- Branches page linked from navigation
- Brands page accessible

**Weaknesses:**
- No contextual in-content links between related services
- Missing breadcrumb navigation on mobile
- No related service suggestions at page bottom
- Location pages not interlinked with service pages

**Opportunity:** Create hub-and-spoke model with service lifecycle wheel as central hub.

#### URL Structure (Score: 7/10)
**Strengths:**
- Clean, descriptive URLs: `/services/petroleum/`, `/services/car-wash/`
- No unnecessary parameters or session IDs
- Proper trailing slash consistency

**Minor Issues:**
- Some pages use WordPress defaults: `/about-us/` instead of `/about/`
- No location URL pattern established for branch pages

**Recommendation for New Site:**
- Location pattern: `/locations/[city-state]/` (e.g., `/locations/spokane-wa/`)
- Service + Location: `/services/petroleum/seattle-wa/` for geo-specific pages

### Content Analysis

#### Content Depth (Score: 4/10)
**Average Word Count:**
- Homepage: ~400 words (insufficient)
- Service pages: 300-400 words (thin content)
- About page: Contains Lorem ipsum placeholder text (unacceptable)

**Industry Benchmark:** Competitor pages average 800-1,200 words with detailed service descriptions.

**Missing Content Types:**
- Case studies or project examples
- Service area descriptions
- Technical specifications
- Compliance/certification details
- FAQ sections for each service

#### Keyword Targeting (Score: 3/10)
**Currently Ranking For:**
- Brand name "Nwestco" (position 1-3)
- Generic equipment brand names (Gilbarco, OPW, Xerxes)

**Missing Keyword Opportunities:**
- Service + location combinations
- Problem-solution keywords ("fuel dispenser repair", "tank compliance testing")
- Lifecycle keywords ("installation", "maintenance", "remodel")
- Industry-specific terms ("UST testing", "PEI certified", "car wash retrofit")

**Geographic Keywords:**
- Zero optimization for city + service combinations
- No state-level targeting beyond vague "Western US"
- Competitors own: "Seattle petroleum equipment", "Portland fuel system service"

#### Calls-to-Action (Score: 5/10)
**Strengths:**
- Phone number visible in header: 800-775-1892
- Email address present: info@nwestco.com
- "Request Service" and "Request Quote" buttons on homepage

**Weaknesses:**
- CTAs not embedded within service page content
- No location-specific CTAs ("Call our Spokane office")
- No chat functionality
- Forms not prominently placed on service pages

---

## Local SEO Assessment

### Current State: Critical Deficiency

#### Multi-Location Structure (Score: 1/10)
**Major Issues:**
- No individual landing pages for 9 branch locations
- No LocalBusiness schema for any location
- Branches page appears to be generic list (not indexed separately)

**Missing Elements:**
- Unique content for each branch location
- Local service area descriptions
- Branch-specific team bios or photos
- Location-specific service offerings
- Driving directions and parking information
- Local client testimonials

#### Google Business Profile Management
**Assessment:** Unable to verify from website audit, but recommend:
- Verify all 9 locations have claimed GBP listings
- Ensure NAP consistency across all directories
- Implement review generation strategy per location
- Add service menus to each GBP listing
- Upload location-specific photos (trucks, teams, projects)

#### NAP Consistency (Score: 2/10)
**Critical Issue:** About Us page lacks complete NAP data.
- Name: Present (Nwestco)
- Address: Not visible on About page
- Phone: Present (800-775-1892)

**Risk:** Without consistent NAP across all pages and directory listings, local rankings suffer.

#### Geographic Keywords (Score: 2/10)
**Current Usage:**
- Vague "Rockies and Northwest" mention on Car Wash page
- "World wide clients" claim without local focus
- No city-level or state-level keyword targeting

**Missed Opportunities:**
- "Fuel system service Spokane"
- "Petroleum equipment Portland"
- "Car wash installation Seattle"
- "UST testing Boise Idaho"
- "Montana fuel dispenser repair"
- "Alaska petroleum contractor"

---

## Core Web Vitals Assessment

### Preliminary Technical Performance Issues

**Identified Problems:**
1. **JavaScript Bloat:** RevSlider and WPBakery load heavy scripts above the fold
2. **CSS Bloat:** Inline styles throughout HTML increase page weight
3. **No Lazy Loading:** Images load immediately regardless of viewport position
4. **Missing CDN:** Static assets served from origin server
5. **Render-Blocking Resources:** Multiple CSS/JS files block initial paint

**Predicted Impact:**
- Largest Contentful Paint (LCP): Likely 3.5-5.0s (Poor)
- Cumulative Layout Shift (CLS): Slider causes shifts (Poor)
- Interaction to Next Paint (INP): Form scripts may cause delays

**Industry Benchmark:**
- Good: LCP <2.5s, INP <200ms, CLS <0.1
- Average: LCP 2.5-4.0s, INP 200-500ms, CLS 0.1-0.25
- Poor: LCP >4.0s, INP >500ms, CLS >0.25

**Recommendation:** Full Core Web Vitals audit with PageSpeed Insights and GTmetrix required for new site.

---

## Mobile Optimization

### Current State (Score: 6/10)

**Strengths:**
- Responsive design implemented
- Viewport meta tags present
- Touch-friendly navigation menu

**Issues:**
- Heavy page weight impacts mobile load times
- Phone number not click-to-call optimized in content
- Forms may be difficult to complete on mobile (requires testing)
- Hero slider may not be mobile-optimized (requires device testing)

**Best Practice:** New site should be mobile-first with desktop as enhancement.

---

## Competitor SEO Analysis

### 1. United Uptime (uniteduptime.com)

#### Overall SEO Maturity: 8/10

**Strengths:**
- Strong schema implementation including AggregateRating (4.8/5 from 150 reviews)
- Clear value proposition in title tags
- Pain-point focused content strategy
- Modern, performant technical implementation
- Comprehensive service descriptions with ROI quantification
- Enterprise client logos for trust signals

**Title Tag Strategy:**
"We Keep You Running., Compliant., Profitable. | United Uptime"

**Meta Description Quality:** Compelling, benefit-focused copy

**Heading Hierarchy:** Clean H1/H2/H3 structure with keyword-rich headings

**Content Depth:** 2,350+ words on homepage with detailed service descriptions

**Schema Markup:**
- Organization with contact points
- AggregateRating prominently displayed
- BreadcrumbList
- Proper social media profile links

**Keyword Strategy:**
- Problem-focused: "lost revenue", "compliance risk", "unpredictable costs"
- Solution-focused: "maximize uptime", "predictable repair", "coast-to-coast"
- Quantifies pain: "$1,228 per 10-hour pump outage", "$26,500-$40,000 EPA fines"

**Technical SEO:**
- Modern framework (appears custom-built)
- Lazy loading implemented
- Font optimization
- Google Consent Mode V2
- HubSpot integration for lead capture

**What Nwestco Can Learn:**
1. Pain-point quantification in content
2. Review schema for credibility
3. Clear outcome-focused messaging
4. Enterprise client logo carousel
5. FAQ section addressing objections
6. Detailed service process visualization

---

### 2. Petro West (petrowestinc.com)

#### Overall SEO Maturity: 7/10

**Strengths:**
- Clear service verticals with dedicated pages
- CEO video content for trust building
- Client testimonials and case studies
- Partnership badges (Gilbarco, Passport, Veeder-Root)
- Product showcase (SiteHarmony platform)
- Training center promotion with location-based content

**Title Tag Example:**
"We Fuel Your Business | Petro West Fuel Industry Contractors"

**Meta Description:**
"Petro West is dedicated to providing the best fueling solutions for your business. We offer full service and maintenance for all of your needs."

**Content Strategy:**
- Service-focused with clear divisions
- Geographic mention: Las Vegas training center
- Brand partnerships highlighted
- Lifecycle approach: construction → service → maintenance → training

**Schema Implementation:**
- Organization schema with LinkedIn
- WebPage schema
- BreadcrumbList
- ImageObject specifications

**Technical SEO:**
- Lazy loading for performance
- Google Analytics properly configured
- Elementor page builder (cleaner than WPBakery)
- Mobile-responsive design

**Internal Linking:**
- Strong siloing between service categories
- Related service suggestions
- Prominent CTA placement

**What Nwestco Can Learn:**
1. CEO video for personal connection
2. Partnership/certification badges above the fold
3. Product platform showcase (if applicable)
4. Training/education content marketing
5. Clear "one-stop shop" positioning
6. Visual service process flow

---

### 3. Guardian Fueling Technologies (guardianfueltech.com)

#### Overall SEO Maturity: 6/10

**Strengths:**
- Enterprise-grade technical infrastructure (Wix Thunderbolt)
- Security-hardened platform
- Content prefetching for performance
- Clean, professional design
- Three clear service pillars

**Title Tag:**
"Guardian Fueling Technologies | Petroleum Equipment, Service, & Construction"

**Schema Implementation:**
- Basic WebSite schema
- SearchAction implementation
- Minimal LocalBusiness details

**Technical SEO:**
- Advanced prefetching
- Service worker integration
- Smooth page transitions
- Mobile-optimized

**Weaknesses:**
- Less personality than competitors
- No visible reviews or ratings
- Limited content depth
- Generic business positioning
- No geographic focus

**Competitive Positioning:** This represents the "floor" for acceptability in the industry, not the ceiling Nwestco should aim for.

**What Nwestco Can Learn:**
1. Technical performance optimization
2. Clean service categorization
3. Enterprise-grade platform reliability

---

### 4. Regional Competitors Analysis

#### CDA Service Station Equipment (cdasse.com)
- **Coverage:** WA, ID, OR, MT (direct overlap with Nwestco)
- **Positioning:** 24/7 service availability emphasized
- **Strengths:** Family-owned story (since 1971), all major brands serviced
- **SEO Maturity:** Moderate (5/10)

#### Alaska Fuel Systems (alaskafuelsystems.com)
- **Coverage:** Alaska (Nwestco expansion opportunity)
- **Positioning:** Construction, maintenance, testing specialist
- **Strengths:** 24/7 support, comprehensive service offering
- **SEO Maturity:** Moderate (5/10)

#### Northwest Wash Systems (northwestwashsystems.com)
- **Coverage:** WA, OR (car wash focus)
- **Positioning:** Premier Pacific Northwest car wash contractor
- **Strengths:** 15+ years experience, licensed general contractor
- **SEO Maturity:** Low-Moderate (4/10)

---

## Competitive SEO Gap Analysis

### Where Nwestco is Behind

| SEO Factor | Nwestco | United Uptime | Petro West | Gap Severity |
|------------|---------|---------------|------------|--------------|
| Meta Descriptions | Missing | Excellent | Good | CRITICAL |
| Title Tag Optimization | 2/10 | 9/10 | 8/10 | CRITICAL |
| Schema Markup | 5/10 | 9/10 | 7/10 | HIGH |
| Content Depth | 4/10 | 9/10 | 7/10 | HIGH |
| Review Schema | 0/10 | 10/10 | 6/10 | HIGH |
| Location Pages | 1/10 | N/A | N/A | CRITICAL |
| Geographic Keywords | 2/10 | N/A | 4/10 | HIGH |
| Core Web Vitals | 4/10 est. | 8/10 | 7/10 | MEDIUM |
| Mobile UX | 6/10 | 9/10 | 8/10 | MEDIUM |
| Trust Signals | 3/10 | 9/10 | 8/10 | HIGH |

### Where Nwestco Has Advantages

1. **Multi-Location Footprint:** 9 branches vs. competitors' single locations (untapped local SEO opportunity)
2. **Service Breadth:** Petroleum + car wash + industrial + aviation vs. competitors' narrower focus
3. **Geographic Coverage:** 6-state Western US reach
4. **Revenue Scale:** $120M company (should leverage size for credibility)

### Competitive Keyword Ownership

**Keywords Owned by Competitors:**
- United Uptime: "maximize uptime", "predictable repair", "compliance solutions"
- Petro West: "we fuel your business", "SiteHarmony", "Las Vegas fuel training"
- Guardian: "fueling technologies", "petroleum construction"

**Keywords Available for Nwestco:**
- "Western US fuel systems"
- "8-location petroleum service"
- "lifecycle fuel solutions"
- "Spokane petroleum equipment"
- "Idaho car wash installation"
- "Montana fuel compliance"

---

## Indexation & Crawlability

### Robots.txt Assessment
**Status:** Not fully audited in this preliminary review

**Recommendation:** Verify robots.txt allows crawling of:
- All service pages
- All location pages
- Blog/resources (if present)
- Image directories

### XML Sitemap
**Status:** Presence not confirmed in initial audit

**Recommendation for New Site:**
- Generate dynamic XML sitemap including:
  - Homepage
  - All service pages
  - All 9 location pages
  - Brand/partner pages
  - Resources/blog posts
  - Submit to Google Search Console and Bing Webmaster Tools

### Crawl Budget Optimization
**Current State:** Unknown without Search Console access

**For New Site:**
- Eliminate duplicate content
- Fix redirect chains
- Remove orphaned pages
- Prioritize important pages in sitemap
- Monitor crawl stats in Search Console

---

## Backlink Profile (Preliminary)

**Note:** Full backlink audit requires tools like Ahrefs, Moz, or SEMrush. This is a preliminary assessment.

**Estimated Current State:**
- Domain Authority: Likely 20-30 range
- Referring Domains: Estimated 50-150
- Link Quality: Likely mix of directories and supplier partnerships

**Competitor Benchmarks:**
- United Uptime: Estimated DA 35-40 (national reach, recent rebrand publicity)
- Petro West: Estimated DA 30-35 (regional authority, Tandem Theory client)
- Guardian: Estimated DA 30-35 (established brand)

**Link Building Opportunities:**
- Manufacturer partnerships (Gilbarco, OPW, Xerxes) should link to dealer/distributor pages
- Industry associations (PEI, NACS)
- Local chambers of commerce (9 locations)
- Regional business directories
- Press releases for acquisitions/expansion
- Guest posts on industry blogs
- Sponsorships of convenience store conferences

---

## Search Console Insights Needed

**To complete SEO baseline, request access to:**
1. Google Search Console (current site)
2. Google Business Profile (all 9 locations)
3. Google Analytics 4 (traffic and conversion data)
4. Any previous SEO audit reports

**Key Metrics to Evaluate:**
- Current organic traffic volume
- Top performing keywords
- Geographic traffic distribution
- Click-through rates by page
- Core Web Vitals field data
- Mobile usability errors
- Index coverage issues
- Manual actions or penalties (unlikely but verify)

---

## Competitive SERP Analysis

### Sample Search Queries (Tested in Incognito)

**Query: "petroleum equipment installation spokane"**
- Position 1: Western Pump
- Position 2-5: Industry directories (Yelp, Yellow Pages)
- Nwestco: Not visible on page 1

**Query: "fuel system service western us"**
- Position 1-3: National competitors
- Position 4-10: Regional competitors
- Nwestco: Not visible on page 1

**Query: "car wash equipment spokane"**
- Position 1-3: Local distributors
- Position 4-10: Industry suppliers
- Nwestco: Not visible on page 1

**Query: "nwestco"**
- Position 1: Nwestco.com (correct)
- Position 2-3: Directory listings
- Good brand protection

**Opportunity:** Nwestco should own local + service combinations for all 9 branch cities.

---

## Critical SEO Issues Summary

### Immediate Priority (Launch Blockers)
1. Write meta descriptions for all pages (100+ pages estimated)
2. Optimize title tags with keywords and location modifiers
3. Create 8 unique location landing pages with LocalBusiness schema
4. Add alt text to all images (estimated 200+ images)
5. Fix heading hierarchy on all service pages
6. Remove Lorem ipsum placeholder text from About page

### High Priority (Launch Week)
1. Implement LocalBusiness schema for all 9 locations
2. Add Service schema for each service offering
3. Create geographic service pages (service + city combinations)
4. Optimize Core Web Vitals (lazy loading, CDN, minification)
5. Set up Google Business Profile management system
6. Create XML sitemap with all pages

### Medium Priority (Post-Launch Month 1)
1. Develop location-specific content (minimum 500 words per location)
2. Create FAQ sections for each service
3. Add client testimonials with schema markup
4. Build internal linking strategy with contextual links
5. Launch review generation campaign for all 8 GBP listings
6. Begin local citation building (directories, associations)

### Ongoing Optimization (Post-Launch)
1. Monthly content additions (blog posts, case studies)
2. Quarterly competitor keyword monitoring
3. Monthly Core Web Vitals monitoring
4. Weekly review response management (9 locations)
5. Quarterly backlink acquisition campaigns
6. Continuous conversion rate optimization

---

## Competitor Positioning Summary

### Market Leaders (Who to Beat)
**United Uptime:** National reach, strong brand, excellent technical SEO, review-rich
**Strategy to Compete:** Emphasize regional expertise, faster response times, multi-location coverage

**Petro West:** Regional authority, strong content, CEO presence, training focus
**Strategy to Compete:** Match content quality, emphasize broader service lifecycle, larger footprint

### Market Followers (Peers)
**Guardian Fueling:** Solid technical foundation, less personality
**CDA Service Station:** Regional overlap, family-owned story
**Alaska Fuel Systems:** Alaska specialist

**Strategy to Compete:** Outpace with content depth, local SEO dominance, modern UX

---

## SEO Opportunity Score: 9/10

**Rationale:**
Despite current deficiencies, Nwestco has EXCEPTIONAL SEO opportunity due to:
1. Untapped 8-location local SEO potential
2. Broad service offering (more keyword targets than competitors)
3. Large geographic footprint (6 states)
4. $120M revenue scale (credibility and resources)
5. Weak local competition in some markets
6. Clean slate with new website redesign

**With proper SEO implementation, Nwestco could achieve:**
- Top 3 rankings for [service] + [city] in all 9 branch markets
- Page 1 visibility for "Western US" + [service] queries
- 300-500% organic traffic increase within 12 months
- 50-100 qualified leads per month from organic search

---

## Recommended Tools for New Site

### Essential
- Google Search Console (free)
- Google Business Profile Manager (free)
- Google Analytics 4 (free)
- Screaming Frog SEO Spider (free version or $259/year)
- PageSpeed Insights (free)

### Highly Recommended
- Ahrefs or SEMrush ($99-199/month) - Keyword research, competitor analysis, backlink monitoring
- BrightLocal ($39-79/month) - Local SEO and citation management for 9 locations
- Schema.org Markup Generator (free)
- GTmetrix (free/premium) - Performance monitoring

### Optional but Valuable
- Sitebulb ($35/month) - Technical SEO auditing
- Local Falcon ($29/month) - Local ranking tracking
- CallRail ($45/month) - Call tracking for attribution
- Hotjar ($39/month) - UX behavior analysis

---

## Next Steps for Website Redesign

1. **Foundation (Before Design):**
   - Complete keyword research deliverable
   - Map site architecture with SEO in mind
   - Plan URL structure for all location and service pages

2. **During Development:**
   - Implement technical SEO recommendations
   - Write optimized meta tags for all pages
   - Add structured data markup
   - Optimize images and implement lazy loading

3. **Pre-Launch:**
   - Technical SEO audit with Screaming Frog
   - Core Web Vitals testing and optimization
   - Mobile usability testing
   - Set up redirects from old URLs to new

4. **Launch Week:**
   - Submit XML sitemap to Google/Bing
   - Verify all 8 Google Business Profiles
   - Set up Search Console properties
   - Monitor for indexation issues

5. **Post-Launch:**
   - Local citation building for all 9 locations
   - Content marketing campaign launch
   - Review generation for all GBP listings
   - Monthly performance monitoring and optimization

---

**End of SEO Baseline Audit**

*This audit provides the foundation for keyword research and technical recommendations. All findings should be validated with Search Console data once available.*
