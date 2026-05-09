# INIT_COMMANDS.md

# AgriSathi Initialization Commands

## Purpose

This document contains:
- exact terminal commands,
- project bootstrap steps,
- frontend initialization,
- backend initialization,
- tooling setup,
- Firebase setup,
- Git setup,
- React Native setup,
- FastAPI setup.

This file acts as:
- the executable project bootstrap guide,
- the CLI-first setup reference,
- the operational initialization handbook for AI agents.

All project setup should follow this sequence.

---

# Initialization Philosophy

The setup process should be:
- reproducible,
- terminal-first,
- Linux-friendly,
- modular,
- AI-agent-compatible.

Primary development environment:
- Arch Linux

---

# PHASE 1 — SYSTEM PREPARATION

# Update System

```bash
sudo pacman -Syu
```

---

# Install Core Development Packages

```bash
sudo pacman -S \
git \
nodejs \
npm \
python \
python-pip \
python-virtualenv \
jdk17-openjdk \
android-tools \
android-studio \
base-devel \
ripgrep \
jq \
wget \
curl \
unzip
```

---

# Verify Installations

```bash
git --version
node -v
npm -v
python --version
java -version
adb version
```

---

# Install Recommended Global Tools

## pnpm

```bash
npm install -g pnpm
```

---

## React Native CLI

```bash
npm install -g react-native-cli
```

---

# Optional Recommended Tools

```bash
sudo pacman -S \
tmux \
zsh \
fzf \
bat \
eza
```

---

# PHASE 2 — CREATE PROJECT STRUCTURE

# Create Root Directory

```bash
mkdir AgriSathi
cd AgriSathi
```

---

# Create Base Structure

```bash
mkdir frontend
mkdir backend
mkdir docs
mkdir assets
mkdir scripts
```

---

# Verify Structure

```bash
tree -L 1
```

Expected:

```text
.
├── assets
├── backend
├── docs
├── frontend
└── scripts
```

---

# PHASE 3 — INITIALIZE GIT

# Initialize Repository

```bash
git init
```

---

# Create .gitignore

```bash
touch .gitignore
```

---

# Add Recommended Gitignore Content

```gitignore
# Node
node_modules/

# Python
venv/
__pycache__/

# Environment
.env

# React Native
android/.gradle/
android/build/
ios/build/

# Logs
*.log

# Misc
.DS_Store
```

---

# First Commit

```bash
git add .
git commit -m "Initialize AgriSathi project structure"
```

---

# PHASE 4 — SETUP DOCUMENTATION

# Move Documentation Files

Place all generated markdown files into:

```text
docs/
```

---

# Verify Docs

```bash
tree docs
```

---

# PHASE 5 — BACKEND INITIALIZATION

# Navigate To Backend

```bash
cd backend
```

---

# Create Python Virtual Environment

```bash
python -m venv venv
```

---

# Activate Environment

```bash
source venv/bin/activate
```

---

# Upgrade Pip

```bash
pip install --upgrade pip
```

---

# Install Core FastAPI Dependencies

```bash
pip install \
fastapi \
uvicorn \
python-dotenv \
pydantic \
python-multipart \
httpx
```

---

# Install AI Dependencies

```bash
pip install \
torch \
torchvision \
transformers \
opencv-python \
pillow \
numpy
```

---

# Install Database Dependencies

```bash
pip install \
pymongo \
firebase-admin
```

---

# Install Utility Dependencies

```bash
pip install \
loguru \
aiofiles
```

---

# Install Development Tools

```bash
pip install \
black \
isort \
flake8
```

---

# Generate requirements.txt

```bash
pip freeze > requirements.txt
```

---

# Create Backend Structure

```bash
mkdir -p app/{api,core,models,schemas,services,utils,middleware,database,ai}
mkdir tests
touch app/main.py
touch .env
```

---

# Verify Backend Structure

```bash
tree -L 2
```

---

# Create Minimal FastAPI App

## app/main.py

```python
from fastapi import FastAPI

app = FastAPI(title="AgriSathi API")

@app.get("/")
async def root():
    return {"message": "AgriSathi Backend Running"}
```

---

# Run Backend

```bash
uvicorn app.main:app --reload
```

---

# Verify Backend

Open:

```text
http://127.0.0.1:8000
```

Swagger:

```text
http://127.0.0.1:8000/docs
```

---

# PHASE 6 — FRONTEND INITIALIZATION

# Navigate To Frontend

```bash
cd ../frontend
```

---

# Initialize React Native Project

```bash
npx react-native@latest init AgriSathiApp
```

---

# Enter Frontend App

```bash
cd AgriSathiApp
```

---

# Install Core Frontend Dependencies

## Navigation

```bash
pnpm add \
@react-navigation/native \
@react-navigation/native-stack \
@react-navigation/bottom-tabs
```

---

# Gesture Dependencies

```bash
pnpm add \
react-native-gesture-handler \
react-native-reanimated \
react-native-safe-area-context \
react-native-screens
```

---

# FlashList

```bash
pnpm add @shopify/flash-list
```

---

# State Management

```bash
pnpm add zustand
```

---

# API Client

```bash
pnpm add axios
```

---

# Storage

```bash
pnpm add react-native-mmkv
```

---

# React Query

```bash
pnpm add @tanstack/react-query
```

---

# SVG Support

```bash
pnpm add react-native-svg
```

---

# Install Development Dependencies

