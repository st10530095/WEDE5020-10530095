/* ==========================================================================
   script.js - behaviour shared by every page of the Golden Crust Bakery site

   1. Footer year             (DOM text update)
   2. Scroll reveal           (IntersectionObserver + CSS transitions)
   3. Animated stat counters  (requestAnimationFrame)
   4. Back-to-top button      (element created with JavaScript)
   5. Tabs                    (About page, built from the HTML panels)
   6. Accordion               (FAQ on the Enquiry page)

   Everything here is "progressive enhancement": the pages still show all of
   their content if JavaScript is switched off.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Footer year ---------- */
  function initYear() {
    var year = String(new Date().getFullYear());
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = year;
    });
  }

  /* ---------- 2. Scroll reveal ----------
     Items below the fold fade/slide in as they scroll into view. Items that are
     already visible when the page loads are left alone, so nothing flashes. */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length || reduceMotion || !('IntersectionObserver' in window)) { return; }

    var viewportHeight = window.innerHeight;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        var el = entry.target;
        observer.unobserve(el);
        el.classList.remove('is-hidden');
        // Once the transition has finished, drop the helper class so hover effects behave normally again
        window.setTimeout(function () { el.classList.remove('reveal'); }, 900);
      });
    }, { threshold: 0.12 });

    // Read every position first, then change classes, so the browser only lays the page out once
    // (mixing reads and writes in one loop forces a slow "reflow" each time round)
    var belowFold = Array.prototype.map.call(items, function (el) {
      return el.getBoundingClientRect().top > viewportHeight;
    });
    items.forEach(function (el, index) {
      if (belowFold[index]) {
        el.style.transitionDelay = (index % 3) * 90 + 'ms';   // small stagger between neighbours
        el.classList.add('is-hidden');
        observer.observe(el);
      }
    });
  }

  /* ---------- 3. Animated counters ---------- */
  function formatNumber(n) {
    return new Intl.NumberFormat('en-US').format(n);
  }

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    if (isNaN(target)) { return; }
    var duration = 1400;
    var start = null;

    function step(timestamp) {
      if (start === null) { start = timestamp; }
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);             // ease-out
      el.textContent = formatNumber(Math.round(target * eased)) + (progress === 1 ? suffix : '');
      if (progress < 1) { window.requestAnimationFrame(step); }
    }
    window.requestAnimationFrame(step);
  }

  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length || reduceMotion || !('IntersectionObserver' in window)) { return; }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          animateCount(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counters.forEach(function (el) {
      el.textContent = '0';        // start from zero; the final value is also in the HTML for no-JS visitors
      observer.observe(el);
    });
  }

  /* ---------- 4. Back-to-top button ---------- */
  function initBackToTop() {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.textContent = '\u2191';
    document.body.appendChild(button);

    var ticking = false;
    function update() {
      button.classList.toggle('is-visible', window.scrollY > 600);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });

    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- 5. Tabs (WAI-ARIA tabs pattern) ----------
     Markup: <div data-tabs> containing several <section class="tab-panel" data-tab-title="...">.
     The tab buttons are created here, so without JavaScript all panels simply stack. */
  function initTabs() {
    document.querySelectorAll('[data-tabs]').forEach(function (root, groupIndex) {
      var panels = Array.prototype.slice.call(root.querySelectorAll('.tab-panel'));
      if (!panels.length) { return; }

      var list = document.createElement('div');
      list.className = 'tab-list';
      list.setAttribute('role', 'tablist');
      list.setAttribute('aria-label', root.getAttribute('data-tabs-label') || 'Tabs');

      var tabs = panels.map(function (panel, i) {
        var id = 'tab-' + groupIndex + '-' + i;
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'tab';
        button.id = id;
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-controls', id + '-panel');
        button.textContent = panel.getAttribute('data-tab-title');

        panel.id = id + '-panel';
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', id);
        panel.tabIndex = 0;

        list.appendChild(button);
        return button;
      });
      root.insertBefore(list, root.firstChild);

      function select(index, moveFocus) {
        tabs.forEach(function (tab, i) {
          var active = i === index;
          tab.setAttribute('aria-selected', active ? 'true' : 'false');
          tab.tabIndex = active ? 0 : -1;          // only the active tab is in the Tab key order
          panels[i].hidden = !active;
        });
        if (moveFocus) { tabs[index].focus(); }
      }

      tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () { select(i, false); });
        tab.addEventListener('keydown', function (event) {
          var next = null;
          if (event.key === 'ArrowRight') { next = (i + 1) % tabs.length; }
          else if (event.key === 'ArrowLeft') { next = (i - 1 + tabs.length) % tabs.length; }
          else if (event.key === 'Home') { next = 0; }
          else if (event.key === 'End') { next = tabs.length - 1; }
          if (next !== null) { event.preventDefault(); select(next, true); }
        });
      });

      select(0, false);
    });
  }

  /* ---------- 6. Accordion ----------
     Markup: .accordion-item > h3 > button.accordion-trigger + .accordion-panel.
     Opening one item closes the others (single-open behaviour). */
  function initAccordions() {
    document.querySelectorAll('[data-accordion]').forEach(function (root) {
      var items = Array.prototype.slice.call(root.querySelectorAll('.accordion-item'));

      function setOpen(item, open) {
        item.classList.toggle('is-open', open);
        item.querySelector('.accordion-trigger').setAttribute('aria-expanded', open ? 'true' : 'false');
      }

      items.forEach(function (item) {
        setOpen(item, item.hasAttribute('data-open'));
      });
      root.classList.add('is-ready');            // CSS only collapses the panels once this class is present

      var triggers = items.map(function (item) { return item.querySelector('.accordion-trigger'); });

      triggers.forEach(function (trigger, index) {
        trigger.addEventListener('click', function () {
          var item = items[index];
          var willOpen = !item.classList.contains('is-open');
          items.forEach(function (other) { setOpen(other, false); });
          setOpen(item, willOpen);
        });

        // Up/Down arrows move between questions
        trigger.addEventListener('keydown', function (event) {
          var target = null;
          if (event.key === 'ArrowDown') { target = (index + 1) % triggers.length; }
          else if (event.key === 'ArrowUp') { target = (index - 1 + triggers.length) % triggers.length; }
          else if (event.key === 'Home') { target = 0; }
          else if (event.key === 'End') { target = triggers.length - 1; }
          if (target !== null) { event.preventDefault(); triggers[target].focus(); }
        });
      });
    });
  }

  /* ---------- Start everything ---------- */
  function init() {
    initYear();
    initReveal();
    initCounters();
    initBackToTop();
    initTabs();
    initAccordions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
