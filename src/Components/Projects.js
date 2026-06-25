import './Projects.css';

const projects = [
  {
    name: 'UNIFLOW',
    meta: 'Full-stack · In progress',
    desc: 'A centralized platform delivering real-time updates on class cancellations, deadlines, and announcements for IIT students.',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'REST API'],
  },
  {
    name: 'Traffic Vehicle Data System',
    meta: 'Desktop app',
    desc: 'Vehicle data management system with SQL-backed storage, OOP architecture, and built-in reporting and visualization tools.',
    tags: ['Python', 'Tkinter', 'SQL', 'OOP'],
  },
  {
    name: 'Climate Action Web App',
    meta: 'Frontend',
    desc: 'Interactive volunteer page promoting environmental initiatives. Focused on responsive design and accessibility.',
    tags: ['HTML', 'CSS'],
  },
  {
    name: 'iMobile Business Website',
    meta: 'Frontend',
    desc: 'Responsive business website with a structured layout and clean navigation, built for usability and clarity.',
    tags: ['HTML', 'CSS'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <span className="section-tag">Projects</span>
        <span className="section-rule" />
      </div>

      {/* Featured */}
      <div className="projects-featured">
        <div className="featured-label">Research project</div>
        <div className="featured-inner">
          <div>
            <h3 className="featured-title">Bredix</h3>
            <p className="featured-desc">
              A smart livestock reproductive monitoring system designed to replace
              paper-based records on Sri Lankan dairy farms. Research stage —
              exploring IoT sensors that detect cattle heat cycles automatically,
              an AI model that predicts optimal insemination timing, and a mobile
              app for farmers to track everything in one place.
            </p>
            <div className="project-tags">
              <span className="project-tag">IoT</span>
              <span className="project-tag">AI / ML</span>
              <span className="project-tag">Mobile Design</span>
              <span className="project-tag">Research</span>
            </div>
          </div>
          <p className="featured-note">
            "Most livestock monitoring in Sri Lanka is still done with pen and
            paper. Bredix is my attempt to change that — starting with the
            reproductive cycle, which is the most time-critical part of dairy
            farm management."
          </p>
        </div>
      </div>

      {/* List */}
      <div className="projects-list">
        {projects.map((p) => (
          <div className="project-row" key={p.name}>
            <div className="project-row-meta">{p.meta}</div>
            <div>
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
