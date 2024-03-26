import { ChangeEvent } from 'react'

import { EditIcon } from '@/assets/icons/editIcon'
import userPhotoLarge from '@/assets/images/userPhotoLarge.png'
import { Avatar } from '@/common/components/ui/avatar'

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
      <Avatar className={s.customAvatar} name={name} src={avatar ?? userPhotoLarge} />
      {!modeOn && (
        <label htmlFor={'avatarId'}>
          <span className={s.iconImage}>
            <EditIcon width={16} />
          </span>

          <input className={s.avatarEditor} id={'avatarId'} onChange={onChange} type={'file'} />
        </label>
      )}
    </div>
  )
}
