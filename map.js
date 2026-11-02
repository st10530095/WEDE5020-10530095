/* ==========================================================================
   map.js - interactive map of both bakery locations (contact page)

   Uses Leaflet (open-source mapping library) with OpenStreetMap tiles.
   - One marker per location, each with a popup (name, address, hours)
   - "Show on map" buttons in the location cards fly the map to that location
   - The map fits both locations on screen when the page loads

   Note: the marker positions are approximate, because the addresses are
   fictional for this project.
   ========================================================================== */
(function () {
  'use strict';

  var container = document.getElementById('map');
  if (!container) { return; }

  var locations = [
    { id: 'main',  name: 'Main Bakery',   address: '123 Figdale Close, Newlands West, Durban, 4037', hours: 'Mon - Sat, 07:00 - 18:00', lat: -29.7802, lng: 30.9557 },
    { id: 'kiosk', name: 'Kiosk Branch',  address: '45 Musgrave Road, Musgrave, Durban, 4001',       hours: 'Mon - Sun, 08:00 - 16:00', lat: -29.8325, lng: 31.0000 }
  ];

  /* If the Leaflet library could not load (offline, blocked), show a helpful message instead of an empty box */
  if (typeof L === 'undefined') {
    var fallback = document.createElement('p');
    fallback.className = 'map-fallback';
    fallback.textContent = 'The interactive map could not be loaded. Please use the "Get directions" links above.';
    container.appendChild(fallback);
    return;
  }

  var map = L.map(container, { scrollWheelZoom: false });          // scroll-zoom is switched on after the first click

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var markers = {};
  var bounds = [];

  locations.forEach(function (loc) {
    // Build the popup with DOM elements rather than an HTML string
    var popup = document.createElement('div');
    var title = document.createElement('strong');
    title.textContent = 'Golden Crust Bakery - ' + loc.name;
    var address = document.createElement('p');
    address.textContent = loc.address;
    var hours = document.createElement('p');
    hours.textContent = 'Hours: ' + loc.hours;
    popup.appendChild(title);
    popup.appendChild(address);
    popup.appendChild(hours);

    var marker = L.marker([loc.lat, loc.lng], { title: loc.name, alt: loc.name + ' marker' })
      .addTo(map)
      .bindPopup(popup);

    markers[loc.id] = { marker: marker, loc: loc };
    bounds.push([loc.lat, loc.lng]);
  });

  map.fitBounds(bounds, { padding: [50, 50] });

  /* Allow mouse-wheel zoom only once the visitor has clicked the map (avoids "scroll trapping" on the page) */
  map.once('focus', function () { map.scrollWheelZoom.enable(); });
  map.on('click', function () { map.scrollWheelZoom.enable(); });

  /* "Show on map" buttons in the location cards */
  document.querySelectorAll('[data-map-target]').forEach(function (button) {
    button.addEventListener('click', function () {
      var entry = markers[button.getAttribute('data-map-target')];
      if (!entry) { return; }
      container.scrollIntoView({ behavior: 'smooth', block: 'center' });
      map.flyTo([entry.loc.lat, entry.loc.lng], 16, { duration: 1.2 });
      entry.marker.openPopup();
    });
  });
})();
