import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  github: {
    title: "GitHub",
    handle: "harishkannanjs",
    href: "https://github.com/harishkannanjs/",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "harishkannanjs",
    href: "https://www.linkedin.com/in/harishkannanjs/",
    sameAs: true,
  },
  x: {
    title: "X",
    handle: "@harishkannanjs",
    href: "https://twitter.com/harishkannanjs",
    sameAs: true,
  },
  instagram: {
    title: "Instagram",
    handle: "harishkannanjs",
    href: "https://www.instagram.com/harishkannanjs/",
    sameAs: true,
  },
  telegram: {
    title: "Telegram",
    handle: "harishkannanjs",
    href: "https://t.me/harishkannanjs",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
