//Importing all my files that will be needed
import React from 'react';
import './Skills.css';
import { AiFillHtml5,IoLogoCss3,IoLogoReact,SiJavascript,SiJava,SiWordpress,SiMicrosoftsqlserver,FaLaravel,SiPhp,SiMongodb,FaNode,SiBootstrap,DiJqueryLogo,GiBrain } from "react-icons/all";

const Skills=()=>{
    return (
        <div className="Skills_">
            <h3><GiBrain/>  Skills</h3>
            {/*Show all my icons */}
            <div className="Skills_icons">
                <h2><AiFillHtml5/></h2>
                <h2> <IoLogoCss3/></h2>
                <h2><IoLogoReact/></h2>
                <h2> <SiJavascript/></h2>
                <h2> <SiJava/></h2>
                <h2> <SiWordpress/></h2>
                <h2> <SiMicrosoftsqlserver/></h2>
                <h2> <FaLaravel/></h2>
                <h2> <SiPhp/></h2>
                <h2> <SiMongodb/></h2>
                <h2> <FaNode/></h2>
                <h2> <SiBootstrap/></h2>
                <h2>  <DiJqueryLogo/></h2>
            </div>

        </div>
    )

}
    export default Skills
    