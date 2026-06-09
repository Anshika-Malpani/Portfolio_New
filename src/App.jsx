import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./home/Home"));
const Project = lazy(() => import("./home/Project"));
const Skills = lazy(() => import("./home/Skills"));
const About = lazy(() => import("./home/About"));

const pageLoader = (
  <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]" />
);

function App() {
  return (
    <Suspense fallback={pageLoader}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}

export default App;
