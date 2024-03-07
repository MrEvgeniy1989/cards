import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './index'

const meta = {
  argTypes: {
    // type: {
    //   control: { type: 'radio' },
    // },
  },
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    buttons: [
      { buttonsName: 'switcher', disabled: false, value: 'tab1' },
      { buttonsName: 'switcher', disabled: false, value: 'tab2' },
      { buttonsName: 'switcher', disabled: false, value: 'tab3' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    buttons: [
      { buttonsName: 'switcher', disabled: true, value: 'tab1' },
      { buttonsName: 'switcher', disabled: true, value: 'tab2' },
      { buttonsName: 'switcher', disabled: true, value: 'tab3' },
    ],
  },
}
