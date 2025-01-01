import React from 'react';
import './Comicgrid.css';

const ComicGrid = () => {
  return (
    <div className="comic-grid">
      <div className="panel superman-panel">
        <div className="superman-logo"></div>
        <div className="speech-bubble">ABOUT ME!</div>
      </div>
      
      <div className="panel profile-panel">
        <div className="profile-image"></div>
      </div>
      
      <div className="panel tech-panel">
        <div className="tech-icons">
          <span className="tech-circle"></span>
          <span className="tech-circle"></span>
          <span className="tech-circle"></span>
        </div>
        <div className="screen-icon"></div>
      </div>

      <div className="panel dots-panel">
        <div className="speech-bubble">ABOUT ME!</div>
      </div>
      
      <div className="panel mobile-panel">
        <div className="mobile-icon"></div>
      </div>
      
      <div className="panel tools-panel">
        <div className="tools-icon"></div>
      </div>
      
      <div className="panel tablet-panel">
        <div className="tablet-icon"></div>
      </div>
      
      <div className="panel screen-panel">
        <div className="screen-icon-alt"></div>
      </div>
    </div>
  );
};

export default ComicGrid;
