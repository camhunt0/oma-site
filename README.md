# Ohio Muscle Activation — Website

Next.js homepage for ohiomuscleactivation.com. Built for Vercel deployment.

---

## Quick Start (Local Dev)

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Log into vercel.com → "Add New Project" → Import the repo
3. Vercel auto-detects Next.js — click Deploy
4. Set your custom domain: `ohiomuscleactivation.com`

---

## ⚠️ Content Placeholders — Fill These In

Search the codebase for `⚠️` to find every placeholder. Here's the complete list:

### Pricing
- `app/components/Diagnostic.tsx` — Replace `$XX` with your actual diagnostic price
- `app/components/Footer.tsx` — Same

### Practitioner Bio
- `app/components/WhatMakesUsDifferent.tsx` — Replace the bio block with your real credentials doc
  - Years in practice
  - Approximate clients served
  - Specializations (post-surgical, athletic, etc.)
  - MATRx explanation sentence

### Arnold Sports Festival
- `app/components/WhatMakesUsDifferent.tsx` — 1–2 sentences about your involvement

### Personal Note
- `app/components/LocalClose.tsx` — 2–3 sentences in your own voice about why you do this work

### Photos
- `app/components/WhatMakesUsDifferent.tsx` — Practitioner headshot or action shot
- `app/components/LocalClose.tsx` — Practice exterior or treatment room shot
- Consider: pull a still from Arnold Sports Festival footage for the WhatMakesUsDifferent panel

### Testimonials (PRIORITY)
- `app/components/Testimonials.tsx` — Replace all 4 placeholder testimonials with real client stories
  - Format: condition + duration + what they tried before + concrete outcome
  - Keep: first name + segment only (e.g., "Runner · Powell")
- Also: Hero testimonial snippet in `app/components/Hero.tsx`

### Google Reviews
- `app/components/Testimonials.tsx` — Add your review count + rating once you have 10+

### Quantitative Proof Point
- `app/components/Testimonials.tsx` — e.g., "Over 500 clients served" — add once defensible

### Square Booking Widget
- `app/components/Diagnostic.tsx` — Replace the placeholder div with your Square embed code
  - Square Dashboard → Appointments → Booking Widget
  - Create "Muscle Check Diagnostic" as a standalone service with its own price/duration
  - Set payment collection to "at booking"
  - Copy embed code → paste in place of the placeholder div

---

## File Structure

```
app/
  components/
    Nav.tsx                   — Fixed navigation bar
    Hero.tsx                  — Above-fold: headline, CTAs, hero testimonial
    WhyNothing.tsx            — "Why other treatments don't last"
    WhatIsMAT.tsx             — Plain-language MAT explanation, 3-step process
    WhatMakesUsDifferent.tsx  — 3 pillars + practitioner differentiation block
    WhoItHelps.tsx            — 5 audience segments (golfers, runners, etc.)
    Diagnostic.tsx            — Muscle Check Diagnostic + Square Booking widget
    Testimonials.tsx          — Social proof grid (4 testimonials)
    FirstVisit.tsx            — 4-step first visit walkthrough
    ReferralModule.tsx        — "Referred by your doctor?" section
    LocalClose.tsx            — Location + practitioner photo + personal note
    Footer.tsx                — Footer CTA + nav
  page.tsx                    — Homepage (assembles all components)
  layout.tsx                  — Root layout + metadata/SEO tags
  globals.css                 — Design system: colors, fonts, animations
```

## Design System

Colors (edit in `globals.css`):
- `--bg` #0b0f0e — main background
- `--surface` #111815 — card/section backgrounds  
- `--gold` #c8a96e — primary accent (CTAs, labels, highlights)
- `--green-bright` #4fa876 — secondary accent (checkmarks, referral section)
- `--text` #e8e4dd — body text
- `--text-muted` #8a9490 — secondary text

Fonts:
- **Playfair Display** — headings (loaded via Google Fonts)
- **DM Sans** — body, nav, labels

## Phase 2 Pages (next builds)

Per the plan, Phase 1 supporting pages:
- `/how-mat-works` — Deep explanation with video walkthrough
- `/about` — Full practitioner page (differentiates vs. Chad Simmons)
- `/faq` — Objection handling

Phase 2:
- `/mat-vs-other-treatments`
- `/conditions/hip-pain`
- `/conditions/neck-pain`
- `/conditions/post-surgery`
- `/results` — Testimonials + case studies page
