import React, { useEffect, useState } from 'react';

import frame from 'components/assets/magicLib/frame.png';
import leftDoor from 'components/assets/magicLib/leftDoor.png';
import rightDoor from 'components/assets/magicLib/rightDoor.png';
import portal from 'components/assets/magicLib/portal.gif';

import './styles.scss';

const MagicLib = () => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className='magic-lib'>
      <div className="magic-lib__doors">
        <div className='magic-lib__portal_case'>
          <img className='magic-lib__portal' src={portal} />
        </div>
        <img src={frame} className="magic-lib__door-frame" />
        <img
          className="magic-lib__door-left" src={leftDoor}
          style={{transform: offset < 390 && `rotateY(calc(${offset}deg / 3))` || '-130deg'}}
        />
        <img
          className="magic-lib__door-right" src={rightDoor}
          style={{transform: offset < 390 && `rotateY(calc(${offset}deg / 3))` || '-130deg'}}  
        />
      </div>
    </div>
  )
};

export default MagicLib;