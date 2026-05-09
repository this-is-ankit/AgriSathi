# DEPLOYMENT.md

# AgriSathi Deployment Guide

## Purpose

This document defines:
- deployment architecture,
- production setup,
- backend deployment,
- frontend build process,
- environment configuration,
- release workflow,
- scalability considerations.

This file acts as:
- the production deployment source of truth,
- the deployment reference for AI agents,
- the operational release guide.

All deployments MUST follow this document.

---

# Deployment Philosophy

AgriSathi deployment should prioritize:
- simplicity,
- reliability,
- maintainability,
- cost-efficiency,
- scalability.

The deployment strategy should remain:
- lightweight,
- modular,
- mobile-first.

Avoid:
- overengineered infrastructure,
- unnecessary cloud complexity,
- enterprise-scale deployment patterns too early.

---

# Deployment Architecture

## High-Level Architecture

```text
React Native App
        ↓
FastAPI Backend
        ↓
External Services
    ├── Firebase
    ├── Hugging Face
    └── OpenWeatherMap
```

---

# Deployment Components

## Frontend

Technology:
- React Native

Deployment Target:
- Android APK
- Android App Bundle (AAB)

---

## Backend

Technology:
- FastAPI

Deployment Options:
- Railway
- Render
- VPS
- Docker

---

## Database

Primary:
- Firebase

Optional:
- MongoDB Atlas

---

## Cloud Storage

Preferred:
- Firebase Storage

---

# Deployment Priorities

## Highest Priorities

1. Reliability
2. Fast API response times
3. Stable mobile experience
4. Simple rollback process
5. Easy maintenance

---

## Lowest Priorities

1. Multi-cloud complexity
2. Enterprise orchestration
3. Kubernetes-level scaling
4. Premature infrastructure optimization

---

# ENVIRONMENT CONFIGURATION

# Environment Philosophy

All secrets MUST use:
```text
.env
```

Never:
- hardcode secrets,
- commit credentials,
- expose tokens publicly.

---

# Backend Environment Variables

Location:
```text
backend/.env
```

---

# Example Backend Variables

```env
APP_ENV=production

OPENWEATHER_API_KEY=
HUGGINGFACE_API_KEY=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

MONGODB_URI=

API_BASE_URL=
```

---

# Frontend Environment Variables

Location:
```text
frontend/.env
```

---

# Example Frontend Variables

```env
API_BASE_URL=
FIREBASE_API_KEY=
```

---

# Production Environment Rules

## Required

- secure secret storage
- environment isolation
- production-only credentials

---

## Avoid

Avoid:
- shared development secrets
- plaintext credential exposure
- hardcoded URLs

---

# BACKEND DEPLOYMENT

# Preferred Backend Stack

Recommended:
- FastAPI
- Uvicorn
- Gunicorn (optional)
- Docker (recommended)

---

# Backend Deployment Goals

The backend should:
- remain lightweight,
- support async APIs,
- support image uploads,
- remain scalable.

---

# Recommended Deployment Providers

## Beginner-Friendly

Recommended:
- Railway
- Render

Reason:
- easy setup,
- fast deployment,
- low maintenance.

---

# Advanced Options

Possible future options:
- DigitalOcean VPS
- AWS EC2
- Hetzner VPS

Not required initially.

---

# FASTAPI PRODUCTION COMMAND

Example:
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

---

# DOCKER DEPLOYMENT

# Purpose

Docker provides:
- reproducible environments,
- deployment consistency,
- easier scaling.

---

# Recommended Docker Structure

```text
backend/
├── Dockerfile
├── requirements.txt
└── app/
```

---

# Example Dockerfile Philosophy

The container should:
- remain lightweight,
- avoid unnecessary packages,
- optimize startup time.

---

# Recommended .dockerignore

```text
venv/
__pycache__/
.env
```

---

# Backend Deployment Checklist

Before deployment:

- [ ] Environment variables configured
- [ ] API routes tested
- [ ] Image upload tested
- [ ] AI inference tested
- [ ] Error handling verified
- [ ] Logging configured

---

# FRONTEND DEPLOYMENT

# Frontend Build Philosophy

The mobile app should:
- remain lightweight,
- minimize APK size,
- preserve smooth performance.

---

# Android Build Targets

Required:
- APK for testing
- AAB for release

---

# Generate Debug APK

```bash
cd android
./gradlew assembleDebug
```

---

# Generate Release APK

```bash
./gradlew assembleRelease
```

---

# Generate Android App Bundle

```bash
./gradlew bundleRelease
```

---

# Frontend Release Checklist

Before release:

