/* ==========================================================================
   Before Sunrise — Main JavaScript
   Vanilla JS: IntersectionObserver entrances, scroll tracking, reduced-motion
   ========================================================================== */

(function () {
  'use strict';

  // ---- Reduced Motion Check ----
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Make everything visible immediately, skip all animation setup
    document.querySelectorAll(
      '.hero, .breathing-image, .encounter, .work-preview__item, .quiet, .invitation, ' +
      '.about-hero, .story, .timeline__entry, .about-quiet, .philosophy, .about-close, ' +
      '.work-hero, .project-row, .featured, .work-quiet, .farewell'
    ).forEach(function (el) {
      el.classList.add('visible');
    });
    return; // Exit early — no observers, no scroll handlers
  }

  // ---- Entrance Animations via IntersectionObserver ----
  var entranceObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entranceObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all animated sections
  var animatedSelectors = [
    '.hero',
    '.breathing-image',
    '.encounter',
    '.work-preview__item',
    '.quiet',
    '.invitation',
    '.about-hero',
    '.story',
    '.timeline__entry',
    '.about-quiet',
    '.philosophy',
    '.about-close',
    '.work-hero',
    '.project-row',
    '.featured',
    '.work-quiet',
    '.farewell'
  ];

  animatedSelectors.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      entranceObserver.observe(el);
    });
  });

  // ---- Navigation Scroll Background ----
  var nav = document.querySelector('.nav');
  if (nav) {
    var lastScrollY = 0;
    var ticking = false;

    function updateNav() {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
      }
    }, { passive: true });
  }

  // ---- Parallax Text Float (About page — story paragraphs) ----
  var storyParagraphs = document.querySelectorAll('.story__paragraph');
  if (storyParagraphs.length > 0) {
    var parallaxTicking = false;

    function updateParallax() {
      storyParagraphs.forEach(function (p) {
        var rect = p.getBoundingClientRect();
        var viewportCenter = window.innerHeight / 2;
        var offset = (viewportCenter - rect.top) * 0.05;
        p.style.transform = 'translateY(' + (-offset) + 'px)';
      });
      parallaxTicking = false;
    }

    window.addEventListener('scroll', function () {
      if (!parallaxTicking) {
        window.requestAnimationFrame(updateParallax);
        parallaxTicking = true;
      }
    }, { passive: true });
  }

  // ---- Split Line Reveal Index (Work page — project titles) ----
  document.querySelectorAll('.work-preview__title span, .project-row__content h3 span').forEach(function (span, index) {
    span.style.setProperty('--line-index', index % 4);
  });

  // ---- Timeline Entry Stagger (About page) ----
  var timelineEntries = document.querySelectorAll('.timeline__entry');
  timelineEntries.forEach(function (entry, index) {
    entry.style.transitionDelay = (index * 0.15) + 's';
  });

})();
