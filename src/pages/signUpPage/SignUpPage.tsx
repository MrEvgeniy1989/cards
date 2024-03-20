import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Page } from '@/common/components/ui/page'
import { Route } from '@/common/enums'
import { useSignUpMutation } from '@/feature/auth/api/authApi'
import { SignUp } from '@/feature/auth/ui/signUp'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()
  const [emailExist, setEmailExist] = useState<string>('')
  const navigate = useNavigate()
  const signUpHandler = (data: { confirmPassword?: string; email: string; password: string }) => {
    const dataForRequest = { ...data }

    delete dataForRequest?.['confirmPassword']

    signUp(dataForRequest)
      .unwrap()
      .then(() => {
        setEmailExist('')
        navigate(Route.SignIn)
      })
      .catch(e => {
        setEmailExist(e.data.errorMessages[0])
      })
  }

  return (
    <Page>
      <SignUp emailExist={emailExist} onSubmit={signUpHandler} />
    </Page>
  )
}
