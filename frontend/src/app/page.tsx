import Link from "next/link";
import { basePath, focusItems, featuredProjects } from "@/lib/site-content";

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
            <Link className="link-button" href="/projects">
              查看作品
            </Link>
            <Link className="ghost-link" href="/contact">
              聯絡我
            </Link>
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
            <h2>Profile</h2>
            <p>
              我喜歡把抽象的需求轉成具體的頁面體驗，尤其擅長整理內容層級、設計視覺節奏，
              並把它實作成穩定的前端頁面。
            </p>
            <p>
              無論是形象網站、作品展示，或需要兼顧品牌感與可維護性的頁面，我都希望做出既
              有記憶點又能長期使用的設計。
            </p>
            <Link className="ghost-link" href="/about">
              更多關於我
            </Link>
          </article>

          <article className="panel">
            <h2>Selected Work</h2>
            <p>
              目前網站已拆成多頁結構，之後可以繼續擴充真實案例、作品詳頁、履歷或文章列表。
            </p>
            <Link className="link-button" href="/projects">
              前往作品頁
            </Link>
          </article>
        </section>

        <section className="panel projects-panel">
          <div className="section-heading">
            <span className="eyebrow">Overview</span>
            <h2>作品方向預覽</h2>
            <p>首頁先展示作品輪廓，詳細內容則由左側 sidebar 切換到獨立頁面閱讀。</p>
          </div>
          <div className="projects-grid">
            {featuredProjects.slice(0, 2).map((project) => (
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
      </div>
    </main>
  );
}
