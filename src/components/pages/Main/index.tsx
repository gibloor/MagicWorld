import React from 'react'

import Introduction from './Introduction'
import ActualNews from './ActualNews'
import ShortInfo from './ShortInfo'
import Advertising from './Advertising'

import './styles.scss'

const Main = () => {
  
  return (
    <div className='main'>
      <Introduction />
      <ActualNews />
      <ShortInfo />
      <Advertising />
    </div>
  )
}

export default Main