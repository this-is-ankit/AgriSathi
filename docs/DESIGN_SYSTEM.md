# DESIGN_SYSTEM.md

# AgriSathi Design System

## Purpose

This document defines the visual language, spacing system, typography hierarchy, color system, component styling rules, and UI consistency standards for AgriSathi.

This file ensures:
- visual consistency,
- frontend coherence,
- reusable styling,
- predictable UI behavior,
- scalable interface design.

All frontend implementations MUST follow this design system.

---

# Design Philosophy

AgriSathi should feel:

- calm,
- dependable,
- clean,
- lightweight,
- approachable,
- modern,
- readable.

The interface should resemble:
- premium utility apps,
- modern fintech UX,
- fast commerce apps.

NOT:
- futuristic AI demos,
- gaming interfaces,
- animation-heavy startup concepts.

---

# Core Visual Identity

The visual language should communicate:
- trust,
- agriculture,
- simplicity,
- intelligence,
- accessibility.

---

# Primary Design Goals

## Highest Priorities

1. Readability
2. Touch comfort
3. Performance
4. Consistency
5. Accessibility
6. Visual calmness

---

## Lowest Priorities

1. Decorative visuals
2. Experimental aesthetics
3. Complex visual layering
4. Heavy effects
5. Excessive branding

---

# Color System

## Primary Color

Purpose:
- brand identity,
- primary actions,
- active states.

Recommended tone:
- muted natural green.

Example reference:
```text
#4F8A5B
```

---

# Secondary Color

Purpose:
- secondary actions,
- informational sections.

Recommended tone:
- earthy neutral.

Example reference:
```text
#D9E6D3
```

---

# Background Colors

## Main Background

Purpose:
- primary app background.

Recommended:
```text
#F7F8F5
```

---

## Card Background

Purpose:
- cards,
- sections,
- containers.

Recommended:
```text
#FFFFFF
```

---

# Accent Colors

## Warning

Purpose:
- caution,
- weather warnings.

Recommended:
```text
#E7B10A
```

---

## Danger

Purpose:
- severe disease alerts,
- critical warnings.

Recommended:
```text
#D9534F
```

---

## Success

Purpose:
- successful actions,
- positive feedback.

Recommended:
```text
#4CAF50
```

---

## Info

Purpose:
- weather information,
- neutral guidance.

Recommended:
```text
#4A90E2
```

---

# Forbidden Color Behavior

Avoid:
- neon colors,
- oversaturated palettes,
- rainbow gradients,
- excessive color variety.

The UI should remain visually calm.

---

# Typography System

## Typography Philosophy

Typography must prioritize:
- readability,
- clarity,
- mobile accessibility,
- sunlight visibility.

---

# Font Style

Preferred:
- clean sans-serif fonts.

Recommended:
- Inter
- System fonts
- Roboto (Android fallback)

---

# Font Weight Rules

## Use

| Usage | Weight |
|---|---|
| Headings | SemiBold |
| Section Titles | Medium |
| Body Text | Regular |
| Captions | Regular |

---

## Avoid

Avoid:
- ultra thin fonts,
- decorative fonts,
- condensed fonts.

---

# Font Size Scale

## Heading Large

Usage:
- screen titles

Recommended:
```text
28
```

---

## Heading Medium

Usage:
- section titles

Recommended:
```text
22
```

---

## Body Large

Usage:
- important readable text

Recommended:
```text
16
```

---

## Body Standard

Usage:
- normal content

Recommended:
```text
14
```

---

## Caption

Usage:
- metadata
- timestamps

Recommended:
```text
12
```

---

# Spacing System

## Spacing Philosophy

Spacing should create:
- breathing room,
- readability,
- touch comfort.

Avoid cramped interfaces.

---

# Spacing Scale

Use ONLY these spacing values:

```text
4
8
12
16
20
24
32
40
48
```

Avoid arbitrary spacing values.

---

# Border Radius System

## Philosophy

Rounded corners should feel:
- modern,
- soft,
- approachable.

Avoid:
- overly sharp edges,
- excessive rounding.

---

# Radius Scale

| Usage | Radius |
|---|---|
| Buttons | 12 |
| Cards | 16 |
| Inputs | 12 |
| Modals | 20 |

---

# Shadow System

## Philosophy

Shadows should:
- remain subtle,
- avoid visual heaviness.

---

# Shadow Rules

Use:
- low elevation,
- soft shadows,
- minimal opacity.

Avoid:
- giant floating shadows,
- layered shadow stacks.

---

# Card Design System

