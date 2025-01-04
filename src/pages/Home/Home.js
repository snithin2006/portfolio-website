import React from 'react';
import Navbar from '../../components/NavBar/Navbar';
import ComicPanel from '../../components/ComicPanel/Comicpanel';
import Banner from '../../components/Banner/Banner';
import './Home.css';


function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="hero-section">        
        <div className="row">
          <ComicPanel width={300} height={300} color="#59e2fc" />
          <ComicPanel width={300} height={300} color="#ec9a1c" />
          <ComicPanel width={300} height={300} color="#ab47bc" />
        </div>
        <div className="row">
          <ComicPanel width={300} height={300} color="#59e2fc" />
          <ComicPanel width={300} height={300} color="#ec9a1c" />
          <ComicPanel width={300} height={300} color="#ab47bc" />
        </div>
      </div>
    </div>
  );
}

export default Home;
