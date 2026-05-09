# STATE_MANAGEMENT.md

# AgriSathi State Management

## Purpose

This document defines:
- frontend state architecture,
- Zustand store structure,
- local vs global state rules,
- caching strategy,
- query management,
- persistence behavior.

This file acts as:
- the frontend state source of truth,
- the architecture reference for frontend agents,
- the state consistency guide.

All frontend state management MUST follow this document.

---

# State Management Philosophy

State management should prioritize:
- simplicity,
- predictability,
- performance,
- maintainability.

The application should avoid:
- excessive global state,
- deeply nested stores,
- unnecessary complexity.

---

# Core Philosophy

Only place data in global state IF:
- multiple screens need it,
- it must persist globally,
- it affects application-wide behavior.

Otherwise:
- keep state local.

---

# Primary State Management Library

Required:
- Zustand

---

# Why Zustand

Reasons:
- lightweight,
- minimal boilerplate,
- fast,
- React Native friendly,
- excellent performance,
- simple mental model.

---

# Forbidden State Libraries

Avoid unless explicitly required:
- MobX
- Recoil
- Redux Saga
- Massive Redux architectures

Redux Toolkit is acceptable ONLY if complexity becomes extremely large.

---

# State Architecture Philosophy

Preferred architecture:

```text
UI State
    ↓
Local Component State

Shared App State
    ↓
Zustand Store

Server Data
    ↓
Query Layer / API Layer
```

---

# State Categories

State should be divided into:

1. Local UI State
2. Global App State
3. Server State
4. Cached Persistent State

---

# LOCAL STATE RULES

# Use Local State For

Use component state for:
- modal visibility
- input values
- temporary UI interactions
- local toggles
- temporary loading indicators

---

# Good Local State Examples

```text
isModalVisible
searchInput
selectedTab
isExpanded
```

---

# Avoid Putting In Global State

Do NOT place:
- temporary UI flags
- local animations
- screen-only values

into Zustand.

---

# GLOBAL STATE RULES

# Use Global State For

Global state should contain:
- authenticated user
- app settings
- selected language
- notification preferences
- global app status

---

# Good Global State Examples

```text
user
authToken
language
theme
notificationSettings
```

---

# Avoid Globalizing

Avoid storing:
- API responses unnecessarily
- temporary form values
- screen-specific state

globally.

---

# SERVER STATE PHILOSOPHY

# Server Data Should NOT Live Permanently In Zustand

Examples:
- community feed
- weather responses
- prediction history

should primarily come from:
- API layer,
- caching layer.

---

# Recommended Query Strategy

Preferred:
- React Query / TanStack Query

Reason:
- caching,
- retries,
- stale handling,
- loading states,
- invalidation.

---

# Recommended Query Libraries

Preferred:
- @tanstack/react-query

---

# Query Responsibilities

The query layer should handle:
- API caching
- retries
- background refetching
- stale state
- loading/error states

---

# Zustand Responsibilities

Zustand should handle:
- app-wide client state,
- persistent lightweight state.

---

# Recommended Store Structure

```text
store/
├── authStore.ts
├── appStore.ts
├── settingsStore.ts
├── notificationStore.ts
└── index.ts
```

---

# AUTH STORE

# Responsibilities

Should manage:
- authentication state
- user session
- login status

---

# Recommended Auth State

```ts
{
  user: null,
  token: "",
  isAuthenticated: false,
  isLoading: false
}
```

---

# APP STORE

# Responsibilities

Should manage:
- app-level UI state
- global loading indicators
- app initialization state

---

# SETTINGS STORE

# Responsibilities

Should manage:
- language
- preferences
- notification settings

---

# NOTIFICATION STORE

# Responsibilities

Should manage:
- local notification state
- unread count
- notification preferences

---

# Store Design Rules

Stores should:
- remain small,
- remain focused,
- have clear responsibilities.

---

# Avoid

Avoid:
- giant mega-stores
- deeply nested state trees
- unrelated mixed state

