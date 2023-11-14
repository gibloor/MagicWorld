import React from 'react'
import { Link } from 'react-router-dom'

import baseRoad from 'components/assets/magicWays/pedestals/baseRoad.png'
import fon from 'components/assets/magicWays/pedestals/fon.jpg'
import hover from './hover.gif'

import './styles.scss'

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
          <Link
            key={road}
            className='pedestals__way'
            to='violet'
            // to={`${road}`}
          >
            <img src={`/MagicWorld/assets/magicWays/${road}/book.png`} className='pedestals__book' />
            <img src={`/MagicWorld/assets/magicWays/${road}/road.png`} className='pedestals__road' />
            <img src={hover} className='pedestals__hover'/>
          </Link>
        ))}
      </div>
      <img src={baseRoad} className='pedestals__base-roads'/>
    </div>
  )
}

export default Pedestals