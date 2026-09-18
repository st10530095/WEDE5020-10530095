# Golden Crust Bakery Website

## Student Information
- **Name:** Lethiwe Zekhethelo Zuma
- **Student Number:** st10530095
- **Subject:** Web dev

## Project Overview
This repository contains the source code for the Golden Crust Bakery website,
developed as part of the WEDE5020 Portfolio of Evidence (PoE). Golden Crust
Bakery is a hypothetical family-owned bakery based in Durban, and this
project showcases the design and development of a professional, responsive
website for the organisation across three phases: HTML structure (Part 1),
CSS styling (Part 2), and JavaScript functionality (Part 3).

## Website Goals and Objectives
- Establish a professional online presence for Golden Crust Bakery.
- Enable customers to browse products and submit custom cake/catering enquiries online.
- Reduce reliance on phone enquiries by providing clear information (location, hours, menu).

## Key Features and Functionality
- Homepage with hero section and featured products.
- About Us page detailing history, mission, vision, and team.
- Products page listing bread, cakes, and pastries.
- Enquiry page with a custom order form.
- Contact page listing two locations with maps and a contact form.

## Timeline and Milestones
- **Part 1 (Planning):** Organisation selection, proposal approval, content research, sitemap, initial HTML structure.
- **Part 2 (Styling):** CSS styling applied across all pages, responsive design.
- **Part 3 (Functionality):** JavaScript functionality, testing, debugging, SEO optimisation.

## Part 1 Details
Part 1 focused on project initiation and planning: selecting Golden Crust
Bakery as the target organisation, drafting and gaining approval for the
website project proposal, conducting content research, creating the sitemap,
and building the initial HTML structure for all five pages (Home, About,
Products, Enquiry, Contact).

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
- **Corrections from Part 1 feedback:** see Changelog below.

*(Part 3 details will follow in a future submission/edit.)*

## Responsive Testing
Screenshots of the website at desktop, tablet, and mobile widths, taken using
browser developer tools:

**Desktop (1280px):**
*(Insert screenshot here)*

**Tablet (768px):**
*(Insert screenshot here)*

**Mobile (375px):**
*(Insert screenshot here)*

## Sitemap
See `sitemap.png` in this repository for the visual sitemap.

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
golden-crust-bakery/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── sitemap.png
├── css/
├── js/
└── images/
```

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

## References
*([Website Name] (Year) Description of image [Photograph]. Available at: [exact URL] (Accessed: [date]).
*(Unsplash Photo by <a href="https://unsplash.com/@victoriakosmo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Victoria Shes</a> on <a href="https://unsplash.com/photos/sliced-of-baked-bread-beside-stainless-steel-bread-knife-IUk1S6n2s0o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
Bellava G (n.d.) Close-up of a chocolate birthday cake with colorful, glittering candles spelling ‘Happy Birthday’. Pexels. Available at: Pexels (Accessed: 13 August 2026).
Borba, J. (n.d.) Three elegant floral wedding cakes with greenery are beautifully arranged indoors. Pexels. Available at: Pexels (Accessed: 13 August 2026).
Dudubangbang Travel (n.d.) Close-up of sliced artisan sourdough bread on a linen fabric background, showcasing texture. Pexels. Available at: Pexels (Accessed: 13 August 2026)
Pixabay (n.d.) Close-up of two freshly baked loaves with crispy crust. Pexels. Available at: https://www.pexels.com/photo/two-brown-baked-breads-on-table-209206/ (Accessed: 13 August 2026).
## Reference List

Adobe Express, 2023 – *Free Image Resizer*, Adobe Express, available at: https://www.adobe.com/express/feature/image/resize [Accessed 13 August 2026].

Aarav Infotech, 2016 – *13 Advantages of Having a Website for Your Business*, Aarav Infotech, available at: https://www.aaravinfotech.com/blog/13-advantages-of-having-a-website-for-your-business/ [Accessed 13 August 2026].

Babich, N., 2018 – *How Do You Know Your Website Is A Success?*, Smashing Magazine, available at: https://www.smashingmagazine.com/2018/05/how-do-you-know-website-success/ [Accessed 13 August 2026].

Lee, K., 2025 – *How HTML, CSS, and JavaScript Work Together in Web Design*, HubSpot, available at: https://blog.hubspot.com/marketing/web-design-html-css-javascript [Accessed 13 August 2026].

McCormick, K., 2021 – *The 25 Best Ways to Increase Your Online Presence*, WordStream, available at: https://www.wordstream.com/blog/ws/2021/05/17/increase-online-presence [Accessed 13 August 2026].

Neil Patel, 2021 – *7 Ways to Measure Your Website’s UX*, NeilPatel.com, available at: https://neilpatel.com/blog/measure-website-ux/ [Accessed 13 August 2026].

ITonlinelearning, 2023 – *HTML, CSS, and JavaScript: Essential Front-End Languages Explained*, ITonlinelearning, available at: https://www.itonlinelearning.com/blog/html-css-and-javascript-essential-front-end-languages-explained/ [Accessed 13 August 2026].

