# PERFORMANCE_RULES.md

# AgriSathi Performance Rules

## Purpose

This document defines:
- frontend performance standards,
- React Native rendering rules,
- memory optimization strategy,
- image optimization standards,
- API performance targets,
- scrolling performance rules,
- low-end Android optimization requirements.

This file acts as:
- the performance source of truth,
- the optimization handbook for AI agents,
- the smooth UX preservation guide.

All implementations MUST follow these performance rules.

---

# Performance Philosophy

Performance is a CORE product feature.

AgriSathi should feel:
- fast,
- responsive,
- lightweight,
- stable,
- smooth.

The app should prioritize:
- usability,
- responsiveness,
- perceived speed.

Over:
- decorative visuals,
- animation-heavy UI,
- unnecessary complexity.

---

# Core Performance Priorities

## Highest Priorities

1. Smooth scrolling
2. Fast touch response
3. Stable rendering
4. Low memory usage
5. Fast screen transitions
6. Predictable responsiveness
7. Efficient image handling

---

## Lowest Priorities

1. Fancy animations
2. Heavy visual effects
3. Decorative rendering
4. Experimental UI systems

---

# Target Devices

Primary optimization target:
- low-end Android devices.

Examples:
- weak CPUs
- limited RAM
- unstable internet
- older Android versions

---

# React Native Performance Philosophy

React Native performance should:
- minimize rerenders,
- minimize JS thread blocking,
- minimize memory pressure,
- preserve UI thread smoothness.

---

# CRITICAL PERFORMANCE RULE

If a feature harms:
- scrolling smoothness,
- responsiveness,
- stability,

then the feature implementation is WRONG.

---

# FRONTEND RENDERING RULES

# Philosophy

Rendering must remain:
- lightweight,
- predictable,
- efficient.

---

# Required

Use:
- memoization
- virtualization
- lazy loading
- lightweight component trees

---

# Avoid

Avoid:
- excessive rerenders
- deeply nested JSX
- large rendering trees
- heavy runtime calculations

---

# RERENDER OPTIMIZATION RULES

# Required

Use:
- React.memo
- useCallback
- useMemo

ONLY when beneficial.

---

# Avoid

Avoid:
- unnecessary memoization everywhere
- premature optimization complexity

---

# Important Principle

Bad memoization can be worse than no memoization.

Optimize intentionally.

---

# COMPONENT PERFORMANCE RULES

Components should:
- remain focused,
- remain lightweight,
- avoid unnecessary state subscriptions.

---

# Avoid

Avoid:
- giant multi-purpose components
- components handling excessive logic
- unnecessary prop drilling

---

# STATE MANAGEMENT PERFORMANCE

# Philosophy

Global state updates are expensive.

---

# Required

Use:
- localized state where possible
- selective subscriptions
- shallow comparisons

---

# Avoid

Avoid:
- giant global stores
- broad subscriptions
- updating entire app state unnecessarily

---

# LIST PERFORMANCE RULES

# CRITICAL AREA

Lists are the MOST IMPORTANT frontend performance area.

---

# Required

Use:
- FlashList for large datasets

Required features:
- estimatedItemSize
- pagination
- virtualization

---

# Avoid

Avoid:
- FlatList for large heavy feeds
- nested FlatLists
- nested ScrollViews
- rendering all items at once

---

# COMMUNITY FEED PERFORMANCE

Community feed MUST:
- scroll smoothly,
- preserve stable FPS,
- optimize image rendering.

---

# Required

Use:
- paginated loading
- optimized images
- lightweight cards

---

# IMAGE PERFORMANCE RULES

# Philosophy

Images are one of the biggest performance risks.

---

# Required

Images should:
- load progressively,
- use placeholders,
- preserve aspect ratio.

---

# Avoid

Avoid:
- huge raw images
- layout shifting
- unnecessary image rerenders

---

# IMAGE OPTIMIZATION RULES

# Required

Use:
- compressed uploads
- optimized dimensions
- caching where appropriate

---

# Recommended Upload Strategy

Before upload:
```text
Compress image
↓
Resize if necessary
↓
Upload optimized version
```

---

# CAMERA PERFORMANCE RULES

Camera flow should:
- open quickly,
- capture quickly,
- avoid UI lag.

---

# Avoid

Avoid:
- overlay-heavy camera UI
- real-time expensive processing
- excessive preview rendering

---

# NAVIGATION PERFORMANCE RULES

Navigation should:
- feel instant,
- preserve smooth transitions.

---

# Required

Use:
- lightweight navigation stacks
- lazy-loaded screens

---

