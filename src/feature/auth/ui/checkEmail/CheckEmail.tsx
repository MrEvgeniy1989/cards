import { Link, useParams } from 'react-router-dom'

import { CheckEmailIcon } from '@/assets/icons/checkEmailIcon'
import { Button } from '@/common/components/ui/button'
import { Card } from '@/common/components/ui/card'
import { Typography } from '@/common/components/ui/typography'

import s from '@/feature/auth/ui/checkEmail/checkEmail.module.scss'

export const CheckEmail = () => {
  const { email } = useParams<{ email: string }>()

  return (
    <Card className={s.checkEmailWrapper}>
      <Typography as={'h1'} className={s.formHeader} variant={'h1'}>
        Check Email
      </Typography>

      <CheckEmailIcon className={s.checkEmailIcon} />

      <Typography className={s.info} variant={'body2'}>
        {`We’ve sent an Email with instructions to ${email}`}
      </Typography>

      <Button as={Link} className={s.backToSignInLink} fullWidth to={'/login'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
