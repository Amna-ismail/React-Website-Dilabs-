import React, { useState } from "react";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";
import "./team.css";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleReadMore = (index) => {
    setSelectedMember(index === selectedMember ? null : index);
  };

  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading
            title={
              <span style={{ color: 'black' }}>
                Our Professional
                <br />
                Expert Team Members
              </span>
            }
            subtitle={
              <span style={{ color: '#483ad3', fontSize: '18px', fontWeight: '600' }}>
                TEAM MEMBERS
              </span>
            }
          />

          <div className='content mtop'>
            {team.slice(0, 4).map((val, index) => (
              <div className='box' key={index}>
                <div className='details' style={{ textAlign: 'center' }}>
                  <div className='img'>
                    <img src={val.cover} alt={val.name} />
                  </div>

                  <label>{val.address}</label>
                  <h4>{val.name}</h4>
                  {selectedMember === index && (
                    <div className='more-info' style={{ marginBottom: '10px' }}>
                      <p>{val.moreInfo}</p>
                    </div>
                  )}
                  <button
                    className='btn-read-more'
                    onClick={() => handleReadMore(index)}
                    style={{
                      display: 'block',
                      margin: '10px auto', // Center the button
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
