# docs: add proper README with Township architecture

# RHL-Intel — Command Center for Reflect His Light LLC

> *"Whatever you do, work at it with all your heart." — Colossians 3:23*

RHL-Intel is the central intelligence repository for **Reflect His Light LLC** — a San Antonio-based AI automation agency operating under the brand **RHL Digital**. This repo houses the skills, workflows, architecture docs, and tools that power the entire operation.

---

## 🏙️ The Township Architecture

RHL Digital operates as a 12-squad "Township" — each squad owns a specific domain of the business. Claude AI serves as the core execution partner across all squads.

| Squad | Name | Domain |
|-------|------|--------|
| Squad 1 | The Agency | Client acquisition, sales, and onboarding |
| Squad 2 | Marketing Brain | Strategy, content, SEO, social media |
| Squad 3 | Aria's Office | AI receptionist product (VAPI + n8n + Twilio) |
| Squad 4 | Vibe Coding Factory | Rapid prototyping and app development |
| Squad 5 | The Librarian | Knowledge management, Obsidian PKM |
| Squad 6 | The Accountant | Finance, billing, credit, banking |
| Squad 7 | The Studio | Creative content, video, faith-based media |
| Squad 8 | The Workshop | Physical builds (workbench, Bible Robot) |
| Squad 9 | The Marketplace | Merch (Etsy, Printify, ReflectHisLightMerch) |
| Squad 10 | The Chapel | Faith, ministry, prayer, purpose alignment |
| Squad 11 | The Lab | Research, AI experiments, paper trading |
| Squad 12 | The Townhall | Strategic decisions, cross-squad coordination |

---

## 🤖 Core Product: Aria AI Receptionist

Aria is RHL Digital's flagship product — a bilingual (English/Spanish) AI receptionist built on:

- **VAPI** — voice AI platform
- **ElevenLabs** — Aria(bilingual) voice
- **Deepgram Nova 2** — multilingual transcription
- **n8n** — workflow automation (self-hosted on Railway)
- **Twilio** — phone numbers and SMS
- **Google Calendar** — appointment booking

### Live Deployments

| Client | Phone Number | Assistant |
|--------|-------------|-----------|
| RHL Digital | +1 (210) 791-7775 | Aria - RHL Digital |
| Dynamic Details SATX | +1 (210) 762-4966 | Aria - Dynamic Details SATX |
| Client Slot 2 (reserved) | +1 (210) 987-8619 | — |
| Client Slot 3 (reserved) | +1 (210) 941-3717 | — |

### n8n Scheduling Webhook
```
POST https://primary-production-d9e2f.up.railway.app/webhook/aria-scheduling
```

**Payload:**
```json
{
  "name": "Customer Name",
  "phone": "2105550000",
  "email": "customer@email.com",
  "service": "Service type",
  "preferred_time": "2026-04-14T10:00:00-05:00"
}
```

---

## 📁 Repository Structure

```
RHL-Intel/
├── .agents/skills/          # Claude Code agent skills
│   └── rhl-product-marketing-context.md
├── skills/                  # Additional skill modules
│   └── website-factory/     # 5-skill website build pipeline
├── src/                     # Township dashboard (React/TypeScript)
├── public/                  # Static assets
├── supabase/                # Database schema and migrations
├── program.md               # Township architecture specification
├── README.md                # This file
└── server.js                # Express server
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Voice AI | VAPI + ElevenLabs |
| Transcription | Deepgram Nova 2 |
| Automation | n8n (self-hosted, Railway) |
| Telephony | Twilio A2P 10DLC |
| Calendar | Google Calendar API |
| Database | Supabase (Postgres) |
| Frontend | React + TypeScript + Tailwind |
| Hosting | Railway (n8n), Replit (client sites) |
| DNS/Domains | GoDaddy |
| AI Model | Claude (Anthropic) + GPT-4o Mini (VAPI) |
| Content | Blotato (cross-platform publishing) |
| CRM | GoHighLevel |
| Email | MailerLite |

---

## 🔑 Key Infrastructure

### Google Cloud Project
- **Project:** RHL-Intel n8n Leads (`rhl-intel-n8n-leads`)
- **OAuth Client:** Google Calendar - RHL Digital
- **APIs Enabled:** Calendar, Sheets, Gmail, Drive
- **Status:** Internal, In Production

### Google Calendar Sub-Calendars
- `Aria - Dynamic Details SATX` — client booking calendar
- Calendar ID: `c_6d3a628945bff7c036679a6998b2a3cc63bbc82627ffcea64f770354e9293247@group.calendar.google.com`

### Twilio A2P 10DLC
- **Brand SID:** BN7aedde0c725b99f51391b2b0ad42aef8
- **Campaign SID:** CM74261299835ba656861d02be1ae4a01a
- **Status:** Pending carrier vetting

---

## 🌐 Live Properties

| Property | URL |
|----------|-----|
| RHL Digital | https://rhldigital.com |
| Dynamic Details SATX | https://dynamicdetailsatx.com |
| Township Dashboard | https://rhl-township-production.up.railway.app |
| n8n Instance | https://primary-production-d9e2f.up.railway.app |
| Calendly Demo | https://calendly.com/james-rhldigital/aria-ai-receptionist-demo |

---

## 🧠 Agent Instructions

When Claude Code or any AI agent loads this repo, key context:

1. **Owner:** James (Reflect His Light LLC, San Antonio TX)
2. **Mission:** Build a national AI receptionist agency starting from local San Antonio contractors
3. **Operating Principle:** Colossians 3:23 — everything is done with full heart and excellence
4. **Primary Product:** Aria AI receptionist ($297-497/month per client)
5. **Current Focus:** Converting first client (Dynamic Details SATX / Nick) to paid
6. **Stack Philosophy:** n8n over Make, Railway over Heroku, Supabase over Firebase for new builds
7. **Code Style:** TypeScript preferred, Tailwind for CSS, functional React components
8. **Never:** Hardcode API keys, commit .env files, or use `howdy` in Aria prompts

---

## 📋 Active Workflows (n8n)

| Workflow | Path | Purpose |
|----------|------|---------|
| Aria - Scheduling Handler | `aria-scheduling` | Books appointments into Google Calendar |
| RHL - Aria Lead Gen | — | Apify scraper → Google Sheets |
| 7AM Telegram Briefing | — | Morning briefing via @RHLCommandBot |
| Honey-Do SMS | `honey-do-sms` | SMS → Google Sheets task capture |

---

## 🚀 Getting Started (Claude Code)

```bash
# Clone the repo
git clone https://github.com/NJamesNC/RHL-Intel.git
cd RHL-Intel

# Install dependencies
npm install

# Read the Township architecture
cat program.md

# Review agent skills
ls .agents/skills/
```

---

*Built with faith, hustle, and Colossians 3:23. — James @ Reflect His Light LLC*
