import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Button from 'components/components/Button'

import './styles.scss'

const Authorization = () => {
  const { t } = useTranslation()

  const [showWindow, setShowWindow] = useState(false)

  return (
    <div className='authorization'>
      <Button
        onClick={() => setShowWindow(!showWindow)}
        text={t('header.auth.sign-in')}
      />
      
      <Button
        onClick={() => setShowWindow(!showWindow)}
        text={t('header.auth.sign-up')}
      />
    </div>
  )
}

export default Authorization