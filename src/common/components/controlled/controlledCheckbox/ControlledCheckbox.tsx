import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/common/components/ui/checkbox'

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'className' | 'id' | 'onCheckedChange'> & { className?: string }

export const ControlledCheckbox = <T extends FieldValues>({
  className,
  control,
  name,
  ...restProps
}: ControlledInputProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return (
    <Checkbox {...restProps} checked={value} className={className} onCheckedChange={onChange} />
  )
}
