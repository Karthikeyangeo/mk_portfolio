import React from "react";
import './Experience.css'
import Bounce from 'react-reveal';
import { useEffect } from "react";


export  function Experience() {

      // Here useEffect is used to apply some styles in body
      useEffect(() => {
        document.body.className = 'experienceBody';
        return () => { document.body.className = ''; }
      },[]);

  return (
    <div className="Experience">
        <div className="pageTitle">
            <Bounce>
                <h2>Experience</h2>
            </Bounce>
            
        </div>
        <div className="entries">
            <div className="entry Expentry">
                <div className="title big">Oct 2015 - Present</div>
                <div className="body ">
                    <div className="ExperienceImageDiv">
                        <img 
                            src="https://uploads-ssl.webflow.com/5de6a60dd6d70c11ad98047b/5e20e3450f65b5326213fcd4_Trimble_Logo_White.png" 
                            alt="Trimble logo" 
                            className="educationImage" />
                    </div>                   
                </div>
                <h3>Senior GIS Analayst</h3>
                <p>Trimble Inc <br/>Chennai</p>
            </div>
            <div className="entry Expentry">
                <div className="title">May'15 - Sep'15</div>
                <h3>Lidar Data Analyst</h3>
                <p>Geo Exploration Services<br/> And Analysis Pvt Ltd <br/>Chennai</p>
            </div>
        
        </div>
    </div>
  );
}