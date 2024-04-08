import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../../icons_assets/Logo.svg';
import basket from '../../icons_assets/Basket.svg';
import './Navigation.css';

const navItems = {
  Home: {
    title: "Home",
    path: "/",
  },
  About: {
    title: "About",
    path: "/#about"
  },
  Menu: {
    title: "Menu",
    path: "/menu"
  },
  Reservation: {
    title: "Reservation",
    path: "/reservation"
  },
  Login: {
    title: "Login",
    path: "/login"
  }
};

const NavigationBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = (e) => {
    setOpenMenu(!openMenu);
  };

  return (
    <header id={window.innerWidth <= 767 ? "mobile" : ""} className={openMenu? "background": ''}>
      {window.innerWidth <= 767 ?
        <nav id='mobile-screen'>
          <FontAwesomeIcon icon={faBars} size='2xl' className={`hamburger ${openMenu? 'none': ''}`} onClick={handleMenu} />
          {openMenu ? <ul className='mobile-navbar-list'>
            {Object.entries(navItems).map(([key, value]) => (
              <li key={key}>
                <Link to={value.path} aria-label={value.title}>{value.title}</Link>
              </li>
            ))}
          </ul>: ""}
          <FontAwesomeIcon icon={faTimes} size='2xl' className={`menu-close ${openMenu? '': "none"}`} onClick={handleMenu} />
          <img id="mobile-logo" src={logo} alt='logo' className={`hamburger ${openMenu? 'none': ''}`}/>
          <div id="cart" className={`hamburger ${openMenu? 'none': ''}`}>
            <img src={basket} alt="shopping basket" />
          </div>
        </nav> :
        <nav id='desktop-screen'>
          <img src={logo} alt='logo' />
          <ul className='navbar-list'>
            {Object.entries(navItems).map(([key, value]) => (
              <li key={key}>
                <Link to={value.path} aria-label={value.title}>{value.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      }
    </header>
  );
};

export default NavigationBar;
