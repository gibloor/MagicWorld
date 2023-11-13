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
          Name 
        </p>
        <span className='master__description'>
          asadasdasdasdadsadsadadsadsadsadsdadssad вфывфы фывыфв фывфы фывыффвыфыв фывфывы фывфыв ффывфыавфывфы ыфвфывфы фы фывфывф ыфвфывфыв ы
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