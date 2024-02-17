import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

type DropdownMenuContentProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
const DropdownMenuContent = ({
  align = 'end',
  children,
  className,
  sideOffset = 8,
  ...props
}: DropdownMenuContentProps) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        align={align}
        className={clsx(s.content, className)}
        sideOffset={8}
        {...props}
      >
        <DropdownMenuPrimitive.Arrow asChild>
          <div className={s.arrow} />
        </DropdownMenuPrimitive.Arrow>
        <div className={s.itemsWrapper}>{children}</div>
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
}

const DropdownMenuItem = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>) => {
  return <DropdownMenuPrimitive.Item className={clsx(s.item, className)} {...props} />
}

const DropdownMenuSeparator = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>) => {
  return <DropdownMenuPrimitive.Separator className={clsx(s.separator, className)} {...props} />
}

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
}
