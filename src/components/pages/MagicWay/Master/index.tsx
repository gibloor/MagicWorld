import React from 'react'

import './styles.scss'

interface Props {
  way?: string,
}

const Master = (props: Props) => {

  const { way } = props

  return (
    <div className='master'>
      <div className='master__info'>
        <p className='master__name'>
          Title of super usefull information 
        </p>
        <span className='master__description'>
          Discovering super mega useful information is akin to unlocking a wealth of knowledge that can revolutionize our approach to everyday tasks and challenges.
          Super mega useful information isn't just about facts; it's a catalyst for innovation and a key driver for staying ahead in an ever-evolving world.
          In the vast landscape of information, super mega useful insights stand out as invaluable nuggets that can significantly impact our personal and professional journeys.
        </span>
      </div>
      <img
        className='master__picture'
        src= {`/MagicWorld/assets/magicWays/${way}/master.png`}
      />
    </div>
  )
}

export default Master