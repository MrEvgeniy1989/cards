import { Page } from '@/common/components/ui/page'
import { SignIn, SingInValues } from '@/feature/auth/ui/signIn'

export const SignInPage = () => {
  const sugnInHandler = (data: SingInValues) => {
    console.log(data)
  }

  return (
    <Page>
      <SignIn onSubmit={sugnInHandler} />
    </Page>
  )
}
