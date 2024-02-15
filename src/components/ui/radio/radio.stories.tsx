import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroupDemo } from '.'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
  component: RadioGroupDemo,
  tags: ['autodocs'],
  title: 'Components/Radio',
} satisfies Meta<typeof RadioGroupDemo>

export default meta

type Story = StoryObj<typeof meta>

const options = [
  { label: 'RadioGroup', value: 'r1' },
  { label: 'Radio', value: 'r2' },
  { label: 'Group', value: 'r3' },
  { label: 'Radio', value: 'r4' },
  { label: 'RadioGroup', value: 'r5' },
]

export const Default: Story = {
  args: { disabled: false, options },
}
// export const Disabled: Story = {
//   args: options,
// };
