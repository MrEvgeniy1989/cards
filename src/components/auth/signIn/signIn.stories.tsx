import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from './SignIn'

const meta = {
  component: SignIn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/LoginForm',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const SignInStory: Story = {
  args: {},
}
