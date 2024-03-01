import { Page } from '@/common/components/ui/page'
import { FormValues, SignUp } from '@/feature/auth/ui/signUp'

export const SignUpPage = () => {
  const signUpHandler = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Page>
      <SignUp onSubmit={signUpHandler} />
    </Page>
  )
}
