import { motion } from 'framer-motion';
import { Code2, Database, ListChecks, Wrench } from 'lucide-react';
import './Skills.css';

const icons = { Frontend: Code2, Backend: Database, 'QA & Testing': ListChecks, Tools: Wrench, 'Project Management': ListChecks };

export default function Skills({ data }) {
  const groups = Object.entries(data);
  return (
    <section id="skills" className="skills section-shell">
      <div className="section-header"><span className="section-tag">Skills</span><span className="section-rule" /></div>
      <div className="skills-heading"><p className="kicker">The toolkit</p><h2>Practical tools for <em>real work.</em></h2></div>
      <div className="skills-marquee" aria-hidden="true"><div className="skills-marquee-track">{[...groups, ...groups].map(([group]) => <span key={`${group}-marquee`}>{group} <b>✳</b></span>)}</div></div>
      <div className="skill-groups">
        {groups.map(([group, skills]) => {
          const Icon = icons[group] || Wrench;
          return <motion.div className="skill-group" key={group} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}><Icon size={20} /><h3>{group}</h3><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></motion.div>;
        })}
      </div>
    </section>
  );
}
