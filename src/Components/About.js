import { useState } from 'react';
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

const tabs = ['Everyone', 'Recruiters', 'Developers'];

const aboutContent = {
  Everyone: [
    "I'm a second-year Software Engineering student at the Informatics Institute of Technology, affiliated with the University of Westminster. I'm drawn to problems where good engineering creates real change — not just on screens, but in the physical world.",
    "My current focus is full-stack web development. But I'm also deep in research on Bredix — a project to help Sri Lankan farmers manage cattle breeding using IoT sensors and AI, replacing paper-based systems that haven't changed in decades.",
  ],
  Recruiters: [
    "I'm actively looking for a software engineering internship where I can contribute to a real team and grow fast. I'm reliable, I take feedback well, and I care about shipping things that actually work.",
    "I have hands-on experience in React, Node.js, and PostgreSQL through real projects — not just coursework. I'm based in Sri Lanka, available for remote or local opportunities, and I reply within 24 hours.",
  ],
  Developers: [
    'I work mostly in React and Node.js on the frontend and backend. I think about data flow first before writing components, and I care about keeping things readable over being clever.',
    "Outside of web dev, I'm researching Bredix — using IoT sensors and edge AI to detect cattle heat cycles. It's the most technically interesting thing I'm working on right now and it's pushed me to think beyond the browser.",
  ],
};

export default function About() {
  const [activeTab, setActiveTab] = useState('Everyone');

  return (
    <section id="about" className="about">
      <div className="section-header">
        <span className="section-tag">About</span>
        <span className="section-rule" />
      </div>

      <div className="about-grid">
        <div className="about-text">
          <div className="about-toggle" role="tablist" aria-label="Real Me">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                className={`about-toggle-btn${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {aboutContent[activeTab].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="about-right">
          <div className="about-stats">
            <div className="stat">
              <div className="stat-num">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-num">2nd</div>
              <div className="stat-label">Year</div>
            </div>
            <div className="stat">
              <div className="stat-num">4</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat">
              <div className="stat-num">IoT</div>
              <div className="stat-label">Research</div>
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
            <h4>Skills</h4>
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
