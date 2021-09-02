import React from 'react'
import { useDispatch } from 'react-redux'

import { useTranslation } from 'react-i18next'
import HFIcon from '../../ui/HFIcon'
import UIActions from '../../redux/actions/ui'
import NavbarLink from './Navbar.Link'
import NavbarButton from './Navbar.Button'
import SwitchMode from '../SwitchMode'

import LayoutSettings from './Navbar.LayoutSettings'
import AppSettings from './Navbar.AppSettings'
import Routes from '../../constants/routes'
import { isElectronApp } from '../../redux/config'
import LanguageSettings from './Navbar.LanguageSettings'

import './style.css'

const Navbar = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  return (
    <div className='hfui-navbar__wrapper'>
      <HFIcon className='hfui-navbar__logo' />
      <ul className='hfui-navbar__main-links'>
        {Object.values(Routes).map(({ path, label }) => (
          <li key={path}>
            <NavbarLink
              route={path}
              label={t(label)}
            />
          </li>
        ))}
      </ul>
      <div className='hfui-tradingpage__menu'>
        <div className='hfui-exchangeinfobar__buttons'>
          <LayoutSettings />
          <NavbarButton
            alt={t('main.notifications')}
            icon='notifications'
            onClick={() => dispatch(UIActions.switchNotifcationPanel())}
          />
          {isElectronApp && <AppSettings />}
        </div>
        {isElectronApp && (
        <div className='hfui-tradingpaper__control'>
          <div className='hfui-tradingpaper__control-toggle'>
            <p>{t('main.paper')}</p>
            <SwitchMode />
          </div>
        </div>
        )}
        <LanguageSettings />
      </div>
    </div>
  )
}

export default Navbar
