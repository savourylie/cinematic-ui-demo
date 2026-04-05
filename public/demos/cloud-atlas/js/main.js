/* ==========================================================================
   Cloud Atlas Editorial — Main JavaScript
   ========================================================================== */

(function () {
  'use strict';

  /* ========================================================================
     Reduced Motion Check
     ======================================================================== */

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ========================================================================
     IntersectionObserver — Scroll-Triggered Entrances
     ======================================================================== */

  function initEntrances() {
    if (prefersReducedMotion) {
      document.querySelectorAll(
        'section, .sextet-grid, .triptych, .lead-story, .montage-stack, ' +
        '.category-map, .newsletter, .site-footer, .article-hero, ' +
        '.article-body-wrapper, .pull-quote-section, .related-bento, ' +
        '.archive-sextant, .masonry-grid, .match-cut-pair, .category-newsletter'
      ).forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(
      'section, .sextet-grid, .triptych, .lead-story, .montage-stack, ' +
      '.category-map, .newsletter, .site-footer, .article-hero, ' +
      '.article-body-wrapper, .pull-quote-section, .related-bento, ' +
      '.archive-sextant, .masonry-grid, .match-cut-pair, .category-newsletter'
    ).forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ========================================================================
     Comet Trail — Scroll-Based Color Updater
     ======================================================================== */

  function initCometTrail() {
    var trail = document.querySelector('.comet-trail');
    if (!trail) return;

    var sections = document.querySelectorAll('[data-era]');
    var colors = {
      pacific: '#c8a45a',
      edinburgh: '#b89a54',
      sanfrancisco: '#c4703a',
      london: '#1a3c2a',
      neoseoul: '#00d4ff',
      hawaii: '#4a6b3a'
    };

    function updateTrail() {
      var scrollY = window.scrollY;
      var viewportMid = scrollY + window.innerHeight / 2;
      var currentEra = 'neoseoul';

      sections.forEach(function (section) {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
        if (viewportMid >= top && viewportMid < bottom) {
          currentEra = section.dataset.era;
        }
      });

      trail.style.background = colors[currentEra] || colors.neoseoul;
    }

    window.addEventListener('scroll', updateTrail, { passive: true });
    updateTrail();
  }

  /* ========================================================================
     Archive Sextant — Accordion Unfold (Hover Expand)
     ======================================================================== */

  function initArchiveSextant() {
    var container = document.querySelector('.archive-sextant');
    if (!container) return;

    var bands = container.querySelectorAll('.era-band');

    bands.forEach(function (band) {
      band.addEventListener('mouseenter', function () {
        bands.forEach(function (b) {
          b.classList.remove('active');
        });
        band.classList.add('active');
      });
    });

    container.addEventListener('mouseleave', function () {
      bands.forEach(function (b) {
        b.classList.remove('active');
      });
    });
  }

  /* ========================================================================
     Masonry Grid — Spotlight (Mousemove Tracking)
     ======================================================================== */

  function initMasonrySpotlight() {
    var grid = document.querySelector('.masonry-grid');
    if (!grid) return;

    grid.addEventListener('mousemove', function (e) {
      var rect = grid.getBoundingClientRect();
      grid.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      grid.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
  }

  /* ========================================================================
     Related Bento — Perspective Tilt
     ======================================================================== */

  function initBentoTilt() {
    var bentoSection = document.querySelector('.related-bento');
    if (!bentoSection) return;

    var cards = bentoSection.querySelectorAll('.bento-card');

    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) / r.width;
        var y = (e.clientY - r.top - r.height / 2) / r.height;
        card.style.transform = 'perspective(800px) rotateY(' + (x * 10) + 'deg) rotateX(' + (-y * 10) + 'deg)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* ========================================================================
     Echo Margin — Parallax Float
     ======================================================================== */

  function initEchoParallax() {
    var echoCards = document.querySelectorAll('.echo-margin .echo-card');
    if (!echoCards.length) return;

    echoCards.forEach(function (card) {
      card.classList.add('parallax-float');
    });

    function updateParallax() {
      echoCards.forEach(function (card) {
        var rect = card.getBoundingClientRect();
        var offset = (window.innerHeight - rect.top) / window.innerHeight;
        card.style.setProperty('--scroll-offset', Math.max(0, offset).toFixed(3));
      });
    }

    window.addEventListener('scroll', updateParallax, { passive: true });
    updateParallax();
  }

  /* ========================================================================
     DOMContentLoaded — Init All
     ======================================================================== */

  document.addEventListener('DOMContentLoaded', function () {
    initEntrances();
    initCometTrail();
    initArchiveSextant();
    initMasonrySpotlight();

    if (!prefersReducedMotion) {
      initBentoTilt();
      initEchoParallax();
    }
  });

})();
