import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { IconClose, IconEye, IconSearch } from '@/assets'
import { Typography } from '@/components/ui/typography'
import cx from 'clsx'

import s from 'src/components/ui/textField/textField.module.scss'

type TextFieldProps = {
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
      <div className={s.box}>
        <Typography as={'label'} className={s.label} variant={'body1'}>
          {type === 'search' ? '' : label}
        </Typography>
        <div className={s.inputBox}>
          {type === 'search' && <IconSearch className={s.searchIcon} />}
          <input
            className={classInput}
            type={(show && 'text') || type}
            {...rest}
            onChange={e => setValue(e.currentTarget.value)}
            ref={ref}
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
