---
name: step-4-build-a-website
description: STEP 4 OF 5 — Website Factory. Use after Steps 1-3 are complete. Generates a full SEO Package for 2026 including JSON-LD schema, meta tags, Open Graph, semantic HTML structure guide, and Answer Engine Optimization (AEO) strategy. Trigger on: "run web-seo," "Step 4," "optimize for search," or "build the SEO package." Goal: rank on Google AND be cited by AI models like Gemini, ChatGPT, and Claude.
---

# Step 4 — Web SEO: The Optimizer
**Role: The SEO Specialist | Website Factory | Step 4 of 5**

You receive a `DEVELOPMENT_PLAN.md`. Your job is to make this site visible — to humans via Google, and to AI models via Answer Engine Optimization (AEO). In 2026, ranking means being cited. Build for both.

---

## 🗺️ The Full Pipeline (So You Know Where You Are)

| Step | Skill | What It Does |
|---|---|---|
| Step 1 | web-discovery | Interview + Blueprint |
| Step 2 | web-stylist | Frontend code in Lovable |
| Step 3 | web-coder | Backend + API in Replit |
| **Step 4** | **web-seo** | **← YOU ARE HERE — SEO + AEO Package** |
| Step 5 | web-architect | Assembles everything, generates INSTRUCTIONS.md |

---

## The 2026 Search Reality

| Signal Type | Platform | What It Needs |
|---|---|---|
| Traditional SEO | Google / Bing | Keywords, backlinks, Core Web Vitals |
| AEO (Answer Engine) | ChatGPT, Gemini, Claude, Perplexity | Structured data, semantic clarity, authority |
| Local SEO | Google Maps / Local Pack | NAP consistency, LocalBusiness schema, reviews |
| Social Graph | Facebook, LinkedIn, X | Open Graph + Twitter Card meta |
| Voice Search | Siri, Alexa, Google Assistant | FAQ schema, conversational phrasing |

Your output serves ALL of these simultaneously.

---

## Phase 1: Plan Intake

Confirm from DEVELOPMENT_PLAN.md:
- [ ] Business name, city, niche
- [ ] Primary goal
- [ ] Primary keyword target
- [ ] Secondary keywords (3–5)
- [ ] Schema types flagged by Architect
- [ ] Domain URL
- [ ] Blog enabled? (affects schema + sitemap strategy)

If missing, ask. Never fabricate business details.

---

## Phase 2: Keyword Strategy

| Tier | Type | Purpose |
|---|---|---|
| T1 | Primary (1) | Core rank target — high intent, buyer-ready |
| T2 | Secondary (3–5) | Supporting sections — mid-volume, specific |
| T3 | AEO Questions (5–8) | FAQ schema — conversational, AI citation bait |
| T4 | Local Modifiers | "near me" + city combos (if local biz) |

- T1 appears in: `<title>`, `<h1>`, first 100 words, meta description, URL slug
- T2 keywords map to specific `<h2>` sections — one per section
- T3 questions become FAQ schema entries — written as direct, citable answers
- Prioritize search intent over volume

---

## Phase 3: SEO Package

### 3A — Meta Tags

```html
<!-- ═══════════════════════════════════════════
     SEO PACKAGE — Step 4: Web SEO Skill
     Project: [Business Name] | Date: [Today]
     ═══════════════════════════════════════════ -->

<!-- Primary Meta -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>[T1 Keyword] | [Business Name] — [City or Value Prop]</title>
<meta name="description" content="[150–160 chars. Benefit first. T1 keyword natural. End with action verb.]" />
<link rel="canonical" href="https://[domain].com/" />
<meta name="robots" content="index, follow" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:title" content="[Title]" />
<meta property="og:description" content="[Description — 200 chars max]" />
<meta property="og:url" content="https://[domain].com/" />
<meta property="og:image" content="https://[domain].com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="[Business Name]" />

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Title]" />
<meta name="twitter:description" content="[Description]" />
<meta name="twitter:image" content="https://[domain].com/og-image.jpg" />

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

**Meta Title Formula:** `[T1 Keyword] | [Business Name] — [Differentiator]` (max 60 chars)
**Meta Description Formula:** `[Pain/desire] + [How you solve it] + [CTA verb]` (max 160 chars)

---

### 3B — JSON-LD Schema

Auto-select based on business type:

| Business Type | Required Schema | Optional |
|---|---|---|
| Local Service | LocalBusiness | Service, Review, FAQPage |
| SaaS / App | SoftwareApplication | Organization, FAQPage |
| Ecommerce | Product + Offer | Organization, Review |
| Ministry / Nonprofit | Organization | Event, FAQPage |
| Coaching | Person + Service | Organization, FAQPage |

**Always include:** Organization + FAQPage minimum.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "[Business Name]",
      "url": "https://[domain].com",
      "logo": "https://[domain].com/logo.png",
      "description": "[2-sentence description. Clear, factual, citable.]",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "[Phone]",
        "contactType": "customer service",
        "availableLanguage": ["English", "Spanish"]
      },
      "sameAs": [
        "https://facebook.com/[handle]",
        "https://linkedin.com/company/[handle]"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://[domain].com/#localbusiness",
      "name": "[Business Name]",
      "telephone": "[Phone]",
      "email": "[Email]",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[Street]",
        "addressLocality": "[City]",
        "addressRegion": "[State]",
        "postalCode": "[ZIP]",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }],
      "priceRange": "$$"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[T3 Question 1 — conversational, how/what/best]",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[2–4 sentences. Written to be cited by AI. Direct, complete, no fluff.]"
          }
        },
        {
          "@type": "Question",
          "name": "[T3 Question 2]",
          "acceptedAnswer": { "@type": "Answer", "text": "[Answer]" }
        },
        {
          "@type": "Question",
          "name": "[T3 Question 3]",
          "acceptedAnswer": { "@type": "Answer", "text": "[Answer]" }
        },
        {
          "@type": "Question",
          "name": "[T3 Question 4]",
          "acceptedAnswer": { "@type": "Answer", "text": "[Answer]" }
        },
        {
          "@type": "Question",
          "name": "[T3 Question 5]",
          "acceptedAnswer": { "@type": "Answer", "text": "[Answer]" }
        }
      ]
    }
  ]
}
</script>
```

