import { useContext } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/app/store'
import { ThemeButton } from '@/common/components/ui/themeButton'
import { Router } from '@/common/routes/Router'
import { ThemeContext } from '@/feature/theme/themeContext'

import s from '@/app/app.module.scss'

export const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)!

  return (
    <Provider store={store}>
      <div
        className={s.wrapper}
        style={{
          backgroundColor: theme === 'light' ? 'white' : 'black',
          color: theme === 'light' ? 'black' : 'white',
          height: '100vh',
        }}
      >
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
        <Router />
      </div>
    </Provider>
  )
}
