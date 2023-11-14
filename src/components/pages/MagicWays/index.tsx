import React, { useState } from 'react'

import Doors from './Doors'
import Pedestals from './Pedestals'

import './styles.scss'

const MagicLib = () => {

  const [moovIn, setMoovIn] = useState(false)

  const getMoovIn = () => {
    const moovInTimer = setTimeout(() => {
      setMoovIn(true)
    }, 1000)
    
    return () => clearTimeout(moovInTimer)
  }

  return (
    <>
      {!moovIn &&
        <Doors getMoovIn={getMoovIn} /> ||
        <Pedestals />
      }
    </>
  )
}

export default MagicLib