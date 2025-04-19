"use client"

import Image from "next/image"
import Logo from "@/public/logo.png"
import Link from "next/link"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt="AI Commute Guru Logo"
              width={100}
            />
            {!isMobile && <span className="font-bold">AI 綠行平台</span>}
          </Link>
        </div>
      </div>
    </header>
  )
}
