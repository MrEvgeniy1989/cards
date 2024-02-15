import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './'

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
      { buttonsName: 'switcher', isButtonsEnable: true, values: 'tab1' },
      { buttonsName: 'switcher', isButtonsEnable: true, values: 'tab2' },
      { buttonsName: 'switcher', isButtonsEnable: true, values: 'tab3' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    buttons: [{ buttonsName: 'switcher', isButtonsEnable: false, values: 'tab1' }],
  },
}
