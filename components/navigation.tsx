"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Map, Brain, Leaf, User } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navigation() {
  const pathname = usePathname()
  const isMobile = useMobile()

  const routes = [
    {
      href: "/traffic",
      label: "即時交通",
      icon: Map,
    },
    {
      href: "/ai-prediction",
      label: "AI 預測",
      icon: Brain,
    },
    {
      href: "/green-points",
      label: "綠色點數",
      icon: Leaf,
    },
    {
      href: "/profile",
      label: "個人資訊",
      icon: User,
    },
  ]

  // Mobile bottom navigation
  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t">
        <div className="grid h-full grid-cols-4 mx-auto">
          {routes.map((route) => {
            const Icon = route.icon
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "inline-flex flex-col items-center justify-center px-1 hover:bg-muted/50 transition-colors",
                  pathname === route.href && "text-primary",
                )}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{route.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }

  // Desktop sidebar
  return (
    <div className="hidden md:flex h-screen w-64 flex-col fixed inset-y-0 z-50 border-r bg-background">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold flex items-center">
          <Leaf className="mr-2 h-6 w-6 text-green-500" />
          {"app_name"}
        </h1>
      </div>
      <nav className="flex-1 overflow-auto p-3">
        <ul className="space-y-1">
          {routes.map((route) => {
            const Icon = route.icon
            return (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-colors",
                    pathname === route.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {route.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
