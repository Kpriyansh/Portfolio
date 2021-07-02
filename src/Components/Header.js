import React from 'react';
import './Header.css'
import Typed from 'react-typed'

const Header = () => {

    return (
        <div id="header">
            <div className="home">
                <div className="main-info">
                    <h1>HI there
                        <img id="hi-img" alt="hi.gif" src="https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966" height="20" width="20" >
                        </img>
                        , I' m Priyansh !
                    </h1>
                    <h1><Typed strings={["The Things I do"]} typeSpeed={40} /></h1>
                    <Typed
                        startDelay={1200}
                        className="text-typing"
                        strings={["Web Development", "Problem Solving", "Competitive Programming"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </div>
            </div>
        </div>
    )
}
export default Header;