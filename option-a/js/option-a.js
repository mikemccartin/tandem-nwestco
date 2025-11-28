/**
 * NWESTCO OPTION A - ONE-PAGE SCROLLABLE SITE
 * JavaScript for smooth scroll navigation, section highlighting, and interactivity
 *
 * Features:
 * - Smooth scroll to anchor sections
 * - Active section highlighting in navigation
 * - Mobile menu toggle
 * - Scroll-triggered fade-in animations
 * - Form validation and submission
 * - Header scroll effects
 */

(function() {
  'use strict';

  // Configuration
  const config = {
    scrollOffset: 80, // Header height for scroll positioning
    scrollThrottleDelay: 100,
    fadeInThreshold: 0.15, // Intersection observer threshold
  };

  // State
  let lastScrollTop = 0;
  let ticking = false;


  /* ============================================================
     MOBILE MENU TOGGLE
     ============================================================ */

  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('mobile-expanded');

      // Close menu when clicking nav links
      if (!isExpanded) {
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('mobile-expanded');
          }, { once: true });
        });
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('mobile-expanded')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('mobile-expanded');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('mobile-expanded') &&
          !navMenu.contains(e.target) &&
          !menuToggle.contains(e.target)) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('mobile-expanded');
      }
    });
  }


  /* ============================================================
     SMOOTH SCROLL TO SECTIONS
     ============================================================ */

  function initSmoothScroll() {
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Ignore empty anchors
        if (href === '#' || !href) return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();

          // Calculate scroll position with offset
          const targetPosition = targetElement.offsetTop - config.scrollOffset;

          // Smooth scroll to target
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }

          // Update focus for accessibility
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      });
    });
  }


  /* ============================================================
     ACTIVE SECTION HIGHLIGHTING
     ============================================================ */

  function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    if (sections.length === 0 || navLinks.length === 0) return;

    function updateActiveLink() {
      let currentSectionId = '';

      // Find which section is currently in view
      sections.forEach(section => {
        const sectionTop = section.offsetTop - config.scrollOffset - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSectionId = section.getAttribute('id');
        }
      });

      // Update active state on nav links
      navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }

    // Throttle scroll events for performance
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveLink();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Initial check
    updateActiveLink();
  }


  /* ============================================================
     HEADER SCROLL EFFECTS
     ============================================================ */

  function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (!header) return;

    function updateHeader() {
      const scrollTop = window.scrollY;

      // Add shadow when scrolled
      if (scrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScrollTop = scrollTop;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateHeader();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Initial check
    updateHeader();
  }


  /* ============================================================
     SCROLL-TRIGGERED FADE-IN ANIMATIONS
     ============================================================ */

  function initFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length === 0) return;

    // Use Intersection Observer for better performance
    const observerOptions = {
      threshold: config.fadeInThreshold,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(element => {
      observer.observe(element);
    });
  }


  /* ============================================================
     FORM VALIDATION AND SUBMISSION
     ============================================================ */

  function initContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) return;

    // Phone number formatting
    const phoneInput = form.querySelector('input[type="tel"]');
    if (phoneInput) {
      phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 0) {
          if (value.length <= 3) {
            value = value;
          } else if (value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
          } else {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
          }
        }

        e.target.value = value;
      });
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]');

      // Disable submit button
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        submitButton.textContent = 'Sending...';
      }

      // Simulate form submission (replace with actual API call)
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success message
        showFormMessage('success', 'Thank you! We\'ll contact you within 4 hours.');

        // Reset form
        form.reset();

      } catch (error) {
        // Show error message
        showFormMessage('error', 'Something went wrong. Please try again or call us directly.');

      } finally {
        // Re-enable submit button
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.classList.remove('loading');
          submitButton.textContent = 'Send Message';
        }
      }
    });

    // Inline validation on blur
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        validateField(input);
      });

      input.addEventListener('input', () => {
        // Clear error on input
        clearFieldError(input);
      });
    });
  }

  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    }

    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }

    // Phone validation
    if (field.type === 'tel' && value) {
      const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
      }
    }

    if (!isValid) {
      showFieldError(field, errorMessage);
    } else {
      clearFieldError(field);
    }

    return isValid;
  }

  function showFieldError(field, message) {
    clearFieldError(field);

    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.style.cssText = 'color: var(--nwestco-error); font-size: var(--text-sm); margin-top: 0.25rem; display: block;';
    errorElement.textContent = message;

    field.style.borderColor = 'var(--nwestco-error)';
    field.parentElement.appendChild(errorElement);
    field.setAttribute('aria-invalid', 'true');
  }

  function clearFieldError(field) {
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }
    field.style.borderColor = '';
    field.removeAttribute('aria-invalid');
  }

  function showFormMessage(type, message) {
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message-${type}`;
    messageElement.style.cssText = `
      padding: 1rem;
      border-radius: var(--radius-base);
      margin-bottom: 1rem;
      text-align: center;
      font-weight: var(--font-semibold);
      ${type === 'success'
        ? 'background: var(--nwestco-success-light); color: var(--nwestco-success-dark);'
        : 'background: var(--nwestco-error-light); color: var(--nwestco-error-dark);'}
    `;
    messageElement.textContent = message;

    const form = document.getElementById('contact-form');
    form.insertBefore(messageElement, form.firstChild);

    // Remove message after 5 seconds
    setTimeout(() => {
      messageElement.style.transition = 'opacity 0.3s ease';
      messageElement.style.opacity = '0';
      setTimeout(() => messageElement.remove(), 300);
    }, 5000);
  }


  /* ============================================================
     SCROLL PROGRESS INDICATOR
     ============================================================ */

  function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: var(--nwestco-green);
      width: 0%;
      z-index: 1000;
      transition: width 0.1s ease;
      pointer-events: none;
    `;
    document.body.appendChild(progressBar);

    function updateProgress() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      progressBar.style.width = Math.min(scrolled, 100) + '%';
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Initial update
    updateProgress();
  }


  /* ============================================================
     LOAD FROM URL HASH
     ============================================================ */

  function scrollToHashOnLoad() {
    // Check if there's a hash in the URL
    const hash = window.location.hash;

    if (hash) {
      // Wait for page to fully load
      window.addEventListener('load', () => {
        setTimeout(() => {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            const targetPosition = targetElement.offsetTop - config.scrollOffset;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      });
    }
  }


  /* ============================================================
     FLIP BOX TOUCH SUPPORT
     ============================================================ */

  function initFlipBoxes() {
    // Support both service flip boxes and branch flip cards
    const serviceFlipBoxes = document.querySelectorAll('.flip-box');
    const branchFlipCards = document.querySelectorAll('.branch-flip');
    const allFlipElements = [...serviceFlipBoxes, ...branchFlipCards];

    if (allFlipElements.length === 0) return;

    // Detect touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    allFlipElements.forEach(box => {
      if (isTouchDevice) {
        // Touch devices: toggle on tap
        box.addEventListener('click', (e) => {
          // Don't flip if clicking a link/button
          if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;

          // Close other open flip elements
          allFlipElements.forEach(otherBox => {
            if (otherBox !== box) {
              otherBox.classList.remove('flipped');
            }
          });

          // Toggle this box
          box.classList.toggle('flipped');
        });
      }
    });

    // Close flip elements when clicking outside on touch devices
    if (isTouchDevice) {
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.flip-box') && !e.target.closest('.branch-flip')) {
          allFlipElements.forEach(box => box.classList.remove('flipped'));
        }
      });
    }
  }


  /* ============================================================
     PROJECT FILTERS
     ============================================================ */

  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0 || projectCards.length === 0) return;

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        // Update active button
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        // Filter projects
        projectCards.forEach(card => {
          const category = card.dataset.category;

          if (filter === 'all' || category === filter) {
            card.style.display = '';
            card.classList.add('fade-in', 'visible');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }


  /* ============================================================
     TESTIMONIAL CAROUSEL - Single Slide Display
     ============================================================ */

  function initTestimonialCarousel() {
    const carousel = document.querySelector('.testimonial-carousel');

    if (!carousel) return;

    const slides = carousel.querySelectorAll('.testimonial-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');

    if (slides.length === 0) return;

    let currentSlide = 0;
    let autoPlayInterval;
    const autoPlayDelay = 8000; // 8 seconds for longer quotes

    function showSlide(index) {
      // Wrap around
      if (index >= slides.length) index = 0;
      if (index < 0) index = slides.length - 1;

      currentSlide = index;

      // Update slides - show one at a time
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('active');
          slide.setAttribute('aria-hidden', 'true');
        }
      });

      // Update dots
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('active');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('active');
          dot.setAttribute('aria-selected', 'false');
        }
      });
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    function startAutoPlay() {
      stopAutoPlay(); // Clear any existing interval
      autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
      }
    }

    // Navigation button events
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
      });
    }

    // Dot navigation events
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.dataset.slide, 10);
        showSlide(slideIndex);
        stopAutoPlay();
        startAutoPlay();
      });
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      startAutoPlay();
    }, { passive: true });

    // Pause on hover (desktop)
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Keyboard navigation
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
      }
    });

    // Initialize: ensure first slide is shown
    showSlide(0);

    // Start autoplay
    startAutoPlay();
  }


  /* ============================================================
     MARKET TABS
     ============================================================ */

  function initMarketTabs() {
    const tabContainers = document.querySelectorAll('.market-tabs');

    tabContainers.forEach(container => {
      const tabs = container.querySelectorAll('.market-tab');
      const panels = container.parentElement.querySelectorAll('.market-tab-panel');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const targetId = tab.dataset.tab;

          // Update tabs
          tabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');

          // Update panels
          panels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.id === targetId) {
              panel.classList.add('active');
            }
          });
        });
      });
    });
  }


  /* ============================================================
     EXPANDABLE LOCATION CARDS
     ============================================================ */

  function initLocationCards() {
    const locationCards = document.querySelectorAll('.location-card');

    locationCards.forEach(card => {
      const toggle = card.querySelector('.location-toggle');
      const details = card.querySelector('.location-details');

      if (!toggle || !details) return;

      // Click on toggle or entire header
      const header = card.querySelector('.location-header');
      header.addEventListener('click', (e) => {
        // Don't toggle if clicking a link
        if (e.target.tagName === 'A') return;

        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        // Close other cards
        locationCards.forEach(otherCard => {
          if (otherCard !== card) {
            const otherToggle = otherCard.querySelector('.location-toggle');
            const otherDetails = otherCard.querySelector('.location-details');
            if (otherToggle && otherDetails) {
              otherToggle.setAttribute('aria-expanded', 'false');
              otherDetails.setAttribute('aria-hidden', 'true');
              otherCard.classList.remove('expanded');
            }
          }
        });

        // Toggle this card
        toggle.setAttribute('aria-expanded', !isExpanded);
        details.setAttribute('aria-hidden', isExpanded);
        card.classList.toggle('expanded', !isExpanded);
      });
    });
  }


  /* ============================================================
     LEGAL MODALS
     ============================================================ */

  function initLegalModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal-overlay');

    if (modalTriggers.length === 0 || modals.length === 0) return;

    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (!modal) return;

      modal.setAttribute('aria-hidden', 'false');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Focus first focusable element
      const focusable = modal.querySelector('button, [href], input, select, textarea');
      if (focusable) focusable.focus();
    }

    function closeModal(modal) {
      modal.setAttribute('aria-hidden', 'true');
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    function closeAllModals() {
      modals.forEach(modal => closeModal(modal));
    }

    // Trigger buttons
    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const modalId = trigger.dataset.modal;
        openModal(modalId);
      });
    });

    // Close buttons
    modals.forEach(modal => {
      const closeBtn = modal.querySelector('.modal-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(modal));
      }

      // Close on overlay click
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    });
  }


  /* ============================================================
     INITIALIZE ALL FEATURES
     ============================================================ */

  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Initialize all features
    initMobileMenu();
    initSmoothScroll();
    initActiveNavigation();
    initHeaderScroll();
    initFadeInAnimations();
    initContactForm();
    initScrollProgress();
    scrollToHashOnLoad();

    // New widget initializations
    initFlipBoxes();
    initProjectFilters();
    initTestimonialCarousel();
    initMarketTabs();
    initLocationCards();
    initLegalModals();

    console.log('Nwestco Option A initialized successfully');
  }

  // Start initialization
  init();

})();
