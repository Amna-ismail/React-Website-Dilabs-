import React, { useState } from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./style.css";

const Location = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of items to show per row

  const handleNext = () => {
    if (currentIndex + itemsPerPage < location.length) {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
    } else {
      setCurrentIndex(0); // Reset to start if at the end
    }
  };

  const handleBack = () => {
    if (currentIndex === 0) {
      setCurrentIndex(location.length - itemsPerPage); // Move to the end
    } else {
      setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
    }
  };

  return (
    <>
      <section className="location padding">
        <div className="container">
          <div className="heading-wrapper">
            <Heading
              title={
                <span
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    textAlign: "left",
                    display: "block",
                  }}
                >
                  Completed Projects
                </span>
              }
              subtitle={
                <span
                  style={{
                    color: "#483ad3",
                    fontSize: "18px",
                    fontWeight: "600",
                    textAlign: "left",
                    display: "block",
                  }}
                >
                  Popular Projects
                </span>
              }
            />
            <div className="controls">
              <div className="circle" onClick={handleBack} style={{ cursor: "pointer" }}>
                <span className="arrow back">&#8249;</span>
              </div>
              <div className="line"></div>
              <div className="circle" onClick={handleNext} style={{ cursor: "pointer" }}>
                <span className="arrow next">&#8250;</span>
              </div>
            </div>
          </div>

          <div className="content grid3 mtop">
            {location
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((item, index) => (
                <div className="box" key={index}>
                  <img src={item.cover} alt="" />
                  <div className="overlay">
                    <h5>{item.name}</h5>
                    <p>
                      <label>{item.Offices}</label>
                    </p>
                  </div>
                </div>
              ))}
          </div>

         {/* New Card Below the Existing Three */}
<div className='content grid3 mtop'>
  <div className='box shadow custom-card'>

    
    <div className='text'>
      <div className='item'>
        <div className='icon'>
          <img src='./images/location/l1.png' alt='Icon' />
        </div>
        <div className='details'>
          <h5>500+</h5>
          <p>Business advices given 
          <br />
            over 30 years</p>
        </div>
      </div>
      <hr /> {/* Line between the two sections */}
      <div className='item'>
        <div className='icon'>
          <img src='./images/location/l2.png' alt='Icon' />
        </div>
        <div className='details'>
          <h5>30+</h5>
          <p>Business Excellence 
          <br />
          awards achieved</p>
        </div>
      </div>
    </div>
  </div>

              {/* Text Section */}
              <div className="intro-text">
              <p1 style={{color: '#483ad3', fontSize: '18px', fontWeight: '600' }}>WHY CHOOSE US </p1> 
              <h2 >Get benefits and 
                <br/>
                advantages market goal</h2>
                <p> 
                  Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
                  <ul className="checklist">
                  <li>Project Initialization</li>
                  <li>Realtime Best Data Solutions.</li>
                  <li>Market Development</li>
                </ul>
              </div>
            </div>
          </div>
   
  
      </section>
    </>
  );
};

export default Location;
