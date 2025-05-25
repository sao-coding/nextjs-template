# Next.js 13+ 課程範本

這個專案是基於 Next.js 13+ (App Router) 的學習範本，旨在協助開發者快速掌握現代 React 全端開發。

## 課程內容

- Next.js 15+ 架構與 App Router 新特性
- React 19+, TypeScript 與 Tailwind CSS 基礎
- 前後端分工與合作方式
- API Route 設計與實作
- Redis 整合應用（進階）

## 專案架構

```
template/
├── app/                  # 主要路由結構與頁面
│   ├── (examples)/       # 範例路由群組 (不影響實際 URL)
│   ├── [dynamicRoute]/   # 動態路由範例
│   ├── api/              # API 路由
│   └── @modal/           # 平行路由範例
├── components/           # 元件目錄
│   ├── ui/               # UI 元件 (shadcn/ui)
│   └── [其他業務元件]     # 業務相關元件
├── config/               # 全域設定
├── hooks/                # 自訂 React Hooks
├── lib/                  # 工具函式庫
├── store/                # 狀態管理 (可選用 Zustand)
├── types/                # TypeScript 型別定義
└── public/               # 靜態資源
```

## 技術堆疊

- Next.js 15+
- React 19+
- TypeScript
- Tailwind CSS
- Shadcn UI

## 開始使用

```bash
# 安裝相依套件
pnpm install

# 啟動開發伺服器
pnpm dev
```

## 特色功能

- App Router 基於目錄的路由設計
- React Server Components 效能優化
- TypeScript 型別安全
- Tailwind CSS 原子化樣式
- API Routes 後端功能

## 常用套件

- `zod` - 用於驗證與解析搜尋參數，確保型別安全
- `zustand` - 輕量級的 React 狀態管理工具
- `shadcn/ui` - 提供現成的 UI 元件庫，快速構建美觀的介面
- `Magic UI` - 用於快速構建美觀的 UI 元件
- `@tanstack/react-query` - 用於數據獲取與快取，提升應用效能

型別 解釋
useRef 解釋
tailwindcss 預設會把全部樣式抹除
淺談渲染方式 CSR/SSR/SSG/ISR
zustand 狀態管理
麵包屑導航是死的要修改
