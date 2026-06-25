import './Projects.css';

const projects = [
  {
    name: 'UNIFLOW',
    meta: 'Full-stack · In progress',
    desc: 'Centralized platform for IIT students — real-time updates on class cancellations, deadlines, and announcements.',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'REST API'],
  },
  {
    name: 'Traffic Vehicle Data System',
    meta: 'Desktop app',
    desc: 'Vehicle data management system with SQL-backed storage, OOP architecture, and built-in reporting tools.',
    tags: ['Python', 'Tkinter', 'SQL', 'OOP'],
  },
  {
    name: 'Climate Action Web App',
    meta: 'Frontend',
    desc: 'Responsive volunteer page promoting environmental initiatives and community engagement.',
    tags: ['HTML', 'CSS'],
  },
  {
    name: 'iMobile Business Website',
    meta: 'Frontend',
    desc: 'Responsive business website with structured layout and clean navigation.',
    tags: ['HTML', 'CSS'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="section-tag">Projects</span>
        <span className="section-rule" />
      </div>

      <div className="projects-featured">
        <div className="featured-label">Research project</div>
        <div className="featured-inner">
          <div className="featured-left">
            <h3 className="featured-title">Bredix</h3>
            <p className="featured-desc">
              A smart livestock reproductive monitoring system designed to replace
              paper-based records on Sri Lankan dairy farms. IoT sensors detect
              cattle heat cycles automatically, an AI model predicts optimal
              insemination timing, and a mobile app lets farmers track
              everything in one place.
            </p>
            <div className="project-tags">
              <span className="project-tag">IoT</span>
              <span className="project-tag">AI/ML</span>
              <span className="project-tag">Mobile Design</span>
              <span className="project-tag">Research</span>
            </div>
          </div>
          <blockquote className="featured-quote">
            Most livestock monitoring in Sri Lanka is still done with pen and
            paper. Bredix is my attempt to change that.
          </blockquote>
        </div>
      </div>

      <div className="projects-list">
        {projects.map((p) => (
          <div className="project-row" key={p.name}>
            <div className="project-row-meta">{p.meta}</div>
            <div className="project-row-center">
              <div className="project-row-title">{p.name}</div>
              <div className="project-row-desc">{p.desc}</div>
            </div>
            <div className="project-row-tags">
              {p.tags.map((t) => (
                <span className="project-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
