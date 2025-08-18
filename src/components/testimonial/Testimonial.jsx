import React, { useState, useEffect } from 'react'
import "./Testimonial.css"
import Data from "../../utils/testimonials.js"
import rightArrow from "../../assets/testimonials assets/arrow right.png"
import leftArrow from "../../assets/testimonials assets/arrow left.png"

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(3)

  
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3) // Desktop
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2) 
      } else {
        setCardsToShow(1) 
      }
    }

    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  
  useEffect(() => {
    setCurrentIndex(0)
  }, [cardsToShow])

  const nextSlide = () => {
    const maxIndex = Data.length - cardsToShow
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1)
  }

  const prevSlide = () => {
    const maxIndex = Data.length - cardsToShow
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1)
  }

  const getVisibleCards = () => {
    return Data.slice(currentIndex, currentIndex + cardsToShow)
  }

  return (
    <div className='testimonials'>
      <h1>What our escapees says about us</h1>
      <p>See how escapees from around the world experienced the real Bali — curated with care, heart, and local soul.</p>

      <div className='slider-wrapper'>
        <div className='card-container'>
          {getVisibleCards().map((item, index) => {
              return (
                  <div className='card' key={currentIndex + index}>
                          <div className='stars'>
                              <img src={item.star} alt="star" />
                              <img src={item.star} alt="star" />
                              <img src={item.star} alt="star" />
                              <img src={item.star} alt="star" />
                              <img src={item.star} alt="star" />
                          </div>
                          <p className='description'>{item.description}</p>
                          <div className='profile'>
                              <img src={item.path} alt="profile" />
                              <div className='profile-text'>
                                <p className='name'>{item.name}</p>
                                <p className='city'>{item.city}</p>
                              </div>
                          </div>
                  </div>
              )
          })}
        </div>
      </div>

      <div className="button">
        <img 
          className='left' 
          src={leftArrow} 
          alt="previous" 
          onClick={prevSlide}
        />
        <img 
          className='right' 
          src={rightArrow} 
          alt="next" 
          onClick={nextSlide}
        />
      </div>
    </div>
  )
}

export default Testimonial