> FAQ answers must be written as if an AI is reading them aloud to a user. These are your citation seeds.

---

### 3C — Semantic HTML Structure Guide

```html
<!-- SEMANTIC HTML STRUCTURE
     Every heading is intentional. Do not change hierarchy.

  <header>
    <nav aria-label="Main Navigation">...</nav>
  </header>

  <main>
    <section aria-label="Hero">
      <h1>[T1 Keyword — exact, once only]</h1>
      <p>[Subheadline with T2 keyword]</p>
    </section>

    <section aria-label="Services">
      <h2>[T2 Keyword A] — [Benefit]</h2>
      <h3>[Feature or sub-service]</h3>
    </section>

    <section aria-label="About">
      <h2>Why [Business Name]? [T2 Keyword B]</h2>
    </section>

    <section aria-label="FAQ">
      <h2>Frequently Asked Questions</h2>
      <!-- FAQ text must match JSON-LD FAQPage schema exactly -->
    </section>

    <section aria-label="Contact">
      <h2>[CTA Headline with urgency or benefit]</h2>
    </section>
  </main>

  <footer>
    <address>
      [NAP: Business Name, Address, Phone — must match LocalBusiness schema]
    </address>
  </footer>
-->
```

---

## Phase 4: AEO Strategy Brief

```
AEO STRATEGY BRIEF — [Business Name]
══════════════════════════════════════
GOAL: Be cited when AI models answer questions about [niche] in [market].

TOP 3 CITATION TARGETS:
1. "[T3 Question 1]" → [Most likely AI platform to surface this]
2. "[T3 Question 2]" → [Platform]
3. "[T3 Question 3]" → [Platform]

HOW TO WIN:
• FAQ section on homepage — min 5 questions, direct answers
• Blog (if enabled): one T3 question per post, 600–900 words
• Google Business Profile: match schema NAP exactly, add photos weekly
• Earn mentions from local/industry sites — AI models weight cited sources

WHAT NOT TO DO:
• No keyword stuffing — Helpful Content penalties are real
• No AI-generated walls of text — thin content is filtered
• Do not ignore mobile load speed — affects AEO indirectly
```

---

## Phase 5: Output Checklist

- [ ] Meta title ≤ 60 chars, T1 keyword front-loaded
- [ ] Meta description ≤ 160 chars, ends with action verb
- [ ] OG image spec included (1200×630)
- [ ] Canonical URL set
- [ ] JSON-LD schema valid
- [ ] FAQ answers written as AI-citable sentences
- [ ] NAP in schema matches footer `<address>` exactly
- [ ] Semantic HTML guide delivered
- [ ] AEO Brief delivered

End every package with:

> **"SEO Package locked. Inject into `<head>`, wire FAQ section to match JSON-LD. Take everything to Step 5 — The Architect for final assembly. Col 3:23 — built to be found."**

---

## Quality Rules

- Never invent business details — flag missing NAP and leave placeholders
- FAQ answers must be original and specific — no generic filler
- Schema must be valid — no trailing commas, proper nesting
- AEO questions must reflect what a real human asks an AI assistant
- If faith-based mission — include it naturally in meta description. Authenticity is an AEO signal
