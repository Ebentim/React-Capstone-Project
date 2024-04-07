import React from 'react'
import logo from '../../icons_assets/Logo.svg'
import './Navigation.css'
const navItems = {
  Home:{
    title: "Home",
    paths: "/",
  },
  About:{
    title: "About",
    paths: "/#about"
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

const NavigationBar = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt='logo'/>
        <ul className='navbar-list'>
          {Object.keys(navItems).map(key => {
              return (
                <li key={key}>
                  <a href={navItems[key].paths} aria-description={navItems[key].title}>{navItems[key].title}</a>
                </li>
              )
          }
          )}
        </ul>
      </nav>
    </header>
  )
}

export default NavigationBar