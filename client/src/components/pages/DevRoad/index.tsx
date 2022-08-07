import React from 'react';

import Improvements from './Improvements';

import './styles.scss';

const devRoad = () => {

  return (
    <div className='dev-road'>
      <span>
        Plan on next 50 years
      </span>
      <Improvements />
      <div className='dev-road__'>

      </div>
    </div>
  )
}

export default devRoad;