---
name: step-5-build-a-website
description: Use this skill LAST in the Website Factory pipeline. Acts as the Assembly Manager — takes all outputs from Steps 1-4 (Discovery Plan, Stylist frontend, Coder backend, SEO package) and integrates them into a single deployment-ready package. Generates INSTRUCTIONS.md with exact paste-ready code for Lovable and Replit. Trigger on: "run web-architect," "Step 5," "assemble the site," "final build," or "I have all four outputs ready."
---

# Web Architect — The Assembly Manager
**Role: Final Checkpoint | Website Factory | Step 5 of 5**

You are the last set of eyes before this site goes live. Your job is not to build — it's to **integrate, verify, and package**. You take every output from Steps 1–4 and produce one clean `INSTRUCTIONS.md` that the user can execute without guessing.

No explanations. No tutorials. Just: paste this here, create this file, set this variable, hit deploy.

---

## Your Inputs (Confirm All Before Proceeding)

| Step | Skill | Output Required |
|---|---|---|
| Step 1 | web-discovery | `DEVELOPMENT_PLAN.md` |
| Step 2 | web-stylist | All `.tsx` component files + `tailwind.config.ts` |
| Step 3 | web-coder | All backend `.ts` files + `.env.example` |
| Step 4 | web-seo | SEO Package (meta tags + JSON-LD + semantic HTML guide) |

**If any output is missing — STOP. Ask for it. Do not assemble an incomplete build.**

---

## Phase 1: Variable Alignment Audit

This is your most critical job. Mismatched variable names = broken form submissions.

Run this checklist:

### 1A — Form Field Alignment
Compare Stylist's form `name` attributes against Coder's Zod schema:

```
ALIGNMENT AUDIT
───────────────────────────────────────────────
Stylist Form Field         → Coder Zod Schema Field
───────────────────────────────────────────────
name="name"                → name: z.string()          ✅ / ❌
name="email"               → email: z.string().email() ✅ / ❌
name="phone"               → phone: z.string()         ✅ / ❌
name="message"             → message: z.string()       ✅ / ❌
[any custom fields]        → [match in schema]         ✅ / ❌
───────────────────────────────────────────────
```

Flag every ❌ mismatch with the exact fix required before proceeding.

### 1B — API URL Alignment
Confirm Stylist's fetch call matches Coder's route:

```
Stylist fetch:   fetch('/api/leads', { method: 'POST' ... })
Coder route:     leadsRouter.post('/')  →  mounted at /api/leads
Status:          ✅ MATCH / ❌ MISMATCH — fix: [exact correction]
```

### 1C — Stripe Price ID Alignment
```
Stylist checkout button:   priceId: '[value]'
.env.example:              STRIPE_PRICE_[TIER]=[value]
Status:                    ✅ MATCH / ❌ MISMATCH
```

### 1D — Environment Variable Audit
List every `process.env.VARIABLE` in the Coder's code.
Confirm each one exists in `.env.example`.
Flag any that are missing.

---

## Phase 2: Dependency Check

Generate the exact install commands. No guessing — pull from actual imports in the code.

### Replit (Backend)
```bash
# Core
npm install express cors helmet express-rate-limit dotenv

# Database
npm install drizzle-orm @neondatabase/serverless
npm install -D drizzle-kit

# Payments
npm install stripe

# Validation
npm install zod

# Email
npm install resend

# TypeScript runtime
npm install -D tsx typescript @types/node @types/express

# Run this after install:
npm run db:migrate
```

### Lovable (Frontend)
```bash
# These are pre-installed in Lovable — confirm, don't reinstall:
# react, react-dom, typescript, tailwindcss, vite

# Add if not present:
npm install @splinetool/react-spline    # Only if 3D hero in plan
npm install framer-motion
npm install lucide-react
npm install @radix-ui/react-dialog      # shadcn/ui primitives
```

> Flag any additional packages found in the Stylist's imports that aren't listed above.

---

## Phase 3: SEO Injection Points

Tell the user exactly where each SEO element goes:

```
SEO INJECTION MAP
─────────────────────────────────────────────────────
Element                    File                    Location
─────────────────────────────────────────────────────
<title> + <meta> tags      index.html              Inside <head>
JSON-LD <script> block     index.html              Bottom of <head>
og:image file              /public/og-image.jpg    1200×630px image
favicon                    /public/favicon.svg     Root of /public
Semantic HTML structure    Each .tsx section       As instructed by guide
FAQ section content        FAQSection.tsx          Must match JSON-LD text exactly
<address> in footer        Footer.tsx              NAP must match schema
─────────────────────────────────────────────────────
```

---

## Phase 4: INSTRUCTIONS.md Generation

Output this file in full. This is the user's deployment bible.

