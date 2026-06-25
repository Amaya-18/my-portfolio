import './About.css';

const certs = [
  'Artificial Intelligence for Students',
  'What Is Generative AI?',
  'Introduction to Prompt Engineering for Generative AI',
  'Become a Web Developer Learning Path',
];

const skills = [
  'JavaScript', 'Python', 'Java', 'PHP',
  'React.js', 'Node.js', 'Express.js',
  'PostgreSQL', 'MySQL', 'MongoDB',
  'REST APIs', 'Git', 'OOP', 'SDLC',
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <span className="section-tag">About</span>
        <span className="section-rule" />
      </div>

      <div className="about-grid">
        <div className="about-left">
          <h2 className="section-heading">
            Building things<br />that matter.
          </h2>
        </div>

        <div className="about-right-placeholder" />
      </div>

      <div className="about-grid" style={{ marginTop: '3rem' }}>
        <div className="about-text">
          <p>
            I'm a second-year Software Engineering student at the{' '}
            <strong>Informatics Institute of Technology</strong>, affiliated with
            the <strong>University of Westminster</strong>. I'm drawn to problems
            where good engineering creates real change — not just on screens, but
            in the physical world.
          </p>
          <p>
            My current focus is full-stack web development. But I'm also deep in
            research on <strong>Bredix</strong> — a project I'm building to help
            Sri Lankan farmers manage cattle breeding using IoT sensors and AI,
            replacing paper-based systems that haven't changed in decades.
          </p>
          <p>
            I care about writing clean, purposeful code. I'm actively looking for
            an <strong>internship</strong> where I can contribute to a real
            engineering team and keep learning fast.
          </p>
        </div>

        <div className="about-right">
          <div className="about-stats">
            <div className="stat">
              <div className="stat-num">5+</div>
              <div className="stat-label">Projects built</div>
            </div>
            <div className="stat">
              <div className="stat-num">2nd</div>
              <div className="stat-label">Year at IIT / Westminster</div>
            </div>
            <div className="stat">
              <div className="stat-num">4</div>
              <div className="stat-label">Certifications earned</div>
            </div>
            <div className="stat">
              <div className="stat-num">IoT</div>
              <div className="stat-label">Current research area</div>
            </div>
          </div>

          <div className="about-certs">
            <h4>Certifications · LinkedIn Learning</h4>
            {certs.map((c) => (
              <div className="cert-row" key={c}>
                <span className="cert-dot" />
                <span className="cert-name">{c}</span>
              </div>
            ))}
          </div>

          <div className="about-skills" id="skills">
            <h4>Technologies</h4>
            <div className="skills-row">
              {skills.map((s) => (
                <span className="skill-chip" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
