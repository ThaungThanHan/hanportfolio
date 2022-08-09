import React from "react";
import "./styles/homepage.scss"
import HeroPage from "./heropage";
import Description from "./Description";
import SkillsShowcase from "./SkillsShowcase";
import WorkShowcase from "./WorkShowcase";
const HomePage = () => {
    return(
        <div className="homepage">
            <HeroPage/>
            <Description/>
            <SkillsShowcase />
            <WorkShowcase/>
        </div>
    )
}

export default HomePage;