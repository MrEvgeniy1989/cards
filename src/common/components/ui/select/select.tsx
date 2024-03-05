import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { ArrowDown } from '@/assets/icons/arrowDown'
import { ArrowUp } from '@/assets/icons/arrowUp'
import * as SelectRadix from '@radix-ui/react-select'

import s from '@/common/components/ui/select/select.module.scss'

import { Typography } from '../typography'

export type OptionType = {
  title: string
  value: string
}
export type SelectProps = {
  className?: string
  disabled?: boolean
  label?: string
  options: OptionType[]
  styleForContent?: CSSProperties
  styleForItem?: CSSProperties
  styleForTrigger?: CSSProperties
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const MySelect = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>(
  (
    {
      className,
      disabled,
      label,
      options,
      styleForContent,
      styleForItem,
      styleForTrigger,
      ...restProps
    },
    ref
  ) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <SelectRadix.Root onOpenChange={() => setOpen(!open)} {...restProps}>
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
              className={`${s.selectTrigger} ${className ?? ''}`}
              disabled={disabled}
              ref={ref}
              style={styleForTrigger}
            >
              <SelectRadix.Value
                className={s.selectValue}
                defaultValue={options[0].value}
                placeholder={options[0].title}
              />
              {open ? <ArrowUp className={s.selectIcon} /> : <ArrowDown className={s.selectIcon} />}
            </SelectRadix.Trigger>

            <SelectRadix.Content
              className={s.selectContent}
              position={'popper'}
              style={styleForContent}
            >
              <SelectRadix.Viewport className={s.SelectViewport}>
                {options.map((option, index) => {
                  return (
                    <SelectRadix.Item
                      className={s.selectItem}
                      key={index}
                      style={styleForItem}
                      value={option.value}
                    >
                      <SelectRadix.ItemText>{option.title}</SelectRadix.ItemText>
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
)
