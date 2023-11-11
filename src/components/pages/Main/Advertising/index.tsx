import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import goldRoom from 'components/assets/main/goldRoom.jpeg';
import gold from 'components/assets/main/gold.png';
import donats from './donats';

import './styles.scss';

const Advertising = () => {

  const { t } = useTranslation();

  const [cost, setCost] = useState<number[][]>([[]]);
  const [actualDonat, setActualDonat] = useState(0);
  const [displayedCost, setDisplayedCost] = useState(0);
  const [oldCost, setOldCost] = useState(0);
  const [delayCost, setDelayCost] = useState(true);

  useEffect(() => {
    let newCost = 0
    
    if (actualDonat < donats.length - 1) {
      newCost = actualDonat + 1
    }

    const donatTimer = setTimeout(() => {
      setOldCost(donats[actualDonat].cost)
      setActualDonat(newCost)
    }, 7000)

    return () => clearTimeout(donatTimer)
  }, [actualDonat]);

  useEffect(() => {
    const costMas:number[][] = [];

    let floor = 0;
    let floorLength = 10;
    let floorCounter = 0;

    for (let i = 0 ; i < donats[actualDonat].cost ; i++ ) {
      if (floorCounter === floorLength) {
        floor++
        floorLength--
        floorCounter = 0
      }

      if (costMas[floor] === undefined) {
        costMas.push([])
      }

      costMas[floor].push(i)
      floorCounter++
    }

    const costTimer = setTimeout(() => {
      setCost(costMas)
    }, 500)

    return () => clearTimeout(costTimer)
}, [actualDonat]);

useEffect(() => {
  let timeout = 0;
  let newCost = displayedCost;

  if (displayedCost > donats[actualDonat].cost) {
    timeout = 10
    newCost--
  } else if (displayedCost < donats[actualDonat].cost && delayCost) {
    timeout = 500
    newCost++
    setDelayCost(false)
  } else if (displayedCost < donats[actualDonat].cost && !delayCost) {
    timeout = 50
    newCost++
  } else {
    setDelayCost(true)
  }

  const costTimer = setTimeout(() => {
    setDisplayedCost(newCost);
  }, timeout)

  return () => clearTimeout(costTimer)
}, [actualDonat, displayedCost]);

  return (
    <div className='advertising'>
      <div className='advertising__case'>
        <img src={goldRoom} className='advertising__room' />
        <div className='advertising__cost'>
          {cost.map((floor, index) => (
            <div
              key={index}
              className='advertising__gold_floor'
              style={{
                transform: `translateY(calc(15px * ${index})) translateX(calc(-12.5px * ${index}))`
              }}
            >
              {floor.map((number, index) => (
                <img
                  src={gold}
                  key={number}
                  className={classNames(
                    {'advertising__gold advertising__gold_animation': true},
                    {'advertising__gold_hide': number > donats[actualDonat].cost - 1}
                  )}
                  style={{
                    right: `calc(30px * ${index})`,
                    animationDelay: number > donats[actualDonat].cost - 1 &&
                      `calc(0.5s / (${oldCost} - ${number}))` ||
                      `calc(0.05s * (${number} - ${oldCost}))`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <div className='advertising__product'>
          <span className='text_title'>
            {t(`main.advertising.${donats[actualDonat].title}`)}
          </span>
          <img
            src={`MagicWorld/assets/advertisin/${donats[actualDonat].title}.png`}
            className='advertising__product_picture'
          />
          <div className='advertising__product_cost'>
            <span className='text_title'>
              {displayedCost}
            </span>
            <img className='advertising__gold' src={gold} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advertising;