import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "trowser",
    title: "Trowser",
    period: {
      start: "09.2025",
      end: "",
    },
    link: "https://github.com/harishkannanjs/trowser",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description: `A browser concept built around speed, privacy, and keeping the UI out of your way. Built to explore what a minimal, fast web experience actually looks like when you strip everything unnecessary.`,
    isExpanded: true,
  },
]
