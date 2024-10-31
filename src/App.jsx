import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import SectionPicture from './SectionPicture/SectionPicture';
import SectionProjects from './SectionProjects/SectionProjects';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import Footer from './Footer/Footer';
import Project from './Project/Project';

function App() {

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define the routes here */}
        <Route path="/" element={
          <>
            <SectionPicture />
            <hr />
            <AboutMe />
            <hr />
            <SectionProjects />
            <hr />
            <ContactMe />
            <hr />
            <Footer />
          </>
        } />
        <Route path="/projects" element={<SectionProjects />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
