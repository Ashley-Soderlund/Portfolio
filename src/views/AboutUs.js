import React from "react";
import Banner from "../components/sections/Banner";
import Footer from "../components/layout/Footer";
import Soccer from "../assets/images/soccer.jpg";

const About = () => {
    return(
        <>
            <Banner>
                About Us!
            </Banner>
            <div class = 'container2'>
                 <img classname = "sc" src={Soccer}/>
            </div>
            <div class = "topic">
                Southwestern College Student
            </div>
            <div class = "about">
                Hi, I'm Ashley Soderlund! I am a student at Southwestern College studying Computer Science.
                In my major, I took an elective class on Website Design, thus this page
                was born! Soccer is a passion of mine, so I created a website about a
                women's soccer team very close to home. I have followed the United States Women's
                soccer team ever since I was a little girl, and it is something
                I can easily talk about and continually work with for weeks on end.
            </div>
            <Footer/>
        </>
    )
};

export default About;