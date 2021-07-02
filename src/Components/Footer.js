import React from 'react';
import Styles from './Footer.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
const Footer = () => {
    return (
        <React.Fragment>
            <div className={Styles.footer_container}>
                <div className={Styles.footer}>
                    <div className={Styles.Left}>
                        <p>Ranchi (PIN 835215), India</p>
                        <p>+91888777666</p>
                        <p>kpriyansh34@gmail.com</p>
                    </div>
                    <div className={Styles.Right}>
                        <a href="https://www.linkedin.com/in/priyansh-kumar-2027281a7/" target='__blank'><FaLinkedin className={Styles.ldn} title="LinkedIn" /></a>
                        <a href="https://github.com/Kpriyansh" target='__blank'><FaGithub className={Styles.gh} title="Github" /></a>

                    </div>
                </div>
                <h4>Copyright©2021 Design by Priyansh Kumar</h4>
            </div>
        </React.Fragment>
    )
}
export default Footer;