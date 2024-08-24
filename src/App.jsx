import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import './App.css';
import Hero from './Hero';

function App() {
  return (
    <Router>
      <Nav />
      <div>
        {/* Your routes or other components will go here */}
     <Hero />
      </div>
    </Router>
  );
}

export default App;
