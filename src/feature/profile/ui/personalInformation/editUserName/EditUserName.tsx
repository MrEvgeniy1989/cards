import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/common/components/controlled/controlledTextField/controlledTextField'
import { Button } from '@/common/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from '@/feature/profile/ui/personalInformation/editUserName/editUserName.module.scss'

const editUserNameSchema = z.object({
  name: z.string().trim().min(1),
})

export type EditUserNameFormValues = z.infer<typeof editUserNameSchema>
type Props = {
  name: string
  onEditName: (editMode: boolean) => void
  onSubmit: (data: EditUserNameFormValues) => void
}
export const EditUserName = ({ name, onEditName, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<EditUserNameFormValues>({
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(editUserNameSchema),
  })

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          className={s.inputName}
          control={control}
          defaultValue={name}
          error={errors.name?.message}
          label={'Nickname'}
          name={'name'}
          placeholder={'Nickname'}
        />
        <Button fullWidth type={'submit'} variant={'primary'}>
          Save Changes
        </Button>
      </form>
      <Button fullWidth onClick={() => onEditName(false)} variant={'secondary'}>
        Cancel
      </Button>
    </>
  )
}
