import React, { useEffect, useState, useRef } from "react";
import { useInView } from 'react-hook-inview';

import battleground from 'components/assets/game/battleground.jpg';
import battlegroundStaff from 'components/assets/game/battleground-staff.png';
import markup from 'components/assets/game/markup.png';
import stageDisplay from 'components/assets/game/stage-display.png';

import interfaceItems from "./interfaceItems";
import './styles.scss';

const FightStage = () => {

  const [scrollRef, scrollView] = useInView();
  const [scrolled, setScrolled] = useState(false);  

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrolled && scrollView) {
      setScrolled(true)
    } else if (scrolled && !scrollView) {
      setScrolled(false)
    }
  }, [scrollRef, scrollView]);

  useEffect(() => {
    if (scrolled && ref.current?.offsetTop) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth"
      });
    }
  }, [scrolled]);

  useEffect(() => {
    const userPosition = ref.current?.getBoundingClientRect();
    if (ref.current && userPosition && userPosition.top < 0) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, []);

  return (
    <div className='fightstage' ref={ref}>

      <div className='fightstage__block_case' ref={scrollRef}>
        <div className='fightstage__block'>
          <img src={battleground} className='fightstage__background' />
          <img src={markup} className='fightstage__background' />
          <img src={battlegroundStaff} className='fightstage__background' />
          <img src={stageDisplay} className='fightstage__stage-display' />
        </div>
      </div>

      <div className='fightstage__scroller'>
        {interfaceItems.map(item => (
          <div key={item} className='fightstage__scroller_info'>
            <span className="text_casual">
              {item} title
            </span>
            <span className="text_little">
              {item} upper long text very good for example pokabu zikabu bruka vila
            </span>
          </div>
        ))}
      </div>
      
    </div>
  )
};

export default FightStage;