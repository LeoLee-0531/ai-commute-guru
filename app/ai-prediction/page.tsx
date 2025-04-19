import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, TrendingDown, TrendingUp, AlertTriangle, Check, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "AI 智慧預測",
}

export default function AIPredictionPage() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">AI 智慧預測</h1>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="today" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>今日預測</span>
          </TabsTrigger>
          <TabsTrigger value="tomorrow" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>明日預測</span>
          </TabsTrigger>
          <TabsTrigger value="personal" className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <span>個人推薦</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>上午尖峰時段</CardTitle>
                  <Badge variant="destructive">高度擁擠</Badge>
                </div>
                <CardDescription>07:30 - 09:00</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">307路公車</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-red-500">+25%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">紅線捷運</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-red-500">+15%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">校園接駁車</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-yellow-500">+10%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-red-500 text-sm mt-2">
                    <AlertTriangle className="h-4 w-4" />
                    <span>建議提前30分鐘出門</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>中午時段</CardTitle>
                  <Badge className="bg-yellow-500">中度擁擠</Badge>
                </div>
                <CardDescription>11:30 - 13:30</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">307路公車</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-yellow-500">+12%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">紅線捷運</span>
                    <div className="flex items-center">
                      <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500">-5%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">校園接駁車</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-yellow-500">+8%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>下午尖峰時段</CardTitle>
                  <Badge variant="destructive">高度擁擠</Badge>
                </div>
                <CardDescription>17:00 - 19:00</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">307路公車</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-red-500">+30%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">紅線捷運</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-red-500">+20%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">校園接駁車</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                      <span className="text-red-500">+15%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-red-500 text-sm mt-2">
                    <AlertTriangle className="h-4 w-4" />
                    <span>建議錯開尖峰或選擇替代路線</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 aspect-video w-full rounded-lg border bg-muted flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">交通流量熱力圖將顯示在此處</p>
              <p className="text-xs text-muted-foreground">根據AI預測的各時段交通擁擠情況</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tomorrow" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>上午尖峰時段</CardTitle>
                  <Badge className="bg-yellow-500">中度擁擠</Badge>
                </div>
                <CardDescription>07:30 - 09:00</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">307路公車</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-yellow-500">+15%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">紅線捷運</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-yellow-500">+10%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">校園接駁車</span>
                    <div className="flex items-center">
                      <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500">-5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="personal" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>個人化交通建議</CardTitle>
              <CardDescription>根據您的通勤習慣與偏好生成</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                  <h3 className="font-medium flex items-center gap-2 mb-2">
                    <Check className="h-5 w-5 text-green-600" />
                    上午通勤建議 (08:00)
                  </h3>
                  <p className="text-sm mb-2">建議路線：校園接駁車B → 紅線捷運 → 步行5分鐘</p>
                  <div className="flex justify-between text-sm">
                    <span>預計時間：35分鐘</span>
                    <span>減碳效益：高</span>
                  </div>
                  <Button size="sm" className="mt-3 bg-green-600 hover:bg-green-700">
                    選擇此路線
                  </Button>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <h3 className="font-medium flex items-center gap-2 mb-2">
                    <Check className="h-5 w-5 text-blue-600" />
                    下午返程建議 (17:30)
                  </h3>
                  <p className="text-sm mb-2">建議路線：513路公車 → 校園接駁車A</p>
                  <div className="flex justify-between text-sm">
                    <span>預計時間：40分鐘</span>
                    <span>減碳效益：中</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm mt-2 mb-3">
                    <AlertTriangle className="h-4 w-4" />
                    <span>注意：513路公車可能有輕微延誤</span>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    選擇此路線
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
