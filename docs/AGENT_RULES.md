# AGENT_RULES.md

# AgriSathi AI Agent Rules

## Purpose

This document defines the operational rules, engineering standards, implementation constraints, and behavioral expectations for all AI coding agents working on the AgriSathi project.

This includes:
- CLI coding agents,
- autonomous coding assistants,
- code-generation tools,
- AI pair-programming systems,
- MCP-connected agents.

All agents MUST follow these rules.

This document exists to:
- preserve architecture consistency,
- maintain code quality,
- prevent overengineering,
- optimize performance,
- ensure maintainability.

---

# Project Identity

AgriSathi is:
- a mobile-first smart farming platform,
- an AI-powered advisory assistant,
- a lightweight utility application,
- optimized for low-end Android devices.

The project is NOT:
- an experimental AI showcase,
- a flashy UI demo,
- a desktop-first system,
- an enterprise analytics dashboard.

---

# Core Engineering Philosophy

The project prioritizes:

1. Simplicity
2. Performance
3. Modularity
4. Maintainability
5. Smooth UX
6. Predictable behavior

Performance is MORE important than:
- excessive abstraction,
- complex architecture,
- unnecessary animations,
- decorative UI.

---

# Mandatory Reading Order For Agents

Before performing ANY task, agents MUST read:

1. PROJECT_CONTEXT.md
2. ARCHITECTURE.md
3. FRONTEND_GUIDELINES.md
4. AGENT_RULES.md
5. TASKS.md

Agents must understand project philosophy before generating code.

---

# General Agent Behavior Rules

Agents MUST:
- follow existing architecture,
- preserve code consistency,
- avoid introducing unnecessary complexity,
- prefer readability over cleverness,
- generate modular code,
- preserve frontend performance.

---

# Forbidden Agent Behaviors

Agents MUST NOT:
- rewrite unrelated files,
- change architecture without request,
- introduce random dependencies,
- create unnecessary abstractions,
- generate monolithic components,
- introduce performance-heavy UI,
- overengineer systems.

---

# Technology Stack Rules

## Frontend

Required:
- React Native
- TypeScript

---

## Backend

Required:
- FastAPI
- Python

---

## AI

Required:
- Hugging Face models
- OpenCV
- PyTorch/TensorFlow

---

# Forbidden Frameworks

Do NOT introduce:
- Flutter
- Flask
- Django
- Electron
- Next.js for frontend app

Unless explicitly requested.

---

# Frontend Engineering Rules

## Core Philosophy

Frontend must:
- remain lightweight,
- scroll smoothly,
- avoid rendering lag,
- prioritize usability.

---

# Frontend Code Rules

## Required

Use:
- reusable components
- modular structure
- typed props
- clean hooks
- functional components

---

## Avoid

Do NOT:
- create giant screen files
- use deeply nested JSX
- create inline heavy logic
- duplicate UI patterns

---

# Frontend Styling Rules

## Required

Use:
- centralized styles
- reusable spacing systems
- consistent typography
- clean layout hierarchy

---

## Avoid

Do NOT use:
- random colors
- inconsistent spacing
- giant shadow systems
- glassmorphism
- excessive gradients

---

# Frontend Performance Rules

## Required

Use:
- memoization where useful
- FlashList for large lists
- optimized image rendering
- lazy loading
- lightweight rendering trees

---

## Avoid

Do NOT:
- create unnecessary re-renders
- use nested FlatLists
- use nested ScrollViews
- render large datasets at once
- perform heavy work on UI thread

---

# Animation Rules

Animations must:
- remain subtle,
- improve UX,
- avoid performance impact.

---

# Forbidden Animation Patterns

Do NOT generate:
- excessive motion
- bouncing animations
- floating effects
- continuous animations
- decorative motion systems

---

# Backend Engineering Rules

## Core Philosophy

Backend must:
- remain modular,
- async-first,
- scalable,
- service-oriented.

---

# Backend Structure Rules

Use:
- routers
- services
- schemas
- utilities
- separated business logic

---

## Avoid

Do NOT:
- place all logic in routes
- create giant service files
- mix validation with business logic
- hardcode configuration

---

# FastAPI Rules

## Required

Use:
- async routes
- Pydantic schemas
- environment variables
- modular routers

---

## Avoid

Do NOT:
- create blocking routes
- hardcode secrets
- use synchronous heavy operations

---

# API Rules

