import React from 'react';
import Sidebar from './components/Sidebar';
//import { Header, Aboutme } from './components/Sections';
import Header from './components/Sections/Header';
import Aboutme from './components/Sections/Aboutme';
import ProfileTable from './components/Sections/ProfileTable';
import Certifications from './components/Sections/Certifications';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <section id="header"><Header /></section>
        <section id="about"><h2>About Me</h2><Aboutme /></section>
        <section id="experience"><h2>Skills</h2><ProfileTable /></section>
        <section id="education"><h2>Projects</h2><Projects /></section>
        <section id="certifications"><h2>Certifications</h2><Certifications /></section>
        <section id="contact"><h2>Contact</h2><Contact /></section>
      </div>
    </div>
  );
}

export default App;