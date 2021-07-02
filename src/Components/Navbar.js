import React from 'react'
import { Link } from 'react-scroll';
import Styles from './Navbar.module.css';
import { FaBars } from 'react-icons/fa'

import './Navbar.module.css'
const NavBar = () => {
  return (
    <React.Fragment>
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top  ${Styles.Nav} bg-transparent`}>
        <div className="container-fluid">
          <a className={`nav-item ${Styles.Header}`} id="header" href="/">PORTFOLIO</a>
          <button className={`navbar-toggler border-warning`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars className={Styles.Navbutton} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item `} >
                <Link to="home" smooth={true}>HOME</Link>
              </li>
              <li className={`nav-item `} >
                <Link to="about" smooth={true} duration={500}>ABOUT ME</Link>
              </li>
              <li className={`nav-item `} >
                <Link to="skills" smooth={true} duration={500}>SKILLS</Link>
              </li>
              <li className={`nav-item `} >
                <Link to="projects" smooth={true} duration={500}>PROJECTS</Link>
              </li>
              <li className={`nav-item `} >
                <Link to="contact" smooth={true} duration={500}>CONTACTS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}
export default NavBar;