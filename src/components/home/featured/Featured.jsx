import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading 
            title={
              <span style={{ color: '#000', fontWeight: 'bold' }}>
                Turn Information <br /> 
                Into Actionable Insights
              </span>
            }
            subtitle={
              <span style={{ color: '#483ad3', fontSize: '18px', fontWeight: '600' }}>
                Service were offering.
              </span>
            }
          />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}
export default Featured
