import React from "react";
import Banner from "../components/sections/Banner";
import Footer from "../components/layout/Footer";

const FAQ = () => {
    return(
        <>
            <Banner>
                FAQ's
            </Banner>
            <div class = "question">

                <div>Am I associated with the USWNT? </div>
                <div>No, I have no connection to the team other than watching and
                supporting them in the sport. </div>
                <div>Do I play soccer? </div>
                <div>Yes, I have been playing soccer ever since I was four.
                I am currently playing in college as a goalkeeper. </div>
                <div>Will this website be constantly up to date? </div>
                <div>No, I will not be keeping up with the recent information about
                the team because I am a college student going into my senior year here
                soon, and I need to be working on other projects. </div>

            </div>
            <Footer/>
        </>
    )
};

export default FAQ;