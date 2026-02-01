import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "React & JavaScript", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Responsive Design", level: 95 }
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-background">
        <div className="about-orb orb1"></div>
        <div className="about-orb orb2"></div>
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">GET TO KNOW ME</span>
          <h2 className="section-title-new">About Me</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text-section"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="about-paragraph">
              I'm a passionate second-year Software Engineering student with a keen interest in web development 
              and user interface design. I love transforming ideas into elegant, functional digital experiences 
              that make a difference.
            </p>
            <p className="about-paragraph">
              When I'm not coding, you'll find me exploring the latest design trends, contributing to open-source 
              projects, or learning new frameworks and technologies. I believe in writing clean, maintainable code 
              and creating user experiences that are both intuitive and delightful.
            </p>

            <div className="about-stats-row">
              <div className="stat-box">
                <h3>10+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-box">
                <h3>2+</h3>
                <p>Years</p>
              </div>
              <div className="stat-box">
                <h3>100%</h3>
                <p>Passion</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="skills-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="skills-title">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="skill-item-new">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;