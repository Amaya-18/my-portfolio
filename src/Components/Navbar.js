import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>A</span>
        </motion.div>
        
        <div className="nav-links">
          <Link to="hero" smooth={true} duration={800} offset={-70}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={800} offset={-70}>
            About
          </Link>
          <Link to="portfolio" smooth={true} duration={800} offset={-70}>
            Work
          </Link>
          <Link to="contact" smooth={true} duration={800} offset={-70}>
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;