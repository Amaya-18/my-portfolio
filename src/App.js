import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Loader from './Components/Loader';
import { portfolioData } from './data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 0.55, smoothWheel: true });
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    document.body.appendChild(progress);
    const update = (time) => { lenis.raf(time); };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    const trigger = ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (self) => { progress.style.transform = `scaleX(${self.progress})`; } });
    return () => { trigger.kill(); gsap.ticker.remove(update); lenis.destroy(); progress.remove(); };
  }, []);

  return (
    <div className="app">
      <Loader />
      <Navbar />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData} />
        <Skills data={portfolioData.skills} />
        <Certifications data={portfolioData.certifications} />
        <Contact data={portfolioData.person} />
      </main>
    </div>
  );
}

export default App;
