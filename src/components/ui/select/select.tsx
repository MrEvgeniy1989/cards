import { useState } from 'react'

import { ArrowDown } from '@/assets/icons/arrowDown'
import { ArrowUp } from '@/assets/icons/arrowUp'
import { Typography } from '@/components/ui/typography'
import * as SelectRadix from '@radix-ui/react-select'

import s from './select.module.scss'

type Props = {
  disabled?: boolean
  items: string[]
  label?: string
}

export const MySelect = ({ disabled, items, label }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SelectRadix.Root onOpenChange={() => setOpen(!open)}>
        <div className={s.selectRoot}>
          <Typography
            as={'label'}
            className={disabled ? s.labelDisabled : s.label}
            variant={'body2'}
          >
            {label}
          </Typography>

          <SelectRadix.Trigger className={s.SelectTrigger} disabled={disabled}>
            <SelectRadix.Value defaultValue={items[0]} placeholder={items[0]} />
            {open ? <ArrowUp className={s.SelectIcon} /> : <ArrowDown className={s.SelectIcon} />}
          </SelectRadix.Trigger>
        </div>

        <SelectRadix.Content className={s.SelectContent} position={'popper'}>
          <SelectRadix.Viewport className={s.SelectViewport}>
            {items.map(item => {
              return (
                <SelectRadix.Item className={s.SelectItem} key={item} value={item}>
                  <SelectRadix.ItemText>{item}</SelectRadix.ItemText>
                </SelectRadix.Item>
              )
            })}
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Root>
    </>
  )
}
