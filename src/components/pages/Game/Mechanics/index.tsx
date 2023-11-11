import React from 'react';
import { useTranslation } from 'react-i18next';

import Double from './Double';
import mechanics from './mechanics';

import './styles.scss';

const Mechanics = () => {

  const { t } = useTranslation();

  return (
    <div className='mechanics'>
      <div className='mechanics__case'>
        {mechanics.map(item => (
          <div key={item.name} className='mechanics__block'>
            {item.windowType === 'double' &&
              <Double name={item.name} /> ||
              <>
                <img src={`${process.env.PUBLIC_URL}/assets/game/mechanics/${item.name}.jpg`} className='mechanics__picture'/>
                <div className='mechanics__obscure' />
              </> 
            }
            <span className='mechanics__title text_casual'>
              {t(`game.mechanics.${item.name}.title`)}
            </span>
            <span className='mechanics__text text_little'>
              {t(`game.mechanics.${item.name}.text`)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Mechanics;