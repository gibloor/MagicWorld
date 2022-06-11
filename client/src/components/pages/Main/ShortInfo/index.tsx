import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import './styles.scss';

const ShortInfo = () => {

  const locations = [
    'desert',
    'forest',
    'skull',
    'lava',
  ];

  const [locationNum, setLocationNum] = useState(0);
  // const [heroNum, setHeroNum] = useState(0);

  useEffect(() => {
    let newNum: number

    if (locationNum < locations.length - 1) {
      newNum = locationNum + 1
    } else {
      newNum = 0
    }
    
    const locationTimer = setTimeout(() => {
      setLocationNum(newNum)
    }, 6000)

    return () => clearTimeout(locationTimer)
  }, [locationNum]);

  // useEffect (() => {
  //   const heroTimer = setTimeout(() => {
  //     setHeroNum(heroNum + 1)
  //   }, 4000);

  //   return () => clearTimeout(heroTimer);
  // }, [heroNum]);

  return (
    <div className='short-info'>
      <div className='short-info__case'>
        {locations.map((location, index) => (
          <div
            key={location}
            className={classNames(
              {'short-info__location_block': true},
              {'hide': index !== locationNum},
            )}
          >
            <img 
              className='short-info__location'
              src={`assets/gameContent/locations/${location}.jpg`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShortInfo;