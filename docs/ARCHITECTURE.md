# ARCHITECTURE.md

# AgriSathi System Architecture

## Purpose

This document defines the complete technical architecture of the AgriSathi platform.

It describes:
- frontend architecture,
- backend architecture,
- AI inference flow,
- database structure,
- API interaction patterns,
- notification systems,
- scalability approach,
- performance strategy.

This file is intended for:
- AI coding agents,
- developers,
- maintainers,
- future contributors.

All implementations must follow the architecture described here.

---

# High-Level Architecture

```text
React Native Mobile App
            ↓
        FastAPI Backend
            ↓
 ┌───────────────────────┐
 │   External Services   │
 └───────────────────────┘
      ↓        ↓       ↓
 HuggingFace  Firebase  Weather API
      ↓        ↓       ↓
  AI Models  Auth/DB  OpenWeatherMap
```

---

# Architecture Philosophy

The architecture prioritizes:

1. Modularity
2. Scalability
3. Simplicity
4. Performance
5. Mobile-first optimization
6. AI integration flexibility

The architecture must remain:
- maintainable,
- understandable,
- lightweight,
- extensible.

---

# Frontend Architecture

## Framework

Required:
- React Native
- TypeScript

---

# Frontend Design Goals

The frontend must:
- feel lightweight,
- scroll smoothly,
- avoid rendering bottlenecks,
- work well on low-end Android devices.

The frontend should prioritize:
- interaction responsiveness,
- perceived speed,
- usability,
- accessibility.

---

# Frontend Layer Structure

```text
src/
├── api/
├── assets/
├── components/
├── constants/
├── contexts/
├── hooks/
├── navigation/
├── screens/
├── services/
├── store/
├── styles/
├── types/
├── utils/
└── widgets/
```

---

# Frontend Module Responsibilities

## api/
Handles:
- API clients
- request wrappers
- interceptors
- authentication tokens

---

## components/
Reusable UI components.

Examples:
- buttons
- cards
- loaders
- image pickers
- headers
- input fields

---

## screens/
Contains all application screens.

Examples:
- HomeScreen
- ScanScreen
- ResultScreen
- CommunityScreen
- ProfileScreen

---

## navigation/
Navigation configuration.

Required:
- bottom tab navigation
- stack navigation
- auth flow navigation

---

## hooks/
Reusable custom hooks.

Examples:
- useAuth
- usePrediction
- useWeather
- useVoice

---

## services/
Business logic layer.

Examples:
- image upload service
- chatbot service
- voice service
- notification service

---

## store/
Global state management.

Recommended:
- Zustand
OR
- Redux Toolkit (only if complexity increases)

Avoid:
- excessive global state

---

# Frontend Performance Rules

Required:
- FlashList for large feeds
- memoization where appropriate
- lazy-loaded screens
- optimized image rendering
- virtualization

Avoid:
- unnecessary re-renders
- inline object creation
- deeply nested component trees
- large synchronous operations

---

# Navigation Architecture

## Main Navigation

Bottom tab navigation required.

Tabs:
1. Home
2. Scan
3. Community
4. Alerts
5. Profile

---

# Navigation Flow

```text
Splash
  ↓
Authentication
  ↓
Main App
  ↓
Bottom Tabs
```

---

# Authentication Flow

```text
Login Screen
   ↓
OTP Verification
   ↓
Firebase Auth Validation
   ↓
Store User Session
   ↓
Navigate To App
```

---

# Disease Detection Flow

```text
Open Scan Screen
        ↓
Capture/Upload Image
        ↓
Compress Image
        ↓
Send To Backend
        ↓
FastAPI Prediction Route
        ↓
AI Inference
        ↓
Return Prediction
        ↓
Display Result Screen
```

---

# Result Screen Flow

The result screen should contain:
- disease name,
- confidence score,
- symptoms,
- treatment recommendations,
- fertilizer suggestions,
- prevention tips,
- severity indication.

The result screen must:
- avoid clutter,
- use vertical layout,
- remain readable.

---

# Backend Architecture

## Backend Framework

Required:
- FastAPI

Required backend characteristics:
- async-first,
- modular,
- scalable,
- service-oriented.

---

# Backend Folder Structure

```text
backend/
├── app/
│   ├── api/
│   ├── core/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   ├── utils/
│   ├── middleware/
│   ├── database/
│   ├── ai/
│   └── main.py
│
├── tests/
├── requirements.txt
├── .env
└── README.md
```

---

# Backend Layer Responsibilities

## api/
Contains:
- route definitions
- API endpoints
- route grouping

---

## services/
Contains:
- business logic
- prediction orchestration
- weather handling
- chatbot logic

---

## ai/
Contains:
- model loading
- preprocessing
- inference logic
- confidence scoring

---

## schemas/
Pydantic request/response schemas.

Required for:
- validation
- type safety
- API documentation

---

