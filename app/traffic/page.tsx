import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bus, Train, Car, AlertTriangle, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "即時交通資訊",
}

export default function TrafficPage() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">即時交通資訊</h1>

      <Tabs defaultValue="bus" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="bus" className="flex items-center gap-2">
            <Bus className="h-4 w-4" />
            <span>公車</span>
          </TabsTrigger>
          <TabsTrigger value="mrt" className="flex items-center gap-2">
            <Train className="h-4 w-4" />
            <span>捷運</span>
          </TabsTrigger>
          <TabsTrigger value="shuttle" className="flex items-center gap-2">
            <Car className="h-4 w-4" />
            <span>接駁車</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="bus" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>307路</CardTitle>
                  <Badge className="bg-green-500">正常營運</Badge>
                </div>
                <CardDescription>往返市中心與科技園區</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>下一班</span>
                    </div>
                    <span className="font-medium">3分鐘</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">擁擠度</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-6 bg-green-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-green-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>513路</CardTitle>
                  <Badge className="bg-yellow-500">輕微延誤</Badge>
                </div>
                <CardDescription>往返火車站與大學城</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>下一班</span>
                    </div>
                    <span className="font-medium">7分鐘</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">擁擠度</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-6 bg-yellow-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-yellow-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-yellow-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>281路</CardTitle>
                  <Badge variant="destructive">路線改道</Badge>
                </div>
                <CardDescription>往返商業區與住宅區</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>下一班</span>
                    </div>
                    <span className="font-medium">12分鐘</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">擁擠度</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-6 bg-red-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-red-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-red-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-red-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-red-500 text-sm mt-2">
                    <AlertTriangle className="h-4 w-4" />
                    <span>因道路施工，部分路段改道行駛</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 aspect-video w-full rounded-lg border bg-muted flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">互動式地圖將顯示在此處</p>
              <p className="text-xs text-muted-foreground">整合公車路線、站點與即時位置資訊</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mrt" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>紅線</CardTitle>
                  <Badge className="bg-green-500">正常營運</Badge>
                </div>
                <CardDescription>南北向主要幹線</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>下一班</span>
                    </div>
                    <span className="font-medium">2分鐘</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">擁擠度</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-6 bg-yellow-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-yellow-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-yellow-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>藍線</CardTitle>
                  <Badge className="bg-green-500">正常營運</Badge>
                </div>
                <CardDescription>東西向連接線</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>下一班</span>
                    </div>
                    <span className="font-medium">4分鐘</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">擁擠度</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-6 bg-green-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-green-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 aspect-video w-full rounded-lg border bg-muted flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">捷運路線圖將顯示在此處</p>
              <p className="text-xs text-muted-foreground">整合各線路即時列車位置與擁擠度資訊</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="shuttle" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>校園接駁車A</CardTitle>
                  <Badge className="bg-green-500">正常營運</Badge>
                </div>
                <CardDescription>校區內環線</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>下一班</span>
                    </div>
                    <span className="font-medium">5分鐘</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">擁擠度</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-6 bg-green-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>校園接駁車B</CardTitle>
                  <Badge className="bg-green-500">正常營運</Badge>
                </div>
                <CardDescription>校區外環線</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>下一班</span>
                    </div>
                    <span className="font-medium">8分鐘</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">擁擠度</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-6 bg-yellow-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-yellow-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 aspect-video w-full rounded-lg border bg-muted flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">接駁車路線圖將顯示在此處</p>
              <p className="text-xs text-muted-foreground">整合校園接駁車即時位置與路線資訊</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
