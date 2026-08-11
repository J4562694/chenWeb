import { tools } from "@/lib/site-content";

const strengths = [
  "把想法整理成清楚的頁面架構",
  "把視覺語言轉成可維護的前端元件",
  "在品牌感、可讀性與互動節奏之間找到平衡",
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="panel page-header">
          <span className="eyebrow">About</span>
          <h2>關於我</h2>
          <p>
            我偏好設計與前端並重的工作方式，從內容結構、視覺語氣到互動實作，盡量讓每一層都
            能彼此呼應。
          </p>
        </section>

        <section className="panel-wrap panel-wrap-balanced">
          <article className="panel">
            <h2>Strengths</h2>
            <div className="stack-list">
              {strengths.map((item) => (
                <div key={item} className="stack-item">
                  {item}
                </div>
              ))}
            </div>
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
              我喜歡把設計稿與實作距離拉近，讓畫面不是停留在概念，而是能變成真正能使用的網站。
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
