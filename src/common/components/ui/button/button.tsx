import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from '@/common/components/ui/button/button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'empty' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component {...rest} className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} />
  )
}
