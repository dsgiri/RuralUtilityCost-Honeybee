# AI Agent Instructions (AGENTS.md)

This document contains persistent project context and instructions for AI agents working on the `Honeybee` codebase within the `Rural Utility Cost` ecosystem.

## 1. Project Context & Identity
- **Project Name:** Honeybee (Apiary & Hive Management)
- **Ecosystem:** Rural Utility Cost (25+ subdomains including Forecast, Grid, USDA, etc.)
- **Goal:** Provide clean, reliable, professional estimation and calculator tools for rural property owners, agriculturists, and beekeepers.
- **Tone:** Professional, objective, and rural-focused. Avoid excessive startup/tech jargon. Do not use flowery marketing copy or "AI slop" terminology.

## 2. Shared/Ecosystem Constraints
- **Main Domain Links:** Use absolute links to the `ruralutilitycost.com` main site for the following legal and global pages in footers or global navigation:
  - About Us: `https://ruralutilitycost.com/about`
  - Portfolio: `https://ruralutilitycost.com/portfolio`
  - Contact Us: `https://ruralutilitycost.com/contact`
  - Privacy Policy: `https://ruralutilitycost.com/privacy-policy`
  - Terms of Use: `https://ruralutilitycost.com/terms-of-use`
  - Disclaimer: `https://ruralutilitycost.com/disclaimer`
- **Portfolio List:** The canonical source of truth for the cross-ecosystem portfolio is located at `/src/data/portfolio-sites.md`. Always update this markdown document if the user asks to add or remove a subdomain.
- **Disclaimers:** Calculations must ALWAYS enforce the display of the `Disclaimer` component (see `CALCULATOR-STANDARD.md`). Never omit legal text on an estimator tool. Use the pre-built `<Disclaimer type="inline" />` underneath calculator results.

## 3. UI/UX and Code Design Rules
- **Tech Stack:** React 18, Vite, TypeScript, Tailwind CSS, React Router, Lucide React icons.
- **Aesthetic Core:** Implement a clean, high-contrast, "Technical Dashboard" aesthetic. Use `slate`, `amber`, and `white` as the primary palette. Utilize `glass-card` CSS patterns for depth.
- **Responsive / Mobile-First:** Minimum touch target height must be `48px` (buttons, inputs, menu items) for mobile accessibility. Do not use absolute positioning that breaks on smaller layouts. Use standard Tailwind breakpoints (`sm:`, `md:`, `lg:`).
- **SEO & Structure:** Every rendered page must be crawlable. Use semantic HTML5. Maintain the existing complex `<head>` metadata in `/index.html` including Google Analytics integration.
- **No Mock "Loaders"**: Unless doing real async fetching, do not put in arbitrary "loading" spinners or tech-larping indicators just for effect. Calculations should be synchronous and fast on the client.

## 4. Agent Workflow Rules
- Read `CALCULATOR-STANDARD.md` before generating new calculator interfaces.
- Do not remove the Google Analytics scripts, Adsense placeholders, or SEO metadata from the HTML files.
- Before committing any structural UI updates, confirm how it cascades across mobile widths (`< 768px`).
- Do not rename the application to something purely creative like "BeeKeeperPro"; refer to it strictly as "Honeybee" and credit "Rural Utility Cost".
