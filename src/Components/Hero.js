import './Hero.css';
import amayaPhoto from '../assets/amaya.png';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">Software Engineering Undergraduate · IIT / Westminster</p>

        <h1 className="hero-name">
          Amaya<br />
          Chathuma<em>li.</em>
        </h1>

        <p className="hero-tagline">
          I build real things — from university platforms to AI-driven livestock systems.
          Currently in second year, actively looking for an internship where I can
          contribute and grow.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View my work</a>
          <a href="#contact" className="btn-ghost">Let's talk →</a>
        </div>

        <div className="hero-social">
          <a href="https://github.com/Amaya-18" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/amaya-chathumali" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:amayachathu111@gmail.com">Email</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo-wrap">
          <img src={amayaPhoto} alt="Amaya Chathumali" />
          <span className="hero-photo-label">Nainamadama, Sri Lanka</span>
        </div>
      </div>
    </section>
  );
}
