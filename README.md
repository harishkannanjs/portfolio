# Harish Kannan J S — Portfolio

A full-stack developer portfolio showcasing my work, projects, and experience.

→ Live site: [https://harishkannanjs.vercel.app](https://harishkannanjs.vercel.app)

## Overview

### Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui

### Features

- **Design & UI**: Clean and minimal aesthetic with responsive layouts and light/dark theme support
- **vCard Download**: Instant contact card export at `/vcard`
- **SEO & Discoverability**: Comprehensive JSON-LD structured data schemas, XML sitemap, and robots configuration
- **AI-Ready**: `/llms.txt` and `/llms-full.txt` endpoints for LLM and agent discoverability
- **Security & Privacy**: Encrypted/spam-protected email encoding
- **Progressive Web App (PWA)**: Installable application with customized web manifest
- **Dynamic Open Graph Images**: On-demand SVG-to-PNG OG card generation at `/og`
- **RSS Feed**: Content syndication feed at `/rss`
- **Analytics**: Privacy-friendly telemetry integration with OpenPanel

## Development

Please refer to the [Development Guide](./DEVELOPMENT.md) for local setup and commands.

```bash
git clone https://github.com/harishkannanjs/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

The application runs locally at `https://harishkannanjs.localhost` or `http://localhost:3000`.

## License

Licensed under the [MIT License](./LICENSE).
