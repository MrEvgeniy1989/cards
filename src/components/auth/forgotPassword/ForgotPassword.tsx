import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './forgotPassword.module.scss'

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>
type Props = {
  onSubmit: (data: ForgotPasswordValues) => void
}

export const ForgotPassword = ({ onSubmit }: Props) => {
  const {
    // control,
    formState: { errors },
    handleSubmit,
    register,
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
      <Typography as={'a'} className={s.forgotPasswordLink} href={'/'} variant={'h4'}>
        Try logging in
      </Typography>
    </Card>
  )
}
