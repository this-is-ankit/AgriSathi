# COMPONENT_GUIDELINES.md

# AgriSathi Component Guidelines

## Purpose

This document defines:
- reusable component architecture,
- component naming standards,
- UI composition rules,
- styling consistency,
- loading component behavior,
- interaction standards.

This file acts as:
- the component system source of truth,
- the reusable UI architecture guide,
- the frontend implementation reference for AI agents.

All frontend components MUST follow this document.

---

# Component Philosophy

AgriSathi components should feel:
- lightweight,
- reusable,
- readable,
- predictable,
- calm,
- touch-friendly.

Components should prioritize:
- usability,
- consistency,
- smooth performance,
- maintainability.

Avoid:
- overly abstract components,
- giant configurable systems,
- visually noisy UI.

---

# Component Architecture Philosophy

Components should:
- solve ONE responsibility,
- remain composable,
- remain easy to understand,
- remain reusable across screens.

---

# Component Folder Structure

Recommended structure:

```text
components/
├── buttons/
├── cards/
├── inputs/
├── loaders/
├── modals/
├── navigation/
├── typography/
├── feedback/
├── community/
├── weather/
└── prediction/
```

---

# Component Naming Rules

## Naming Convention

Use:
```text
PascalCase
```

Examples:
```text
PrimaryButton.tsx
WeatherCard.tsx
PredictionResultCard.tsx
CommunityPostCard.tsx
```

---

# Forbidden Naming

Avoid:
```text
button.tsx
card2.tsx
newComponent.tsx
finalCard.tsx
```

Names must describe responsibility clearly.

---

# Component File Rules

Each reusable component should ideally contain:

```text
Component.tsx
styles.ts
types.ts
```

Optional:
```text
constants.ts
hooks.ts
```

---

# Component Size Rules

## Preferred Size

Preferred:
```text
< 200 lines
```

---

# Avoid

Avoid:
- giant multi-purpose components,
- screen-sized reusable components,
- mixed business logic and UI.

---

# Component Responsibility Rules

## Required

Each component should:
- have one primary responsibility,
- remain reusable,
- avoid screen-specific assumptions.

---

# Avoid

Avoid components that:
- directly fetch API data,
- tightly couple to screens,
- contain unrelated UI logic.

---

# Smart vs Dumb Components

## Preferred Pattern

Prefer:
- presentation components,
- logic handled in hooks/services.

---

# Good Pattern

```text
Screen
  ↓
Hook/Service
  ↓
Reusable UI Component
```

---

# Bad Pattern

```text
Huge Component
  ↓
API Calls
  ↓
Navigation
  ↓
Business Logic
  ↓
Rendering
```

---

# Component Styling Philosophy

Components should:
- remain visually calm,
- preserve spacing consistency,
- follow DESIGN_SYSTEM.md.

---

# Styling Rules

## Required

Use:
- centralized styles,
- reusable spacing,
- consistent typography.

---

# Avoid

Avoid:
- inline heavy styles,
- random spacing,
- inconsistent radii,
- inconsistent colors.

---

# Component Composition Rules

Components should:
- compose vertically,
- avoid excessive nesting,
- remain readable.

---

# Recommended Composition Depth

Preferred:
```text
3–5 nesting levels maximum
```

Avoid deeply nested JSX trees.

---

# Button Component Guidelines

# Philosophy

Buttons should:
- feel immediate,
- remain touch-friendly,
- provide clear feedback.

---

# Button Variants

Required:
- PrimaryButton
- SecondaryButton
- GhostButton
- IconButton

---

# Primary Button Rules

Use for:
- important actions,
- submission actions,
- scan actions.

---

# Primary Button Behavior

## Required

- solid background
- readable label
- minimum height 48px
- visible press feedback

---

# Secondary Button Rules

Use for:
- secondary actions,
- less prominent interactions.

---

# Ghost Button Rules

Use for:
- lightweight actions,
- dismiss interactions,
- tertiary actions.

---

# Icon Button Rules

Use for:
- compact actions,
- utility interactions.

Must maintain:
- touch-friendly sizing.

---

# Forbidden Button Behavior

Avoid:
- tiny buttons,
- overloaded icon buttons,
- excessive shadows,
- slow press feedback.

---

# Card Component Guidelines

# Philosophy

Cards should:
- group information clearly,
- remain lightweight,
- preserve readability.

---

# Required Card Variants

Recommended:
- WeatherCard
- AlertCard
- PredictionCard
- CommunityPostCard
- AdvisoryCard

