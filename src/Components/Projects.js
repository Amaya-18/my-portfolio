import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: "iMobile E-Commerce Platform",
      description: "A fully responsive e-commerce website featuring dynamic product listings, shopping cart functionality, and smooth checkout process.",
      tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Weather Dashboard App",
      description: "Real-time weather application with location search, 5-day forecast, and dynamic UI that changes based on weather conditions.",
      tags: ["JavaScript", "API Integration", "CSS Animation"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      tags: ["React", "Framer Motion", "CSS", "Responsive"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  return (
    <section id="portfolio" className="projects-section" ref={ref}>
      <div className="projects-background">
        <div className="projects-orb orb1"></div>
        <div className="projects-orb orb2"></div>
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">MY WORK</span>
          <h2 className="section-title-new">Featured Projects</h2>
        </motion.div>

        <div className="projects-grid-new">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card-new"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-image-container" style={{ background: project.gradient }}>
                <div className="project-overlay-new">
                  <span className="view-btn">View Project →</span>
                </div>
              </div>

              <div className="project-info-new">
                <h3 className="project-title-new">{project.title}</h3>
                <p className="project-desc-new">{project.description}</p>
                
                <div className="project-tags-new">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;