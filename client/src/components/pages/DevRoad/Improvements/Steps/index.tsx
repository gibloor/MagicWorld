import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import AnimatedSteps from './AnimatedSteps';

interface Props {
  children: React.ReactNode,
  slidesRef: MutableRefObject<HTMLDivElement | null>;
  duration: number,
  finishPos: number,
  startPos: number
}

const Steps = (props: Props) => {

  const { duration, finishPos, startPos, slidesRef } = props;

  return (
    <AnimatedSteps ref={slidesRef} duration={duration} finishPos={finishPos} startPos={startPos} className='improvements__steps'>
      {props.children}
    </AnimatedSteps>
  )
};

Steps.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ])
};

export default Steps;