import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bus, Train, AlertTriangle, Clock, Bike, Maximize, Plus, Minus } from "lucide-react"
import BusMap from "@/public/map/map_bus.png"
import BikeMap from "@/public/map/map_bike.jpg"
import MRTMap from "@/public/map/map_MRT.jpg"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "即時交通資訊",
}

export default function TrafficPage() {

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">即時交通資訊</h1>

      <div className="w-full my-8 p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold mb-6">路線查詢</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="start" className="block mb-1">起點</Label>
            <Input
              id="start"
              defaultValue={"當下位置"}
              placeholder="請輸入起點"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="end" className="block mb-1">終點</Label>
            <Input
              id="end"
              placeholder="請輸入終點"
              className="w-full"
            />
          </div>
          <Badge className="w-full p-2 text-md">查詢</Badge>
        </form>
      </div>

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
            <Bike className="h-4 w-4" />
            <span>U-bike</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="bus" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">307</CardTitle>
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
                    <span className="font-medium">擁擠度</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">3分鐘</span>
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
                  <CardTitle className="text-2xl">513</CardTitle>
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
                    <span className="font-medium">擁擠度</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">7分鐘</span>
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
                  <CardTitle className="text-2xl">281</CardTitle>
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
                    <span className="font-medium">擁擠度</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">12分鐘</span>
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

          <div className="mt-8 aspect-video w-full rounded-lg border bg-muted relative overflow-hidden flex items-center justify-center">
            <Image
              src={BusMap}
              alt="交通地圖"
              className="rounded-lg object-cover w-full h-full"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
              <Button className="bg-white"><Maximize className="text-black"></Maximize></Button>
              <Button className="bg-white"><Plus className="text-black"></Plus></Button>
              <Button className="bg-white"><Minus className="text-black"></Minus></Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="mrt" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">紅線</CardTitle>
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
                    <span className="font-medium">擁擠度</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">2分鐘</span>
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
                  <CardTitle className="text-2xl">藍線</CardTitle>
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
                    <span className="font-medium">擁擠度</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">4分鐘</span>
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
            <Image
              src={MRTMap}
              alt="交通地圖"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
            <Button className="bg-white"><Maximize className="text-black"></Maximize></Button>
            <Button className="bg-white"><Plus className="text-black"></Plus></Button>
            <Button className="bg-white"><Minus className="text-black"></Minus></Button>
          </div>
        </TabsContent>

        <TabsContent value="shuttle" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">公館站(2號出口)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">剩餘 10 台</span>
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
                  <CardTitle className="text-2xl">汀周思源街口東南側</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">剩餘 3 台</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-6 bg-red-500 rounded-sm"></span>
                      <span className="w-2 h-6 bg-gray-200 rounded-sm"></span>
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
            <Image
              src={BikeMap}
              alt="交通地圖"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
            <Button className="bg-white"><Maximize className="text-black"></Maximize></Button>
            <Button className="bg-white"><Plus className="text-black"></Plus></Button>
            <Button className="bg-white"><Minus className="text-black"></Minus></Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
