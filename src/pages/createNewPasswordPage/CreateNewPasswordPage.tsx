import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { Page } from '@/common/components/ui/page'
import { useResetPasswordMutation } from '@/feature/auth/api/authApi'
import { CreateNewPassword, FormValues } from '@/feature/auth/ui/createNewPassword'

export const CreateNewPasswordPage = () => {
  const { token } = useParams<{ token: string }>()

  const navigate = useNavigate()

  const [resetPassword] = useResetPasswordMutation()

  const newPasswordHandler = (data: FormValues) => {
    const { password } = data

    token &&
      password &&
      resetPassword({ password, token })
        .unwrap()
        .then(_ => {
          navigate('/login')
        })
        .catch(e => toast.error(e?.data?.message ?? 'password has not been changed'))
  }

  return (
    <Page>
      <CreateNewPassword onSubmit={newPasswordHandler} />
      <ToastContainer />
    </Page>
  )
}
