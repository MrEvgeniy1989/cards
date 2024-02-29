import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/common/components/ui/textField'

type ControlledInputProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'onBlur' | 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledInputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <TextField error={error?.message} {...field} {...restProps} />
}
