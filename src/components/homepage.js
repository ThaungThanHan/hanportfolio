import React,{useState,useRef} from "react";
import "./styles/homepage.scss"
import "./styles/hero.scss"
import HeroPage from "./heropage";
import Description from "./Description";
import SkillsShowcase from "./SkillsShowcase";
import WorkShowcase from "./WorkShowcase";
import Footer from "./Footer";
import Modal from 'react-modal';
import * as email_key from "./EmailKey";
import emailjs from '@emailjs/browser';

const HomePage = () => {
    const form = useRef();
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [params,setParams] = useState({
        from_name:"",
        email:"",
        message:""
    })
    const customStyles = {
        content:{
            width:"20rem",height:"20rem",margin:"0 auto",marginTop:"5rem"
        }
    }
    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm(email_key.SERVICE_ID,email_key.TEMPLATE_ID,form.current,email_key.PUBLIC_KEY,)
        .then(res=>{
            console.log(res.text);
        }).catch(e=>{
            console.log(e.text)
        })
    }
    console.log("PARMS" + JSON.stringify(params))
    const onClickSend = (event) => {
        sendEmail(event);
        setIsModalOpen(false)
    }
    return(
        <div className="homepage">
            <HeroPage setParams={setParams} params={params} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Description/>
            <SkillsShowcase />
            <WorkShowcase/>
            <Footer isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <Modal ariaHideApp={false} style={customStyles} isOpen={isModalOpen}>
                <form ref={form} onSubmit={sendEmail} className="sayHi_formcontainer">
                    <p className="sayHi_formlabel">Name</p>
                    <input name="from_name" className="sayHi_formcontainer_input" placeholder="Enter your name" />
                    <p className="sayHi_formlabel">Email Address</p>
                    <input name="email" className="sayHi_formcontainer_input" placeholder="Enter your email" />
                    <p className="sayHi_formlabel">Content</p>
                    <textarea name="message"  className="sayHi_formcontainer_input" placeholder="Enter what you want to say" />
                    <div className="say_formcontainer_button_container">
                    <div onClick={()=>setIsModalOpen(false)} className="say_formcontainer_cancel_button">
                    <p className="say_formcontainer_cancel_button_text">Cancel</p>
                    </div>

                    <div type="submit" onClick={(event)=>onClickSend(event)} className="say_formcontainer_button">
                    <p className="say_formcontainer_button_text">Send</p>
                    </div>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default HomePage;