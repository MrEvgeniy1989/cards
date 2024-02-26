import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from '@/feature/auth/ui/checkEmail/CheckEmail'

const meta = {
  component: CheckEmail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailStory: Story = {
  args: {
    email: 'example@mail.com',
  },
}
