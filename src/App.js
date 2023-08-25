import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import linkedinThumbnail from './/thumbnails/linkedin.png';
import githubThumbnail from './/thumbnails/github.png'
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <div className="footer-links">
            <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
              <img src={linkedinThumbnail} alt="LinkedIn" />
            </a>
            <a href="https://www.github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
              <img src={githubThumbnail} alt="GitHub" />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
