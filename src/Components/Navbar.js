import { useEffect, useState } from 'react';
import { ArrowDownToLine, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);
  return (
    <nav className={`navbar${open ? ' is-open' : ''}`}>
      <a href="#hero" className="navbar-logo" onClick={close}>Amaya<span>.</span></a>

      <button className="navbar-menu" type="button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <ul className="navbar-links" aria-label="Primary navigation">
        {['about', 'experience', 'projects', 'skills', 'contact'].map((item) => <li key={item}><a className={active === item ? 'active' : ''} href={`#${item}`} onClick={close}>{item}</a></li>)}
        <li>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="nav-cv">
            CV <ArrowDownToLine size={14} />
          </a>
        </li>
      </ul>

      <a href="#contact" className="navbar-cta" onClick={close}>Let's talk <span>↗</span></a>
    </nav>
  );
}
