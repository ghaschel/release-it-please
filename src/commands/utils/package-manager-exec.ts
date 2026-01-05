import { PackageManager } from "../../types";

/**
 * Get the package manager execution command
 */
export function getPackageManagerExec(packageManager: PackageManager): string {
  switch (packageManager) {
    case "npm":
      return "npx --no --";
    case "yarn":
      return "yarn dlx --";
    case "pnpm":
      return "pnpm dlx --";
    case "bun":
      return "bunx --";
  }
}