- [ ] Navigation tested
- [ ] Camera flow tested
- [ ] API connectivity tested
- [ ] Push notifications tested
- [ ] Voice assistant tested
- [ ] Community feed tested
- [ ] Low-end device performance tested

---

# PERFORMANCE REQUIREMENTS

# Backend Performance Targets

Preferred API response:
```text
< 1 second for standard APIs
```

Preferred AI prediction:
```text
< 3 seconds
```

Maximum acceptable prediction:
```text
< 6 seconds
```

---

# Frontend Performance Targets

The app should:
- launch quickly,
- scroll smoothly,
- avoid frame drops,
- remain responsive on low-end Android devices.

---

# IMAGE STORAGE STRATEGY

## Recommended Storage

Use:
- Firebase Storage

---

# Store In Cloud

Store:
- crop images
- community images
- profile images

---

# Avoid

Avoid:
- storing large images directly in database,
- base64-heavy storage patterns.

---

# API DOMAIN STRUCTURE

## Suggested Production Structure

```text
api.agrisathi.com
```

Optional:
```text
cdn.agrisathi.com
```

---

# HTTPS REQUIREMENTS

Production APIs MUST use:
```text
HTTPS
```

Never expose production APIs over plain HTTP.

---

# FIREBASE DEPLOYMENT NOTES

## Firebase Services Used

Possible Firebase modules:
- Authentication
- Cloud Messaging
- Storage

---

# FIREBASE SECURITY RULES

Rules should:
- restrict unauthorized access,
- validate uploads,
- protect user content.

---

# MONGODB DEPLOYMENT NOTES

## Recommended Hosting

Preferred:
- MongoDB Atlas

---

# Database Security

Required:
- IP restrictions where possible
- strong credentials
- environment-based connection strings

---

# AI MODEL DEPLOYMENT

# Current Strategy

Preferred:
- backend-hosted inference.

---

# Model Hosting Approaches

Possible:
1. Local backend inference
2. Hugging Face API inference

---

# Current Recommendation

Recommended:
- backend-hosted inference using Hugging Face models.

Reason:
- simpler integration,
- easier response control,
- scalable architecture.

---

# LOGGING STRATEGY

# Backend Logging

Log:
- API requests
- AI inference errors
- upload failures
- authentication issues

---

# Avoid Logging

Never log:
- tokens
- secrets
- sensitive user data

---

# MONITORING STRATEGY

Possible future monitoring:
- uptime monitoring
- API latency monitoring
- crash analytics

Not required initially.

---

# CRASH HANDLING

The production app should:
- fail gracefully,
- avoid application crashes,
- preserve user trust.

---

# OFFLINE STRATEGY

## Current Offline Scope

Allowed:
- cached history
- saved recommendations
- lightweight offline viewing

---

# Not Required

Not required initially:
- full offline AI inference.

---

# RELEASE STRATEGY

# Recommended Release Flow

```text
Development
    ↓
Internal Testing
    ↓
APK Testing
    ↓
Performance Optimization
    ↓
Production Build
```

---

# TESTING REQUIREMENTS

The production build MUST be tested on:
- low-end Android devices,
- unstable internet conditions,
- real camera workflows.

---

# BACKUP STRATEGY

Recommended:
- database backups
- environment backup
- deployment config backup

---

# SECURITY REQUIREMENTS

Production deployment MUST:
- secure environment variables,
- validate uploads,
- sanitize API input,
- use HTTPS.

---

# SCALABILITY STRATEGY

The deployment architecture should support future:
- user growth,
- larger image uploads,
- expanded AI systems,
- multilingual support.

Avoid premature infrastructure complexity.

---

# COST OPTIMIZATION PHILOSOPHY

The deployment should:
- remain affordable,
- scale gradually,
- avoid unnecessary cloud expenses.

---

# AI AGENT DEPLOYMENT RULES

AI coding agents MUST:
- preserve deployment simplicity,
- avoid introducing unnecessary infrastructure,
- maintain environment separation,
- preserve production stability.

---

# PRODUCTION READINESS CHECKLIST

## Backend

- [ ] FastAPI APIs tested
- [ ] Environment variables configured
- [ ] Logging configured
- [ ] AI inference tested
- [ ] Error handling verified

---

## Frontend

- [ ] APK tested
- [ ] Navigation tested
- [ ] Camera tested
- [ ] Offline behavior tested
- [ ] Push notifications tested

---

## Security

- [ ] HTTPS enabled
- [ ] Secrets protected
- [ ] Firebase secured
- [ ] Upload validation added

---

# Final Deployment Principle

The deployment system should feel:

```text
Reliable.
Simple.
Scalable.
Maintainable.
```

AgriSathi should deploy like a practical real-world product, not an overengineered experimental system.