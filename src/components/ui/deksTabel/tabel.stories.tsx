import type { Meta, StoryObj } from '@storybook/react'

import { Tabel } from './'

const meta = {
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['default', 'password', 'search', 'error'],
    },
  },
  component: Tabel,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Tabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
  },
}
