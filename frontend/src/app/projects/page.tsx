import { featuredProjects } from "@/lib/site-content";

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <div className="page-grid">
        <section className="panel page-header">
          <span className="eyebrow">Projects</span>
          <h2>作品列表</h2>
          <p>這裡可以放你之後真正的案例、作品截圖、專案角色與成果描述。現在先用作品卡片做完整排版。</p>
        </section>

        <section className="projects-grid projects-grid-wide">
          {featuredProjects.map((project) => (
            <article key={project.title} className="project-card">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
