import { CheckboxIcon } from '@/assets/icons/checkboxIcon'
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
