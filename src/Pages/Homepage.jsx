import React from 'react'
import Hero from '../components/Main_Hero/Hero'
import Highlights from '../components/highlights/Highlights'
import Testimonials from '../components/Testimonials/Testimonials'
import About from '../components/About/About'

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