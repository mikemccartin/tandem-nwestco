# Nwestco Form Specifications - Complete Technical Documentation

**Project:** Nwestco Website Redesign
**Document:** Form Technical Specifications
**Author:** marketing-conversion-optimization Agent
**Date:** November 26, 2025
**Status:** Ready for Development
**Version:** 1.0

---

## Executive Summary

This document provides complete technical specifications for all 5 form types on the Nwestco website redesign. Each form is designed to minimize friction, maximize conversion rates, and enable intelligent lead routing.

**Forms Specified:**
1. Emergency Service Form (urgent, 4 required fields)
2. Quote Request Form (multi-step, 10 required + 3 optional fields)
3. General Contact Form (simple, 4 required fields)
4. Career Application Form (2-3 steps, resume upload)
5. Training Registration Form (2 steps, course selection)

**Key Technical Requirements:**
- Mobile-first responsive design
- WCAG 2.1 AA accessibility compliance
- Real-time inline validation
- Progressive enhancement (works without JavaScript)
- Auto-save and resume functionality
- CRM integration via API
- Analytics event tracking

---

## Table of Contents

1. [Global Form Standards](#1-global-form-standards)
2. [Emergency Service Form](#2-emergency-service-form)
3. [Quote Request Form](#3-quote-request-form)
4. [General Contact Form](#4-general-contact-form)
5. [Career Application Form](#5-career-application-form)
6. [Training Registration Form](#6-training-registration-form)
7. [Validation Rules Library](#7-validation-rules-library)
8. [Error Message Copy](#8-error-message-copy)
9. [Success Confirmations](#9-success-confirmations)
10. [Routing Logic Specifications](#10-routing-logic-specifications)

---

## 1. Global Form Standards

### 1.1 Design System Standards

**Form Container:**
- Max width: 600px (desktop), 100% (mobile)
- Padding: 32px (desktop), 16px (mobile)
- Background: White (#FFFFFF)
- Border radius: 8px
- Box shadow: 0 2px 12px rgba(0,0,0,0.08)

**Typography:**
- Form labels: Open Sans, 14px, 600 weight, #363636
- Input text: Open Sans, 16px, 400 weight, #363636
- Placeholder text: Open Sans, 16px, 400 weight, #999999
- Helper text: Open Sans, 13px, 400 weight, #626262
- Error messages: Open Sans, 13px, 400 weight, #DC2626

**Colors:**
- Primary CTA: #25617C (Nwestco Blue)
- Secondary CTA: #709944 (Nwestco Green)
- Error state: #DC2626 (Red)
- Success state: #10B981 (Green)
- Focus border: #25617C (Blue)
- Disabled state: #E5E7EB (Gray)

**Input Fields:**
- Height: 48px (desktop), 56px (mobile)
- Padding: 12px 16px
- Border: 1px solid #D1D5DB (default)
- Border radius: 6px
- Font size: 16px (prevent iOS zoom)
- Focus border: 2px solid #25617C

**Touch Targets (Mobile):**
- Minimum: 44x44px
- Preferred: 56x56px
- Spacing between: 16px minimum

**Buttons:**
- Primary button:
  - Background: #25617C
  - Text: #FFFFFF
  - Height: 48px (desktop), 56px (mobile)
  - Border radius: 6px
  - Hover: #1A4A5E
  - Active: #15394A
- Secondary button:
  - Background: transparent
  - Border: 2px solid #25617C
  - Text: #25617C
  - Hover: Background #25617C, Text #FFFFFF

**Icons:**
- Size: 20px x 20px
- Color: #626262 (default)
- Color: #25617C (active/focus)
- Position: Left-aligned, 12px from field edge

---

### 1.2 Accessibility Standards (WCAG 2.1 AA)

**Required Attributes:**
- All inputs must have associated `<label>` elements
- Use `for` attribute to link label to input ID
- Include `aria-required="true"` on required fields
- Include `aria-invalid="true"` when validation fails
- Include `aria-describedby` pointing to error message ID

**Keyboard Navigation:**
- Tab order must be logical (top to bottom, left to right)
- All interactive elements must be keyboard accessible
- Focus indicator must be visible (2px outline, high contrast)
- Enter key submits form from any input field

**Screen Reader Support:**
- Use `aria-label` or `aria-labelledby` on all inputs
- Announce validation errors immediately with `role="alert"`
- Provide helpful error messages with `aria-live="polite"`
- Use `fieldset` and `legend` for grouped fields

**Color Contrast:**
- All text must meet 4.5:1 contrast ratio
- Error messages must be conveyed beyond color alone (use icons + text)
- Focus indicators must meet 3:1 contrast ratio

**Example Accessible Input:**

```html
<div class="form-field">
  <label for="email" class="form-label">
    Email Address <span aria-label="required">*</span>
  </label>
  <input
    type="email"
    id="email"
    name="email"
    class="form-input"
    aria-required="true"
    aria-invalid="false"
    aria-describedby="email-helper email-error"
    placeholder="you@company.com"
  />
  <span id="email-helper" class="form-helper">
    We'll send confirmation to this address
  </span>
  <span id="email-error" class="form-error" role="alert" aria-live="polite" style="display:none;">
    Please enter a valid email address
  </span>
</div>
```

---

### 1.3 Validation Standards

**Validation Timing:**
- **On blur**: Validate when user leaves field (immediate feedback)
- **On input**: Clear errors as user corrects (positive reinforcement)
- **On submit**: Final validation before form submission

**Validation Indicators:**
- **Valid state**: Green checkmark icon, green border
- **Invalid state**: Red X icon, red border, error message below field
- **Neutral state**: Gray border, no icon

**Error Message Placement:**
- Always below the field in question
- Never use tooltips or modals for errors
- Group multiple errors at top of form (summary)

**Validation Order:**
1. Required field check (is field empty?)
2. Format validation (correct pattern?)
3. Business rule validation (within acceptable range?)
4. Server-side validation (duplicate entry? available?)

**Example Validation States:**

```css
/* Default state */
.form-input {
  border: 1px solid #D1D5DB;
}

/* Focus state */
.form-input:focus {
  border: 2px solid #25617C;
  outline: none;
}

/* Valid state */
.form-input.valid {
  border: 2px solid #10B981;
  background-image: url('checkmark-icon.svg');
  background-position: right 12px center;
  background-repeat: no-repeat;
}

/* Invalid state */
.form-input.invalid {
  border: 2px solid #DC2626;
  background-image: url('x-icon.svg');
  background-position: right 12px center;
  background-repeat: no-repeat;
}
```

---

### 1.4 Auto-Save & Resume Functionality

**Save Triggers:**
- Auto-save after each multi-step form step completion
- Auto-save every 30 seconds while user is typing
- Save on page blur (user switches tabs)

**Storage Method:**
- Store form data in `sessionStorage` (client-side, temporary)
- Send encrypted form data to server with unique resume token
- Token expires after 7 days

**Resume Process:**
1. User receives email with resume link: `https://nwestco.com/forms/resume?token=abc123`
2. Page loads, validates token with server
3. If valid, retrieve form data and populate fields
4. Display message: "Welcome back! Your progress has been restored."
5. User completes remaining fields and submits

**Privacy & Security:**
- Encrypt form data before storing on server
- Do not store sensitive data (credit cards, SSNs)
- Token must be single-use or time-limited
- Allow user to delete saved progress

**Example Auto-Save Implementation:**

```javascript
// Auto-save every 30 seconds
let autoSaveTimer;
document.querySelectorAll('.form-input').forEach(input => {
  input.addEventListener('input', () => {
    clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(saveFormProgress, 30000);
  });
});

// Save on step completion
document.querySelector('#step1-next').addEventListener('click', () => {
  saveFormProgress();
});

function saveFormProgress() {
  const formData = new FormData(document.querySelector('form'));
  const data = Object.fromEntries(formData.entries());

  // Save to sessionStorage
  sessionStorage.setItem('formProgress', JSON.stringify(data));

  // Send to server for resume link
  fetch('/api/forms/save-progress', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      formType: 'quote_request',
      email: data.email,
      progress: data
    })
  }).then(response => response.json())
    .then(result => {
      if (result.success) {
        console.log('Progress saved. Resume token:', result.token);
      }
    });
}
```

---

### 1.5 Analytics Event Tracking

**Required Events for ALL Forms:**

1. **form_start**: User focuses on first input field
2. **form_step_complete**: User completes each step (multi-step forms)
3. **form_field_error**: User triggers validation error
4. **form_abandon**: User exits page without submitting
5. **form_submit**: User clicks submit button
6. **form_submit_success**: Form successfully submitted to server
7. **form_submit_error**: Server returns error on submission

**Event Data to Capture:**

```javascript
{
  event: 'form_start',
  form_type: 'quote_request',
  form_name: 'Quote Request Form',
  page_url: window.location.href,
  timestamp: new Date().toISOString(),
  user_id: getCookie('user_id'), // if available
  session_id: getSessionId()
}
```

**Tracking Implementation:**

```javascript
// Form start tracking
document.querySelector('form').addEventListener('focusin', function(e) {
  if (!this.dataset.formStarted) {
    gtag('event', 'form_start', {
      form_type: this.dataset.formType,
      form_name: this.dataset.formName
    });
    this.dataset.formStarted = 'true';
  }
}, { once: true });

// Field error tracking
document.querySelectorAll('.form-input').forEach(input => {
  input.addEventListener('invalid', (e) => {
    gtag('event', 'form_field_error', {
      form_type: e.target.form.dataset.formType,
      field_name: e.target.name,
      error_message: e.target.validationMessage
    });
  });
});

// Form submission tracking
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  gtag('event', 'form_submit', {
    form_type: this.dataset.formType
  });

  // AJAX submission
  fetch(this.action, {
    method: 'POST',
    body: new FormData(this)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      gtag('event', 'form_submit_success', {
        form_type: this.dataset.formType,
        lead_id: data.lead_id
      });
      window.location.href = data.redirect_url;
    } else {
      gtag('event', 'form_submit_error', {
        form_type: this.dataset.formType,
        error_message: data.error
      });
    }
  });
});
```

---

### 1.6 Progressive Enhancement Strategy

**Core Principle:** Forms must work WITHOUT JavaScript

**Implementation:**
- Use native HTML5 validation attributes (`required`, `pattern`, `type`)
- Provide `<noscript>` fallback messages
- Server-side validation is MANDATORY (never trust client-side alone)
- Forms submit via standard POST request (not AJAX-only)
- After server-side validation, redirect to confirmation page

**Enhanced Experience (with JavaScript):**
- Inline real-time validation
- Progress indicators
- Auto-save functionality
- Multi-step form UI
- AJAX submission (no page reload)

**Example Progressive Enhancement:**

```html
<!-- Works without JS -->
<form action="/api/forms/quote-request" method="POST">
  <input type="email" name="email" required />
  <button type="submit">Submit</button>
</form>

<!-- Enhanced with JS -->
<script>
  // Add inline validation
  document.querySelector('input[type="email"]').addEventListener('blur', validateEmail);

  // Add AJAX submission
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    // AJAX logic here
  });
</script>

<noscript>
  <p style="color: #DC2626; padding: 16px; background: #FEE2E2; border-radius: 6px;">
    JavaScript is disabled. This form will still work, but some features like
    inline validation and auto-save will not be available.
  </p>
</noscript>
```

---

## 2. Emergency Service Form

### 2.1 Form Overview

**Purpose:** Capture emergency service requests for immediate dispatch

**User Context:**
- Equipment failure causing downtime
- Losing revenue every minute
- High stress, need immediate help
- May be on mobile at job site

**Design Priority:**
- Absolute minimum fields (reduce friction)
- Large, obvious submit button (red, urgent)
- Alternative: One-click phone number (even easier)
- Clear response time expectation ("10-minute callback")

**Expected Completion Time:** 30-45 seconds

---

### 2.2 Field Specifications

#### Field 1: Name
- **Label:** "Your Name"
- **Type:** `text`
- **Required:** Yes
- **Placeholder:** "John Smith"
- **Validation:** Minimum 2 characters, no numbers
- **Error Message:** "Please enter your name"
- **Max Length:** 100 characters
- **Auto-capitalize:** Yes
- **Auto-complete:** `name`

#### Field 2: Phone Number
- **Label:** "Phone Number"
- **Type:** `tel`
- **Required:** Yes
- **Placeholder:** "(555) 123-4567"
- **Validation:** 10 digits (US format)
- **Format:** Auto-format as user types: (XXX) XXX-XXXX
- **Error Message:** "Please enter a 10-digit phone number"
- **Helper Text:** "We'll call you within 10 minutes"
- **Auto-complete:** `tel`

#### Field 3: Location (City, State)
- **Label:** "Location"
- **Type:** Two fields: `text` (city) + `select` (state)
- **Required:** Yes
- **City Placeholder:** "Spokane"
- **City Validation:** Minimum 2 characters
- **State Options:** Dropdown with 6 Western US states:
  - Washington
  - Oregon
  - Idaho
  - Montana
  - California
  - Arkansas
- **Error Message:** "Please enter your city and state"
- **Auto-complete:** `address-level2` (city), `address-level1` (state)

#### Field 4: Equipment Issue
- **Label:** "What's the problem?"
- **Type:** `textarea`
- **Required:** Yes
- **Placeholder:** "Fuel pump not working, car wash tunnel stopped, leak detected..."
- **Validation:** Minimum 10 characters
- **Error Message:** "Please briefly describe the issue (at least 10 characters)"
- **Max Length:** 500 characters
- **Rows:** 3 (desktop), 4 (mobile)
- **Character Counter:** "X/500 characters"

---

### 2.3 Form Layout

**Desktop Layout:**

```
┌────────────────────────────────────────────┐
│  🚨 Emergency Service - 24/7               │
│  We'll dispatch a technician immediately  │
├────────────────────────────────────────────┤
│                                             │
│  Your Name *                                │
│  ┌───────────────────────────────────────┐ │
│  │ John Smith                             │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Phone Number *                             │
│  ┌───────────────────────────────────────┐ │
│  │ (555) 123-4567                         │ │
│  └───────────────────────────────────────┘ │
│  We'll call you within 10 minutes          │
│                                             │
│  Location *                                 │
│  ┌──────────────────┐  ┌─────────────────┐│
│  │ City             │  │ State ▼         ││
│  └──────────────────┘  └─────────────────┘│
│                                             │
│  What's the problem? *                      │
│  ┌───────────────────────────────────────┐ │
│  │ Fuel pump not working...               │ │
│  │                                         │ │
│  │                                         │ │
│  └───────────────────────────────────────┘ │
│  45/500 characters                          │
│                                             │
│  [REQUEST EMERGENCY SERVICE]               │
│  Full-width red button                     │
│                                             │
│  Or call now: 800-775-1892 📞               │
│  (Click-to-call)                            │
│                                             │
│  🔒 Your information is secure             │
└────────────────────────────────────────────┘
```

**Mobile Layout:**

Same layout, but:
- Full-width container (100% viewport width)
- Padding: 16px (instead of 32px)
- City and State fields stack vertically (not side-by-side)
- Touch targets: 56px height
- Submit button: 56px height, sticky bottom (always visible)

---

### 2.4 Submit Button

**Text:** "REQUEST EMERGENCY SERVICE"
**Color:** #DC2626 (Red)
**Text Color:** #FFFFFF (White)
**Height:** 48px (desktop), 56px (mobile)
**Width:** 100% (full-width)
**Border Radius:** 6px
**Font:** Open Sans, 16px, 600 weight
**Hover State:** Darker red (#B91C1C)
**Active State:** Even darker red (#991B1B)
**Disabled State:** Gray (#9CA3AF), cursor not-allowed
**Loading State:** "Submitting..." with spinner icon

**Alternative CTA:**
- Text: "Or call now: 800-775-1892"
- Style: Centered, green phone icon, click-to-call on mobile
- Placement: Directly below submit button, 16px spacing

---

### 2.5 Form Behavior

**On Page Load:**
- Auto-focus on Name field (reduce clicks)
- Display "Emergency Service" header in red
- Show urgency messaging: "We'll dispatch immediately"

**On Field Interaction:**
- Phone number: Auto-format as user types
- Textarea: Display character counter
- All fields: Show green checkmark when valid

**On Submit Click:**
1. Validate all fields (client-side)
2. If invalid, highlight errors, scroll to first error
3. If valid, disable submit button, show loading spinner
4. Submit via AJAX to `/api/forms/emergency-service`
5. On success: Redirect to confirmation page
6. On error: Display error message, re-enable submit button

**On Form Abandonment:**
- Detect exit intent (cursor moves to close window/tab)
- Display modal: "Need immediate help? Call 800-775-1892"
- Provide phone number as fastest alternative

---

### 2.6 Server-Side Processing

**API Endpoint:** `POST /api/forms/emergency-service`

**Request Payload:**

```json
{
  "form_type": "emergency_service",
  "name": "John Smith",
  "phone": "5551234567",
  "city": "Spokane",
  "state": "WA",
  "issue_description": "Fuel pump not working...",
  "timestamp": "2025-11-26T10:30:00Z",
  "page_url": "https://nwestco.com",
  "user_agent": "Mozilla/5.0...",
  "ip_address": "192.168.1.1"
}
```

**Server Actions:**
1. Validate all fields (server-side validation is mandatory)
2. Identify nearest branch based on city/state
3. Create lead record in CRM with Priority = P1 (Critical)
4. Send SMS alert to on-call technician
5. Send email alert to branch manager
6. Send confirmation email to customer
7. Return success response with lead ID

**Success Response:**

```json
{
  "success": true,
  "lead_id": "ER-2025-001234",
  "assigned_branch": "Spokane, WA",
  "redirect_url": "/thank-you/emergency-service?id=ER-2025-001234"
}
```

**Error Response:**

```json
{
  "success": false,
  "error": "Unable to submit request. Please call 800-775-1892 for immediate assistance.",
  "error_code": "SERVER_ERROR"
}
```

---

### 2.7 Confirmation Page

**URL:** `/thank-you/emergency-service?id=ER-2025-001234`

**Content:**

```
┌────────────────────────────────────────────┐
│  ✅ Emergency Service Request Received     │
├────────────────────────────────────────────┤
│                                             │
│  We're Dispatching a Technician Immediately│
│                                             │
│  What Happens Next:                         │
│  1. ☎️ Dispatcher calls you in 10 minutes   │
│  2. 🚗 Technician dispatched to your location│
│  3. 🔧 Arrival within 2-4 hours             │
│                                             │
│  Your Request Details:                      │
│  Request ID: #ER-2025-001234                │
│  Name: John Smith                           │
│  Phone: (555) 123-4567                      │
│  Location: Spokane, WA                      │
│  Issue: Fuel pump not working               │
│                                             │
│  Assigned Branch: Spokane, WA               │
│  Emergency Hotline: 800-775-1892            │
│                                             │
│  [Photo] Meet Sarah, your dispatcher        │
│          Sarah Johnson, Spokane Branch      │
│          Direct: (509) 555-1234             │
│                                             │
│  Need to update your request?               │
│  Call: 800-775-1892                         │
│  Email: emergency@nwestco.com               │
│                                             │
└────────────────────────────────────────────┘
```

---

## 3. Quote Request Form

### 3.1 Form Overview

**Purpose:** Capture qualified leads for new projects, renovations, equipment purchases

**User Context:**
- Researching options, comparing vendors
- Timeline: 1 week to 6+ months
- Need detailed information to make decision
- Willing to invest 2-3 minutes for quality quote

**Design Priority:**
- Multi-step form (reduce intimidation)
- Progressive qualification (route to right team)
- Capture email early (enable save-and-resume)
- Build trust throughout (branch assignment, testimonials)

**Expected Completion Time:** 2-3 minutes (desktop), 3-4 minutes (mobile)

---

### 3.2 Multi-Step Structure

**Step 1: Your Project (30-45 seconds)**
- Service type selection
- Timeline selection
- Email capture

**Step 2: Location & Contact (30-45 seconds)**
- City and state
- Name
- Phone number
- Company name (optional)

**Step 3: Project Details (60-90 seconds)**
- Description (textarea)
- File upload (optional)
- Budget range (optional)
- Referral source (optional)

---

### 3.3 Step 1: Your Project

#### Field 1.1: Service Type
- **Label:** "What type of project or service do you need?"
- **Type:** `select` dropdown
- **Required:** Yes
- **Options:**
  - "Fuel Systems - Retail Fuel Station"
  - "Fuel Systems - Commercial/Fleet"
  - "Fuel Systems - Aviation"
  - "Fuel Systems - Industrial"
  - "Car Wash - Tunnel Wash"
  - "Car Wash - In-Bay Automatic"
  - "Car Wash - Self-Serve"
  - "Environmental - Testing/Compliance"
  - "Other (please describe in next step)"
- **Placeholder:** "▼ Select service type..."
- **Error Message:** "Please select the type of service you need"
- **Helper Text:** None

#### Field 1.2: Timeline
- **Label:** "What's your timeline?"
- **Type:** `select` dropdown
- **Required:** Yes
- **Options:**
  - "Emergency (need service now)"
  - "Within 1 week"
  - "Within 1 month"
  - "Within 3 months"
  - "Planning stage (6+ months)"
  - "Not sure"
- **Placeholder:** "▼ Select timeline..."
- **Error Message:** "Please select your project timeline"
- **Helper Text:** None

#### Field 1.3: Email Address
- **Label:** "Your email (to save your progress)"
- **Type:** `email`
- **Required:** Yes
- **Placeholder:** "you@company.com"
- **Validation:** Valid email format (RFC 5322)
- **Error Message:** "Please enter a valid email address"
- **Helper Text:** "🔒 We'll never share your information"
- **Auto-complete:** `email`

**Step 1 Submit Button:**
- **Text:** "NEXT: LOCATION & CONTACT →"
- **Color:** #25617C (Blue)
- **Actions on Click:**
  1. Validate all Step 1 fields
  2. If valid: Save progress, advance to Step 2
  3. If invalid: Highlight errors, focus first error field
  4. Send auto-save email with resume link

**Progress Indicator:**
- **Visual:** Progress bar at bottom of form
- **Display:** "Step 1 of 3" text + 33% filled bar
- **Color:** Blue (#25617C) for filled, gray (#E5E7EB) for unfilled

---

### 3.4 Step 2: Location & Contact

#### Field 2.1: City
- **Label:** "Where is your location?"
- **Type:** `text`
- **Required:** Yes
- **Placeholder:** "Spokane"
- **Validation:** Minimum 2 characters
- **Error Message:** "Please enter your city"
- **Auto-complete:** `address-level2`

#### Field 2.2: State
- **Label:** (Combined with city, "City, State")
- **Type:** `select` dropdown
- **Required:** Yes
- **Options:**
  - "Washington"
  - "Oregon"
  - "Idaho"
  - "Montana"
  - "California"
  - "Arkansas"
- **Placeholder:** "State ▼"
- **Error Message:** "Please select your state"
- **Auto-complete:** `address-level1`

**After City + State Entered:**
- **Display Branch Assignment:**
  - "✓ Your project will be handled by our [Spokane] branch"
  - Link: "📍 View branch details" (opens branch page in new tab)
  - Trust signal: Builds confidence that local team will handle

#### Field 2.3: Name
- **Label:** "Your name"
- **Type:** `text`
- **Required:** Yes
- **Placeholder:** "John Smith"
- **Validation:** Minimum 2 characters
- **Error Message:** "Please enter your name"
- **Max Length:** 100 characters
- **Auto-complete:** `name`

#### Field 2.4: Phone Number
- **Label:** "Your phone number"
- **Type:** `tel`
- **Required:** Yes
- **Placeholder:** "(555) 123-4567"
- **Format:** Auto-format as (XXX) XXX-XXXX
- **Validation:** 10 digits
- **Error Message:** "Please enter a 10-digit phone number"
- **Helper Text:** "We'll call you within 4 hours"
- **Auto-complete:** `tel`

#### Field 2.5: Company Name
- **Label:** "Company name (optional)"
- **Type:** `text`
- **Required:** No
- **Placeholder:** "ABC Gas Stations"
- **Max Length:** 200 characters
- **Auto-complete:** `organization`

**Step 2 Actions:**
- **Back Button:** "← Back" (returns to Step 1, preserves data)
- **Submit Button:** "NEXT: PROJECT DETAILS →"
- **Progress Indicator:** "Step 2 of 3" + 66% filled bar

---

### 3.5 Step 3: Project Details

#### Field 3.1: Description
- **Label:** "Tell us about your project"
- **Type:** `textarea`
- **Required:** Yes
- **Placeholder:** "We're planning to upgrade 4 fuel dispensers at our station in Spokane. Looking for a turn-key solution including installation and service..."
- **Validation:** Minimum 20 characters
- **Error Message:** "Please provide a brief description (at least 20 characters)"
- **Max Length:** 1,000 characters
- **Rows:** 5 (desktop), 6 (mobile)
- **Character Counter:** "X/1000 characters" (display below field)

#### Field 3.2: File Upload
- **Label:** "Upload photos or documents (optional)"
- **Type:** `file` (multiple allowed)
- **Required:** No
- **Accepted Formats:** .jpg, .jpeg, .png, .pdf, .doc, .docx
- **Max File Size:** 10MB per file
- **Max Total Size:** 25MB all files
- **Display:** Drag-and-drop area + "Browse Files" button
- **File Preview:** Show thumbnails with filename and remove button
- **Error Messages:**
  - "File too large. Maximum size is 10MB per file"
  - "Total file size exceeds 25MB limit"
  - "File type not supported. Please upload .jpg, .png, .pdf, or .doc files"

#### Field 3.3: Budget Range
- **Label:** "Budget range (optional)"
- **Type:** `select` dropdown
- **Required:** No
- **Options:**
  - "Under $10,000"
  - "$10,000 - $50,000"
  - "$50,000 - $100,000"
  - "$100,000 - $250,000"
  - "$250,000+"
  - "Prefer not to say"
- **Placeholder:** "▼ Select budget range (optional)"
- **Helper Text:** "This helps us provide an accurate quote"

#### Field 3.4: How Did You Hear About Us
- **Label:** "How did you hear about us? (optional)"
- **Type:** `select` dropdown
- **Required:** No
- **Options:**
  - "Google search"
  - "Referral from friend/colleague"
  - "Existing customer"
  - "Social media"
  - "Industry event"
  - "Other"
- **Placeholder:** "▼ Select (optional)"

#### Field 3.5: Privacy Policy Agreement
- **Type:** `checkbox`
- **Required:** Yes
- **Label:** "I agree to the privacy policy"
- **Link:** "privacy policy" hyperlinks to `/privacy-policy`
- **Error Message:** "Please agree to the privacy policy to continue"

**Step 3 Actions:**
- **Back Button:** "← Back" (returns to Step 2, preserves data)
- **Submit Button:** "SUBMIT REQUEST →"
- **Submit Button Color:** #709944 (Green)
- **Security Indicator:** "Secure form 🔒" text below button
- **Progress Indicator:** "Step 3 of 3" + 100% filled bar

---

### 3.6 Form Layout (All Steps)

**Desktop Layout (600px max width):**
- Single column
- Field spacing: 24px between fields
- Section spacing: 32px between sections
- Progress bar: Sticky at top of form OR at bottom

**Mobile Layout (100% width):**
- Single column (always)
- Field spacing: 16px between fields
- Touch targets: 56px minimum height
- Submit button: Sticky at bottom of viewport (always accessible)

**Step Navigation:**
- Step indicator: "Step 1 of 3" centered at top
- Progress bar: Visual indicator below step text
- Back button: Text link, left-aligned
- Next/Submit button: Full-width button, prominent

---

### 3.7 Server-Side Processing

**API Endpoint:** `POST /api/forms/quote-request`

**Request Payload:**

```json
{
  "form_type": "quote_request",
  "step1": {
    "service_type": "Fuel Systems - Retail Fuel Station",
    "timeline": "Within 1 month",
    "email": "john@example.com"
  },
  "step2": {
    "city": "Spokane",
    "state": "WA",
    "name": "John Smith",
    "phone": "5551234567",
    "company": "ABC Gas Stations"
  },
  "step3": {
    "description": "We're planning to upgrade 4 fuel dispensers...",
    "uploaded_files": ["file1.jpg", "file2.pdf"],
    "budget_range": "$50,000 - $100,000",
    "referral_source": "Google search",
    "privacy_agreed": true
  },
  "metadata": {
    "timestamp": "2025-11-26T10:30:00Z",
    "page_url": "https://nwestco.com",
    "user_agent": "Mozilla/5.0...",
    "ip_address": "192.168.1.1"
  }
}
```

**Server Actions:**
1. Validate all fields (server-side validation mandatory)
2. Upload files to secure storage
3. Identify nearest branch based on city/state
4. Calculate priority based on timeline (Emergency = P1, Within 1 week = P2, etc.)
5. Create lead record in CRM with all captured data
6. Assign lead to branch sales team
7. Send email notification to branch
8. Send confirmation email to customer
9. Trigger marketing automation workflow
10. Return success response with lead ID

**Success Response:**

```json
{
  "success": true,
  "lead_id": "QR-2025-005678",
  "assigned_branch": "Spokane, WA",
  "specialist_name": "Tom Wilson",
  "specialist_phone": "(509) 555-1234",
  "specialist_email": "tom.wilson@nwestco.com",
  "redirect_url": "/thank-you/quote-request?id=QR-2025-005678"
}
```

---

### 3.8 Confirmation Page

**URL:** `/thank-you/quote-request?id=QR-2025-005678`

**Content:** (See Conversion Strategy document, Section 9.2)

Key elements:
- Confirmation: "✓ Quote Request Received - Thank You!"
- Response commitment: "We'll Contact You Within 4 Hours"
- Process steps: 4-step "What Happens Next"
- Specialist introduction: Photo, name, direct contact
- Similar projects: 3 case study cards
- Downloadable resources: Guides, checklists

---

## 4. General Contact Form

### 4.1 Form Overview

**Purpose:** Handle general inquiries, questions, and non-urgent requests

**User Context:**
- Has a question or general inquiry
- Not ready for quote or service request
- May be seeking information, support, or clarification
- Lower intent than emergency or quote requests

**Design Priority:**
- Simple, straightforward (4 required fields)
- Quick completion (under 60 seconds)
- Clear response time expectation (48 hours)

**Expected Completion Time:** 45-60 seconds

---

### 4.2 Field Specifications

#### Field 1: Name
- **Label:** "Your Name"
- **Type:** `text`
- **Required:** Yes
- **Placeholder:** "John Smith"
- **Validation:** Minimum 2 characters
- **Error Message:** "Please enter your name"
- **Max Length:** 100 characters
- **Auto-complete:** `name`

#### Field 2: Email Address
- **Label:** "Email Address"
- **Type:** `email`
- **Required:** Yes
- **Placeholder:** "you@company.com"
- **Validation:** Valid email format
- **Error Message:** "Please enter a valid email address"
- **Auto-complete:** `email`

#### Field 3: Phone Number
- **Label:** "Phone Number (optional)"
- **Type:** `tel`
- **Required:** No
- **Placeholder:** "(555) 123-4567"
- **Format:** Auto-format as (XXX) XXX-XXXX
- **Validation:** If provided, must be 10 digits
- **Error Message:** "Please enter a valid 10-digit phone number"
- **Auto-complete:** `tel`

#### Field 4: Topic
- **Label:** "What can we help you with?"
- **Type:** `select` dropdown
- **Required:** Yes
- **Options:**
  - "General Question"
  - "Service Information"
  - "Quote Request"
  - "Billing/Invoicing"
  - "Training Programs"
  - "Career Opportunities"
  - "Other"
- **Placeholder:** "▼ Select topic..."
- **Error Message:** "Please select a topic"

#### Field 5: Message
- **Label:** "Your Message"
- **Type:** `textarea`
- **Required:** Yes
- **Placeholder:** "Tell us how we can help..."
- **Validation:** Minimum 10 characters
- **Error Message:** "Please enter a message (at least 10 characters)"
- **Max Length:** 1,000 characters
- **Rows:** 5 (desktop), 6 (mobile)
- **Character Counter:** "X/1000 characters"

---

### 4.3 Form Layout

```
┌────────────────────────────────────────────┐
│  Contact Us                                 │
│  We'll respond within 48 hours             │
├────────────────────────────────────────────┤
│                                             │
│  Your Name *                                │
│  ┌───────────────────────────────────────┐ │
│  │ John Smith                             │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Email Address *                            │
│  ┌───────────────────────────────────────┐ │
│  │ you@company.com                        │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Phone Number (optional)                    │
│  ┌───────────────────────────────────────┐ │
│  │ (555) 123-4567                         │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  What can we help you with? *               │
│  ┌───────────────────────────────────────┐ │
│  │ ▼ Select topic...                     │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  Your Message *                             │
│  ┌───────────────────────────────────────┐ │
│  │ Tell us how we can help...             │ │
│  │                                         │ │
│  │                                         │ │
│  │                                         │ │
│  │                                         │ │
│  └───────────────────────────────────────┘ │
│  25/1000 characters                         │
│                                             │
│  [SEND MESSAGE]                             │
│  Full-width blue button                    │
│                                             │
│  Or call: 800-775-1892 📞                   │
│                                             │
│  🔒 Your information is secure             │
└────────────────────────────────────────────┘
```

---

### 4.4 Submit Button

**Text:** "SEND MESSAGE"
**Color:** #25617C (Blue)
**Height:** 48px (desktop), 56px (mobile)
**Width:** 100% (full-width)

**Alternative Contact:**
- "Or call: 800-775-1892"
- Centered below button, click-to-call on mobile

---

### 4.5 Server-Side Processing

**API Endpoint:** `POST /api/forms/general-contact`

**Request Payload:**

```json
{
  "form_type": "general_contact",
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "5551234567",
  "topic": "Service Information",
  "message": "I have a question about your preventative maintenance programs...",
  "timestamp": "2025-11-26T10:30:00Z",
  "page_url": "https://nwestco.com/contact",
  "user_agent": "Mozilla/5.0...",
  "ip_address": "192.168.1.1"
}
```

**Server Actions:**
1. Validate fields
2. Create inquiry record in CRM
3. Route to appropriate department based on topic
4. Send email notification to department
5. Send confirmation email to customer
6. Return success response

**Success Response:**

```json
{
  "success": true,
  "inquiry_id": "INQ-2025-012345",
  "redirect_url": "/thank-you/general-contact?id=INQ-2025-012345"
}
```

---

## 5. Career Application Form

### 5.1 Form Overview

**Purpose:** Capture job applications for open positions

**User Context:**
- Job seeker viewing job listing
- May be on mobile (many job seekers search on phones)
- Needs to upload resume (file upload critical)
- Timeline: 1-week application review

**Design Priority:**
- Mobile-friendly (large touch targets)
- Simple resume upload (one-click)
- Minimal required fields (name, email, phone, resume)
- Optional fields for additional context

**Expected Completion Time:** 3-5 minutes (desktop), 5-7 minutes (mobile)

---

### 5.2 Multi-Step Structure

**Step 1: Basic Information**
- Position selection
- Name
- Email
- Phone

**Step 2: Application Details**
- Resume upload
- Cover letter (optional)
- LinkedIn profile (optional)
- Availability

**Step 3: Additional Information (Optional)**
- How did you hear about this position
- Salary expectations (optional)
- Willing to relocate (if applicable)

---

### 5.3 Step 1: Basic Information

#### Field 1.1: Position
- **Label:** "Position applying for"
- **Type:** `select` dropdown OR pre-filled (if coming from job listing)
- **Required:** Yes
- **Options:** Dynamically populated from ATS/job listings
  - "Field Service Technician - Spokane, WA"
  - "Sales Representative - Portland, OR"
  - "Project Manager - Kalispell, MT"
  - etc.
- **Placeholder:** "▼ Select position..."
- **Error Message:** "Please select the position you're applying for"

#### Field 1.2: Name
- **Label:** "Full Name"
- **Type:** `text`
- **Required:** Yes
- **Placeholder:** "John Smith"
- **Validation:** Minimum 2 characters
- **Error Message:** "Please enter your full name"
- **Auto-complete:** `name`

#### Field 1.3: Email Address
- **Label:** "Email Address"
- **Type:** `email`
- **Required:** Yes
- **Placeholder:** "you@email.com"
- **Validation:** Valid email format
- **Error Message:** "Please enter a valid email address"
- **Helper Text:** "We'll send application status updates to this email"
- **Auto-complete:** `email`

#### Field 1.4: Phone Number
- **Label:** "Phone Number"
- **Type:** `tel`
- **Required:** Yes
- **Placeholder:** "(555) 123-4567"
- **Format:** Auto-format as (XXX) XXX-XXXX
- **Validation:** 10 digits
- **Error Message:** "Please enter a 10-digit phone number"
- **Auto-complete:** `tel`

**Step 1 Submit Button:** "NEXT: UPLOAD RESUME →"

---

### 5.4 Step 2: Application Details

#### Field 2.1: Resume Upload
- **Label:** "Upload Resume"
- **Type:** `file`
- **Required:** Yes
- **Accepted Formats:** .pdf, .doc, .docx
- **Max File Size:** 5MB
- **Display:** Large drop zone + "Browse Files" button
- **File Preview:** Show filename, file size, remove button
- **Error Messages:**
  - "Resume is required"
  - "File too large. Maximum size is 5MB"
  - "File type not supported. Please upload .pdf, .doc, or .docx"

#### Field 2.2: Cover Letter
- **Label:** "Cover Letter (optional)"
- **Type:** `textarea` OR `file` upload
- **Required:** No
- **If textarea:**
  - Placeholder: "Tell us why you're interested in this position..."
  - Max Length: 2,000 characters
  - Rows: 8
- **If file upload:**
  - Accepted formats: .pdf, .doc, .docx
  - Max size: 5MB

#### Field 2.3: LinkedIn Profile
- **Label:** "LinkedIn Profile (optional)"
- **Type:** `url`
- **Required:** No
- **Placeholder:** "https://linkedin.com/in/yourprofile"
- **Validation:** Valid URL format
- **Error Message:** "Please enter a valid URL"

#### Field 2.4: Availability
- **Label:** "When are you available to start?"
- **Type:** `select` dropdown
- **Required:** Yes
- **Options:**
  - "Immediately"
  - "Within 2 weeks"
  - "Within 1 month"
  - "2-3 months"
  - "Not sure"
- **Placeholder:** "▼ Select availability..."
- **Error Message:** "Please select your availability"

**Step 2 Actions:**
- **Back Button:** "← Back"
- **Submit Button:** "NEXT: ADDITIONAL INFO →" (if Step 3 enabled)
- **OR Submit Button:** "SUBMIT APPLICATION →" (if Step 3 skipped)

---

### 5.5 Step 3: Additional Information (Optional)

#### Field 3.1: How Did You Hear About This Position
- **Label:** "How did you hear about this position?"
- **Type:** `select` dropdown
- **Required:** No
- **Options:**
  - "Indeed"
  - "LinkedIn"
  - "Google search"
  - "Referral from employee"
  - "Referral from friend"
  - "Company website"
  - "Other"

#### Field 3.2: Salary Expectations
- **Label:** "Salary expectations (optional)"
- **Type:** `text` OR `select` ranges
- **Required:** No
- **Placeholder:** "$60,000 - $70,000" OR dropdown ranges
- **Helper Text:** "This helps us ensure alignment with your expectations"

#### Field 3.3: Willing to Relocate
- **Label:** "Are you willing to relocate if required?"
- **Type:** `radio` buttons
- **Required:** No
- **Options:**
  - "Yes"
  - "No"
  - "Depends on location"

#### Field 3.4: Additional Comments
- **Label:** "Anything else you'd like us to know? (optional)"
- **Type:** `textarea`
- **Required:** No
- **Placeholder:** "Additional skills, certifications, or information..."
- **Max Length:** 1,000 characters
- **Rows:** 4

**Step 3 Submit Button:** "SUBMIT APPLICATION →" (Green)

---

### 5.6 Server-Side Processing

**API Endpoint:** `POST /api/forms/career-application`

**Request Payload (multipart/form-data for file uploads):**

```json
{
  "form_type": "career_application",
  "position_id": "JOB-2025-001",
  "position_title": "Field Service Technician - Spokane, WA",
  "name": "John Smith",
  "email": "john@email.com",
  "phone": "5551234567",
  "resume_file": [file object],
  "cover_letter": "I'm excited to apply...",
  "linkedin_profile": "https://linkedin.com/in/johnsmith",
  "availability": "Within 1 month",
  "referral_source": "LinkedIn",
  "salary_expectations": "$60,000 - $70,000",
  "willing_to_relocate": "Yes",
  "additional_comments": "Certified in...",
  "timestamp": "2025-11-26T10:30:00Z"
}
```

**Server Actions:**
1. Validate fields
2. Upload resume and cover letter to secure storage
3. Create applicant record in ATS (Applicant Tracking System)
4. Send notification to HR/recruiting team
5. Send confirmation email to applicant
6. Return success response

**Success Response:**

```json
{
  "success": true,
  "application_id": "APP-2025-001122",
  "position_title": "Field Service Technician - Spokane, WA",
  "redirect_url": "/thank-you/career-application?id=APP-2025-001122"
}
```

---

## 6. Training Registration Form

### 6.1 Form Overview

**Purpose:** Capture registrations for training courses

**User Context:**
- Interested in specific training course
- Needs to register self or employees
- May need to register multiple attendees
- Timeline: Immediate registration confirmation

**Design Priority:**
- Course details prominent (date, time, location)
- Simple attendee information
- Payment information (if paid courses)
- Calendar export option after registration

**Expected Completion Time:** 2-3 minutes

---

### 6.2 Multi-Step Structure

**Step 1: Course Selection & Contact**
- Course selection (if not pre-selected)
- Contact name
- Email
- Phone
- Company

**Step 2: Attendee Details**
- Number of attendees
- Attendee names (if multiple)
- Special requirements (dietary, accessibility)

---

### 6.3 Step 1: Course & Contact

#### Field 1.1: Course Selection
- **Label:** "Select Training Course"
- **Type:** `select` dropdown OR pre-filled from course page
- **Required:** Yes
- **Options:** Dynamically populated from training schedule
  - "Fuel Dispenser Basics - April 10-11, Portland"
  - "Advanced Electrical Systems - May 5, Spokane"
  - etc.
- **Display:** Show course date, location, price
- **Error Message:** "Please select a training course"

#### Field 1.2: Contact Name
- **Label:** "Your Name"
- **Type:** `text`
- **Required:** Yes
- **Placeholder:** "John Smith"
- **Validation:** Minimum 2 characters
- **Error Message:** "Please enter your name"

#### Field 1.3: Email Address
- **Label:** "Email Address"
- **Type:** `email`
- **Required:** Yes
- **Placeholder:** "you@company.com"
- **Validation:** Valid email format
- **Error Message:** "Please enter a valid email address"
- **Helper Text:** "Course confirmation will be sent to this email"

#### Field 1.4: Phone Number
- **Label:** "Phone Number"
- **Type:** `tel`
- **Required:** Yes
- **Placeholder:** "(555) 123-4567"
- **Format:** Auto-format
- **Validation:** 10 digits
- **Error Message:** "Please enter a 10-digit phone number"

#### Field 1.5: Company Name
- **Label:** "Company Name"
- **Type:** `text`
- **Required:** Yes
- **Placeholder:** "ABC Gas Stations"
- **Max Length:** 200 characters

**Step 1 Submit Button:** "NEXT: ATTENDEE DETAILS →"

---

### 6.4 Step 2: Attendee Details

#### Field 2.1: Number of Attendees
- **Label:** "How many people will attend?"
- **Type:** `number` OR `select` dropdown
- **Required:** Yes
- **Options:** 1-10 (dropdown) OR numeric input
- **Default:** 1
- **Validation:** Minimum 1, maximum 10
- **Error Message:** "Please enter number of attendees (1-10)"

#### Field 2.2: Attendee Names (Conditional)
- **Label:** "Attendee Names"
- **Type:** Multiple `text` inputs (dynamic, based on number)
- **Required:** Yes if more than 1 attendee
- **Display:**
  - If 1 attendee: Pre-fill with contact name
  - If 2+ attendees: Show multiple name fields
- **Placeholder:** "Attendee 1 Name", "Attendee 2 Name", etc.

#### Field 2.3: Special Requirements
- **Label:** "Special requirements (optional)"
- **Type:** `textarea`
- **Required:** No
- **Placeholder:** "Dietary restrictions, accessibility needs, etc."
- **Max Length:** 500 characters
- **Rows:** 3

#### Field 2.4: Agreement Checkbox
- **Type:** `checkbox`
- **Required:** Yes
- **Label:** "I agree to the training terms and conditions"
- **Link:** "terms and conditions" hyperlinks to terms page
- **Error Message:** "Please agree to the terms and conditions"

**Step 2 Submit Button:** "COMPLETE REGISTRATION →" (Green)

---

### 6.5 Server-Side Processing

**API Endpoint:** `POST /api/forms/training-registration`

**Request Payload:**

```json
{
  "form_type": "training_registration",
  "course_id": "TRN-2025-001",
  "course_title": "Fuel Dispenser Basics",
  "course_date": "2026-04-10",
  "course_location": "Portland Training Center",
  "contact_name": "John Smith",
  "contact_email": "john@company.com",
  "contact_phone": "5551234567",
  "company": "ABC Gas Stations",
  "num_attendees": 2,
  "attendee_names": ["John Smith", "Jane Doe"],
  "special_requirements": "Vegetarian meal for Jane",
  "terms_agreed": true,
  "timestamp": "2025-11-26T10:30:00Z"
}
```

**Server Actions:**
1. Validate fields
2. Check course availability (seats remaining)
3. Create registration record
4. Reserve seats for attendees
5. Send confirmation email with:
   - Course details
   - Calendar invite (.ics file)
   - Pre-course materials (if any)
   - Parking/directions information
6. Send notification to training coordinator
7. Return success response

**Success Response:**

```json
{
  "success": true,
  "registration_id": "REG-2025-009876",
  "course_title": "Fuel Dispenser Basics",
  "course_date": "2026-04-10",
  "num_attendees": 2,
  "redirect_url": "/thank-you/training-registration?id=REG-2025-009876"
}
```

---

## 7. Validation Rules Library

### 7.1 Common Validation Patterns

**Email Address (RFC 5322 Compliant):**

```javascript
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(email);
}
```

**Phone Number (US Format):**

```javascript
function validatePhone(phone) {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');

  // Check if exactly 10 digits
  return cleaned.length === 10;
}

function formatPhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }

  return phone;
}
```

**Name Validation:**

```javascript
function validateName(name) {
  // Minimum 2 characters, no numbers, allow spaces, hyphens, apostrophes
  const regex = /^[a-zA-Z\s\-']{2,100}$/;
  return regex.test(name);
}
```

**URL Validation:**

```javascript
function validateURL(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}
```

**File Size Validation:**

```javascript
function validateFileSize(file, maxSizeMB) {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
}
```

**File Type Validation:**

```javascript
function validateFileType(file, allowedTypes) {
  const extension = file.name.split('.').pop().toLowerCase();
  return allowedTypes.includes(extension);
}

// Example usage:
const allowedResumeTypes = ['pdf', 'doc', 'docx'];
const isValid = validateFileType(file, allowedResumeTypes);
```

---

## 8. Error Message Copy

### 8.1 Error Message Guidelines

**Tone:**
- Friendly, not technical
- Actionable (tell user how to fix)
- Specific (explain what's wrong)
- Never blame the user

**Bad Examples:**
- ❌ "Invalid input"
- ❌ "Error"
- ❌ "Field required"

**Good Examples:**
- ✅ "Please enter a valid email address (e.g., you@company.com)"
- ✅ "Please enter your phone number in this format: (555) 123-4567"
- ✅ "This field is required"

---

### 8.2 Standard Error Messages

| Field Type | Error Message |
|-----------|--------------|
| **Email (empty)** | "Please enter your email address" |
| **Email (invalid)** | "Please enter a valid email address (e.g., you@company.com)" |
| **Phone (empty)** | "Please enter your phone number" |
| **Phone (invalid)** | "Please enter a 10-digit phone number (e.g., 555-123-4567)" |
| **Name (empty)** | "Please enter your name" |
| **Name (too short)** | "Please enter your full name (at least 2 characters)" |
| **Required field** | "This field is required" |
| **Dropdown not selected** | "Please select an option" |
| **Textarea (empty)** | "Please enter a message" |
| **Textarea (too short)** | "Please provide more detail (at least 20 characters)" |
| **File (not selected)** | "Please upload a file" |
| **File (too large)** | "File too large. Maximum size is [X]MB" |
| **File (wrong type)** | "File type not supported. Please upload [allowed types]" |
| **Checkbox (not checked)** | "Please check this box to continue" |
| **Privacy policy** | "Please agree to the privacy policy to continue" |

---

## 9. Success Confirmations

### 9.1 Inline Success Indicators

**Visual Indicators:**
- Green checkmark icon (✓) appears inside input field (right side)
- Border color changes to green (#10B981)
- Optional: Brief animation (scale up checkmark, fade in)

**Implementation:**

```css
.form-input.valid {
  border: 2px solid #10B981;
  background-image: url('data:image/svg+xml;base64,[checkmark-svg]');
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
}
```

---

### 9.2 Form Submission Success

**During Submission:**
- Disable submit button
- Change button text to "Submitting..."
- Show loading spinner inside button
- Disable all form fields (prevent editing)

**On Success:**
- Redirect to thank you page (new URL)
- OR display success message on same page (AJAX)
- If same page:
  - Show green banner: "✅ Thank you! Your request has been submitted."
  - Scroll to top of page
  - Hide form, show confirmation content

**Implementation:**

```javascript
submitButton.addEventListener('click', async (e) => {
  e.preventDefault();

  // Validate form
  if (!validateForm()) {
    return;
  }

  // Disable button, show loading
  submitButton.disabled = true;
  submitButton.innerHTML = '<span class="spinner"></span> Submitting...';

  // Submit form
  try {
    const response = await fetch('/api/forms/quote-request', {
      method: 'POST',
      body: new FormData(form)
    });

    const result = await response.json();

    if (result.success) {
      // Redirect to thank you page
      window.location.href = result.redirect_url;
    } else {
      // Show error message
      showError(result.error);
      submitButton.disabled = false;
      submitButton.innerHTML = 'Submit Request';
    }
  } catch (error) {
    // Network error
    showError('Unable to submit form. Please try again or call 800-775-1892');
    submitButton.disabled = false;
    submitButton.innerHTML = 'Submit Request';
  }
});
```

---

## 10. Routing Logic Specifications

### 10.1 Branch Assignment by Location

**Geographic Routing Table:**

| City, State | Assigned Branch | Branch Phone | Coverage Radius |
|------------|----------------|-------------|----------------|
| Spokane, WA; Coeur d'Alene, ID; Pullman, WA | Spokane, WA | (509) 555-1234 | 150 miles |
| Portland, OR; Salem, OR; Eugene, OR | Portland, OR | (503) 555-5678 | 150 miles |
| Boise, ID; Meridian, ID; Nampa, ID | Boise, ID | (208) 555-9012 | 200 miles |
| Kalispell, MT; Whitefish, MT; Columbia Falls, MT | Kalispell, MT | (406) 555-3456 | 100 miles |
| Billings, MT; Missoula, MT; Great Falls, MT | Billings, MT | (406) 555-7890 | 250 miles |
| Fresno, CA; Visalia, CA; Clovis, CA | Fresno, CA | (559) 555-2345 | 100 miles |
| Bakersfield, CA; Delano, CA | Bakersfield, CA | (661) 555-6789 | 75 miles |
| San Jose, CA; San Francisco, CA; Sacramento, CA | San Jose, CA | (408) 555-0123 | 150 miles |
| Springdale, AR; Fayetteville, AR; Bentonville, AR | Springdale, AR | (479) 555-4567 | 100 miles |

**Fallback Routing:**
- If city doesn't match table: Calculate distance to all branches
- Assign to nearest branch by driving distance
- Display: "Your request will be handled by our [Nearest Branch] branch"

---

### 10.2 Priority Assignment by Timeline

**Priority Levels:**

| Timeline Selected | Priority | Response SLA | Escalation |
|------------------|---------|-------------|-----------|
| Emergency | P1 (Critical) | 10 minutes | 30 minutes |
| Within 1 week | P2 (High) | 4 hours | 6 hours |
| Within 1 month | P2 (High) | 4 hours | 6 hours |
| Within 3 months | P3 (Normal) | 24 hours | 72 hours |
| Planning stage (6+ months) | P3 (Normal) | 48 hours | 5 days |
| Not sure | P3 (Normal) | 24 hours | 72 hours |

---

### 10.3 CRM Field Mapping

**Lead Record Fields:**

| Form Field | CRM Field | Data Type | Notes |
|-----------|-----------|-----------|-------|
| Email | Lead.Email | Email | Primary key |
| Name | Lead.FirstName, Lead.LastName | Text | Split on space |
| Phone | Lead.Phone | Phone | Strip formatting, store digits only |
| City | Lead.City | Text | |
| State | Lead.State | Text | 2-letter abbreviation |
| Service Type | Lead.Service_Type__c | Picklist | Custom field |
| Timeline | Lead.Project_Timeline__c | Picklist | Custom field |
| Description | Lead.Description | Long Text | |
| Budget Range | Lead.Budget_Range__c | Picklist | Custom field |
| Company | Lead.Company | Text | |
| Referral Source | Lead.LeadSource | Picklist | Standard field |
| Form Type | Lead.Form_Type__c | Picklist | Custom field |
| Assigned Branch | Lead.Branch__c | Lookup | Custom field |
| Priority | Lead.Priority__c | Picklist | Custom field |
| Response SLA | Lead.Response_SLA__c | DateTime | Custom field |

---

## Summary

This document provides complete technical specifications for all 5 form types on the Nwestco website:

1. **Emergency Service Form**: 4 required fields, 30-45 second completion, P1 priority routing
2. **Quote Request Form**: 3-step multi-step form, 10 required + 3 optional fields, branch assignment logic
3. **General Contact Form**: 4 required + 1 optional field, simple single-page layout
4. **Career Application Form**: 2-3 steps, resume upload, ATS integration
5. **Training Registration Form**: 2 steps, course selection, calendar export

**Key Technical Features:**
- Mobile-first responsive design (56px touch targets)
- WCAG 2.1 AA accessibility compliance
- Real-time inline validation with helpful error messages
- Auto-save and resume functionality (email capture)
- Progressive enhancement (works without JavaScript)
- CRM integration with automatic lead routing
- Analytics event tracking for optimization
- Branch assignment based on location
- Priority assignment based on timeline

**Expected Impact:**
- 40-60% improvement in form completion rates (multi-step vs. single-page)
- 50%+ increase in mobile conversions (mobile-first design)
- 30%+ reduction in lead qualification time (smart routing)
- 25-35% improvement in overall lead volume

---

**Document Status:** Complete and Ready for Development
**Next Steps:** Frontend development, CRM integration, QA testing
**Dependencies:** CRM selection, analytics setup, design approval

---

*End of Form Specifications Document*
