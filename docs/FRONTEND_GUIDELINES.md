# FRONTEND_GUIDELINES.md

# AgriSathi Frontend Guidelines

## Purpose

This document defines the frontend philosophy, UX behavior, rendering strategy, animation rules, interaction patterns, and performance requirements for the AgriSathi mobile application.

This document is mandatory reading for:
- frontend developers,
- AI coding agents,
- UI contributors,
- component generators.

All frontend implementations MUST follow these guidelines.

---

# Core Frontend Philosophy

The frontend should feel:

- lightweight,
- calm,
- responsive,
- trustworthy,
- smooth,
- intelligent,
- non-distracting.

The frontend should behave similarly to:
- Google Pay,
- Swiggy Instamart,
- Zepto,
- Uber,
- PhonePe.

NOT like:
- animation-heavy showcase apps,
- futuristic AI demos,
- flashy dashboard systems.

---

# UX Identity

AgriSathi is:
- a farming companion,
- an advisory assistant,
- a practical utility app.

The interface should make users feel:
"This app helps me quickly and reliably."

The interface should NOT feel:
- experimental,
- visually noisy,
- overly technical.

---

# Frontend Priorities

## Highest Priorities

1. Responsiveness
2. Smooth scrolling
3. Touch comfort
4. Low-end Android optimization
5. Readability
6. Fast feedback
7. Stability

---

## Lowest Priorities

1. Fancy animations
2. Complex visual effects
3. Decorative motion
4. Heavy gradients
5. Experimental layouts

---

# Device Optimization Requirements

The app MUST be optimized primarily for:
- low-end Android phones,
- weak CPUs,
- low RAM devices,
- unstable internet connections.

The app should remain smooth on:
- older Android devices,
- budget smartphones.

---

# Rendering Philosophy

The UI should:
- render quickly,
- avoid frame drops,
- minimize re-renders,
- avoid heavy computation on UI thread.

---

# Performance Rules

## Required

Use:
- FlashList for large lists
- memoized components where appropriate
- lightweight image rendering
- lazy screen loading
- pagination
- virtualization

---

## Avoid

Do NOT use:
- nested FlatLists
- nested ScrollViews
- heavy blur effects
- excessive shadows
- expensive gradients
- unnecessary re-renders
- massive rendering trees

---

# Animation Philosophy

Animations must be:
- subtle,
- functional,
- short,
- smooth.

Animations should improve:
- feedback,
- perceived responsiveness,
- transition clarity.

Animations should NEVER:
- distract users,
- reduce performance,
- create UI lag.

---

# Allowed Animations

Allowed:
- fade transitions
- small scale feedback
- loading skeletons
- page transitions
- button press feedback
- image loading placeholders

---

# Forbidden Animation Patterns

Avoid:
- parallax effects
- floating cards
- bouncing components
- excessive spring animations
- animated backgrounds
- continuous motion loops
- heavy entrance animations

---

# Navigation Philosophy

Navigation should feel:
- predictable,
- minimal,
- intuitive,
- thumb-friendly.

The user should never feel lost.

---

# Required Navigation Structure

Use:
- bottom tab navigation
- lightweight stack navigation

Main tabs:
1. Home
2. Scan
3. Community
4. Alerts
5. Profile

---

# Navigation Rules

## Required

- preserve navigation state
- avoid unnecessary remounts
- keep transitions fast
- maintain consistent headers

---

## Avoid

- deep navigation trees
- complicated drawer systems
- multi-level hidden navigation

---

# Scrolling Philosophy

Scrolling quality is extremely important.

Scrolling must feel:
- stable,
- responsive,
- smooth,
- frictionless.

The app should avoid:
- jitter,
- dropped frames,
- delayed touch response.

---

# List Rendering Rules

## Required

Use:
- FlashList
- estimated item sizes
- pagination
- lightweight item components

---

## Avoid

Do NOT:
- render massive datasets at once
- use unoptimized image feeds
- create deeply nested feed items

---

# Gesture Philosophy

Gestures should feel:
- natural,
- minimal,
- reliable.

Only use gestures when they improve usability.

---

# Typography Philosophy

Typography should prioritize:
- readability,
- clarity,
- accessibility.

The app should NEVER:
- use tiny text,
- use decorative fonts,
- reduce readability for aesthetics.

---

# Typography Rules

## Preferred

- clean sans-serif fonts
- medium font weights
- generous spacing
- large tap targets

---

## Avoid

- condensed fonts
- overly thin fonts
- excessive font variation

---

# Color Philosophy

Colors should communicate:
- calmness,
- trust,
- nature,
- intelligence.

---

# Primary Colors

