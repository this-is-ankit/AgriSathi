# ENVIRONMENT_SETUP.md

# AgriSathi Development Environment Setup

## Purpose

This document defines:
- local development environment setup,
- required tooling,
- dependency installation,
- frontend setup,
- backend setup,
- Android development setup,
- CLI workflow expectations.

This file acts as:
- the environment setup source of truth,
- onboarding guide for developers and AI agents,
- reproducible development environment reference.

All contributors MUST follow this setup.

---

# Development Philosophy

AgriSathi development is:
- CLI-first,
- Linux-friendly,
- modular,
- AI-agent-assisted.

Primary development environment:
- Arch Linux

The environment should prioritize:
- reproducibility,
- simplicity,
- stability,
- fast iteration.

---

# Recommended System Requirements

## Minimum

- 8 GB RAM
- Quad-core CPU
- 20 GB free storage

---

## Recommended

- 16 GB RAM
- SSD storage
- Android device for testing

---

# Operating System

Primary supported environment:
- Arch Linux

Other Linux distributions are acceptable.

Windows is NOT the primary development target.

---

# Required Development Tools

## Core Tools

Required:
- Git
- Node.js
- npm or pnpm
- Python
- pip
- Android SDK
- Java JDK

---

# Recommended Additional Tools

Recommended:
- ADB
- Watchman
- Docker
- tmux
- zsh
- ripgrep
- jq

---

# CLI Workflow Philosophy

Development should primarily happen using:
- terminal workflows,
- CLI tooling,
- AI coding agents,
- structured markdown documentation.

---

# Recommended Terminal Tools

## Recommended Shell

Preferred:
- zsh

---

# Recommended Terminal Emulator

Possible options:
- kitty
- wezterm
- alacritty

---

# Recommended Editors

Preferred:
- VS Code
- Neovim

---

# AI Agent Tooling

Possible tools:
- Claude Code
- OpenAI Codex CLI
- Aider
- Continue.dev
- MCP-compatible agents

---

# Project Structure

Recommended root structure:

```text
agrisathi/
├── backend/
├── frontend/
├── docs/
├── assets/
└── scripts/
```

---

# GIT SETUP

# Install Git

Arch Linux:
```bash
sudo pacman -S git
```

---

# Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

# NODE.JS SETUP

# Install Node.js

Recommended:
- Node.js LTS

Arch Linux:
```bash
sudo pacman -S nodejs npm
```

---

# Verify Installation

```bash
node -v
npm -v
```

---

# Recommended Package Manager

Preferred:
- pnpm

Install:
```bash
npm install -g pnpm
```

---

# PYTHON SETUP

# Install Python

Arch Linux:
```bash
sudo pacman -S python python-pip
```

---

# Verify Installation

```bash
python --version
pip --version
```

---

# PYTHON VIRTUAL ENVIRONMENT

# Install venv Support

```bash
sudo pacman -S python-virtualenv
```

---

# Create Virtual Environment

Inside backend directory:

```bash
python -m venv venv
```

---

# Activate Environment

```bash
source venv/bin/activate
```

---

# FASTAPI BACKEND SETUP

# Backend Directory

```bash
mkdir backend
cd backend
```

---

# Install FastAPI Dependencies

```bash
pip install fastapi uvicorn python-dotenv
```

---

# Install AI Dependencies

```bash
pip install torch torchvision transformers opencv-python pillow numpy
```

---

# Install Utility Dependencies

```bash
pip install python-multipart httpx
```

---

# Generate requirements.txt

```bash
pip freeze > requirements.txt
```

---

# Run FastAPI Development Server

```bash
uvicorn app.main:app --reload
```

---

# Verify Backend

Expected:
```text
http://127.0.0.1:8000
```

Swagger docs:
```text
http://127.0.0.1:8000/docs
```

---

# REACT NATIVE SETUP

# Preferred Setup

Recommended:
- React Native CLI

Avoid:
- Expo for heavy native scaling

---

# Install React Native CLI Dependencies

Arch Linux:
```bash
sudo pacman -S jdk17-openjdk
```

---

# Verify Java

```bash
java -version
```

---

# Android SDK Setup

Install Android Studio:
```bash
sudo pacman -S android-studio
```

---

# Required Android Components

Install:
- Android SDK
- Android SDK Platform
- Android Emulator
- Android Platform Tools

---

# ANDROID ENVIRONMENT VARIABLES

Add to shell config:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

---

# Reload Shell

```bash
source ~/.zshrc
```

---

# Verify ADB

```bash
adb version
```

---

# CREATE REACT NATIVE APP

Inside frontend directory:

```bash
npx react-native@latest init AgriSathi
```

---

# Run Metro

```bash
npx react-native start
```

---

# Run Android App