---

# Card Layout Rules

## Required

- moderate padding
- readable spacing
- subtle elevation or border

---

# Avoid

Avoid:
- huge shadows
- glassmorphism
- layered floating effects

---

# CommunityPostCard Rules

Community cards should:
- prioritize image clarity,
- remain compact,
- load efficiently.

---

# Community Card Layout

Recommended structure:

```text
Header
↓
Image
↓
Caption
↓
Metadata
```

---

# PredictionResultCard Rules

Prediction cards should prioritize:
1. Disease clarity
2. Severity visibility
3. Actionable recommendations

---

# WeatherCard Rules

Weather cards should:
- remain compact,
- communicate quickly,
- avoid clutter.

---

# Input Component Guidelines

# Philosophy

Inputs should:
- feel responsive,
- remain readable,
- support large touch areas.

---

# Required Input Variants

Recommended:
- TextInput
- SearchInput
- OTPInput
- CaptionInput

---

# Input Rules

## Required

- visible focus states
- readable placeholders
- touch-friendly height

---

# Avoid

Avoid:
- tiny text fields
- excessive borders
- decorative placeholders

---

# Loader Component Guidelines

# Philosophy

Loading states should:
- preserve perceived speed,
- reassure users,
- avoid frustration.

---

# Required Loading Components

Recommended:
- SkeletonCard
- ScreenLoader
- InlineLoader
- ImageLoader

---

# Preferred Loading Strategy

Use:
- skeletons,
- shimmer placeholders,
- progressive rendering.

---

# Avoid

Avoid:
- fullscreen blocking spinners,
- endless loaders,
- flashing loading states.

---

# Empty State Components

# Philosophy

Empty states should:
- guide users,
- encourage action,
- remain friendly.

---

# Required Empty States

Possible:
- EmptyCommunityFeed
- EmptyDetectionHistory
- EmptyAlertsState

---

# Empty State Rules

Include:
- short message
- optional CTA
- minimal illustration (optional)

---

# Modal Component Guidelines

# Philosophy

Modals should:
- remain focused,
- avoid overwhelming users,
- support quick decisions.

---

# Modal Rules

## Required

- clear dismissal
- visible title
- controlled height

---

# Avoid

Avoid:
- fullscreen heavy modals,
- multi-step modal flows,
- nested modals.

---

# List Component Guidelines

# Philosophy

Lists are critical for performance.

All list rendering must prioritize:
- smooth scrolling,
- memory efficiency,
- virtualization.

---

# Required

Use:
- FlashList for large lists.

---

# Avoid

Avoid:
- unoptimized FlatLists,
- nested lists,
- rendering large datasets at once.

---

# Image Component Guidelines

# Philosophy

Images should:
- load efficiently,
- preserve smooth scrolling,
- avoid layout shifts.

---

# Image Rules

## Required

- fixed aspect ratios where possible
- placeholders
- optimized rendering

---

# Avoid

Avoid:
- huge uncompressed images
- layout jumping
- blocking image loads

---

# Typography Components

# Recommended Typography Components

Recommended:
- Heading
- SubHeading
- BodyText
- CaptionText

---

# Typography Rules

Typography components should:
- enforce consistency,
- avoid arbitrary font usage.

---

# Accessibility Rules

Components MUST support:
- readable sizing,
- touch-friendly interactions,
- visible focus states.

---

# State Rules Inside Components

## Preferred

Keep components:
- mostly stateless,
- presentation-focused.

---

# Avoid

Avoid:
- massive internal state management,
- business logic-heavy UI components.

---

# Reusability Rules

Before creating a new component:
- check if similar reusable component exists.

Avoid:
- duplicate UI patterns.

---

# Animation Rules For Components

Animations should:
- remain subtle,
- remain performant.

---

# Allowed

Allowed:
- opacity transitions
- lightweight scale feedback

---

# Avoid

Avoid:
- bouncing
- floating motion
- decorative animation systems

---

# Component Documentation Rules

Complex reusable components should include:
- prop typing,
- short usage comments,
- predictable APIs.

---

# AI Agent Component Rules

AI coding agents MUST:
- preserve component simplicity,
- preserve reusability,
- preserve visual consistency,
- avoid unnecessary abstractions,
- optimize for smooth rendering.

---

# Final Component Principle

Components should feel:

```text
Reusable.
Lightweight.
Predictable.
Fast.
```

The component system should help AgriSathi remain smooth and maintainable as the application grows.