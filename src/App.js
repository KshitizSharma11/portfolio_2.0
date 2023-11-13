import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/body';
import Design from './components/Design';
import Skillset from './components/Skillset';

import Contact from './components/Contact';
import Projects from './components/Projects'; // Import the Projects
import Workexp from './components/Workexp';
function App() {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-900">
      <Design/>
      <Navbar />
      
      <Hero />
      <Skillset/>
      <Workexp/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