# Avoid

Avoid:
- deeply nested navigation
- excessive mounted screens
- blocking transitions

---

# ANIMATION PERFORMANCE RULES

# Philosophy

Animations should:
- improve UX,
- NOT reduce responsiveness.

---

# Allowed

Allowed:
- opacity transitions
- lightweight scale feedback
- subtle transitions

---

# Avoid

Avoid:
- heavy spring systems
- complex gesture animations
- continuous animation loops
- decorative motion systems

---

# JS THREAD PROTECTION RULES

# Philosophy

The JS thread should remain free for:
- interactions,
- rendering,
- navigation.

---

# Avoid

Avoid:
- heavy synchronous loops
- large runtime computations
- expensive inline processing

---

# BACKGROUND TASK RULES

Heavy operations should:
- happen asynchronously,
- avoid blocking UI.

---

# API PERFORMANCE RULES

# Philosophy

APIs should feel fast.

---

# Preferred API Latency

Target:
```text
< 1 second
```

---

# Maximum Acceptable

```text
< 3 seconds
```

For standard APIs.

---

# AI PREDICTION PERFORMANCE

Preferred:
```text
< 3 seconds
```

Maximum acceptable:
```text
< 6 seconds
```

---

# API PAYLOAD RULES

Responses should:
- remain lightweight,
- avoid unnecessary nesting,
- avoid oversized payloads.

---

# NETWORK PERFORMANCE RULES

# Philosophy

The app must behave well on poor internet connections.

---

# Required

Support:
- retries
- caching
- offline fallback

---

# Avoid

Avoid:
- massive initial payloads
- unnecessary polling
- excessive refetching

---

# MEMORY OPTIMIZATION RULES

# Philosophy

Memory efficiency is critical on Android.

---

# Avoid

Avoid:
- retaining unused large objects
- image memory leaks
- unmounted listeners
- massive cached datasets

---

# Required

Clean:
- subscriptions
- listeners
- timers
- stale references

---

# SCREEN PERFORMANCE RULES

Screens should:
- render progressively,
- avoid blocking initialization.

---

# Required

Use:
- lazy rendering
- skeleton loaders
- deferred heavy loading

---

# STARTUP PERFORMANCE RULES

App startup should:
- feel fast,
- avoid long blank screens.

---

# Splash Screen Target

Preferred:
```text
< 2 seconds
```

---

# Avoid

Avoid:
- heavy startup initialization
- blocking API calls on startup

---

# CHATBOT PERFORMANCE RULES

Chatbot should:
- render messages efficiently,
- avoid long typing delays.

---

# Avoid

Avoid:
- giant chat histories in memory
- rendering entire conversation trees

---

# WEATHER PERFORMANCE RULES

Weather data should:
- use caching,
- avoid unnecessary API calls.

---

# OFFLINE PERFORMANCE RULES

Offline mode should:
- preserve responsiveness,
- avoid hanging states.

---

# Required Offline Data

Cache:
- recent detections
- weather summaries
- recommendations

---

# LOADING PERFORMANCE RULES

Loading states should:
- preserve perceived speed.

---

# Preferred

Use:
- skeleton loaders
- progressive rendering

---

# Avoid

Avoid:
- blocking fullscreen loaders
- spinner-only experiences

---

# DEBUGGING PERFORMANCE RULES

Performance debugging should focus on:
- rerender counts
- memory usage
- JS thread blocking
- image rendering

---

# REQUIRED PERFORMANCE TESTING

Test:
- low-end Android phones
- slow internet
- prolonged app sessions
- large feed scrolling

---

# PERFORMANCE WARNING SIGNS

Watch for:
- dropped frames
- delayed taps
- scrolling stutter
- screen flickering
- memory spikes
- slow navigation

---

# PERFORMANCE MONITORING PHILOSOPHY

The app should FEEL fast.

Perceived responsiveness matters as much as raw benchmarks.

---

# AI AGENT PERFORMANCE RULES

AI coding agents MUST:
- preserve smooth scrolling,
- minimize rerenders,
- preserve low memory usage,
- avoid unnecessary dependencies,
- avoid animation-heavy implementations.

---

# FORBIDDEN PERFORMANCE BEHAVIORS

Never:
- sacrifice smoothness for visuals,
- introduce UI lag,
- create memory-heavy systems,
- render massive datasets at once.

---

# FINAL PERFORMANCE PRINCIPLE

AgriSathi should feel:

```text
Instant.
Responsive.
Stable.
Lightweight.
```

The user should trust the app because every interaction feels smooth and dependable even on weaker Android devices.