import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

const Authorization = () => {
  const { t } = useTranslation();

  return (
    <div className='authorization'>
      <span className='authorization__button button_little'>
        {t('header.auth.sign-in')}
      </span>
      <span className='authorization__button button_little'>
        {t('header.auth.sign-up')}
      </span>
    </div>
  )
}

export default Authorization;