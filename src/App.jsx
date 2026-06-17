import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// const Home = lazy(() => import("./home/Home"));
// const Project = lazy(() => import("./home/Project"));
// const Skills = lazy(() => import("./home/Skills"));
// const About = lazy(() => import("./home/About"));
import Home from "./home/Home";
import Project from "./home/Project";
import Skills from "./home/Skills";
import About from "./home/About";



function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
  );
}

export default App;
