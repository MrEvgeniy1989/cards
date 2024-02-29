import { ComponentPropsWithoutRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from '@/common/components/ui/radio/radio.module.scss'

import { Typography } from '../typography'

export type RadioOption = {
  label: string
} & ComponentPropsWithoutRef<typeof RadioGroup.Item>

export const RadioItem = (props: RadioOption) => {
  const { disabled, label, title, value, ...rest } = props

  return (
    <div className={s.itemWrap}>
      <RadioGroup.Item className={s.item} disabled={disabled} id={value} value={value} {...rest}>
        <RadioGroup.Indicator className={s.indicator} />
      </RadioGroup.Item>
      <Typography as={'label'} className={s.label} htmlFor={value} variant={'body2'}>
        {label}
      </Typography>
    </div>
  )
}
