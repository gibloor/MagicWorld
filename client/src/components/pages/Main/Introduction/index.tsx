import React from 'react';
import { osName } from "react-device-detect";
import { useTranslation } from 'react-i18next';

import fonVideo from 'components/assets/main/fonVideo.mp4';
import nameGame from 'components/assets/main/nameGame.png';
import gameSymbol from 'components/assets/gameSymbol.png';

import './styles.scss';

const Introduction = () => {

  const { t } = useTranslation();

  return (
    <div className='introduction'>
      <div className='introduction__video_case'>
        <video autoPlay loop muted playsInline className='introduction__video'>
          <source src={fonVideo} />
        </video>
        {/* delete if have cinematic */}
        <span className='introduction__video_explanation text_big'>
          Of course I don't have my own cinematics
        </span>     
      </div>
      <div className='introduction__case'>
        <div className='introduction__left'>
          <div className='introduction__game_marks'>
            <img src={nameGame} className='introduction__game_name' alt='name of game' />
            <img src={gameSymbol} className='introduction__game_symbol' alt='game symbol' />
          </div>
          {/* change on click if game exist */}
          {osName === 'Mac OS' &&
            <a
              className='button_casual text_title'
              href='components/assets/main/MacOS.jpg'
              download
            >
              {t('main.introduction.mac')}
            </a> ||
          osName === 'Windows' &&
            <a
              className='button_casual text_title'
              href='components/assets/main/Windows.png'
              download
            >
              {t('main.introduction.windows')}
            </a> ||
            <span className='text_title'>
              {t('main.introduction.other')}
            </span>
          }
        </div>
        {/* change on click if game exist */}
        <span className='text_big introduction__big-text'>
          {t('main.introduction.big-text')}
        </span>
      </div>
    </div>
  )
}

export default Introduction;