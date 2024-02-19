import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controlled/controlledCheckbox/ControlledCheckbox'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    // console.log(data)
    return data
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField error={errors.email?.message} {...register('email')} label={'email'} />
      <TextField
        error={errors.password?.message}
        type={'password'}
        {...register('password')}
        label={'password'}
      />
      <ControlledCheckbox
        control={control}
        label={'remember me'}
        name={'rememberMe'}
        position={'left'}
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
