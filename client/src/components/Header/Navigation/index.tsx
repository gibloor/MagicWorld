import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import pages from './pages';

import './styles.scss';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <div className='navigation'>
      {pages.map(page => (
        <Link to={`${page.title}`} key={page.title} className='navigation__page_case'>
          <span className='navigation__page text_title'>
            {t(`header.navigation.${page.title}`)}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Navigation;