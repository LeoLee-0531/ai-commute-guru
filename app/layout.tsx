import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import type { Metadata } from "next"
import RegisterSW from "@/app/register-sw"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | 綠色交通智慧平台",
    default: "綠色交通智慧平台",
  },
  description: "智慧型綠色交通平台，整合即時交通資訊、AI預測與減碳點數系統",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "綠色交通",
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pb-16 md:pb-0 md:pl-64">{children}</main>
          <Navigation />
        </div>
        <RegisterSW />
      </body>
    </html>
  )
}
