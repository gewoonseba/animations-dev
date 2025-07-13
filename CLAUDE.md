# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project (animations-dev) bootstrapped with `create-next-app`, using the App Router architecture. The project is set up for animation development and uses TypeScript with React 19.

## Common Development Commands

### Development Server
```bash
npm run dev
```
Starts the development server with Turbopack enabled at http://localhost:3000

### Build & Production
```bash
npm run build    # Build the application for production
npm start        # Start the production server
```

### Code Quality
```bash
npm run lint     # Run ESLint to check code quality
```

## Architecture & Structure

### App Router Structure
- Uses Next.js App Router (app directory)
- `app/layout.tsx` - Root layout with Geist font configuration
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles with dark mode support

### Key Configuration Files
- `next.config.ts` - Next.js configuration (minimal setup)
- `tsconfig.json` - TypeScript configuration with strict mode enabled
- Path aliases configured: `@/*` maps to root directory

### Styling
- Uses CSS modules (`.module.css` files)
- Global CSS with CSS custom properties for theming
- Dark mode support via `prefers-color-scheme`
- Geist font family (sans and mono variants)

### Dependencies
- Next.js 15.3.5 with Turbopack
- React 19
- TypeScript 5 with strict typing
- Built-in ESLint configuration

## Animation Exercises Structure

### Adding New Exercises
To add a new exercise, create a folder structure like this:
```
app/exercises/your-exercise-name/
├── component.tsx              # Your animation component
├── component.module.css       # Scoped CSS for the animation
└── metadata.ts               # Exercise metadata
```

### Exercise Registration
1. Add your exercise metadata to `app/lib/exercises.ts` in the `exercises` array
2. Import your component in `app/exercises/[slug]/page.tsx` and add to `exerciseComponents`
3. Your exercise will automatically appear on the homepage grouped by topic

### Exercise Structure
- Each exercise is completely self-contained with its own CSS modules
- CSS modules prevent style conflicts between exercises
- Exercises are automatically grouped by `topic` on the homepage
- Dynamic routing handles individual exercise pages

## Development Notes

- The project uses Turbopack for faster development builds
- TypeScript is configured with strict mode and path aliases
- ESLint is configured with Next.js recommended settings
- Each exercise component should be fully encapsulated and not rely on global styles