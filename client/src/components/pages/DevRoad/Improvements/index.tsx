import React, { useEffect, useRef, useState } from 'react';

import Circle from './Circle';
import arrow from 'components/assets/devRoad/arrow.png';

import './styles.scss';

const Improvements = () => {

  const linesRef = useRef<Array<HTMLDivElement | null>>([]);

  const improvements = [
    'finish-main-parts-site',
    'find an artist',
    'finish-site',
    'start-learn-unreal',
    'make-part-game',
    'drop-project-on-patreon',
    'return-to-making-game',
    'check-what-noone-care',
    'start-make-wood-toys',
  ];

  const [slide, setSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0)

  const changeSlide = (newSlide: number) => {

    if (slide !== newSlide) {
      setSlide(newSlide);
      setPrevSlide(slide);
    }
  };

  return (
    <div className='improvements'>
      <div className='improvements__block'>
        {improvements.map((improvement, index) => (
          <div key={improvement}
            className='improvements__slide'
          >
            {index !== 0 &&
              <div
                className='improvements__arrow_block'
              >
                <img src={arrow} className='improvements__arrow' />
              </div>
            }

            <div className='improvements__step' onClick={() => changeSlide(index)}>
              <div className='improvements__picture_block'>
                <img src={`assets/devRoad/improvements/step-${index}.png`} className='improvements__picture' />
              </div>
              <span className='improvements__text'>
                {improvement}
              </span>
            </div>

            <div className='improvements__line' ref={el => linesRef.current[index] = el}>
              {index !== 0 &&
                <div className='improvements__line_block improvements__line_left' />
              }
              {index !== improvements.length - 1 && index !== 0 &&
                <div className='improvements__line_block improvements__line_right' />
              }
              {index === 0 &&
                <div className='improvements__line_block improvements__line_first' />
              }
            </div>

          </div>
        ))}
        <Circle slide={slide} prevSlide={prevSlide} linesRef={linesRef} />
      </div>
    </div>
  )
}

export default Improvements;