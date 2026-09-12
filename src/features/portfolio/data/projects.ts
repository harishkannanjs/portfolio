import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "phake",
    title: "Phake",
    period: {
      start: "08.2026",
    },
    link: "https://github.com/xibhi/Phake",
    skills: ["TypeScript", "React", "Vite", "Chrome Extension", "AES-256-GCM"],
    description: `A Chrome extension (Manifest V3) that fills forms with fake identity data instead of your real information. Also ships an encrypted local vault and disposable email inboxes via GuerrillaMail.\n\nZero analytics, zero telemetry, zero third-party trackers. The vault is AES-256-GCM encrypted — lose your password and your Secret Recovery Key and it's unrecoverable, by anyone.`,
    isExpanded: true,
  },
  {
    id: "clipt",
    title: "clipt",
    period: {
      start: "09.2026",
    },
    link: "https://github.com/xibhi/clipt",
    skills: ["Python", "SQLite", "Typer", "Rich"],
    description: `A terminal clipboard manager. Copies text, files, or command output to the clipboard, keeps a local SQLite history, and lets you pin, search, share, or delete entries from the command line.\n\nocopy is the signature command — run anything, get its output on your clipboard, without breaking your terminal's live view of what's happening.`,
    isExpanded: true,
  },
]
