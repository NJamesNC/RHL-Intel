# RHL Digital — Squad 4 Agent Factory
**Owner:** James, Reflect His Light LLC | San Antonio, TX
**Guiding Principle:** Col 3:23 — Whatever you do, work at it with all your heart.

---

## MISSION
Build a self-improving AI agent factory that autonomously discovers real market 
pain points, prototypes solutions, and generates validated business opportunities 
for RHL Digital — specifically targeting the Aria AI Receptionist client pipeline 
and the Vibe Coding Factory service line.

---

## STRATEGIC GOALS
1. Run overnight research loops that wake James up to scored, ranked opportunities
2. Feed Aria's outreach list with warm, pre-validated local business prospects
3. Prototype 10–20 working demos per week with zero manual coding intervention
4. Every successful build raises the minimum bar for the next (ratchet principle)
5. All agent output must be traceable, reviewable, and Telegram-notifiable

---

## BUSINESS CONTEXT (Read-Only — Do Not Override)
- **Owner:** James, Reflect His Light LLC
- **Location:** San Antonio, Texas
- **Core Service:** Aria AI Receptionist — $297 / $497 / $997 per month
- **Target Clients:** Local SA businesses (home services, med spas, law, dental)
- **Secondary Output:** Vibe Coding Factory apps — $2–5k/month outcome-based
- **Stack:** n8n (Railway) · VAPI.ai · GoHighLevel · AnythingLLM · Replit · GitHub

---

## AGENT CONSTRAINTS (Hard Rules)
- Never exceed free tier API limits without explicit approval from James
- All commits go to NJamesNC/RHL-Intel on GitHub
- All approvals route through Telegram (not Slack, not email)
- No hallucinated data — if confidence is low, flag it and stop
- Agents must score every opportunity before surfacing it (TAM Score required)
- Faith alignment check: would this client/project reflect RHL values?

---

## THE RESEARCH LOOP (Overnight Cycle)

### Phase 1 — Discover
- Scrape Reddit (r/smallbusiness, r/sanantonio, r/entrepreneur)
- Monitor GitHub Issues for unmet tool needs
- Scan Hacker News "Ask HN" for pain point signals
- Pull local SA business data (Google Places API, Yelp Fusion)

### Phase 2 — Evaluate (TAM Scoring)
Score every opportunity 1–100 across:
- Market size (how many businesses have this problem?)
- Urgency (are they actively complaining / searching for solutions?)
- Fit (can Aria or a vibe-coded app solve this in <2 weeks?)
- Competition (is the space crowded or open?)
- Revenue potential (path to $297–$997/mo recurring?)

### Phase 3 — Prototype
- Top scored opportunities get a minimal working demo built
- TAM Score ≥ 70 + Faith alignment check passed → trigger Website Factory pipeline
- Use free APIs where possible (see API Reference)
- Output: GitHub repo + 1-paragraph pitch summary per demo

### Phase 4 — Ratchet
- Log all scores to a validation database
- Raise minimum TAM threshold after each successful build
- Dead ends get archived, not deleted — they inform future loops

---

## SKILL PIPELINE (Website Factory)

When a Vibe Coding Factory opportunity scores **70+ TAM** and passes the faith alignment check, the Prototyper agent executes this pipeline in order:

| Step | Folder | Purpose |
|---|---|---|
| Step 1 | `skills/website-factory/step-1-web-discovery/SKILL.md` | Discovery interview → `DEVELOPMENT_PLAN.md` |
| Step 2 | `skills/website-factory/step-2-build-a-website/SKILL.md` | Frontend code for Lovable (React/TSX) |
| Step 3 | `skills/website-factory/step-3-build-a-website/SKILL.md` | Backend API for Replit (Node/Express/Stripe) |
| Step 4 | `skills/website-factory/step-4-build-a-website/SKILL.md` | SEO + AEO package (JSON-LD, meta, schema) |
| Step 5 | `skills/website-factory/step-5-build-a-website/SKILL.md` | Final assembly → `INSTRUCTIONS.md` + deploy |

**Trigger condition:** TAM Score ≥ 70 AND faith alignment = pass
**Output:** GitHub repo commit + Telegram notification to James with demo link
**Stack:** Lovable (frontend) · Replit (backend) · Stripe (payments) · Spline or Glassmorphism CSS (hero)
**All skill files live at:** `NJamesNC/RHL-Intel/skills/website-factory/`

### Faith Alignment Check (Required Before Pipeline Trigger)
Before any build begins, the Researcher must confirm:
- [ ] Client niche does not conflict with RHL values
- [ ] Content produced would not compromise the ministry mission
- [ ] Business model is honest and serves real human need
- [ ] James would be proud to put his name on it

If any item fails → archive the opportunity, do not build.

---

## SUCCESS METRICS
| Metric | Target |
|---|---|
| Opportunities scored per night | 20+ |
| Demos built per week | 10–20 |
| Aria prospects surfaced per week | 5–10 warm leads |
| Time from pain point → working demo | < 48 hours |
| Time from demo → deployed website | < 72 hours (via Website Factory) |
| Monthly recurring revenue goal (Aria) | $3k → $10k |

---

## KEY APIs (Approved for Agent Use)
| API | Purpose | Priority |
|---|---|---|
| GitHub REST API | Code commits, repo management | Critical |
| Reddit API | Pain point discovery | Critical |
| Google Places API | SA local business targeting | High |
| Wit.ai | NLP without LLM token costs | High |
| JSONPlaceholder | Mock data for rapid prototyping | Medium |
| Resend API | Lead nurture emails | Medium |
| Stripe API | Payment flow in Website Factory builds | Medium |
| CoinGecko | Financial dashboard demos | Low |

---

## AGENT ROLES (Squad 4 Roster)
| Agent | Role |
|---|---|
| **Hermes** | Memory loops — learns from every run, improves next cycle |
| **CrewAI Orchestrator** | Assigns tasks to agents, manages workflow |
| **Researcher** | Discovers pain points, scores TAM, runs faith alignment check |
| **Prototyper** | Builds minimal demos OR triggers Website Factory pipeline for 70+ scores |
| **Reporter** | Sends Telegram digest to James each morning |

---

## WHAT SUCCESS LOOKS LIKE (Morning Report Format)
Every morning, James receives a Telegram message containing:
- 🔴 Top 3 overnight opportunities (with TAM scores)
- 🛠️ Demos built (GitHub links)
- 🌐 Website Factory builds triggered (Step reached + DEVELOPMENT_PLAN.md link)
- 📋 Aria prospect leads (business name, pain point, contact info)
- ⚠️ Flags / blockers needing James's approval
- ✝️ Faith alignment flags (any opportunities rejected and why)
