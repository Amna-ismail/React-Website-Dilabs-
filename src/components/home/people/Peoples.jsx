import React, { useState } from "react";
import Heading from "../../common/Heading";
import "./people.css";

const People = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      num: "Amna Ismaeel",
      job: "Software Engineer",
      name: "Business consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point at dimension per technical issue."
    },
    {
      num: "Anthom Bu Spar",
      job: "Marketing Manager",
      name: "Targeting consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point at dimension per technical issue."
    },
    {
      num: "Metho k. Partho ",
      job: "Senior Developer",
      name: "Mentioning consultation discover apartments. Indulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point at dimension per technical issue."
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <section className='people padding'>
        <div className='container'>
          <div className='heading-container'>
            <Heading 
              title={
                <span style={{ color: '#fff', fontSize: '35px', fontWeight: 'bold' }}>
                  What People Say
                </span>
              }
            />
            <div className='counter' style={{ fontSize: '20px', color: '#fff', marginLeft: '20px' }}>
              {`< ${currentIndex + 1} / ${reviews.length} >`}
            </div>
          </div>
          <div className='review-container'>
            <button className='nav-button' onClick={handlePrev}>&lt;</button>
            <div className='review-content'>
              <hr className='separator' />
              <div className='review-text'>
                <p style={{ fontSize: '18px', color: '#fff' }}>{reviews[currentIndex].name}</p>
              </div>
              <div className='reviewer-name'>
                <span style={{ fontSize: '20px', color: '#fff', fontWeight: 'bold'}}>{reviews[currentIndex].num}</span>
              </div>
              <div className='reviewer-name'>
                <span style={{ fontSize: '18px', color: '#fff'}}>{reviews[currentIndex].job}</span>
              </div>



            </div>
            <button className='nav-button' onClick={handleNext}>&gt;</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default People;
