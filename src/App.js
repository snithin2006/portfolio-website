import React from 'react';
import Navbar from './components/NavBar/Navbar';
import ComicGrid from './components/ComicGrid/Comicgrid';
import Banner from './components/Banner/Banner';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="hero-section">
        <ComicGrid />
      </div>
    </div>
  );
}

export default App;
