import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="gradient-orb orb1"></div>
        <div className="gradient-orb orb2"></div>
        <div className="gradient-orb orb3"></div>
      </div>

      <div className="hero-container">
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            CREATIVE DEVELOPER
          </motion.div>
          
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Amaya
            <br />
            <span className="gradient-text">Chathumali</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Software Engineering Student crafting beautiful digital experiences
            through code, design, and innovation.
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="#portfolio" className="cta-button primary">
              <span>Explore Work</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
            <a href="#contact" className="cta-button secondary">
              Let's Talk
            </a>
          </motion.div>

          <motion.div 
            className="social-links-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/amaya-chathumali-8a5171354" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:amayachathu111@gmail.com">Email</a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div className="image-frame">
            <img src="/myphoto.png" alt="Amaya" />
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;