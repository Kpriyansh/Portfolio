import React from 'react';
import './Project.css';
import Scroll from './Scroll';
const Project = () => {
    return (
        <React.Fragment>
            <div id="projects">

                <div className="zone head-gap">
                    <h1 id="project-container">Projects / Work</h1>
                    <Scroll>
                        <div className="grid-wrapper">
                            <div className="project zone p1">
                                <div className="p-data">
                                    <h3>Pong Game</h3>
                                    <div className="link-btns" >
                                        <a href="https://github.com/Kpriyansh/Pong-game" target='__blank'><button type="button" class="btn btn-primary">Github</button></a>
                                        <a href="https://fervent-booth-8e6181.netlify.app" target='__blank'><button type="button" class="btn btn-primary">Live Site</button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="project zone p2">
                                <div className="p-data">
                                    <h3>Celebrity Face Recognition</h3>
                                    <div className="link-btns" >
                                        <a href='https://github.com/Kpriyansh/face-recognition' target='__blank'><button type="button" class="btn btn-primary">Github</button></a>
                                        <a href='https://smart-detect-34.herokuapp.com/' target='__blank'><button type="button" class="btn btn-primary">Live Site</button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="project zone p3">
                                <div className="p-data">
                                    <h3>Weather App</h3>
                                    <div className="link-btns" >
                                       <a href='https://github.com/Kpriyansh/WeatherApp' target='__blank'><button type="button" class="btn btn-primary">Github</button></a>
                                       <a href='https://weather-app-34.netlify.app' target='__blank'> <button type="button" class="btn btn-primary">Live Site</button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="project zone p4">
                                <div className="p-data">
                                    <h3>Robofriends</h3>
                                    <div className="link-btns" >
                                        <a href='https://github.com/Kpriyansh/Card-Contacts' target='__blank'><button type="button" class="btn btn-primary">Github</button></a>
                                        <a href='https://kpriyansh.github.io/Card-Contacts/' target='__blank'><button type="button" class="btn btn-primary">Live Site</button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="project zone p5">
                                <div className="p-data">
                                    <h3>Gradient Background Generator</h3>
                                    <div className="link-btns" >
                                        <a href='https://github.com/Kpriyansh/Background-generator' target='__blank'><button type="button" class="btn btn-primary">Github</button></a>
                                        <a href='https://kpriyansh.github.io/Background-generator/' target='__blank'><button type="button" class="btn btn-primary">Live Site</button></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Scroll>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Project;