import React,{useState} from "react";
import "./styles/WorkShowcase.scss"
import lattwae from "../assets/images/lattwae.png"
import pedagogy from "../assets/images/pedagogy.png"
import WorksCards from "./WorksCards";
import WorkInfoModal from "./WorkInfoModal";
const WorkShowcase = () => {
    const images = {lattwae:lattwae,pedagogy:pedagogy};
    const [isModalOpen,setIsModalOpen] = useState({
        lattwae:false,
        pedagogy:false
    })
    const onPressWorkCard = (field) => {
        setIsModalOpen({...isModalOpen,[`${field}`]:true})
    }
    const onPressClose = (field) => {
        setIsModalOpen({...isModalOpen,[`${field}`]:false})
    }
    console.log(isModalOpen)
    return(
        <div className="workshowcase_container">
            <div className="works_container">
                <h3 className="works_container_title">My Recent Work</h3>
                <p className="works_container_subtitle">Here are the projects and jobs I have came across.</p>
                <div className="works">
                    <WorksCards onPressWorkCard={onPressWorkCard} press="lattwae" 
                    image={lattwae} title="Instructed a ReactJS beginner class using LIVE coding." />
                    <WorksCards onPressWorkCard={onPressWorkCard} image={pedagogy} press="pedagogy" 
                    title="Worked on a mobile application for school service using react native and reactjs." />
                </div>
            </div>
            <WorkInfoModal onPressClose={onPressClose} isModalOpen={isModalOpen} images={images} />
        </div>
    )
}

export default WorkShowcase;