# TESTING_GUIDELINES.md

# AgriSathi Testing Guidelines

## Purpose

This document defines:
- testing philosophy,
- frontend testing strategy,
- backend testing strategy,
- API testing,
- AI pipeline testing,
- device testing,
- low-end Android testing,
- production readiness validation.

This file acts as:
- the quality assurance source of truth,
- the stability guide for AI agents,
- the testing standard for the project.

All testing workflows MUST follow this document.

---

# Testing Philosophy

AgriSathi should feel:
- smooth,
- stable,
- reliable,
- predictable.

Testing exists to ensure:
- trust,
- usability,
- responsiveness,
- production readiness.

---

# Core Testing Priorities

## Highest Priorities

1. App stability
2. Smooth performance
3. AI prediction reliability
4. Navigation reliability
5. Low-end Android performance
6. Error recovery
7. Offline resilience

---

## Lowest Priorities

1. Pixel-perfect visual obsession
2. Overengineered test suites
3. Enterprise-scale QA complexity

---

# Testing Layers

Testing is divided into:

1. Manual Testing
2. Frontend Testing
3. Backend Testing
4. API Testing
5. AI Pipeline Testing
6. Device Testing
7. Performance Testing
8. Offline Testing
9. Production Testing

---

# MANUAL TESTING PHILOSOPHY

## Importance

Manual testing is EXTREMELY important.

Reason:
- the project is highly UX-dependent,
- smoothness matters,
- perception matters.

---

# Manual Testing Priorities

Manually test:
- scrolling smoothness
- touch responsiveness
- camera flow
- loading states
- offline behavior
- navigation flow

---

# FRONTEND TESTING

# Philosophy

Frontend testing should ensure:
- stable rendering,
- predictable interactions,
- navigation reliability,
- UI responsiveness.

---

# Frontend Testing Priorities

Test:
- screen rendering
- button interactions
- navigation transitions
- loading states
- error states

---

# Critical Frontend Areas

Critical flows:
- login
- scan flow
- result screen
- community feed
- chatbot
- offline states

---

# Frontend Rendering Rules

The UI should:
- avoid layout shifts,
- avoid flickering,
- avoid dropped frames.

---

# FRONTEND TEST CASES

## Login Flow

Test:
- valid phone number
- invalid phone number
- OTP resend
- expired OTP
- network failure during login

---

# Scan Flow

Test:
- camera permission denied
- blurry image upload
- unsupported image format
- large image upload
- slow internet upload

---

# Result Screen

Test:
- low confidence predictions
- failed predictions
- empty recommendations
- long recommendation content

---

# Community Feed

Test:
- large feed scrolling
- image loading
- pagination
- comment creation
- offline browsing

---

# Chatbot

Test:
- slow responses
- empty responses
- failed API calls
- long conversations

---

# BACKEND TESTING

# Philosophy

Backend testing should ensure:
- API reliability,
- validation correctness,
- predictable responses,
- stable inference handling.

---

# Backend Testing Priorities

Test:
- API validation
- auth validation
- upload handling
- inference failures
- rate limiting

---

# Backend Testing Rules

Backend APIs should:
- never crash on invalid input,
- always return structured responses.

---

# BACKEND TEST CASES

## Prediction API

Test:
- valid image upload
- corrupted image upload
- unsupported format
- oversized image
- empty request

---

# Auth API

Test:
- invalid token
- expired token
- missing token

---

# Weather API

Test:
- invalid coordinates
- API timeout
- weather provider failure

---

# Community API

Test:
- invalid post
- empty caption
- failed image upload
- pagination behavior

---

# API TESTING

# Philosophy

APIs should:
- remain predictable,
- remain lightweight,
- remain fast.

---

# API Testing Priorities

Test:
- response structure
- status codes
- latency
- validation
- error consistency

---

# Required API Behaviors

Every API should:
- return proper success/error format,
- avoid unhandled exceptions.

---

# AI PIPELINE TESTING

# Philosophy

AI testing focuses on:
- reliability,
- inference stability,
- preprocessing robustness.

---

# AI Testing Priorities

Test:
- image preprocessing
- invalid image handling
- low-light images
- blurry images
- unsupported crops

---

# AI Confidence Testing

Test:
- low confidence behavior
- confidence formatting
- prediction consistency

---

# AI FAILURE TESTING

Ensure:
- failed predictions do not crash backend,
- readable fallback errors are shown.

---

