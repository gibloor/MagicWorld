import React from 'react'

import './styles.scss'

interface ButtonProps {
  onClick: () => void
  text: string
}

const Button = (props: ButtonProps) => {

  return (
    <button
      className='button'
      onClick={() => props.onClick()}
    >
      {props.text}
    </button>
  )
}

export default Button