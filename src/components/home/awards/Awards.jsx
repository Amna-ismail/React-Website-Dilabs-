import React from "react"
import Heading from "../../common/Heading"
import { awards } from "../../data/Data"
import "./awards.css"

const Awards = () => {
  return (
    <>
      <section className='awards padding'>
        <div className='container'>
        <Heading 
            title={
              <span style={{ color: '#000', fontSize: '35px',fontWeight: 'bold' }}>
                Brighter future when <br /> 
                strategically more prepared
              </span>
            }
            subtitle={
              <span style={{ color: '#483ad3', fontSize: '19px', fontWeight: '600' }}>
                How we work
              </span>
            }
          />

          <div className='content grid4 mtop'>
            {awards.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                <img src={val.icon} alt={`Icon ${val.num}`} />

                </div>
                <h1 style={{ color: '#483ad3'}}>{val.num}</h1>
                <p style={{ color: '#000', fontSize: '18px',fontWeight: 'bold' }}>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards
