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
                <Link to="home" activeClass="active" smooth={true}>HOME</Link>
              </li>
              <li className={`nav-item `} >
                <Link to="about"  activeClass="active" smooth={true}>ABOUT ME</Link>
              </li>
              <li className={`nav-item `} >
                <Link to="skills" activeClass="active" smooth={true}>SKILLS</Link>
              </li>
              <li className={`nav-item `} >
                <Link to="projects" activeClass="active" smooth={true}>PROJECTS</Link>
              </li>
              <li className={`nav-item`}>
                <a href='https://drive.google.com/file/d/1YTZZk6SH0DcrHgfAAp2HP8r8AS87MVWB/view?usp=sharing' target='__blank'>RESUME</a>
              </li>
              <li className={`nav-item `} >
                <Link to="contact" activeClass="active" smooth={true}>CONTACTS</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}
export default NavBar;