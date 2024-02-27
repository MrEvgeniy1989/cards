import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { CheckboxIcon } from '@/assets/icons/checkboxIcon'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import s from '@/common/components/ui/checkbox/checkbox.module.scss'

import { Typography } from '../typography'

export type CheckboxProps = {
  checked: boolean
  id?: string
  label?: string
  onCheckedChange: (checked: boolean) => void
  position?: 'default' | 'left'
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ checked, disabled, id, label, onCheckedChange, position = 'default', ...restProps }, ref) => (
    <div className={`${s.container} ${s[position]}`}>
      <LabelRadix.Root asChild>
        <Typography as={'label'} className={disabled ? s.labelDisabled : s.label} variant={'body2'}>
          <div aria-disabled={disabled} className={s.buttonWrapper}>
            <CheckboxRadix.Root
              {...restProps}
              checked={checked}
              className={s.root + ' ' + restProps.className ?? ''}
              disabled={disabled}
              id={id}
              onCheckedChange={onCheckedChange}
              ref={ref}
            >
              {checked && (
                <CheckboxRadix.Indicator className={s.indicator}>
                  <CheckboxIcon />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
      </LabelRadix.Root>
    </div>
  )
)
