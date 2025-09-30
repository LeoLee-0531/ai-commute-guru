# AI Commute Guru - 綠色交通智慧平台

一個整合即時交通資訊、AI 智慧預測與綠色點數系統的交通管理平台，幫助使用者做出更環保、更智慧的出行選擇。

## ✨ 主要功能

### 🗺️ 即時交通資訊
- 整合公車、捷運、接駁車等即時動態資訊
- 互動式地圖顯示，提供擁擠度資訊
- 即時路線規劃與導航

### 🧠 AI 智慧預測
- 根據歷史與即時資料預測尖峰時段
- 分析擁擠路線並提供避開建議
- 推薦最佳綠色出行方案

### 🌱 綠色點數存摺
- 搭乘大眾運輸累積減碳點數
- 點數兌換商品或優惠
- 社交排行榜功能

### 👤 個人化功能
- 使用者個人檔案管理
- 常用路線儲存
- 出行歷史記錄

## 🛠️ 技術架構

- **框架**: Next.js 15.3.1 (App Router)
- **UI 組件**: React 19、Radix UI、Tailwind CSS
- **地圖**: Leaflet、React Leaflet
- **圖表**: Recharts
- **圖示**: Lucide React
- **類型檢查**: TypeScript

## 📦 安裝與啟動

### 安裝依賴

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 開發模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000) 查看應用程式。

### 建置生產版本

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## 📁 專案結構

```
ai-commute-guru/
├── app/                      # Next.js App Router 頁面
│   ├── traffic/             # 即時交通資訊頁面
│   ├── ai-prediction/       # AI 智慧預測頁面
│   ├── green-points/        # 綠色點數頁面
│   ├── profile/             # 個人檔案頁面
│   └── page.tsx             # 首頁
├── components/              # React 組件
│   └── ui/                  # UI 基礎組件
├── public/                  # 靜態資源
└── package.json
```

## 🚀 部署

推薦使用 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)進行部署。

詳細部署說明請參考 [Next.js 部署文件](https://nextjs.org/docs/app/building-your-application/deploying)。

## 📄 License

本專案採用私有授權 (Private License)。

## 🤝 貢獻

歡迎提交 Issue 或 Pull Request 來改善本專案。