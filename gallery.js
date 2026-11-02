/* ==========================================================================
   gallery.js - photo gallery with a lightbox (homepage)

   Clicking a photo opens it larger in a <dialog>. Visitors can move between
   photos with the on-screen arrows, the keyboard (Left / Right / Esc) or by
   swiping on a touch screen.
   ========================================================================== */
(function () {
  'use strict';

  var items = Array.prototype.slice.call(document.querySelectorAll('.gallery-item'));
  var dialog = document.getElementById('lightbox');
  if (!items.length || !dialog || typeof dialog.showModal !== 'function') { return; }

  var image = document.getElementById('lightbox-img');
  var caption = document.getElementById('lightbox-caption');
  var counter = document.getElementById('lightbox-count');

  /* Build a simple list of photos from the gallery markup (src, alt, caption) */
  var photos = items.map(function (item) {
    var thumb = item.querySelector('img');
    return {
      src: thumb.getAttribute('src'),
      alt: thumb.getAttribute('alt'),
      caption: item.getAttribute('data-caption') || thumb.getAttribute('alt')
    };
  });

  var current = 0;

  function show(index) {
    current = (index + photos.length) % photos.length;      // wrap around at both ends
    var photo = photos[current];
    image.src = photo.src;
    image.alt = photo.alt;
    caption.textContent = photo.caption;
    counter.textContent = (current + 1) + ' / ' + photos.length;

    // Start loading the neighbouring photos so next/previous feels instant
    [current + 1, current - 1].forEach(function (i) {
      var preload = new Image();
      preload.src = photos[(i + photos.length) % photos.length].src;
    });
  }

  function open(index) {
    show(index);
    dialog.showModal();
    document.body.classList.add('no-scroll');
  }

  function close() {
    dialog.close();
  }

  items.forEach(function (item, index) {
    item.addEventListener('click', function () { open(index); });
  });

  /* Buttons inside the lightbox (event delegation: one listener for all three) */
  dialog.addEventListener('click', function (event) {
    var action = event.target.getAttribute && event.target.getAttribute('data-lightbox');
    if (action === 'close') { close(); }
    else if (action === 'next') { show(current + 1); }
    else if (action === 'prev') { show(current - 1); }
    else if (event.target === dialog) { close(); }           // click on the dark backdrop
  });

  /* Keyboard: arrows move between photos (Esc is handled by the <dialog> itself) */
  dialog.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') { show(current + 1); }
    else if (event.key === 'ArrowLeft') { show(current - 1); }
  });

  /* Swipe left/right on touch screens */
  var touchStartX = null;
  dialog.addEventListener('touchstart', function (event) {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  dialog.addEventListener('touchend', function (event) {
    if (touchStartX === null) { return; }
    var deltaX = event.changedTouches[0].clientX - touchStartX;
    touchStartX = null;
    if (Math.abs(deltaX) > 50) { show(current + (deltaX < 0 ? 1 : -1)); }
  }, { passive: true });

  dialog.addEventListener('close', function () {
    document.body.classList.remove('no-scroll');
  });
})();
