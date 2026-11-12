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

function App() {
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
