import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './ProjectShowcase.css';

// Individual page component with forwarded ref
const ProjectPage = React.forwardRef((props, ref) => {
  return (
    <div 
      ref={ref} 
      className="w-full h-full bg-white shadow-lg"
    >
      {props.children}
    </div>
  );
});

// Cover page layout
const CoverPage = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="h-full flex flex-col items-center justify-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">{props.title}</h1>
        <p className="text-xl text-center">{props.subtitle}</p>
      </div>
    </div>
  );
});

// Project content page layout
const ContentPage = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full h-full bg-white">
      <div className="h-full p-8">
        {props.image && (
          <div className="mb-6 h-1/2">
            <img 
              src={props.image} 
              alt={props.title} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{props.title}</h2>
          <p className="text-gray-600">{props.description}</p>
          {props.technologies && (
            <div className="flex flex-wrap gap-2">
              {props.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

const ProjectShowcase = () => {
  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  // Sample project data - replace with your own
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application that allows users to...",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB"],
      links: {
        github: "https://github.com/yourusername/project1",
        live: "https://project1.com"
      }
    },
    {
      title: "Project 2",
      description: "Mobile-first responsive dashboard for...",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      links: {
        github: "https://github.com/yourusername/project2",
        live: "https://project2.com"
      }
    },
    {
      title: "Project 3",
      description: "An AI-powered tool that helps users...",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "TensorFlow", "Flask"],
      links: {
        github: "https://github.com/yourusername/project3",
        live: "https://project3.com"
      }
    }
  ];

  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  const nextPage = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="w-[800px] h-[600px] relative">
        <HTMLFlipBook
          width={400}
          height={600}
          size="stretch"
          minWidth={400}
          maxWidth={400}
          minHeight={600}
          maxHeight={600}
          showCover={true}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          onFlip={onFlip}
          ref={bookRef}
          className="book-style"
        >
          {/* Cover Page */}
          <CoverPage
            title="My Projects"
            subtitle="A collection of my development work"
          />

          {/* Project Pages */}
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              {/* Project Image Page */}
              <ContentPage
                image={project.image}
                title={project.title}
              />
              {/* Project Details Page */}
              <ContentPage
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            </React.Fragment>
          ))}

          {/* Back Cover */}
          <ProjectPage>
            <div className="h-full bg-gradient-to-r from-purple-600 to-blue-500 text-white flex items-center justify-center">
              <div className="text-center p-8">
                <h2 className="text-3xl font-bold mb-4">Thank You</h2>
                <p className="text-xl">Get in touch for collaboration</p>
              </div>
            </div>
          </ProjectPage>
        </HTMLFlipBook>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={prevPage}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Next
          </button>
        </div>
      </div>

      {/* Page Counter */}
      <div className="text-center text-gray-600">
        Page {currentPage + 1} of {projects.length * 2 + 2}
      </div>
    </div>
  );
};

export default ProjectShowcase;