## Card Philosophy

Cards should:
- remain lightweight,
- preserve readability,
- feel structured.

---

# Card Rules

## Required

- subtle border or shadow
- moderate padding
- clear hierarchy

---

## Avoid

Avoid:
- glassmorphism
- heavy blur
- layered floating cards

---

# Button Design System

## Button Philosophy

Buttons should:
- feel responsive,
- remain touch-friendly,
- avoid visual overload.

---

# Primary Button

Usage:
- major actions.

Style:
- filled background
- medium weight text
- rounded corners

---

# Secondary Button

Usage:
- less important actions.

Style:
- outline or soft fill

---

# Button Height

Recommended:
```text
48px minimum
```

---

# Input Design System

## Input Philosophy

Inputs should:
- remain clear,
- easy to tap,
- easy to scan visually.

---

# Input Rules

## Required

- large touch targets
- visible focus states
- readable placeholder text

---

## Avoid

Avoid:
- tiny inputs
- thin borders
- excessive decorations

---

# Iconography

## Icon Philosophy

Icons should:
- support comprehension,
- remain simple,
- avoid stylistic inconsistency.

---

# Recommended Icon Style

Use:
- outlined or minimal filled icons.

Preferred:
- Lucide
- Material Icons

---

# Avoid

Avoid:
- cartoon icons
- skeuomorphic icons
- over-detailed icon sets

---

# Layout Philosophy

Layouts should:
- prioritize vertical scrolling,
- avoid visual clutter,
- preserve scanability.

---

# Layout Rules

## Required

- single-direction scroll
- strong hierarchy
- consistent spacing

---

## Avoid

Avoid:
- dense dashboards
- multi-column complexity
- cramped cards

---

# Navigation Design

## Bottom Tabs

Required:
- clear labels
- simple icons
- touch-friendly spacing

---

# Header Design

Headers should:
- remain minimal,
- preserve content space,
- avoid visual noise.

---

# Loading State Design

## Philosophy

Loading states should:
- reassure users,
- preserve perceived speed.

---

# Preferred Loading Patterns

Use:
- skeleton loaders
- shimmer placeholders
- lightweight transitions

---

# Avoid

Avoid:
- giant blocking spinners
- fullscreen loading interruptions

---

# Result Screen Design

## Result Screen Priorities

1. Disease clarity
2. Readability
3. Actionability

---

# Result Screen Structure

Recommended order:
1. Disease Name
2. Confidence
3. Severity
4. Symptoms
5. Treatments
6. Fertilizer Suggestions
7. Prevention Tips

---

# Community Feed Design

## Philosophy

Community should feel:
- lightweight,
- useful,
- image-first.

NOT:
- like Instagram,
- like Facebook,
- engagement-addicted.

---

# Community Card Rules

## Required

- image-first layout
- lightweight comments
- readable metadata

---

## Avoid

Avoid:
- excessive reactions
- autoplay media
- cluttered interactions

---

# Voice Assistant Design

## Philosophy

Voice features should:
- remain optional,
- avoid dominating UI,
- feel natural.

---

# Voice UI Rules

Use:
- small microphone button
- subtle waveform animation

Avoid:
- fullscreen AI assistant modes
- exaggerated assistant visuals

---

# Dark Mode Philosophy

Dark mode is:
- optional future scope.

If implemented:
- preserve calmness,
- preserve readability,
- avoid pure black backgrounds.

---

# Motion Design Rules

## Motion Philosophy

Motion should:
- improve clarity,
- improve responsiveness.

Never:
- distract users,
- reduce performance.

---

# Allowed Motion

Allowed:
- fade transitions
- subtle scale feedback
- lightweight navigation transitions

---

# Forbidden Motion

Avoid:
- bouncing effects
- floating animations
- decorative motion systems
- heavy spring animations

---

# Accessibility Rules

The UI MUST support:
- readable contrast,
- large tap targets,
- sunlight readability,
- comfortable spacing.

---

# Performance-Aware Design

Design choices must consider:
- low-end Android rendering,
- memory efficiency,
- rendering complexity.

Visual beauty must NEVER reduce smoothness.

---

# AI Agent Design Rules

AI agents MUST:
- follow spacing system,
- follow typography system,
- preserve visual consistency,
- avoid introducing random design styles,
- preserve calm visual hierarchy.

---

# Final Design Principle

AgriSathi should feel:

```text
Quietly intelligent.
Calmly dependable.
Fast without looking rushed.
```

The design should help farmers focus on farming tasks instead of learning the interface.