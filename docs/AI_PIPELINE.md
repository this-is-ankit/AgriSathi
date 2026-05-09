# AI_PIPELINE.md

# AgriSathi AI Pipeline

## Purpose

This document defines:
- AI system architecture,
- image processing flow,
- model inference pipeline,
- disease detection logic,
- preprocessing standards,
- AI service responsibilities.

This file acts as:
- the source of truth for AI implementation,
- the reference guide for AI coding agents,
- the operational blueprint for disease detection.

All AI-related implementations MUST follow this document.

---

# AI Philosophy

AgriSathi uses AI to:
- simplify farming decisions,
- improve crop disease awareness,
- provide fast practical guidance.

The AI system should prioritize:
- practical usability,
- reliability,
- maintainability,
- deployment simplicity.

The system is NOT intended to be:
- a research-heavy ML experiment,
- a highly experimental inference system,
- an academic-only architecture.

---

# AI Goals

The AI pipeline should:
- identify crop diseases from images,
- return confidence scores,
- generate readable recommendations,
- remain lightweight enough for real-world deployment.

---

# AI Strategy

## Initial Approach

Use:
- pretrained Hugging Face models.

Reason:
- faster development,
- lower infrastructure complexity,
- easier deployment,
- reduced training requirements.

---

# Future Scope

Possible future additions:
- offline inference,
- TensorFlow Lite conversion,
- pest detection,
- yield prediction,
- crop classification,
- soil analysis.

These are NOT required initially.

---

# AI Stack

## Required Technologies

- Python
- FastAPI
- Hugging Face
- OpenCV
- NumPy
- PIL
- PyTorch or TensorFlow

---

# Inference Architecture

## Current Strategy

Backend-hosted inference.

Flow:
```text
React Native App
        ↓
FastAPI Backend
        ↓
AI Inference Service
        ↓
Prediction Response
```

---

# Offline Inference Status

## Current Decision

Full offline AI inference is NOT mandatory.

Reason:
- increased mobile complexity,
- model optimization overhead,
- longer development time.

---

# Allowed Offline Features

Allowed:
- cached results
- local history
- offline advisory viewing

---

# Future Offline Scope

Possible future implementation:
- TensorFlow Lite
- ONNX Runtime Mobile

Only if required later.

---

# AI Inference Flow

```text
Image Upload
      ↓
Validation
      ↓
Preprocessing
      ↓
Model Inference
      ↓
Confidence Extraction
      ↓
Disease Mapping
      ↓
Recommendation Mapping
      ↓
Response Formatting
      ↓
Frontend Response
```

---

# Image Upload Requirements

## Allowed Formats

Allowed:
- jpg
- jpeg
- png

---

# Maximum File Size

```text
10 MB
```

---

# Recommended User Image Conditions

Best prediction quality requires:
- clear leaf visibility,
- proper lighting,
- focused crop region,
- minimal background clutter.

---

# Image Validation Rules

The backend MUST validate:
- file type,
- file size,
- image readability,
- corrupted files.

Reject:
- unsupported formats,
- unreadable images,
- empty uploads.

---

# Preprocessing Pipeline

## Purpose

Preprocessing ensures:
- model compatibility,
- prediction consistency,
- better inference quality.

---

# Recommended Preprocessing Steps

## Step 1 — Image Read

Read image safely using:
- PIL
OR
- OpenCV

---

## Step 2 — RGB Conversion

Convert image to RGB format.

Reason:
- model consistency.

---

## Step 3 — Resize

Resize image to model input dimensions.

Example:
```text
224x224
```

Depends on model requirements.

---

## Step 4 — Normalization

Normalize pixel values.

Possible range:
```text
0 → 1
```

---

## Step 5 — Tensor Conversion

Convert image into:
- tensor,
- numpy array,
- model-compatible format.

---

# Background Handling

Optional future enhancement:
- leaf segmentation,
- background removal.

Not required initially.

---

# Model Selection Guidelines

## Required Characteristics

The selected model should:
- support plant disease classification,
- provide reliable confidence scores,
- remain lightweight enough for backend inference.

---

# Preferred Model Types

Preferred:
- MobileNet
- EfficientNet
- lightweight Vision Transformers

---

# Avoid

