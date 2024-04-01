import { ChangeEvent, useState } from 'react'

import { Card } from '@/common/components/ui/card'
import { Typography } from '@/common/components/ui/typography'
import { useMeQuery, useUpdateProfileMutation } from '@/feature/auth/api/authApi'
import { EditUserName } from '@/feature/profile/ui/personalInformation/editUserName/EditUserName'
import { UserInfo } from '@/feature/profile/ui/personalInformation/userInfo/UserInfo'
import { UserPhoto } from '@/feature/profile/ui/personalInformation/userPhoto/UserPhoto'
import { z } from 'zod'

import s from '@/feature/profile/ui/personalInformation/personalInformation.module.scss'

const nameSchema = z.object({
  name: z
    .string()
    .min(3, 'Name has to be at least 3 characters long')
    .max(30, 'Name should be less than' + ' 30 characters'),
})

export type FormValues = z.infer<typeof nameSchema>
export type UpdateDataProfileType =
  | {
      name?: string
    }
  | FormData

type Props = {}
export const PersonalInformation = ({}: Props) => {
  const { data: me } = useMeQuery()
  const [setEditProfile] = useUpdateProfileMutation()

  const [modeOn, setModeOn] = useState(false)

  const onSubmitHandler = (data: FormValues) => {
    setEditProfile(data)
    setModeOn(false)
  }

  const updatePhoto = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const formData = new FormData()

      formData.append('avatar', event.target.files[0])

      setEditProfile(formData)
    }
  }
  const deleteAvatar = () => {
    const formData = new FormData()

    formData.append('avatar', '')

    setEditProfile(formData)
  }

  return (
    <div className={s.signUpForm}>
      <Card className={s.wrapper}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          Personal Information
        </Typography>
        <UserPhoto
          avatar={me?.avatar}
          deleteAvatar={deleteAvatar}
          modeOn={modeOn}
          name={me?.name}
          onChange={updatePhoto}
        />

        {!modeOn ? (
          <UserInfo email={me?.email ?? ''} name={me?.name} onEditName={setModeOn} />
        ) : (
          <EditUserName
            cancel={() => setModeOn(false)}
            name={me?.name}
            onSubmit={onSubmitHandler}
          />
        )}
      </Card>
    </div>
  )
}
