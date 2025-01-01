import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">ABOUT <span>ME</span></div>
      <div className="nav-links">
        <a href="#home">HOME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#technologies">TECHNOLOGIES</a>
        <a href="#movies" >MOVIES</a>
      </div>
    </nav>
  );
};

export default Navbar;