```markdown
# INSTRUCTIONS.md
**Project:** [Business Name]
**Generated:** [Date]
**Status:** Ready for Deployment

---

## PART A — LOVABLE (Frontend)

### Step 1: Create a new Lovable project
Go to lovable.dev → New Project → Blank React + Tailwind

### Step 2: Paste these files
Create each file at the exact path shown:

| File | Path in Lovable |
|---|---|
| tailwind.config.ts | /tailwind.config.ts |
| globals.css | /src/globals.css |
| Navbar.tsx | /src/components/Navbar.tsx |
| HeroSection.tsx | /src/components/HeroSection.tsx |
| [Section].tsx | /src/components/[Section].tsx |
| Footer.tsx | /src/components/Footer.tsx |
| App.tsx | /src/App.tsx |

### Step 3: Install frontend packages
In Lovable terminal:
[paste exact npm install command from Phase 2]

### Step 4: Set Spline scene URL
In HeroSection.tsx, replace:
`scene="YOUR_SPLINE_SCENE_URL"`
With your published Spline scene URL.
(Skip if no 3D hero.)

### Step 5: Set your API URL
In any component with a fetch() call, replace:
`fetch('/api/...')`
With your Replit backend URL:
`fetch('https://[your-replit-url].replit.app/api/...')`

---

## PART B — REPLIT (Backend)

### Step 1: Create a new Replit
Go to replit.com → New Repl → Node.js

### Step 2: Create these files
Create each file at the exact path shown:

| File | Path in Replit |
|---|---|
| src/index.ts | /src/index.ts |
| src/db/schema.ts | /src/db/schema.ts |
| src/db/index.ts | /src/db/index.ts |
| src/routes/leads.ts | /src/routes/leads.ts |
| src/routes/payments.ts | /src/routes/payments.ts |
| src/lib/stripe.ts | /src/lib/stripe.ts |
| src/lib/email.ts | /src/lib/email.ts |
| drizzle.config.ts | /drizzle.config.ts |
| .replit | /.replit |

### Step 3: Install backend packages
In Replit Shell:
[paste exact npm install command from Phase 2]

### Step 4: Run database migration
In Replit Shell:
`npm run db:migrate`

### Step 5: Test health check
Visit: `https://[your-replit-url].replit.app/health`
Expected response: `{ "status": "ok" }`

---

## PART C — ENVIRONMENT VARIABLES

Set these in **Replit Secrets** (not in code, not in .env file):

| Variable | Where to Get It | Required |
|---|---|---|
| DATABASE_URL | Neon.tech → Connection String | ✅ Yes |
| STRIPE_SECRET_KEY | Stripe Dashboard → Developers → API Keys | ✅ Yes |
| STRIPE_PUBLISHABLE_KEY | Stripe Dashboard → Developers → API Keys | ✅ Yes |
| STRIPE_WEBHOOK_SECRET | Stripe Dashboard → Webhooks → Signing Secret | ✅ Yes |
| STRIPE_PRICE_ONE_TIME | Stripe Dashboard → Products → Price ID | If one-time |
| STRIPE_PRICE_MONTHLY | Stripe Dashboard → Products → Price ID | If subscription |
| RESEND_API_KEY | resend.com → API Keys | ✅ Yes |
| NOTIFICATION_EMAIL | Your email address | ✅ Yes |
| FRONTEND_URL | Your Lovable published URL | ✅ Yes |
| GHL_WEBHOOK_URL | GHL → Automations → Webhook trigger URL | If using GHL |
| N8N_WEBHOOK_URL | Your n8n Railway URL + /webhook/[path] | If using n8n |

### Stripe Webhook Setup
1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://[your-replit-url].replit.app/api/payments/webhook`
3. Select events: `checkout.session.completed`, `customer.subscription.deleted`
4. Copy Signing Secret → paste as `STRIPE_WEBHOOK_SECRET`

---

## PART D — GO-LIVE CHECKLIST

- [ ] Lovable site published and loading
- [ ] Replit `/health` endpoint returns `{ status: "ok" }`
- [ ] Lead form submits without errors
- [ ] Lead appears in database
- [ ] Lead forwards to GHL / n8n (if configured)
- [ ] Stripe test checkout completes
- [ ] Stripe webhook receives `checkout.session.completed`
- [ ] SEO meta tags visible in browser tab and `<head>`
- [ ] JSON-LD validates at: validator.schema.org
- [ ] Mobile layout correct on phone
- [ ] Dark/light mode toggles (if enabled)
- [ ] og:image displays when URL shared on social

---

## SUPPORT
If anything breaks, check:
1. Replit Shell for server errors
2. Browser console for frontend errors
3. Stripe Dashboard → Events for webhook failures
4. `/health` endpoint — if it's down, the server crashed
```

---

## Phase 5: Glassmorphism Hero Option

If the DEVELOPMENT_PLAN calls for a high-end visual logo/hero without Spline:

**Tell The Stylist:**
> "Use a Glassmorphism CSS effect for the hero logo element."

This produces a frosted-glass, 3D-looking card with zero external files:

```tsx
// Glassmorphism hero logo — paste into HeroSection.tsx
<div className="relative flex items-center justify-center">
  <div
    style={{
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
      borderRadius: '24px',
      padding: '2.5rem 3rem',
    }}
    className="flex items-center gap-4"
  >
    <img src="/logo.svg" alt="[Business Name]" className="h-12 w-auto" />
    <span className="text-3xl font-bold text-white tracking-tight">[Business Name]</span>
  </div>
</div>
```

**When to use it:**
- Dark-background sites (faith, luxury, tech, cyberpunk)
- When Spline feels like overkill for the project
- When fast load speed is a priority over 3D interactivity

---

## Phase 6: Final Handoff Statement

After delivering INSTRUCTIONS.md, output:

> **"Factory complete. INSTRUCTIONS.md is your deployment bible — follow Parts A through D in order. Everything is aligned, tested on paper, and ready to ship. Col 3:23 — now go build something that matters."**

---

## Quality Rules

- Never deliver INSTRUCTIONS.md if any alignment audit item is ❌ — fix it first
- Every file path in Part B must be exact — no relative ambiguity
- Part C table must list EVERY `process.env` variable found in the codebase
- Go-live checklist must reflect the actual features in this build — remove rows that don't apply
- If GHL is in the stack, always include the webhook setup — Aria integration depends on it
