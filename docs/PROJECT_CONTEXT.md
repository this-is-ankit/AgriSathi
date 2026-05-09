# PROJECT_CONTEXT.md

# AgriSathi — AI-Powered Smart Farming Assistant

## Project Overview

AgriSathi is a mobile-first AI-powered smart agriculture platform designed to help farmers detect crop diseases, receive intelligent farming recommendations, and interact with a farming-focused digital ecosystem.

The platform uses AI-based image processing to analyze crop images and identify diseases. Based on detection results, the system provides treatment suggestions, fertilizer recommendations, weather-based alerts, and preventive guidance.

The application is designed primarily for Android users in agricultural environments, including low-end devices and unstable network conditions.

AgriSathi is NOT just a crop disease detector.

It is designed as:
- an intelligent farming companion,
- a lightweight advisory system,
- a farmer support ecosystem,
- a scalable agriculture technology platform.

---

# Core Product Philosophy

The product should feel:
- calm,
- trustworthy,
- smooth,
- lightweight,
- fast,
- intelligent,
- non-technical,
- highly accessible.

The experience should resemble modern performant mobile apps such as:
- Swiggy Instamart,
- Zepto,
- Google Pay,
- PhonePe,
- Uber.

NOT flashy startup demo apps.

The frontend should prioritize:
- responsiveness,
- smooth scrolling,
- low-end Android optimization,
- minimal animations,
- predictable interactions,
- low cognitive load.

---

# Main Goal

The primary goal is to improve agricultural productivity and farmer decision-making using AI-assisted disease detection and smart advisory systems.

---

# Target Users

## Primary Users
- Farmers
- Small-scale agricultural workers
- Rural smartphone users

## Secondary Users
- Agricultural experts
- Community moderators
- Researchers
- Farming groups

---

# Platform Type

Primary platform:
- React Native mobile application

Backend:
- FastAPI

AI:
- Hugging Face pretrained models

Database:
- Firebase and/or MongoDB

---

# Finalized Feature Set

## 1. Authentication System

Features:
- Mobile login/signup
- OTP-based authentication
- Persistent sessions
- User profiles

Requirements:
- Lightweight authentication flow
- Minimal onboarding friction

---

## 2. Crop Disease Detection

Features:
- Camera capture
- Gallery image upload
- AI disease prediction
- Confidence score display

Requirements:
- Fast image upload
- Optimized prediction response
- Clean prediction UI

---

## 3. Disease Information System

Features:
- Disease name
- Symptoms
- Severity
- Causes
- Prevention methods

Requirements:
- Simple language
- Farmer-friendly explanations

---

## 4. Treatment Recommendation System

Features:
- Pesticide suggestions
- Organic treatment suggestions
- Preventive guidance
- Application instructions

Requirements:
- Human-readable recommendations
- Clear dosage instructions

---

## 5. Fertilizer Recommendation System

Features:
- Crop-specific fertilizer recommendations
- Nutrient guidance
- Growth-stage-based recommendations

Requirements:
- Simple explanation system
- Practical usability

---

## 6. Weather-Based Advisory

Features:
- Weather forecasting
- Humidity alerts
- Rain alerts
- Disease-risk warnings

Requirements:
- Region-aware advisories
- Lightweight weather summaries

---

## 7. Push Notifications

Features:
- Farming reminders
- Weather alerts
- Disease warnings
- Advisory notifications

Requirements:
- Non-spammy notification behavior
- Relevant and actionable alerts

---

## 8. Multi-Language Support

Initial languages:
- English
- Hindi
- Bengali

Requirements:
- Easy language switching
- Scalable translation architecture

---

## 9. Farmer Dashboard

Features:
- Detection history
- Weather summary
- Recommendations
- Alerts
- Community highlights

Requirements:
- Single-direction vertical scrolling
- Minimal dashboard clutter

---

## 10. Offline Support

Scope:
- Local caching
- Offline history access
- Deferred synchronization

Not required:
- Full offline AI inference

Reason:
- Complexity optimization
- Faster project completion

---

## 11. GPS-Based Smart Advisory

Features:
- Region-specific disease alerts
- Weather-aware recommendations
- Localized advisory content

