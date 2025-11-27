# Nwestco Website Prototypes

This directory contains three complete HTML/CSS prototype options for the Nwestco website redesign project. Each prototype demonstrates a different approach to site architecture and user experience.

## Project Overview

**Client**: Nwestco
**Project**: Website redesign with three prototype options for client selection
**Tech Stack**: HTML5, CSS3, JavaScript (vanilla)
**Fonts**: Open Sans (body), Lato (headings)

## Directory Structure

```
prototypes/
├── shared/                 # Shared assets across all prototypes
│   ├── css/
│   │   ├── reset.css      # Modern CSS reset
│   │   └── base.css       # Base design tokens and typography
│   ├── js/
│   │   └── main.js        # Shared JavaScript functionality
│   ├── images/            # Shared images (to be populated)
│   ├── fonts/             # Web fonts (Google Fonts CDN used)
│   └── components.html    # Component showcase and design system reference
│
├── option-a/              # Single-page scrollable experience
│   ├── index.html
│   ├── css/
│   │   └── option-a.css
│   ├── js/
│   │   └── option-a.js
│   └── images/
│
├── option-b/              # Multi-page traditional website
│   ├── index.html
│   ├── css/
│   │   └── option-b.css
│   ├── js/
│   │   └── option-b.js
│   ├── images/
│   └── pages/
│       ├── fuel-systems.html
│       ├── car-wash.html
│       ├── environmental.html
│       ├── about.html
│       ├── careers.html
│       └── contact.html
│
└── option-c/              # Interactive single-page experience
    ├── index.html
    ├── css/
    │   └── option-c.css
    ├── js/
    │   └── option-c.js
    └── images/
```

## Prototype Options

### Option A: Single-Page Scrollable
**File**: `option-a/index.html`

A modern, one-page scrollable design with smooth transitions between sections. Features:
- Full-height hero section
- Smooth scroll navigation
- Scroll progress indicator
- Mobile-first responsive design
- Best for: Streamlined content, modern aesthetic

### Option B: Multi-Page Traditional
**File**: `option-b/index.html`

Traditional multi-page website with dedicated pages for each service area. Features:
- Homepage with service overview
- 6 dedicated inner pages (Fuel Systems, Car Wash, Environmental, About, Careers, Contact)
- Traditional navigation structure
- Comprehensive footer with sitemap
- Best for: Detailed content organization, SEO optimization

### Option C: Interactive Single-Page
**File**: `option-c/index.html`

An interactive, app-like single-page design with dynamic content sections. Features:
- Tabbed service sections with ARIA accessibility
- Interactive brand filtering system
- Scroll progress indicator
- Enhanced user engagement
- Best for: Interactive experience, modern web app feel

## How to View the Prototypes

### Option 1: Direct File Opening
Simply open any `index.html` file directly in your web browser:
```bash
# On macOS
open prototypes/option-a/index.html

# On Windows
start prototypes/option-a/index.html

# On Linux
xdg-open prototypes/option-a/index.html
```

### Option 2: Local Development Server (Recommended)
For the best experience and to avoid CORS issues with assets, use a local development server:

**Using Python 3:**
```bash
cd prototypes
python3 -m http.server 8000
```
Then visit: `http://localhost:8000/option-a/`

**Using Node.js (with http-server):**
```bash
npx http-server prototypes -p 8000
```
Then visit: `http://localhost:8000/option-a/`

**Using VS Code Live Server:**
1. Install the "Live Server" extension
2. Right-click on any `index.html` file
3. Select "Open with Live Server"

## Shared Design System

All prototypes share common design foundations located in `/shared/`:

### CSS Architecture
- **reset.css**: Modern CSS reset for cross-browser consistency
- **base.css**: Design tokens, typography, utilities
  - CSS custom properties (variables) for colors, spacing, typography
  - Fluid typography using clamp()
  - Responsive container utilities
  - Accessibility helpers (skip-nav, sr-only)

### JavaScript Functionality
- **main.js**: Shared functionality
  - Mobile menu toggle
  - Smooth scroll for anchor links
  - Skip navigation for accessibility
  - Event delegation for performance

### Component Showcase
View the design system reference at: `shared/components.html`
- Color palette
- Typography scale
- Button styles
- Card components
- Spacing system
- Form elements

## Design Tokens

### Colors (Placeholder - to be refined by UI-001)
```css
--color-primary: #003366;    /* Deep blue */
--color-secondary: #0066CC;  /* Bright blue */
--color-accent: #FF6600;     /* Orange */
--color-text: #333333;       /* Dark gray */
--color-background: #FFFFFF; /* White */
```

### Typography
- **Primary Font**: Open Sans (body text)
- **Secondary Font**: Lato (headings)
- **Scale**: Fluid typography using clamp() for responsive sizing

### Spacing Scale
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)

## Asset References

### Current Site Assets
Images and logos from the current Nwestco site are available at:
```
/current-site-assets/
├── logos/       # Company logos
├── images/      # Site imagery
└── brands/      # Brand partner logos
```

These will be integrated by the UI-001 task.

### Google Fonts
Fonts are loaded via CDN in all HTML files:
- Open Sans: weights 400, 600, 700
- Lato: weights 400, 700, 900

## Development Guidelines

### HTML Best Practices
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`)
- ARIA labels and roles for accessibility
- Meta tags for SEO and responsive design
- Skip navigation link for keyboard users

### CSS Best Practices
- Mobile-first responsive design
- CSS custom properties for maintainability
- BEM-like naming conventions for clarity
- Minimal specificity for easier overrides
- Smooth transitions and animations (respecting `prefers-reduced-motion`)

### JavaScript Best Practices
- Vanilla JavaScript (no frameworks)
- Event delegation for performance
- Accessibility-first interactive components
- Progressive enhancement approach
- Console logging for debugging

### Accessibility Features
- WCAG 2.1 AA compliance target
- Skip navigation links
- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly markup

## Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari iOS 12+
- Chrome for Android (latest)

## Next Steps

### Immediate Tasks
1. **UI-001**: Design system refinement
   - Finalize color palette
   - Complete component library
   - Add real content and images
   - Refine typography scale

2. **CONTENT-001**: Content population
   - Add service descriptions
   - Include brand partner information
   - Populate about/contact pages
   - Add real imagery

3. **TEST-001**: Cross-browser testing
   - Test all interactive features
   - Verify responsive behavior
   - Accessibility audit
   - Performance optimization

### Future Enhancements
- Form validation and submission
- Image optimization and lazy loading
- Animation refinements
- Analytics integration
- CMS integration (if required)

## File Inventory

### HTML Files Created: 10
- option-a/index.html
- option-b/index.html
- option-b/pages/fuel-systems.html
- option-b/pages/car-wash.html
- option-b/pages/environmental.html
- option-b/pages/about.html
- option-b/pages/careers.html
- option-b/pages/contact.html
- option-c/index.html
- shared/components.html

### CSS Files Created: 5
- shared/css/reset.css
- shared/css/base.css
- option-a/css/option-a.css
- option-b/css/option-b.css
- option-c/css/option-c.css

### JavaScript Files Created: 4
- shared/js/main.js
- option-a/js/option-a.js
- option-b/js/option-b.js
- option-c/js/option-c.js

## Questions or Issues?

For questions about this project structure, contact the development team or refer to:
- Project brief: `/nwestco-project-brief.md`
- Task breakdown: `/nwestco-task-breakdown.md`

---

**Last Updated**: 2024-11-26
**Created by**: Frontend Developer
**Status**: Base structure complete, ready for UI-001 design system implementation
