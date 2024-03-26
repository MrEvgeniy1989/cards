import { ChangeEvent, useState } from 'react'

import { Card } from '@/common/components/ui/card'
import { Typography } from '@/common/components/ui/typography'
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

type Props = {
  avatar?: null | string
  email: string
  name: string | undefined
  onSubmit: (data: UpdateDataProfileType) => void
}
export const PersonalInformation = ({ avatar, email, name, onSubmit }: Props) => {
  const [modeOn, setModeOn] = useState(false)

  const onSubmitHandler = (data: FormValues) => {
    onSubmit(data)
    setModeOn(false)
  }

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const formData = new FormData()

      formData.append('avatar', event.target.files[0])

      onSubmit(formData)
    }
  }

  return (
    <div className={s.signUpForm}>
      <Card className={s.wrapper}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          Personal Information
        </Typography>
        <UserPhoto avatar={avatar} modeOn={modeOn} name={name} onChange={handleFileInputChange} />

        {!modeOn ? (
          <UserInfo email={email} name={name} onEditName={setModeOn} />
        ) : (
          <EditUserName
            name={name}
            onEditName={() => setModeOn(modeOn)}
            onSubmit={onSubmitHandler}
          />
        )}
      </Card>
    </div>
  )
}
