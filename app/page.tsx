import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Map, Brain, Leaf, BookOpen, BarChart3 } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "首頁",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">歡迎使用綠色交通智慧平台</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                整合即時交通資訊、AI預測與減碳點數系統，讓您的每一趟旅程更環保、更智慧
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/traffic">
                  立即體驗
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#">
                  下載 App
                  <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-green-100 p-4">
                <Map className="h-10 w-10 text-green-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">即時交通資訊</h3>
                <p className="text-gray-500">整合公車、捷運、接駁車等即時動態，提供互動式地圖與擁擠度資訊</p>
              </div>
              <Button asChild variant="link" className="text-green-600">
                <Link href="/traffic">
                  查看詳情
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-blue-100 p-4">
                <Brain className="h-10 w-10 text-blue-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">AI 智慧預測</h3>
                <p className="text-gray-500">根據歷史與即時資料，預測尖峰時段、擁擠路線，推薦最佳綠色出行方案</p>
              </div>
              <Button asChild variant="link" className="text-blue-600">
                <Link href="/ai-prediction">
                  查看詳情
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-green-100 p-4">
                <Leaf className="h-10 w-10 text-green-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">綠色點數存摺</h3>
                <p className="text-gray-500">搭乘大眾運輸累積點數，兌換商品或優惠，與朋友一起為環保盡一份心力</p>
              </div>
              <Button asChild variant="link" className="text-green-600">
                <Link href="/green-points">
                  查看詳情
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">探索更多功能</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                綠色交通智慧平台提供全方位的交通與環保解決方案
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <BookOpen className="h-8 w-8 text-green-600" />
                <h3 className="text-lg font-bold">使用情境</h3>
                <p className="text-sm text-gray-500">以故事板或插圖展示典型使用流程，強調系統如何解決實際交通問題</p>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/scenarios">了解更多</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
                <h3 className="text-lg font-bold">數據視覺化</h3>
                <p className="text-sm text-gray-500">互動式圖表展示即時交通、AI 預測、減碳成效等數據統計</p>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/analytics">了解更多</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
