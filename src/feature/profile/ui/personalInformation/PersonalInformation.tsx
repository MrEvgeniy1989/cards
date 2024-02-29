import { useState } from 'react'

import { Card } from '@/common/components/ui/card'
import { Typography } from '@/common/components/ui/typography'
import { EditUserName } from '@/feature/profile/ui/personalInformation/editUserName/EditUserName'
import { UserInfo } from '@/feature/profile/ui/personalInformation/userInfo/UserInfo'
import { UserPhoto } from '@/feature/profile/ui/personalInformation/userPhoto/UserPhoto'

import s from '@/feature/profile/ui/personalInformation/personalInformation.module.scss'

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
