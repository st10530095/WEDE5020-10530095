# Golden Crust Bakery Website

**Live website:** https://golden-crust-bakery-durban.netlify.app *(deployed on Netlify, see [Deployment](#deployment))*
**Repository:** https://github.com/st10530095/WEDE5020-10530095 *(private)*

## Student Information
- **Name:** Lethiwe Zekhethelo Zuma
- **Student Number:** st10530095
- **Subject:** Web dev (WEDE5020)

## Project Overview
This repository contains the source code for the Golden Crust Bakery website,
developed as part of the WEDE5020 Portfolio of Evidence (PoE). Golden Crust
Bakery is a hypothetical family-owned bakery based in Durban, and this
project showcases the design and development of a professional, responsive
website for the organisation across three phases: HTML structure (Part 1),
CSS styling (Part 2), and JavaScript functionality and SEO (Part 3).

## Website Goals and Objectives
- Establish a professional online presence for Golden Crust Bakery.
- Enable customers to browse products and submit custom cake/catering enquiries online.
- Reduce reliance on phone enquiries by providing clear information (location, hours, menu).
- Rank well in local search for bakery, cake and catering searches in Durban (Part 3).

## Key Features and Functionality
- Homepage with hero section, animated statistics, featured products and a photo gallery with lightbox.
- About Us page with history, mission, vision, an interactive "Our Journey" timeline (tabs) and the team.
- Products page that loads the product list with JavaScript, with search, category filters, sorting and a product details pop-up.
- Enquiry page with a validated form that returns an instant cost estimate and availability check, plus an FAQ accordion.
- Contact page with two locations on an interactive map, and a validated form that compiles the message into an email.
- Search engine optimisation (SEO), security headers, accessibility features and fast loading.
- A layout designed for mobile, tablet, desktop and large screens, with photos that adapt to each.

## Timeline and Milestones
- **Part 1 (Planning):** Organisation selection, proposal approval, content research, sitemap, initial HTML structure. *(Complete)*
- **Part 2 (Styling):** CSS styling applied across all pages, responsive design. *(Complete, 88%)*
- **Part 3 (Functionality and SEO):** JavaScript interactivity, form validation, SEO, security, deployment. *(Complete)*

## Project History at a Glance

| Part | Focus | Main outputs | Status |
|---|---|---|---|
| Part 1 | Planning and HTML foundation | Approved project proposal, content research, sitemap, file structure, five HTML pages, private GitHub repository | Complete |
| Part 2 | CSS styling and responsive design | External stylesheet, typography, Flexbox and Grid layouts, pseudo-classes, responsive breakpoints | Complete (88%) |
| Part 3 | JavaScript, forms, SEO and deployment | Interactive features, dynamic products, validated forms, SEO, security headers, live website | Complete |

Each part builds on the one before it. The sections below document all three, so this README can be read from the beginning.

## Part 1 Details

Part 1 focused on project initiation and planning: choosing the organisation,
planning the website, researching and sourcing content, and building the first version of
the site in plain HTML.

### 1.1 The organisation
**Golden Crust Bakery** is a hypothetical family-owned bakery in Newlands West, Durban, established in 2015. It began as a home-baking operation in a family kitchen and grew into a neighbourhood bakery known for artisan bread, custom cakes and pastries. The organisation was chosen because a bakery has clear products to show, a local audience, and a real need for online ordering and enquiries.

| | |
|---|---|
| **Mission** | To bring high-quality, freshly baked goods to the community using traditional baking techniques and locally sourced ingredients. |
| **Vision** | To become the go-to bakery for celebrations and everyday treats across Durban, known for consistency, warmth and craftsmanship. |
| **Target audience** | Local families and young professionals in Newlands West and surrounding Durban suburbs; people planning birthdays, weddings and corporate events who need custom cakes and catering; schools and community groups ordering in bulk for fundraisers. |

### 1.2 Website Project Proposal
A proposal document (Word) was written and approved by the lecturer before development started. It covered:

- **Organisation overview:** name, history, mission, vision and target audience.
- **Website goals and KPIs:** drive foot traffic and online orders; measured by the number of custom-order enquiries per month, monthly unique visitors, average time on the Products page, and the percentage drop in phone calls asking for basic information (menu, hours, location) within three months.
- **Current website analysis:** the bakery had no website, only a Facebook page. Strength: strong customer engagement and a good local reputation. Weaknesses: no menu, prices or opening hours in one place, no online way to ask for a custom cake, and poor discoverability on search engines.
- **Proposed features:** a homepage with a hero image and call to action, an About Us page, a Products page with prices, an Enquiry page with a form, and a Contact page with locations and a map.
- **Design and user experience:** a warm palette of cream, brown and gold; a clean sans-serif for body text with a soft serif for headings; a simple responsive layout with a persistent top navigation bar; a low-fidelity wireframe of the homepage (header and navigation, hero, introduction, three product cards, call-to-action banner, footer).
- **Technical requirements:** a registered domain name and low-cost shared hosting; HTML5 for structure, CSS3 for styling and JavaScript for interactivity in later parts.
- **Timeline and budget:** the three PoE parts as milestones; an estimated budget of about R200 per year for the domain, R1,200 per year for hosting, and R8,000 for design and development if outsourced (this project is self-developed).