## core/
Contains:
- app configuration
- environment loading
- constants
- security utilities

---

# Backend API Philosophy

APIs must be:
- RESTful,
- async,
- versioned,
- lightweight,
- mobile-optimized.

Response payloads should:
- avoid unnecessary nesting,
- minimize bandwidth usage.

---

# API Base Structure

```text
/api/v1/
```

Examples:
```text
/api/v1/auth
/api/v1/predict
/api/v1/weather
/api/v1/community
/api/v1/chatbot
```

---

# AI Architecture

## AI Strategy

The project uses:
- pretrained Hugging Face models.

Initial approach:
- backend-hosted inference.

Future scope:
- local mobile inference.

---

# AI Inference Pipeline

```text
Image Upload
      ↓
Image Validation
      ↓
Preprocessing
      ↓
Model Inference
      ↓
Confidence Calculation
      ↓
Disease Mapping
      ↓
Recommendation Mapping
      ↓
Response Generation
```

---

# Image Preprocessing

Possible preprocessing steps:
- resize
- normalization
- format conversion
- background cleanup
- RGB conversion

---

# AI Model Requirements

The model should:
- support plant disease classification,
- return confidence scores,
- remain lightweight enough for backend inference.

Preferred:
- MobileNet
- EfficientNet
- Vision Transformer (lightweight variants)

---

# Database Architecture

## Primary Database

Preferred:
- Firebase

Optional:
- MongoDB

---

# Firebase Responsibilities

Use Firebase for:
- authentication,
- push notifications,
- cloud storage,
- lightweight user storage.

---

# MongoDB Responsibilities (Optional)

Use MongoDB for:
- community posts,
- scalable analytics,
- advanced content storage.

---

# Suggested Collections

```text
users
detections
community_posts
comments
alerts
weather_logs
chat_history
notifications
```

---

# Community System Architecture

## Community Features

Users can:
- post crop images,
- ask questions,
- comment,
- share experiences.

---

# Community Feed Design

The feed should:
- remain lightweight,
- prioritize images,
- avoid heavy social media complexity.

Avoid:
- infinite feature expansion,
- complex engagement systems,
- algorithm-heavy feeds.

---

# Voice Assistant Architecture

## Components

Required:
- Speech-to-text
- Text-to-speech

Frontend responsibilities:
- voice recording
- microphone permissions

Backend responsibilities:
- AI response generation

---

# Chatbot Architecture

## Chatbot Goals

The chatbot should:
- answer farming questions,
- remain concise,
- avoid overly technical language.

---

# Chatbot Flow

```text
User Message
      ↓
Frontend Request
      ↓
FastAPI Chatbot Service
      ↓
LLM/API Response
      ↓
Formatted Reply
      ↓
Frontend Rendering
```

---

# Notification Architecture

## Notification Types

1. Weather alerts
2. Disease alerts
3. Community notifications
4. Farming reminders

---

# Notification Service

Preferred:
- Firebase Cloud Messaging (FCM)

---

# Weather System Architecture

## Weather Source

Required:
- OpenWeatherMap API

---

# Weather Flow

```text
User Location
      ↓
Weather API Request
      ↓
Forecast Analysis
      ↓
Risk Evaluation
      ↓
Advisory Generation
```

---

# Offline Strategy

## Offline Scope

Allowed offline functionality:
- cached history
- local preferences
- stored recommendations

Not required:
- full AI inference offline

---

# Security Requirements

Required:
- environment variables
- token-based auth
- request validation
- rate limiting
- secure API keys

Never:
- hardcode secrets
- expose credentials in frontend

---

# Scalability Strategy

The system should support:
- modular feature growth,
- future AI model replacement,
- future analytics systems,
- future IoT integrations.

---

# Deployment Architecture

## Backend Deployment

Possible platforms:
- Railway
- Render
- VPS
- Dockerized deployment

---

## Frontend Deployment

Build targets:
- Android APK
- Android App Bundle

Primary target:
- Android devices

---

# Logging Strategy

Required:
- structured logging,
- error tracking,
- request monitoring.

Avoid:
- noisy console logging in production.

---

# Error Handling Philosophy

The system should:
- fail gracefully,
- provide user-friendly errors,
- avoid exposing internal system details.

---

# Performance Philosophy

Performance is more important than:
- excessive animations,
- visual complexity,
- feature overload.

The app must feel:
- responsive,
- stable,
- lightweight.

---

# Architecture Rules For AI Agents

AI agents MUST:
- preserve modularity,
- avoid monolithic code,
- maintain separation of concerns,
- prioritize performance,
- optimize for mobile devices,
- follow async backend patterns,
- preserve frontend smoothness.

---

# Future Expansion Possibilities

Possible future additions:
- pest detection
- crop yield prediction
- IoT integration
- drone imaging
- multilingual AI assistant
- offline inference
- expert consultation system

These should NOT affect the current lightweight architecture.