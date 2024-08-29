import React from "react"
//import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
      <div className='hero-content'>
          <h1 className='hero-title'>Creative</h1>
          <p className='hero-subtitle'>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily perfectly.</p>
          <button className='hero-button'>Get Started</button>
        </div>


        <div className='hero-images'>
          <img src="../images/2.jpg" alt="Small" className="small-image" />
          <img src="../images/1.jpg" alt="Large" className="large-image" />
        </div>



      </section>
    </>
  )
}

export default Hero