import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from '@/components/auth/createNewPassword/CreateNewPassword'

const meta = {
  component: CreateNewPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/CreateNewPassword',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const CreateNewPasswordStory: Story = {
  args: {},
}
