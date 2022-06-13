import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import goldRoom from 'components/assets/main/goldRoom.jpeg';
import gold from 'components/assets/main/gold.png';

import './styles.scss';

const Advertising = () => {

  const [cost, setCost] = useState<number[][]>([[]]);
  const [actualDonat, setActualDonat] = useState(0);
  const [actualCost, setActualCost] = useState(0);

  const donats = [
    {
      title: 'goldJacket',
      cost: 55,
    },
    {
      title: 'goldJacket',
      cost: 5,
    },
    {
      title: 'goldJacket',
      cost: 19,
    },
    {
      title: 'goldJacket',
      cost: 49,
    },
    {
      title: 'goldJacket',
      cost: 25,
    },
    {
      title: 'goldJacket',
      cost: 10,
    },
  ];

  useEffect(() => {
    let newCost: number

    if (actualDonat < donats.length - 1) {
      newCost = actualDonat + 1
    } else {
      newCost = 0
    }

    const donatTimer = setTimeout(() => {
      setActualDonat(newCost)
    }, 9000)

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
      setCost(costMas);
    }, 1000)

    return () => clearTimeout(costTimer)
}, [actualDonat]);

useEffect(() => {
  if (actualCost > donats[actualDonat].cost) {
    setTimeout(() => {
      setActualCost(actualCost - 1);
    }, 10)
  } else if (actualCost < donats[actualDonat].cost) {
    setTimeout(() => {
      setActualCost(actualCost + 1);
    }, 75)
  }
}, [actualDonat, actualCost])

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
                    {'advertising__gold': true},
                    {'advertising__gold_hide': number > donats[actualDonat].cost - 1}
                  )}
                  style={{
                    right: `calc(30px * ${index})`,
                    animationDelay: number > donats[actualDonat].cost - 1 && `calc(5s / ${number})` || `calc(0.05s * ${number})`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <div className='advertising__product'>
          <img src={`assets/main/advertisin/${donats[actualDonat].title}.png`} />
          <div>
            <span>
              {actualCost}
            </span>
            <img src={gold} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advertising;