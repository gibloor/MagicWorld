import React from 'react';

import picture from 'components/assets/temporary/newsPicture.png';

import './styles.scss';

const newsPool = [
  {
    title: 'New Magical Artifact Unveiled!',
    date: '18.01.22',
    picture: 'news-1',
    text: 'A mysterious magical artifact has been discovered in the world of MagicWorld. Experts are currently unable to decipher its properties, but it is already generating immense interest among wizards and researchers.'
  },
  {
    title: 'Magic School Completed',
    date: '4.06.22',
    picture: 'news-2',
    text: 'In MagicWorld, the construction of a state-of-the-art magic school has been completed. Future wizards will be learning new spells and magical arts within its walls. The school\'s grand opening is scheduled for the coming weeks.'
  },
  {
    title: 'Magical Tournament',
    date: '24.09.22',
    picture: 'news-3',
    text: 'The upcoming magical tournament in MagicWorld promises to be thrilling! Participants can expect new challenges, mysterious labyrinths, and, of course, magical prizes. Get ready for an epic showdown!'
  },
  {
    title: 'New Magical Creature Discovered',
    date: '7.04.23',
    picture: 'news-4',
    text: 'Researchers in MagicWorld report the discovery of a new magical creature. It possesses extraordinary abilities and will make an excellent companion for those who dare to tame it.'
  },
];

const ActualNews = () => {

  return (
    <div className='actual-news'>
      {newsPool.map(news => (
        <div key={news.title} className='actual-news__case'>
          <img src={`/MagicWorld/assets/main/news/${news.picture}.jpg`} alt='about news' className='actual-news__picture'/>
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