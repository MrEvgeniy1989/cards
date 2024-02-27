import { CheckEmailIcon } from '@/assets/icons/checkEmailIcon'

import s from '@/feature/auth/ui/checkEmail/checkEmail.module.scss'

import { Button } from '../../../../common/components/ui/button'
import { Card } from '../../../../common/components/ui/card'
import { Typography } from '../../../../common/components/ui/typography'

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
