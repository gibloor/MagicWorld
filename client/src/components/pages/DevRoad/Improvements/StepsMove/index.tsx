import React, { MutableRefObject, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AnimatedSteps from './AnimatedSteps';

interface Props {
  children: React.ReactNode;
  slidesBoxRef: MutableRefObject<HTMLDivElement | null>;
  slidesRef: MutableRefObject<Array<HTMLDivElement | null>>;
  duration: number;
  changeDuration: (time: number) => void;
  slide: number,
  prevSlide: number,
}

const StepsMove = (props: Props) => {

  const { duration, slidesRef, slidesBoxRef, changeDuration, slide, prevSlide } = props;

  const [startPos, setStartPos] = useState(0);
  const [finishPos, setFinishPos] = useState(0);

  const windowSize = window.innerWidth;
  const windowLength = slidesBoxRef.current?.offsetWidth || 0;
  const lastSlide = slidesRef.current[slidesRef.current.length - 1]?.offsetWidth || 0;
  const rightLimit = windowSize - windowLength - lastSlide / 2;
  const leftLimit = slidesRef.current[0]?.getBoundingClientRect().x;

  useEffect(() => {
    if (slide !== prevSlide) {

      const slidePos = slidesRef.current[slide]?.getBoundingClientRect().x;
      const slideSize = slidesRef.current[slide]?.offsetWidth;

      if (slideSize && slidePos) {
        const relativePos = windowSize / 2 - slideSize / 2;
        const newPos = finishPos - slidePos + relativePos;
        setStartPos(finishPos);
        changeDuration(Math.abs(prevSlide - slide) * 0.2);
        
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
    <AnimatedSteps
      ref={slidesBoxRef}
      duration={duration}
      finishPos={finishPos}
      startPos={startPos}
      className='improvements__steps'
    >
      {props.children}
    </AnimatedSteps>
  )
};

StepsMove.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ])
};

export default StepsMove;