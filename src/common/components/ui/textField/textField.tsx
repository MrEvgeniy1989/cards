import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useState,
} from 'react'

import { IconClose, IconEye, IconSearch } from '@/assets'
import cx from 'clsx'

import s from '@/common/components/ui/textField/textField.module.scss'

import { Typography } from '../typography'

export type TextFieldProps = {
  error?: string
  label?: string
  onChangeValue?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<ElementRef<'input'>, TextFieldProps>(
  ({ children, error, label, onChange, onChangeValue, type = 'text', value, ...rest }, ref) => {
    const [show, setShow] = useState(false)
    const showPass = () => setShow(!show)

    const isShowClearButton =
      type === 'search' && value !== undefined && value.toString().length > 0
    const showError = !!error && error.length > 0
    const classInput = cx(s[type], s.input, showError && s.error)

    const clearButton = onChange && (
      <button
        className={s.buttonIcon}
        onClick={() => onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)}
        type={'button'}
      >
        <IconClose />
      </button>
    )

    const eyeButton = type === 'password' && (
      <button className={s.buttonIcon} onMouseDown={showPass} onMouseUp={showPass} type={'button'}>
        <IconEye />
      </button>
    )

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onChangeValue?.(e.currentTarget.value)
    }

    return (
      <div className={s.box + ' ' + rest.className}>
        <Typography as={'label'} className={s.label} variant={'body2'}>
          {type === 'search' ? '' : label}
        </Typography>
        <div className={s.inputBox}>
          {type === 'search' && <IconSearch className={s.searchIcon} />}
          <input
            {...rest}
            className={classInput}
            onChange={onChangeValueHandler}
            ref={ref}
            type={(show && 'text') || type}
            value={value}
          />
          {isShowClearButton && clearButton}
          {eyeButton}
        </div>
        {showError && (
          <Typography as={'label'} className={s.error} variant={'caption'}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
