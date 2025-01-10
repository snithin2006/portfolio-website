import React from 'react';
import './Projects.css';
import HTMLFlipBook from 'react-pageflip';

const Projects = () => {
    return (
        <HTMLFlipBook width={300} height={500} className="flipbook">
            <div className="demoPage">Page 1</div>
            <div className="demoPage">Page 2</div>
            <div className="demoPage">Page 3</div>
            <div className="demoPage">Page 4</div>
        </HTMLFlipBook>
    );
};

export default Projects;