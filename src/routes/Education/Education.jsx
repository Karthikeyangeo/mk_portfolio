import React from "react";
import './Education.css'
import Bounce from 'react-reveal';
import { useEffect } from "react";



export  function Education() {

    // Here useEffect is used to apply some styles in body
    useEffect(() => {
        document.body.className = 'educationBody';
        return () => { document.body.className = ''; }
      },[]);
      
  return (
    <div className="Education">
  
        <div className="pageTitle">
            <Bounce>
                <h2>Education</h2>
            </Bounce>
            
        </div>
        <div className="entries">
            <div className="entry">
                <div className="title big">2011-15</div>
                <h2>BE Geo Informatics</h2>
                <div className="body ">
                    <div className="educationImageDiv">
                        <img 
                            src="https://www.annauniv.edu/aufrgicc/assets/images/home/anna-univ-logo.png" 
                            alt="Anna university logo" 
                            className="educationImage" />
                    </div>
                    <p>Anna University Tirunelveli<br/> CPGA : 7.48 <br/>Class : First class</p>
                </div>
            </div>
            <div className="entry School">
                <div className="title">2011</div>
                <h2>Higher Secondary School</h2>
                <div className="body">
                    <p>Madura College Higher Secondary School <br/> Madurai <br/> Score : 88.34%</p>
                </div>
            </div>
        
        </div>
    </div>
  );
}