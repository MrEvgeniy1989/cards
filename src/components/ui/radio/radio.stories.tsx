import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

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

const optionsDisabled = [
  { disabled: true, label: 'RadioGroup', value: 'r1' },
  { disabled: true, label: 'Radio', value: 'r2' },
  { label: 'Group', value: 'r3' },
  { label: 'Radio', value: 'r4' },
  { label: 'RadioGroup', value: 'r5' },
]

export const Default: Story = {
  args: { options: options },
}

export const Desabled: Story = {
  args: { options: optionsDisabled },
}

export const Controlled: Story = {
  args: {
    options,
  },
  render: () => {
    const [current, setCurrent] = useState('r1')

    const handleChangeCurrentRadio = (radioValue: string) => {
      setCurrent(radioValue)
    }

    return (
      <RadioGroupDemo onValueChange={handleChangeCurrentRadio} options={options} value={current} />
    )
  },
}
