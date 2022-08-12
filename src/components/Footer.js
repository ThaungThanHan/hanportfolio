import React from "react";
import "./styles/Footer.scss"
import Facebook from "../assets/images/facebook.svg"
import Github from "../assets/images/github.svg"
import Linkedin from "../assets/images/linkedin.svg"
import { FaHandPointUp } from "react-icons/fa";
import {Link, animateScroll as scroll} from "react-scroll";
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-body">
                <div className="socialmedia_container">
                <Link   
                activeClass="active"
                to="heropage"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                >
                <div className="up-icon-container">
                    <FaHandPointUp className="up-icon" />
                </div>
                </Link>
                <a href="https://www.facebook.com/jackson.linn.39/"><div className="contact_icon_container"><img className="contact_icon" src={Facebook} /></div></a>
                <a href="https://github.com/ThaungThanHan"><div className="contact_icon_container"><img className="contact_icon" src={Github} /></div></a>
                <a href="https://linkedin.com/in/thaung-than-h-658b57118"><div className="contact_icon_container"><img className="contact_icon" src={Linkedin} /></div></a>
                </div>
                <p className="contact-me-text">You can find me on these platforms. Interested in working together for awesome projects?</p>
                <div className="contact-me-sayhi"><p className="contact-me-sayhi_text">Contact me</p></div>
            </div>
        </div>
    )
}


export default Footer;
