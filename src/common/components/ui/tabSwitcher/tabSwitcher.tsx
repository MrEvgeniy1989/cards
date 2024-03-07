import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/common/components/ui/typography'
import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'
import { v1 } from 'uuid'

import s from './tabSwitcher.module.scss'

type Button = {
  buttonsName: string
  disabled: boolean
  value: string
}

type TabSwitcherProps = {
  buttons: Button[]
  className?: string
  label?: string
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = ({ buttons, className, label, ...rest }: TabSwitcherProps) => (
  <div className={clsx(s.TabsWrapping, className)}>
    {label && (
      <Typography as={'label'} variant={'body2'}>
        {label}
      </Typography>
    )}
    <Tabs.Root {...rest} className={s.TabsRoot} defaultValue={buttons[1].value}>
      <Tabs.List aria-label={'Manage your tabs'} className={s.TabsList}>
        {buttons.map(btn => {
          return (
            <Tabs.Trigger
              className={s.TabsTrigger}
              disabled={btn.disabled}
              key={v1()}
              value={btn.value}
            >
              <Typography as={'label'} variant={'body1'}>
                {btn.buttonsName}
              </Typography>
            </Tabs.Trigger>
          )
        })}
      </Tabs.List>
    </Tabs.Root>
  </div>
)
