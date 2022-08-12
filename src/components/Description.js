import React from "react";
import "./styles/description.scss";
import Thaung from "../assets/images/thaung.jpg"
const Description = () => {
    return(
        <div id="description" className="desc_container">
            <img src={Thaung} className="my_pic" />
            <p className="desc_text">
                As a hardworking and ambitious individual, I have been working remotely for startups and businesses which need their products
                to be developed with optimized code and extensive care.<br/><br/>
                The ability to tinker for long hours of coding and creative thinking has helped me stand out as a professional web artisan.
            </p>
        </div>
    )
}

export default Description;