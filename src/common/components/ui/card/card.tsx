import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from '@/common/components/ui/card/card.module.scss'

export type CardProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>

type CardComponent = <T extends ElementType = 'div'>(
  props: CardProps<T> & { ref?: Ref<ElementRef<T>> }
) => ReactNode

export const Card: CardComponent = forwardRef(({ as, children, className, ...rest }, ref) => {
  const Component: ElementType = as ?? 'div'

  return (
    <Component className={clsx(s.card, className)} {...rest} ref={ref}>
      {children}
    </Component>
  )
})
