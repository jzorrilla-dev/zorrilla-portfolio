# CLAUDE.md

## Project Overview

Portfolio website showcasing web development projects and skills, built with Astro, Tailwind CSS, and React.

## Tech Stack

- **Framework**: Astro 5.x
- **UI Components**: React 19.x
- **Styling**: Tailwind CSS 3.x
- **Linting**: ESLint 8.x
- **Formatting**: Prettier 3.x
- **Package Manager**: pnpm

## Important Rules

- **ONLY use `pnpm`** for all package management operations (install, add, remove, etc.)
- Use Astro components (`.astro`) as the default; use React (`.tsx`) only for interactive components
- Run `pnpm lint` and `pnpm lint:fix` before committing changes
- Use `pnpm format` to format code before committing
- **Commits in Spanish**: Use Spanish for commit messages, with English prefixes (feat, fix, change, etc.). Example: `feat: mejorar carrusel de habilidades y agregar proyecto de taller mecánico`

## Commands

| Command         | Action                             |
| --------------- | ---------------------------------- |
| `pnpm dev`      | Start dev server at localhost:4321 |
| `pnpm build`    | Build production site to `./dist/` |
| `pnpm preview`  | Preview production build           |
| `pnpm lint`     | Run ESLint                         |
| `pnpm lint:fix` | Fix ESLint errors automatically    |
| `pnpm format`   | Format code with Prettier          |

## Project Structure

```
/
├── public/                    # Static assets
│   └── images/previews/       # Project preview images
├── src/
│   ├── components/           # Astro components
│   │   ├── react/           # React interactive components
│   │   └── icons/           # Technology icons (SVG)
│   ├── layouts/             # Page layouts
│   ├── pages/               # Route pages (.astro)
│   └── styles/              # Global styles
├── astro.config.mjs          # Astro configuration
├── tailwind.config.cjs       # Tailwind configuration
├── eslint.config.js          # ESLint configuration
├── .prettierrc               # Prettier configuration
└── tsconfig.json             # TypeScript configuration
```

## Features

- Responsive design (mobile-first)
- Dark/Light theme toggle
- Project showcase with cards
- Skills section with technology icons
- Contact form with Formspree
- SEO optimized with semantic HTML

## Code Conventions

- Use TypeScript for type safety
- Follow existing code style (look at `.astro` and `.tsx` files for patterns)
- Use `lucide-react` for icons
- Custom SVG icons for technology logos in `src/components/icons/`
