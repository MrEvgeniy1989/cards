import type { Meta, StoryObj } from '@storybook/react'

import { BaseTable } from '@/common/components/ui/baseTable/baseTable'
import { Table } from '@/common/components/ui/baseTable/table'

const meta = {
  argTypes: {},
  component: BaseTable,
  tags: ['auto docs'],
  title: 'Components/Table',
} satisfies Meta<typeof BaseTable>

export default meta
type Story = StoryObj<typeof BaseTable>

export const Default: Story = {}
export const EmptyTable: Story = {
  render: () => (
    <Table.Empty text={'Your Decks list is empty. Click Add New Deck to fill this deck.'} />
  ),
}
