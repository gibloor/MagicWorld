import React, { useState } from 'react'
import classNames from 'classnames'

import './styles.scss'

interface Props {
  way?: string,
}

const Spells = (props: Props) => {
  const { way } = props

  const spells = ['release', 'overpower']
  const [showSpell, setShowSpell] = useState(0)
  const [hideSpell, setHideSpell] = useState<number>()

  const changeSpell = (index:number) => {
    if (index !== showSpell) {
      setHideSpell(showSpell)
      setShowSpell(index)
    }
  }

  return (
    <div className='spells'>
      <div className='spells__window'>
        {spells.map((spell, index) => (
          <video key={spell}
            autoPlay
            playsInline
            loop
            muted
            className={classNames(
              {'spells__video': true},
              {'spells__video_show': index === showSpell},
              {'spells__video_hide': index === hideSpell}
            )}
          >
            <source src={`/MagicWorld/assets/magicWays/${way}/spells/${spell}.mp4`} />
          </video>
        ))}
        <div className='spells__description'>
          <span className='spells__description_title'>name spell</span>
          <span>very much some text, if sy sereasly not very much but it okey. Go end and start flex</span>
        </div>
      </div>
      <div className='spells__list'>
        {spells.map((spell, index) => (
          <div
            onClick={() => changeSpell(index)}
            key={spell}
            className='spells__item'
          >
            <div
              className={classNames(
                {'spells__blanket': true},
                {'spells__blanket_show': index === showSpell},
                {'spells__blanket_hide': index === hideSpell}
              )}
            />
            {spell}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Spells