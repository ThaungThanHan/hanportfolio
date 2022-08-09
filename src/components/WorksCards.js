import React from "react";
import "./styles/WorkShowcase.scss"
const WorksCards = ({image,title,press,onPressWorkCard}) => {
    console.log(press)
    return (
        <div className="works_item">
        <img src={image} className="works_item_img" />
        <div className="works_desc">
            <p className="works_desc_text">{title}</p>
            <div onClick={()=>onPressWorkCard(press)} className="works_desc_button">
                <p className="works_desc_button_text">Read More</p>
            </div>
        </div>
    </div>
    )
}

export default WorksCards