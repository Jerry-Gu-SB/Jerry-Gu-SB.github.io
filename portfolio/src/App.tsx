import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </div>
    </div>
  );
};

export default App;
