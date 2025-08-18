import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Like.css"
import LikeData from "../../utils/like"
import rightArrow from "../../assets/testimonials assets/arrow right.png"
import leftArrow from "../../assets/testimonials assets/arrow left.png"

function Like() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(3)
  
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1)
      } else if (window.innerWidth < 992) {
        setCardsToShow(2)
      } else {
        setCardsToShow(3)
      }
    }
    
    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])
  
  const handlePrev = () => {
    setCurrentIndex(prev => 
      prev === 0 ? Math.max(0, LikeData.length - cardsToShow) : prev - 1
    )
  }
  
  const handleNext = () => {
    setCurrentIndex(prev => 
      prev >= LikeData.length - cardsToShow ? 0 : prev + 1
    )
  }
  
  const visibleCards = LikeData.slice(currentIndex, currentIndex + cardsToShow)

  return (
    <div className='like'>
      <h1>You may also like</h1>
      <div className='card-container'>
        {visibleCards.map((item, index) => {
          return (
            <div key={currentIndex + index} className='card1'>
              <div className='image-container'>
                {item.image && item.image.length > 0 && (
                  <img src={item.image[0].path} alt={item.title || ""} />
                )}
              </div>
              <div className="card-content">
                <div className="card-header">
                  {item.location_logo && item.location && (
                    <div className='lg'>
                      <img src={item.location_logo} alt="" />
                      <p>{item.location}</p>
                    </div>
                  )}
                  {item.group_logo && item.group && (
                    <div className='lg'>
                      <img src={item.group_logo} alt="" />
                      <p>{item.group}</p>
                    </div>
                  )}
                  {item.type && <p className='type'>{item.type}</p>}
                </div>
                {item.title && <h2 className='title'>{item.title}</h2>}
                {item.amount && <h2 className='amount'>{item.amount}</h2>}
                {item.description && <p className="description">{item.description}</p>}
              </div>
              <div className="card-actions">
                {item.book && <button>{item.book}</button>}
                {item.read && (
                  <Link to="#" onClick={(e) => e.preventDefault()}>
                    <p className='read'>{item.read}</p>
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {LikeData.length > cardsToShow && (
        <div className="slide">
          <img 
            className='left' 
            src={leftArrow} 
            alt="previous" 
            onClick={handlePrev}
            style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
          />
          <img 
            className='right' 
            src={rightArrow} 
            alt="next" 
            onClick={handleNext}
            style={{ opacity: currentIndex >= LikeData.length - cardsToShow ? 0.5 : 1 }}
          />
        </div>
      )}
    </div>
  )
}

export default Like