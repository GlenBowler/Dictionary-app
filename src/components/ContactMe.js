//Importing everything that will be needed
import React from 'react';
import './ContactMe.css';
import {FaPhoneAlt,HiOutlineMail,AiOutlineMessage,AiOutlineLinkedin,AiOutlineGithub} from "react-icons/all";

//Function that will return all stuff to main screen
const ContactMe=()=>{
    return(
        <div>
            <h3><FaPhoneAlt/>  Contact Me:</h3>
            <div className="ContactMe_option">
                <h7><HiOutlineMail/>: <a href ="glen.bowler2019@gmail.com">glen.bowler2019@gmail.com</a></h7>
            </div>
            <div className="ContactMe_option">
                <h7><AiOutlineMessage/>: 0721224897</h7>
            </div>
            <div className="ContactMe_option">
                <h7><a href="https://www.linkedin.com/in/glen-bowler-9078b019b/"><AiOutlineLinkedin/></a></h7>
                <h7><a href="https://github.com/GlenBowler"><AiOutlineGithub/></a></h7>
            </div>
            
            
        </div>
    )
}

export default ContactMe