Preferred:
- muted greens
- soft earth tones
- warm neutrals

---

# Accent Colors

Use accents sparingly.

Examples:
- blue for weather
- yellow for warnings
- red for severe disease alerts

---

# Avoid

Avoid:
- neon colors
- oversaturated gradients
- high-contrast visual noise

---

# Card Design Philosophy

Cards should:
- remain lightweight,
- avoid excessive elevation,
- feel structured.

---

# Card Rules

## Required

- soft borders or subtle shadows
- moderate spacing
- clear hierarchy

---

## Avoid

- glassmorphism
- huge shadows
- layered floating cards

---

# Input Field Philosophy

Inputs should:
- feel responsive,
- remain accessible,
- support large touch areas.

---

# Button Philosophy

Buttons should:
- provide instant feedback,
- remain large enough for touch,
- avoid excessive styling.

---

# Camera UX Guidelines

The scan experience is the MOST IMPORTANT interaction in the app.

The flow must feel:
- immediate,
- frictionless,
- focused.

---

# Scan Flow

```text
Open Scan Screen
      ↓
Open Camera
      ↓
Capture Leaf
      ↓
Preview
      ↓
Analyze
      ↓
Result Screen
```

---

# Camera Screen Rules

## Required

- minimal UI clutter
- clear capture button
- stable preview
- fast transitions

---

## Avoid

- overlay-heavy interfaces
- excessive guidance screens
- complex camera settings

---

# Result Screen Philosophy

The result screen should:
- clearly explain the disease,
- avoid overwhelming the user,
- prioritize readability.

---

# Result Screen Layout

Recommended order:
1. Disease Name
2. Confidence Score
3. Severity
4. Symptoms
5. Treatment
6. Fertilizer Suggestions
7. Prevention Tips

---

# Dashboard Philosophy

The dashboard should feel:
- useful,
- calm,
- lightweight.

NOT:
- like an analytics panel,
- like an enterprise dashboard.

---

# Home Screen Layout

Recommended order:

1. Greeting
2. Weather Summary
3. Quick Scan CTA
4. Alerts
5. Recent Activity
6. Community Highlights

Use:
- vertical scrolling only.

---

# Community Section Philosophy

The community should feel:
- lightweight,
- image-focused,
- utility-oriented.

NOT:
- like Facebook,
- like Instagram,
- like a complex social network.

---

# Community Feed Rules

## Required

- lightweight cards
- optimized images
- simple interactions

---

## Avoid

- complex reactions
- excessive engagement systems
- autoplay media

---

# Voice Assistant UX Philosophy

Voice features should feel:
- optional,
- lightweight,
- accessible.

The voice assistant should NOT dominate the interface.

---

# Voice UI Rules

## Recommended

- small microphone button
- subtle waveform animation
- short interaction flow

---

## Avoid

- fullscreen assistant modes
- excessive assistant animations
- continuous listening visuals

---

# Loading State Philosophy

Loading states should:
- reassure users,
- preserve perceived responsiveness.

---

# Required Loading Patterns

Use:
- skeleton loaders
- lightweight shimmer effects
- optimistic UI where safe

---

# Avoid

- blocking screens
- long spinner-only states

---

# Error Handling UX

Errors should:
- remain calm,
- provide actionable guidance,
- avoid technical jargon.

---

# Error Message Rules

## Good Example

"Unable to analyze image. Please try again with better lighting."

---

## Bad Example

"Prediction pipeline failed with inference timeout."

---

# Offline UX Philosophy

The app should:
- degrade gracefully,
- preserve important user data,
- communicate offline status clearly.

---

# Accessibility Guidelines

The frontend should support:
- readable text sizes
- touch-friendly controls
- screen readability in sunlight
- clear visual hierarchy

---

# Frontend State Management Rules

Keep state:
- localized where possible,
- minimal globally.

Avoid:
- excessive global state usage.

---

# Frontend Security Rules

Never:
- expose secrets,
- store tokens insecurely,
- hardcode API keys.

---

# AI Agent Frontend Rules

All AI agents MUST:

- prioritize smoothness over visual complexity,
- optimize for low-end Android devices,
- avoid unnecessary dependencies,
- avoid overengineering,
- maintain reusable component architecture,
- preserve fast navigation,
- preserve scrolling performance.

---

# Forbidden Frontend Behaviors

Never:
- create animation-heavy UI,
- use unstable rendering patterns,
- introduce UI lag,
- create visually noisy layouts,
- prioritize aesthetics over usability.

---

# Final Frontend Principle

The frontend should feel:

"Quietly intelligent, dependable, and fast."

The app should disappear behind the user's task instead of constantly demanding attention.