Avoid:
- unnecessarily massive models,
- extremely slow inference systems,
- GPU-dependent architectures.

---

# Model Source

Primary source:
- Hugging Face model hub.

---

# Model Loading Rules

The AI model MUST:
- load once during startup,
- avoid repeated loading per request.

---

# Good Example

```python
model = load_model_once()
```

---

# Bad Example

```python
def predict():
    model = load_model()
```

---

# Inference Rules

Inference should:
- remain isolated in AI services,
- avoid route-level ML logic,
- support future model replacement.

---

# Prediction Output Structure

The prediction system should return:
- crop name,
- disease name,
- confidence score,
- severity,
- recommendations.

---

# Example Prediction Output

```json
{
  "crop": "Tomato",
  "disease": "Early Blight",
  "confidence": 0.94,
  "severity": "moderate"
}
```

---

# Confidence Score Rules

Confidence should:
- remain transparent,
- avoid fake precision.

---

# Good Example

```text
94%
```

---

# Bad Example

```text
94.482918219%
```

---

# Confidence Threshold Rules

Recommended:
- low confidence warnings below threshold.

Example:
```text
If confidence < 0.60
→ warn user prediction may be inaccurate
```

---

# Disease Mapping Layer

The AI output should map to:
- readable disease names,
- user-friendly explanations,
- advisory content.

The model output should NEVER be shown directly if labels are unreadable.

---

# Recommendation Mapping

Prediction results should map to:
- symptoms,
- treatments,
- fertilizer suggestions,
- prevention methods.

---

# Recommendation Source

Recommendations may initially use:
- static curated datasets,
- JSON-based mappings,
- manually validated recommendations.

Avoid:
- hallucinated medical-style AI advice.

---

# Severity Estimation

Severity may initially be:
- rule-based,
- confidence-assisted.

Future scope:
- dedicated severity classification.

---

# AI Response Time Goals

Target:
```text
< 3 seconds preferred
```

Maximum acceptable:
```text
< 6 seconds
```

---

# AI Error Handling

The AI system should fail gracefully.

---

# User-Friendly Error Examples

Good:
```text
Unable to analyze image. Please try again with better lighting.
```

Bad:
```text
Inference pipeline tensor mismatch exception.
```

---

# AI Logging Rules

Log:
- prediction requests,
- prediction latency,
- model errors,
- preprocessing failures.

Do NOT log:
- sensitive user data,
- raw authentication tokens.

---

# AI Security Rules

The AI pipeline MUST:
- validate uploads,
- sanitize image handling,
- avoid unsafe file operations.

---

# AI Scalability Strategy

The AI architecture should support:
- future model replacement,
- multiple crop models,
- multiple disease categories.

The architecture must remain modular.

---

# Modular AI Structure

Recommended structure:

```text
ai/
├── models/
├── preprocess/
├── inference/
├── mappings/
├── utils/
└── loaders/
```

---

# AI Service Responsibilities

## AI Service Layer Should Handle

- preprocessing
- model inference
- confidence extraction
- output formatting
- recommendation mapping

---

# API Layer Should NOT Handle

Avoid placing:
- tensor operations
- preprocessing logic
- heavy AI logic

inside API routes.

---

# Future AI Features

Possible future additions:
- pest detection
- yield prediction
- soil health analysis
- multilingual AI explanations
- image quality scoring

These are future scope only.

---

# AI Testing Requirements

The AI pipeline should be tested for:
- corrupted images
- unsupported formats
- low-light images
- blurred images
- large uploads

---

# Performance Optimization Rules

The AI pipeline should:
- minimize memory usage,
- avoid repeated allocations,
- optimize preprocessing speed.

---

# GPU Usage

GPU acceleration is optional.

The system should initially support:
- CPU inference.

Reason:
- easier deployment,
- lower infrastructure cost.

---

# AI Agent Rules

AI coding agents MUST:
- preserve modular AI structure,
- avoid hardcoded model logic,
- maintain readable preprocessing flow,
- optimize inference performance,
- keep inference isolated from API routes.

---

# Final AI Principle

The AI system should feel:

```text
Reliable.
Fast.
Practical.
Understandable.
```

The farmer should trust the result without needing to understand machine learning internals.