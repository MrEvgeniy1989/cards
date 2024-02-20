import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './'

const meta = {
  argTypes: {
    isLoggedIn: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const IsLoggedIn: Story = {
  args: {
    isLoggedIn: true,
  },
}
export const NoLoggedIn: Story = {
  args: {
    isLoggedIn: false,
  },
}
