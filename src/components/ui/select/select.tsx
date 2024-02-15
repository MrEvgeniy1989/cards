import { CSSProperties, useState } from 'react'

import { ArrowDown } from '@/assets/icons/arrowDown'
import { ArrowUp } from '@/assets/icons/arrowUp'
import { Typography } from '@/components/ui/typography'
import * as SelectRadix from '@radix-ui/react-select'

import s from './select.module.scss'

type Props = {
  disabled?: boolean
  items: string[]
  label?: string
  styleForContent?: CSSProperties
  styleForItem?: CSSProperties
  styleForTrigger?: CSSProperties
}

export const MySelect = ({
  disabled,
  items,
  label,
  styleForContent,
  styleForItem,
  styleForTrigger,
}: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SelectRadix.Root onOpenChange={() => setOpen(!open)}>
        <div className={s.selectRoot}>
          {label && (
            <Typography
              as={'label'}
              className={disabled ? s.labelDisabled : s.label}
              variant={'body2'}
            >
              {label}
            </Typography>
          )}

          <SelectRadix.Trigger
            className={s.SelectTrigger}
            disabled={disabled}
            style={styleForTrigger}
          >
            <SelectRadix.Value
              className={s.SelectValue}
              defaultValue={items[0]}
              placeholder={items[0]}
            />
            {open ? <ArrowUp className={s.SelectIcon} /> : <ArrowDown className={s.SelectIcon} />}
          </SelectRadix.Trigger>

          <SelectRadix.Content
            className={s.SelectContent}
            position={'popper'}
            style={styleForContent}
          >
            <SelectRadix.Viewport className={s.SelectViewport}>
              {items.map(item => {
                return (
                  <SelectRadix.Item
                    className={s.SelectItem}
                    key={item}
                    style={styleForItem}
                    value={item}
                  >
                    <SelectRadix.ItemText>{item}</SelectRadix.ItemText>
                  </SelectRadix.Item>
                )
              })}
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </div>
      </SelectRadix.Root>
    </>
  )
}
