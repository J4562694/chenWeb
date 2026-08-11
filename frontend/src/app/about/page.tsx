import { basePath, tools } from "@/lib/site-content";

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

        <section className="panel companion-panel">
          <div className="companion-copy">
            <span className="eyebrow">Studio Companion</span>
            <h2>關於工作之外的一點生活感</h2>
            <p>
              這個區塊是放在 `About` 頁下半部的個人小側寫。之後可以替換成你家裡貓咪的照片，
              讓整個作品集除了介紹能力與作品，也多一點真實生活的溫度。
            </p>
            <p>
              目前先用現有圖片做版面示意。正式版可以改成描述這張照片的由來，像是牠平常會在你
              工作或整理頁面時陪在旁邊，讓這一段更自然地成為個人故事的一部分。
            </p>
          </div>
          <div className="companion-media">
            <img
              className="companion-image"
              src={`${basePath}/jerry.jpg`}
              alt="Studio companion placeholder"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
