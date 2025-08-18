import React from 'react'
import { Routes, Route } from 'react-router-dom'

// import components
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import InfoSection from './components/InfoSection/InfoSection'
import About from './components/About/About'
import Testimonial from './components/testimonial/Testimonial'
import Like from './components/Like/Like'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <InfoSection/>
        <About/>
        <Testimonial/>
        <Like/>
        <Footer/>
      </div>
    </>
  )
}

export default App
