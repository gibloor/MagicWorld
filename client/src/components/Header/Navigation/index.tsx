import React from 'react';
import { Link } from 'react-router-dom';

import pages from './pages';

import './styles.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      {pages.map(page => (
        <Link to={`${page.title}`} key={page.title} className='navigation__page_case'>
          <span className='navigation__page text_title'>
            {page.title}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Navigation;