import React from 'react'
import { useTranslation } from 'react-i18next'

const AuthenticationConnectingForm = () => {
  const { t } = useTranslation()
  return (
    <div className='hfui-authenticationpage__content'>
      <h2>Honey Framework UI</h2>
      <p>{t('main.startingUp')}</p>

      <form className='hfui-authenticationpage__inner-form' />
    </div>
  )
}

export default AuthenticationConnectingForm
