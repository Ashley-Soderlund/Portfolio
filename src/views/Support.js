import React from "react";
import Banner from "../components/sections/Banner";
import Footer from "../components/layout/Footer";
import Little from "../assets/images/LittleMe.JPG";
import Big from "../assets/images/me3.JPG";

const Support = () => {
    return(
        <>
            <Banner>
                Support!
            </Banner>
            <div class = "ranble">
                While, I would love personal support for a variety of things...
            </div>
            <div class = "support">
                Watch Women's Soccer!
            </div>
            <div class = "bsupport">
                Tune into internation (USWNT), national (NWSL), and local games (high school, club, college)!
                Encourage friends and family to support women as they play the
                beautiful game of soccer!
            </div>
            <div class = "cute">
                These women inspire little girls like this:
            </div>
            <div class = "container3">
                 <img classname = "hi" src = {Little}></img>
           
            <div class = "cute2">
                ...to keep playing into their futures.
            </div>
            
            
            <img classname = "hi2" src = {Big}></img>
            </div>
            <Footer/>
        </>
    )
};

export default Support;