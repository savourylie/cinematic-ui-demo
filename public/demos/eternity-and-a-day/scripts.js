/* ==========================================================================
   Eternity and a Day — Scripts

   Minimal vanilla JS:
   1. IntersectionObserver entrance system
   2. Stagger delay for child entrances
   3. About page temperature shift (cold → warm)
   4. Nav scroll opacity
   ========================================================================== */

(function () {
  'use strict';

  /* --- 1. Entrance Observer --- */

  const entranceElements = document.querySelectorAll('[data-entrance]');
  const entranceChildren = document.querySelectorAll('[data-entrance-child]');

  if (entranceElements.length > 0) {
    const entranceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entranceObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    entranceElements.forEach((el) => {
      entranceObserver.observe(el);
    });
  }

  /* --- 2. Stagger Delay for Child Entrances --- */

  if (entranceChildren.length > 0) {
    const childObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            childObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    // Group children by parent and apply stagger delays
    const parentGroups = new Map();

    entranceChildren.forEach((child) => {
      const parent = child.closest('[data-entrance]') || child.parentElement;
      if (!parentGroups.has(parent)) {
        parentGroups.set(parent, []);
      }
      parentGroups.get(parent).push(child);
    });

    parentGroups.forEach((children) => {
      children.forEach((child, index) => {
        child.style.transitionDelay = (index * 0.15) + 's';
        childObserver.observe(child);
      });
    });
  }

  /* --- 3. About Page Temperature Shift --- */

  const tempSections = document.querySelectorAll('[data-temp]');

  if (tempSections.length > 0) {
    // Color stops for temperature interpolation
    const coldBg = { r: 26, g: 30, b: 36 };   // #1a1e24
    const warmBg = { r: 42, g: 38, b: 31 };    // #2a261f
    const midBg = {
      r: Math.round((coldBg.r + warmBg.r) / 2),
      g: Math.round((coldBg.g + warmBg.g) / 2),
      b: Math.round((coldBg.b + warmBg.b) / 2),
    };

    function rgbString(color) {
      return 'rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
    }

    function lerp(a, b, t) {
      return {
        r: Math.round(a.r + (b.r - a.r) * t),
        g: Math.round(a.g + (b.g - a.g) * t),
        b: Math.round(a.b + (b.b - a.b) * t),
      };
    }

    function updateTemperature() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(Math.max(scrollTop / docHeight, 0), 1);

      tempSections.forEach((section) => {
        const temp = section.dataset.temp;
        var targetColor;

        if (temp === 'cold') {
          targetColor = lerp(coldBg, midBg, scrollProgress * 0.5);
        } else if (temp === 'transitional') {
          targetColor = lerp(coldBg, warmBg, scrollProgress);
        } else if (temp === 'warm') {
          targetColor = lerp(midBg, warmBg, 0.5 + scrollProgress * 0.5);
        }

        if (targetColor) {
          section.style.background = rgbString(targetColor);
        }
      });
    }

    // Throttle scroll handler
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateTemperature();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Initial call
    updateTemperature();
  }

  /* --- 4. Nav Scroll Opacity --- */

  const nav = document.querySelector('.nav');

  if (nav) {
    var navTicking = false;

    window.addEventListener('scroll', function () {
      if (!navTicking) {
        requestAnimationFrame(function () {
          if (window.scrollY > 100) {
            nav.classList.add('nav--scrolled');
          } else {
            nav.classList.remove('nav--scrolled');
          }
          navTicking = false;
        });
        navTicking = true;
      }
    }, { passive: true });
  }
})();
