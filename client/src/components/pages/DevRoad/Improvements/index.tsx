import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import Line from './Line';
import Circle from './Circle';
import StepsMove from './StepsMove';
import improvements from './improvements';
import arrow from 'components/assets/devRoad/arrow.png';
import star from 'components/assets/devRoad/star.png';
import starBlackout from 'components/assets/devRoad/star-blackout.png';

import './styles.scss';

const Improvements = () => {

  const slidesRef = useRef<Array<HTMLDivElement | null>>([]);
  const slidesBoxRef = useRef<HTMLDivElement | null>(null);

  const [slide, setSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);

  const [duration, setDuration] = useState(0);
  const [decorFinish, setDecorFinish] = useState(0);
  const [decorStart, setDecorStart] = useState(0);

  const changeStep = (newSlide: number) => {
    if (slide !== newSlide) {
      setSlide(newSlide);
      setPrevSlide(slide);
    }
  };

  const changeFinish = (long: number) => {
    setDecorFinish(long)
  }
  const changeStart = (long: number) => {
    setDecorStart(long)
  }
  const changeDuration = (time: number) => {
    setDuration(time)
  }

  return (
    <div className='improvements'>
      <StepsMove
        duration={duration}
        slidesBoxRef={slidesBoxRef}
        changeDuration={changeDuration}
        slide={slide}
        prevSlide={prevSlide}
        slidesRef={slidesRef}
      >
        <>
          {improvements.map((improvement, index) => (
            <div key={improvement}
              className='improvements__step_block'
              ref={el => slidesRef.current[index] = el}
            >
              {index !== 0 &&
                <div
                  className='improvements__arrow_block'
                >
                  <img src={arrow} className='improvements__arrow' />
                </div>
              }

              <div className='improvements__step' onClick={() => changeStep(index)}>
                <div className='improvements__picture_block'>
                  <img src={`assets/devRoad/improvements/step-${index}.png`} className='improvements__picture' />
                  <img
                    src={`assets/devRoad/improvements/step-${index}-blackout.png`}
                    className={classNames(
                      {'improvements__picture improvements__blackout': true},
                      {'improvements__blackout_show': slide < index && prevSlide > index},
                      {'improvements__blackout_hide': slide >= index},
                    )}
                    style={{animationDelay: `${Math.abs(prevSlide - index) / 5}s`}}
                  />
                </div>
                <span className='improvements__text'>
                  {improvement}
                </span>
                <img src={star} className='improvements__star' />
                <img src={starBlackout} 
                  className={classNames(
                    {'improvements__star improvements__blackout': true},
                    {'improvements__blackout_show': slide < index && prevSlide > index},
                    {'improvements__blackout_hide': slide >= index},
                  )}
                  style={{animationDelay: `${Math.abs(prevSlide - index) / 5}s`}}
                />
              </div>
            </div>
          ))}
          <Line
            slidesRef={slidesRef}
            duration={duration}
            prevWidth={decorStart}
            finishWidth={decorFinish}
          />
          <Circle
            slide={slide}
            prevSlide={prevSlide}
            slidesRef={slidesRef}
            duration={duration}
            finishPos={decorFinish}
            startPos={decorStart}
            changeFinish={changeFinish}
            changeStart={changeStart}
          />
        </>
      </StepsMove>
    </div>
  )
}

export default Improvements;