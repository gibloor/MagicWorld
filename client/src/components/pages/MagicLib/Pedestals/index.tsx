import React from 'react';
import { Link } from 'react-router-dom';

import baseRoad from 'components/assets/magicLib/pedestals/baseRoad.png';
import fon from 'components/assets/magicLib/pedestals/fon.jpeg';

import './styles.scss';

const Pedestals = () => {

  const roads = [
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'blue',
    'violet'
  ]
  
  return (
    <div className='pedestals'>
      <img src={fon} className='pedestals__fon' />
      <div className='pedestals__ways'>
        {roads.map(road => (
          <div key={road} className='pedestals__way'>
          <Link to={`${road}`}>
            <img src={`assets/magicLib/pedestals/${road}Book.png`} className='pedestals__book pedestals__unhover' />
            <img src={`assets/magicLib/pedestals/${road}Book.png`} className='pedestals__book pedestals__hover' />
            <img src={`assets/magicLib/pedestals/${road}Road.png`} className='pedestals__road pedestals__unhover' />
            <img src={`assets/magicLib/pedestals/${road}Road.png`} className='pedestals__road pedestals__hover' />
          </Link>
          </div>
        ))}
      </div>
      <img src={baseRoad} className='pedestals__base-roads'/>
    </div>
  )
};

export default Pedestals;