# PROMPT_TEMPLATES.md

# AgriSathi AI Agent Prompt Templates

## Purpose

This document defines:
- reusable AI agent prompts,
- CLI workflow prompts,
- backend implementation prompts,
- frontend implementation prompts,
- debugging prompts,
- optimization prompts,
- refactoring prompts.

This file acts as:
- the operational prompt handbook,
- the AI workflow accelerator,
- the consistency system for agent-based development.

All AI-assisted development workflows SHOULD use these prompt patterns.

---

# Prompt Engineering Philosophy

Prompts should:
- provide clear scope,
- preserve architecture consistency,
- minimize hallucinations,
- enforce project standards,
- reduce unnecessary rewrites.

---

# Core Prompting Rules

Every implementation prompt should:
1. define scope clearly,
2. reference architecture docs,
3. limit unrelated modifications,
4. enforce performance philosophy,
5. preserve frontend smoothness.

---

# MASTER CONTEXT PROMPT

# Purpose

Use before major implementation tasks.

---

# Prompt

```text
Read these files first:

- PROJECT_CONTEXT.md
- ARCHITECTURE.md
- FRONTEND_GUIDELINES.md
- AGENT_RULES.md
- TASKS.md

Understand the project philosophy completely before generating code.

Important requirements:
- Preserve modular architecture
- Optimize for low-end Android devices
- Prioritize smooth scrolling and responsiveness
- Avoid overengineering
- Avoid unnecessary dependencies
- Preserve React Native performance
- Preserve FastAPI modular structure

Only implement the requested task.
Do not modify unrelated architecture.
```

---

# FRONTEND IMPLEMENTATION PROMPT

# Purpose

Use for React Native screen/component tasks.

---

# Prompt

```text
Read:
- FRONTEND_GUIDELINES.md
- DESIGN_SYSTEM.md
- COMPONENT_GUIDELINES.md
- UI_SCREEN_FLOW.md
- AGENT_RULES.md

Task:
Implement the requested React Native screen/component.

Requirements:
- Use TypeScript
- Use reusable components
- Optimize for smooth scrolling
- Avoid unnecessary rerenders
- Keep components modular
- Preserve calm visual hierarchy
- Use lightweight animations only
- Follow spacing and typography system
- Avoid heavy visual effects
- Optimize for low-end Android devices

Do not:
- overengineer architecture
- add unnecessary dependencies
- create giant components
- introduce visual clutter

Only implement the requested scope.
```

---

# BACKEND IMPLEMENTATION PROMPT

# Purpose

Use for FastAPI backend tasks.

---

# Prompt

```text
Read:
- ARCHITECTURE.md
- API_SCHEMA.md
- DATABASE_SCHEMA.md
- AI_PIPELINE.md
- AGENT_RULES.md

Task:
Implement the requested FastAPI backend module.

Requirements:
- Use modular architecture
- Keep routes lightweight
- Use async APIs
- Use proper validation
- Preserve clean service separation
- Use environment variables correctly
- Return structured API responses
- Preserve scalability

Do not:
- place business logic inside routes
- hardcode secrets
- create monolithic files
- expose internal exceptions

Only implement the requested functionality.
```

---

# AI PIPELINE IMPLEMENTATION PROMPT

# Purpose

Use for disease prediction system tasks.

---

# Prompt

```text
Read:
- AI_PIPELINE.md
- ARCHITECTURE.md
- API_SCHEMA.md
- AGENT_RULES.md

Task:
Implement the requested AI inference functionality.

Requirements:
- Preserve modular AI architecture
- Separate preprocessing from inference
- Optimize inference performance
- Validate image uploads
- Return confidence scores
- Handle failures gracefully
- Support future model replacement

Do not:
- hardcode model paths
- place ML logic inside API routes
- expose internal inference errors

Optimize for practical deployment reliability.
```

---

# BUG FIX PROMPT

# Purpose

Use for debugging tasks.

---

# Prompt

```text
Read:
- AGENT_RULES.md
- ERROR_HANDLING.md
- ARCHITECTURE.md

Task:
Debug and fix the reported issue.

Requirements:
- Identify root cause first
- Avoid unnecessary rewrites
- Preserve existing architecture
- Preserve frontend smoothness
- Preserve backend modularity
- Maintain code readability
- Keep fixes minimal and focused

Do not:
- rewrite unrelated code
- introduce hacks
- break architecture consistency

Provide:
1. root cause
2. fix explanation
3. final implementation
```

---

# PERFORMANCE OPTIMIZATION PROMPT

# Purpose

Use for optimization tasks.

---

# Prompt

```text
Read:
- PERFORMANCE_RULES.md
- FRONTEND_GUIDELINES.md
- AGENT_RULES.md

Task:
Optimize the requested feature/system for performance.

Requirements:
- Preserve smooth scrolling
- Reduce unnecessary rerenders
- Reduce memory usage
- Improve responsiveness
- Optimize image rendering
- Optimize API usage
- Preserve readability

Prioritize:
- low-end Android performance
- stable rendering
- lightweight architecture

Do not:
- overcomplicate optimization
- sacrifice maintainability
- introduce premature complexity
```

---

# REFACTORING PROMPT

# Purpose

Use for architecture cleanup/refactoring.

---

# Prompt

