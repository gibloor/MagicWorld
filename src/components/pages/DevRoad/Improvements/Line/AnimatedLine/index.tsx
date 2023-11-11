import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface MoveProps {
  prevWidth: number;
  finishWidth: number;
}

interface AnimationProps extends MoveProps {
  margin: number,
  duration: number,
}

const transform = (props: MoveProps) => keyframes`
  from {
    width: ${props.prevWidth}px;
  }
  to {
    width: ${props.finishWidth}px;
  }
`;

const animation = (props: AnimationProps) =>
  css`
    ${transform} ${props.duration}s linear forwards;
  `
const AnimatedLine = styled.div<AnimationProps>`
  animation: ${animation};
  margin-left: ${props => `${props.margin}px`};
`;

export default AnimatedLine;