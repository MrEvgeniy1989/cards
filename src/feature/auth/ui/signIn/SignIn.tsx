import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ControlledCheckbox } from '@/common/components/controlled/controlledCheckbox/ControlledCheckbox'
import { ControlledTextField } from '@/common/components/controlled/controlledTextField/controlledTextField'
import { Button } from '@/common/components/ui/button'
import { Card } from '@/common/components/ui/card'
import { Typography } from '@/common/components/ui/typography'
import { Route } from '@/common/enums'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from '@/feature/auth/ui/signIn/signIn.module.scss'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

export type SingInValues = z.infer<typeof signInSchema>
type Props = {
  onSubmit: (data: SingInValues) => void
}

export const SignIn = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SingInValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(signInSchema),
  })

  return (
    <Card className={s.signInFormWrapper}>
      <Typography as={'h1'} className={s.formHeader} variant={'h1'}>
        Sign In
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
        <ControlledTextField
          className={s.inputPassword}
          control={control}
          error={errors.password?.message}
          label={'Password'}
          name={'password'}
          placeholder={'Password'}
          type={'password'}
        />
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
          position={'left'}
        />
        <div className={s.forgotPasswordContainer}>
          <Typography
            as={Link}
            className={s.forgotPasswordLink}
            to={'/forgot-password'}
            variant={'body2'}
          >
            Forgot Password?
          </Typography>
        </div>
        <Button className={s.signInButton} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography className={s.infoText} variant={'body2'}>
        {`Don't have an account?`}
      </Typography>
      <Typography as={Link} className={s.signInLink} to={Route.SignUp} variant={'h4'}>
        Sign Up
      </Typography>
    </Card>
  )
}
