import { Provider } from 'react-redux'

import { store } from '@/app/store'
import { ThemeProvider } from '@/common/components/ui/themeProvider/ThemeProvider'
import { Router } from '@/common/routes/Router'

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  )
}
