import React from 'react'
import Home from './components/Psection'
import HeroSection from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



export default function page() {
  return (

  <>
  <Navbar/>
    <HeroSection />
    <Home/>

    <Footer />
  </>
  )
}
