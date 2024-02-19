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
    items: ['100', '99', '98', '97', '96'],
  },
}
