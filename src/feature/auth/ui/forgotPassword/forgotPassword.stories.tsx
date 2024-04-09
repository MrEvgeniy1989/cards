import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from '@/feature/auth/ui/forgotPassword/ForgotPassword'

const meta = {
  component: ForgotPassword,

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordStory: Story = {
  args: {},
}
