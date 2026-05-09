# DATABASE_SCHEMA.md

# AgriSathi Database Schema

## Purpose

This document defines:
- database structure,
- collections,
- relationships,
- storage responsibilities,
- indexing strategy,
- data modeling philosophy.

This file acts as:
- the database source of truth,
- the reference for backend development,
- the schema guide for AI coding agents.

All backend implementations MUST follow this document.

---

# Database Philosophy

The database architecture should prioritize:
- simplicity,
- scalability,
- readability,
- maintainability,
- mobile-first optimization.

Avoid:
- premature complexity,
- unnecessary normalization,
- enterprise-heavy relational modeling.

---

# Primary Database Strategy

## Recommended Stack

Primary:
- Firebase

Optional:
- MongoDB

---

# Firebase Responsibilities

Use Firebase for:
- authentication,
- push notification tokens,
- lightweight user storage,
- cloud file storage.

---

# MongoDB Responsibilities

Use MongoDB for:
- community content,
- prediction history,
- advisory data,
- chatbot history,
- scalable app data.

---

# Data Modeling Philosophy

Collections should:
- remain readable,
- remain modular,
- avoid deep nesting,
- remain scalable.

---

# General Rules

## Required

Use:
- UUID/string IDs
- timestamps
- consistent naming
- indexed query fields

---

## Avoid

Avoid:
- giant documents
- unnecessary embedded arrays
- deeply nested schemas

---

# COLLECTION: users

## Purpose

Store user profile data.

---

# Schema

```json
{
  "_id": "user_123",
  "firebase_uid": "firebase_uid_here",
  "name": "Ankit Kumar",
  "phone_number": "+91XXXXXXXXXX",
  "language": "en",
  "profile_image": "https://...",
  "location": {
    "state": "West Bengal",
    "district": "Kolkata"
  },
  "created_at": "2026-05-09T12:00:00",
  "updated_at": "2026-05-09T12:00:00"
}
```

---

# Indexes

Recommended indexes:
```text
firebase_uid
phone_number
```

---

# COLLECTION: detections

## Purpose

Store crop disease prediction history.

---

# Schema

```json
{
  "_id": "detection_123",
  "user_id": "user_123",
  "crop": "Tomato",
  "disease": "Early Blight",
  "confidence": 0.94,
  "severity": "moderate",
  "image_url": "https://...",
  "recommendations": {
    "treatment": [
      "Apply copper fungicide"
    ],
    "fertilizer": [
      "Use balanced NPK fertilizer"
    ],
    "prevention": [
      "Avoid overhead watering"
    ]
  },
  "created_at": "2026-05-09T12:00:00"
}
```

---

# Indexes

Recommended indexes:
```text
user_id
crop
disease
created_at
```

---

# COLLECTION: community_posts

## Purpose

Store farmer community posts.

---

# Schema

```json
{
  "_id": "post_123",
  "author_id": "user_123",
  "author_name": "Rahul",
  "caption": "Leaves are turning yellow",
  "image_url": "https://...",
  "location": {
    "state": "West Bengal"
  },
  "tags": [
    "rice",
    "yellow-leaf"
  ],
  "comment_count": 5,
  "created_at": "2026-05-09T12:00:00"
}
```

---

# Indexes

Recommended indexes:
```text
author_id
created_at
tags
```

---

# COLLECTION: comments

## Purpose

Store comments on community posts.

---

# Schema

```json
{
  "_id": "comment_123",
  "post_id": "post_123",
  "author_id": "user_123",
  "author_name": "Amit",
  "comment": "This may be nitrogen deficiency.",
  "created_at": "2026-05-09T12:00:00"
}
```

---

# Indexes

Recommended indexes:
```text
post_id
author_id
created_at
```

---

# COLLECTION: alerts

## Purpose

Store user-specific alerts.

---

# Schema

```json
{
  "_id": "alert_123",
  "user_id": "user_123",
  "type": "weather",
  "title": "High Humidity Alert",
  "message": "High humidity may increase fungal infection risk.",
  "is_read": false,
  "created_at": "2026-05-09T12:00:00"
}
```

---

# Indexes

Recommended indexes:
```text
user_id
type
created_at
```

---

# COLLECTION: notifications

## Purpose

Store push notification metadata.

---

# Schema

```json
{
  "_id": "notification_123",
  "user_id": "user_123",
  "device_token": "FCM_DEVICE_TOKEN",
  "platform": "android",
  "created_at": "2026-05-09T12:00:00"
}
```

---

# Indexes