---

# Store Naming Rules

Use:
```text
camelCase + Store
```

Examples:
```text
authStore
settingsStore
notificationStore
```

---

# Store Action Rules

Actions should:
- remain explicit,
- remain predictable,
- avoid hidden side effects.

---

# Good Action Examples

```ts
login()
logout()
setLanguage()
markNotificationAsRead()
```

---

# Bad Action Examples

```ts
handleEverything()
updateStuff()
processApp()
```

---

# Persistence Philosophy

Persist ONLY important lightweight state.

---

# Recommended Persistent State

Persist:
- auth session
- language
- user preferences

---

# Avoid Persisting

Avoid persisting:
- large API payloads
- large community feeds
- temporary loading state

---

# Preferred Storage Engine

Recommended:
- MMKV

Reason:
- fast,
- lightweight,
- React Native optimized.

---

# Cache Strategy

# Philosophy

Cache should improve:
- responsiveness,
- offline usability,
- perceived speed.

---

# Good Cache Targets

Cache:
- weather data
- recent detections
- user profile
- recent advisories

---

# Avoid Excessive Caching

Avoid:
- storing massive feeds locally
- stale prediction data forever
- unlimited cache growth

---

# Query Key Rules

Use predictable query keys.

---

# Good Query Keys

```text
["weather"]
["community-feed"]
["detection-history"]
```

---

# Bad Query Keys

```text
["stuff"]
["data"]
["all"]
```

---

# Query Invalidation Rules

Queries should invalidate:
- after post creation
- after profile updates
- after new detections

---

# Loading State Rules

Loading state should:
- remain localized where possible.

---

# Avoid Global Loading Abuse

Avoid:
- fullscreen app loading
- giant global loading blockers

unless absolutely necessary.

---

# Optimistic Updates

Use optimistic updates ONLY when:
- safe,
- reversible.

Good examples:
- liking a post
- marking notifications read

Avoid optimistic updates for:
- disease predictions
- critical operations

---

# Offline State Philosophy

Offline support should:
- degrade gracefully,
- preserve important local data.

---

# Recommended Offline Data

Persist:
- detection history
- cached advisories
- user settings

---

# Error State Philosophy

Error state should:
- remain localized,
- remain readable,
- avoid crashing the app.

---

# Store Performance Rules

Stores must:
- avoid unnecessary updates,
- minimize rerenders,
- preserve scrolling performance.

---

# Required

Use:
- selectors
- shallow comparisons
- minimal subscriptions

---

# Avoid

Avoid:
- subscribing entire screens to giant stores
- unnecessary global state updates

---

# Derived State Rules

Prefer:
- computed selectors,
- lightweight derived state.

Avoid:
- storing duplicated computed values.

---

# API Layer Philosophy

The API layer should remain separate from stores.

Preferred flow:

```text
Screen
  ↓
Query Hook
  ↓
API Service
  ↓
Backend
```

---

# Store Logic Rules

Stores should NOT:
- directly contain API business logic,
- directly perform massive async workflows.

Prefer:
- services/hooks for async handling.

---

# Frontend Performance Philosophy

State architecture must preserve:
- smooth scrolling,
- fast interactions,
- low memory usage.

Poor state management must NEVER reduce UI responsiveness.

---

# AI Agent State Rules

AI coding agents MUST:
- avoid overengineering stores,
- avoid unnecessary global state,
- preserve modular store structure,
- preserve frontend performance.

---

# Future Scalability

The state architecture should support:
- multilingual support,
- larger community systems,
- offline caching,
- future AI modules.

Without requiring complete rewrites.

---

# Testing State Management

State systems should be tested for:
- persistence behavior
- cache invalidation
- rerender performance
- offline recovery

---

# Final State Principle

The state system should feel:

```text
Minimal.
Predictable.
Fast.
Maintainable.
```

State should help the app disappear behind the user experience instead of becoming a source of frontend complexity.