import React, { useEffect } from 'react';
import './App.css';
import Aahang from './components/AaahangCarousel';
import Content from './components/content';
import Content2 from './components/content2';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
     <Aahang />
     <Content />
     <Content2 />
     <Footer />
    </div>
  );
}

export default App;