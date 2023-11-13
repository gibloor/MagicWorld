import React from 'react'
import { osName } from "react-device-detect"
import { useTranslation } from 'react-i18next'

import LinkButton from 'components/components/LinkButton'

import fonVideo from 'components/assets/main/fonVideo.mp4'
import nameGame from 'components/assets/main/nameGame.png'
import gameSymbol from 'components/assets/gameSymbol.png'

import './styles.scss'

const Introduction = () => {
  const { t } = useTranslation()

  return (
    <div className='introduction'>
      <div className='introduction__video_case'>
        <video autoPlay loop muted playsInline className='introduction__video'>
          <source src={fonVideo} />
        </video>
      </div>
      
      <div className='introduction__case'>
        <div className='introduction__left'>
          <div className='introduction__game_marks'>
            <img
              src={nameGame}
              className='introduction__game_name'
              alt='name of game'
            />
            <img
              src={gameSymbol}
              className='introduction__game_symbol'
              alt='game symbol'
            />
          </div>
          {osName === 'Mac OS' &&
            <LinkButton
              text={t('main.introduction.mac')}
              href='/assets/main/MacOS.jpg'
              download={true}
            />
          }
          {osName === 'Windows' &&
            <LinkButton
              text={t('main.introduction.windows')}
              href='/assets/main/Windows.png'
              download={true}
            />
          }
          {osName !== 'Windows' && osName !== 'Mac OS' &&
            <span className='text_title'>
              {t('main.introduction.other')}
            </span>
          }
        </div>

        <span className='text_big introduction__big-text'>
          {t('main.introduction.big-text')}
        </span>
      </div>
    </div>
  )
}

export default Introduction