import { EditIcon } from '@/assets/icons/editIcon'
import { LogoutIcon } from '@/assets/icons/logoutIcon'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './userInfo.module.scss'

type Props = {
  email: string
  name: string
  onEditName: (editMode: boolean) => void
}
export const UserInfo = ({ email, name, onEditName }: Props) => {
  return (
    <>
      <div className={s.nameWrapper}>
        <Typography as={'h2'} variant={'h2'}>
          {name}
        </Typography>
        <button className={s.nameEditBtn} onClick={() => onEditName(true)}>
          <EditIcon />
        </button>
      </div>
      <Typography className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <Button variant={'secondary'}>
        <LogoutIcon />
        Logout
      </Button>
    </>
  )
}
