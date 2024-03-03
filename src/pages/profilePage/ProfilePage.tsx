import { Page } from '@/common/components/ui/page'
import { PersonalInformation } from '@/feature/profile/ui/personalInformation'

export const ProfilePage = () => {
  return (
    <Page>
      <PersonalInformation email={'j&johnson@gmail.com'} name={'Ivan'} />
    </Page>
  )
}
