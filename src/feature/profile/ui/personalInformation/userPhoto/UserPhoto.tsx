import { ChangeEvent } from 'react'

import { EditIcon } from '@/assets/icons/editIcon'
import { NoUserIcon } from '@/assets/icons/noUserIcon'
import { TrashIcon } from '@/assets/icons/trashIcon'
import { Avatar } from '@/common/components/ui/avatar'
import { clsx } from 'clsx'

import s from '@/feature/profile/ui/personalInformation/userPhoto/userPhoto.module.scss'

type AvatarEditType = {
  avatar?: null | string
  modeOn: boolean
  name?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
export const UserPhoto = ({ avatar, modeOn, name, onChange }: AvatarEditType) => {
  return (
    <div className={s.avatarGroup}>
      {avatar ? (
        <Avatar className={s.customAvatar} name={name} src={avatar} />
      ) : (
        <NoUserIcon className={s.customAvatar} />
      )}
      {!modeOn && (
        <label htmlFor={'avatarId'}>
          <span className={clsx(s.icon, s.trashIcon)}>
            <TrashIcon width={16} />
          </span>

          <input className={s.avatarEditor} id={'avatarId'} onChange={onChange} type={'file'} />
        </label>
      )}
      {!modeOn && (
        <label htmlFor={'avatarId'}>
          <span className={clsx(s.icon, s.editIcon)}>
            <EditIcon width={16} />
          </span>

          <input className={s.avatarEditor} id={'avatarId'} onChange={onChange} type={'file'} />
        </label>
      )}
    </div>
  )
}
