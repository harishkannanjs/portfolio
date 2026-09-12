import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export type PackageManager = "bun" | "yarn" | "npm"

const packageManagerAtom = atomWithStorage<PackageManager>(
  "packageManager",
  "bun"
)

export function usePackageManager() {
  return useAtom(packageManagerAtom)
}
