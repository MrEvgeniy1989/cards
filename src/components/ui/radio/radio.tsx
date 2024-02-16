import { ComponentPropsWithoutRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

import { RadioItem } from './radioItem'

type RadioOption = {
  disabled?: boolean
  label: string
  value: string
}

type Group = {
  options: RadioOption[]
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const RadioGroupDemo = (props: Group) => (
  <form>
    <RadioGroup.Root aria-label={'View density'} className={s.root} defaultValue={'r1'}>
      {props.options.map((item, index) => (
        <RadioItem key={index} {...item} />
      ))}
    </RadioGroup.Root>
  </form>
)
