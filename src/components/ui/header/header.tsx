import { LogoutIcon } from '@/assets/icons/logoutIcon'
import { PersonIcon } from '@/assets/icons/personIcon'
import logo from '@/assets/images/logo.png'
import userPhotoSmall from '@/assets/images/userPhotoSmall.png'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import s from './header.module.scss'

export type HeaderProps =
  | (Partial<typeof DropdownMenuPrimitive.Root> & {
      isLoggedIn: false
    })
  | (Partial<typeof DropdownMenuPrimitive.Root> & {
      isLoggedIn: true
    })

export const Header = ({ isLoggedIn }: HeaderProps) => {
  const btnStyle: any = {
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    borderRadius: '100%',
    display: 'flex',
    height: '36px',
    justifyContent: 'center',
    unset: 'all',
    width: '36px',
  }

  return (
    <header className={s.root}>
      <div className={s.content}>
        <img alt={'avatar'} src={logo} />

        {!isLoggedIn && (
          <Button as={'a'} href={'/'} variant={'secondary'}>
            Sign In
          </Button>
        )}
        {isLoggedIn && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button style={btnStyle}>
                <img src={userPhotoSmall} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <img src={userPhotoSmall} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  Ivan
                  <span style={{ color: '#808080', fontSize: '12px', fontWeight: '400' }}>
                    j&johnson@gmail.com
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PersonIcon />
                My profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogoutIcon />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  )
}
