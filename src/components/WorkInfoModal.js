import React from "react";
import Modal from 'react-modal';
import "./styles/WorkInfoModal.scss";
const WorkInfoModal = ({isModalOpen,onPressClose,images}) => {
    const customStyles = {
        content:{
            width:"21rem",height:"40rem",margin:"0 auto",padding:"1rem",display:'flex',
            marginTop:"2rem",
    }
}
    return(
        <div>
            <Modal
            isOpen={isModalOpen.lattwae} style={customStyles}
            >
                <div className="content-container">
                    <img className="content-img" src={images.lattwae} />
                    <p className="content-work">
                        Lattwae space is an educational space with classes in Computer Science, Engineering, Arts and Maths. Their main purpose is to
                        give affordable education to students in Myanmar with skills necessary in 21st century.<br/> Coding, web development, AI, ML, Data Science 
                        classes are also available with LIVE coding sessions and practical assignments.
                    </p>
                    <h3 className="what_i_did">What I did</h3>
                    <ul>
                        <li className="list-item">Instructed ReactJS for students to grasp the fundamentals and nature of frontend web development.</li>
                        <li className="list-item">Provide LIVE coding sessions and practical assignments to keep track of their learning process.</li>
                        <li className="list-item">Provide consultation for students for their career and learning path.</li>
                    </ul>
                    <div onClick={()=>onPressClose("lattwae")} className="modal_button">
                        <p className="modal_button_text">Close</p>
                    </div>
                </div>
            </Modal>
            <Modal 
            isOpen={isModalOpen.pedagogy} style={customStyles}
            >
                <div className="content-container">
                    <img className="content-img" src={images.pedagogy} />
                    <p className="content-work">
                        Pedagogy is one of the projects by a singapore-based company. With Pedagogy, teacher will be able to tackle their daily school 
                        tasks with all in one solution.<br/> It provides features such as tracking classrooms, LIVE video classrooms, whiteboards, attendance, parent-teacher-students 
                        chat, schedules, academic calendars and leave/proxy requests.
                    </p>
                    <h3 className="what_i_did">What I did</h3>
                    <ul>
                        <li className="list-item">Develop a mobile application for teachers using React Native and other libraries and applications along the way.</li>
                        <li className="list-item">Communicate with the design and backend teams for optimal solutions and to develop as per design and flow.</li>
                        <li className="list-item">Organize the code logically to make the components the most reusable and easy to use.</li>
                    </ul>
                    <div onClick={()=>onPressClose("pedagogy")} className="modal_button">
                        <p className="modal_button_text">Close</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default WorkInfoModal