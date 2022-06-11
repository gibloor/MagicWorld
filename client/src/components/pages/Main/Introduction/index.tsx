import React from 'react';
import { osName } from "react-device-detect";

//Of course I don't have my own cinematics
import fonVideo from 'components/assets/main/fonVideo.mp4';
import nameGame from 'components/assets/main/nameGame.png';
import gameSymbol from 'components/assets/gameSymbol.png';

import './styles.scss';

const Introduction = () => {

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
          {/* chane on click if game exist */}
          {osName === 'Mac OS' &&
            <a
              className='button_casual text_title'
              href='components/assets/main/MacOS.jpg'
              download
            >
              Let's go play on mac os!
            </a> ||
          osName === 'Windows' &&
            <a
              className='button_casual text_title'
              href='components/assets/main/Windows.png'
              download
            >
              Let's go play on windows!
            </a> ||
            <span className='text_title'>
              Your device or OS does not fit
            </span>
          }
        </div>
        <span className='text_big'>
          "Existing only <br/>
          conceptually, <br/>
          awesome game!"
        </span>
      </div>
    </div>
  )
}

export default Introduction;