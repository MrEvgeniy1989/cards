import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CustomRadioGroup, GroupProps } from '@/common/components/ui/radio'

type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<GroupProps, 'id' | 'onChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>(
  props: ControlledRadioGroupProps<T>
) => {
  const { control, defaultValue, name, ...rest } = props

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
  })

  return <CustomRadioGroup id={name} onValueChange={onChange} value={value} {...rest} />
}
