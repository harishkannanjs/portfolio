import { BriefcaseBusinessIcon, CodeXmlIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "secureworldz",
    companyName: "Secure Worldz",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Remote",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "Junior Web Developer",
        employmentPeriod: {
          start: "05.2025",
          end: "12.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `Built and maintained production web applications — features, bug fixes, real deadlines. Got my first real taste of industry workflows and what it means to ship code that actually matters.`,
        skills: ["TypeScript", "React", "Node.js", "MySQL", "Git"],
        isExpanded: true,
      },
    ],
  },
  {
    id: "upwork",
    companyName: "Upwork",
    companyLogo: {
      light: "/images/companies/upwork-light.png",
      dark: "/images/companies/upwork-dark.png",
    },
    positions: [
      {
        id: "1",
        title: "Building things on the internet as Freelancer",
        employmentPeriod: {
          start: "01.2021",
        },
        employmentType: "Freelance",
        icon: <CodeXmlIcon />,
        description: `Coding every day. Personal projects, tools I needed that didn't exist, experiments that go nowhere and ones that stick. This is where the real learning happens.`,
        skills: [],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
