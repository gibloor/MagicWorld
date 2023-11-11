import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import planet from 'components/assets/header/planet.png';

import './styles.scss';

const LangChanger = () => {

  const { i18n } = useTranslation();

  const langs = [
    'en',
    'pl',
  ];

  return (
    <div className='lang-changer'>
      <img src={planet} className='lang-changer__img' />
      <div className='lang-changer__window_case'>
        <div className='lang-changer__window'>
          {langs.map(lang => (
            <span key={lang}
              onClick={() => i18n.changeLanguage(lang)}
              className={classNames(
                {'lang-changer__lang': true},
                {'lang-changer__lang_selected': i18n.language === lang}
              )}
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LangChanger;