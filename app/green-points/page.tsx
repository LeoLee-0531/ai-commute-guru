import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Gift,
  Trophy,
  Calendar,
  ArrowUpRight,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "綠色點數",
};

export default function GreenPointsPage() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">綠色點數</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              我的綠色點數
            </CardTitle>
            <CardDescription>累積的環保貢獻</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-600 mb-2">2,450</div>
            <div className="text-sm text-muted-foreground mb-4">
              本月新增：+350 點
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>距離下一等級</span>
                <span>75%</span>
              </div>
              <Progress
                value={75}
                className="h-2 bg-green-100"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              兌換獎勵
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" />
              我的減碳成就
            </CardTitle>
            <CardDescription>您的環保貢獻</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-muted-foreground">
                    本月減碳量
                  </span>
                  <span className="text-sm font-medium">35.2 kg</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-muted-foreground">
                    年度減碳量
                  </span>
                  <span className="text-sm font-medium">287.5 kg</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-muted-foreground">
                    相當於種植樹木
                  </span>
                  <span className="text-sm font-medium">12 棵</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              綠色出行記錄
            </CardTitle>
            <CardDescription>最近的環保出行</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start justify-between border-b pb-2">
                <div>
                  <div className="font-medium">搭乘公車 307路</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    今天 08:15
                  </div>
                </div>
                <Badge className="bg-green-600">+15 點</Badge>
              </div>
              <div className="flex items-start justify-between border-b pb-2">
                <div>
                  <div className="font-medium">搭乘捷運 紅線</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    昨天 17:30
                  </div>
                </div>
                <Badge className="bg-green-600">+20 點</Badge>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium">搭乘校園接駁車</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    昨天 09:45
                  </div>
                </div>
                <Badge className="bg-green-600">+10 點</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              查看完整記錄
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="rewards" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="rewards" className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            <span>獎勵兌換</span>
          </TabsTrigger>
          <TabsTrigger value="ranking" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            <span>排行榜</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="rewards" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>校園餐廳折扣券</CardTitle>
                <CardDescription>使用綠色點數兌換餐飲優惠</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <Gift className="h-12 w-12 text-green-500 opacity-50" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-green-600">
                    <Leaf className="h-4 w-4" />
                    <span className="font-medium">200 點</span>
                  </div>
                  <Badge>庫存: 15</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">立即兌換</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>校園商店禮品卡</CardTitle>
                <CardDescription>價值100元的校園商店禮品卡</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <Gift className="h-12 w-12 text-green-500 opacity-50" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-green-600">
                    <Leaf className="h-4 w-4" />
                    <span className="font-medium">500 點</span>
                  </div>
                  <Badge>庫存: 8</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">立即兌換</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>公車月票折扣</CardTitle>
                <CardDescription>公車月票8折優惠</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                  <Gift className="h-12 w-12 text-green-500 opacity-50" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-green-600">
                    <Leaf className="h-4 w-4" />
                    <span className="font-medium">800 點</span>
                  </div>
                  <Badge>庫存: 5</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">立即兌換</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ranking" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>本月減碳排行榜</CardTitle>
              <CardDescription>看看誰是本月最環保的用戶</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-100">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-bold">
                      1
                    </div>
                    <div>
                      <div className="font-medium">王小明</div>
                      <div className="text-sm text-muted-foreground">
                        科技學院
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">3,250 點</div>
                    <div className="text-sm text-green-600">減碳 78.5 kg</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400 text-white font-bold">
                      2
                    </div>
                    <div>
                      <div className="font-medium">李小華</div>
                      <div className="text-sm text-muted-foreground">
                        商學院
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">2,980 點</div>
                    <div className="text-sm text-green-600">減碳 65.2 kg</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-100">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold">
                      3
                    </div>
                    <div>
                      <div className="font-medium">張小美</div>
                      <div className="text-sm text-muted-foreground">
                        文學院
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">2,750 點</div>
                    <div className="text-sm text-green-600">減碳 60.8 kg</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold">
                      8
                    </div>
                    <div>
                      <div className="font-medium">您的排名</div>
                      <div className="text-sm text-muted-foreground">
                        工學院
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">2,450 點</div>
                    <div className="text-sm text-green-600">減碳 35.2 kg</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
