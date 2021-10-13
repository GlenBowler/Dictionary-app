//Importing everything that will be needed
import React from 'react';
import './Education.css';
import {GiBookshelf} from "react-icons/all";

//Function that will return all stuff to main screen
const Education=()=>{
    return(
        <div className ="Education_">
            <h3><GiBookshelf/>  Education</h3>
            <div className="Education_role">
                <h4>Full Stack Web & Sofware Engineer Bootcamp</h4>
                <div className="Education_place">
                    <h5>Hyperion Dev</h5>
                    <div className="Education_year">
                        <h6>Studied: 01/20221-08/2020</h6>
                    </div>
                </div>
            </div>
            <div className="Education_role">
                <h4>Honours Degree in Logistics</h4>
                <div className="Education_place">
                    <h5>Stellenbosch University</h5>
                    <div className="Education_year">
                        <h6>Studied:01/2017-12/2017</h6>
                    </div>
                </div>
            </div>
            <div className="Education_role">
                <h4>Bachelor Degree in Logistics</h4>
                <div className="Education_place">
                    <h5>Stellenbosch University</h5>
                    <div className="Education_year">
                        <h6>Studied:01/2013-12/2016</h6>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Education;