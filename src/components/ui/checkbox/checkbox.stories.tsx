import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox/checkbox'

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/MyCheckbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Controlled: Story = {
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <Checkbox
        {...args}
        checked={checked}
        label={'Check-box'}
        onChange={() => setChecked(!checked)}
      />
    )
  },
}
export const UncontrolledChecked: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Check-box',
  },
}
export const UncontrolledUnchecked: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Check-box',
  },
}
