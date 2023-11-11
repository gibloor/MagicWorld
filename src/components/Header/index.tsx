import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import LangChanger from './LangChanger';
import Authorization from './Authorization';

import logo from 'components/assets/header/logo.png';

import './styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/MagicWorld' className='header__logo_case'>
        <img src={logo} alt='logo' className='header__logo' />
      </Link>
      <Navigation />
      <div className='header__right-side'>
        <LangChanger />
        <Authorization />
      </div>
    </div>
  )
}

export default Header;