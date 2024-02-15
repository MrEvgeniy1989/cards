import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

import { RadioItem, RadioOption } from './radioItem'

type Group = {
  disabled?: boolean
  options: RadioOption[]
}

export const RadioGroupDemo = (props: Group) => (
  <form>
    <RadioGroup.Root aria-label={'View density'} className={s.root} defaultValue={'r1'}>
      {props.options.map((item, index) => (
        <RadioItem key={index} label={item.label} value={item.value} />
      ))}
    </RadioGroup.Root>
  </form>
)
