import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ControlledTextField } from '@/common/components/controlled/controlledTextField/controlledTextField'
import { Button } from '@/common/components/ui/button'
import { Card } from '@/common/components/ui/card'
import { Typography } from '@/common/components/ui/typography'
import { Route } from '@/common/enums'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from '@/feature/auth/ui/forgotPassword/forgotPassword.module.scss'

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>
type Props = {
  onSubmit: (data: ForgotPasswordValues) => void
}

export const ForgotPassword = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotPasswordValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  })

  return (
    <Card className={s.forgotPasswordFormWrapper}>
      <Typography as={'h1'} className={s.formHeader} variant={'h1'}>
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          className={s.inputEmail}
          control={control}
          error={errors.email?.message}
          label={'Email'}
          name={'email'}
          placeholder={'Email'}
        />
        <Typography className={s.info} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>

        <Button className={s.forgotPasswordButton} fullWidth type={'submit'}>
          Send Instructions
        </Button>
      </form>
      <Typography className={s.infoText} variant={'body2'}>
        {`Did you remember your password?`}
      </Typography>
      <Typography as={Link} className={s.forgotPasswordLink} to={Route.SignIn} variant={'h4'}>
        Try logging in
      </Typography>
    </Card>
  )
}
