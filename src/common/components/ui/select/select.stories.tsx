import type { Meta, StoryObj } from '@storybook/react'

import { MySelect } from '@/common/components/ui/select/select'

const meta = {
  argTypes: {},
  component: MySelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof MySelect>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = {
  args: {
    disabled: false,
    label: 'Select-box',
    options: [
      { title: 'Select-box_1', value: 'Select-box_1' },
      { title: 'Select-box_2', value: 'Select-box_2' },
      { title: 'Select-box_3', value: 'Select-box_3' },
      { title: 'Select-box_4', value: 'Select-box_4' },
      { title: 'Select-box_5', value: 'Select-box_5' },
    ],
    styleForItem: { minHeight: '2.25rem', minWidth: '13rem' },
    styleForTrigger: {
      justifyContent: 'space-between',
      minHeight: '2.25rem',
      minWidth: '13.12rem',
      padding: '0 12px',
    },
  },
}
export const SelectForPagination: Story = {
  args: {
    disabled: false,
    options: [
      { title: '10', value: '10' },
      { title: '20', value: '20' },
      { title: '30', value: '30' },
      { title: '40', value: '40' },
      { title: '50', value: '50' },
    ],
  },
}
