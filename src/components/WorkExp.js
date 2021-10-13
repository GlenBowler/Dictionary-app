//Importing everything that will be needed
import React from 'react';
import './WorkExp.css';
import { BsBuilding } from "react-icons/bs";

//Function that will return all stuff to main screen
const WorkExp=()=>{
    return(
        <div className="WorkExp_container">
            <div className="WorkExp_header">
               <h3><BsBuilding/>  Work Experience</h3>
            </div>
            <div className="WorkExp_">
                <h4><strong>Intermodal Co-ordinator</strong></h4>
                <h6>11/2017-12/2020</h6>
            </div>
            <div className="WorkExp_description">
                 <p>
                    As logistics co-ordinator I was arranging trucks for loads for the next day,follow up on trucks for today's loads and help with the finace side of trucking.
                    Was also involved in create a more technology advanced setup for trucking company by the use of Tom Tom devices for our drivers and implementing programs onto the devices.
                 </p>
            </div>
            
        </div>
    )
}

export default WorkExp