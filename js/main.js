/**
 * AIRTECH — Corporate Air-Conditioning Solutions (Chennai, India)
 * Master Interactive & Animation Engine
 */

function initAirTech() {
  'use strict';

  // --- 00. AIRFLOW STREAMLINES PAGE PRELOADER CONTROLLER ---
  const preloader = document.getElementById('sitePreloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('is-loaded');
    }, 250);
  }

  // --- 01. RUN NUMBER COUNTERS ON SCROLL (Load only when visible) ---
  const counters = document.querySelectorAll('[data-counter]');

  const runCounter = (counter) => {
    if (counter.dataset.counterStarted === 'true') return;
    counter.dataset.counterStarted = 'true';

    const target = parseInt(counter.getAttribute('data-counter'), 10);
    const duration = 1800; // 1.8 seconds smooth roll
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const stepIncrement = target / totalSteps;
    let currentVal = 0;

    const timer = setInterval(() => {
      currentVal += stepIncrement;
      if (currentVal >= target) {
        counter.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(currentVal).toLocaleString();
      }
    }, stepTime);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    counters.forEach(counter => counterObserver.observe(counter));
  } else {
    counters.forEach(counter => runCounter(counter));
  }

  // --- 02. Initialize AOS (Animate on Scroll) ---
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      duration: 750,
      easing: 'ease-out-cubic',
      offset: 30,
      disableMutationObserver: false
    });
  }

  // --- 03. Sticky Navbar Transition ---
  const siteNavbar = document.getElementById('mainNavbar');
  const backToTopBtn = document.getElementById('backToTopBtn');

  const onScroll = () => {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPos > 30) {
      siteNavbar?.classList.add('navbar-scrolled');
    } else {
      siteNavbar?.classList.remove('navbar-scrolled');
    }

    if (scrollPos > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- 04. Close Mobile Navbar Collapse On Link Click ---
  const navCollapse = document.getElementById('navbarContent');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .btn-primary-custom');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // --- 05. Smooth Anchor Scrolling & Active Nav Link Mapping ---
  const navLinksList = document.querySelectorAll('.navbar-nav .nav-link');
  const sectionsTracked = Array.from(navLinksList)
    .map(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        return { link, section: document.querySelector(href) };
      }
      return null;
    })
    .filter(item => item && item.section);

  const setActiveNav = (activeLink) => {
    navLinksList.forEach(l => l.classList.remove('active'));
    activeLink?.classList.add('active');
  };

  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        const navHeight = siteNavbar ? siteNavbar.getBoundingClientRect().height : 70;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Immediately map the active transparent card pill to clicked nav link
        if (this.classList.contains('nav-link')) {
          setActiveNav(this);
        } else {
          const matchedLink = Array.from(navLinksList).find(l => l.getAttribute('href') === targetId);
          if (matchedLink) setActiveNav(matchedLink);
        }
      }
    });
  });

  // Dynamic ScrollSpy: Map transparent card indicator as user scrolls through sections
  let isNavScrollTicking = false;
  const onNavScrollSpy = () => {
    if (isNavScrollTicking) return;
    isNavScrollTicking = true;

    requestAnimationFrame(() => {
      const scrollPos = (window.pageYOffset || document.documentElement.scrollTop) + (siteNavbar ? siteNavbar.offsetHeight + 60 : 130);

      // Check sections from bottom to top to identify the current in-view section
      for (let i = sectionsTracked.length - 1; i >= 0; i--) {
        const { link, section } = sectionsTracked[i];
        if (section.offsetTop <= scrollPos) {
          setActiveNav(link);
          break;
        }
      }
      isNavScrollTicking = false;
    });
  };

  window.addEventListener('scroll', onNavScrollSpy, { passive: true });

  // --- 06. Auto-Carousels Engine (Awards, Testimonials) with Guaranteed Auto-Cycle & No-Jump Focus ---
  const carouselConfigs = [
    { id: 'awardsCarousel', interval: 4000 },
    { id: 'testimonialsCarousel', interval: 4500 }
  ];

  carouselConfigs.forEach(({ id, interval }) => {
    const el = document.getElementById(id);
    if (el && typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
      // Ensure no tabindex attribute exists to prevent browser click-focus scroll jumps
      el.removeAttribute('tabindex');

      const instance = bootstrap.Carousel.getOrCreateInstance(el, {
        interval: interval,
        ride: 'carousel',
        pause: false, // Prevents stalling on hover/touch
        wrap: true,
        touch: true,
        keyboard: false // Prevents Bootstrap from focusing and jumping window scroll
      });
      instance.cycle();

      // Ensure carousel never freezes after user interaction
      el.addEventListener('mouseleave', () => instance.cycle());
      el.addEventListener('touchend', () => setTimeout(() => instance.cycle(), 500));

      // Guard against unwanted scroll jump when interacting with cards or slides
      el.addEventListener('mousedown', () => {
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

        if (document.activeElement && document.activeElement !== document.body) {
          document.activeElement.blur();
        }

        requestAnimationFrame(() => {
          const newScrollY = window.pageYOffset || document.documentElement.scrollTop;
          if (Math.abs(newScrollY - currentScrollY) > 2) {
            window.scrollTo({ top: currentScrollY, behavior: 'instant' });
          }
        });
      }, { passive: true });
    }
  });

  // Prevent any carousel button or indicator click from taking focus and scrolling window
  document.querySelectorAll('[data-bs-slide], [data-bs-slide-to], .testimonial-nav-btn, .carousel-indicators button').forEach(btn => {
    btn.addEventListener('mousedown', (e) => {
      e.preventDefault(); // Prevents button from taking focus on click!
    });
    btn.addEventListener('click', () => {
      btn.blur();
    });
  });

  // Ensure no carousel container or slide retains focus
  document.querySelectorAll('.carousel, .carousel-inner, .carousel-item').forEach(c => {
    c.removeAttribute('tabindex');
    c.addEventListener('focusin', (e) => {
      if (e.target && e.target !== document.body) {
        e.target.blur();
      }
    });
  });

  // --- 07. Interactive Enquiry Form Validation ---
  const enquiryForm = document.getElementById('enquiryForm');
  const formAlert = document.getElementById('formAlert');

  if (enquiryForm) {
    const inputs = {
      name: document.getElementById('fullName'),
      phone: document.getElementById('phoneNumber'),
      email: document.getElementById('emailAddress'),
      service: document.getElementById('serviceRequired'),
      message: document.getElementById('enquiryMessage')
    };

    const clearError = (input) => {
      input?.classList.remove('is-invalid');
      const feedback = input?.nextElementSibling;
      if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = '';
      }
    };

    const setError = (input, msg) => {
      input?.classList.add('is-invalid');
      const feedback = input?.nextElementSibling;
      if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = msg;
      }
    };

    Object.values(inputs).forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => clearError(input));
      input.addEventListener('change', () => clearError(input));
    });

    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const nameVal = inputs.name.value.trim();
      if (!nameVal || nameVal.length < 2) {
        setError(inputs.name, 'Please provide your full name.');
        valid = false;
      }

      const phoneVal = inputs.phone.value.trim().replace(/\D/g, '');
      if (!phoneVal || phoneVal.length < 10) {
        setError(inputs.phone, 'Please enter a valid 10-digit mobile number.');
        valid = false;
      }

      const emailVal = inputs.email.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        setError(inputs.email, 'Please provide a valid email address.');
        valid = false;
      }

      if (!inputs.service.value) {
        setError(inputs.service, 'Please choose a required service.');
        valid = false;
      }

      const msgVal = inputs.message.value.trim();
      if (!msgVal || msgVal.length < 6) {
        setError(inputs.message, 'Please provide a brief description of your cooling requirements.');
        valid = false;
      }

      if (!valid) return;

      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      const originalHTML = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        <span>Transmitting Request...</span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;

        if (formAlert) {
          formAlert.className = 'alert alert-success d-block mb-3 p-3 shadow-sm border-success border-opacity-25';
          formAlert.innerHTML = `
            <div class="d-flex align-items-start gap-2">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-success flex-shrink-0 mt-1">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div class="fw-bold text-success fs-6">Thanks for contacting AirTech!</div>
                <div class="small mt-1 text-dark">Your consultation request has been received.</div>
                <div class="small mt-2 pt-2 border-top border-success border-opacity-25">
                  For an earlier response, please contact <a href="tel:+919841806967" class="fw-bold text-dark text-decoration-underline">+91 98418 06967</a> / <a href="tel:+919841253976" class="fw-bold text-dark text-decoration-underline">+91 98412 53976</a> or message us on <a href="https://wa.me/919841806967" target="_blank" rel="noopener" class="fw-bold text-success text-decoration-underline">WhatsApp</a>.
                </div>
              </div>
            </div>
          `;
        }

        enquiryForm.reset();
      }, 700);
    });
  }

  // --- 07. Back To Top Trigger ---
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // --- 08. Custom Brand Theme Interactive Cursor Engine ---
  const cursorDot = document.getElementById('cursorDot');
  const cursorFollower = document.getElementById('cursorFollower');

  if (cursorDot && cursorFollower && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = -100, mouseY = -100;
    let followerX = -100, followerY = -100;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        cursorDot.style.opacity = '1';
        cursorFollower.style.opacity = '1';
        isVisible = true;
      }

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    document.addEventListener('mouseleave', () => {
      cursorDot.style.opacity = '0';
      cursorFollower.style.opacity = '0';
      isVisible = false;
    });

    const renderCursor = () => {
      // Smooth lerp for follower (factor 0.18)
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;

      cursorFollower.style.left = `${followerX}px`;
      cursorFollower.style.top = `${followerY}px`;

      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    // Interactive element hover state detection
    const interactiveQuery = 'a, button, input, select, textarea, .feature-service-card, .commercial-sector-card, .rich-testimonial-card, .award-image-card, .client-logo-card, .carousel-nav-btn, .interactive-photo-frame, .why-choose-card, .terms-clause-card, .footer-terms-link, .terms-hero-title';
    const interactiveElements = document.querySelectorAll(interactiveQuery);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    window.addEventListener('mousedown', () => document.body.classList.add('cursor-active'));
    window.addEventListener('mouseup', () => document.body.classList.remove('cursor-active'));
  }

  // --- Photo Frames Click / Touch Caption Reveal ---
  document.querySelectorAll('.interactive-photo-frame, .proprietor-portrait-frame').forEach(frame => {
    frame.addEventListener('click', () => {
      frame.classList.toggle('touch-active');
    });
  });

  // --- Split AC Unit FAQ Interactive Toggle ---
  window.toggleSplitAc = function(element) {
    const unit = element.closest('.split-ac-unit');
    if (!unit) return;
    const wasOpen = unit.classList.contains('is-open');

    // Turn off all other AC units
    document.querySelectorAll('.split-ac-unit').forEach(u => {
      u.classList.remove('is-open');
      const tempDisplay = u.querySelector('.ac-led-temp');
      if (tempDisplay) {
        tempDisplay.innerHTML = '<span class="temp-val">--</span><span class="temp-unit">&deg;C</span>';
      }
    });

    // If it was not open, power on this AC unit
    if (!wasOpen) {
      unit.classList.add('is-open');
      const tempDisplay = unit.querySelector('.ac-led-temp');
      if (tempDisplay) {
        tempDisplay.innerHTML = '<span class="temp-val">24</span><span class="temp-unit">&deg;C</span>';
      }
    }
  };

  // Legacy fallback
  window.toggleFaqRow = window.toggleSplitAc;
}

if (typeof window !== 'undefined') {
  window.initAirTech = initAirTech;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAirTech);
  } else {
    initAirTech();
  }
}