Recommended indexes:
```text
user_id
device_token
```

---

# COLLECTION: chatbot_history

## Purpose

Store chatbot conversations.

---

# Schema

```json
{
  "_id": "chat_123",
  "user_id": "user_123",
  "messages": [
    {
      "role": "user",
      "content": "Why are my rice leaves yellow?"
    },
    {
      "role": "assistant",
      "content": "This may indicate nitrogen deficiency."
    }
  ],
  "created_at": "2026-05-09T12:00:00",
  "updated_at": "2026-05-09T12:00:00"
}
```

---

# Indexes

Recommended indexes:
```text
user_id
updated_at
```

---

# COLLECTION: weather_logs

## Purpose

Optional weather advisory caching.

---

# Schema

```json
{
  "_id": "weather_123",
  "location": {
    "lat": 22.57,
    "lon": 88.36
  },
  "temperature": 31,
  "humidity": 78,
  "condition": "Cloudy",
  "advisory": [
    "Avoid excessive irrigation"
  ],
  "created_at": "2026-05-09T12:00:00"
}
```

---

# Indexes

Recommended indexes:
```text
location.lat
location.lon
created_at
```

---

# COLLECTION: advisory_templates

## Purpose

Store disease recommendation templates.

---

# Schema

```json
{
  "_id": "advisory_123",
  "crop": "Tomato",
  "disease": "Early Blight",
  "symptoms": [
    "Brown circular spots"
  ],
  "treatment": [
    "Apply copper fungicide"
  ],
  "fertilizer": [
    "Use balanced NPK fertilizer"
  ],
  "prevention": [
    "Avoid overhead watering"
  ],
  "severity_levels": {
    "low": "Minor infection",
    "moderate": "Needs treatment",
    "high": "Immediate action required"
  }
}
```

---

# Indexes

Recommended indexes:
```text
crop
disease
```

---

# FILE STORAGE STRATEGY

## Recommended Storage

Use:
- Firebase Storage

---

# Store In Cloud Storage

Store:
- crop images
- profile images
- community post images

---

# Avoid

Avoid storing:
- large base64 image strings
- image blobs directly in database

---

# Timestamp Rules

All collections MUST include:
```text
created_at
```

Recommended:
```text
updated_at
```

Use ISO timestamp format.

---

# Soft Delete Strategy

Recommended for:
- community posts
- comments

Example:
```json
{
  "is_deleted": true
}
```

Avoid permanent deletion where moderation may be needed.

---

# Data Validation Rules

Backend MUST validate:
- required fields
- string lengths
- file references
- object structure

Never trust frontend validation alone.

---

# Pagination Rules

Collections requiring pagination:
- community_posts
- comments
- alerts
- chatbot_history

---

# Recommended Pagination Strategy

Use:
```text
page + limit
```

OR:
```text
cursor-based pagination
```

for scalability.

---

# Data Retention Philosophy

The system should:
- avoid unnecessary data accumulation,
- clean unused temporary data,
- optimize storage usage.

---

# Caching Strategy

Possible caching targets:
- weather responses
- advisory templates
- static disease information

---

# Offline Storage Strategy

Frontend local storage may cache:
- detection history
- user preferences
- recent advisories

Preferred frontend storage:
- MMKV
OR
- AsyncStorage

---

# Security Rules

Never store:
- raw passwords
- secrets
- API keys

Authentication MUST rely on:
- Firebase tokens.

---

# Sensitive Data Rules

Sensitive data should:
- remain minimal,
- avoid unnecessary personal information collection.

---

# Database Scalability Rules

The schema should support:
- future AI modules,
- larger community feeds,
- future multilingual support,
- future advisory systems.

Avoid architecture that limits expansion.

---

# Database Relationship Philosophy

Relationships should remain:
- simple,
- understandable,
- loosely coupled.

Avoid:
- complex relational dependency chains.

---

# AI Agent Database Rules

AI coding agents MUST:
- preserve schema consistency,
- preserve naming conventions,
- avoid unnecessary schema expansion,
- avoid overengineering relationships.

---

# Naming Conventions

## Collection Names

Use:
```text
snake_case
plural_names
```

Examples:
```text
community_posts
weather_logs
chatbot_history
```

---

# Field Naming

Use:
```text
snake_case
```

Examples:
```text
created_at
profile_image
comment_count
```

---

# Final Database Principle

The database should feel:

```text
Simple.
Scalable.
Predictable.
Maintainable.
```

The schema should support rapid development without becoming difficult to understand or extend.