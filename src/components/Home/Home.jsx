import React from 'react'
import './Home.css'
//import icons
import World from "../../assets/hero icons/bx_world.png"
import People from "../../assets/hero icons/ic_baseline-people.png"
import MaterialTrip from "../../assets/hero icons/material-symbols_trip.png"
import Timer from "../../assets/hero icons/timer.png"
import Location from "../../assets/hero icons/tdesign_location-filled.png"
//import image
import imageOne from '../../assets/hero section assets/hero_image1.png'
import imageTwo from '../../assets/hero section assets/hero_image2.png'
import imageThree from '../../assets/hero section assets/hero_image3.png'
import imageFour from '../../assets/hero section assets/hero_image4.png'
import imageFive from '../../assets/hero section assets/hero_image5.png'
import imageSix from '../../assets/hero section assets/hero_image6.png'
function Home() {
  return (
    <section className='hero'>
      <div className="image-container">
        <div className='column-one'>
            <img src={imageOne} alt="imageOne" />
            <img src={imageTwo} alt="imageTwo" />
        </div>
        <div className='column-two'>
            <img src={imageThree} alt="imageThree" />
        </div>
        <div className='column-one'>
            <img src={imageFour} alt="imageFour" />
            <img src={imageFive} alt="imageFive" />
        </div>
        <div className='column-two'>
            <img src={imageSix} alt="imageSix" />
        </div>
      </div>

      <div className='hero-text'>
        <h1>Balinese Day with a Local Family</h1>
        <p>Immerse yourself in the heart of Balinese culture by spending a day with a local family. This authentic experience offers a unique glimpse into daily life, traditions, and the warmth of Balinese hospitality.</p>
      </div>

      <div className='hero-section-three'>
          <div className='hero-section-three-items'>
            <div>
              <img src={Location} alt="Location" />
              <p>Location</p>
            </div>
            <p>Kaleki</p>
          </div>
          <div className='hero-section-three-items'>
            <div>
              <img src={Timer} alt="Timer" />
              <p>Duration</p>
            </div>
            <p>Morning 9 - 12</p>
          </div>
          <div id='esc' className='hero-section-three-items'>
            <div>
              <img src={People} alt="People" />
              <p>Escapees</p>
            </div>
            <p>8</p>
          </div>
          <div className='hero-section-three-items'>
            <div>
              <img src={MaterialTrip} alt="MaterialTrip" />
              <p>Type of trip</p>
            </div>
            <p>Privet</p>
          </div>
          <div className='hero-section-three-items'>
            <div>
              <img src={World} alt="World" />
              <p>Category</p>
            </div>
            <p>Full day trip</p>
          </div>
      </div>
    </section>
  )
}

export default Home
