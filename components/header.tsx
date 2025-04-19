"use client"

import Link from "next/link"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        {isMobile && (
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <h1 className="text-lg font-bold">{"AI 綠行平台"}</h1>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
