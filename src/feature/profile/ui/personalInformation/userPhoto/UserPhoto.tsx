import { ChangeEvent } from 'react'

import { EditIcon } from '@/assets/icons/editIcon'
import userPhotoLarge from '@/assets/images/userPhotoLarge.png'
import z, { ZodError } from 'zod'

import s from '@/feature/profile/ui/personalInformation/userPhoto/userPhoto.module.scss'

export const userPhotoSchema = z
  .instanceof(File)
  .refine(file => file.size <= 1000000, `Max image size is 1MB. The file will not be uploaded.`)
  .refine(
    file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported.'
  )

type UserPhotoPayload = z.infer<typeof userPhotoSchema>

type Props = {
  onLoadCover: (file: UserPhotoPayload) => void
  onLoadError: (error: string) => void
}
export const UserPhoto = ({ onLoadCover, onLoadError }: Props) => {
  const changePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    try {
      userPhotoSchema.parse(file)
      if (file) {
        onLoadCover?.(file)
      }
    } catch (e) {
      const err = e as Error | ZodError

      if (err instanceof ZodError) {
        onLoadError('Zod error: ' + err.errors[0].message)
      } else {
        onLoadError('Native error: ' + err.message)
      }
    }
  }

  return (
    <div className={s.photoWrapper}>
      <img alt={'User photo'} src={userPhotoLarge} />
      <button className={s.changePhotoBtn}>
        <label htmlFor={'changePhoto'}>
          <EditIcon />
          <input
            accept={'image/jpeg, image/jpg, image/png, image/webp'}
            id={'changePhoto'}
            onChange={changePhotoHandler}
            type={'file'}
          />
        </label>
      </button>
    </div>
  )
}
