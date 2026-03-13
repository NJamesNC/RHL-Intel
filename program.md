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
- Use free APIs where possible (see API Reference)
- Output: GitHub repo + 1-paragraph pitch summary per demo

### Phase 4 — Ratchet
- Log all scores to a validation database
- Raise minimum TAM threshold after each successful build
- Dead ends get archived, not deleted — they inform future loops

---

## SUCCESS METRICS
| Metric | Target |
|---|---|
| Opportunities scored per night | 20+ |
| Demos built per week | 10–20 |
| Aria prospects surfaced per week | 5–10 warm leads |
| Time from pain point → working demo | < 48 hours |
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
| CoinGecko | Financial dashboard demos | Low |

---

## AGENT ROLES (Squad 4 Roster)
| Agent | Role |
|---|---|
| **Hermes** | Memory loops — learns from every run, improves next cycle |
| **CrewAI Orchestrator** | Assigns tasks to agents, manages workflow |
| **Researcher** | Discovers pain points, scores TAM |
| **Prototyper** | Builds minimal demos from top-scored opportunities |
| **Reporter** | Sends Telegram digest to James each morning |

---

## WHAT SUCCESS LOOKS LIKE (Morning Report Format)
Every morning, James receives a Telegram message containing:
- 🔴 Top 3 overnight opportunities (with TAM scores)
- 🛠️ Demos built (GitHub links)
- 📋 Aria prospect leads (business name, pain point, contact info)
- ⚠️ Flags / blockers needing James's approval
