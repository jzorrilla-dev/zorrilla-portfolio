# Juan's Web Development Portfolio

A modern, responsive portfolio website showcasing web development projects and skills, built with Astro, Tailwind CSS, and React.

## 🚀 Overview

This portfolio serves as a personal showcase for web development work, featuring a clean design with dark/light theme toggle, interactive components, and a collection of projects demonstrating various technologies and frameworks.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator for fast, content-focused websites
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Components**: [React](https://reactjs.org/) - For interactive UI components
- **Linting**: [ESLint](https://eslint.org/) - Code quality and style enforcement
- **Formatting**: [Prettier](https://prettier.io/) - Code formatting
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- **Icons**: Custom SVG icons for technologies
- **Deployment**: Ready for static hosting platforms

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Theme Toggle**: Dark and light mode support
- **Project Showcase**: Interactive project cards with previews
- **Skills Section**: Visual representation of technical skills
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading with Astro's static generation
- **SEO Friendly**: Proper meta tags and semantic HTML

## 📁 Project Structure

```
/
├── public/
│   ├── images/previews/     # Project preview images
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # Astro components
│   │   ├── react/          # React components
│   │   └── icons/          # Technology icons
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   └── styles/             # Global styles
└── astro.config.mjs        # Astro configuration
```

## 🧞 Commands

All commands are run from the root of the project using **pnpm**:

| Command         | Action                               |
| --------------- | ------------------------------------ |
| `pnpm dev`      | Start dev server at `localhost:4321` |
| `pnpm build`    | Build production site to `./dist/`   |
| `pnpm preview`  | Preview production build             |
| `pnpm lint`     | Run ESLint                           |
| `pnpm lint:fix` | Fix ESLint errors automatically      |
| `pnpm format`   | Format code with Prettier            |

## ⚠️ Important Rules

- **ONLY use `pnpm`** for package management (do NOT use npm or yarn)
- Run `pnpm lint` and `pnpm lint:fix` before committing
- Run `pnpm format` to format code before committing
- Use Astro components (`.astro`) by default; React (`.tsx`) only for interactive components
- **Commits in Spanish**: Use Spanish for commit messages, with English prefixes (feat, fix, change, etc.). Example: `feat: mejorar carrusel de habilidades y agregar proyecto de taller mecánico`

## 📧 Contact

Feel free to contact me on my website https://eloquent-strudel-8d91ce.netlify.app/ through the contact form or connect via the provided social links.

---

Built with ❤️ using Astro, Tailwind CSS, and React.
