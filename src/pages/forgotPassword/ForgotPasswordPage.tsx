import { useNavigate } from 'react-router-dom'

import { Page } from '@/common/components/ui/page'
import { useRecoverPasswordMutation } from '@/feature/auth/api/authApi'
import { ForgotPassword } from '@/feature/auth/ui/forgotPassword'

export const ForgotPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()
  const handleSubmit = (data: { email: string }) => {
    const { email } = data

    email &&
      recoverPassword({ email })
        .unwrap()
        .then(_ => navigate(`/check-email/${email}`))
        .catch(e => console.error(JSON.stringify(e)))
  }

  return (
    <Page>
      <ForgotPassword onSubmit={handleSubmit} />
    </Page>
  )
}
