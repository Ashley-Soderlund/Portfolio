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
                Am I associated with the USWNT? <br/>
                No, I have no connection to the team other than watching and
                supporting them in the sport. <br/>
                Do I play soccer? <br/>
                Yes, I have been playing soccer ever since I was four.
                I am currently playing in college as a goalkeeper. <br/>
                Will this website be constantly up to date? <br/>
                No, I will not be keeping up with the recent information about
                the team because I am a college student going into my senior year here
                soon, and I need to be working on other projects. <br/>

            </div>
            <Footer/>
        </>
    )
};

export default FAQ;