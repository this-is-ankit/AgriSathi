# UI_SCREEN_FLOW.md

# AgriSathi UI Screen Flow

## Purpose

This document defines:
- screen hierarchy,
- navigation flow,
- user journeys,
- interaction patterns,
- screen responsibilities,
- UI transition logic.

This file acts as:
- the navigation blueprint,
- the frontend UX map,
- the source of truth for screen relationships.

All frontend implementations MUST follow this document.

---

# UX Philosophy

AgriSathi should feel:
- simple,
- predictable,
- lightweight,
- calm,
- fast.

The user should always understand:
- where they are,
- what they can do,
- what happens next.

The app should NEVER feel:
- overwhelming,
- cluttered,
- confusing,
- navigation-heavy.

---

# Navigation Philosophy

Navigation should:
- minimize friction,
- reduce cognitive load,
- remain thumb-friendly,
- prioritize vertical scrolling.

---

# Navigation Architecture

## Main Navigation Type

Required:
- Bottom Tab Navigation

---

# Main Tabs

```text
1. Home
2. Scan
3. Community
4. Alerts
5. Profile
```

---

# Root App Flow

```text
Splash Screen
        ↓
Authentication Flow
        ↓
Main App Tabs
```

---

# FULL APP FLOW

```text
Splash
  ↓
Login
  ↓
OTP Verification
  ↓
Permissions Setup
  ↓
Main Tabs
```

---

# Screen Hierarchy

```text
App
├── Splash
├── Auth
│   ├── Login
│   └── OTP Verification
│
└── Main Tabs
    ├── Home
    ├── Scan
    ├── Community
    ├── Alerts
    └── Profile
```

---

# SPLASH SCREEN

# Purpose

- initialize app,
- validate authentication state,
- preload minimal data.

---

# Responsibilities

## Required

- check login state
- load user preferences
- navigate quickly

---

# Avoid

Avoid:
- long splash duration
- heavy loading
- unnecessary animations

---

# Expected Duration

Preferred:
```text
< 2 seconds
```

---

# LOGIN SCREEN

# Purpose

Allow phone number authentication.

---

# UI Elements

Required:
- phone number input
- continue button
- country code selector

---

# Interaction Rules

The login flow should:
- feel lightweight,
- avoid excessive onboarding.

---

# OTP VERIFICATION SCREEN

# Purpose

Verify mobile number authentication.

---

# UI Elements

Required:
- OTP input
- resend button
- loading state
- verification feedback

---

# UX Rules

The OTP flow should:
- remain fast,
- provide clear feedback,
- avoid unnecessary steps.

---

# PERMISSIONS SETUP SCREEN

# Purpose

Request essential permissions.

---

# Permissions

Possible permissions:
- camera
- notifications
- microphone
- location

---

# UX Rules

Permission requests should:
- explain WHY permissions are needed,
- avoid aggressive prompting.

---

# MAIN APP STRUCTURE

# Main Navigation

Bottom tabs:
```text
Home
Scan
Community
Alerts
Profile
```

---

# HOME SCREEN

# Purpose

Act as the farmer's lightweight dashboard.

---

# Home Philosophy

The home screen should feel:
- calm,
- informative,
- actionable.

NOT:
- like an enterprise analytics dashboard.

---

# Home Layout

Recommended order:

```text
Greeting
↓
Weather Summary
↓
Quick Scan CTA
↓
Active Alerts
↓
Recent Detections
↓
Community Highlights
```

---

# Home Interaction Goals

Users should:
- immediately understand app status,
- quickly access disease scanning.

---

# HOME SCREEN COMPONENTS

## Greeting Section

Example:
```text
Good Morning, Rahul
```

---

## Weather Summary Card

Displays:
- temperature
- humidity
- weather condition
- advisory snippet

---

## Quick Scan Button

This is one of the MOST IMPORTANT CTAs.

Requirements:
- highly visible
- easy to tap
- immediate navigation

---

## Alerts Preview

Displays:
- important warnings
- weather risks
- disease alerts

---

## Recent Detections

Displays:
- recent disease scans
- quick access to history

---

## Community Highlights

Displays:
- latest useful community posts
- lightweight feed preview

---

# SCAN SCREEN

# Purpose

Primary AI disease detection interface.

---

# Scan Philosophy

This is the CORE interaction of the app.

The scan flow must feel:
- immediate,
- smooth,
- focused,
- frictionless.

---

# Scan Flow

```text
Open Scan Screen
      ↓
Capture/Upload Image
      ↓
Preview Image
      ↓
Analyze
      ↓
Result Screen
```

---

# SCAN SCREEN UI

## Required Elements

- camera preview
- gallery upload button
- capture button
- image preview
- analyze button

---

# Scan UX Rules

## Required

- minimal UI clutter
- large capture button
- responsive transitions

---

## Avoid

