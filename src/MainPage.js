import React, { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import Banner from './components/Banner/Banner';
import ComicPanel from './components/ComicPanel/Comicpanel';
import TextBox from './components/TextBox/Textbox';
import SpeechBubblePanel from './components/ComicPanel/SpeechBubblePanel';
import ImageCard from './components/ImageCard/Imagecard';
import Modal from './components/Modal/Modal';
import FlipBook from './components/FlipBook/Flipbook';
import './pages/Home/Home.css';
import './pages/Projects/Projects.css';
import './pages/Movies/Movies.css';

const authorText = `
  Hi there! I'm Nithin Sivakumar, a Computer Science student at The University of Texas at Austin with hands-on experience in backend development, AI/ML applications, and full-stack software engineering. I've built impactful tools across industries—from a graph-based, agentic data profiling system to a vector retrieval-based supply chain assistant. I enjoy working across the stack, using technologies like JavaScript, ReactJS, and Flutter for the front end; Python, Java, and various databases for the backend; and integrating AI tools such as LangChain, OpenAI, and OCR pipelines.

  <br /><br />

  Outside of coding, I love watching movies, playing tennis, and playing single player story games. I'd love to chat about any of these topics, so feel free to reach out!
`;

const contactText = `
  <contact>
  Reach me at<br />
  nithin06.siva@gmail.com<br />
  or find me at my<br />
  socials below!
  <contact>
`;

const projects = [
  { name: 'Inception', image: '/images/movies/inception.jpg', description: 'Good movie', rating: '10' },
  { name: 'Avengers: Infinity War', image: '/images/movies/infinitywar.png', description: 'Good movie', rating: '10' },
  { name: 'Zodiac', image: '/images/movies/zodiac.png', description: 'Good movie', rating: '10' },
  { name: 'John Wick', image: '/images/movies/johnwick.png', description: 'Good movie', rating: '10' },
  { name: 'Mission Impossible', image: '/images/movies/mi.png', description: 'Good movie', rating: '10' },
];

const movies = [
  { name: 'Inception', image: '/images/movies/inception.jpg', description: 'Good movie', rating: '10' },
  { name: 'Avengers: Infinity War', image: '/images/movies/infinitywar.png', description: 'Good movie', rating: '10' },
  { name: 'Zodiac', image: '/images/movies/zodiac.png', description: 'Good movie', rating: '10' },
  { name: 'John Wick', image: '/images/movies/johnwick.png', description: 'Good movie', rating: '10' },
  { name: 'Mission Impossible', image: '/images/movies/mi.png', description: 'Good movie', rating: '10' },
  { name: 'Leo', image: '/images/movies/leo.png', description: 'Amazing movie', rating: '10' },
];

function MainPage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };
  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  const openMovieModal = (movie) => {
    setSelectedMovie(movie);
    setIsMovieModalOpen(true);
  };
  const closeMovieModal = () => {
    setIsMovieModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div>
      <Navbar />
      <div id="home">
        <Banner />
        <div className="hero-section">
          <div className="row">
            <ComicPanel width={70} height={25.75} color="#c7e8ef" image={'/images/headshot.png'} />
            <ComicPanel
              width={100}
              height={25.75}
              color="#c7e8ef"
              showDots={false}
            >
              <div className="about-me-box">
                <TextBox text="About Me" fontSize='1.5vw' padding='0.2vw' backgroundColor={'#f9f401'} />
              </div>
              <div className="comic-text" dangerouslySetInnerHTML={{ __html: authorText }} />
            </ComicPanel>
            <SpeechBubblePanel
              width={50}
              height={25.75}
              color="#c7e8ef"
              bubbleImage={'/images/bubbles/speechbubble.png'}
            >
              <div className="contact-me-box">
                <TextBox text="Contact Me" fontSize='1.5vw' padding='0.2vw' backgroundColor={'#f9f401'} />
              </div>
              <div className="speech-bubble-contact-text">
                <div dangerouslySetInnerHTML={{ __html: contactText }} />
              </div>
              <div className="social-media-inside">
                <a href="https://www.instagram.com/nithin.s06/" target="_blank" rel="noopener noreferrer">
                  <div className="icon-wrapper">
                    <img src="/images/socials/insta.png" alt="Instagram" className="social-icon" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/nithinsiva/" target="_blank" rel="noopener noreferrer">
                  <div className="icon-wrapper">
                    <img src="/images/socials/linkedin.png" alt="LinkedIn" className="social-icon" />
                  </div>
                </a>
                <a href="https://github.com/snithin2006" target="_blank" rel="noopener noreferrer">
                  <div className="icon-wrapper">
                    <img src="/images/socials/github.png" alt="GitHub" className="social-icon" />
                  </div>
                </a>
              </div>
            </SpeechBubblePanel>
          </div>
        </div>
      </div>

      <div id="projects" className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} onClick={() => openProjectModal(project)}>
              <ImageCard name={project.name} image={project.image} />
            </div>
          ))}
        </div>
        <FlipBook
          isOpen={isProjectModalOpen}
          onClose={closeProjectModal}
          image={selectedProject?.image}
          name={selectedProject?.name}
          description={selectedProject?.description}
          rating={selectedProject?.rating}
        />
      </div>

      <div id="movies" className="movies-section">
        <h2 className="section-title">Favorite Movies</h2>
        <div className="movies-list">
          {movies.map((movie, index) => (
            <div key={index} onClick={() => openMovieModal(movie)}>
              <ImageCard name={movie.name} image={movie.image} />
            </div>
          ))}
        </div>
        <Modal
          isOpen={isMovieModalOpen}
          onClose={closeMovieModal}
          image={selectedMovie?.image}
          name={selectedMovie?.name}
          description={selectedMovie?.description}
          rating={selectedMovie?.rating}
        />
      </div>
    </div>
  );
}

export default MainPage; 