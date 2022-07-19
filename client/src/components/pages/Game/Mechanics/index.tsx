import React from 'react';

import mechanics from './mechanics';

import './styles.scss';

const Mechanics = () => {

  return (
    <div className='mechanics'>
      <div className='mechanics__case'>
        {mechanics.map(item => (
          <div key={item.name} className='mechanics__block'>
            <img src={`assets/game/mechanics/${item.name}.jpg`} className='mechanics__picture'/>
            <span className='mechanics__title text_casual'>
              title {item.name}
            </span>
            <span className='mechanics__text text_little'>
              text {item.name}
            </span>
            <div className='mechanics__obscure' />
          </div>
        ))}
      </div>
    </div>
  )
};

export default Mechanics;