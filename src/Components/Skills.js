import React from 'react';
import Styles from './Skills.module.css'
import Cpp from '../Icons/icons8-c++.svg'
import Js from '../Icons/icons8-javascript-logo.svg'
import Bi from '../Icons/icons8-bootstrap.svg'
import giti from '../Icons/icons8-git.svg'
import githubi from '../Icons/icons8-github.svg'
import htmli from '../Icons/icons8-html-5.svg'
import cssi from '../Icons/icons8-css3.svg'
import reacti from '../Icons/icons8-react.svg'
import ci from '../Icons/c-programming.svg'
const Skill = () => {
    return (
        <React.Fragment>
            <div id="skills">
                <div className={Styles.skillcontent}>

                    <h1>Skills</h1>
                    <div className={Styles.skills}>
                        <div className={Styles.skill_icon}>
                            <span title="Cplusplus">
                                <img alt="Js" src={Cpp} ></img>
                            </span>
                        </div>
                        <div className={Styles.skill_icon}>
                            <span title="JavaScript">
                                <img alt="Js" src={Js} ></img>
                            </span>
                        </div>
                        <div className={Styles.skill_icon}>
                            <span title="HTML 5">
                                <img alt="Js" src={htmli} ></img>
                            </span>
                        </div>
                        <div className={Styles.skill_icon}>
                            <span title="CSS 3">
                                <img alt="Js" src={cssi} ></img>
                            </span>
                        </div>
                        <div className={Styles.skill_icon}>
                            <span title="React Js">
                                <img alt="Js" src={reacti} ></img>
                            </span>
                        </div>
                        <div className={Styles.skill_icon}>
                            <span title="Bootstrap">
                                <img alt="Js" src={Bi} ></img>
                            </span>
                        </div>
                        <div className={Styles.skill_icon}>
                            <span title="Git">
                                <img alt="Js" src={giti} ></img>
                            </span>
                        </div>
                        <div className={Styles.skill_icon}>
                            <span title="GitHub">
                                <img alt="Js" src={githubi} ></img>
                            </span>
                        </div>
                        <div className={Styles.skill_icon}>
                            <span title="C language">
                                <img alt="Js" src={ci} ></img>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}
export default Skill;