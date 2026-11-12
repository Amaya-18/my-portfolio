import './Hero.css';
import amayaPhoto from '../assets/amaya.png';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ data }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <motion.p className="hero-eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35 }}>Software engineer · Project coordination · QA</motion.p>

        <motion.h1 className="hero-name" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45, duration: .7 }}>Building useful products<br /><em>for real life.</em></motion.h1>

        <motion.p className="hero-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.75 }}>I’m a third-year Software Engineering student who builds full-stack products and coordinates delivery. Open to junior project coordinator, frontend, full-stack, and QA roles.</motion.p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View my work <ArrowUpRight size={17} /></a>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="btn-outline">View CV <ArrowDown size={16} /></a>
          <a href="#contact" className="btn-ghost">Let's talk <ArrowUpRight size={16} /></a>
        </div>

        <div className="hero-social">
          <a href={data.person.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={data.person.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${data.person.email}`}>Email</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo-wrap"><span className="open-badge">✳ Open to work</span><img src={amayaPhoto} alt="Amaya Chathumali" className="hero-photo" /></div>
      </div>
    </section>
  );
}