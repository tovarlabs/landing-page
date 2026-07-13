# Tovarlabs Landing

Modern landing page built with Astro, focused on performance, SEO, accessibility, and a clean component-based architecture.

![Astro](https://img.shields.io/badge/Astro-7.0.8-0C1015?logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.2-38BDF8?logo=tailwindcss&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Deployment-F38020?logo=cloudflare)
![License](https://img.shields.io/badge/License-Not%20specified-lightgrey)

[Live Demo](https://tovarlabs.com/)

## Overview

Tovarlabs Landing is the official public website for Tovarlabs, a software development brand focused on custom web solutions.

The project was built to present the business with a more credible, technically strong online presence while keeping the implementation lean, fast, and easy to maintain. It is also intended to function as a portfolio piece for a frontend engineering profile.

## Features

- Static Site Generation: The site is pre-rendered at build time, which keeps delivery simple and reduces runtime complexity.
- SEO Optimized: Metadata, canonical URLs, robots directives, Open Graph tags, Twitter Cards, and JSON-LD structured data are included in the shared layout.
- Sitemap: `@astrojs/sitemap` generates a sitemap to help search engines discover the site efficiently.
- Responsive Design: The landing page is designed to adapt cleanly across mobile, tablet, and desktop viewports.
- Accessibility: Semantic HTML, proper link structure, readable contrast, and keyboard-friendly navigation are used throughout the interface.
- Component-Based Architecture: Header, layout, and footer responsibilities are separated to keep the codebase maintainable.
- Optimized Performance: Astro keeps client-side JavaScript minimal, which helps preserve strong Core Web Vitals.
- Cloudflare Deployment: The project is intended for Cloudflare Pages, taking advantage of edge delivery and global distribution.

## Tech Stack

### Astro

Used to generate a static site with minimal client-side JavaScript. It is a strong fit for a content-focused landing page where performance and simplicity matter more than application-style interactivity.

### TypeScript

Used to add type safety to configuration and development workflows, reducing accidental regressions and keeping the codebase easier to reason about as it grows.

### Tailwind CSS

Used as the styling foundation for a consistent design system, fast iteration, and predictable responsive behavior without writing large amounts of custom CSS.

### Cloudflare Pages

Used as the deployment target for fast global delivery and a straightforward static hosting workflow.

### Astro Sitemap Integration

Used to generate an up-to-date sitemap automatically from the site structure.

## Design Decisions

### Why Astro?

The site is primarily static and content-driven. Astro is a better fit than a client-heavy framework because it ships less JavaScript, keeps the runtime smaller, and makes it easier to deliver excellent performance by default.

### Why Tailwind CSS?

Tailwind provides a practical way to build a cohesive visual system without scattering custom CSS across the project. For a landing page, this improves consistency, readability, and iteration speed.

### Why Cloudflare Pages?

Cloudflare Pages is a strong deployment target for static sites because it offers global edge distribution, fast caching, and a simple deploy model for public marketing pages.

### Why static generation?

This project does not require server-side rendering or heavy client interaction. Static generation reduces complexity, improves delivery speed, and aligns with the performance goals of a high-quality landing page.

### Why not React?

The page does not need a client-rendered application framework. Using React here would add runtime weight without improving the experience, so the implementation stays framework-light.

### Why not Next.js?

Next.js is excellent for application-heavy products, but this site is a marketing landing page. Astro provides the needed SEO, content rendering, and deployment simplicity with less overhead.

## Project Architecture

The repository is intentionally small and focused. Each directory has a clear responsibility:

- `src/pages/` contains route entry points. `index.astro` is the main landing page and composes the entire experience.
- `src/layouts/` contains the shared document shell. `Layout.astro` centralizes metadata, canonical URLs, Open Graph data, Twitter Cards, robots directives, and JSON-LD.
- `src/components/` contains reusable interface sections such as the header and footer.
- `src/styles/` contains global styling and design tokens used across the site.
- `public/` stores static assets that should be served directly by the web server, including `robots.txt`.
- Root configuration files such as `astro.config.mjs`, `tailwind.config.mjs`, `eslint.config.js`, and `tsconfig.json` define the build, styling, and tooling behavior.

## Performance

This project was developed with Core Web Vitals in mind.

Planned Lighthouse targets:

- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

The implementation keeps JavaScript usage intentionally low and relies on pre-rendered HTML, lightweight interactions, and optimized content delivery.

## SEO

The site includes the core SEO elements expected from a professional landing page:

- Sitemap: Automatically generated for crawlability.
- Robots: Explicit indexing rules are defined in `public/robots.txt`.
- Open Graph: Social sharing metadata is set in the shared layout.
- Twitter Cards: Rich previews are configured for Twitter/X sharing.
- JSON-LD: Structured data describes the organization and services.
- Canonical URLs: Canonical tags reduce duplicate URL ambiguity.

## Accessibility

Accessibility was treated as a product requirement, not an afterthought.

- Semantic HTML: The page uses meaningful landmarks and document structure.
- Keyboard Navigation: Navigation and interactive elements are built to remain usable without a pointer.
- Color Contrast: The palette is chosen to preserve readable contrast across major surfaces.
- ARIA: Icon-only or non-textual affordances can be supplemented with accessible labeling where needed.
- Responsive Typography: Text scales across breakpoints to preserve readability on small screens.

## Local Development

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Deployment

The project is designed to be deployed automatically through Cloudflare Pages. The static build output makes the deployment flow straightforward and predictable for a public marketing site.

## Roadmap

Potential future improvements include:

- Dark Mode
- Blog
- Portfolio
- Internationalization
