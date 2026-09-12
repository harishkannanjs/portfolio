import { unstable_cache } from "next/cache"
import {
  eachYearOfInterval,
  format,
  getYear,
  parseISO,
  startOfYear,
  subDays,
} from "date-fns"

import { GITHUB_USERNAME } from "@/config/site"

import type { Activity } from "./activity-mosaic"
import { ActivityMosaicCover } from "./activity-mosaic-cover"

export async function ProfileActivityMosaicCover() {
  const rowCount = 10
  const columnCount = 48
  const cellCount = rowCount * columnCount

  let contributions: Activity[] = []
  try {
    contributions = await getGitHubContributions(GITHUB_USERNAME, cellCount)
  } catch (error) {
    console.error("Error loading GitHub contributions:", error)
    contributions = buildContributionGrid([], cellCount)
  }

  return (
    <ActivityMosaicCover
      activities={contributions}
      rowCount={rowCount}
      columnCount={columnCount}
    />
  )
}

function getYearRange(daysBack: number, now: Date = new Date()): number[] {
  if (!Number.isInteger(daysBack) || daysBack < 0) {
    throw new RangeError(
      `daysBack must be a non-negative integer, received: ${daysBack}`
    )
  }

  const startDate: Date = subDays(now, daysBack)

  const years: number[] = eachYearOfInterval({
    start: startOfYear(startDate),
    end: startOfYear(now),
  }).map((date) => getYear(date))

  return years
}

function buildContributionGrid(
  activities: Activity[],
  cellCount: number
): Activity[] {
  const today = new Date()
  const todayStr = format(today, "yyyy-MM-dd")

  if (!activities || activities.length === 0) {
    return Array.from({ length: cellCount }, (_, i) => ({
      date: format(subDays(today, i), "yyyy-MM-dd"),
      count: 0,
      level: 0,
    }))
  }

  const contributionsSortedByDate = [...activities].sort((a, b) =>
    b.date.localeCompare(a.date)
  )

  const foundIndex = contributionsSortedByDate.findIndex(
    (c) => c.date === todayStr
  )
  const todayIndex = foundIndex !== -1 ? foundIndex : 0

  const sliced = contributionsSortedByDate.slice(
    todayIndex,
    todayIndex + cellCount
  )

  if (sliced.length < cellCount) {
    const lastDate =
      sliced.length > 0 ? parseISO(sliced[sliced.length - 1].date) : today
    const remaining = cellCount - sliced.length
    for (let i = 1; i <= remaining; i++) {
      sliced.push({
        date: format(subDays(lastDate, i), "yyyy-MM-dd"),
        count: 0,
        level: 0,
      })
    }
  }

  return sliced
}

type GitHubContributionsResponse = {
  contributions: Activity[]
}

const getGitHubContributions = unstable_cache(
  async (username: string, cellCount: number) => {
    const years = getYearRange(cellCount)
    const yearQueries = years.map((year) => `y=${year}`).join("&")

    const res = await fetch(
      `${process.env.GITHUB_CONTRIBUTIONS_API_URL || "https://github-contributions-api.jogruber.de"}/v4/${username}?${yearQueries}`,
      { signal: AbortSignal.timeout(15000) }
    )

    if (!res.ok) {
      throw new Error(`GitHub contributions API returned status ${res.status}`)
    }

    const { contributions } = (await res.json()) as GitHubContributionsResponse

    return buildContributionGrid(contributions ?? [], cellCount)
  },
  ["github-contributions", "activity-mosaic"],
  { revalidate: 7 * 24 * 60 * 60 } // Cache for 7 days
)
