/* ==========================================================================
   products-data.js
   Product catalogue used by products.js (dynamic listing, search, filter, sort)
   and forms.js (pre-filling the enquiry form from a product).
   To add a product, add another object to the list below - the products page
   and the filters update automatically.
   ========================================================================== */
window.GCB = window.GCB || {};

GCB.categories = {
  "bread": "Bread",
  "cakes": "Custom Cakes",
  "pastries": "Pastries"
};

GCB.products = [
  {
    "id": "sourdough-loaf",
    "name": "Sourdough Loaf",
    "category": "bread",
    "price": 55,
    "priceFrom": false,
    "image": "images/sourdough-bread-sliced",
    "alt": "Sliced sourdough loaf with a crisp golden crust and open crumb",
    "short": "Slow-fermented for a rich flavour and crisp crust.",
    "description": "Our signature sourdough is made with a living starter and fermented slowly for 18 hours, giving it a tangy flavour, a chewy open crumb and a crackling golden crust. Baked fresh every morning at the Main Bakery.",
    "details": [
      "Baked fresh every morning",
      "Slow-fermented for 18 hours",
      "Best enjoyed within 3 days, or freeze to keep"
    ],
    "allergens": "Contains gluten (wheat).",
    "widthSm": 360,
    "widthLg": 675,
    "heightLg": 1200
  },
  {
    "id": "rye-bread",
    "name": "Rye Bread",
    "category": "bread",
    "price": 60,
    "priceFrom": false,
    "image": "images/crusty-bread-loaves",
    "alt": "Two crusty rye and wheat loaves with scored tops",
    "short": "Dense and hearty, made with a blend of rye and wheat flour.",
    "description": "A dense, hearty loaf made with a blend of rye and wheat flour and a touch of caraway. Perfect for open sandwiches, smoked fish and strong cheeses.",
    "details": [
      "Rye and wheat flour blend",
      "Scored by hand before baking",
      "Keeps well for up to 5 days"
    ],
    "allergens": "Contains gluten (rye and wheat).",
    "widthSm": 640,
    "widthLg": 1200,
    "heightLg": 800
  },
  {
    "id": "whole-wheat-loaf",
    "name": "Whole Wheat Loaf",
    "category": "bread",
    "price": 50,
    "priceFrom": false,
    "image": "images/whole-wheat-loaf",
    "alt": "Freshly baked loaf cut into slices on a dark table beside ears of wheat and a bread knife",
    "short": "A wholesome everyday loaf, soft on the inside with a golden crust.",
    "description": "A wholesome everyday loaf made with stone-ground whole wheat flour. Soft on the inside with a golden crust, it makes excellent toast and school lunch sandwiches.",
    "details": [
      "Stone-ground whole wheat flour",
      "Baked daily",
      "Available sliced or unsliced"
    ],
    "allergens": "Contains gluten (wheat).",
    "widthSm": 427,
    "widthLg": 800,
    "heightLg": 1200
  },
  {
    "id": "birthday-cakes",
    "name": "Birthday Cakes",
    "category": "cakes",
    "price": 450,
    "priceFrom": true,
    "image": "images/birthday-cake-with-candles",
    "alt": "Chocolate birthday cake decorated with colourful glitter candles",
    "short": "Custom designed and flavoured cakes for any celebration.",
    "description": "Custom designed birthday cakes made to order in your choice of flavour, filling and decoration. Prices start at R450 for a cake that serves 10, with extra servings available.",
    "details": [
      "Serves 10 from R450 (extra servings from R30 each)",
      "Order at least 3 days ahead",
      "Delivery within Durban available"
    ],
    "allergens": "Contains gluten, eggs and milk. Please tell us about any allergies when you order.",
    "widthSm": 640,
    "widthLg": 1200,
    "heightLg": 769
  },
  {
    "id": "wedding-cakes",
    "name": "Wedding Cakes",
    "category": "cakes",
    "price": 1800,
    "priceFrom": true,
    "image": "images/wedding-cakes-with-flowers",
    "alt": "Elegant white wedding cakes decorated with fresh flowers and greenery",
    "short": "Elegant multi-tier cakes tailored to your wedding theme.",
    "description": "Elegant cakes designed around your wedding theme, with fresh flowers and finishes of your choice. Prices start at R1,800 for 50 servings. We recommend booking a tasting at least a month ahead.",
    "details": [
      "Serves 50 from R1,800 (extra servings from R35 each)",
      "Order at least 14 days ahead",
      "Tastings available on request"
    ],
    "allergens": "Contains gluten, eggs and milk. Please tell us about any allergies when you order.",
    "widthSm": 427,
    "widthLg": 801,
    "heightLg": 1200
  },
  {
    "id": "chocolate-drip-cake",
    "name": "Chocolate Drip Cake",
    "category": "cakes",
    "price": 650,
    "priceFrom": false,
    "image": "images/chocolate-drip-cake",
    "alt": "Vanilla cake with glossy chocolate ganache drip and chocolate shards on top",
    "short": "Vanilla sponge with silky chocolate ganache and chocolate shards.",
    "description": "Layers of vanilla sponge and buttercream finished with a glossy dark chocolate ganache drip and hand-broken chocolate shards. A favourite for birthdays and dinner parties.",
    "details": [
      "Serves 12",
      "Ready to collect with 3 days' notice",
      "Optional message topper (R60)"
    ],
    "allergens": "Contains gluten, eggs, milk and soy.",
    "widthSm": 640,
    "widthLg": 1200,
    "heightLg": 928
  },
  {
    "id": "butter-croissants",
    "name": "Butter Croissants",
    "category": "pastries",
    "price": 25,
    "priceFrom": false,
    "image": "images/butter-croissant",
    "alt": "Golden flaky butter croissant",
    "short": "Flaky, buttery croissants baked fresh each morning.",
    "description": "Laminated by hand with real butter, our croissants are crisp and flaky outside and soft and airy inside. Baked fresh each morning and best eaten the same day.",
    "details": [
      "Made with real butter",
      "Baked fresh each morning",
      "Bulk boxes available for events"
    ],
    "allergens": "Contains gluten, milk and eggs.",
    "widthSm": 640,
    "widthLg": 1200,
    "heightLg": 1200
  },
  {
    "id": "muffins",
    "name": "Muffins",
    "category": "pastries",
    "price": 20,
    "priceFrom": false,
    "image": "images/chocolate-chip-muffins",
    "alt": "Chocolate chip muffin surrounded by chocolate chunks",
    "short": "Available in blueberry, chocolate chip, and banana flavours.",
    "description": "Big, moist muffins in blueberry, chocolate chip and banana flavours. Ideal for lunch boxes, office meetings and tea time.",
    "details": [
      "Blueberry, chocolate chip and banana",
      "Baked daily",
      "Boxes of 6 or 12 for offices and events"
    ],
    "allergens": "Contains gluten, eggs and milk. May contain traces of nuts.",
    "widthSm": 464,
    "widthLg": 869,
    "heightLg": 1200
  },
  {
    "id": "danish-pastries",
    "name": "Danish Pastries",
    "category": "pastries",
    "price": 32,
    "priceFrom": false,
    "image": "images/assorted-danish-pastries",
    "alt": "Tray of flaky Danish pastries topped with pecan nuts, custard and fruit",
    "short": "Flaky pastries with custard, pecan and seasonal fruit.",
    "description": "Flaky laminated pastry filled with vanilla custard and topped with pecan crumble or seasonal fruit and a dusting of icing sugar. A treat with coffee at any time of day.",
    "details": [
      "Pecan, custard and fruit toppings",
      "Baked daily",
      "Perfect with a morning coffee"
    ],
    "allergens": "Contains gluten, milk, eggs and tree nuts (pecans).",
    "widthSm": 427,
    "widthLg": 800,
    "heightLg": 1200
  }
];

/* Responsive image helpers: each product has a small (-sm) and large (-lg) photo */
GCB.imageSrc = function (product) {
  return product.image + '-lg.jpg';
};

GCB.imageSrcset = function (product) {
  return product.image + '-sm.jpg ' + product.widthSm + 'w, ' + product.image + '-lg.jpg ' + product.widthLg + 'w';
};

/* Format a number as South African rand with comma grouping, e.g. 1800 -> "R1,800" */
GCB.formatPrice = function (amount) {
  return 'R' + new Intl.NumberFormat('en-US').format(amount);
};
