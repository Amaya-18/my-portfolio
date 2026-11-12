import { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const tabs = ['Everyone', 'Recruiters', 'Developers'];

export default function About({ data }) {
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

          {data.about.tabs[activeTab].map((paragraph, index) => (
            <motion.p key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .1 }}>{paragraph}</motion.p>
          ))}
        </div>

        <div className="about-right">
          <div className="about-stats">
            {data.stats.map((stat) => <div className="stat" key={stat.label}><div className="stat-num">{stat.value}</div><div className="stat-label">{stat.label}</div></div>)}
          </div>

          <div className="about-certs">
            <h4>Certifications · LinkedIn Learning</h4>
            {data.certifications.map((c) => (
              <div className="cert-row" key={c}>
                <span className="cert-dot" />
                <span className="cert-name">{c}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
