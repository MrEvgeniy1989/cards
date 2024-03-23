import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router-dom'

import IconNoUserIcon from '@/assets/icons/iconNoUserIcon'
import { LogoutIcon } from '@/assets/icons/logoutIcon'
import { PersonIcon } from '@/assets/icons/personIcon'
import logo from '@/assets/images/logo.png'
import { Button } from '@/common/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown'
import { Typography } from '@/common/components/ui/typography'

import s from '@/common/components/ui/header/header.module.scss'
export type UserDropdownProps = {
  email: string
  onLogout: ComponentPropsWithoutRef<typeof DropdownMenuItem>['onSelect']
  toProfile: () => void
  userName: string
}

export type HeaderProps =
  | (Partial<UserDropdownProps> & {
      isLoggedIn: false
    })
  | (UserDropdownProps & {
      isLoggedIn: true
    })

export const Header = ({ email, isLoggedIn, onLogout, toProfile, userName }: HeaderProps) => {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <Button as={Link} to={'/'} variant={'empty'}>
          <img alt={'logo'} className={s.logo} src={logo} />
        </Button>

        {!isLoggedIn && (
          <Button as={Link} to={'/login'} variant={'primary'}>
            Sign In
          </Button>
        )}
        {isLoggedIn && (
          <div className={s.dropdownWrapper}>
            <Typography as={'span'} className={s.userEmail} variant={'subtitle1'}>
              {userName}
            </Typography>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={s.iconButton}>
                  <IconNoUserIcon />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <IconNoUserIcon />
                  <div className={s.flexColumn}>
                    <Typography as={'p'} variant={'subtitle2'}>
                      {userName}
                    </Typography>
                    <Typography as={'p'} className={s.emailColor} variant={'caption'}>
                      {email}
                    </Typography>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={toProfile}>
                  <PersonIcon />
                  My profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={onLogout}>
                  <LogoutIcon />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </header>
  )
}
