# worldscrolling.com

> Don't scroll the screen. Scroll the world.

Landing site for **worldscrolling**: a local friend who shows travellers the real city (food, bars, viewpoints, hidden gems) plus 24/7 WhatsApp help. It launches in Athens. Plain static HTML/CSS with no build step and no framework.

## Files

```
index.html                 Landing page (hero, how it works, packages, meet your local,
                           hidden spots, social/reviews, FAQ, footer)
404.html                   Not-found page
favicon.svg                Placeholder logo mark
robots.txt, sitemap.xml    SEO basics (add blog posts to sitemap.xml as you publish)
assets/css/styles.css      All styles (shared by landing + blog)
assets/js/config.js        ⭐ SITE CONFIG: WhatsApp, email, Stripe links, Instagram
assets/js/main.js          Applies config.js to every button/link
assets/img/og-image.png    Social share image, 1200×630 (source: docs/og-image.html)
assets/img/apple-touch-icon.png
blog/index.html            Blog index ("coming soon" cards)
blog/article-template.html Copy this for each new post (instructions inside)
docs/screenshots/          Desktop + mobile screenshots of v1
```

## ✅ Placeholders to fill

| # | What | Where | How |
|---|------|-------|-----|
| 1 | **WhatsApp number** | `assets/js/config.js` → `whatsappNumber` | International format, digits only, e.g. `306912345678`. Currently `00000000000`. |
| 2 | **Stripe Payment Links** (×3) | `assets/js/config.js` → `stripe.map`, `stripe.friend`, `stripe.night` | Replace `#STRIPE_MAP`, `#STRIPE_FRIEND`, `#STRIPE_NIGHT` with your `https://buy.stripe.com/...` links. Until then, the buttons do nothing when clicked. |
| 3 | **Email** | `assets/js/config.js` → `email` | Currently `hello@worldscrolling.com`, which is a guess. Change it if you use a different address. |
| 4 | **Your photo** | `index.html`, search `TODO(jam): PHOTO` | Save it as `assets/img/jam.jpg` (4:5 portrait, about 800×1000, under 200KB) and swap the placeholder div for the `<img>` tag given in the comment. |
| 5 | **Your bio + fun facts** | `index.html`, search `TODO(jam): BIO` | Replace the `[bracketed]` text, then delete `class="ph"` (that removes the dashed orange outline). Your display name "jam" in the heading is also marked. |
| 6 | **3–5 hidden spots** | `index.html`, search `TODO(jam): SPOT` | For each card, fill in the name, neighbourhood and one-liner, and add a photo in `assets/img/spots/` (4:3, about 800×600). Copy a card block to add a 5th. |
| 7 | Reviews | `index.html`, section `#social` | Replace the dashed placeholder cards with real reviews as they come in. |
| 8 | Logo / favicon (optional) | `favicon.svg`, `assets/img/apple-touch-icon.png`, `assets/img/og-image.png` | These are placeholders built from the brand colours. |

**Tip:** anything on the page with a **dashed orange outline** is placeholder text.

A project-wide find for `TODO(jam)`, `STRIPE_`, or `00000000000` shows every spot to change.

## Run locally

```bash
python -m http.server 8080
# open http://localhost:8080
```

## Deploy (later)

It's fully static, so no build command is needed and the output directory is the repo root.
- **Vercel:** import the repo and set Framework Preset to "Other".
- **Cloudflare Pages:** connect the repo, leave the build command empty, set the output directory to `/`.

## Regenerating the OG image

```bash
chrome --headless=new --window-size=1200,630 --screenshot=assets/img/og-image.png docs/og-image.html
```
