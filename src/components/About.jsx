import React, { useEffect, useState } from 'react'
import mario from '../icons_assets/MarioandAdrianb.jpg'
import chef from '../icons_assets/restaurantchefB.jpg'
const About = () => {

  return (
    <section id='about'>
        <div id="about-text">
            <h2 id="about-title">Little Lemon</h2>
            <h3 id="about-subtitle">Chicago</h3>
            <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
        </div>
        <div id="about-image">
            <img src={mario} alt="Mario and Adrian" />
            img? <img src={chef} alt="a chef preparing a meal" />
        </div>
    </section>
  )
}

export default About