import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import interfaceItems from "./interfaceItems";

import './styles.scss';

const FightStage = () => {

  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(0);
  const [height, setHeight] = useState(0);

  const checkScroll = () => {
    const blockPos = ref.current?.getBoundingClientRect().y || 0;
    setPosition(blockPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
  
    return () => {
      window.removeEventListener('scroll', checkScroll);
    }

  }, []);

  useEffect(() => {
    const blockHeight = ref.current?.offsetHeight;

    if (blockHeight) {
      setHeight(blockHeight - window.innerHeight);
    }
  }, []);

  return (
    <div ref={ref} className='fightstage'>
      <div className='fightstage__strip'>
        {interfaceItems.map(item => (
          <div key={item.name} className='fightstage__strip_block'>
            <span className='title'>
              {t(`game.fightstage.${item.name}.title`)}
            </span>
            <span className='text'>
              {t(`game.fightstage.${item.name}.text`)}
            </span>
          </div>
        ))}
      </div>
      <div
        className={classNames(
          {'fightstage__background': true},
          {'fightstage__background_fixed': position < 0 && -position < height},
          {'fightstage__background_under': position < 0} 
        )}
      >
        {interfaceItems.map((item, index) => (
          <img
            key={item.name}
            src={`${process.env.PUBLIC_URL}/assets/game/fightstage/${item.name}.png`}
            className={classNames(
              {'fightstage__background_img': true},
              {'fightstage__background_img_show': (-position + window.innerHeight * 0.35) / window.innerHeight  > index}
            )}
          />
        ))}
      </div>
    </div>
  )
};

export default FightStage;