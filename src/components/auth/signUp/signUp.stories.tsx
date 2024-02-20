import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from './SignUp'

const meta = {
  component: SignUp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpStory: Story = {
  args: {},
}
