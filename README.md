# Tapendra Chaudhary 3D Portfolio

Personal 3D developer portfolio for Tapendra Chaudhary, built with React, Three.js, Vite, and Tailwind CSS.

Live site: `https://tapendra-3d-portfolio.vercel.app`
Repository: `https://github.com/tapendra9104/3D-portfolio`

## Overview

This project presents Tapendra's work in the same immersive 3D portfolio layout while using his own identity, GitHub profile, featured repositories, contact details, and project narrative.

The portfolio highlights:

- AI-powered applications
- Full-stack product development
- Business workflow systems
- Backend and API engineering
- Interactive 3D presentation with React Three Fiber

## Tech Stack

- React
- Vite
- Tailwind CSS
- Three.js
- React Three Fiber
- React Three Drei
- Framer Motion
- EmailJS with `mailto:` fallback

## Featured Content

The site includes project and profile content based on Tapendra's public GitHub work, including:

- Smart QR Management System
- Tour and Travel Management System
- QUMS Chat Bot
- AI-Based Patient Risk Stratification System
- AI Chat App
- AI-Powered Criminal Management and Investigation System

## Getting Started

### Prerequisites

- Node.js
- npm

### Install

```bash
npm install
```

This repository includes an `.npmrc` with `legacy-peer-deps=true` so installs work reliably with the older `react-tilt` dependency used by the current UI.

### Run Locally

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Contact Form Behavior

If EmailJS environment variables are configured, the form can send messages directly.

Supported variables:

```env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

If they are not set, the contact form falls back to opening the user's email client with a prefilled message to `tapendrachy9761@gmail.com`.

## Deployment

This project is deployed on Vercel:

- Production: `https://tapendra-3d-portfolio.vercel.app`

## Notes

- The UI layout and visual style were preserved.
- Project identity, metadata, and content were updated to match Tapendra Chaudhary's profile and repositories.
