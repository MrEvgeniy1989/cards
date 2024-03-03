import { Rating } from '@/common/components/ui/rating/Rating'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/Rating',
} satisfies Meta<typeof Rating>

export default meta

type Story = StoryObj<typeof meta>

export const Rating0: Story = {
  args: {},
}
export const Rating3: Story = {
  args: {
    rating: 3,
  },
}
export const Rating5: Story = {
  args: {
    rating: 5,
  },
}
