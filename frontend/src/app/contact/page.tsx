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
            <a className="link-button" href="mailto:hello@example.com">
              hello@example.com
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
            <div className="stack-item">可把這裡換成你的 Email、GitHub、LinkedIn 或 Instagram。</div>
            <div className="stack-item">也可以再加聯絡表單、下載履歷按鈕或更多個人資訊。</div>
          </div>
        </section>
      </div>
    </main>
  );
}