```text
Read:
- ARCHITECTURE.md
- AGENT_RULES.md
- COMPONENT_GUIDELINES.md

Task:
Refactor the requested module while preserving behavior.

Requirements:
- Preserve functionality
- Improve readability
- Improve modularity
- Preserve performance
- Preserve API compatibility
- Reduce complexity where possible

Do not:
- rewrite unrelated systems
- introduce breaking changes
- overengineer abstractions
```

---

# UI POLISH PROMPT

# Purpose

Use for frontend polish tasks.

---

# Prompt

```text
Read:
- DESIGN_SYSTEM.md
- FRONTEND_GUIDELINES.md
- COMPONENT_GUIDELINES.md

Task:
Improve the UI polish of the requested screen/component.

Requirements:
- Preserve calm visual hierarchy
- Improve readability
- Improve spacing consistency
- Preserve touch comfort
- Keep animations subtle
- Preserve smooth performance

Do not:
- add flashy animations
- add heavy gradients
- reduce usability
- introduce visual clutter
```

---

# COMMUNITY FEATURE PROMPT

# Purpose

Use for community system tasks.

---

# Prompt

```text
Read:
- UI_SCREEN_FLOW.md
- COMPONENT_GUIDELINES.md
- AGENT_RULES.md

Task:
Implement the requested community feature.

Requirements:
- Keep interactions lightweight
- Optimize feed performance
- Optimize image rendering
- Preserve smooth scrolling
- Keep UI utility-focused

Do not:
- create social-media-style complexity
- add unnecessary engagement systems
- introduce autoplay media
```

---

# CHATBOT FEATURE PROMPT

# Purpose

Use for chatbot-related tasks.

---

# Prompt

```text
Read:
- AI_PIPELINE.md
- UI_SCREEN_FLOW.md
- ERROR_HANDLING.md

Task:
Implement the requested chatbot feature.

Requirements:
- Keep responses concise
- Preserve clean chat UI
- Handle failures gracefully
- Preserve responsiveness
- Maintain modular architecture

Do not:
- create visually noisy assistant UI
- add excessive AI personality
- introduce unnecessary complexity
```

---

# CODE REVIEW PROMPT

# Purpose

Use before merging major changes.

---

# Prompt

```text
Review the implementation using these criteria:

1. Architecture consistency
2. Performance impact
3. React Native rendering efficiency
4. Backend modularity
5. API consistency
6. Error handling quality
7. Low-end Android optimization
8. Readability
9. Maintainability
10. Dependency quality

Identify:
- architectural problems
- performance risks
- unnecessary complexity
- maintainability concerns

Provide:
- issues
- severity
- recommended improvements
```

---

# LOW-END DEVICE OPTIMIZATION PROMPT

# Purpose

Use specifically for weaker-device optimization.

---

# Prompt

```text
Optimize the requested implementation specifically for low-end Android devices.

Focus on:
- reducing rerenders
- reducing memory usage
- improving scrolling smoothness
- reducing image rendering cost
- reducing JS thread load
- minimizing startup cost

Do not:
- add heavy dependencies
- increase rendering complexity
- introduce animation-heavy behavior
```

---

# SAFE DEPENDENCY ADDITION PROMPT

# Purpose

Use before adding new libraries.

---

# Prompt

```text
Evaluate whether the proposed dependency should be added.

Analyze:
- bundle size impact
- maintenance quality
- React Native compatibility
- performance implications
- necessity
- lighter alternatives

Reject unnecessary dependencies.
Prioritize lightweight and well-maintained libraries.
```

---

# DOCUMENTATION GENERATION PROMPT

# Purpose

Use for generating new project docs.

---

# Prompt

```text
Generate documentation consistent with the existing AgriSathi documentation system.

Requirements:
- Maintain architectural consistency
- Use structured markdown
- Keep explanations implementation-focused
- Optimize for AI-agent readability
- Preserve terminology consistency

Avoid:
- vague explanations
- inconsistent formatting
- unnecessary verbosity
```

---

# CLI AGENT WORKFLOW PROMPT

# Purpose

Use with terminal-based coding agents.

---

# Prompt

```text
You are working on AgriSathi.

Before coding:
1. Read all required architecture docs
2. Understand project philosophy
3. Preserve modularity
4. Preserve frontend smoothness

Rules:
- Never modify unrelated files
- Keep implementations focused
- Optimize for low-end Android devices
- Avoid overengineering
- Maintain clean folder structure
- Preserve API consistency

After implementation:
- explain changes clearly
- list modified files
- identify potential risks
```

---

# MULTI-FILE IMPLEMENTATION PROMPT

# Purpose

Use for larger feature implementations.

---

# Prompt

```text
Implement the requested feature across multiple files.

Requirements:
- Preserve architecture consistency
- Maintain modular separation
- Avoid monolithic implementations
- Preserve frontend performance
- Preserve backend scalability

Before implementation:
- identify affected files
- explain architecture impact

After implementation:
- summarize changes
- explain integration points
- identify future optimization opportunities
```

---

# FINAL UNIVERSAL RULE

Every AI-assisted implementation should prioritize:

```text
Smooth UX
        over
visual complexity
```

AgriSathi should always feel:
- lightweight,
- calm,
- dependable,
- fast.