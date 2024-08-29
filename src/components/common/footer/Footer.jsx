import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Do You Need Help?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straight <br />  
                to your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>

              {/* Social Media Icons */}
              <div className='social-icons'>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                  <FaFacebookF />
                </a>
                <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedinIn />
                </a>
                <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className='box' key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, idx) => (
                  <li key={idx}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2024 RentUP. Designed By Amna Ismaeel.</span>
      </div>
    </>
  )
}

export default Footer
