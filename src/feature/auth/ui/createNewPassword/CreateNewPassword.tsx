import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/common/components/controlled/controlledTextField/controlledTextField'
import { Button } from '@/common/components/ui/button'
import { Card } from '@/common/components/ui/card'
import { Typography } from '@/common/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from '@/feature/auth/ui/createNewPassword/createNewPassword.module.scss'

const newPasswordSchema = z
  .object({
    password: z.string().min(3, {
      message: 'your password is too short',
    }),
    repeatPassword: z.string().min(3, {
      message: 'please repeat you password',
    }),
  })
  .refine(data => data.password === data.repeatPassword, {
    message: 'passwords do not match',
    path: ['repeatPassword'],
  })

export type FormValues = z.infer<typeof newPasswordSchema>
type Props = {
  onSubmit: (data: FormValues) => void
}
export const CreateNewPassword = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
    resolver: zodResolver(newPasswordSchema),
  })

  return (
    <Card className={s.newPasswordWrapper}>
      <Typography as={'h1'} className={s.formTitle} variant={'h1'}>
        Create new password
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          className={s.inputPassword}
          control={control}
          error={errors.password?.message}
          label={'Password'}
          name={'password'}
          placeholder={'password'}
          type={'password'}
        />
        <ControlledTextField
          className={s.inputPassword}
          control={control}
          error={errors.repeatPassword?.message}
          label={'Confirm password'}
          name={'repeatPassword'}
          placeholder={'repeat password'}
          type={'password'}
        />

        <Typography className={s.infoText} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button className={s.formButton} fullWidth type={'submit'}>
          Create new password
        </Button>
      </form>
    </Card>
  )
}
