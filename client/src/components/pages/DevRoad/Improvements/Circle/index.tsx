import React, { MutableRefObject, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface MoveProps {
  startPos: number,
  finishPos: number,
}

interface AnimationProps extends MoveProps {
  staticPos: number,
  duration: number,
}

interface Props {
  slide: number;
  prevSlide: number;
  linesRef: MutableRefObject<(HTMLDivElement | null)[]>;
}

const move = (props: MoveProps) => keyframes`
  0% {
    transform: translateX(${props.startPos}px);
  }
  100% {
    transform: translateX(${props.finishPos}px);
  }
`;

const animation = (props: AnimationProps) =>
  css`
    ${move} ${props.duration}s linear forwards;
  `
const AnimatedCircle = styled.div<AnimationProps>`
  animation: ${animation};
  left: ${props => `${props.staticPos}px`};
`;

const Circle = (props: Props) => {

  const { slide, prevSlide, linesRef } = props;

  const [circlePos, setCirclePos] = useState(0);
  const [circleStartPos, setCircleStartPos] = useState(0);
  const [circleFinishPos, setCircleFinishPos] = useState(0);
  const [circleDuration, setCircleDuration] = useState(0);

  useEffect(() => {
    if (prevSlide !== slide) {
      let newPos = circleFinishPos;

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
              newPos -= width / 2
            } else if (i === prevSlide) {
              newPos -= width / 2 + 50
            } else if (i !== slide) {
              newPos -= width
            } else {
              newPos -= width / 2 - 50
            }
          }
        }
      }
      setCircleStartPos(circleFinishPos);
      setCircleFinishPos(newPos);
      setCircleDuration(Math.abs(prevSlide - slide) * 0.2);
    }
  }, [slide]);

  useEffect(() => {
    const startPos: any = document.querySelector('.improvements__line_first');
    setCirclePos(startPos.offsetWidth - 25);
  }, []);

  return (
    <AnimatedCircle
      className='improvements__circle'
      staticPos={circlePos}
      startPos={circleStartPos}
      finishPos={circleFinishPos}
      duration={circleDuration}
    />
  )
}

export default Circle;