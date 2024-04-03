import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../icons_assets/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
const dormat = {
    Home:{
        title: "Home",
        paths: "/",
      },
      About:{
        title: "About",
        paths: "#about"

      },
      Menu:{
        title: "Menu",
        paths: "/menu"
      },
      Reservation:{
        title: "Reservation",
        paths :"/reservation"
      },
      Login: {
        title: "Login",
        paths: "/login"
      }
}
const Footer = () => {
  return (
    <section id='footer'>
        <img src={Logo} alt="little lemon restaurant logo" />
        <div id="navigation-links">
            <h4>Navigation</h4>
            {Object.keys(dormat).map(key => {
            if(dormat[key] !== 'About'){
              return(
              <Link key={key} to={dormat[key].paths} aria-description={dormat[key].title}>{dormat[key].title}</Link>
              )
            } else{
              return (
                  <a key={key} href={dormat[key].paths} aria-description={dormat[key].title}>{dormat[key].title}</a>
              )
            }
          }
          )}
        </div>
        <div id='contact-information'>
            <h4>Contact</h4>
            <p>2395 Maldove Way,</p>
            <p>Chicago Illinois</p>
            <a href='tel:(123)-456-7890'>(123)-456-7890</a>
            <a href="mailto:care@littlelemonrestaurant.com">care@littlelemonrestaurant.com</a>
        </div>
        <div id='social-media'>
            <h4>Connect</h4>
            <a href="https://facebook.com/little-lemon">
            <FontAwesomeIcon icon={faFacebook} />
            <span>Little Lemon Restaurant</span>
            </a>
            <a href='https://instagram.com/little-lemon'>
                <FontAwesomeIcon icon={faInstagram}/>
                <span>@littleLemon</span>
            </a>
            <a href='https://x.com/little-lemon'>
                <FontAwesomeIcon icon={faX}/>
                <span>@littleLemon</span>
            </a>
        </div>
    </section>
  )
}

export default Footer