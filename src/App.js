import { useEffect } from 'react';
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
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    document.body.appendChild(progress);
    const trigger = ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (self) => { progress.style.transform = `scaleX(${self.progress})`; } });
    return () => { trigger.kill(); progress.remove(); };
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
