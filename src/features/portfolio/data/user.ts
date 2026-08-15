import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Harish Kannan",
  lastName: "J S",
  displayName: "Harish Kannan J S",
  username: "harishkannanjs",
  gender: "male",
  pronouns: "he/him",
  bio: "Full-Stack Developer. Software Engineer.",
  flipSentences: ["Full-Stack Developer.", "Software Engineer."],
  address: "Coimbatore, Tamil Nadu, India",
  emailB64: "aGFyaXNoa2FubmFuanNAZ21haWwuY29t", // base64 encoded harishkannanjs@gmail.com
  website: "https://harishkannanjs.vercel.app",
  jobTitle: "Former Junior Web Developer",
  jobs: [
    {
      title: "Former Junior Web Developer",
      company: "Secure Worldz",
      website: "/#experience-secureworldz",
      experienceId: "secureworldz",
    },
  ],
  about: `- I'm Harish — a full-stack developer who's been building things on the web since 2021. Backends, APIs, databases — that's where I spend most of my time.

- I figured out early that the fastest way to actually learn something is to ship it. Not tutorial it, not watch it — build it, break it, fix it.

- I care about clean architecture and readable code — not because it looks good in a review, but because messy systems slow everything down and I've felt that firsthand.
`,
  avatar: "/profile-dark.png",
  avatarVariants: {
    lightOff: "/profile-dark.png",
    lightOn: "/profile-dark.png",
    darkOff: "/profile.png",
    darkOn: "/profile.png",
  },
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?t=1778602757",
  namePronunciationUrl: "/audio/harishkannanjs.mp3",
  timeZone: "Asia/Kolkata",
  keywords: ["harishkannanjs", "harish kannan j s", "harish", "hk", "hkannan"],
  dateCreated: "2021-01-01", // YYYY-MM-DD
}
