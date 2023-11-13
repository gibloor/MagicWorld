import React from 'react'

import './styles.scss'

interface LinkButtonProps {
  text: string
  href: string
  download?: boolean
}

const LinkButton = (props: LinkButtonProps) => {

  return (
    <a
      className='link-button text_title'
      download={props.download}
      href={props.href}
    >
      {props.text}
    </a>
  )
}

export default LinkButton