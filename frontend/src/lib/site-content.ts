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
    title: "ChenWeb Portfolio",
    type: "Personal Website",
    summary: "以暗色系為核心，重新整理自己的作品集與個人風格。",
    description:
      "把個人介紹、作品展示與聯絡方式整合成一致的多頁式網站，強化品牌感與閱讀節奏。",
    year: "2026",
    stack: ["Next.js", "TypeScript", "CSS", "GitHub Pages"],
    outcome: "建立可持續擴充的作品集骨架與整體視覺語言。",
    image: `${basePath}/default-v3.png`,
    imageAlt: "ChenWeb portfolio project preview",
  },
  {
    title: "beybleadBot",
    type: "Automation / Bot",
    summary: "在大家都玩不到陀螺的情況下，做了一個網路上架陀螺的提醒機器人。",
    description:
      "針對熱門陀螺商品常常缺貨、補貨時間又難掌握的情況，整理出一套自動追蹤與通知流程，讓使用者能在商品重新上架時更快收到提醒。",
    year: "2026",
    stack: ["Bot", "Notification", "Automation"],
    outcome: "使用telegram bot來通知使用者陀螺上架，不用再跟黃牛購買。",
    image: `${basePath}/beybleadBot.jpg`,
    imageAlt: "beybleadBot project preview",
  },
];

export const supportingProjects = [
  {
    title: "Dashboard UI Study",
    type: "Concept",
    description: "練習把資料密集型畫面做得更容易掃描，提升資訊分層與狀態辨識。",
  },
  {
    title: "Portfolio Visual System",
    type: "System",
    description: "整理字體、色彩、按鈕與卡片層次，讓整個網站維持一致語氣。",
  },
  {
    title: "Component Library Notes",
    type: "Frontend",
    description: "把常用區塊拆成可複用元件，方便之後持續新增頁面與模組。",
  },
];

export const navItems = [
  { href: "/", label: "Home", note: "首頁" },
  { href: "/about", label: "About", note: "關於我" },
  { href: "/projects", label: "Projects", note: "作品集" },
  { href: "/contact", label: "Contact", note: "聯絡我" },
];
