import type { Meta, StoryObj } from '@storybook/react'

import { BaseTable } from '@/components/ui/baseTable/baseTable'

const meta = {
  argTypes: {},
  component: BaseTable,
  tags: ['auto docs'],
  title: 'Components/Table',
} satisfies Meta<typeof BaseTable>

export default meta
type Story = StoryObj<typeof BaseTable>

export const Default: Story = {}
