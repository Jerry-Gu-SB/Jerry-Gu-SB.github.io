// App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
