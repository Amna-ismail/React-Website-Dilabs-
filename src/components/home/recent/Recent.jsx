import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {



  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading   title={
        <span style={{ color: 'black' }}>
          Providing the best service
          <br />
          In digital marketing
        </span>
      } />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
