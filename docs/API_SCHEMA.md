# API_SCHEMA.md

# AgriSathi API Schema

## Purpose

This document defines:
- backend API structure,
- endpoint contracts,
- request formats,
- response formats,
- validation expectations,
- authentication requirements.

This file serves as:
- the API source of truth,
- the communication contract between frontend and backend,
- the implementation guide for AI agents.

All backend and frontend implementations MUST follow this schema.

---

# API Philosophy

APIs must be:
- RESTful,
- lightweight,
- mobile-friendly,
- predictable,
- versioned,
- easy to consume.

Response payloads should:
- avoid unnecessary nesting,
- minimize bandwidth usage,
- remain frontend-friendly.

---

# Base URL Structure

```text
/api/v1
```

Example:
```text
/api/v1/auth
/api/v1/predict
/api/v1/weather
```

---

# Standard Response Structure

## Success Response

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

---

## Error Response

```json
{
  "success": false,
  "message": "Human readable error message",
  "error_code": "ERROR_IDENTIFIER"
}
```

---

# Authentication System

## Authentication Provider

Primary:
- Firebase Authentication

---

# Auth Header Format

```http
Authorization: Bearer <token>
```

---

# Protected Route Rule

All protected routes MUST:
- validate Firebase token,
- reject invalid tokens,
- return 401 for unauthorized access.

---

# AUTH ROUTES

# POST /auth/verify-token

## Purpose

Verify Firebase authentication token.

---

## Request Headers

```http
Authorization: Bearer <firebase_token>
```

---

## Success Response

```json
{
  "success": true,
  "message": "Token verified",
  "data": {
    "user_id": "abc123",
    "phone_number": "+91XXXXXXXXXX"
  }
}
```

---

## Error Response

```json
{
  "success": false,
  "message": "Invalid token",
  "error_code": "INVALID_AUTH_TOKEN"
}
```

---

# USER ROUTES

# GET /users/profile

## Purpose

Fetch authenticated user profile.

---

## Authentication

Required

---

## Success Response

```json
{
  "success": true,
  "data": {
    "user_id": "abc123",
    "name": "Ankit",
    "phone_number": "+91XXXXXXXXXX",
    "language": "en",
    "created_at": "2026-05-09T12:00:00"
  }
}
```

---

# PATCH /users/profile

## Purpose

Update user profile information.

---

## Authentication

Required

---

## Request Body

```json
{
  "name": "Ankit Kumar",
  "language": "hi"
}
```

---

## Success Response

```json
{
  "success": true,
  "message": "Profile updated successfully"
}
```

---

# DISEASE PREDICTION ROUTES

# POST /predict/disease

## Purpose

Analyze crop image and return disease prediction.

---

## Authentication

Required

---

## Content Type

```http
multipart/form-data
```

---

## Request Body

| Field | Type | Required |
|---|---|---|
| image | file | yes |
| crop_type | string | no |

---

## Request Example

```text
image=<uploaded_file>
crop_type=tomato
```

---

# Prediction Pipeline

```text
Image Upload
      ↓
Validation
      ↓
Preprocessing
      ↓
AI Inference
      ↓
Confidence Scoring
      ↓
Recommendation Mapping
      ↓
Response Generation
```

---

## Success Response

```json
{
  "success": true,
  "message": "Prediction successful",
  "data": {
    "crop": "Tomato",
    "disease": "Early Blight",
    "confidence": 0.94,
    "severity": "moderate",
    "symptoms": [
      "Brown circular spots",
      "Yellowing leaves"
    ],
    "treatment": [
      "Apply copper fungicide",
      "Remove infected leaves"
    ],
    "fertilizer_recommendation": [
      "Use balanced NPK fertilizer"
    ],
    "prevention": [
      "Avoid overhead watering",
      "Maintain proper spacing"
    ]
  }
}
```

---

## Error Responses

### Invalid Image

```json
{
  "success": false,
  "message": "Invalid image format",
  "error_code": "INVALID_IMAGE"
}
```

---

### Prediction Failure

```json
{
  "success": false,
  "message": "Unable to analyze image",
  "error_code": "PREDICTION_FAILED"
}
```

---

# WEATHER ROUTES

# GET /weather/current

## Purpose

Fetch current weather information.

---

## Authentication

Required

---

## Query Parameters

| Parameter | Type | Required |
|---|---|---|
| lat | float | yes |
| lon | float | yes |

---

## Example

```text
/weather/current?lat=22.57&lon=88.36
```

---

## Success Response

```json
{
  "success": true,
  "data": {
    "temperature": 31,
    "humidity": 78,
    "condition": "Cloudy",
    "rain_probability": 40
  }
}
```

---

# GET /weather/advisory

## Purpose

Return weather-aware farming advisory.

---

## Authentication

Required

---

## Query Parameters

| Parameter | Type | Required |
|---|---|---|
| lat | float | yes |
| lon | float | yes |

---

## Success Response

```json
{
  "success": true,
  "data": {
    "risk_level": "moderate",
    "advisory": [
      "High humidity may increase fungal infections",
      "Avoid excessive irrigation today"
    ]
  }
}
```

---

# COMMUNITY ROUTES

# GET /community/feed

## Purpose

Fetch community posts feed.

---

## Authentication

Required

---

## Query Parameters

| Parameter | Type | Required |
|---|---|---|
| page | integer | no |
| limit | integer | no |

---

## Success Response

```json
{
  "success": true,
  "data": {
    "posts": [
      {
        "post_id": "post_123",
        "author": "Rahul",
        "image_url": "https://...",
        "caption": "Leaves turning yellow",
        "created_at": "2026-05-09T12:00:00"
      }
    ],
    "pagination": {
      "page": 1,
      "has_more": true
    }
  }
}
```

---

# POST /community/post

## Purpose

Create community post.

---

## Authentication

Required

---

## Content Type

```http
multipart/form-data
```

---

## Request Body

| Field | Type | Required |
|---|---|---|
| image | file | no |
| caption | string | yes |

---

## Success Response

```json
{
  "success": true,
  "message": "Post created successfully"
}
```

---

# POST /community/comment

## Purpose

Add comment to community post.

---

## Authentication

Required

---

## Request Body

```json
{
  "post_id": "post_123",
  "comment": "This may be nutrient deficiency"
}
```

---

## Success Response

```json
{
  "success": true,
  "message": "Comment added successfully"
}
```

---

# CHATBOT ROUTES

# POST /chatbot/message

## Purpose

Send message to farming chatbot.

---

## Authentication

Required

---

## Request Body

```json
{
  "message": "Why are my rice leaves turning yellow?"
}
```

---

## Success Response

```json
{
  "success": true,
  "data": {
    "reply": "Yellow leaves may indicate nitrogen deficiency or fungal infection. Please upload a crop image for better analysis."
  }
}
```

---

# Voice Assistant Notes

The chatbot endpoint should support:
- text input,
- speech-to-text converted input.

The backend itself should remain text-based.

---

# ALERT ROUTES

# GET /alerts

## Purpose

Fetch user alerts and notifications.

---

## Authentication

Required

---

## Success Response

```json
{
  "success": true,
  "data": {
    "alerts": [
      {
        "id": "alert_1",
        "type": "weather",
        "title": "High Humidity Alert",
        "message": "High humidity may increase fungal risk today.",
        "created_at": "2026-05-09T12:00:00"
      }
    ]
  }
}
```

---

# NOTIFICATION ROUTES

# POST /notifications/register-device

## Purpose

Register FCM device token.

---

## Authentication

Required

---

## Request Body

```json
{
  "device_token": "FCM_DEVICE_TOKEN"
}
```

---

## Success Response

```json
{
  "success": true,
  "message": "Device registered successfully"
}
```

---

# FILE VALIDATION RULES

## Allowed Image Types

Allowed:
- jpg
- jpeg
- png

---

# Maximum Upload Size

```text
10 MB
```

---

# Image Requirements

Recommended:
- clear crop image
- proper lighting
- focused leaf region

---

# API Performance Rules

APIs should:
- return fast responses,
- avoid excessive payload sizes,
- optimize mobile bandwidth usage.

---

# API Security Rules

All APIs MUST:
- validate inputs,
- sanitize data,
- reject malformed payloads.

---

# Rate Limiting Rules

Sensitive routes should support:
- rate limiting,
- abuse prevention.

Especially:
- chatbot endpoints
- prediction endpoints

---

# Error Message Rules

User-facing messages MUST:
- remain readable,
- avoid technical jargon,
- provide actionable guidance.

---

# Logging Rules

The backend should log:
- prediction requests
- API errors
- failed uploads
- authentication failures

Never log:
- tokens
- secrets
- sensitive user information

---

# API Versioning Rules

All routes MUST remain under:
```text
/api/v1
```

Future versions should use:
```text
/api/v2
```

without breaking older clients.

---

# Pagination Rules

Large datasets MUST use pagination.

Examples:
- community feed
- notifications
- comments

---

# Future Expansion Routes

Possible future endpoints:
```text
/yield/predict
/pest/detect
/expert/connect
/market/prices
```

These are NOT required initially.

---

# Final API Principle

The API layer should feel:
- predictable,
- lightweight,
- scalable,
- mobile-first.

Frontend developers and AI agents should be able to understand endpoint behavior immediately without ambiguity.