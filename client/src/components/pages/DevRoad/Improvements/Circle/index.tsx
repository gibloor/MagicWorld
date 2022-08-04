import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import AnimatedCircle from './AnimatedCircle';

interface Props {
  slide: number;
  prevSlide: number;
  linesRef: MutableRefObject<(HTMLDivElement | null)[]>;
}

const Circle = (props: Props) => {

  const { slide, prevSlide, linesRef } = props;

  const [staticPos, setStaticPos] = useState(0);
  const [startPos, setStartPos] = useState(0);
  const [finishPos, setFinishPos] = useState(0);
  const [duration, setDuration] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prevSlide !== slide) {
      let newPos = finishPos;

      if (slide > prevSlide) {

        for (let i = prevSlide ; i <= slide ; i++) {
          const width = linesRef.current[i]?.offsetWidth;

          if (width) {
            if (i === 0) {
              newPos += width / 2
            } else if (i === prevSlide) {
              newPos += width / 2 - 50
            } else if (i !== slide) {
              newPos += width
            } else {
              newPos += width / 2 + 50
            }
          }
        }
      } else {
        for (let i = prevSlide ; i >= slide ; i--) {
          const width = linesRef.current[i]?.offsetWidth;

          if (width) {
            if (i === 0) {
              newPos -= width / 2 + 50
            } else if (i === prevSlide) {
              newPos -= width / 2
            } else if (i !== slide) {
              newPos -= width
            } else {
              newPos -= width / 2
            }
          }
        }
      }

      setStartPos(finishPos);
      setFinishPos(newPos);
      setDuration(Math.abs(prevSlide - slide) * 0.2);
    }
  }, [slide]);

  useEffect(() => {
    const startPos = linesRef.current[0]?.offsetWidth || 0;
    setStaticPos(startPos / 2 - 25);
  }, []);

  return (
    <AnimatedCircle
      ref={ref}
      className='improvements__circle'
      staticPos={staticPos}
      startPos={startPos}
      finishPos={finishPos}
      duration={duration}
    />
  )
}

export default Circle;