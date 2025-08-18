import React from 'react'
import "./About.css"
import banner from '../../assets/about banner/about banner.jpg'
import arrow from "../../assets/info section icons/material-symbols_call.png"
import host from "../../assets/about banner/banner model.png"
function About() {
  return (
    <div className='about'>
      <img src={banner} alt="" />
      <div className='shadow'>
      </div>
       <div className='container'>
            <div>
                <h1>About the Host</h1>
            <p>"I’ve spent 6+ years discovering the real Bali—what most people never get to see. I created BaliwithFlow to share that magic with escapees who crave meaning, depth, and effortless beauty in every detail."</p>
            <div className='button'>
                <p >Book Escape <img src={arrow} alt="" /></p>
                <p className='btn1'>Plan personal trip</p>
            </div>
            </div>
            <div>
                <img className='host' src={host} alt="host" />
            </div>
        </div>
    </div>
  )
}

export default About
