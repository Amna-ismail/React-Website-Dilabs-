import React from "react"
import { price } from "../../data/Data"

const PriceCard = () => {
  return (
    <>
      <div className='content flex mtop'>
        {price.map((item, index) => (
          <div className='box shadow' key={index}>
          
          <img src={item.image} alt={item.plan} /> {/* Image above the card */}
           
            <p style={{ marginBottom: '15px', color: '#757575'  }}>{item.ptext}</p>  
            <h3 style={{ marginBottom: '10px' }}>{item.plan}</h3>
            <div className='price-arrow'>
              <h2 style={{ fontWeight: 'bold', display: 'inline' }}>
                {item.price}
              </h2>
              <i
                className='fa-solid fa-arrow-right'
                style={{
                  fontWeight: 'bold',
                  marginLeft: '10px',
                }}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default PriceCard
