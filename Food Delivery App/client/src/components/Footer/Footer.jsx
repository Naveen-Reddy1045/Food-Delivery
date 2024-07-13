import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
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
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Policy</li>
          </ul>
        </div>

        <div className="footer-right">
          <h2>Contact us</h2>
          <ul>
            <li>+1111 111 111</li>
            <li>+8888 888 888</li>
            <li>+9876 543 212</li>
          </ul>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer