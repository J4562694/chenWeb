export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="panel page-header">
          <span className="eyebrow">Contact</span>
          <h2>一起做出有質感的作品</h2>
          <p>
            如果你想合作製作個人網站、品牌頁面或作品集，我很樂意一起把需求整理成清楚、好看又能上線的頁面。
          </p>
        </section>

        <section className="panel contact-panel">
          <div className="contact-actions">
            <a className="link-button" href="mailto:eertg123@gmail.com">
              eertg123@gmail.com
            </a>
            <a
              className="ghost-link"
              href="https://github.com/J4562694"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="stack-list">
            <div className="stack-item">
              Instagram：
              <a
                className="inline-link"
                href="https://instagram.com/j4562694"
                target="_blank"
                rel="noreferrer"
              >
                @j4562694
              </a>
            </div>
            <div className="stack-item">有任何需要合作的事宜，歡迎直接使用email或是IG與我聯繫。</div>
          </div>
        </section>
      </div>
    </main>
  );
}
