export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const focusItems = ["Frontend Design", "UI Engineering", "Product Thinking"];

export const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "FastAPI",
  "Figma",
  "GitHub Actions",
];

export const featuredProjects = [
  {
    title: "Brand Story Landing Page",
    type: "Web Design / Frontend",
    description:
      "把產品介紹、品牌視覺與轉換流程整合成一頁式體驗，專注在節奏、層次與 CTA 的清晰度。",
  },
  {
    title: "Interactive Dashboard Concept",
    type: "Dashboard / UX",
    description:
      "為資料密集型後台設計可快速掃描的資訊版面，強化狀態提示、操作優先序與行動效率。",
  },
  {
    title: "Portfolio Visual System",
    type: "Identity / Personal Site",
    description:
      "建立一致的暗色系視覺語言，從字體、色彩、卡片層次到圖片展示都維持明確個性。",
  },
];

export const navItems = [
  { href: "/", label: "Home", note: "首頁" },
  { href: "/about", label: "About", note: "關於我" },
  { href: "/projects", label: "Projects", note: "作品集" },
  { href: "/contact", label: "Contact", note: "聯絡我" },
];
