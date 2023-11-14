import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import LangChanger from './LangChanger'
import Authorization from './Authorization'

import logo from 'components/assets/header/logo.png'
import menu from './menu.svg'
import close from './close.svg'

import './styles.scss'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='header'>
      <Link to='/MagicWorld' className='header__logo_case'>
        <img src={logo} alt='logo' className='header__logo' />
      </Link>

      <img
        className='header__hamburger'
        alt='Hamburger menu'
        src={menu}
        onClick={() => setShowMenu(!showMenu)}
      />
      
      <div className={`header__menu ${!showMenu ? 'header__hide-menu' : ''}`}>
        <div className='header__close-button_container' onClick={() => setShowMenu(!showMenu)}>
          <img className='header__close-button' src={close} />
        </div>
        <Navigation hideMenu={() => setShowMenu(false)} />
        <div className='header__right-side'>
          <LangChanger />
          <Authorization />
        </div>
      </div>
    </div>
  )
}

export default Header