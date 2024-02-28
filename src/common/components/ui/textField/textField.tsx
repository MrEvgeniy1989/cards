import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { IconClose, IconEye, IconSearch } from '@/assets'
import cx from 'clsx'

import s from '@/common/components/ui/textField/textField.module.scss'

import { Typography } from '../typography'

export type TextFieldProps = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<ElementRef<'input'>, TextFieldProps>(
  ({ children, error, label, type = 'text', ...rest }, ref) => {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)
    const showPass = () => setShow(!show)

    const showClearButton = type === 'search' && value.length > 0
    const showError = !!error && error.length > 0
    const classInput = cx(s[type], s.input, showError && s.error)

    const clearButton = (
      <button className={s.buttonIcon} onClick={() => setValue('')} type={'button'}>
        <IconClose />
      </button>
    )
    const eyeButton = type === 'password' && (
      <button className={s.buttonIcon} onMouseDown={showPass} onMouseUp={showPass} type={'button'}>
        <IconEye />
      </button>
    )

    return (
      <div className={s.box + ' ' + rest.className}>
        <Typography as={'label'} className={s.label} variant={'body1'}>
          {type === 'search' ? '' : label}
        </Typography>
        <div className={s.inputBox}>
          {type === 'search' && <IconSearch className={s.searchIcon} />}
          <input
            {...rest}
            className={classInput}
            onChange={e => setValue(e.currentTarget.value)}
            ref={ref}
            type={(show && 'text') || type}
            value={value}
          />
          {showClearButton && clearButton}
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
