import { Page } from '@/common/components/ui/page'
import { CreateNewPassword, FormValues } from '@/feature/auth/ui/createNewPassword'

export const CreateNewPasswordPage = () => {
  const newPasswordHandler = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Page>
      <CreateNewPassword onSubmit={newPasswordHandler} />
    </Page>
  )
}
