import React from 'react'

import megu from './megu-rolling.gif'
import rem from './rem-rolling.gif'
import rikka from './rikka-rolling.gif'

import './styles.scss'

const Footer = () => {

  return (
    <div className='footer'>
      <span className='footer__title'>
        Footer
      </span>

      <div className='footer__block'>
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

      <span className='footer__title'>
        Footer End
      </span>
    </div>
  )
}

export default Footer