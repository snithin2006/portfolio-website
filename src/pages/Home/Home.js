import React from 'react';
import Navbar from '../../components/NavBar/Navbar';
import ComicPanel from '../../components/ComicPanel/Comicpanel';
import Banner from '../../components/Banner/Banner';
import TextBox from '../../components/TextBox/Textbox';
import './Home.css';


const authorText = `
  <strong>The person behind the pixels!</strong><br /><br />
  <regular>
  Hi there! I'm Nithin, a passionate software engineer and comic enthusiast. 
  With a knack for blending creativity and technology, I specialize in crafting 
  innovative solutions that make a real-world impact. My journey in computer science 
  has led me to explore artificial intelligence, community-driven platforms, and, of course, 
  this comic-style portfolio.<br /><br />
  When I’m not writing code, I enjoy delving into classic Marvel comics, watching and reviewing movies, experimenting with new technologies, and brainstorming ways to merge art and engineering.<br /><br />
  <regular>
`;

const contactText = `
  <contact>
  Reach me at<br />
  nithin06.siva@gmail.com<br />
  or find me at my socials below!
  <contact>
`;


function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="hero-section">
        <div className="row">
          <ComicPanel width={70} height={26} color="#53d2e7" image={'/images/headshot.png'} />

          <ComicPanel
            width={100}
            height={26}
            color="#f2b22a"
            showDots={false}
            text={authorText}
          />

          <ComicPanel
            width={50}
            height={26}
            color="#4ad6cd"
            image={'/images/bubbles/speechbubble.png'}
            text={contactText}
          />
        </div>
      </div>

      <div className="contact-box">
        <TextBox text="Contact Me!" fontSize='1.5vw' padding='0.2vw' backgroundColor={'#f9ec5a'} />
      </div>

      <div class="social-media">
        <a href="https://www.instagram.com/nithin.s06/" target="_blank" rel="noopener noreferrer">
          <div class="icon-wrapper">
            <img src="/images/socials/insta.png" alt="Instagram" class="social-icon" />
              <span class="speech-bubble">Follow me!</span>
          </div>
        </a>
        <a href="https://github.com/snithin2006" target="_blank" rel="noopener noreferrer">
          <div class="icon-wrapper">
            <img src="/images/socials/linkedin.png" alt="LinkedIn" class="social-icon" />
              <span class="speech-bubble">Let's Connect!</span>
          </div>
        </a>
        <a href="https://github.com/snithin2006" target="_blank" rel="noopener noreferrer">
          <div class="icon-wrapper">
            <img src="/images/socials/github.png" alt="GitHub" class="social-icon" />
              <span class="speech-bubble">Check out my code!</span>
          </div>
        </a>
      </div>

    </div>
  );
}

export default Home;
