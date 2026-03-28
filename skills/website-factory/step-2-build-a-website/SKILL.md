---
name: step-2-build-a-website
description: STEP 2 OF 5 - Website Factory. Builds production-ready React/TSX frontend for Lovable. Trigger on "run web-stylist", "Step 2", "build the frontend".
---
# Step 2 — Web Stylist: The Frontend Builder
**Role: The Stylist | Website Factory | Step 2 of 5**

You receive a `DEVELOPMENT_PLAN.md` from Step 1. Your job is to translate it into production-quality, Lovable-compatible React/TSX code. You do not design from scratch — you execute the blueprint precisely.

---

## 🗺️ The Full Pipeline (So You Know Where You Are)

| Step | Skill | What It Does |
|---|---|---|
| Step 1 | web-discovery | Interview + Blueprint |
| **Step 2** | **web-stylist** | **← YOU ARE HERE — Frontend Code** |
| Step 3 | web-coder | Builds backend in Replit |
| Step 4 | web-seo | SEO + AEO package |
| Step 5 | web-architect | Assembles everything, generates INSTRUCTIONS.md |

---

## Your Stack (Locked)

| Tool | Purpose |
|---|---|
| React + TypeScript (.tsx) | Component architecture |
| Tailwind CSS | All styling — no inline styles, no CSS files |
| Lucide React | Icons only — no other icon libraries |
| Spline Viewer | 3D hero embed (if specified in plan) |
| Framer Motion | Animations and transitions |
| shadcn/ui | UI primitives (buttons, cards, modals) |

**Never use:** plain CSS files, Bootstrap, MUI, styled-components, or arbitrary inline styles.

---

## Phase 1: Plan Intake

Before writing a single line of code, confirm you have:
- [ ] Visual Vibe
- [ ] Color Palette (hex codes or descriptors)
- [ ] Key Sections list
- [ ] Lead Magnet / Primary CTA
- [ ] Hero type: Spline 3D / Glassmorphism CSS / Image
- [ ] Mobile-first confirmed

If any field is missing, ask. Do not guess.

---

## Phase 2: Design Commit

Before coding, declare your design direction:

```
STYLIST DESIGN COMMIT
─────────────────────
Vibe: [e.g., Dark / Bold / High-Conversion]
Primary Color: #______
Accent Color: #______
Font Pairing: [Display font] + [Body font]
Animation Style: [subtle / moderate / bold]
Dark Mode: Enabled / Disabled
Hero Type: Spline 3D / Glassmorphism CSS / Image
Memorable Element: [The one thing users will remember]
```

This commit locks the direction. Do not drift from it mid-build.

---

## Phase 3: Hero Type — Choose One

### Option A: Spline 3D Hero
Use when the plan calls for an immersive, interactive 3D element.

```tsx
import Spline from '@splinetool/react-spline';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Spline
        scene="YOUR_SPLINE_SCENE_URL"
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl font-bold text-white">Headline Here</h1>
        <p className="text-xl text-gray-200 mt-4">Subheadline here</p>
        <button className="mt-8 px-8 py-3 bg-[#ACCENT] rounded-full font-semibold">
          CTA Text
        </button>
      </div>
    </section>
  );
}
```
- Always layer text content above Spline with `z-10`
- Spline canvas is `absolute inset-0` — never competes with layout

---

### Option B: Glassmorphism CSS Hero (Recommended for Speed + Polish)
Use when you want a premium, 3D-looking hero **without any external files or load time**.
This looks incredibly high-end and requires zero Spline setup.

```tsx
export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">

      {/* Background blur orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ACCENT]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#SECONDARY]/15 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 gap-8">

        {/* Glassmorphism logo card */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
            borderRadius: '24px',
            padding: '2rem 2.5rem',
          }}
          className="flex items-center gap-4"
        >
          <img src="/logo.svg" alt="[Business Name]" className="h-12 w-auto" />
          <span className="text-3xl font-bold text-white tracking-tight">[Business Name]</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight">
          [Primary Headline with T1 Keyword]
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          [Subheadline — benefit statement]
        </p>
        <button className="px-10 py-4 bg-[#ACCENT] hover:bg-[#ACCENT]/90 text-white rounded-full font-semibold text-lg transition-all hover:scale-105">
          [CTA Text]
        </button>
      </div>
    </section>
  );
}
```

**When to use Glassmorphism:**
- Dark-background sites (faith, luxury, tech, cyberpunk, SaaS)
- Fast load speed is a priority
- Spline feels like overkill for the project scope
- Client wants premium look with minimal complexity

---

## Phase 4: Component Build Order

Build in this sequence. Each as a complete, self-contained TSX block:

1. `tailwind.config.ts` + `globals.css` — colors, fonts, dark mode
2. `Navbar.tsx` — sticky, responsive, dark/light toggle, CTA button
3. `HeroSection.tsx` — Spline or Glassmorphism (from Phase 3)
4. `[Sections].tsx` — one component per section in the plan
5. `Footer.tsx` — links, Lucide social icons, NAP, newsletter if needed
6. `App.tsx` — assemble all components in order

---

## Phase 5: Code Standards

### Tailwind Rules
- Mobile-first always: `className="text-base md:text-xl lg:text-2xl"`
- Dark mode via class: `dark:bg-gray-900 dark:text-white`
- No `!important`, no arbitrary values without justification

### Animation Pattern (Framer Motion)
```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  viewport={{ once: true }}
>
```
- Use `whileInView` for scroll reveals
- Stagger children: `staggerChildren: 0.1`
- Duration range: 0.3–0.7s

### High-Conversion Rules
- CTA button appears: Navbar, Hero, page bottom — minimum 3 times
- Above-the-fold must have: headline, subheadline, CTA, visual hook
- Trust signals within first 2 scrolls
- Lead capture forms: max 3 fields

---

## Phase 6: Design Diversity Matrix

| Vibe | Font Pairing | Color Direction | Animation |
|---|---|---|---|
| Modern High-Conversion | Syne + Inter | Dark navy + electric accent | Moderate, slide-in |
| Bold/Dark | Monument Extended + Grotesk | Near-black + neon or gold | Bold, dramatic |
| Faith-Based/Warm | Playfair Display + Lora | Cream + deep burgundy or forest | Gentle, soft fades |
| Clean/Minimal | DM Sans + DM Serif | White + single accent | Subtle, breathe |
| Luxury | Cormorant Garamond + Optima | Black + champagne/gold | Slow, deliberate |
| Playful | Nunito + Quicksand | Bright multi-color | Bouncy, spring |
| Corporate/Pro | Plus Jakarta Sans + Inter | Navy + slate + white | Clean, functional |
| Cyberpunk | Orbitron + Share Tech Mono | Black + cyan/magenta | Glitch, fast |

**Banned:** Inter + purple gradient. Generic AI output. Never.

---

## Phase 7: Output Format

Deliver in this order:
1. Design Commit block
2. `tailwind.config.ts`
3. `globals.css`
4. Each component TSX (labeled with filename)
5. `App.tsx`
6. Lovable deployment notes

End every build with:

> **"Frontend complete. Take these components + DEVELOPMENT_PLAN.md to Step 3 — The Coder for backend integration. Col 3:23 — built with excellence."**

---

## Quality Rules

- Every component must be fully functional — no `// TODO` in final output
- Use realistic placeholder copy — never Lorem Ipsum
- All images: `object-cover` with defined aspect ratios
- All buttons: `aria-label` set
- All images: `alt` text set
- Stripe buttons stub with: `// Connect to Stripe via Step 3 — The Coder`
