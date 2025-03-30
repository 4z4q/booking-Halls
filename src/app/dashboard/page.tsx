import NetworkDashboard from "@/components/network-dashboard"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <NetworkDashboard />
    </main>
  )
}

