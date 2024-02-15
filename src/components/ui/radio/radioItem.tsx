import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

export type RadioOption = {
  disabled?: boolean
  label: string
  value: string
}

export const RadioItem = (props: RadioOption) => (
  <div className={s.itemWrap}>
    <RadioGroup.Item className={s.item} id={props.value} value={props.value}>
      <RadioGroup.Indicator className={s.indicator} />
    </RadioGroup.Item>
    <label className={s.label} htmlFor={props.value}>
      {props.label}
    </label>
  </div>
)
