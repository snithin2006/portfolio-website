import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <a href="home" class="nav-text">HOME</a>
        <a href="projects" class="nav-text">PROJECTS</a>
        <a href="movies" class="nav-text">MOVIES</a>
      </div>
    </nav>
  );
};

export default Navbar;