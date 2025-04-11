import React, { useState } from 'react';
import '../components/styles.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Project">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
