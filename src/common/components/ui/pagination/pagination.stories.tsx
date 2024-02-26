import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination, PaginationProps } from '@/common/components/ui/pagination/Pagination'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Pagination',
}

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { title: '10', value: '10' },
  { title: '20', value: '20' },
  { title: '30', value: '30' },
  { title: '40', value: '40' },
  { title: '50', value: '50' },
]
const PaginationWithHooks = (args: PaginationProps) => {
  const [pageSize, setPageSize] = useState(args.pageSize)
  const [currentPage, setCurrentPage] = useState(1)

  const onChangePageSize = (value: string) => {
    setPageSize(Number(value))
  }

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      onValueChange={onChangePageSize}
      options={options}
      pageSize={pageSize}
      totalCount={args.totalCount}
      value={pageSize.toString()}
    />
  )
}

export const Default: Story = {
  args: {
    currentPage: 1,
    options,
    pageSize: 10,
    totalCount: 87,
    value: '10',
  },
}

export const Controlled: Story = {
  args: { pageSize: 10, totalCount: 120 },
  render: args => <PaginationWithHooks {...args} />,
}
