import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <AboutSection />
            </main>
          } />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/blog" element={<BlogSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;