---

## 12. Admin System

Features:
- Disease database management
- Community moderation
- Advisory management

---

# Mandatory Advanced Features

## 13. AI Chatbot

Features:
- Farming-related questions
- Disease-related guidance
- Conversational assistance

Requirements:
- Friendly personality
- Short and clear responses
- Farmer-oriented explanations

---

## 14. Voice Assistance

Features:
- Speech-to-text
- Text-to-speech
- Local language voice interaction

Requirements:
- Lightweight implementation
- Non-intrusive UI

---

## 15. Community Section

Features:
- Farmer discussions
- Crop image sharing
- Public advisory posts
- Question-answer interactions

Requirements:
- Minimal social media complexity
- Lightweight interactions
- Fast loading feeds

---

# Frontend Philosophy

## Frontend Identity

The frontend should feel like:
"An intelligent farming companion"

NOT:
"A futuristic AI laboratory app"

---

## UI Priorities

Highest priorities:
1. Responsiveness
2. Smooth scrolling
3. Low-end Android optimization
4. Fast interaction feedback
5. Simplicity

Lowest priorities:
- flashy animations
- unnecessary transitions
- visual overload

---

## Animation Rules

Animations should be:
- subtle,
- purposeful,
- minimal,
- fast.

Allowed:
- fade transitions
- loading skeletons
- button feedback
- page transitions

Avoid:
- parallax effects
- floating UI
- excessive motion
- animation-heavy screens

---

## Scrolling Philosophy

Scrolling must feel:
- smooth,
- stable,
- performant.

Requirements:
- virtualization
- lazy loading
- optimized lists
- lightweight rendering

Avoid:
- nested scroll views
- large rendering trees
- heavy shadows
- expensive blur effects

---

## Navigation Structure

Bottom tab navigation required.

Main tabs:
- Home
- Scan
- Community
- Alerts
- Profile

---

## Camera Experience

The disease scan flow is the core interaction.

Flow:
Open App
→ Open Camera
→ Capture Image
→ AI Detection
→ Recommendation Result

This flow must feel:
- instant,
- focused,
- frictionless.

---

# Backend Philosophy

Backend architecture must prioritize:
- modularity,
- async performance,
- scalability,
- AI integration simplicity.

FastAPI is the required backend framework.

Requirements:
- async routes,
- modular services,
- environment-based configuration,
- production-grade architecture.

---

# AI Philosophy

The project uses pretrained AI models from Hugging Face.

The system should:
- avoid unnecessary model training,
- prioritize deployment simplicity,
- optimize practical usability.

Initial deployment strategy:
- online inference via backend.

Possible future scope:
- TensorFlow Lite offline inference.

---

# Performance Philosophy

The application must be optimized primarily for:
- low-end Android devices,
- unstable internet conditions,
- low memory usage,
- smooth UI interactions.

Performance is MORE important than visual complexity.

---

# Technical Stack

## Frontend
- React Native
- TypeScript

## Backend
- FastAPI
- Python

## AI
- Hugging Face
- OpenCV
- PyTorch/TensorFlow

## Database
- Firebase
- MongoDB (optional)

## Notifications
- Firebase Cloud Messaging

## Weather
- OpenWeatherMap API

## Authentication
- Firebase Authentication

---

# Development Environment

Primary development environment:
- Arch Linux

Development style:
- CLI-first workflow
- AI-agent-assisted development
- Modular architecture
- Markdown-driven project management

---

# AI Agent Instructions

All AI coding agents MUST:
- read PROJECT_CONTEXT.md first,
- follow frontend philosophy strictly,
- prioritize performance over visuals,
- avoid unnecessary complexity,
- maintain modular architecture,
- preserve smooth UX behavior,
- optimize for low-end Android devices.

---

# Non-Goals

The project should NOT become:
- a heavy social media app,
- an animation-heavy UI showcase,
- a research-only AI project,
- an overly enterprise dashboard,
- a desktop-first application.

---

# Product Personality

AgriSathi should feel:
- dependable,
- calm,
- intelligent,
- supportive,
- lightweight,
- human-centered.

The user should feel:
"This app helps me farm better."
