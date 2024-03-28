import { DarkThemeIcon } from '@/assets/icons/darkThemeIcon'
import { WhiteThemeIcon } from '@/assets/icons/whiteThemeIcon'
import { Button } from '@/common/components/ui/button'

import s from '@/common/components/ui/themeButton/themeButton.module.scss'
type Props = {
  theme: string
  toggleTheme: () => void
}
export const ThemeButton = ({ theme, toggleTheme }: Props) => {
  return (
    <Button
      as={'button'}
      className={s.button}
      onClick={() => {
        toggleTheme()
      }}
      variant={'empty'}
    >
      {theme === 'light' ? (
        <WhiteThemeIcon height={50} width={50} />
      ) : (
        <DarkThemeIcon height={50} width={50} />
      )}
    </Button>
  )
}
