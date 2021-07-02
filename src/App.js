import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './Components/Navbar';
import '../node_modules/jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Skill from './Components/Skills';
import About from './Components/About';
import Header from './Components/Header'
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
const App = () => {

  return (

    <Router>

      <NavBar />
      <Header />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />

    </Router>


  );
}

export default App;
