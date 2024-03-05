import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/common/components/ui/typography'
import * as Tabs from '@radix-ui/react-tabs'
import { v1 } from 'uuid'

import s from './tabSwitcher.module.scss'

type Button = {
  isButtonsEnable: boolean
  label: string
  values: string
}

type TabSwitcherProps = {
  buttons: Button[]
  className?: string
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = ({ buttons, className, ...rest }: TabSwitcherProps) => (
  <Tabs.Root {...rest} className={s.TabsRoot} defaultValue={buttons[0].values}>
    <Tabs.List aria-label={'Manage your tabs'} className={s.TabsList}>
      {buttons.map(btn => {
        return (
          <Tabs.Trigger
            className={`${s.TabsTrigger} ${className ?? ''}`}
            disabled={!btn.isButtonsEnable}
            key={v1()}
            value={btn.values}
          >
            <Typography as={'label'} className={s.label} variant={'body1'}>
              {btn.label}
            </Typography>
          </Tabs.Trigger>
        )
      })}
    </Tabs.List>
  </Tabs.Root>
)