```bash
pnpm add -D \
typescript \
eslint \
prettier
```

---

# Create Frontend Structure

Inside src:

```bash
mkdir -p src/{api,assets,components,constants,contexts,hooks,navigation,screens,services,store,styles,types,utils,widgets}
```

---

# Create Base Screens

```bash
touch src/screens/HomeScreen.tsx
touch src/screens/ScanScreen.tsx
touch src/screens/CommunityScreen.tsx
touch src/screens/AlertsScreen.tsx
touch src/screens/ProfileScreen.tsx
```

---

# Create Navigation Files

```bash
touch src/navigation/AppNavigator.tsx
touch src/navigation/BottomTabs.tsx
```

---

# PHASE 7 — ANDROID SETUP

# Open Android Studio

```bash
android-studio
```

---

# Install Required SDKs

Install:
- Android SDK
- Android Platform Tools
- Android Emulator
- Android SDK Platform

---

# Add Android Environment Variables

## ~/.zshrc

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

# Verify Device Detection

```bash
adb devices
```

---

# Start Metro

```bash
pnpm react-native start
```

---

# Run Android App

```bash
pnpm react-native run-android
```

---

# PHASE 8 — FIREBASE SETUP

# Create Firebase Project

Go to:
```text
https://console.firebase.google.com
```

Create:
```text
AgriSathi
```

---

# Enable Firebase Modules

Enable:
- Authentication
- Cloud Messaging
- Storage

---

# Enable Phone Authentication

Firebase Console:
```text
Authentication
→ Sign-in Method
→ Phone
→ Enable
```

---

# Install Firebase Packages

```bash
pnpm add \
@react-native-firebase/app \
@react-native-firebase/auth \
@react-native-firebase/messaging \
@react-native-firebase/storage
```

---

# Download google-services.json

Place inside:

```text
android/app/
```

---

# PHASE 9 — ENVIRONMENT VARIABLES

# Backend Environment

## backend/.env

```env
APP_ENV=development

OPENWEATHER_API_KEY=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

---

# Frontend Environment

## frontend/AgriSathiApp/.env

```env
API_BASE_URL=http://YOUR_LOCAL_IP:8000
```

---

# PHASE 10 — FORMATTERS & LINTING

# Backend Formatting

## Format

```bash
black .
```

---

## Sort Imports

```bash
isort .
```

---

## Lint

```bash
flake8
```

---

# Frontend Formatting

## Run ESLint

```bash
pnpm eslint .
```

---

## Run Prettier

```bash
pnpm prettier --write .
```

---

# PHASE 11 — INITIAL APP BOOTSTRAP

# Recommended First Goal

Before adding features:
- app should boot,
- backend should run,
- navigation should work,
- API connection should work.

---

# First Backend Tasks

Recommended:
1. Health check API
2. Auth router
3. Prediction router structure
4. Weather router structure

---

# First Frontend Tasks

Recommended:
1. Bottom tabs
2. Base navigation
3. Theme setup
4. Home screen UI shell
5. Scan screen shell

---

# PHASE 12 — AI AGENT WORKFLOW

# Recommended Agent Workflow

Before coding:

```text
1. Read PROJECT_CONTEXT.md
2. Read AGENT_RULES.md
3. Read relevant architecture docs
4. Read TASKS.md
```

---

# Recommended CLI Agent Prompt

```text
Read the AgriSathi documentation system first.

Then implement ONLY the requested task.

Preserve:
- smooth scrolling
- low-end Android optimization
- modular architecture
- FastAPI structure
- reusable components

Avoid:
- overengineering
- unnecessary dependencies
- visual clutter
```

---

# PHASE 13 — DEVELOPMENT WORKFLOW

# Recommended Terminal Layout

```text
Terminal 1 → Backend
Terminal 2 → Metro
Terminal 3 → Android Logs
Terminal 4 → Git / AI Agent
```

---

# Backend Start Command

```bash
cd backend
source venv/bin/activate
uvicorn app.main:app --reload
```

---

# Frontend Start Command

```bash
cd frontend/AgriSathiApp
pnpm react-native start
```

---

# Android Start Command

```bash
pnpm react-native run-android
```

---

# PHASE 14 — INITIAL TEST CHECKLIST

Before actual feature development:

- [ ] Backend boots successfully
- [ ] Swagger opens
- [ ] Frontend app launches
- [ ] Android build succeeds
- [ ] Navigation works
- [ ] Firebase connected
- [ ] API requests working
- [ ] Device detected through ADB

---

# PHASE 15 — NEXT IMPLEMENTATION ORDER

Recommended next implementation sequence:

```text
1. Navigation
2. Theme system
3. Reusable components
4. Authentication
5. Scan flow
6. Prediction API
7. Result screen
8. Weather system
9. Community feed
10. Chatbot
```

---

# COMMON DEVELOPMENT COMMANDS

# Run Backend

```bash
uvicorn app.main:app --reload
```

---

# Install New Python Dependency

```bash
pip install package_name
pip freeze > requirements.txt
```

---

# Install New Frontend Dependency

```bash
pnpm add package_name
```

---

# Git Commit

```bash
git add .
git commit -m "Meaningful commit message"
```

---

# View Android Logs

```bash
adb logcat
```

---

# FINAL INITIALIZATION PRINCIPLE

AgriSathi setup should feel:

```text
Fast.
Reproducible.
Modular.
CLI-friendly.
```

The environment should help development move quickly without constant tooling friction.