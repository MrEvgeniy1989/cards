import { useState } from 'react'

import { EditUserName } from '@/components/profile/personalInformation/editUserName'
import { UserInfo } from '@/components/profile/personalInformation/userInfo'
import { UserPhoto } from '@/components/profile/personalInformation/userPhoto'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './personalInformation.module.scss'

type Props = {
  email: string
  name: string
}
export const PersonalInformation = ({ email, name }: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false)

  const onSubmit = () => {
    setEditMode(false)
  }

  const onLoadCover = async (data: File) => {
    const formData = new FormData()

    await formData.append('userPhoto', data)
    console.log(formData.get('userPhoto'))
  }

  const onLoadError = (error: string) => {
    console.log(error)
  }

  return (
    <Card className={s.wrapper}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Personal Information
      </Typography>
      <UserPhoto onLoadCover={onLoadCover} onLoadError={onLoadError} />
      {editMode ? (
        <EditUserName name={name} onEditName={setEditMode} onSubmit={onSubmit} />
      ) : (
        <UserInfo email={email} name={name} onEditName={setEditMode} />
      )}
    </Card>
  )
}
