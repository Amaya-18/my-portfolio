import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import './Experience.css';

export default function Experience({ data }) {
  return (
    <section id="experience" className="experience section-shell">
      <div className="section-header"><span className="section-tag">Experience</span><span className="section-rule" /></div>
      <div className="experience-intro"><p className="kicker">Learning by shipping</p><h2>Quality, coordination, <em>momentum.</em></h2></div>
      <div className="timeline">
        <span className="timeline-line" />
        {data.map((item) => (
          <motion.article className="timeline-item" key={item.company} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55 }}>
            <div className="timeline-marker"><BriefcaseBusiness size={16} /></div>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-card">
              <p className="timeline-company">{item.company}</p>
              <h3>{item.role}</h3>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <a href="#contact" className="text-link">Talk about the role <ArrowUpRight size={16} /></a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
