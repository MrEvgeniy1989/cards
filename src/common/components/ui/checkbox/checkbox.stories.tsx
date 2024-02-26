import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from '@/common/components/ui/checkbox/checkbox'

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/MyCheckbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Controlled: Story = {
  args: {
    checked: false,
    label: 'Check-box',
    onCheckedChange: () => {},
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked)

    return <Checkbox {...args} checked={checked} onCheckedChange={() => setChecked(!checked)} />
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
