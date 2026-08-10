import { ApiDemoForm } from "@/components/api-demo-form";
import { apiBaseUrl } from "@/lib/api";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const statusItems = [
  "Next.js App Router",
  "Static export for GitHub Pages",
  "FastAPI-ready API integration",
  "GitHub Actions deployment workflow",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="hero">
          <span className="eyebrow">ChenWeb Starter</span>
          <h1>Next.js SSG + FastAPI 的可部署起手式</h1>
          <p>
            這份骨架依照專案規格建立，前端已支援 GitHub Pages 靜態輸出，後端已提供
            FastAPI、CORS 與測試範例。
          </p>
          <div className="hero-actions">
            {statusItems.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
          <div className="hero-media">
            <img
              className="hero-image"
              src={`${basePath}/jerry.jpg`}
              alt="Jerry"
            />
            <div className="hero-caption">
              <strong>專案圖片已接入首頁</strong>
              <p>目前使用專案根目錄提供的 `jerry.jpg`，並以靜態資源方式輸出到頁面。</p>
            </div>
          </div>
        </section>

        <section className="panel-wrap">
          <article className="panel">
            <h2>開發摘要</h2>
            <p>
              前端建議在 `frontend/.env.production` 設定
              `NEXT_PUBLIC_API_URL`，正式部署時則由 GitHub Actions secrets 注入。
            </p>
            <p>
              後端預設允許 `http://localhost:3000` 與 `FRONTEND_URL` 指定的 GitHub
              Pages 網域進行跨來源請求。
            </p>
            <p>目前首頁設定的 API Base URL: `{apiBaseUrl}`</p>
            <a className="link-button" href={`${apiBaseUrl}/health`} target="_blank" rel="noreferrer">
              檢查後端 Health API
            </a>
          </article>

          <ApiDemoForm />
        </section>
      </div>
    </main>
  );
}
