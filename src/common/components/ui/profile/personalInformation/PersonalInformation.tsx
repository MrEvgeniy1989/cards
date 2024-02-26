import { useState } from 'react'

import { Card } from '@/common/components/ui/card'
import { EditUserName } from '@/common/components/ui/profile/personalInformation/editUserName/EditUserName'
import { UserInfo } from '@/common/components/ui/profile/personalInformation/userInfo/UserInfo'
import { UserPhoto } from '@/common/components/ui/profile/personalInformation/userPhoto/UserPhoto'
import { Typography } from '@/common/components/ui/typography'

import s from '@/common/components/ui/profile/personalInformation/personalInformation.module.scss'

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
