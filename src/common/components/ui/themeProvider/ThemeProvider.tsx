import { ReactNode, useEffect, useState } from 'react'

import { MoonIcon } from '@/assets/icons/MoonIcon'
import { SunIcon } from '@/assets/icons/sunIcon'
import { Button } from '@/common/components/ui/button'

import s from '@/common/components/ui/themeProvider/themeProvider.module.scss'

type Props = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')

    return savedTheme || 'dark'
  })

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'

    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const currentTheme = theme === 'light' ? s.lightTheme : s.darkTheme

    document.body.classList.remove(s.lightTheme, s.darkTheme)
    document.body.classList.add(currentTheme)
  }, [theme])

  return (
    <div className={s.themeProvider}>
      <Button className={s.themeButton} onClick={toggleTheme}>
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </Button>
      {children}
    </div>
  )
}