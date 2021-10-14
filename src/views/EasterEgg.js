import React from 'react';
import {Link} from 'react-router-dom';
import Me from "../assets/images/me.jpg";

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

                <div class = "container4">
                    <img classname = "me" src = {Me}/>
                </div>
                
                <div class = "stats">
                   Age: 20 <br></br> Team: Southwestern College <br/> Role: Goalkeeper/Website Creator <br></br> Major: Compupter Science <br></br> Minor: Discipleship

                </div>
            </div>
        </div>
    );
};

export default EasterEgg;