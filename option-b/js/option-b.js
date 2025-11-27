/**
 * Option B - Traditional Multi-Page Website JavaScript
 * Nwestco Website Redesign
 *
 * Interactive features for navigation, mobile menu, and smooth scrolling
 */

(function() {
  'use strict';

  // Mobile Menu Toggle
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      this.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');

      // Toggle hamburger animation
      const hamburger = this.querySelector('.hamburger');
      if (hamburger) {
        hamburger.style.transform = !isExpanded ? 'rotate(45deg)' : 'rotate(0)';
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = menuToggle.contains(event.target) || navMenu.contains(event.target);

      if (!isClickInside && navMenu.classList.contains('active')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');

        const hamburger = menuToggle.querySelector('.hamburger');
        if (hamburger) {
          hamburger.style.transform = 'rotate(0)';
        }
      }
    });

    // Close mobile menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');

        const hamburger = menuToggle.querySelector('.hamburger');
        if (hamburger) {
          hamburger.style.transform = 'rotate(0)';
        }

        menuToggle.focus();
      }
    });
  }

  // Smooth Scrolling for Anchor Links
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Only handle hash links that are not just "#"
        if (href === '#' || !href) return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          // Close mobile menu if open
          const navMenu = document.querySelector('.nav-menu');
          const menuToggle = document.querySelector('.mobile-menu-toggle');
          if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
              menuToggle.setAttribute('aria-expanded', 'false');
            }
          }

          // Scroll to target with offset for fixed header
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Update focus for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus();
        }
      });
    });
  }

  // Active Navigation Highlighting
  function initActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');

      if (currentPath.includes(linkPath) && linkPath !== '#' && linkPath !== 'index.html') {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // Form Validation (Basic)
  function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');

            // Add error message if not present
            let errorMsg = field.nextElementSibling;
            if (!errorMsg || !errorMsg.classList.contains('error-message')) {
              errorMsg = document.createElement('span');
              errorMsg.className = 'error-message';
              errorMsg.style.color = 'var(--nwestco-error)';
              errorMsg.style.fontSize = 'var(--text-sm)';
              errorMsg.style.marginTop = 'var(--space-1)';
              errorMsg.textContent = 'This field is required';
              field.parentNode.insertBefore(errorMsg, field.nextSibling);
            }
          } else {
            field.classList.remove('error');
            const errorMsg = field.nextElementSibling;
            if (errorMsg && errorMsg.classList.contains('error-message')) {
              errorMsg.remove();
            }
          }
        });

        if (!isValid) {
          e.preventDefault();
          // Focus on first invalid field
          const firstInvalid = form.querySelector('.error');
          if (firstInvalid) {
            firstInvalid.focus();
          }
        }
      });

      // Remove error styling on input
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('input', function() {
          this.classList.remove('error');
          const errorMsg = this.nextElementSibling;
          if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.remove();
          }
        });
      });
    });
  }

  // Sticky Header Scroll Behavior
  function initStickyHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScrollTop = 0;
    let ticking = false;

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          // Add shadow on scroll
          if (scrollTop > 0) {
            header.style.boxShadow = 'var(--shadow-md)';
          } else {
            header.style.boxShadow = 'var(--shadow-sm)';
          }

          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
          ticking = false;
        });

        ticking = true;
      }
    });
  }

  // Interactive Timeline
  function initTimeline() {
    const timelineDots = document.querySelectorAll('.timeline-dot');
    const timelineDetails = document.querySelectorAll('.timeline-detail');

    if (timelineDots.length === 0) return;

    timelineDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        // Remove active class from all dots and details
        timelineDots.forEach(d => d.classList.remove('active'));
        timelineDetails.forEach(d => d.classList.remove('active'));

        // Add active class to clicked dot
        dot.classList.add('active');

        // Show corresponding detail
        const pointNumber = dot.closest('.timeline-point').getAttribute('data-point');
        const detail = document.querySelector(`.timeline-detail[data-detail="${pointNumber}"]`);
        if (detail) {
          detail.classList.add('active');
        }
      });

      // Keyboard navigation
      dot.addEventListener('keydown', (e) => {
        let newIndex = index;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          newIndex = (index + 1) % timelineDots.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          newIndex = (index - 1 + timelineDots.length) % timelineDots.length;
        } else if (e.key === 'Home') {
          e.preventDefault();
          newIndex = 0;
        } else if (e.key === 'End') {
          e.preventDefault();
          newIndex = timelineDots.length - 1;
        } else {
          return;
        }

        timelineDots[newIndex].click();
        timelineDots[newIndex].focus();
      });
    });
  }

  // Initialize all features on DOM ready
  function init() {
    initMobileMenu();
    initSmoothScroll();
    initActiveNav();
    initFormValidation();
    initStickyHeader();
    initTimeline();

    console.log('Option B - Traditional Multi-Page Site Initialized');
  }

  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
