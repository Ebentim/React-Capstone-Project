import React from 'react'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <main>
        <Hero/>
        <Highlights/>
        <Testimonials/>
        <About/>
    </main>
  )
}

export default Homepage