# IMAGE TESTING

# Required Image Scenarios

Test:
- close-up leaves
- distant leaves
- dark lighting
- bright lighting
- multiple leaves
- noisy backgrounds

---

# DEVICE TESTING

# Philosophy

Device testing is CRITICAL.

The app is optimized primarily for:
- low-end Android devices.

---

# Required Device Types

Test on:
- budget Android phones
- mid-range Android phones

---

# Required Real Device Testing

Do NOT rely only on emulator testing.

Real-device testing is mandatory for:
- camera behavior
- scrolling smoothness
- memory usage
- touch responsiveness

---

# LOW-END ANDROID TESTING

# Philosophy

The app must feel smooth on weaker devices.

---

# Required Tests

Test:
- startup speed
- navigation smoothness
- feed scrolling
- image rendering
- memory usage

---

# Performance Warning Signs

Watch for:
- dropped frames
- input lag
- delayed navigation
- heavy scrolling stutter

---

# NETWORK TESTING

# Philosophy

The app should behave well under unstable internet conditions.

---

# Required Network Tests

Test:
- slow internet
- intermittent connection
- offline mode
- API timeout scenarios

---

# OFFLINE TESTING

# Philosophy

Offline mode should:
- degrade gracefully,
- preserve useful functionality.

---

# Required Offline Tests

Test:
- cached history
- offline alerts
- offline navigation
- reconnect recovery

---

# LOADING STATE TESTING

# Philosophy

Loading should:
- preserve perceived speed,
- avoid frozen UI.

---

# Test Loading Behavior

Test:
- skeleton rendering
- loading transitions
- retry flows
- loading cancellation

---

# ERROR STATE TESTING

# Philosophy

Errors should:
- remain understandable,
- provide recovery paths.

---

# Required Error Tests

Test:
- API failures
- upload failures
- invalid input
- auth expiration
- AI inference failures

---

# MEMORY TESTING

# Philosophy

Memory usage must remain controlled.

---

# Watch For

Watch for:
- memory leaks
- unmounted listeners
- large image retention
- excessive rerenders

---

# BATTERY TESTING

# Philosophy

The app should avoid excessive battery drain.

---

# Test

Test:
- prolonged usage
- camera usage
- background behavior

---

# PERFORMANCE TESTING

# Frontend Performance Targets

The app should:
- feel responsive immediately,
- maintain smooth scrolling,
- avoid heavy UI lag.

---

# Backend Performance Targets

Preferred API latency:
```text
< 1 second
```

Preferred AI prediction:
```text
< 3 seconds
```

---

# SCROLL PERFORMANCE TESTING

# Critical Requirement

Scrolling quality is VERY important.

---

# Test For

Watch for:
- frame drops
- image flickering
- delayed touch response
- list instability

---

# PUSH NOTIFICATION TESTING

Test:
- delivery
- tapping behavior
- background handling
- duplicate notifications

---

# SECURITY TESTING

Test:
- unauthorized API access
- invalid tokens
- malformed requests
- oversized uploads

---

# REGRESSION TESTING

# Philosophy

New features should NOT break:
- navigation,
- scrolling smoothness,
- prediction flow,
- offline behavior.

---

# AI AGENT TESTING RULES

AI coding agents MUST:
- test generated flows,
- preserve performance,
- avoid introducing unstable behavior,
- validate error handling.

---

# TESTING CHECKLIST

## Frontend

- [ ] Navigation smooth
- [ ] Scan flow stable
- [ ] Community feed smooth
- [ ] Loading states correct
- [ ] Offline behavior acceptable

---

## Backend

- [ ] APIs validated
- [ ] Upload validation works
- [ ] AI inference stable
- [ ] Structured errors returned

---

## AI

- [ ] Low confidence handled
- [ ] Invalid images handled
- [ ] Prediction speed acceptable

---

## Performance

- [ ] Smooth scrolling maintained
- [ ] No major frame drops
- [ ] Low-end devices usable

---

# PRODUCTION READINESS REQUIREMENTS

Before release:

- [ ] Real-device testing complete
- [ ] Offline testing complete
- [ ] Slow network testing complete
- [ ] Memory testing complete
- [ ] Error recovery tested
- [ ] Crash testing complete

---

# Final Testing Principle

AgriSathi should feel:

```text
Stable.
Smooth.
Reliable.
Trustworthy.
```

Users should trust the application because it behaves consistently even under poor network conditions and weaker devices.