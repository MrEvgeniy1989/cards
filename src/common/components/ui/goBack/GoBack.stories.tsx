import type { Meta, StoryObj } from '@storybook/react'

import { GoBack } from '@/common/components/ui/goBack/GoBack'

const meta = {
  component: GoBack,
  tags: ['autodocs'],
  title: 'Components/GoBack',
} satisfies Meta<typeof GoBack>

export default meta
type Story = StoryObj<typeof meta>

export const GoBackWithoutTo: Story = {
  args: {
    text: 'Back to Previous Page',
  },
}

export const GoBackWithTo: Story = {
  args: {
    text: 'Back to Previous Page',
    to: '/decks',
  },
}
