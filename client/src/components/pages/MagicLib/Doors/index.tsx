import React, { useEffect, useRef, useState } from "react";
import classNames from 'classnames';

import frame from 'components/assets/magicLib/doors/frame.png';
import leftDoor from 'components/assets/magicLib/doors/leftDoor.png';
import rightDoor from 'components/assets/magicLib/doors/rightDoor.png';
import portal from 'components/assets/magicLib/doors/portal.gif';

import './styles.scss';

interface Props {
  moovIn: boolean,
  getMoovIn: () => void
}

const Doors = (props:Props) => {

  const ref = useRef<HTMLDivElement>(null);
  const [doorRef, setDoorRef] = useState<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  const { moovIn, getMoovIn } = props;

  const handleScroll = () => {
    if (doorRef) {
      setOffset(doorRef.scrollTop)
    }
  }

  useEffect(() => {
    if (offset > 450) {
      getMoovIn() 
    }
  }, [offset])

  useEffect(() => {
    setDoorRef(ref.current);
    ref?.current?.addEventListener("scroll", handleScroll)

    return function removeScroll() {
      ref?.current?.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll]);

  return (
    <div
      className='doors'
      ref={ref}
    >
      <div className='doors__block-scroller' />
      <div
        className={classNames(
          {'doors__case': true},
          {'doors__case_hide': offset > 450}
        )} 
      >
        <div className='doors__portal_case'>
          <img className='doors__portal' src={portal} />
        </div>
        <img src={frame} className="doors__door-frame" />
        <img
          className="doors__door-left" src={leftDoor}
          style={{transform: offset < 390 && `rotateY(calc(${offset}deg / 3))` || '-130deg'}}
        />
        <img
          className="doors__door-right" src={rightDoor}
          style={{transform: offset < 390 && `rotateY(calc(${offset}deg / 3))` || '-130deg'}}  
        />
      </div>
    </div>
  )
};

export default Doors;