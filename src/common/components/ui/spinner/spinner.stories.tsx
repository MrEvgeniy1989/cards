import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from '@/common/components/ui/spinner/Spinner'

const meta = {
  component: Spinner,
  parameters: {},
  tags: ['autodocs'],
  title: 'Components/Spinner',
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Spinner />,
}
