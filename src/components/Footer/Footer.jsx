import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import Banner from "../../assets/footer/footer banner.png"
import FooterLogo from "../../assets/footer/Content.png"
function Footer() {
  return (
    <div className='footer'>
      <img src={Banner} alt="" />
      <div className='banner-overlay'>
        <div className='row1'>
            <img src={FooterLogo} alt="" />
            <ul>
                <li>Home</li>
                <li>Experiences</li>
                <li>Guide</li>
                <li>Itineraries</li> 
                <li>FAQ</li>
            </ul>
        </div>
        <div className='row2'>
            <p className=''>© 2024 Bali With Flow. All rights reserved.</p>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookies Settings</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
