import React from 'react';
import {Link} from 'react-router-dom';

const EasterEgg = () => {
    return (
        <div class = "easter-egg-avocado">
            <div class = "nav">
                <Link to="/Portfolio">
                    Go Back
                </Link>
            </div>
            <div class = "inner-avocado">
                <div class = "card">
                
                </div>
                <div class = "name">
                    Ashley Soderlund
                </div>
                <div class = "position">
                    Goalkeeper
                </div>
                <div class = "img-me">
               
                </div>
                <div class = "stats">
                   Rank: 74 <br></br> Age: 20 <br></br> Team: Southwestern College <br></br> Dominate Foot: Right <br></br> Stregnths: Communication, Decision Making, Agressive, 1v1's <br></br> Weaknesses: Bum Left Ankle, Frequently Jammed Fingers <br></br> Role: Website Creator <br></br> Major: Computer Science <br></br> Minor: Discipleship <br></br> Graduates: December 2022

                </div>
            </div>
        </div>
    );
};

export default EasterEgg;