import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { ControlledRadioGroup } from '@/common/components/controlled/controlledRadioGroup/controlledRadioGroup'
import { Button } from '@/common/components/ui/button'
import { RadioOption } from '@/common/components/ui/radio'

import s from './learnForm.module.scss'

const options: RadioOption[] = [
  { label: 'Did not know', value: '1' },
  { label: 'Forgot', value: '2' },
  { label: 'A lot of thought', value: '3' },
  { label: 'Confused', value: '4' },
  { label: 'Knew the answer', value: '5' },
]

export type FormValues = {
  grade: string
}

type Props = {
  onSubmit: (data: FormValues) => void
}

export const LearnForm: FC<Props> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { grade: '1' },
  })

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <ControlledRadioGroup
        className={s.radio}
        control={control}
        name={'grade'}
        options={options}
      />

      <Button fullWidth>Next Question</Button>
    </form>
  )
}
