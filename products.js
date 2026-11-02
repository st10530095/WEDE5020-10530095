/* ==========================================================================
   products.js - dynamic product listing (products page)

   - Creates the product cards from the data in products-data.js
   - Search box, category filter buttons and sort menu update the list instantly
   - "View details" opens a modal (<dialog>) with the full product information
   - The filters are also stored in the address bar (?category=cakes&q=wedding),
     so links from other pages can open a filtered view
   ========================================================================== */
(function () {
  'use strict';

  var list = document.getElementById('product-list');
  if (!list || !window.GCB) { return; }

  var searchInput = document.getElementById('product-search');
  var sortSelect = document.getElementById('product-sort');
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  var countLabel = document.getElementById('product-count');
  var modal = document.getElementById('product-modal');

  var state = { query: '', category: 'all', sort: 'featured' };

  /* ---------- Read filters from the URL (e.g. products.html?category=bread) ---------- */
  function readUrl() {
    var params = new URLSearchParams(window.location.search);
    var category = params.get('category');
    if (category === 'all' || GCB.categories[category]) { state.category = category; }
    state.query = (params.get('q') || '').slice(0, 60);
    var sort = params.get('sort');
    if (['featured', 'price-asc', 'price-desc', 'name-asc'].indexOf(sort) !== -1) { state.sort = sort; }
    searchInput.value = state.query;
    sortSelect.value = state.sort;
  }

  function writeUrl() {
    var params = new URLSearchParams();
    if (state.category !== 'all') { params.set('category', state.category); }
    if (state.query) { params.set('q', state.query); }
    if (state.sort !== 'featured') { params.set('sort', state.sort); }
    var qs = params.toString();
    window.history.replaceState(null, '', window.location.pathname + (qs ? '?' + qs : ''));
  }

  /* ---------- Filter + sort ---------- */
  function getVisibleProducts() {
    var query = state.query.trim().toLowerCase();
    var result = GCB.products.filter(function (p) {
      if (state.category !== 'all' && p.category !== state.category) { return false; }
      if (!query) { return true; }
      var haystack = (p.name + ' ' + p.short + ' ' + p.description + ' ' + GCB.categories[p.category]).toLowerCase();
      return haystack.indexOf(query) !== -1;
    });

    if (state.sort === 'price-asc') { result.sort(function (a, b) { return a.price - b.price; }); }
    else if (state.sort === 'price-desc') { result.sort(function (a, b) { return b.price - a.price; }); }
    else if (state.sort === 'name-asc') { result.sort(function (a, b) { return a.name.localeCompare(b.name); }); }
    return result;
  }

  /* ---------- Build one product card with DOM methods (no innerHTML) ---------- */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text !== undefined) { node.textContent = text; }
    return node;
  }

  function priceText(p) {
    return (p.priceFrom ? 'From ' : '') + GCB.formatPrice(p.price);
  }

  function createCard(p) {
    var card = el('article', 'product-card');

    var img = document.createElement('img');
    img.src = GCB.imageSrc(p);                 // large file as the fallback...
    img.srcset = GCB.imageSrcset(p);           // ...and the browser picks the best size for the screen
    img.sizes = '(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 340px';
    img.alt = p.alt;
    img.width = p.widthLg;                     // reserve the space so the page does not jump
    img.height = p.heightLg;
    img.loading = 'lazy';
    img.decoding = 'async';
    card.appendChild(img);

    card.appendChild(el('h3', '', p.name));
    card.appendChild(el('p', '', p.short));
    card.appendChild(el('p', 'price', priceText(p)));

    var actions = el('div', 'card-actions');
    var details = el('button', 'btn-small', 'View details');
    details.type = 'button';
    details.setAttribute('data-product', p.id);
    details.setAttribute('aria-label', 'View details for ' + p.name);
    actions.appendChild(details);

    var enquire = el('a', 'btn-small btn-outline', 'Enquire');
    enquire.href = 'enquiry.html?product=' + encodeURIComponent(p.id);
    enquire.setAttribute('aria-label', 'Enquire about ' + p.name);
    actions.appendChild(enquire);

    card.appendChild(actions);
    return card;
  }

  function render() {
    var products = getVisibleProducts();
    list.textContent = '';                                   // clear the old cards

    if (!products.length) {
      var empty = el('div', 'empty-state');
      empty.appendChild(el('p', '', 'No products match your search. Try a different word or clear the filters.'));
      var reset = el('button', 'btn-small', 'Clear filters');
      reset.type = 'button';
      reset.addEventListener('click', function () {
        state.query = ''; state.category = 'all'; state.sort = 'featured';
        searchInput.value = ''; sortSelect.value = 'featured';
        update();
      });
      empty.appendChild(reset);
      list.appendChild(empty);
    } else {
      var fragment = document.createDocumentFragment();    // add all cards in one go (faster)
      products.forEach(function (p) { fragment.appendChild(createCard(p)); });
      list.appendChild(fragment);
    }

    countLabel.textContent = 'Showing ' + products.length + ' of ' + GCB.products.length + ' products';
  }

  function updateChips() {
    chips.forEach(function (chip) {
      var active = chip.getAttribute('data-category') === state.category;
      chip.classList.toggle('is-active', active);
      chip.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function update() {
    updateChips();
    render();
    writeUrl();
  }

  /* ---------- Events ---------- */
  searchInput.addEventListener('input', function () {
    state.query = searchInput.value;
    update();
  });

  sortSelect.addEventListener('change', function () {
    state.sort = sortSelect.value;
    update();
  });

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      state.category = chip.getAttribute('data-category');
      update();
    });
  });

  /* ---------- Details modal ---------- */
  var lastTrigger = null;

  function openModal(product, trigger) {
    if (!modal || typeof modal.showModal !== 'function') {
      window.location.href = 'enquiry.html?product=' + encodeURIComponent(product.id);   // very old browsers
      return;
    }
    lastTrigger = trigger;
    var image = document.getElementById('modal-image');
    image.src = GCB.imageSrc(product);
    image.srcset = GCB.imageSrcset(product);
    image.sizes = '(max-width: 900px) 90vw, 450px';
    image.width = product.widthLg;
    image.height = product.heightLg;
    image.alt = product.alt;
    document.getElementById('modal-category').textContent = GCB.categories[product.category];
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-price').textContent = priceText(product);
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-allergens').textContent = 'Allergens: ' + product.allergens;
    document.getElementById('modal-enquire').href = 'enquiry.html?product=' + encodeURIComponent(product.id);

    var detailList = document.getElementById('modal-details');
    detailList.textContent = '';
    product.details.forEach(function (line) { detailList.appendChild(el('li', '', line)); });

    modal.showModal();
    document.body.classList.add('no-scroll');
  }

  list.addEventListener('click', function (event) {
    var button = event.target.closest('[data-product]');          // event delegation for all cards
    if (!button) { return; }
    var id = button.getAttribute('data-product');
    var product = GCB.products.filter(function (p) { return p.id === id; })[0];
    if (product) { openModal(product, button); }
  });

  if (modal) {
    modal.addEventListener('click', function (event) {
      if (event.target === modal || event.target.getAttribute('data-modal') === 'close') { modal.close(); }
    });
    modal.addEventListener('close', function () {
      document.body.classList.remove('no-scroll');
      if (lastTrigger) { lastTrigger.focus(); }
    });
  }

  /* ---------- Start ---------- */
  readUrl();
  update();
})();
