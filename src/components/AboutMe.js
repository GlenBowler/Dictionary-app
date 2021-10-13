import React from 'react'
import './AboutMe.css'
import { BsFillPersonFill } from "react-icons/bs";

const AboutMe=()=>{
    return(
        <div className="aboutMe">
            <div className="aboutMe_left">
                <input type="image" img src="about_me.jpg" className="aboutMe_img" alt="Image of me"/>
            </div>
            <div className="aboutMe_right">
                <h3><BsFillPersonFill/>  About me</h3><br/>
                <p>From Logistics co-ordinater to Full Stack Webdeveloper and Software Engineer, with a keen interest in programming.
                    I enjoy learning new concepts and coding languages and am busy completing certification in full stack web development and software engineering. I am looking to apply what I have learnt during my studies in my future workplace.<br/><br/>
                    I have had a keen interest in tinkering with computers from a young age, both hardware and software, often helping family members and friends set up their home computers as well as building up my own gaming computer.
                    My interest in computers started at a young age and I started taking IT classes in high school and continued coding modules at the University of Stellenbosch.<br/><br/>
                    After completing my Bachelor's in Logistics, Materials, and Supply Chain Management, and then my Honours degree in the same field, I worked within a logistics company handling logistics coordinating.
                    I however missed IT very much and enjoyed being part of the setup for relevant applications, amongst other responsibilities.<br/><br/>
                    I continue to enjoy programming because it often challenges and pushes me to continue learning and improving.
                </p>
            </div>

        </div>
    )
}
export default AboutMe