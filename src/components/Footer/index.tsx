import React from 'react'

import megu from './megu-rolling.gif'
import rem from './rem-rolling.gif'
import rikka from './rikka-rolling.gif'

import linkedIn from './linkedIn.png'
import gitHub from './gitHub.png'

import './styles.scss'

const Footer = () => {

  return (
    <div className='footer'>
      <span>
        Made by Gibloor.<br/> Just done for practice in web animation
      </span>

      <div className='footer__anime-rolling'>
        <img
          className='footer__rolling'
          src={megu}
        />
        <img
          className='footer__rolling'
          src={rikka}
        />
        <img
          className='footer__rolling'
          src={rem}
        />
      </div>

      <div className='footer__links'>
        <a href="https://www.linkedin.com/in/nikita-kubrakov-131792213/" target="_blank" rel="noreferrer">
          <img src={linkedIn} />
        </a>
        
        <a href="https://github.com/gibloor" target="_blank" rel="noreferrer">
          <img src={gitHub} />
        </a>
      </div>
    </div>
  )
}

export default Footer