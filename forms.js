/* ==========================================================================
   forms.js - validation and processing for the Enquiry and Contact forms

   Both forms
   - HTML5 attributes (required, minlength, pattern, type...) are in the HTML;
     this script adds clear, friendly error messages next to each field
   - Validation runs when a visitor leaves a field and again on submit
   - Valid data is sent with AJAX (fetch) so the page does not reload

   Enquiry form  -> shows an estimated cost and an availability check
   Contact form  -> compiles the message into an email the visitor can send
   ========================================================================== */
(function () {
  'use strict';

  /* ======================================================================
     SETTINGS - change these two lines when the site goes live
     ====================================================================== */
  // Demo endpoint that accepts a POST and echoes it back. Swap for a real form service
  // (e.g. Formspree or Netlify Forms) in production, and update the form's action="" to match.
  var FORM_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
  // The email address the contact form message is addressed to.
  var CONTACT_RECIPIENT = 'info@goldencrustbakery.co.za';
  var BAKERY_PHONE = '011 234 5678';
  var REQUEST_TIMEOUT_MS = 8000;

  /* ======================================================================
     ENQUIRY RULES: prices, limits and lead times (kept in one place)
     ====================================================================== */
  var ENQUIRY_TYPES = {
    'custom-cake': { label: 'Custom birthday or celebration cake', unit: 'servings', min: 8, max: 150,
                     base: 450, baseServings: 10, extra: 30, leadDays: 3, topper: true },
    'wedding-cake': { label: 'Wedding cake', unit: 'servings', min: 30, max: 300,
                      base: 1800, baseServings: 50, extra: 35, leadDays: 14, topper: true },
    'catering': { label: 'Catering and bulk bread or pastry order', unit: 'items', min: 20, max: 1000,
                  perItem: 22, bulkFrom: 100, bulkPercent: 10, leadDays: 7, topper: false },
    'general': { label: 'General question', noQuote: true }
  };
  var DELIVERY_FEE = 120;
  var TOPPER_FEE = 60;

  var MESSAGE_TYPES = {
    'general': 'General question',
    'feedback': 'Compliment or feedback',
    'complaint': 'Complaint or problem with an order',
    'event': 'Event or catering question',
    'careers': 'Jobs or volunteering'
  };

  /* ======================================================================
     SMALL HELPERS
     ====================================================================== */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) { node.className = className; }
    if (text !== undefined) { node.textContent = text; }
    return node;
  }

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function toIsoDate(date) {                       // local date -> "2026-10-31"
    return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
  }

  function parseIsoDate(text) {                    // "2026-10-31" -> Date at local midnight (or null if not a real date)
    var match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text);
    if (!match) { return null; }
    var date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    var real = date.getFullYear() === Number(match[1]) && date.getMonth() === Number(match[2]) - 1 && date.getDate() === Number(match[3]);
    return real ? date : null;
  }

  function startOfToday() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }

  function addDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
  }

  function longDate(date) {
    return date.toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  function rand(amount) {
    var sign = amount < 0 ? '-' : '';
    return sign + 'R' + new Intl.NumberFormat('en-US').format(Math.abs(amount));
  }

  function makeReference() {
    var now = new Date();
    var stamp = String(now.getFullYear()).slice(2) + pad(now.getMonth() + 1) + pad(now.getDate());
    return 'GCB-' + stamp + '-' + (1000 + Math.floor(Math.random() * 9000));
  }

  /* ======================================================================
     VALIDATION RULES: each returns an error message, or "" when the value is fine
     ====================================================================== */
  var NAME_PATTERN = /^[\p{L}][\p{L}\s'\u2019.-]*$/u;
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var SA_PHONE_PATTERN = /^(?:\+27|0027|0)[1-9]\d{8}$/;      // 0XX XXX XXXX or +27 XX XXX XXXX

  function lengthRule(input, label) {
    var value = input.value.trim();
    var min = parseInt(input.getAttribute('minlength'), 10) || 0;
    var max = parseInt(input.getAttribute('maxlength'), 10) || Infinity;
    if (!value) { return 'Please enter your ' + label + '.'; }
    if (value.length < min) { return 'Your ' + label + ' needs at least ' + min + ' characters (you have ' + value.length + ').'; }
    if (value.length > max) { return 'Your ' + label + ' can be at most ' + max + ' characters.'; }
    return '';
  }

  var RULES = {
    'name': function (input) {
      var value = input.value.trim();
      var problem = lengthRule(input, 'full name');
      if (problem) { return problem; }
      if (!NAME_PATTERN.test(value)) { return 'Use letters, spaces, hyphens or apostrophes only.'; }
      return '';
    },

    'email': function (input) {
      var value = input.value.trim();
      if (!value) { return 'Please enter your email address.'; }
      if (value.length > 120 || !EMAIL_PATTERN.test(value)) { return 'Enter a valid email address, like name@example.com.'; }
      return '';
    },

    'phone': function (input) {
      var value = input.value.trim();
      if (!value) { return input.required ? 'Please enter your phone number.' : ''; }
      var digits = value.replace(/[\s\-().]/g, '');
      if (!SA_PHONE_PATTERN.test(digits)) { return 'Enter a South African number, like 031 123 4567 or +27 31 123 4567.'; }
      return '';
    },

    'enquiry-type': function (input) { return input.value ? '' : 'Please choose an enquiry type.'; },
    'message-type': function (input) { return input.value ? '' : 'Please choose a message type.'; },

    'quantity': function (input) {
      var value = input.value.trim();
      var min = input.getAttribute('min');
      var max = input.getAttribute('max');
      var unit = input.getAttribute('data-unit') || 'number';
      if (!value) { return 'Please enter the number of ' + unit + '.'; }
      if (!/^\d+$/.test(value)) { return 'Enter a whole number, like 20.'; }
      var n = parseInt(value, 10);
      if (n < Number(min) || n > Number(max)) { return 'Enter a number of ' + unit + ' between ' + min + ' and ' + max + '.'; }
      return '';
    },

    'event-date': function (input) {
      if (!input.value) { return 'Please choose a date.'; }
      var date = parseIsoDate(input.value);
      if (!date) { return 'That is not a valid date. Use the date picker or the format YYYY-MM-DD.'; }
      var today = startOfToday();
      if (date < today) { return 'That date has already passed. Please choose today or a later date.'; }
      if (date > addDays(today, 365)) { return 'We can only take orders up to a year ahead. Please choose an earlier date.'; }
      return '';
    },

    'message': function (input) { return lengthRule(input, 'message'); },

    'consent': function (input) { return input.checked ? '' : 'Please tick the box so we can contact you.'; }
  };

  function isActive(input) {
    return !input.disabled && !input.closest('[hidden]');
  }

  function errorElementFor(input) {
    return document.getElementById(input.id + '-error');
  }

  function setFieldError(input, message) {
    var target = errorElementFor(input);
    if (message) {
      input.setAttribute('aria-invalid', 'true');
      if (target) { target.textContent = message; }
    } else {
      input.removeAttribute('aria-invalid');
      if (target) { target.textContent = ''; }
    }
  }

  function validateField(input) {
    var rule = RULES[input.id];
    if (!rule || !isActive(input)) { setFieldError(input, ''); return ''; }
    var message = rule(input);
    setFieldError(input, message);
    return message;
  }

  /* ======================================================================
     STATUS MESSAGE (the box at the top of each form)
     ====================================================================== */
  function showStatus(box, kind, message) {
    box.textContent = message;
    box.className = 'form-status' + (kind === 'success' ? ' is-success' : kind === 'info' ? ' is-info' : '');
    box.hidden = false;
  }

  function hideStatus(box) {
    box.hidden = true;
    box.textContent = '';
  }

  /* ======================================================================
     AJAX SUBMISSION (fetch): never throws; always resolves to { ok, status }
     ====================================================================== */
  function sendWithAjax(form, payload) {
    if (!('fetch' in window)) { return Promise.resolve({ ok: false, status: 0 }); }

    var controller = 'AbortController' in window ? new AbortController() : null;
    var timer = controller ? window.setTimeout(function () { controller.abort(); }, REQUEST_TIMEOUT_MS) : null;

    return fetch(form.getAttribute('action') || FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(payload),
      signal: controller ? controller.signal : undefined
    }).then(function (response) {
      window.clearTimeout(timer);
      var result = { ok: response.ok, status: response.status };
      // Read (and ignore) the reply so the request finishes cleanly
      return response.text().then(function () { return result; }, function () { return result; });
    }).catch(function () {
      window.clearTimeout(timer);
      return { ok: false, status: 0 };
    });
  }

  function setBusy(form, button, busy, idleText) {
    button.disabled = busy;
    button.textContent = busy ? 'Sending\u2026' : idleText;
    form.setAttribute('aria-busy', busy ? 'true' : 'false');
  }

  /* ======================================================================
     SHARED FORM WIRING (both forms)
     ====================================================================== */
  function collectValues(form) {
    var values = {};
    Array.prototype.forEach.call(form.elements, function (field) {
      if (!field.name || field.disabled || field.closest('[hidden]') || field.name === 'website') { return; }
      if (field.type === 'checkbox') { values[field.name] = field.checked ? field.value || 'yes' : ''; }
      else { values[field.name] = field.value.trim(); }
    });
    return values;
  }

  function setupCounters(form) {
    form.querySelectorAll('[data-counter-for]').forEach(function (counter) {
      var input = document.getElementById(counter.getAttribute('data-counter-for'));
      var max = parseInt(counter.getAttribute('data-max'), 10);
      function update() {
        counter.textContent = input.value.length + ' / ' + max;
        counter.classList.toggle('is-near', input.value.length > max * 0.9);
      }
      input.addEventListener('input', update);
      form.addEventListener('reset', function () { window.setTimeout(update, 0); });
      update();
    });
  }

  function wireValidation(form) {
    // Switch off the browser's own pop-up bubbles so our inline messages are used instead
    // (done here, not in the HTML, so the form still validates natively if JavaScript is off)
    form.noValidate = true;

    Array.prototype.forEach.call(form.elements, function (input) {
      if (!RULES[input.id]) { return; }
      input.addEventListener('blur', function () {
        input.setAttribute('data-touched', 'true');
        validateField(input);
      });
      var live = function () { if (input.getAttribute('data-touched')) { validateField(input); } };
      input.addEventListener('input', live);
      input.addEventListener('change', function () { input.setAttribute('data-touched', 'true'); validateField(input); });
    });
  }

  function validateAll(form) {
    var firstInvalid = null;
    var count = 0;
    Array.prototype.forEach.call(form.elements, function (input) {
      if (!RULES[input.id]) { return; }
      input.setAttribute('data-touched', 'true');
      if (validateField(input)) {
        count += 1;
        if (!firstInvalid) { firstInvalid = input; }
      }
    });
    return { count: count, first: firstInvalid };
  }

  function clearForm(form, statusBox) {
    form.reset();
    Array.prototype.forEach.call(form.elements, function (input) {
      input.removeAttribute('data-touched');
      if (RULES[input.id]) { setFieldError(input, ''); }
    });
    hideStatus(statusBox);
  }

  /* ======================================================================
     ENQUIRY FORM
     ====================================================================== */
  function initEnquiry(form) {
    var statusBox = document.getElementById('enquiry-status');
    var resultBox = document.getElementById('enquiry-result');
    var submitButton = document.getElementById('enquiry-submit');
    var typeSelect = document.getElementById('enquiry-type');
    var quantityRow = form.querySelector('[data-field="quantity"]');
    var dateRow = form.querySelector('[data-field="event-date"]');
    var extrasSet = form.querySelector('[data-field="extras"]');
    var quantityInput = document.getElementById('quantity');
    var dateInput = document.getElementById('event-date');

    var today = startOfToday();
    dateInput.min = toIsoDate(today);
    dateInput.max = toIsoDate(addDays(today, 365));

    /* Show only the questions that apply to the chosen enquiry type (DOM manipulation) */
    function setRowVisible(row, visible) {
      row.hidden = !visible;
      row.querySelectorAll('input, select, textarea').forEach(function (field) {
        field.disabled = !visible;
        if (!visible) {
          if (field.type === 'checkbox') { field.checked = false; } else { field.value = ''; }
          field.removeAttribute('data-touched');
          setFieldError(field, '');
        }
      });
    }

    function applyType() {
      var type = ENQUIRY_TYPES[typeSelect.value];
      var needsDetails = !!type && !type.noQuote;

      setRowVisible(quantityRow, needsDetails);
      setRowVisible(dateRow, needsDetails);
      extrasSet.hidden = !needsDetails;
      extrasSet.querySelectorAll('input').forEach(function (box) { box.disabled = !needsDetails; if (!needsDetails) { box.checked = false; } });

      if (!needsDetails) { return; }

      document.getElementById('quantity-label-text').textContent = 'Number of ' + type.unit;
      quantityInput.min = type.min;
      quantityInput.max = type.max;
      quantityInput.setAttribute('data-unit', type.unit);
      quantityInput.placeholder = 'e.g. ' + (type.unit === 'servings' ? type.baseServings : type.min);
      document.getElementById('quantity-hint').textContent = 'Whole number between ' + type.min + ' and ' + type.max + '.';

      // The message topper only applies to cakes
      var topperBox = document.getElementById('extra-topper');
      topperBox.closest('.checkbox-row').hidden = !type.topper;
      topperBox.disabled = !type.topper;
      if (!type.topper) { topperBox.checked = false; }
    }

    typeSelect.addEventListener('change', applyType);
    applyType();

    /* ----- Quote and availability ----- */
    function calculateQuote(values, type) {
      var lines = [];
      var quantity = parseInt(values.quantity, 10);

      if (type.perItem) {
        var itemsCost = quantity * type.perItem;
        lines.push({ label: quantity + ' items at ' + rand(type.perItem) + ' each', amount: itemsCost });
        if (quantity >= type.bulkFrom) {
          lines.push({ label: 'Bulk discount (' + type.bulkPercent + '% for ' + type.bulkFrom + '+ items)', amount: -Math.round(itemsCost * type.bulkPercent / 100) });
        }
      } else {
        lines.push({ label: 'Base price (up to ' + type.baseServings + ' servings)', amount: type.base });
        var extraServings = Math.max(0, quantity - type.baseServings);
        if (extraServings > 0) {
          lines.push({ label: extraServings + ' extra servings at ' + rand(type.extra) + ' each', amount: extraServings * type.extra });
        }
      }
      if (values['extra-delivery']) { lines.push({ label: 'Delivery within Durban', amount: DELIVERY_FEE }); }
      if (values['extra-topper'] && type.topper) { lines.push({ label: 'Personalised message topper', amount: TOPPER_FEE }); }

      var total = lines.reduce(function (sum, line) { return sum + line.amount; }, 0);
      return { lines: lines, total: total };
    }

    function checkAvailability(values, type) {
      var date = parseIsoDate(values['event-date']);
      var earliest = addDays(startOfToday(), type.leadDays);
      var notes = [];
      if (date.getDay() === 0) { notes.push('Sunday collections are from our Kiosk Branch in Musgrave (08:00 - 16:00). The Main Bakery is closed on Sundays.'); }
      if (date.getDay() === 6) { notes.push('Saturdays book up quickly, so please confirm with us within 48 hours.'); }
      return { date: date, earliest: earliest, enoughNotice: date >= earliest, leadDays: type.leadDays, notes: notes };
    }

    /* ----- Build the response panel ----- */
    function buildResult(values, type, reference, sent) {
      var panel = document.createDocumentFragment();
      var firstName = values.name.split(/\s+/)[0];

      panel.appendChild(el('h2', '', 'Thank you, ' + firstName + '!'));
      panel.appendChild(el('p', 'result-ref', 'Your reference: ' + reference));

      var note = el('p', 'form-status ' + (sent ? 'is-success' : 'is-info'));
      note.textContent = sent
        ? 'Your enquiry was submitted successfully. We will email you within one business day.'
        : 'We could not send your enquiry automatically (you may be offline). Your estimate is below. Please try again later, or call us on ' + BAKERY_PHONE + '.';
      panel.appendChild(note);

      var summary = el('dl', 'summary-list');
      function addRow(term, detail) { summary.appendChild(el('dt', '', term)); summary.appendChild(el('dd', '', detail)); }
      addRow('Enquiry', type.label);
      if (!type.noQuote) {
        addRow(type.unit === 'servings' ? 'Servings' : 'Items', values.quantity);
        addRow('Date needed', longDate(parseIsoDate(values['event-date'])));
      }
      addRow('Email', values.email);
      addRow('Phone', values.phone);
      panel.appendChild(summary);

      if (!type.noQuote) {
        var quote = calculateQuote(values, type);
        var availability = checkAvailability(values, type);

        // Cost table
        panel.appendChild(el('h3', '', 'Estimated cost'));
        var table = el('table', 'quote-table');
        var caption = el('caption', 'visually-hidden-caption');
        table.appendChild(caption);
        var body = el('tbody');
        quote.lines.forEach(function (line) {
          var row = el('tr');
          row.appendChild(el('td', '', line.label));
          row.appendChild(el('td', '', rand(line.amount)));
          body.appendChild(row);
        });
        table.appendChild(body);
        var foot = el('tfoot');
        var totalRow = el('tr');
        totalRow.appendChild(el('th', '', 'Estimated total'));
        totalRow.appendChild(el('td', '', rand(quote.total)));
        foot.appendChild(totalRow);
        table.appendChild(foot);
        caption.textContent = 'Cost breakdown';
        panel.appendChild(table);
        panel.appendChild(el('p', 'form-hint', 'This is an estimate. We confirm the final price when we reply, after talking through flavours, design and delivery.'));

        // Availability
        panel.appendChild(el('h3', '', 'Availability'));
        var badge = el('span', 'badge ' + (availability.enoughNotice ? 'badge-ok' : 'badge-warn'),
                       availability.enoughNotice ? 'Date looks good' : 'Short notice');
        var availabilityLine = el('p');
        availabilityLine.appendChild(badge);
        availabilityLine.appendChild(document.createTextNode(' ' + longDate(availability.date)));
        panel.appendChild(availabilityLine);

        panel.appendChild(el('p', '', availability.enoughNotice
          ? 'We can normally take this order with that much notice. We will confirm once we reply.'
          : 'This type of order needs at least ' + availability.leadDays + ' days\u2019 notice, so the earliest date we can promise is ' + longDate(availability.earliest) + '. Call us on ' + BAKERY_PHONE + ' to ask about a rush order, or choose another date.'));
        availability.notes.forEach(function (text) { panel.appendChild(el('p', 'form-hint', text)); });
      } else {
        panel.appendChild(el('p', '', 'Thanks for your question. A member of our team will reply to ' + values.email + ' within one business day.'));
      }

      var actions = el('div', 'result-actions');
      var again = el('button', 'btn-small', 'Make another enquiry');
      again.type = 'button';
      again.addEventListener('click', function () {
        resultBox.hidden = true;
        resultBox.textContent = '';
        form.hidden = false;
        clearForm(form, statusBox);
        applyType();
        document.getElementById('name').focus();
      });
      actions.appendChild(again);
      if (!type.noQuote) {
        var change = el('a', 'btn-small btn-outline', 'Browse our products');
        change.href = 'products.html';
        actions.appendChild(change);
      }
      panel.appendChild(actions);
      return panel;
    }

    /* ----- Submit ----- */
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var check = validateAll(form);
      if (check.count) {
        showStatus(statusBox, 'error', 'Please fix the ' + check.count + ' highlighted ' + (check.count === 1 ? 'field' : 'fields') + ' and try again.');
        check.first.focus();
        return;
      }
      hideStatus(statusBox);

      if (form.elements.website.value) { return; }            // honeypot filled in: it is a bot, so quietly stop

      var values = collectValues(form);
      var type = ENQUIRY_TYPES[values['enquiry-type']];
      var reference = makeReference();

      setBusy(form, submitButton, true, 'Get my quote');
      sendWithAjax(form, { reference: reference, submittedAt: new Date().toISOString(), form: 'enquiry', fields: values })
        .then(function (result) {
          setBusy(form, submitButton, false, 'Get my quote');
          resultBox.textContent = '';
          resultBox.appendChild(buildResult(values, type, reference, result.ok));
          resultBox.hidden = false;
          form.hidden = true;
          resultBox.focus();
          resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    /* ----- Pre-fill from a product (enquiry.html?product=wedding-cakes) ----- */
    function prefillFromProduct() {
      if (!window.GCB) { return; }
      var id = new URLSearchParams(window.location.search).get('product');
      var product = id && GCB.products.filter(function (p) { return p.id === id; })[0];
      if (!product) { return; }

      var typeKey = product.category === 'cakes' ? (product.id === 'wedding-cakes' ? 'wedding-cake' : 'custom-cake') : 'catering';
      typeSelect.value = typeKey;
      applyType();
      var message = document.getElementById('message');
      if (!message.value) {
        message.value = 'Hi, I would like to enquire about: ' + product.name + '.';
        message.dispatchEvent(new Event('input'));
      }
      showStatus(statusBox, 'info', 'We have started your enquiry about "' + product.name + '". Please complete the rest of the form.');
    }

    setupCounters(form);
    wireValidation(form);
    prefillFromProduct();
  }

  /* ======================================================================
     CONTACT FORM
     ====================================================================== */
  function initContact(form) {
    var statusBox = document.getElementById('contact-status');
    var resultBox = document.getElementById('contact-result');
    var submitButton = document.getElementById('contact-submit');

    function oneLine(text) { return text.replace(/[\r\n]+/g, ' ').trim(); }   // stops line breaks sneaking into the subject

    /* Compile the validated message into an email */
    function buildEmail(values) {
      var typeLabel = MESSAGE_TYPES[values['message-type']] || 'Message';
      var subject = 'Website message (' + typeLabel + ') from ' + oneLine(values.name);
      var lines = [
        'Hello Golden Crust Bakery,', '',
        values.message, '',
        '---',
        'Message type: ' + typeLabel,
        'Name: ' + oneLine(values.name),
        'Email: ' + oneLine(values.email)
      ];
      if (values.phone) { lines.push('Phone: ' + oneLine(values.phone)); }
      lines.push('Sent from the contact form on the Golden Crust Bakery website.');
      var body = lines.join('\n');

      var link = 'mailto:' + CONTACT_RECIPIENT +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body.replace(/\n/g, '\r\n'));
      return { to: CONTACT_RECIPIENT, subject: subject, body: body, mailto: link };
    }

    function copyText(text, feedback) {
      function done(ok) { feedback.textContent = ok ? 'Email text copied. You can paste it into any email app.' : 'Copy did not work. Please select the text above and copy it manually.'; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
        return;
      }
      var temp = document.createElement('textarea');       // fallback for older browsers
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(temp);
      done(ok);
    }

    function buildResult(values, email, sent) {
      var panel = document.createDocumentFragment();
      panel.appendChild(el('h2', '', 'Your email is ready, ' + values.name.split(/\s+/)[0] + '!'));

      var note = el('p', 'form-status ' + (sent ? 'is-success' : 'is-info'));
      note.textContent = sent
        ? 'Your message was submitted successfully. To send it as an email too, use the button below.'
        : 'We could not submit your message automatically (you may be offline). Please send it as an email using the button below.';
      panel.appendChild(note);

      var summary = el('dl', 'summary-list');
      summary.appendChild(el('dt', '', 'To'));
      summary.appendChild(el('dd', '', email.to));
      summary.appendChild(el('dt', '', 'Subject'));
      summary.appendChild(el('dd', '', email.subject));
      panel.appendChild(summary);

      panel.appendChild(el('pre', 'email-preview', email.body));

      var feedback = el('p', 'form-hint');
      feedback.setAttribute('role', 'status');

      var actions = el('div', 'result-actions');
      var open = el('a', 'cta-button', 'Open in my email app');
      open.href = email.mailto;
      actions.appendChild(open);

      var copy = el('button', 'btn-small btn-outline', 'Copy email text');
      copy.type = 'button';
      copy.addEventListener('click', function () { copyText('To: ' + email.to + '\nSubject: ' + email.subject + '\n\n' + email.body, feedback); });
      actions.appendChild(copy);

      var edit = el('button', 'btn-small btn-outline', 'Edit my message');
      edit.type = 'button';
      edit.addEventListener('click', function () {
        resultBox.hidden = true;
        resultBox.textContent = '';
        form.hidden = false;
        document.getElementById('message').focus();
      });
      actions.appendChild(edit);

      panel.appendChild(actions);
      panel.appendChild(feedback);
      return panel;
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var check = validateAll(form);
      if (check.count) {
        showStatus(statusBox, 'error', 'Please fix the ' + check.count + ' highlighted ' + (check.count === 1 ? 'field' : 'fields') + ' and try again.');
        check.first.focus();
        return;
      }
      hideStatus(statusBox);

      if (form.elements.website.value) { return; }            // honeypot filled in: bot

      var values = collectValues(form);
      var email = buildEmail(values);

      setBusy(form, submitButton, true, 'Prepare my email');
      sendWithAjax(form, { submittedAt: new Date().toISOString(), form: 'contact', fields: values })
        .then(function (result) {
          setBusy(form, submitButton, false, 'Prepare my email');
          resultBox.textContent = '';
          resultBox.appendChild(buildResult(values, email, result.ok));
          resultBox.hidden = false;
          form.hidden = true;
          resultBox.focus();
          resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    setupCounters(form);
    wireValidation(form);
  }

  /* ======================================================================
     START
     ====================================================================== */
  function init() {
    var enquiry = document.getElementById('enquiry-form');
    var contact = document.getElementById('contact-form');
    if (enquiry) { initEnquiry(enquiry); }
    if (contact) { initContact(contact); }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
