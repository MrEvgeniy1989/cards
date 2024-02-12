import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import s from './checkbox.module.scss'

type Props = {
  checked?: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange: (checked: boolean) => void
}

export const Checkbox = ({ checked, disabled, id, label, onChange }: Props) => (
  <div className={s.container}>
    <LabelRadix.Root asChild>
      <Typography as={'label'} className={disabled ? s.labelDisabled : s.label} variant={'body2'}>
        <div aria-disabled={disabled} className={s.buttonWrapper}>
          <CheckboxRadix.Root
            checked={checked}
            className={s.root}
            disabled={disabled}
            id={id}
            onCheckedChange={onChange}
          >
            {checked && (
              <CheckboxRadix.Indicator className={s.indicator}>
                <svg
                  fill={'none'}
                  height={18}
                  viewBox={'0 0 18 18'}
                  width={18}
                  xmlns={'http://www.w3.org/2000/svg'}
                >
                  <path
                    d={
                      'M16 0H2a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V2a2 2 0 00-2-2zM7 14L2 9l1.41-1.41L7 11.17l7.59-7.59L16 5l-9 9z'
                    }
                    fill={'currentColor'}
                  />
                </svg>
              </CheckboxRadix.Indicator>
            )}
          </CheckboxRadix.Root>
        </div>
        {label}
      </Typography>
    </LabelRadix.Root>
  </div>
)
