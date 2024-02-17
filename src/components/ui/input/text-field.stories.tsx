import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['default', 'password', 'search', 'error'],
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
  },
}
export const Password: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
  },
}
export const Search: Story = {
  args: {
    label: 'Search',
    placeholder: 'Input',
    type: 'search',
  },
}
export const Error: Story = {
  args: {
    error: 'Error!',
    label: 'Input',
    placeholder: 'Error',
  },
}
