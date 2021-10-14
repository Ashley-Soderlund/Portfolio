import React from "react";
import Footer from "../components/layout/Footer.js";
import Banner from "../components/sections/Banner.js";


const Contact = () => {
    return(
        <>
            <Banner>
                Contact
            </Banner>
            <div class = "info">
                <div> Phone Number: (316) 888-8888</div>
                <div> GitHub Account: Ashley-Soderlund</div>
                <div> Email Address: Ashley.Soderlund@sckans.edu</div>

            </div>
            <Footer/>
        </>
    )
};

export default Contact;