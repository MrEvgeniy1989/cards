import type { Meta, StoryObj } from '@storybook/react'

import { MySelect } from '@/components/ui/select/select'

const meta = {
  argTypes: {},
  component: MySelect,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof MySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = {
  args: {
    disabled: false,
    items: ['Select-box_1', 'Select-box_2', 'Select-box_3', 'Select-box_4', 'Select-box_5'],
    label: 'Select-box',
  },
}
