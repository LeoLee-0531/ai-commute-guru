import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Settings, Bell, Shield, LogOut, Pencil } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export const metadata: Metadata = {
  title: "個人資料",
}

export default function ProfilePage() {
  return (
    <div className="container py-6">
      <h1 className="text-3xl font-bold mb-6">個人資料</h1>

      <div className="grid gap-6 md:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr]">
        <Card className="h-fit">
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="使用者頭像" />
                <AvatarFallback>使用者</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h2 className="text-xl font-bold">陳小明</h2>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>基本資料</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>設定</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>通知</span>
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>隱私</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>基本資料</CardTitle>
                  <CardDescription>更新您的個人資訊</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">姓名</Label>
                      <Input id="name" defaultValue="陳小明" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">電子郵件</Label>
                      <Input id="email" type="email" defaultValue="ming@example.com" />
                    </div>
                  </div>
                  <Button>儲存變更</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>常用路線</CardTitle>
                  <CardDescription>設定您的常用通勤路線</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-12 gap-4 items-center w-full max-w-3xl mx-auto">
                    <Input
                      className="col-span-3 text-center"
                      value="住家地址"
                    />
                    <Input
                      className="col-span-9"
                      value="台北市大安區和平東路一段162號"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="frequent-destination">其他常用地點</Label>
                    <Input id="frequent-destination" placeholder="新增常用地點" />
                  </div>
                  <Button>儲存路線</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>應用程式設定</CardTitle>
                  <CardDescription>自訂您的應用程式體驗</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>自動更新交通資訊</Label>
                      <p className="text-sm text-muted-foreground">每5分鐘自動更新即時交通資訊</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>位置服務</Label>
                      <p className="text-sm text-muted-foreground">允許應用程式使用您的位置資訊</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>離線模式</Label>
                      <p className="text-sm text-muted-foreground">允許在無網路時使用基本功能</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>通知設定</CardTitle>
                  <CardDescription>管理您接收的通知類型</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>交通延誤提醒</Label>
                      <p className="text-sm text-muted-foreground">當您的常用路線發生延誤時通知您</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>出發提醒</Label>
                      <p className="text-sm text-muted-foreground">根據交通狀況提醒您何時出發</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>點數獲得通知</Label>
                      <p className="text-sm text-muted-foreground">當您獲得綠色點數時通知您</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>活動通知</Label>
                      <p className="text-sm text-muted-foreground">接收有關特殊活動的交通安排通知</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>隱私設定</CardTitle>
                  <CardDescription>管理您的隱私偏好</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>資料分享</Label>
                      <p className="text-sm text-muted-foreground">允許匿名分享您的交通數據以改善服務</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>排行榜顯示</Label>
                      <p className="text-sm text-muted-foreground">在減碳排行榜上顯示您的資料</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>位置歷史記錄</Label>
                      <p className="text-sm text-muted-foreground">儲存您的位置歷史記錄以提供更好的建議</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>帳號安全</CardTitle>
                  <CardDescription>管理您的帳號安全設定</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">目前密碼</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">新密碼</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">確認新密碼</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button>更新密碼</Button>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline" className="gap-1">
                  <LogOut className="h-4 w-4" />
                  登出
                </Button>
                <Button variant="destructive">刪除帳號</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
