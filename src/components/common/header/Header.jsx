import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='logo' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='icons flex'>
            {/* Magnifying Glass Icon */}
            <i
              className='fa fa-search icon-btn'
              style={{ fontSize: "20px",  margin: "0 18px" }} 
              onClick={() => setSearchVisible(!searchVisible)}
            ></i>

            {/* Search Input Field */}
            {searchVisible && (
              <input type='text' className='search-input' placeholder='Search...' />
            )}


            {/* Hamburger Menu Icon */}
            <i
              className={navList ? 'fa fa-times icon-btn' : 'fa fa-bars icon-btn'}
              style={{ fontSize: "20px" }} 
              onClick={() => setNavList(!navList)}
            ></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
