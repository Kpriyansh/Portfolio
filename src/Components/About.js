import React from 'react';
import Styles from './About.module.css';
import Image from '../Images/PicsArt_09-28-10.24.27.jpg'
import { Link} from 'react-scroll';
const About = () => {
  return (
    <React.Fragment>
    <div id="about" className={Styles.gap}>
      <div className={Styles.About}>
        <h1 style={{ color: '#ffc846', fontFamily: 'sans-serif', marginTop: '10px' }}>About me</h1>
        <div className={Styles.lr}>
          <div className={Styles.Left}>
            <p>Hi my name is Priyansh Kumar. Pleasure to meet you. I'm currently a 3rd year B-Tech student. I'm a self taught programmer and a passionate learner with a knack for building cool Web Applications and Problem Solving.</p>
            <p>I build fully responsive and functional websites and web applications. I have worked on a few projects to strengthen my skills. I love to work as a team and I constantly trying to learn new things and improve my skills</p>
            <p>With my engineering background and web developer role, my biggest motivation to perfect the products I work on and knowing the end-user experience will be that much better.</p>
            <p>I am currently hunting for opportunities to further my career to work and grow as a professional </p>
            <p>Interested in working together? <Link to ="contact" activeClass="active" smooth={true} style={{color:'yellow',cursor:'pointer'}}>Shoot me a message!</Link></p>
          </div>
          <div className={Styles.Right}>
            <img alt="img.jpg" src={Image} width="150px" height="200px" />
          </div>
        </div>

      </div>
    </div>
    </React.Fragment>
  )
}
export default About;