# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Starbiz Academy - A React-based landing page for a Hispanic digital entrepreneurship academy. The site features an immersive space/cosmic theme with heavy use of animations and 3D effects.

## Commands

```bash
# Install dependencies
npm install

# Run development server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Setup

Set `GEMINI_API_KEY` in `.env.local` for any AI features.

## Architecture

### Tech Stack
- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** with custom space/brand theme
- **Framer Motion** for animations
- **GSAP + ScrollTrigger** (loaded via CDN in index.html)
- **Lucide React** for icons

### Project Structure (flat layout, no src/ directory)
```
/                     # Root contains main app files
├── App.tsx           # Main app with loading state and section composition
├── index.tsx         # React entry point
├── index.css         # Global styles + Tailwind + custom animations
├── types.ts          # Shared TypeScript interfaces
├── components/       # All React components
│   ├── Hero.tsx      # Landing hero with rocket animation
│   ├── About.tsx
│   ├── SevenIntelligences.tsx
│   ├── Ecosystem.tsx # Complex section with 3D iPhone component
│   ├── Programs.tsx
│   ├── Testimonials.tsx
│   ├── Events.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   ├── Starfield.tsx # Animated star background
│   └── Loader.tsx    # Initial loading animation
├── context/
│   └── LanguageContext.tsx  # i18n (Spanish/English)
├── public/
│   ├── images/       # Section backgrounds and photos
│   └── videos/       # Intelligence section video assets
└── Video/            # Additional video assets
```

### Key Patterns

**Path Aliases**: `@/*` maps to project root (configured in tsconfig.json and vite.config.ts)

**Internationalization**: All text content lives in `context/LanguageContext.tsx` with `es`/`en` translations. Components use `const { t } = useLanguage()` hook.

**Tailwind Theme**: Custom colors defined in `tailwind.config.js`:
- `brand-orange` (#FF6B00), `brand-yellow` (#FFC800), `brand-cyan` (#00F0FF), `brand-purple` (#7000FF)
- `space-black`, `space-dark`, `space-card`
- Custom fonts: Outfit (sans), Rajdhani (display)
- Custom animations: `float`, `pulse-glow`, `spin-slow`

**Animation Heavy**: Components extensively use Framer Motion's `motion` components and GSAP for scroll-triggered animations. The Hero section has a complex animated rocket with SVG smoke/fire effects.

**3D iPhone Component**: `Ecosystem.tsx` contains a custom 3D iPhone model built with CSS transforms (not Three.js), featuring an interactive boot sequence and app simulation.
