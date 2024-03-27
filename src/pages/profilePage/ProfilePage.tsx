import { GoBack } from '@/common/components/ui/goBack'
import { Page } from '@/common/components/ui/page'
import { Route } from '@/common/enums'
import { useMeQuery, useUpdateProfileMutation } from '@/feature/auth/api/authApi'
import {
  PersonalInformation,
  UpdateDataProfileType,
} from '@/feature/profile/ui/personalInformation'

import s from './ProfilePage.module.scss'

export const ProfilePage = () => {
  const { data } = useMeQuery()
  const [setEditProfile] = useUpdateProfileMutation()

  const onSubmitHandler = async (data: UpdateDataProfileType) => {
    setEditProfile(data)
  }

  return (
    <Page>
      <GoBack className={s.linkGoDekePage} text={'Back to Decks List'} to={Route.Decks} />
      <PersonalInformation
        avatar={data?.avatar}
        email={data?.email ?? ''}
        name={data?.name}
        onSubmit={onSubmitHandler}
      />
    </Page>
  )
}
