import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import goldRoom from 'components/assets/main/goldRoom.jpeg'
import gold from 'components/assets/main/gold.png'
import donats from './donats'

import './styles.scss'

const Advertising = () => {
  const { t } = useTranslation()

  const [cost, setCost] = useState<number[][]>([[]])
  const [actualItem, setActualItem] = useState(0)
  const [displayedCost, setDisplayedCost] = useState(0)
  const [oldCost, setOldCost] = useState(0)
  const [delayCost, setDelayCost] = useState(true)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600)

  useEffect(() => {
    let newCost = 0
    
    if (actualItem < donats.length - 1) {
      newCost = actualItem + 1
    }

    const donatTimer = setTimeout(() => {
      setOldCost(donats[actualItem].cost)
      setActualItem(newCost)
    }, 7000)

    return () => clearTimeout(donatTimer)
  }, [actualItem])

  useEffect(() => {
    const costMas:number[][] = []

    let floor = 0
    let floorLength = 10
    let floorCounter = 0

    for (let i = 0 ; i < donats[actualItem].cost ; i++ ) {
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

    const delay = costMas < cost ? 2000 : 500

    const costTimer = setTimeout(() => {
      setCost(costMas)
    }, delay)

    return () => clearTimeout(costTimer)
  }, [actualItem])

  useEffect(() => {
    let timeout = 0
    let newCost = displayedCost

    if (displayedCost > donats[actualItem].cost) {
      timeout = 20
      newCost--
    } else if (displayedCost < donats[actualItem].cost && delayCost) {
      timeout = 500
      newCost++
      setDelayCost(false)
    } else if (displayedCost < donats[actualItem].cost && !delayCost) {
      timeout = 50
      newCost++
    } else {
      setDelayCost(true)
    }

    const costTimer = setTimeout(() => {
      setDisplayedCost(newCost)
    }, timeout)

    return () => clearTimeout(costTimer)
  }, [actualItem, displayedCost])

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600)
    };

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
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
                transform: isSmallScreen ? `translateY(calc(10px * ${index})) translateX(calc(-8.15px * ${index}))` : `translateY(calc(15px * ${index})) translateX(calc(-12.5px * ${index}))` // i tyt
              }}
            >
              {floor.map((number, index) => (
                <img
                  src={gold}
                  key={number}
                  className={classNames(
                    {'advertising__gold advertising__gold_animation': true},
                    {'advertising__gold_hide': number > donats[actualItem].cost - 1}
                  )}
                  style={{
                    right: isSmallScreen ? `calc(20px * ${index})` : `calc(30px * ${index})`, /// tyt
                    animationDelay: number > donats[actualItem].cost - 1 ?
                      `calc(1.5s - 1.5s / ${oldCost} * ${number})` :
                      `calc(0.1s * (${number} - ${oldCost}))`,
                  }} 
                />
              ))}
            </div>
          ))}
        </div>
        <div className='advertising__product'>
          <span className='text_title'>
            {t(`main.advertising.${donats[actualItem].title}`)}
          </span>
          <img
            src={`/MagicWorld/assets/advertisin/${donats[actualItem].title}.png`}
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

export default Advertising