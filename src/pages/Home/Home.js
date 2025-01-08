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
          <ComicPanel width={70} height={25} color="#53d2e7" />
          <ComicPanel width={100} height={25} color="#f2b22a" />
          <ComicPanel width={50} height={25} color="#4ad6cd" />
        </div>
      </div>
    </div>
  );
}

export default Home;
