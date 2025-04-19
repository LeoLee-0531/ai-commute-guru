"use client"

import type { Metadata } from "next"
import Image from "next/image"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge"
import { Bus, Train, AlertTriangle, Clock, Bike, Maximize, Plus, Minus, BusFront, TramFront } from "lucide-react"
import BusMap from "@/public/map/map_bus.png"
import BikeMap from "@/public/map/map_bike.jpg"
import MRTMap from "@/public/map/map_MRT.jpg"

export default function TrafficPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // 這裡可以加上查詢結果處理
    }, 500);
  };

  const busStops = [
    { name: "台北車站", left: "18%", top: "32%" },
    { name: "國際觀光大樓", left: "70%", top: "60%" },
  ];

  const bikeStops = [
    { name: "世貿大樓", left: "23%", top: "8%" },
    { name: "敦南苑大樓", left: "36%", top: "28%" },
    { name: "敦南藝術館大樓", left: "18%", top: "60%" },
    { name: "安和名園大樓", left: "60%", top: "60%" },
    { name: "遠東國際大樓", left: "85%", top: "25%" },
  ];

  const mrtStops = [
    { name: "圓山站", left: "23%", top: "61%" },
    { name: "民權西路站", left: "48%", top: "62%" },
    { name: "雙連站", left: "73%", top: "63%" },
  ];

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">即時交通資訊</h1>

      <div className="relative">
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 flex flex-col items-center shadow-lg">
              <svg className="animate-spin h-8 w-8 text-green-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              <span className="text-green-700 font-bold text-lg">載入中...</span>
            </div>
          </div>
        )}

        <div className="w-full max-w-md mx-auto my-8 p-8 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-8">路線查詢</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="start" className="block mb-2 text-base font-semibold">起點</Label>
              <Input
                id="start"
                defaultValue="當下位置"
                placeholder="請輸入起點"
                className="w-full bg-gray-50"
                readOnly
              />
            </div>
            <div>
              <Label htmlFor="end" className="block mb-2 text-base font-semibold">終點</Label>
              <Input
                id="end"
                placeholder="請輸入終點"
                className="w-full bg-gray-50"
              />
              <p className="text-xs text-gray-400 mt-1">可輸入地標、地址或站名</p>
            </div>
            <Button
              type="submit"
              className="w-full py-3 text-lg rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold transition"
              disabled={loading}
            >
              查詢
            </Button>
          </form>
        </div>
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

            <div className="relative aspect-video w-full rounded-lg border bg-muted overflow-hidden">
              <Image
                src={BusMap}
                alt="交通地圖"
                fill
                className="object-cover"
              />
              {busStops.map((stop, idx) => (
                <div
                  key={stop.name}
                  className="absolute group"
                  style={{ left: stop.left, top: stop.top, transform: "translate(-50%, -50%)" }}
                >
                  <div className="cursor-pointer transition-transform hover:scale-110">
                    <BusFront className="text-blue-600" />
                  </div>
                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10">
                    {stop.name}
                  </div>
                </div>
              ))}
              <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
                <Button className="bg-white"><Maximize className="text-black"></Maximize></Button>
                <Button className="bg-white"><Plus className="text-black"></Plus></Button>
                <Button className="bg-white"><Minus className="text-black"></Minus></Button>
              </div>
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

            <div className="relative aspect-video w-full rounded-lg border bg-muted overflow-hidden">
              <Image
                src={MRTMap}
                alt="交通地圖"
                fill
                className="object-cover"
              />
              {mrtStops.map((stop, idx) => (
                <div
                  key={stop.name}
                  className="absolute group"
                  style={{ left: stop.left, top: stop.top, transform: "translate(-50%, -50%)" }}
                >
                  <div className="cursor-pointer transition-transform hover:scale-110">
                    <TramFront className="text-blue-600" />
                  </div>
                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10">
                    {stop.name}
                  </div>
                </div>
              ))}
              <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
                <Button className="bg-white"><Maximize className="text-black"></Maximize></Button>
                <Button className="bg-white"><Plus className="text-black"></Plus></Button>
                <Button className="bg-white"><Minus className="text-black"></Minus></Button>
              </div>
            </div>
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

            <div className="relative aspect-video w-full rounded-lg border bg-muted overflow-hidden">
              <Image
                src={BusMap}
                alt="交通地圖"
                fill
                className="object-cover"
              />
              {bikeStops.map((stop, idx) => (
                <div
                  key={stop.name}
                  className="absolute group"
                  style={{ left: stop.left, top: stop.top, transform: "translate(-50%, -50%)" }}
                >
                  <div className="cursor-pointer transition-transform hover:scale-110">
                    <Bike className="text-blue-600" />
                  </div>
                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10">
                    {stop.name}
                  </div>
                </div>
              ))}
              <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
                <Button className="bg-white"><Maximize className="text-black"></Maximize></Button>
                <Button className="bg-white"><Plus className="text-black"></Plus></Button>
                <Button className="bg-white"><Minus className="text-black"></Minus></Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
