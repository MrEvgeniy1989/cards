import { CheckEmailIcon } from '@/assets/icons/checkEmailIcon'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './checkEmail.module.scss'

type Props = {
  email: string
}

export const CheckEmail = ({ email }: Props) => {
  return (
    <Card className={s.checkEmailWrapper}>
      <Typography as={'h1'} className={s.formHeader} variant={'h1'}>
        Check Email
      </Typography>

      <CheckEmailIcon className={s.checkEmailIcon} />

      <Typography className={s.info} variant={'body2'}>
        {`We’ve sent an Email with instructions to ${email}`}
      </Typography>

      <Button as={'a'} className={s.backToSignInLink} fullWidth href={'/'} type={'submit'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
