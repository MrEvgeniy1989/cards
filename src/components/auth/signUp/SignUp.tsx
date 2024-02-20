import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './signUp.module.scss'

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
  onSubmit: (data: FormValues) => void
}
export const SignUp = ({ onSubmit }: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
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
      <Typography as={'h1'} className={s.formHeader} variant={'h1'}>
        Sign Up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={s.inputEmail}
          error={errors.email?.message}
          label={'Email'}
          placeholder={'Email'}
          {...register('email')}
        />
        <TextField
          className={s.inputPassword}
          error={errors.password?.message}
          label={'Password'}
          placeholder={'Password'}
          type={'password'}
          {...register('password')}
        />
        <TextField
          className={s.inputConfirmPassword}
          error={errors.confirmPassword?.message}
          label={'Confirm Password'}
          placeholder={'Confirm Password'}
          type={'password'}
          {...register('confirmPassword')}
        />
        <Button className={s.formButton} fullWidth type={'submit'}>
          Sign Up
        </Button>
      </form>
      <Typography className={s.infoText} variant={'body2'}>
        {`Already have an account?`}
      </Typography>
      <Typography as={'a'} className={s.signInLink} href={'/'} variant={'h4'}>
        Sign In
      </Typography>
    </Card>
  )
}
