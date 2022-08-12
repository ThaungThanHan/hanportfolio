import React from "react";
import "./styles/homepage.scss"
import HeroPage from "./heropage";
import Description from "./Description";
import SkillsShowcase from "./SkillsShowcase";
import WorkShowcase from "./WorkShowcase";
import Footer from "./Footer";
const HomePage = () => {
    return(
        <div className="homepage">
            <HeroPage/>
            <Description/>
            <SkillsShowcase />
            <WorkShowcase/>
            <Footer/>
        </div>
    )
}

export default HomePage;