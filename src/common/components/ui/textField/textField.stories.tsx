import type { Meta, StoryObj } from '@storybook/react'

import { ChangeEvent } from 'react'

import { TextField } from '@/common/components/ui/textField/index'
import { useArgs } from '@storybook/preview-api'

const meta = {
  argTypes: {
    onChange: {},
    onClick: { action: 'clicked' },
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
    label: 'Password',
    placeholder: 'Input',
    type: 'password',
    value: 'password',
  },
}
export const Search: Story = {
  args: {
    label: 'Search',
    placeholder: 'Input',
    type: 'search',
  },
  render: args => {
    const [, setArgs] = useArgs()

    const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      args.onChange?.(e)

      setArgs({ value: e.currentTarget.value })
    }

    return <TextField type={'search'} {...args} onChange={onValueChange} />
  },
}
export const Error: Story = {
  args: {
    error: 'Error!',
    label: 'Input',
    placeholder: 'Error',
  },
}
