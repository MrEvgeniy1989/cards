import { GoBack } from '@/common/components/ui/goBack'
import { Page } from '@/common/components/ui/page'
import { Route } from '@/common/enums'
import { PersonalInformation } from '@/feature/profile/ui/personalInformation'

import s from './ProfilePage.module.scss'

export const ProfilePage = () => {
  return (
    <Page>
      <GoBack className={s.linkGoDekePage} text={'Back to Decks List'} to={Route.Decks} />
      <PersonalInformation />
    </Page>
  )
}
