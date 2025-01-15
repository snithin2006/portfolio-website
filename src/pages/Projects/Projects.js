import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard/Projectcard';
import Navbar from '../../components/NavBar/Navbar';
import './Projects.css';

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        { name: 'Inception', image: '/images/movies/inception.jpg', description: 'Good movie', rating: '10' },
        { name: 'Avengers: Infinity War', image: '/images/movies/infinitywar.png', description: 'Good movie', rating: '10' },
        { name: 'Zodiac', image: '/images/movies/zodiac.png', description: 'Good movie', rating: '10' },
        { name: 'John Wick', image: '/images/movies/johnwick.png', description: 'Good movie', rating: '10' },
        { name: 'Mission Impossible', image: '/images/movies/mi.png', description: 'Good movie', rating: '10' },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className="projects-page">
            <Navbar />
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} onClick={() => openModal(project)}>
                        <ProjectCard name={project.name} image={project.image} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;