```bash
npx react-native run-android
```

---

# Recommended Frontend Dependencies

## Navigation

```bash
npm install @react-navigation/native
```

---

## Gesture Handler

```bash
npm install react-native-gesture-handler
```

---

## Reanimated

```bash
npm install react-native-reanimated
```

---

## FlashList

```bash
npm install @shopify/flash-list
```

---

## State Management

Recommended:
```bash
npm install zustand
```

---

## Storage

Recommended:
```bash
npm install react-native-mmkv
```

---

## API Requests

```bash
npm install axios
```

---

# FIREBASE SETUP

# Install Firebase

Frontend:
```bash
npm install @react-native-firebase/app
```

---

# Additional Firebase Packages

Possible packages:
```bash
@react-native-firebase/auth
@react-native-firebase/messaging
@react-native-firebase/storage
```

---

# WEATHER API SETUP

## Recommended Provider

Use:
- OpenWeatherMap API

---

# Store API Keys

Store all secrets in:
```text
.env
```

Never hardcode secrets.

---

# ENVIRONMENT FILES

# Backend Environment File

Location:
```text
backend/.env
```

Example:
```env
OPENWEATHER_API_KEY=
FIREBASE_PROJECT_ID=
```

---

# Frontend Environment File

Location:
```text
frontend/.env
```

Example:
```env
API_BASE_URL=
```

---

# ENVIRONMENT RULES

Never:
- commit secrets to git,
- hardcode API keys,
- expose credentials in frontend.

---

# RECOMMENDED DEVELOPMENT FLOW

## Backend

```bash
cd backend
source venv/bin/activate
uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend
npx react-native start
```

---

# Recommended Split-Terminal Workflow

Example:
```text
Terminal 1 → Backend
Terminal 2 → Metro
Terminal 3 → Git/CLI agent
Terminal 4 → Logs
```

---

# TESTING ON REAL DEVICE

Preferred:
- physical Android device.

Reason:
- more accurate performance testing,
- better camera testing,
- realistic UX testing.

---

# ADB DEVICE VERIFICATION

```bash
adb devices
```

---

# PERFORMANCE TESTING RULES

The app MUST be tested on:
- low-end Android devices,
- unstable network conditions,
- real camera workflows.

---

# GITIGNORE RULES

Recommended ignores:

```text
node_modules/
venv/
.env
android/.gradle/
android/build/
```

---

# FORMATTERS AND LINTING

## Frontend

Recommended:
- ESLint
- Prettier

---

## Backend

Recommended:
- black
- isort
- flake8

---

# INSTALL PYTHON FORMATTERS

```bash
pip install black isort flake8
```

---

# INSTALL FRONTEND FORMATTERS

```bash
npm install -D prettier eslint
```

---

# AI AGENT WORKFLOW

## Required Workflow

Before coding, AI agents MUST:
1. Read PROJECT_CONTEXT.md
2. Read AGENT_RULES.md
3. Read relevant architecture docs
4. Read TASKS.md

---

# Recommended Agent Prompt Pattern

```text
Read PROJECT_CONTEXT.md first.
Then implement ONLY the requested task.
Preserve architecture consistency.
Optimize for low-end Android performance.
```

---

# MCP WORKFLOW NOTES

Since the project uses:
- MCP-compatible tooling,
- AI-assisted workflows,

documentation consistency is extremely important.

All generated code should align with:
- markdown architecture docs,
- frontend philosophy,
- modular backend structure.

---

# DEBUGGING PHILOSOPHY

Debugging should prioritize:
- reproducibility,
- structured logs,
- isolated issue tracking.

Avoid:
- random trial-and-error debugging.

---

# RECOMMENDED LOGGING TOOLS

Possible tools:
- logcat
- adb logs
- FastAPI structured logging

---

# DEPENDENCY PHILOSOPHY

Prefer:
- lightweight,
- maintained,
- widely-used libraries.

Avoid:
- experimental packages,
- abandoned dependencies,
- unnecessary heavy frameworks.

---

# PROJECT STARTUP CHECKLIST

Before development begins:

- [ ] Git configured
- [ ] Node.js installed
- [ ] Python installed
- [ ] Android SDK installed
- [ ] React Native environment working
- [ ] FastAPI backend running
- [ ] ADB working
- [ ] Environment variables configured

---

# AI Agent Environment Rules

AI coding agents MUST:
- avoid modifying environment variables unnecessarily,
- avoid introducing incompatible tooling,
- preserve Linux compatibility,
- preserve CLI-first workflows.

---

# Final Environment Principle

The development environment should feel:

```text
Fast.
Reproducible.
Stable.
Terminal-native.
```

The setup should minimize friction so development can focus on building AgriSathi instead of constantly fixing tooling issues.