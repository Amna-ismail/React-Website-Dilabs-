import React from "react"
import "./recent.css" // Include the CSS file for additional styles

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {/* Existing card */}
        <div className='box shadow dark-blue-bg'>
          <div className='text'>
            <div className='item'>
              <div className='icon'>
                <i className='fa fa-check'></i> {/* Checkmark icon */}
              </div>
              <div className='details'>
                <h5>Professional Agency</h5>
                <p>Consectetur adipisci velitsed quia non numquam eius tempralabore et dolore magnam aliquam quaerat</p>
              </div>
            </div>
            <hr /> {/* Line between the two sections */}
            <div className='item'>
              <div className='icon'>
                <i className='fa fa-check'></i> {/* Checkmark icon */}
              </div>
              <div className='details'>
                <h5>Solutions Provider</h5>
                <p>Know more about digital direct response than virtually any digital marketing agency in the industry.</p>
              </div>
            </div>
          </div>
        </div>

        {/* New card with image */}
        <div className='box shadow image-card'>
          <img src='./images/download.jpg' alt='Cover' className='card-image' />
        </div>
      </div>
    </>
  )
}

export default RecentCard
