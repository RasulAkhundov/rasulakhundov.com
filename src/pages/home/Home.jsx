import React from 'react';
import './home.scss';
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Services from '../../components/services/Services';
import Skills from '../../components/skills/Skills';
import Portfolio from '../../components/portfolio/Portfolio';
import Contact from '../../components/contact/Contact';

const Home = () => {
  return (
    <div className="home-section">
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default Home