import React from 'react';

import picture from 'components/assets/temporary/newsPicture.png';

import './styles.scss';

//before adding DB
//change code after adding DB
const newsPool = [
  {
    title: 'news1',
    date: '18.01.22',
    picture: picture,
    text:'sdqwewerfwefwf wefwefwe wefewfwefwe fwefwfwfew'
  },
  {
    title: 'news12',
    date: '18.01.22',
    picture: picture,
    text:'sdqwewerfwefwf wefwefwe wefewfwefwe fwefwfwfew reteterterter wefwefrw werwer ewrwer we we werwsdcew wfwefwdfer'
  },
  {
    title: 'news13',
    date: '18.01.22',
    picture: picture,
    text:'sdqwewerfwefwf wefwefwe'
  },
  {
    title: 'news4',
    date: '18.01.22',
    picture: picture,
    text:'sdqwewerfwefwf wefwefwe wefewfwefwe fwefwfwfew reteterterter wefwefrw werwer ewrwer we we werwsdcew wfwefwdfer'
  },
];

const ActualNews = () => {

  return (
    <div className='actual-news'>
      {newsPool.map(news => (
        <div key={news.title} className='actual-news__case'>
          <img src={news.picture} alt='about news' className='actual-news__picture'/>
          <div className='actual-news__block_case'>
            <div className='actual-news__block'>
              <span className='text_casual'>
                {news.date}
              </span>
              <span className='text_title actual-news__title'>
                {news.title}
              </span>
            </div>
            <span className='text_little actual-news__text'>
              {news.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
};

export default ActualNews;