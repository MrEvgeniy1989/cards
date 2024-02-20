import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

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

export const CustomRadioGroup = forwardRef<ElementRef<typeof RadioGroup.Root>, Group>(
  (props, ref) => {
    const { options, ...rest } = props

    return (
      <RadioGroup.Root className={s.root} ref={ref} {...rest} defaultValue={options[0].value}>
        {options.map((item, index) => (
          <RadioItem key={index} {...item} />
        ))}
      </RadioGroup.Root>
    )
  }
)