Avoid:
- complicated camera settings
- excessive overlays
- distracting UI

---

# IMAGE PREVIEW SCREEN

# Purpose

Allow user confirmation before analysis.

---

# UI Elements

Required:
- image preview
- retake button
- analyze button

---

# RESULT SCREEN

# Purpose

Display disease analysis and recommendations.

---

# Result Screen Priorities

1. Clarity
2. Readability
3. Actionability

---

# Result Screen Layout

Recommended order:

```text
Disease Name
↓
Confidence Score
↓
Severity
↓
Symptoms
↓
Treatment Suggestions
↓
Fertilizer Recommendations
↓
Prevention Tips
```

---

# Result Screen UX Rules

## Required

- readable hierarchy
- vertical scrolling
- clean spacing

---

## Avoid

Avoid:
- overwhelming data
- excessive charts
- dense technical information

---

# COMMUNITY SCREEN

# Purpose

Allow farmer interaction and knowledge sharing.

---

# Community Philosophy

The community should feel:
- lightweight,
- useful,
- image-first.

NOT:
- like a complex social media platform.

---

# Community Layout

Recommended structure:

```text
Search Bar
↓
Create Post CTA
↓
Community Feed
```

---

# Community Feed Rules

## Required

- optimized image rendering
- lightweight cards
- simple interactions

---

## Avoid

Avoid:
- autoplay videos
- infinite heavy feeds
- excessive engagement systems

---

# CREATE POST SCREEN

# Purpose

Allow users to share farming issues.

---

# UI Elements

Required:
- image upload
- caption input
- submit button

---

# Alerts SCREEN

# Purpose

Display important advisories and warnings.

---

# Alert Types

Possible alerts:
- weather warnings
- humidity alerts
- disease risk alerts
- farming reminders

---

# Alerts Layout

Recommended:
```text
Grouped vertical cards
```

---

# PROFILE SCREEN

# Purpose

Manage user settings and history.

---

# Profile Layout

Recommended sections:

```text
Profile Information
↓
Language Settings
↓
Detection History
↓
Saved Recommendations
↓
Logout
```

---

# CHATBOT SCREEN

# Purpose

Provide conversational farming assistance.

---

# Chatbot Philosophy

The chatbot should feel:
- helpful,
- concise,
- lightweight.

NOT:
- like a complicated AI console.

---

# Chatbot Layout

Recommended:
```text
Message List
↓
Input Area
```

---

# Chatbot UX Rules

## Required

- readable messages
- fast responses
- lightweight animations

---

## Avoid

Avoid:
- excessive assistant personality
- long typing delays
- visual overload

---

# VOICE ASSISTANT FLOW

# Purpose

Enable voice-based accessibility.

---

# Voice Flow

```text
Tap Mic
↓
Record Voice
↓
Speech-to-Text
↓
Send Message
↓
Receive Response
↓
Optional Text-to-Speech
```

---

# Voice UX Rules

## Required

- optional interaction
- subtle visuals
- lightweight feedback

---

## Avoid

Avoid:
- fullscreen assistant modes
- continuous listening UI
- aggressive animations

---

# LOADING STATE FLOW

# Philosophy

Loading states should:
- reassure users,
- preserve perceived speed.

---

# Recommended Loading States

Use:
- skeleton loaders
- shimmer placeholders
- lightweight transitions

---

# ERROR STATE FLOW

# Philosophy

Errors should:
- remain calm,
- provide guidance,
- avoid technical jargon.

---

# Good Error Example

```text
Unable to analyze image. Please try again with better lighting.
```

---

# Bad Error Example

```text
Tensor inference pipeline failed.
```

---

# OFFLINE FLOW

# Philosophy

Offline mode should:
- degrade gracefully,
- preserve critical usability.

---

# Offline Features

Allowed offline:
- cached history
- saved recommendations
- previously loaded content

---

# Empty State Philosophy

Empty states should:
- guide users,
- feel friendly,
- encourage action.

---

# Example Empty State

```text
No crop scans yet.
Start by analyzing your first crop image.
```

---

# TRANSITION RULES

Transitions should:
- remain fast,
- remain subtle,
- preserve smoothness.

---

# Allowed Transitions

Allowed:
- fade
- lightweight slide
- quick opacity transitions

---

# Avoid

Avoid:
- bouncing transitions
- heavy shared element systems
- exaggerated motion

---

# Accessibility Flow

The UI should support:
- large tap areas
- readable spacing
- sunlight readability
- predictable interactions

---

# AI Agent UI Rules

AI coding agents MUST:
- preserve navigation simplicity,
- preserve scrolling smoothness,
- avoid screen clutter,
- follow defined screen hierarchy,
- maintain calm UX behavior.

---

# Final UI Flow Principle

AgriSathi should feel:

```text
Simple to understand.
Fast to use.
Calm during interaction.
```

The user should focus on farming tasks instead of learning app navigation.