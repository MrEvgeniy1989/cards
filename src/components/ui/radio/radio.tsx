import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

import { RadioItem } from './radioItem'

export type RadioOption = {
  disabled?: boolean
  label: string
  value: string
}

export type GroupProps = {
  options: RadioOption[]
} & ComponentPropsWithoutRef<typeof RadioGroup.Root>

export const CustomRadioGroup = forwardRef<ElementRef<typeof RadioGroup.Root>, GroupProps>(
  (props, ref) => {
    const { className, options, ...rest } = props

    return (
      <div>
        <RadioGroup.Root
          aria-label={'View density'}
          className={`${s.root} ${className}`}
          ref={ref}
          {...rest}
        >
          {options.map((item, index) => (
            <RadioItem key={index} {...item} />
          ))}
        </RadioGroup.Root>
      </div>
    )
  }
)
