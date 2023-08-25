import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

export default Routes;
