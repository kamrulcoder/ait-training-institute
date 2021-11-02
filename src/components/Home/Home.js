import React from "react";
import GetStarted from "../GetStarted/GetStarted";
import Instructor from "../Instructors/Instructor";
import BestFacilites from "./BestFacilites";
import HeroSection from "./HeroSection";
import Fade from 'react-reveal/Fade';



const Home = () => {
    return (
        <div className="homeArea">

            <HeroSection />

            <Fade bottom>
            <GetStarted />
            </Fade>
            <BestFacilites />
            <Instructor />
        </div>
    );
};

export default Home;
