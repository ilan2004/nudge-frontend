# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16 landing page for "Nudge" - a productivity app that gamifies focus through multiplayer rooms, MBTI-based celestial characters with Rive animations, and app blocking features. The site uses a distinctive retro/neobrutalist design system with custom CSS variables and utility classes.

## Development Commands

### Running the Application
```powershell
npm run dev      # Start development server at http://localhost:3000
npm run build    # Create production build
npm run start    # Run production server
```

### Code Quality
```powershell
npm run lint     # Run ESLint checks
```

Note: This project uses ESLint v9+ with flat config (eslint.config.mjs) and Next.js-specific configs.

## Architecture & Design System

### Design Philosophy
The codebase uses a **retro/neobrutalist** design aesthetic with:
- Custom CSS variables defined in `app/globals.css` for theming
- A distinct color palette: mint-500 (background), cream (surface), green-900 (primary text), pink-500, teal-300
- Shadow-based depth effects: `box-shadow: 4px 4px 0 var(--border-color)`
- Custom retro component classes: `.retro-card`, `.retro-btn`

### Typography System
Three-tier font hierarchy:
- **Display**: "Tanker" (uppercase headers, from Fontshare)
- **Body**: "Inter" (content text)  
- **Accent**: "Homemade Apple" (cursive, special touches)

All fonts are loaded via `@import` in globals.css. Headers automatically use Tanker and uppercase via CSS rules.

### CSS Variables Structure
Use CSS variables from globals.css instead of direct colors:
- `var(--surface)` - Cream background for cards
- `var(--bg-default)` - Mint-500 page background
- `var(--text-primary)` - Green-900 for main text
- `var(--border-color)` - Green-900 for borders
- `var(--accent)` - Pink-500 for highlights

Tailwind is configured to use these via `rgb(var(--color-name))` in tailwind.config.ts.

### Component Structure
- `components/landing/*` - Landing page sections (hero, philosophy, features, journey, navbar, footer)
- `components/ui/*` - Reusable UI primitives (button, card)
- `lib/utils.ts` - Single utility function `cn()` for className merging (clsx + tailwind-merge)

### Path Aliases
TypeScript configured with `@/*` pointing to root directory. Use:
```typescript
import { Component } from "@/components/ui/component"
```

### Component Patterns
1. **Landing sections** are exported as named functions (e.g., `export function Hero()`)
2. **UI components** use React.forwardRef with TypeScript interfaces
3. Components use Lucide React for icons
4. Images use Next.js `<Image>` with `fill` and `priority` props where needed

### Styling Approach
- Inline `style` props for CSS variables: `style={{ color: 'var(--text-primary)' }}`
- Tailwind utilities for layout/spacing
- Retro classes (`.retro-card`, `.retro-btn`) for design system consistency
- Custom shadows with hard offsets for neobrutalist aesthetic

## Project Structure
```
app/
  layout.tsx       # Root layout with Geist fonts, global CSS
  page.tsx         # Landing page composition (imports all sections)
  globals.css      # CSS variables, retro classes, font imports

components/
  landing/         # Landing page sections
  ui/              # Reusable components (Button, Card)

lib/
  utils.ts         # cn() utility for className merging

tailwind.config.ts # Custom colors extending CSS variables
tsconfig.json      # TypeScript config with @/* path alias
```

## Key Technical Details

### Next.js Configuration
- App Router (Next.js 13+)
- React 19 with JSX transform
- TypeScript strict mode enabled
- No custom Next.js config beyond defaults

### Styling Stack
- Tailwind CSS v4 with PostCSS
- Custom CSS variables for theming
- clsx + tailwind-merge for className handling

### State & Data
This is a static landing page with no:
- API routes
- Database connections
- State management libraries
- Server actions

All components are client-side rendered with no explicit 'use client' directives (relying on Next.js defaults).

## When Making Changes

### Adding New Sections
1. Create component in `components/landing/`
2. Import and add to `app/page.tsx`
3. Use existing color variables and retro classes
4. Follow naming pattern: export named functions

### Styling New Components
1. Check `globals.css` for existing retro classes
2. Use CSS variables via `var(--variable-name)`
3. Apply consistent shadow pattern: `shadow-[Xpx_Ypx_0_var(--border-color)]`
4. Use Tailwind's `border-2 border-green-900` for consistency

### Icon Usage
Import from lucide-react:
```typescript
import { IconName } from "lucide-react"
<IconName size={24} strokeWidth={2} />
```

### Color Palette Usage
- Mint-500: Page backgrounds
- Cream: Card surfaces
- Green-900: Primary text, borders, buttons
- Pink-500: Accent elements (philosophy card header)
- Teal-300: Secondary accents

Use Tailwind classes like `bg-mint-500`, `text-green-900`, or CSS variables for inline styles.

