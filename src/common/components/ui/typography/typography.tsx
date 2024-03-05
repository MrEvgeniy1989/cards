import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from '@/common/components/ui/typography/typography.module.scss'

export type TypographyVariants =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'label'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

export type TextProps<T extends ElementType = 'p'> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?: TypographyVariants
} & Omit<ComponentPropsWithoutRef<T>, 'className'>

export const Typography = <T extends ElementType = 'p'>(
  props: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>
) => {
  const { as: Component = 'p', children, className, variant = 'body1', ...restProps } = props

  return (
    <Component {...restProps} className={clsx(s[variant], className ?? '')}>
      {children}
    </Component>
  )
}
