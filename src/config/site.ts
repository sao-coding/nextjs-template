// 網站基本配置
export const siteConfig = {
  name: 'Next.js 13+ 課程範本',
  description: '使用 Next.js 13+, React, TypeScript 與 Tailwind CSS 的學習範本',
  url: 'https://yoursite.com',
  ogImage: 'https://yoursite.com/og.jpg',
  links: {
    github: 'https://github.com/yourusername/nextjs-course-template',
    twitter: 'https://twitter.com/yourusername'
  },
  creator: 'Your Name'
}

// API 配置
export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',
  timeout: 5000
}

// 功能標誌
export const featureFlags = {
  enableNewUI: process.env.NEXT_PUBLIC_ENABLE_NEW_UI === 'true',
  enableAnalytics: process.env.NODE_ENV === 'production'
}
