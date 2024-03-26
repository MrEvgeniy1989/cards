import { ChangeEvent } from 'react'

import { EditOutline } from '@/assets/icons/edit-outline/EditOutline'
import { Avatar } from '@/common/components/ui/avatar/index'

import s from './avatarEdit.module.scss'

type AvatarEditType = {
  avatar?: null | string
  modeOn: boolean
  name?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const AvatarEdit = ({ avatar, modeOn, name, onChange }: AvatarEditType) => {
  return (
    <div className={s.avatarGroup}>
      {typeof avatar === 'string' && <Avatar className={s.customAvatar} name={name} src={avatar} />}
      {!modeOn && (
        <label htmlFor={'avatarId'}>
          <span className={s.iconImage}>
            <EditOutline width={16} />
          </span>

          <input className={s.avatarEditor} id={'avatarId'} onChange={onChange} type={'file'} />
        </label>
      )}
    </div>
  )
}
