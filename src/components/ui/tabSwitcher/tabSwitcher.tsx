import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Tabs from '@radix-ui/react-tabs'
import { v1 } from 'uuid'

import s from './tabSwitcher.module.scss'

type Button = {
  buttonsName: string
  isButtonsEnable: boolean
  values: string
}

type TabSwitcherProps = {
  buttons: Button[]
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = (props: TabSwitcherProps) => (
  <Tabs.Root className={s.TabsRoot} defaultValue={props.buttons[0].values}>
    <Tabs.List aria-label={'Manage your tabs'} className={s.TabsList}>
      {props.buttons.map(btn => {
        return (
          <Tabs.Trigger
            className={s.TabsTrigger}
            disabled={!btn.isButtonsEnable}
            key={v1()}
            value={btn.values}
          >
            <Typography as={'label'} className={s.label} variant={'body1'}>
              {btn.buttonsName}
            </Typography>
          </Tabs.Trigger>
        )
      })}
    </Tabs.List>
  </Tabs.Root>
)