APIs must:
- remain RESTful,
- remain lightweight,
- use predictable naming.

---

# API Naming Rules

Good:
```text
/api/v1/predict
/api/v1/weather
/api/v1/community
```

Bad:
```text
/api/v1/doPredictionNow
/api/v1/getEverything
```

---

# AI Pipeline Rules

## Required

AI inference should:
- remain isolated,
- remain modular,
- support future model replacement.

---

# AI Code Rules

Use:
- preprocessing pipelines
- confidence scoring
- validation checks
- structured outputs

---

# Avoid

Do NOT:
- tightly couple AI logic with routes
- hardcode model paths
- generate giant AI service files

---

# Database Rules

## Required

Keep schemas:
- simple,
- scalable,
- understandable.

---

# Avoid

Do NOT:
- over-normalize
- create premature complexity
- introduce unnecessary relationships

---

# Community System Rules

The community feature is:
- lightweight,
- utility-oriented.

It is NOT:
- a full social media platform.

---

# Avoid Adding

Do NOT add:
- stories
- reels
- complex reactions
- algorithmic feeds
- excessive engagement systems

Unless explicitly requested.

---

# Voice Assistant Rules

Voice features should:
- remain optional,
- remain lightweight,
- avoid intrusive UX.

---

# Chatbot Rules

Chatbot responses should:
- remain concise,
- avoid technical jargon,
- feel friendly and helpful.

---

# Error Handling Rules

## Required

Errors must:
- remain user-friendly,
- provide actionable guidance.

---

# Avoid

Do NOT expose:
- stack traces
- backend internals
- technical exceptions

to users.

---

# Logging Rules

## Required

Use:
- structured logging
- meaningful messages

---

## Avoid

Do NOT:
- spam console logs
- log secrets
- log sensitive user data

---

# Dependency Rules

## Required

Prefer:
- stable,
- widely-used,
- lightweight libraries.

---

# Avoid

Do NOT introduce:
- abandoned packages
- heavy UI libraries
- unnecessary dependencies

without justification.

---

# Security Rules

Never:
- expose API keys
- hardcode secrets
- store tokens insecurely
- trust frontend validation alone

---

# Environment Variable Rules

All secrets MUST use:
```text
.env
```

Never commit secrets to git.

---

# Git Rules

## Commit Philosophy

Commits should:
- remain focused,
- remain readable,
- describe actual changes.

---

# Good Commit Examples

```text
Add disease prediction endpoint
Implement scan result screen
Optimize community feed rendering
```

---

# Bad Commit Examples

```text
stuff
fixes
changes
update everything
```

---

# File Organization Rules

## Required

Keep:
- small focused files
- modular architecture
- separated concerns

---

# Avoid

Do NOT create:
- massive utility files
- giant component folders
- unclear abstractions

---

# Naming Rules

## Components

Use:
```text
DiseaseCard.tsx
WeatherSummary.tsx
PredictionResult.tsx
```

---

# Hooks

Use:
```text
usePrediction.ts
useWeather.ts
useVoice.ts
```

---

# Backend Services

Use:
```text
prediction_service.py
weather_service.py
chatbot_service.py
```

---

# Mobile UX Rules

The app must:
- feel responsive immediately,
- provide instant interaction feedback,
- avoid delayed touch response.

---

# Loading State Rules

Prefer:
- skeleton loaders
- optimistic updates
- progressive rendering

Avoid:
- blocking screens
- endless spinners

---

# Offline Rules

Allowed offline support:
- cached history
- local storage
- saved recommendations

Not required:
- full offline AI inference

unless explicitly requested.

---

# Architecture Preservation Rules

Agents MUST preserve:
- modularity,
- frontend smoothness,
- lightweight behavior,
- mobile-first architecture.

---

# Refactoring Rules

Agents may refactor ONLY IF:
- explicitly requested,
- or clearly necessary for architecture consistency.

Avoid unnecessary rewrites.

---

# AI Agent Output Expectations

Generated code must:
- compile correctly,
- remain readable,
- remain maintainable,
- follow project architecture,
- include meaningful comments where necessary.

---

# Code Quality Standard

The codebase should feel:
- production-oriented,
- clean,
- understandable,
- scalable.

NOT:
- experimental,
- chaotic,
- overengineered.

---

# Most Important Rule

Always prioritize:

```text
User experience quality
            over
visual complexity
```

AgriSathi succeeds when it feels:
- smooth,
- dependable,
- calm,
- fast.