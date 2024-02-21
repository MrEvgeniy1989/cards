import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlledCheckbox/ControlledCheckbox'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './signIn.module.scss'

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
    register,
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
        {/*<DevTool control={control} />*/}
        <TextField
          className={s.inputEmail}
          error={errors.email?.message}
          label={'Email'}
          // control={control}
          // name={'email'}
          placeholder={'Email'}
          {...register('email')}
        />
        <TextField
          className={s.inputPassword}
          error={errors.password?.message}
          label={'Password'}
          // control={control}
          // name={'password'}
          placeholder={'Password'}
          type={'password'}
          {...register('password')}
        />
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
          position={'left'}
        />
        <div className={s.forgotPasswordContainer}>
          <Typography as={'a'} className={s.forgotPasswordLink} href={'/'} variant={'body2'}>
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
      <Typography as={'a'} className={s.signInLink} href={'/'} variant={'h4'}>
        Sign Up
      </Typography>
    </Card>
  )
}
