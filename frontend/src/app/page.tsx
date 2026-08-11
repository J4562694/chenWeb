const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const focusItems = ["Frontend Design", "UI Engineering", "Product Thinking"];

const featuredProjects = [
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

const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "FastAPI",
  "Figma",
  "GitHub Actions",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="hero">
          <span className="eyebrow">Portfolio</span>
          <h1>設計、前端與敘事感兼具的個人作品集首頁</h1>
          <p>
            我專注在把想法整理成清楚、耐看又能實際上線的數位體驗。從首頁視覺、互動細節
            到前端落地，我喜歡讓作品同時兼顧美感與可用性。
          </p>
          <div className="hero-actions">
            {focusItems.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
          <div className="hero-cta">
            <a className="link-button" href="#projects">
              查看作品
            </a>
            <a className="ghost-link" href="#contact">
              聯絡我
            </a>
          </div>
          <div className="hero-media">
            <img className="hero-image" src={`${basePath}/jerry.jpg`} alt="Portfolio visual" />
            <div className="hero-caption">
              <strong>用視覺建立第一印象</strong>
              <p>
                這個頁面以暗色調、清楚的層次和大面積主視覺為核心，讓作品集一打開就有自己的
                氣質。
              </p>
            </div>
          </div>
        </section>

        <section className="panel-wrap panel-wrap-balanced">
          <article className="panel">
            <h2>About Me</h2>
            <p>
              我喜歡把抽象的需求轉成具體的頁面體驗，尤其擅長整理內容層級、設計視覺節奏，
              並把它實作成穩定的前端頁面。
            </p>
            <p>
              無論是形象網站、作品展示，或需要兼顧品牌感與可維護性的頁面，我都希望做出既
              有記憶點又能長期使用的設計。
            </p>
          </article>

          <article className="panel">
            <h2>Toolbox</h2>
            <div className="tag-grid">
              {tools.map((tool) => (
                <span key={tool} className="tag">
                  {tool}
                </span>
              ))}
            </div>
            <p>
              目前這個作品集本身就是以 `Next.js` 靜態輸出部署，可延伸成更多作品頁、案例頁與
              聯絡頁。
            </p>
          </article>
        </section>

        <section id="projects" className="panel projects-panel">
          <div className="section-heading">
            <span className="eyebrow">Selected Work</span>
            <h2>精選作品</h2>
            <p>這裡展示的是我偏好的作品方向：清楚敘事、精緻介面，以及能實際支撐使用情境的互動設計。</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <article key={project.title} className="project-card">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel quote-panel">
          <p className="quote">
            我在意的不只是把頁面做出來，而是讓它看起來像你的作品、說得出你的風格，也能真的被使用。
          </p>
        </section>

        <section id="contact" className="panel contact-panel">
          <div className="section-heading">
            <span className="eyebrow">Contact</span>
            <h2>一起做出有質感的作品</h2>
            <p>如果你想合作製作個人網站、品牌頁面或作品集，我很樂意一起把想法整理成真正能上線的頁面。</p>
          </div>
          <div className="contact-actions">
            <a className="link-button" href="mailto:hello@example.com">
              hello@example.com
            </a>
            <a className="ghost-link" href="https://github.com/J4562694" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
