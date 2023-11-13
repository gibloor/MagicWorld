import React from 'react'
import { useParams } from 'react-router-dom'

import Records from './Records'
import Master from './Master'
import Spells from './Spells'
import History from './History'

import './styles.scss'

const MagicWay = () => {

  const { way } = useParams()

  return (
    <div className='magic-way'>
      <Records way={way} />
      <Master way={way} />
      <Spells way={way} />
      <History way={way} />
    </div>
  )
}

export default MagicWay