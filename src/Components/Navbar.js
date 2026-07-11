import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">Amaya.</a>

      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="/Amaya-Chathumali-CV.pdf" target="_blank" rel="noreferrer">
            CV
          </a>
        </li>
      </ul>

      <a href="mailto:amayachathu111@gmail.com" className="navbar-cta">
        Get in touch
      </a>
    </nav>
  );
}
