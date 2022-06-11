import React from 'react';

import planet from 'components/assets/header/planet.png';

import './styles.scss';

const LangChanger = () => {
  return (
    <div className='lang-changer'>
      <img src={planet} className='lang-changer__img' />
    </div>
  )
}

export default LangChanger;