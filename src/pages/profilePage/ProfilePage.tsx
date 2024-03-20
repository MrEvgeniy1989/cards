import { GoBack } from '@/common/components/ui/goBack'
import { Page } from '@/common/components/ui/page'
import { Route } from '@/common/enums'
import { useMeQuery } from '@/feature/auth/api/authApi'
import { PersonalInformation } from '@/feature/profile/ui/personalInformation'

import s from './ProfilePage.module.scss'

export const ProfilePage = () => {
  const { data } = useMeQuery()

  return (
    <Page>
      <GoBack className={s.linkGoDekePage} text={'Back to Decks List'} to={Route.Decks} />
      <PersonalInformation email={data?.email ?? ''} name={data?.name ?? ''} />
    </Page>
  )
}
