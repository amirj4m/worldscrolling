# worldscrolling.com

> Don't scroll the screen. Scroll the world.

Landing site for **worldscrolling**: a local friend who shows travellers the real city (food, bars, viewpoints, hidden gems) plus 24/7 WhatsApp help. It launches in Athens. Plain static HTML/CSS with no build step and no framework.

## Files

```
index.html                 Landing page (hero, how it works, packages, meet your local,
                           hidden spots, social/reviews, FAQ, footer)
404.html                   Not-found page
favicon.svg                Favicon: simplified lime wireframe globe + bond (reads at 16–32px)
robots.txt, sitemap.xml    SEO basics (add blog posts to sitemap.xml as you publish)
assets/css/styles.css      All styles (shared by landing + blog)
assets/js/config.js        ⭐ SITE CONFIG: WhatsApp, email, Stripe links, Instagram
assets/js/main.js          Applies config.js to every button/link
assets/img/logo-dark.jpg   jam's original logo, on black (master artwork)
assets/img/logo-light.jpg  jam's original logo, on white (master artwork)
assets/img/mark.svg        Vector version of the logo (globe + bond chain), lime on transparent, used in header/footer
assets/img/mark-dark.svg   Same mark in dark ink, for light backgrounds
assets/img/favicon-32.png  PNG favicon fallback
assets/img/apple-touch-icon.png  180×180 home-screen icon
assets/img/og-image.png    Social share image, 1200×630, uses logo-dark.jpg (source: docs/og-image.html)
blog/index.html            Blog index ("coming soon" cards)
blog/article-template.html Copy this for each new post (instructions inside)
docs/screenshots/          Desktop + mobile screenshots of v1
```

## ✅ Placeholders to fill

| # | What | Where | How |
|---|------|-------|-----|
| 1 | **WhatsApp number** | `assets/js/config.js` → `whatsappNumber` | ✅ Set to `306975720023`. International format, digits only. |
| 2 | **Stripe Payment Links** (×3) | `assets/js/config.js` → `stripe.map`, `stripe.friend`, `stripe.night` | Replace `#STRIPE_MAP`, `#STRIPE_FRIEND`, `#STRIPE_NIGHT` with your `https://buy.stripe.com/...` links. Until then, the buttons do nothing when clicked. |
| 3 | **Email** | `assets/js/config.js` → `email` | ✅ Set to `amirj4m@gmail.com`. |
| 4 | **Your photo** | `index.html`, search `TODO(jam): PHOTO` | Save it as `assets/img/jam.jpg` (4:5 portrait, about 800×1000, under 200KB) and swap the placeholder div for the `<img>` tag given in the comment. |
| 5 | **Your bio + fun facts** | `index.html`, search `TODO(jam): BIO` | Replace the `[bracketed]` text, then delete `class="ph"` (that removes the dashed orange outline). Your display name "jam" in the heading is also marked. |
| 6 | **Hidden Athens mood photos + captions** (×4) | `index.html`, search `TODO(jam): MOOD` | Not named spots: sell the *feeling*. For each card, add a raw landscape photo in `assets/img/mood/` (3:2, about 1200×800), optionally swap the heading, and write a 1–2 line caption. |
| 7 | Reviews | `index.html`, section `#social` | Replace the dashed placeholder cards with real reviews as they come in. |

**Tip:** anything on the page with a **dashed orange outline** is placeholder text.

A project-wide find for `TODO(jam)` or `STRIPE_` shows every spot still to change.

## Run locally

```bash
python -m http.server 8080
# open http://localhost:8080
```

## Hosting

**Live now on GitHub Pages:** https://amirj4m.github.io/worldscrolling/ (published from the `master` branch, root folder).

- All asset links are **relative** (`assets/...`, `../assets/...`), so the site works both at the `/worldscrolling/` subpath and at a root domain later. Don't add links that start with `/`.
- `404.html` works out its own base path, so it renders correctly at any URL depth.
- `.nojekyll` tells GitHub Pages to serve the files as-is, without running Jekyll.

### Moving to worldscrolling.com later
The canonical, Open Graph, structured-data, sitemap and robots URLs have to be absolute, so for now they point at the GitHub Pages URL. When the domain is connected:
1. Replace `https://amirj4m.github.io/worldscrolling/` with `https://worldscrolling.com/` in every file except `README.md`.
2. In `robots.txt`, drop the `/worldscrolling` prefix from the `Disallow` lines.
3. Add a `CNAME` file containing `worldscrolling.com`, or deploy to Vercel or Cloudflare Pages instead. It's fully static: no build command, and the output directory is the repo root.

## Regenerating the OG image

```bash
chrome --headless=new --window-size=1200,630 --screenshot=assets/img/og-image.png docs/og-image.html
```
