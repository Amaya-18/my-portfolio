import './Projects.css';

const projects = [
  {
    name: 'UNIFLOW',
    meta: 'Full-stack · Group project',
    desc: 'Centralized platform for IIT students — real-time updates on class cancellations, deadlines, and announcements. Built as a group project.',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'REST API'],
    links: [],
  },
  {
    name: 'AksharaLens',
    meta: 'QA automation · Playwright',
    desc: 'A Playwright-based QA automation tool that detects Sinhala/Tamil UI localization bugs using DOM injection and pixel-diff comparison. Validated against a live production site (Ceylon Unbound), producing a real bug report.',
    tags: ['Playwright', 'JavaScript', 'Node.js'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Amaya-18' },
      { label: 'Report', href: 'https://example.com/akshara-lens' },
    ],
  },
  {
    name: 'BootShield',
    meta: 'Security scanner · Full-stack',
    desc: 'A full-stack security scanner that audits Spring Boot pom.xml files for known CVEs via the OSV.dev API and flags common Spring Boot misconfigurations. Features a React + Vite dashboard with a radial risk-score gauge, fully containerized with Docker.',
    tags: ['Spring Boot', 'Java', 'React', 'Vite', 'Docker'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Amaya-18' },
      { label: 'Demo', href: 'https://example.com/bootshield' },
    ],
  },
  {
    name: 'Ceylon Unbound',
    meta: 'Frontend · Freelance',
    desc: 'A website built for a Sri Lankan travel and experiences brand, showcasing destinations and cultural stories with a clean, modern design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [],
  },
  {
    name: 'Linked',
    meta: 'Full-stack · In development',
    desc: 'A blue-collar job marketplace for Sri Lanka, connecting non-professional workers with employers in Colombo.',
    tags: ['React', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL'],
    links: [],
  },
  {
    name: 'Traffic Vehicle Data System',
    meta: 'Desktop app',
    desc: 'Vehicle data management system with SQL-backed storage, OOP architecture, and built-in reporting tools.',
    tags: ['Python', 'Tkinter', 'SQL', 'OOP'],
    links: [],
  },
  {
    name: 'Climate Action Web App',
    meta: 'Frontend',
    desc: 'Responsive volunteer page promoting environmental initiatives and community engagement.',
    tags: ['HTML', 'CSS'],
    links: [],
  },
  {
    name: 'iMobile Business Website',
    meta: 'Frontend',
    desc: 'Responsive business website with structured layout and clean navigation.',
    tags: ['HTML', 'CSS'],
    links: [],
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
        <div className="featured-label">Selected work</div>
        <div className="featured-inner">
          <div>
            <h3 className="featured-title">UNIFLOW</h3>
            <p className="featured-desc">
              Centralized platform for IIT students with real-time class updates,
              deadlines, and announcements.
            </p>
            <div className="project-tags">
              {projects[0].tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="featured-quote">
            Built to replace scattered WhatsApp messages and reduce missed updates
            for students.
          </p>
        </div>
      </div>

      <div className="projects-list">
        {projects.slice(1).map((project) => (
          <article className="project-row" key={project.name}>
            <div className="project-row-meta">{project.meta}</div>
            <div>
              <h4 className="project-row-title">{project.name}</h4>
              <p className="project-row-desc">{project.desc}</p>
              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="project-row-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}