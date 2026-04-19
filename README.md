# Modern Portfolio — Overwatch Coder

A personal portfolio website for **Nyamadi Atsu** (Overwatch Coder), a Full Stack Developer and Masters student in Collective Intelligence. Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, the site showcases projects, experience, and skills with smooth animations and a clean, responsive design.

## Live Demo

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://github.com/overwatch-coder)

---

## Features

- **Hero** — Animated typing introduction with links to GitHub, LinkedIn, and email
- **About** — Personal bio with resume download
- **Experience** — Scroll-animated work history cards
- **Projects** — Tabbed showcase of Full Stack, Frontend, and AI web app projects
- **Skills** — Tabbed icon grid for Frontend, Backend, and Developer Tools
- **Contact** — Mailto-based contact form with social media links
- **Dark / Light mode** — System-aware theme toggle via `next-themes`
- **Smooth scrolling** — Powered by Lenis

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Framework | Next.js 15 (static export) |
| Language | TypeScript |
| Styling | Tailwind CSS, tailwindcss-animate |
| UI Components | Radix UI, shadcn/ui, Lucide React, React Icons |
| Animations | Framer Motion, Lenis |
| Forms | React Hook Form, Zod |
| Carousel | Embla Carousel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/overwatch-coder/portfolio-update.git
cd portfolio-update

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

The site is configured for **static export** (`output: 'export'`). The build output is placed in the `out/` directory and can be deployed to any static hosting provider (e.g. Vercel, Netlify, GitHub Pages).

### Lint

```bash
npm run lint
```

---

## Project Structure

```
├── app/                  # Next.js App Router (layout, page, global styles)
├── components/           # Page sections and reusable UI components
│   ├── hero.tsx
│   ├── about.tsx
│   ├── experience.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── contact.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── ui/               # shadcn/ui primitives
├── lib/                  # Utility helpers
├── public/               # Static assets (images, CV PDF)
├── tailwind.config.ts
└── next.config.js
```

---

## Connect

- **GitHub** — [github.com/overwatch-coder](https://github.com/overwatch-coder)
- **LinkedIn** — [linkedin.com/in/nyamadi-atsu](https://www.linkedin.com/in/nyamadi-atsu/)
- **Email** — [devbrainy98@gmail.com](mailto:devbrainy98@gmail.com)

---

## License

This project is open source and available under the [MIT License](LICENSE).
