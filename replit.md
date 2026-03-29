# RHL-Intel — AI Agent Factory

## Project Overview
An autonomous "AI agent factory" designed to discover market pain points, prototype solutions, and generate business opportunities for RHL Digital. Targets local businesses in San Antonio (home services, med spas, law, dental) with two primary service lines:
1. **Aria AI Receptionist**: Recurring revenue voice-AI service
2. **Vibe Coding Factory**: Rapidly built, outcome-based applications

## Architecture
- **Frontend**: React 18 + Vite + TypeScript + Tailwind CSS + Shadcn UI
- **Backend-as-a-Service**: Supabase (database + auth + edge functions)
- **Location**: `skills/website-factory/dynamic-details/dynamic-site-creator-main/`

## Project Layout
```
skills/
  website-factory/
    dynamic-details/
      dynamic-site-creator-main/   ← Main React/Vite app
        src/                        ← React components, hooks, pages
        supabase/                   ← Edge functions and config
        public/                     ← Static assets
    step-1-web-discovery/
    step-2-build-a-website/
    step-3-build-a-website/
    step-4-build-a-website/
    step-5-build-a-website/
program.md                          ← Master orchestration document
```

## Running the App
- **Dev server**: `cd skills/website-factory/dynamic-details/dynamic-site-creator-main && npm run dev`
- **Port**: 5000
- **Workflow**: "Start application"

## Key Dependencies
- React 18, Vite 5, TypeScript
- Tailwind CSS + Shadcn UI (Radix UI)
- Supabase JS client
- TanStack Query, React Router DOM
- React Hook Form + Zod

## Deployment
- Static site deployment
- Build: `cd skills/website-factory/dynamic-details/dynamic-site-creator-main && npm run build`
- Public dir: `skills/website-factory/dynamic-details/dynamic-site-creator-main/dist`
