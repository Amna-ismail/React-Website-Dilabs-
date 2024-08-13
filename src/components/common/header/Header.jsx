import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false); // State for sign-in form visibility
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign-in and sign-up forms

  const handleSignInClick = () => {
    setShowSignIn(!showSignIn);
    setIsSignUp(false); // Reset to sign-in form when modal opens
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp); // Toggle between sign-in and sign-up forms
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const url = isSignUp ? 'http://localhost:5000/api/users/signup' : 'http://localhost:5000/api/users/signin';


    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'Success');
        if (!isSignUp) {
          localStorage.setItem('token', data.token); // Save JWT token if sign-in
        }
        setShowSignIn(false);
      } else {
        alert(`Error: ${data.message || 'An error occurred'}`);
      }
    } catch (err) {
      alert(`Fetch error: ${err.message}`);
    }
  };

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
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
          <div className='button flex'>
           
            <button className='btn1' onClick={handleSignInClick}>
              <i className='fa fa-sign-out'></i> {isSignUp ? "Sign Up" : "Login"}
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </div>
        </div>
      </header>

      {/* Sign In/Sign Up Form */}
      {showSignIn && (
        <div className='sign-in-form'>
          <div className='form-container'>
            <button className='close-btn' onClick={handleSignInClick}>
              <i className='fa fa-times'></i>
            </button>
            <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
            <form onSubmit={handleFormSubmit}>
              <label>Email:</label>
              <input type='email' name='email' required />
              <label>Password:</label>
              <input type='password' name='password' required />
              <button type='submit' className='submit-btn'>
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>
            <p>
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <button className='link-btn' onClick={toggleForm}>
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <button className='link-btn' onClick={toggleForm}>
                    Sign Up
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
