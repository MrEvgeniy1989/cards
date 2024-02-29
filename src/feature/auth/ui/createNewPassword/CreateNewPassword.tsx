import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from '@/feature/auth/ui/createNewPassword/createNewPassword.module.scss'

import { Button } from '../../../../common/components/ui/button'
import { Card } from '../../../../common/components/ui/card'
import { TextField } from '../../../../common/components/ui/textField'
import { Typography } from '../../../../common/components/ui/typography'

const newPasswordSchema = z.object({
  password: z.string().min(3),
})

export type FormValues = z.infer<typeof newPasswordSchema>
type Props = {
  onSubmit: (data: FormValues) => void
}
export const CreateNewPassword = ({ onSubmit }: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(newPasswordSchema),
  })

  return (
    <Card className={s.newPasswordWrapper}>
      <Typography as={'h1'} className={s.formTitle} variant={'h1'}>
        Create new password
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={s.inputPassword}
          error={errors.password?.message}
          label={'Password'}
          placeholder={'Password'}
          type={'password'}
          {...register('password')}
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
