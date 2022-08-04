import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface MoveProps {
  startPos: number,
  finishPos: number,
}

interface AnimationProps extends MoveProps {
  duration: number,
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
    ${move} ${props.duration}s forwards;
  `
const AnimatedStep = styled.div<AnimationProps>`
  animation: ${animation};
`;

export default AnimatedStep;