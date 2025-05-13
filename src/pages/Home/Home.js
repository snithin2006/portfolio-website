import React from 'react';
import Navbar from '../../components/NavBar/Navbar';
import ComicPanel from '../../components/ComicPanel/Comicpanel';
import Banner from '../../components/Banner/Banner';
import TextBox from '../../components/TextBox/Textbox';
import SpeechBubblePanel from '../../components/ComicPanel/SpeechBubblePanel';
import './Home.css';


const authorText = `
  <regular>
  The person behind the pixels!<br /><br />
  Hi there! I'm Nithin, a passionate software engineer and comic enthusiast. 
  With a knack for blending creativity and technology, I specialize in crafting 
  innovative solutions that make a real-world impact. My journey in computer science 
  has led me to explore artificial intelligence, community-driven platforms, and, of course, 
  this comic-style portfolio.<br /><br />
  When I'm not writing code, I enjoy delving into classic Marvel comics, watching and reviewing movies, experimenting with new technologies, and brainstorming ways to merge art and engineering.<br /><br />
  <regular>
`;

const contactText = `
  <contact>
  Reach me at<br />
  nithin06.siva@gmail.com<br />
  or find me at my<br />
  socials below!
  <contact>
`;


function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="hero-section">
        <div className="row">
          <ComicPanel width={70} height={26} color="#c7e8ef" image={'/images/headshot.png'} />

          <ComicPanel
            width={100}
            height={26}
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
            height={26}
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

              <a href="https://www.linkedin.com/in/nithin-sivakumar/" target="_blank" rel="noopener noreferrer">
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
  );
}

export default Home;
