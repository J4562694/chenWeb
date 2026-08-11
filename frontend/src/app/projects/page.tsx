"use client";

import { useState } from "react";

import { featuredProjects, supportingProjects } from "@/lib/site-content";

export default function ProjectsPage() {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  return (
    <>
      <main className="page-shell">
        <div className="page-grid">
          <section className="panel page-header">
            <span className="eyebrow">Projects</span>
            <h2>作品列表</h2>
            <p>
              先把重點作品放在最前面，讓整體看起來更像正式作品集；次要作品則放在下方，保留延伸內容與探索感。
            </p>
          </section>

          <section className="projects-showcase">
            <div className="section-heading">
              <span className="eyebrow">Featured</span>
              <h2>精選作品</h2>
              <p>先展示最能代表目前風格與能力的案例，讓畫面更有主次。</p>
            </div>

            <div className="featured-projects">
              {featuredProjects.map((project) => (
                <article key={project.title} className="featured-project-card">
                  {project.image ? (
                    <button
                      type="button"
                      className="featured-project-media"
                      onClick={() =>
                        setActiveImage({
                          src: project.image,
                          alt: project.imageAlt ?? `${project.title} preview`,
                          title: project.title,
                        })
                      }
                    >
                      <img
                        className="featured-project-image"
                        src={project.image}
                        alt={project.imageAlt ?? `${project.title} preview`}
                      />
                      <span className="featured-project-zoom">點擊放大</span>
                    </button>
                  ) : null}
                  <div className="featured-project-top">
                    <span className="project-type">{project.type}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <div className="featured-project-body">
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-chip-row">
                    {project.stack.map((item) => (
                      <span key={item} className="project-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="project-footnote">
                    <span>Project outcome</span>
                    <p>{project.outcome}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel projects-panel">
            <div className="section-heading">
              <span className="eyebrow">More</span>
              <h2>其他作品與延伸方向</h2>
              <p>這一區適合放概念稿、練習作品、side project，讓頁面更完整但不會搶走主角。</p>
            </div>

            <div className="projects-grid projects-grid-wide">
              {supportingProjects.map((project) => (
                <article key={project.title} className="project-card">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      {activeImage ? (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.title} enlarged preview`}
          onClick={() => setActiveImage(null)}
        >
          <div className="image-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="image-lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close image preview"
            >
              ×
            </button>
            <img className="image-lightbox-image" src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      ) : null}
    </>
  );
}
