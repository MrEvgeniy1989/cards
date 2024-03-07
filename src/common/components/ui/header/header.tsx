import { LogoutIcon } from '@/assets/icons/logoutIcon'
import { PersonIcon } from '@/assets/icons/personIcon'
import logo from '@/assets/images/logo.png'
import userPhotoSmall from '@/assets/images/userPhotoSmall.png'
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
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import s from '@/common/components/ui/header/header.module.scss'

export type HeaderProps =
  | (Partial<typeof DropdownMenuPrimitive.Root> & {
      isLoggedIn: false
    })
  | (Partial<typeof DropdownMenuPrimitive.Root> & {
      isLoggedIn: true
    })

export const Header = ({ isLoggedIn }: HeaderProps) => {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <img alt={'avatar'} src={logo} />

        {!isLoggedIn && (
          <Button as={'a'} href={'/login'} variant={'primary'}>
            Sign In
          </Button>
        )}
        {isLoggedIn && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className={s.btnWrapper}>
                <Typography as={'p'} className={s.userEmail} variant={'subtitle1'}>
                  j&johnson@gmail.com
                </Typography>
                <button className={s.iconButton}>
                  <img alt={'user small small'} src={userPhotoSmall} />
                </button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={s.arrowMenuContent}>
              <DropdownMenuLabel>
                <img alt={'user small small'} src={userPhotoSmall} />
                <div className={s.flexColumn}>
                  <Typography as={'p'} variant={'subtitle2'}>
                    Ivan
                  </Typography>
                  <Typography as={'p'} className={s.emailColor} variant={'caption'}>
                    j&johnson@gmail.com
                  </Typography>
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
