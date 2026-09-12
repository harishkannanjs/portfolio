# Development

This guide provides instructions on how to set up and run the project locally.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/harishkannanjs/portfolio.git
cd portfolio
```

### 2. Install portless

Documentation: [port1355.dev](https://port1355.dev)

```bash
npm install -g portless
```

### 3. Install dependencies

```bash
bun install
```

### 4. Configure Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Then, update the necessary environment variables inside `.env.local`.

### 5. Run the development server

```bash
bun dev
```

The application should now be available at https://harishkannanjs.localhost

## Building for Production

```bash
bun run build
```

After building, start the application with:

```bash
NODE_ENV=production bun start
```

## Before pushing

CI runs these on every push and PR. Run them locally first:

```bash
bun run lint
bun run format:check
bun run build
bun run check-types
```

