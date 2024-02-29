import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from '@/feature/auth/ui/signIn'
import { SignUp } from '@/feature/auth/ui/signUp'

import { Page } from './Page'

const meta: Meta<typeof Page> = {
  component: Page,
  tags: ['autodocs'],
  title: 'Components/Page',
}

export default meta
type Story = StoryObj<typeof meta>

export const SignInPage: Story = {
  args: {
    children: (
      <SignIn
        onSubmit={data => {
          console.log(data)
        }}
      />
    ),
  },
}

export const SignUpPage: Story = {
  args: {
    children: (
      <SignUp
        onSubmit={data => {
          console.log(data)
        }}
      />
    ),
  },
}
