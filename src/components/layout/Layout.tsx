import { Link } from 'react-router-dom'
import style from './Layout.module.css'
import { FC, PropsWithChildren, useState } from 'react'
import ChangeThemeButton from '../buttons/ChangeThemeButton'


const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
      <div className={style.header}>
        <div className={style.element__container}>
          <div className={style.element__wrapper}>
            <div className={style.icon} style={{background: 'green'}}></div>
          </div>
          <div className={style.element__wrapper}>
            <Link to='songs'>ПЕСНИ</Link>
            <Link to='albums'>АЛЬБОМЫ</Link>
            <Link to='artists' style={{margin: 0}}>ИСПОЛНИТЕЛИ</Link>
          </div>
          <div className={style.element__wrapper}>
            {/* <button onClick={() => {
              if(theme === 'light') {
                document.documentElement.style.setProperty('--background', '#000')
              document.documentElement.style.setProperty('--color', '#fff')
              setTheme('dark')
              } else {
                document.documentElement.style.setProperty('--background', '#f56868')
                document.documentElement.style.setProperty('--color', '#000')
                setTheme('light')
              }
            }}>change</button> */}
            <ChangeThemeButton></ChangeThemeButton>
            <div className={style.icon} style={{background: 'red'}}></div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Layout