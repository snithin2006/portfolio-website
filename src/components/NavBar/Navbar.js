import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <a href="#home" className="nav-text">HOME</a>
        <a href="#projects" className="nav-text">PROJECTS</a>
        <a href="#movies" className="nav-text">MOVIES</a>
      </div>
    </nav>
  );
};

export default Navbar;