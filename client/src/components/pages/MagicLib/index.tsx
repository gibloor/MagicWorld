import React, { useEffect, useState } from 'react';

import Doors from './Doors';
import Pedestals from './Pedestals';

import './styles.scss';

const MagicLib = () => {

  const [moovIn, setMoovIn] = useState(false);

  const getMoovIn = () => {
    const moovInTimer = setTimeout(() => {
      setMoovIn(true)
    }, 1000);
    return () => clearTimeout(moovInTimer);
  }

  return (
    <div className='magic-lib'>
      {!moovIn &&
        <Doors moovIn={moovIn} getMoovIn={getMoovIn} /> ||
        <Pedestals />
      }
    </div>
  )
};

export default MagicLib;