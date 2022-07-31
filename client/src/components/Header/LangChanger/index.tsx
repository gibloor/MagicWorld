import React from 'react';
import i18n from 'i18n';

import planet from 'components/assets/header/planet.png';

import './styles.scss';

const LangChanger = () => {

  const langs = [
    'en',
    'ruasd', 
    // 'sadsdasd', 'sadsdasd', '123', 'sadsdasd'
  ];

  return (
    <div className='lang-changer'>
      <img src={planet} className='lang-changer__img' />
      <div className='lang-changer__case'>
        {langs.map(lang => (
          <span key={lang}
            onClick={() => (i18n.changeLanguage(lang))}
          >
            {lang}
          </span>
        ))}
      </div>
    </div>
  )
}

export default LangChanger;