import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import Circle from './Circle';
import Steps from './Steps';
import improvements from './improvements';
import arrow from 'components/assets/devRoad/arrow.png';
import star from 'components/assets/devRoad/star.png';
import starBlackout from 'components/assets/devRoad/star-blackout.png';

import './styles.scss';
import AnimatedMove from './AnimatedMove';

const Improvements = () => {

  const linesRef = useRef<Array<HTMLDivElement | null>>([]);
  const slidesRef = useRef<HTMLDivElement | null>(null);

  const [slide, setSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [startPos, setStartPos] = useState(0);
  const [finishPos, setFinishPos] = useState(0);
  const [duration, setDuration] = useState(0);

  const windowSize = window.innerWidth;
  const windowLength = slidesRef.current?.offsetWidth || 0;
  const lastSlide = linesRef.current[linesRef.current.length - 1]?.offsetWidth || 0;
  const rightLimit = windowSize - windowLength - lastSlide / 2;
  const leftLimit = linesRef.current[0]?.getBoundingClientRect().x;


  const changeStep = (newSlide: number) => {
    if (slide !== newSlide) {
      setSlide(newSlide);
      setPrevSlide(slide);
    }
  };

  useEffect(() => {
    if (slide !== prevSlide) {

      const slidePos = linesRef.current[slide]?.getBoundingClientRect().x;
      const slideSize = linesRef.current[slide]?.offsetWidth;

      if (slideSize && slidePos) {
        const relativePos = windowSize / 2 - slideSize / 2;
        const newPos = finishPos - slidePos + relativePos;
        setStartPos(finishPos);
        setDuration(Math.abs(prevSlide - slide) * 0.2);
        
        if (leftLimit && slidePos < relativePos && (newPos + leftLimit - finishPos) > 0) {
          setFinishPos(0)
        } else if (rightLimit > newPos) {
          setFinishPos(rightLimit)
        } else {
          setFinishPos(newPos)
        }
      }
    }
  }, [slide]);

  return (
    <div className='improvements'>
      <AnimatedMove duration={duration} finishPos={finishPos} startPos={startPos} ref={slidesRef}>
        <>
          {improvements.map((improvement, index) => (
            <div key={improvement}
              className='improvements__step_block'
              ref={el => linesRef.current[index] = el}
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
              <div
                className='improvements__line'
              />
            </div>
          ))}
          
          <Circle slide={slide} prevSlide={prevSlide} linesRef={linesRef} />
        </>
      </AnimatedMove>
    </div>
  )
}

export default Improvements;