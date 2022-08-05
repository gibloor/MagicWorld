import React, { MutableRefObject } from 'react';
import AnimatedLine from './AnimatedLine';

interface Props {
  slidesRef: MutableRefObject<Array<HTMLDivElement | null>>;
  duration: number;
  prevWidth: number;
  finishWidth: number;
}

const Line = (props: Props) => {

  const { slidesRef, duration, prevWidth, finishWidth } = props;

  const firstSegment = slidesRef.current[0]?.offsetWidth || 0;
  const margin = firstSegment / 2;

  return (
    <AnimatedLine className='improvements__line' duration={duration} margin={margin} prevWidth={prevWidth} finishWidth={finishWidth} />
  )
}



export default Line;