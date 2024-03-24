import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ControlledTextField } from '@/common/components/controlled/controlledTextField/controlledTextField'
import { Button } from '@/common/components/ui/button'
import { Card } from '@/common/components/ui/card'
import { Typography } from '@/common/components/ui/typography'
import { Route } from '@/common/enums'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from '@/feature/auth/ui/signUp/signUp.module.scss'

const signUpSchema = z
  .object({
    confirmPassword: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      })
    }

    return data
  })

export type FormValues = z.infer<typeof signUpSchema>
type Props = {
  emailExist?: string
  onSubmit: (data: FormValues) => void
}
export const SignUp = ({ emailExist, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  return (
    <Card className={s.signUpWrapper}>
      <Typography as={'h1'} className={s.formTitle} variant={'h1'}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          className={s.inputEmail}
          control={control}
          error={errors.email?.message || emailExist}
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
        <ControlledTextField
          className={s.inputConfirmPassword}
          control={control}
          error={errors.confirmPassword?.message}
          label={'Confirm Password'}
          name={'confirmPassword'}
          placeholder={'Confirm Password'}
          type={'password'}
        />
        <Button className={s.formButton} fullWidth type={'submit'}>
          Sign Up
        </Button>
      </form>
      <Typography className={s.infoText} variant={'body2'}>
        {`Already have an account?`}
      </Typography>
      <Typography as={Link} className={s.signInLink} to={Route.SignIn} variant={'h4'}>
        Sign In
      </Typography>
    </Card>
  )
}