### 1.3 Content research and sourcing
- **Text:** all page copy (homepage, about, products, contact) was written originally for the project. Product names and prices were based on research into comparable South African bakery pricing.
- **Images:** free-to-use photographs from Unsplash and Pexels, each recorded in a source-and-attribution log with the photographer, link and licence (see [References](#references)).
- **Organisation of research:** a compressed research folder with `images/`, `documents/` and `text/` sub-folders, and clear lowercase file names with hyphens.

### 1.4 Sitemap and file structure
The sitemap (see [Sitemap](#sitemap) below and `sitemap.png`) has five pages: Home, About Us, Products, Enquiry and Contact. The project folder uses `css/`, `js/` and `images/` folders with the five HTML files in the root.

### 1.5 HTML structure
- Five linked pages: `index.html`, `about.html`, `products.html`, `enquiry.html`, `contact.html`.
- Semantic HTML5 structure on every page: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` and `<footer>`.
- A navigation menu repeated on every page with working links, and the current page marked with `aria-current="page"`.
- Headings, paragraphs, lists, images with `alt` text and links, with comments explaining each section and consistent indentation.
- Basic HTML forms on the Enquiry and Contact pages (styled in Part 2 and made functional in Part 3).

### 1.6 GitHub repository
A private repository named `WEDE5020-10530095` was created, the project files were uploaded, and this README was started with the required headings: project title, student information, overview, goals, features, timeline, sitemap, changelog and references.

### 1.7 Challenges and how they were solved
| Challenge | Solution |
|---|---|
| Images did not appear on the live pages because the HTML pointed at file paths on my own computer (for example `C:\Users\...`) | Changed every image to a relative path inside the project's `images/` folder |
| Part of the About and Contact pages was deleted by accident while editing in the browser | Restored the missing sections and recorded the fix in the changelog |
| The images folder was created with the wrong name, so no photo could be found | Renamed it to `images` and re-uploaded the photos |

## Part 2 Details
Part 2 focused on designing the visuals for the desktop solution and
implementing responsive design. An external stylesheet (`css/style.css`) was
created and linked to all five HTML pages. Key work completed:

- **Base styling:** applied a consistent font family, colour palette (cream,
  gold, and brown tones reflecting the bakery brand), and a CSS reset for
  cross-browser consistency.
- **Typography:** styled headings with a serif display font and body text
  with a clean sans-serif font, using `font-size`, `line-height`, and
  `letter-spacing` for a clear visual hierarchy.
- **Layout:** used CSS Flexbox for the header/navigation and the About page
  history section, and CSS Grid for the product grid, team grid, mission/
  vision section, and contact locations.
- **Visual styling:** applied colour, background-color, border-radius, and
  box-shadow to cards and buttons, with `:hover`, `:focus`, and `:active`
  pseudo-classes on navigation links, buttons, and form fields for
  interactivity.
- **Responsive design:** implemented two breakpoints using media queries
  (tablet: max-width 900px, mobile: max-width 600px). The product/team grids
  and mission/locations sections collapse from multiple columns to a single
  column on smaller screens, the navigation stacks vertically on mobile, and
  relative units are used throughout for consistent scaling.

The Part 2 feedback led to clearer documentation of the CSS pseudo-classes
and breakpoints, which are described in the next section (Part 3, section 1).

---

## Part 3 Details

Part 3 adds JavaScript functionality, search engine optimisation (SEO), form
validation and deployment. The sections below follow the Part 3 brief.

### 1. Working through feedback from Part 2
Part 2 was awarded **88%**. These are the lecturer's comments from the marked rubric, and what was done about each one. Every change is also recorded in the [Changelog](#changelog).

| Rubric item | Mark | Lecturer's comment | What was done |
|---|---|---|---|
| README contains all relevant information | 3/5 | "README document is more dwelling on part 2 only, least to no information presented for part 1 while we increment from it making the README documentation incomplete." | The README is now cumulative. A project history table and a full "Part 1 Details" section (organisation, proposal, content research, sitemap, HTML structure, GitHub set-up and challenges) now sit beside the Part 2 and Part 3 sections |
| Responsive design: images | 3/5 | "Some sectors do not have visible images that describe the content or product advertised. Which leads to lack of content and information clarity." | Every product and section now has a clear photo with descriptive alt text. Photos were added beside the Enquiry form (the cakes it can quote for) and the Contact form (the bakery shop and pastries). Every image also uses `srcset` and `sizes` so it adapts to the screen size |
| GitHub: project pushed with multiple descriptive commits | 3/5 | "Only 2 commits were executed, which indicates the completion of the whole project first before pushing it to GITHUB. Instead of at least the minimum of 5 commits." | Part 3 was pushed in 12 small commits, one for each feature, each with a descriptive message (see the [Commit log](#commit-log-part-3)). The same habit will continue in future work |
| CSS pseudo-classes used | 7/10 | "Pseudo classes are used but some are not well aligned with the directive of the project." | Every pseudo-class was reviewed. Each interactive element now has hover, keyboard-focus and pressed (active) states, and the hover lift was removed from the non-interactive team photos. A full table is in [CSS pseudo-classes used](#css-pseudo-classes-used) |
| Media queries and breakpoints for tablet and mobile | 8/10 | "Only the mobile was considered, not the Tablet viewpoint which led to mark deduction." | A dedicated **tablet breakpoint (601px to 1024px)** was added with its own layout, together with large-screen and landscape-phone queries. It was tested at 768px, 820px and 1024px. See [Responsive breakpoints](#responsive-breakpoints) |

Other refinements made to the Part 2 work:

| Area | Improvement | Why it matters |
|---|---|---|
| Typography | Poppins and Playfair Display are now self-hosted in `fonts/` with `font-display: swap` | The site looks the same on every device, not only computers that have the fonts installed |
| Hero banner | The CSS `filter: brightness()` was replaced with a dark overlay (`.hero::before`) | Same look, cheaper to paint, better Lighthouse speed score |
| Contact page | The two Google Maps iframes were replaced by one interactive Leaflet map | Required by Part 3 and loads faster than two embedded iframes |
| Navigation | Added a "Skip to main content" link, a footer navigation bar and visible keyboard focus outlines | Accessibility and internal linking |
| Images | Photos were resized and compressed (26 MB down to 2.1 MB), given descriptive names, and saved in a small and a large size | Page speed and SEO (see section 3) |

#### Responsive breakpoints

| Screen | Width | Layout |
|---|---|---|
| **Mobile** | up to 600px | One column everywhere; stacked navigation; shorter hero; 2-column gallery; form photos under the form |
| **Tablet** | 601px to 1024px | Navigation in one row (centred under the logo on small tablets); 2-column product grid; 3 featured cards and 3-column gallery; 2-column mission/vision, team and location cards; product pop-up keeps the photo beside the text; form photos in a row under the form |
| **Desktop** | 1025px and up | 3-column product grid; 4-column gallery; form with photos beside it |
| **Large screens** | 1400px and up | Wider content area (1240px), slightly larger base text, taller hero |
| **Phones on their side** | height 520px or less, landscape | Header scrolls away instead of sticking, so the short screen is not wasted |

Layouts were tested automatically at 1280px, 1024px, 768px and 375px, and for horizontal scrolling at 820px as well.

#### CSS pseudo-classes used
Pseudo-classes make the interface respond to what the visitor is doing. Every interactive element has a hover, a keyboard-focus and a pressed state:

| Pseudo-class | Used on | Purpose |
|---|---|---|
| `:hover` | Navigation links, logo, buttons, filter chips, product cards, gallery photos, tabs, FAQ questions, form fields, table rows, footer links | Shows that the element can be used |
| `:focus` and `:focus-visible` | All links, buttons, form fields, tabs, FAQ questions, gallery, lightbox and modal controls | Keyboard users can always see where they are |
| `:active` | Navigation links, buttons, chips, tabs, FAQ questions, gallery photos, lightbox, modal and back-to-top buttons | Shows the element is being pressed |
| `:visited` | Links inside paragraphs | Shows pages that were already opened |
| `:focus-within` | Form rows and product cards | Highlights the whole group when a control inside it is selected |
| `:disabled` | Submit buttons and form fields that do not apply | Shows that something is unavailable and stops the hover effect |
| `:checked` with `:has()` | Checkbox labels | Highlights ticked options |
| `:user-valid` and `:user-invalid` | Form fields | Green or red border after the visitor has filled a field in |
| `:nth-child(even)`, `:first-child`, `:last-child`, `:not()` | Quote table rows, FAQ items, text links | Zebra rows, spacing and selecting links that are not buttons |
| `:target` | Anchor links | Keeps the section clear of the sticky header |

### 2. Functionality: JavaScript enhancements

All JavaScript is written by hand without jQuery or other frameworks. This keeps the pages light (every page loads under 50 KB of JavaScript) and follows the "page speed" requirement in the SEO section. Each page only loads the scripts it needs.

#### 2.1 Interactive elements

| Brief requirement | Where | Implementation |
|---|---|---|
| **Accordion** | `enquiry.html` (FAQ) | `js/script.js` `initAccordions()`: buttons with `aria-expanded`, animated open/close, only one answer open at a time, Up/Down/Home/End keys |
| **Tabs** | `about.html` ("Our Journey") | `js/script.js` `initTabs()`: tab buttons are created from the HTML panels, WAI-ARIA tabs pattern, Left/Right/Home/End keys |
| **Modal** | `products.html` | `js/products.js`: product details in a native `<dialog>` (Esc to close, click outside to close, focus returns to the button) |
| **Interactive map** | `contact.html` | `js/map.js`: Leaflet with OpenStreetMap tiles, a marker and popup for each bakery, "Show on map" buttons that fly to a location |
| **Animations and transitions** | All pages | CSS transitions and keyframes (hero text fade-in, card hover lift, accordion slide, modal zoom) and JavaScript scroll-reveal using `IntersectionObserver`, animated count-up statistics on the homepage. All motion is switched off for visitors who set "reduce motion" |
| **Advanced DOM manipulation** | All pages | Elements are created with `createElement` (product cards, tab buttons, back-to-top button, quote tables, email preview); event delegation; `DocumentFragment` for batch inserts; `URLSearchParams` and `history.replaceState` for shareable filters; forms show and hide questions depending on the answer |
| **Gallery with lightbox** | `index.html` ("From Our Oven") | `js/gallery.js`: 8 photos open in a `<dialog>` lightbox with next/previous buttons, Left/Right/Esc keys, swipe on touch screens, a counter and neighbour pre-loading |

#### 2.2 Dynamic content
- The product cards on `products.html` are **not written in the HTML**. `js/products-data.js` holds the catalogue (9 products) and `js/products.js` builds the cards from it.
- **Search:** typing in the search box filters by name, description and category as you type.
- **Filter:** category buttons (All, Bread, Custom Cakes, Pastries) with `aria-pressed` state.
- **Sort:** featured, price low to high, price high to low, name A to Z.
- A live result count ("Showing 3 of 9 products") is announced to screen readers, and an empty state offers a "Clear filters" button.
- The filters are stored in the address bar (for example `products.html?category=cakes&sort=price-desc`) so the homepage cards can link straight to a filtered view.
- A `<noscript>` fallback lists the products for browsers without JavaScript, and the same products are described in structured data for search engines.

### 3. Search Engine Optimisation (SEO)

#### 3.1 On-page SEO

**Keyword research.** I reviewed how Durban bakeries and cake makers describe themselves in a public guide to Durban cake shops (Eat Out, n.d.) and thought about what a customer in Durban would type when they need a bakery. Common phrases were "custom cakes", "birthday cakes", "wedding cakes", "fresh bread" and "pre-order". Search volumes were not measured with a paid tool; Google Keyword Planner and Google Trends would be the next step for a real client.

| Target keyword | Used in |
|---|---|
| bakery in Durban / artisan bakery Durban | Home title, H1 area, meta description, About title |
| custom birthday cakes Durban | Home and Products meta descriptions, Enquiry title, product copy |
| wedding cakes Durban | Products description and modal, Enquiry copy |
| sourdough bread Durban | Products page, product names and alt text |
| bakery Newlands West / Musgrave | Contact title, footer, structured data |
| catering bakery Durban / bulk pastries | Enquiry page title, FAQ and form |
| fresh pastries / croissants Durban | Products page, gallery captions |

**Title tags and meta descriptions.** Each page has a unique title (under 62 characters) and a unique meta description (120 to 165 characters) containing the main keywords:

| Page | Title tag | Meta description |
|---|---|---|
| Home | Golden Crust Bakery | Artisan Bread & Custom Cakes, Durban (58 characters) | Golden Crust Bakery is a family-owned artisan bakery in Newlands West, Durban. Fresh sourdough, custom birthday and wedding cakes, and pastries baked daily. (156 characters) |
| About | About Golden Crust Bakery | Family-Owned Durban Bakery (54 characters) | Meet the family behind Golden Crust Bakery, a Durban artisan bakery since 2015. Read our story, mission and vision, and meet our bakers and cake decorators. (156 characters) |
| Products | Bread, Cakes & Pastries in Durban | Golden Crust Bakery (55 characters) | Browse sourdough, rye and whole wheat bread, custom birthday and wedding cakes, croissants, muffins and Danish pastries baked fresh daily in Durban. (148 characters) |
| Enquiry | Custom Cake & Catering Enquiry | Golden Crust Bakery Durban (59 characters) | Get a quick quote for a custom birthday cake, wedding cake or bulk bread and pastry order from Golden Crust Bakery in Durban. See cost and availability instantly. (162 characters) |
| Contact | Contact Us | Bakery in Newlands West & Musgrave, Durban (55 characters) | Find Golden Crust Bakery in Newlands West and Musgrave, Durban. See opening hours, phone numbers and an interactive map, or send us a message online. (149 characters) |

**Other on-page measures**

| Measure | What was done |
|---|---|
| Header tags | Exactly one `<h1>` per page, then logical `<h2>` and `<h3>` levels (checked with the HTML validator) |
| Image optimisation | Descriptive file names (for example `sourdough-bread-sliced.jpg`, `wedding-cakes-with-flowers.jpg`), descriptive alt text on every image, `width` and `height` attributes, `loading="lazy"` below the fold, and every photo has a small and a large file used through `srcset` and `sizes`. Total image weight reduced from 26 MB to 2.1 MB |
| URL structure | Short, lowercase, descriptive file names (`about.html`, `products.html`, `enquiry.html`, `contact.html`) and filterable product links such as `products.html?category=bread` |
| Internal linking | Links in the body copy between all pages, product cards linking to filtered product lists, "Enquire" buttons that pre-fill the enquiry form, a footer navigation on every page |
| Mobile-friendliness | Viewport meta tag, responsive CSS, tap targets of at least 44px, `theme-color`; Lighthouse "mobile" run |
| Social sharing tags | Open Graph and Twitter card tags so shared links show a title, description and photo |
| Canonical URLs and language | `<link rel="canonical">` on every page and `lang="en-ZA"` |
| Structured data (JSON-LD) | `Organization` and two `Bakery` locations (address, geo coordinates, opening hours) on the homepage, a `Product` list on the products page, a `ContactPage` on the contact page |

#### 3.2 Off-page SEO
Off-page SEO happens outside the website, so for this project it is written as a launch plan:

- **Backlinks:** create a Google Business Profile for each bakery; list the bakery in South African business directories (for example Brabys and Yellow Pages South Africa) and in a wedding directory such as Hitched; ask Durban food bloggers and the school and community groups the bakery already supports to link to the website; pitch the bakery to guides such as Eat Out.
- **Social media:** keep the existing Facebook page and add Instagram for cake photos; post the new "From Our Oven" photos with a link to the quote page; use a WhatsApp Business link. The Open Graph tags make shared links look professional.
- **Local SEO:** keep the business name, address and phone number identical everywhere (website footer, contact page, structured data and directories); add "Durban", "Newlands West" and "Musgrave" to titles and headings; collect Google reviews from happy customers; the embedded map and `Bakery` structured data tell Google exactly where both locations are.

#### 3.3 Additional requests

| Request | Implementation |
|---|---|
| **robots.txt** | `robots.txt` allows crawling of the whole site, blocks the developer file `README.md` and points to the sitemap |
| **sitemap.xml** | `sitemap.xml` lists all five pages with last-modified date, change frequency and priority. (`sitemap.png` is the visual sitemap from Part 1) |
| **Page speed** | Images compressed (26 MB to 2.1 MB); lazy loading; `width`/`height` to stop layout shift; self-hosted fonts with `font-display: swap` and preloading; `defer` on all scripts; no JavaScript framework; per-page scripts; caching rules in `_headers`. Lighthouse results are below |
| **Security** | See the security table below |

**Security measures**

| Measure | Why |
|---|---|
| HTTPS and Strict-Transport-Security header | Netlify provides HTTPS; the header tells browsers to always use it |
| Content Security Policy (`_headers`) | Only allows scripts, styles, images and connections from places the site trusts (itself, the Leaflet CDN, OpenStreetMap tiles and the form endpoint), which limits cross-site scripting damage |
| `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy` | Stops clickjacking, file-type guessing and unnecessary data sharing, and switches off unused browser features |
| Subresource Integrity on the Leaflet files | The browser refuses the library if the file was ever changed |
| No `innerHTML` with visitor input | Everything a visitor types is displayed with `textContent`, which prevents script injection |
| Form validation and honeypot field | Checks every field and quietly ignores bots that fill the hidden spam-trap field |
| `rel="noopener noreferrer"` on external links | Stops the opened page from controlling the website tab |
| No keys or passwords in the code, private repository | Nothing sensitive can leak |

*Note:* client-side validation improves the experience but is not a security control by itself. A real website would also validate again on the server that receives the forms.

**Lighthouse results** (Google Lighthouse run against the finished site with mobile settings on a local test server; each score is the median of three runs):

| Page | Performance | Accessibility | Best practices | SEO | First paint | Largest paint | Layout shift |
|---|---|---|---|---|---|---|---|
| Home | 93 | 100 | 100 | 100 | 1.4 s | 3.2 s | 0.007 |
| About | 99 | 100 | 100 | 100 | 1.2 s | 1.8 s | 0.007 |
| Products | 100 | 100 | 100 | 100 | 1.2 s | 1.2 s | 0.007 |
| Enquiry | 100 | 100 | 100 | 100 | 1.5 s | 1.5 s | 0.007 |
| Contact | 100 | 100 | 96 | 100 | 1.4 s | 1.4 s | 0.007 |

*(The Contact page best-practices score is slightly lower in this test only because the sandbox that ran the audit could not reach the map servers.)*

### 4. Form functionality and validation

#### 4.1 HTML forms
Both pages have a form, and they have different purposes:

- **`enquiry.html`**: asks about a product or service (custom cake, wedding cake, catering and bulk orders, or a general question). After validation it **processes the answers and responds with an estimated cost and an availability check**.
- **`contact.html`**: a general message to the bakery. It collects name, email, optional phone, **type of message** and a full message. After validation the information is **compiled into an email** that the visitor can send to the recipient set in the code (`CONTACT_RECIPIENT` in `js/forms.js`).

**Form elements used:** `input` (text, email, tel, number, date, checkbox, search), `select`, `textarea`, `fieldset`/`legend`, `label` linked to every field, and a submit `button`.
**Form submission:** each `<form>` has an `action` attribute with the URL that receives the data (`https://jsonplaceholder.typicode.com/posts`, a free demo endpoint) and `method="post"`.

#### 4.2 Validation rules
HTML5 attributes (`required`, `minlength`, `maxlength`, `pattern`, `min`, `max`, `type`) are in the HTML, and `js/forms.js` adds JavaScript validation with friendly messages.

| Field | Rule |
|---|---|
| Full name | Required, 2 to 60 characters, letters, spaces, hyphens and apostrophes only |
| Email | Required, valid format (`name@example.com`), up to 120 characters |
| Phone | South African format: `0XX XXX XXXX` or `+27 XX XXX XXXX` (spaces and dashes allowed). Required on the enquiry form, optional on the contact form |
| Enquiry type / message type | Must choose one option |
| Number of servings / items | Whole number within the range for the chosen type (for example 30 to 300 servings for a wedding cake, 20 to 1,000 items for catering) |
| Event or collection date | Required, a real date, not in the past, not more than a year ahead |
| Message | Enquiry: 10 to 500 characters. Contact: 20 to 1,000 characters. A live character counter is shown |
| Consent | Must be ticked (permission to contact the visitor, in line with POPIA) |

#### 4.3 JavaScript form validation
- **Client-side validation:** fields are checked when the visitor leaves them and again on submit, before anything is sent.
- **Error handling:** an error message appears under each invalid field (linked with `aria-describedby`, announced to screen readers), invalid fields get a red outline and `aria-invalid`, a summary at the top says how many fields need attention, and focus moves to the first problem.
- **AJAX form submission:** valid data is sent with `fetch()` as JSON without reloading the page. The button shows "Sending...", a time limit stops it waiting forever, and if the network fails the visitor still gets their quote or email plus a clear message.

**Enquiry processing (cost and availability)**

| Enquiry type | Price rule | Notice needed |
|---|---|---|
| Custom birthday or celebration cake | R450 for up to 10 servings, then R30 per extra serving | 3 days |
| Wedding cake | R1,800 for up to 50 servings, then R35 per extra serving | 14 days |
| Catering and bulk bread or pastry order | R22 per item, 10% discount from 100 items | 7 days |

Extras: delivery within Durban R120; personalised message topper R60 (cakes only). The response shows a reference number, a cost breakdown table and total, and an availability badge ("Date looks good" or "Short notice" with the earliest date we can promise). Sunday dates mention that collection is from the Kiosk Branch only; Saturdays carry a "book early" note. Visitors arriving from a product's "Enquire" button get the form pre-filled.

**Contact processing (email)**
The validated message is turned into an email (To, Subject and Body) and displayed in a preview. The visitor can press **Open in my email app** (a `mailto:` link built with `encodeURIComponent`), **Copy email text**, or **Edit my message**. Line breaks are stripped from the subject line to prevent header injection.

### 5. Accessibility
Skip link; visible focus outlines; semantic landmarks (`header`, `nav`, `main`, `footer`); labels on every field; ARIA for tabs, accordion, dialogs and live regions; colour contrast checked; keyboard operation for every interactive element; reduced-motion support. Lighthouse accessibility score is 100 on every page and the axe-core checker reports no violations.

### 6. Testing

| Test | Result |
|---|---|
| Automated browser tests (Playwright, real Chromium) | 146 checks pass: every page loads with no console errors, image or security-policy problems; gallery, tabs, accordion, modal, search, filter, sort, map markers, all validation messages, both quote calculations, the email builder, the spam trap and the offline error path |
| HTML validation (html-validate) | No errors on all five pages |
| Accessibility (axe-core and Lighthouse) | No violations; Lighthouse accessibility 100 on every page |
| Responsive checks at 1280px, 1024px, 820px, 768px and 375px | The expected number of columns at each width (for example 3, 2 and 1 product columns on desktop, tablet and mobile) and no horizontal scrolling on any page |
| Keyboard checks | Arrow keys switch tabs and lightbox photos, Esc closes dialogs, and native controls are used for everything else, so the whole site can be used without a mouse |

**Responsive screenshots (desktop, tablet and mobile)**

| Desktop (1280px) | Tablet portrait (768px) | Tablet landscape (1024px) | Mobile (375px) |
|---|---|---|---|
| ![Home on desktop](docs/screenshots/home-desktop.jpg) | ![Home on tablet](docs/screenshots/index-tablet.jpg) | ![Home on tablet landscape](docs/screenshots/index-tablet-landscape.jpg) | ![Home on mobile](docs/screenshots/index-mobile.jpg) |
| ![Products on desktop](docs/screenshots/products-filter-sort-desktop.jpg) | ![Products on tablet](docs/screenshots/products-tablet.jpg) | ![Products on tablet landscape](docs/screenshots/products-tablet-landscape.jpg) | ![Products on mobile](docs/screenshots/products-mobile.jpg) |
| ![Enquiry on desktop](docs/screenshots/enquiry-validation-desktop.jpg) | ![Enquiry on tablet](docs/screenshots/enquiry-tablet.jpg) | ![Enquiry on tablet landscape](docs/screenshots/enquiry-tablet-landscape.jpg) | ![Enquiry on mobile](docs/screenshots/enquiry-mobile.jpg) |
| ![Contact on desktop](docs/screenshots/contact-validation-desktop.jpg) | ![Contact on tablet](docs/screenshots/contact-tablet.jpg) | ![Contact on tablet landscape](docs/screenshots/contact-tablet-landscape.jpg) | ![Contact on mobile](docs/screenshots/contact-mobile.jpg) |

*(Screenshots were taken with Chromium's device emulation, the same engine as Chrome DevTools.)*

**Feature screenshots**

| Gallery lightbox | Product details modal | Search and filter |
|---|---|---|
| ![Lightbox](docs/screenshots/gallery-lightbox-desktop.jpg) | ![Modal](docs/screenshots/product-modal-desktop.jpg) | ![Search](docs/screenshots/products-search-desktop.jpg) |

| About page tabs | FAQ accordion | Enquiry quote and availability |
|---|---|---|
| ![Tabs](docs/screenshots/about-tabs-desktop.jpg) | ![Accordion](docs/screenshots/faq-accordion-desktop.jpg) | ![Quote](docs/screenshots/enquiry-quote-desktop.jpg) |

| Contact form email preview | Photos beside the Enquiry form |
|---|---|
| ![Email](docs/screenshots/contact-email-desktop.jpg) | ![Enquiry photos](docs/screenshots/enquiry-photos-desktop.jpg) |

### 7. Deployment
The website is deployed on **Netlify** (free plan). Netlify was chosen instead of GitHub Pages because the repository must stay private and GitHub Pages only supports private repositories on paid plans.

1. Go to https://app.netlify.com/drop and drag the project folder onto the page (or connect the private GitHub repository).
2. Open **Site configuration**, then **Change site name**, and enter `golden-crust-bakery-durban`. The address becomes https://golden-crust-bakery-durban.netlify.app, which is the address used in the canonical links, `sitemap.xml` and `robots.txt`.
3. Netlify reads `_headers` automatically, so the security headers and caching rules are applied.
4. Check the live site, then run Lighthouse in Chrome DevTools to confirm the scores.

**Live URL:** https://golden-crust-bakery-durban.netlify.app

### Configuration notes
- `js/forms.js` has two settings at the top: `FORM_ENDPOINT` (demo endpoint; replace with Formspree, Netlify Forms or a real server) and `CONTACT_RECIPIENT` (the bakery's email address).
- If the website address changes, update the canonical links, `og:url`/`og:image` tags, `sitemap.xml` and `robots.txt`.

### Known limitations and future improvements
- The form endpoint is a free demo service, so submissions are not stored. A real client would use a real form service or server, and validate again on the server.
- The Head Baker photo is still a "photo coming soon" tile.
- Images could be converted to WebP, and CSS/JavaScript minified, for a production release.
- Map pins are approximate because the addresses are fictional.

---

## Sitemap
See `sitemap.png` in this repository for the visual sitemap, and `sitemap.xml` for the search-engine version.

```
Homepage (index.html)
├── About Us (about.html)
├── Products (products.html)
│   ├── Bread
│   ├── Cakes
│   └── Pastries
├── Enquiry (enquiry.html)
└── Contact (contact.html)
    ├── Main Bakery location
    └── Kiosk location
```

## File Structure
```
WEDE5020-10530095/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── sitemap.png
├── _headers              (Netlify security and caching headers)
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── script.js         (site-wide: tabs, accordion, reveal, counters, back-to-top)
│   ├── gallery.js        (homepage lightbox)
│   ├── products-data.js  (product catalogue)
│   ├── products.js       (dynamic list, search, filter, sort, modal)
│   ├── forms.js          (validation, quote, email, AJAX)
│   └── map.js            (Leaflet map)
├── fonts/                (self-hosted Poppins and Playfair Display)
├── images/               (optimised photos with descriptive names)
└── docs/screenshots/     (testing evidence)
```

## Commit Log (Part 3)
Part 3 was pushed to GitHub in small steps, one commit for each feature, each with a descriptive message:

| # | Commit message |
|---|---|
| 1 | Optimise photos with descriptive names and small and large sizes for srcset |
| 2 | Self-host Poppins and Playfair Display fonts |
| 3 | Add tablet breakpoint, pseudo-class states and Part 3 component styles |
| 4 | Add site-wide JavaScript: tabs, accordion, scroll reveal, counters and back-to-top |
| 5 | Add homepage gallery with lightbox and SEO tags |
| 6 | Add About page journey tabs and SEO tags |
| 7 | Load products dynamically with search, filter, sort and details modal |
| 8 | Add enquiry form validation, cost estimate, availability check and FAQ accordion |
| 9 | Add interactive Leaflet map and contact form with email builder |
| 10 | Add robots.txt, sitemap.xml and security headers |
| 11 | Add testing screenshots |
| 12 | Update README with Part 1, 2 and 3 documentation, feedback, SEO and references |

## Changelog
- **[13/08/2026]** – Initial commit: project folder structure created.
- **[13/08/2026]** – Added HTML structure for all 5 pages (index, about, products, enquiry, contact).
- **[13/08/2026]** – Added sitemap diagram.
- **[08/09/2026]** – Created external stylesheet (`css/style.css`) and linked it to all 5 HTML pages.
- **[08/09/2026]** – Applied base styling: font family, colour palette, and CSS reset.
- **[08/09/2026]** – Applied typography styling to headings and body text across all pages.
- **[08/09/2026]** – Implemented layout using CSS Grid (product/team grids, mission/vision, contact locations) and Flexbox (header/nav, About page history section).
- **[08/09/2026]** – Applied visual styling (colour, box-shadow, border-radius) and interactive states (:hover, :focus, :active) to buttons, nav links, and form fields.
- **[08/09/2026]** – Implemented responsive design with tablet (900px) and mobile (600px) breakpoints; tested across desktop, tablet, and mobile widths.
- **[08/09/2026]** – Part 1 feedback correction: restored missing "Meet the Team" section content on about.html (heading and Head Baker card had been accidentally deleted during editing).
- **[08/09/2026]** – Part 1 feedback correction: restored missing "Kiosk Branch" location heading, address, and map embed on contact.html.
- **[08/09/2026]** – Replaced placeholder images with sourced photography across all pages; updated image references to use relative paths.
- **[29/10/2026]** – Part 3 started. Reviewed Part 2 feedback (88%) and planned the improvements listed in "Working through feedback from Part 2".
- **[29/10/2026]** – Part 2 refinement: hero image now uses `srcset`/`sizes`; all images given `width`, `height` and lazy loading.
- **[29/10/2026]** – Part 2 refinement: self-hosted Poppins and Playfair Display fonts (`fonts/`) with `font-display: swap` so typography is the same on every device.
- **[29/10/2026]** – Part 2 refinement: replaced the hero CSS brightness filter with a dark overlay for faster painting.
- **[29/10/2026]** – Part 2 refinement: added skip link, visible focus outlines and a footer navigation bar on all pages.
- **[29/10/2026]** – Part 2 feedback (README 3/5): rewrote the README so it is cumulative, adding a project history table and a full Part 1 section (organisation, proposal, content research, sitemap, HTML structure, GitHub set-up and challenges).
- **[29/10/2026]** – Part 2 feedback (images 3/5): added clear photos beside the Enquiry and Contact forms; every product image now has descriptive alt text; all images use `srcset`, `sizes`, `width` and `height` with a small and a large file.
- **[29/10/2026]** – Part 2 feedback (commits 3/5): Part 3 pushed in 12 small, descriptive commits (see the Commit Log).
- **[29/10/2026]** – Part 2 feedback (pseudo-classes 7/10): reviewed all pseudo-classes; added hover, focus-visible and active states to every interactive element; removed the hover lift from the non-interactive team photos; added `:focus-within`, `:disabled`, `:checked`, `:user-valid`/`:user-invalid`, `:nth-child` and `:target` where they help the visitor.
- **[29/10/2026]** – Part 2 feedback (breakpoints 8/10): added a dedicated tablet breakpoint (601px to 1024px) with its own navigation, grids, pop-up and form layout, plus large-screen (1400px) and landscape-phone queries; tested at 768px, 820px and 1024px.
- **[29/10/2026]** – Images resized and compressed (26 MB to 2.1 MB) and renamed with descriptive names (for example `sourdough-bread-sliced.jpg`); image paths updated in all HTML files.
- **[29/10/2026]** – Added `js/script.js`: FAQ accordion, About page tabs, scroll-reveal and count-up animations, back-to-top button, dynamic footer year.
- **[29/10/2026]** – Added `js/gallery.js` and a "From Our Oven" gallery with lightbox on the homepage.
- **[29/10/2026]** – Added `js/products-data.js` and `js/products.js`: products are now loaded dynamically with search, category filter, sorting and a details modal. Added two products (Chocolate Drip Cake and Danish Pastries), bringing the range to nine.
- **[29/10/2026]** – Added `js/map.js`: interactive Leaflet map with both locations; removed the Google Maps iframes from contact.html.
- **[29/10/2026]** – Added `js/forms.js`: client-side validation, error messages, AJAX submission, enquiry cost and availability response, and contact email builder. Rebuilt the enquiry and contact forms in HTML with new fields (phone, enquiry/message type, servings, date, extras, consent, spam trap).
- **[29/10/2026]** – SEO: unique titles and meta descriptions, canonical URLs, Open Graph tags, JSON-LD structured data, descriptive alt text, internal links, keyword-focused copy updates, `robots.txt` and `sitemap.xml`.
- **[29/10/2026]** – Security: added `_headers` (Content Security Policy, HSTS, frame, referrer and permissions policies), Subresource Integrity on Leaflet, honeypot field, and safe DOM text handling.
- **[29/10/2026]** – Accessibility and testing: HTML validated, axe-core and Lighthouse checks passed, 146 automated browser checks passing; screenshots added to `docs/screenshots/`.
- **[29/10/2026]** – Deployed to Netlify and updated this README with Part 3 documentation and references.

## References

### Image credits
All photographs are free to use under the Unsplash Licence or the Pexels Licence. The photo page links were rebuilt from the downloaded file names.

- American Heritage Chocolate (n.d.) *Cake with chocolate drip* [Photograph]. Unsplash. Available at: https://unsplash.com/photos/vdx5hPQhXFk (Accessed: 13 August 2026). Used as `chocolate-drip-cake-lg.jpg` and `chocolate-drip-cake-sm.jpg`.
- Avice, L. (n.d.) *Chocolate chip muffins* [Photograph]. Unsplash. Available at: https://unsplash.com/photos/nRRDPyeSHdY (Accessed: 13 August 2026). Used as `chocolate-chip-muffins-lg.jpg` and `chocolate-chip-muffins-sm.jpg`.
- Haupt, M. (n.d.) *Cake decorator piping pink icing* [Photograph]. Unsplash. Available at: https://unsplash.com/photos/eR3LPfuDzGk (Accessed: 13 August 2026). Used as `cake-decorator-piping-icing-lg.jpg` and `cake-decorator-piping-icing-sm.jpg`.
- personalgraphic.com (n.d.) *Croissant* [Photograph]. Unsplash. Available at: https://unsplash.com/photos/VzUE5RtCuBA (Accessed: 13 August 2026). Used as `butter-croissant-lg.jpg` and `butter-croissant-sm.jpg`.
- Shes, V. (n.d.) *Sliced baked bread beside stainless steel bread knife* [Photograph]. Unsplash. Available at: https://unsplash.com/photos/sliced-of-baked-bread-beside-stainless-steel-bread-knife-IUk1S6n2s0o (Accessed: 13 August 2026). Used as `whole-wheat-loaf-lg.jpg` and `whole-wheat-loaf-sm.jpg`.
- Bellava G (n.d.) *Close-up of a chocolate birthday cake with colourful, glittering candles spelling "Happy Birthday"* [Photograph]. Pexels. Available at: https://www.pexels.com/photo/7330772/ (Accessed: 13 August 2026). Used as `birthday-cake-with-candles-lg.jpg` and `birthday-cake-with-candles-sm.jpg`.
- Borba, J. (n.d.) *Three elegant floral wedding cakes with greenery arranged indoors* [Photograph]. Pexels. Available at: https://www.pexels.com/photo/29051739/ (Accessed: 13 August 2026). Used as `wedding-cakes-with-flowers-lg.jpg` and `wedding-cakes-with-flowers-sm.jpg`.
- Dudubangbang Travel (n.d.) *Close-up of sliced artisan sourdough bread on a linen fabric background* [Photograph]. Pexels. Available at: https://www.pexels.com/photo/31546233/ (Accessed: 13 August 2026). Used as `sourdough-bread-sliced-lg.jpg` and `sourdough-bread-sliced-sm.jpg`.
- Pixabay (n.d.) *Close-up of two freshly baked loaves with crispy crust* [Photograph]. Pexels. Available at: https://www.pexels.com/photo/two-brown-baked-breads-on-table-209206/ (Accessed: 13 August 2026). Used as `crusty-bread-loaves-lg.jpg` and `crusty-bread-loaves-sm.jpg`.
- Xin, M. (n.d.) *Bakery shopfront with a glass cake display* [Photograph]. Pexels. Available at: https://www.pexels.com/photo/35228372/ (Accessed: 13 August 2026). Used as `bakery-shop-cake-display-lg.jpg` and `bakery-shop-cake-display-sm.jpg`.
- Ozil, S. (n.d.) *Fresh bread and flour flat lay* [Photograph]. Pexels. Available at: https://www.pexels.com/photo/18140495/ (Accessed: 13 August 2026). Used as `fresh-artisan-bread-hero-1600.jpg`, `-960.jpg` and `-640.jpg` (cropped).
- Valeriya (n.d.) *Assorted Danish pastries* [Photograph]. Pexels. Available at: https://www.pexels.com/photo/19499000/ (Accessed: 13 August 2026). Used as `assorted-danish-pastries-lg.jpg` and `assorted-danish-pastries-sm.jpg`.

The logo (`golden-crust-bakery-logo.png`) and the "photo coming soon" tiles were created for this project.

### Code, libraries and fonts
- Agafonkin, V., 2023 – *Leaflet: an open-source JavaScript library for interactive maps (version 1.9.4)*, Leaflet, available at: https://leafletjs.com/ [Accessed 29 October 2026]. Used in `js/map.js`.
- OpenStreetMap contributors, n.d. – *Copyright and licence*, OpenStreetMap Foundation, available at: https://www.openstreetmap.org/copyright [Accessed 29 October 2026]. Map tiles and data.
- Fontsource, n.d. – *Poppins and Playfair Display (self-hosted web fonts, SIL Open Font Licence)*, Fontsource, available at: https://fontsource.org/ [Accessed 29 October 2026].
- JSONPlaceholder, n.d. – *Free fake API for testing and prototyping*, Typicode, available at: https://jsonplaceholder.typicode.com/ [Accessed 29 October 2026]. Demo form endpoint.

### Documentation and guidance
- MDN Web Docs, n.d. – *The Dialog element*, Mozilla, available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog [Accessed 29 October 2026].
- MDN Web Docs, n.d. – *Intersection Observer API*, Mozilla, available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API [Accessed 29 October 2026].
- MDN Web Docs, n.d. – *Fetch API*, Mozilla, available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API [Accessed 29 October 2026].
- MDN Web Docs, n.d. – *Client-side form validation*, Mozilla, available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed 29 October 2026].
- MDN Web Docs, n.d. – *Content Security Policy (CSP)*, Mozilla, available at: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP [Accessed 29 October 2026].
- W3C, n.d. – *WAI-ARIA Authoring Practices Guide: Tabs and Accordion patterns*, World Wide Web Consortium, available at: https://www.w3.org/WAI/ARIA/apg/patterns/ [Accessed 29 October 2026].
- Google, n.d. – *SEO Starter Guide*, Google Search Central, available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 29 October 2026].
- Google, n.d. – *Introduction to robots.txt*, Google Search Central, available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro [Accessed 29 October 2026].
- Google, n.d. – *Build and submit a sitemap*, Google Search Central, available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview [Accessed 29 October 2026].
- Google, n.d. – *Local business structured data*, Google Search Central, available at: https://developers.google.com/search/docs/appearance/structured-data/local-business [Accessed 29 October 2026].
- Schema.org, n.d. – *Bakery*, Schema.org, available at: https://schema.org/Bakery [Accessed 29 October 2026].
- Google, n.d. – *Lighthouse overview*, Chrome for Developers, available at: https://developer.chrome.com/docs/lighthouse/overview [Accessed 29 October 2026].
- Netlify, n.d. – *Deploy sites and custom headers documentation*, Netlify, available at: https://docs.netlify.com/ [Accessed 29 October 2026].
- Eat Out, n.d. – *Get the best cakes in Durban*, Eat Out, available at: https://eatout.co.za/article/get-best-cakes-durban/ [Accessed 29 October 2026]. Used for keyword research and price benchmarks.
- Deque Systems, n.d. – *axe-core accessibility testing engine*, available at: https://github.com/dequelabs/axe-core [Accessed 29 October 2026]. Microsoft, n.d. – *Playwright*, available at: https://playwright.dev/ [Accessed 29 October 2026]. HTML-validate, n.d. – available at: https://html-validate.org/ [Accessed 29 October 2026]. Testing tools.

### Reference List (Parts 1 and 2)

Adobe Express, 2023 – *Free Image Resizer*, Adobe Express, available at: https://www.adobe.com/express/feature/image/resize [Accessed 13 August 2026].

Aarav Infotech, 2016 – *13 Advantages of Having a Website for Your Business*, Aarav Infotech, available at: https://www.aaravinfotech.com/blog/13-advantages-of-having-a-website-for-your-business/ [Accessed 13 August 2026].

Babich, N., 2018 – *How Do You Know Your Website Is A Success?*, Smashing Magazine, available at: https://www.smashingmagazine.com/2018/05/how-do-you-know-website-success/ [Accessed 13 August 2026].

Lee, K., 2025 – *How HTML, CSS, and JavaScript Work Together in Web Design*, HubSpot, available at: https://blog.hubspot.com/marketing/web-design-html-css-javascript [Accessed 13 August 2026].

McCormick, K., 2021 – *The 25 Best Ways to Increase Your Online Presence*, WordStream, available at: https://www.wordstream.com/blog/ws/2021/05/17/increase-online-presence [Accessed 13 August 2026].

Neil Patel, 2021 – *7 Ways to Measure Your Website's UX*, NeilPatel.com, available at: https://neilpatel.com/blog/measure-website-ux/ [Accessed 13 August 2026].

ITonlinelearning, 2023 – *HTML, CSS, and JavaScript: Essential Front-End Languages Explained*, ITonlinelearning, available at: https://www.itonlinelearning.com/blog/html-css-and-javascript-essential-front-end-languages-explained/ [Accessed 13 August 2026].

