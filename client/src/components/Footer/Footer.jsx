import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-left">
          <h2>We deliver to</h2>
          <ul>
            <li>Bangalore</li>
            <li>Hyderabad</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Vishakapatnam</li>
            <li>Pune</li>
          </ul>

        </div>

        <div className="footer-center">
          <h1>Ziggy</h1>
          <ul>
            <li onClick={goToHome}>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Policy</li>
          </ul>
        </div>

        <div className="footer-right">
          <h2>Contact us</h2>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
          <ul>
            <li>+91 9391802669</li>
            <li>akiharshith@gmail.com</li>
            <li>vdnaveenreddy@gmail.com</li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Footer