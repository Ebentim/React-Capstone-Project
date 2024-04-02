import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../icons_assets/Logo.svg'
const NavigationBar = () => {
  const navItems = {
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
  return (
    <header>
      <nav>
        <img src={logo} alt='logo'/>
        <ul className='navbar-list'>
          {Object.keys(navItems).map(key => {
            if(navItems[key] !== 'About'){
              return(
                <li key={key}>
              <Link to={navItems[key].paths} aria-description={navItems[key].title}>{navItems[key].title}</Link>
            </li>
              )
            } else{
              return (
                <li key={key}>
                  <a href={navItems[key].paths} aria-description={navItems[key].title}>{navItems[key].title}</a>
                </li>
              )
            }
          }
          )}
        </ul>
      </nav>
    </header>
  )
}

export default NavigationBar