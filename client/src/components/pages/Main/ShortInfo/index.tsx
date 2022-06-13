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

  return (
    <div className='short-info'>
      {locations.map((location, index) => (
        <div
          key={location}
          className={classNames(
            {'short-info__location_hiding': true},
            {'short-info__location_new': index === locationNum},
            {'short-info__location_old': index === locationNum - 1 || (locationNum === 0 && index === locations.length - 1)},
          )}
        >
          <img
            className={classNames(
              {'short-info__location_picture': true},
              {'short-info__location_picture_old': index === locationNum - 1 || (locationNum === 0 && index === locations.length - 1)},
            )}
            src={`assets/gameContent/locations/${location}.jpg`}
          />
        </div>
      ))}
    </div>
  )
}

export default ShortInfo;