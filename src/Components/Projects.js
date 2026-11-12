import { useState } from 'react';
import { ArrowUpRight, ChevronDown, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import './Projects.css';

export default function Projects({ data }) {
  const [selected, setSelected] = useState(null);
  const [moreOpen, setMoreOpen] = useState(false);
  return (
    <section id="projects" className="projects section-shell">
      <div className="section-header"><span className="section-tag">Projects</span><span className="section-rule" /></div>
      <div className="projects-intro"><p className="kicker">Selected work</p><h2>Small teams, local problems, <em>serious craft.</em></h2></div>
      <div className="projects-grid">
        {data.projects.map((project, index) => <motion.article className={`project-card${index === 0 ? ' project-card-large' : ''}`} key={project.name} whileHover={{ y: -7 }} transition={{ duration: .25 }} onClick={() => setSelected(project)} tabIndex="0" onKeyDown={(event) => event.key === 'Enter' && setSelected(project)}>
          <div className="project-card-top"><span>{project.label}</span><ArrowUpRight size={19} /></div><h3>{project.name}</h3><p>{project.summary}</p><div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><button type="button" className="project-expand">Read case study <ArrowUpRight size={16} /></button>
        </motion.article>)}
      </div>
      <div className="smaller-projects">{data.smallerProjects.map((project) => <div className="smaller-project" key={project.name}><span>{project.name}</span><small>{project.detail}</small>{project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><ArrowUpRight size={17} /></a>}</div>)}</div>
      <button type="button" className="more-projects-toggle" onClick={() => setMoreOpen(!moreOpen)} aria-expanded={moreOpen}>More projects <ChevronDown className={moreOpen ? 'rotated' : ''} size={18} /></button>
      <AnimatePresence>{moreOpen && <motion.div className="more-projects" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{data.moreProjects.map((project) => <span key={project}>{project}</span>)}</motion.div>}</AnimatePresence>
      <AnimatePresence>{selected && <motion.div className="case-study-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><motion.div className="case-study" role="dialog" aria-modal="true" aria-label={`${selected.name} case study`} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 25 }} onClick={(event) => event.stopPropagation()}><button type="button" className="case-study-close" onClick={() => setSelected(null)} aria-label="Close case study"><X /></button><p className="kicker">{selected.label}</p><h3>{selected.name}</h3><p className="case-study-summary">{selected.summary}</p><dl><div><dt>Problem</dt><dd>{selected.problem}</dd></div><div><dt>My role</dt><dd>{selected.role}</dd></div><div><dt>Plan and build</dt><dd>{selected.approach}</dd></div><div><dt>Outcome</dt><dd>{selected.outcome}</dd></div></dl><div className="project-tags">{selected.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="case-study-links">{selected.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={15} /></a>)}</div></motion.div></motion.div>}</AnimatePresence>
    </section>
  );
}
