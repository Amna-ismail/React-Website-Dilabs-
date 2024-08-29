import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
        <Heading 
            title={
              <span style={{ color: '#000', fontWeight: 'bold' }}>
                Check out our blog posts
              </span>
            }
            subtitle={
              <span style={{ color: '#483ad3', fontSize: '18px', fontWeight: '600' }}>
                News & Events
              </span>
            }
          />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
