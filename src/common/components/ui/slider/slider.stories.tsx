import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider, SliderProps } from '@/common/components/ui/slider/Slider'

const meta = {
  component: Slider,
  parameters: {},
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

const ControlledSlider = (args: SliderProps) => {
  const [value, setValue] = useState(args.value)

  const handleOnValueChange = (value: number[]) => {
    setValue(value)
  }

  return <Slider {...args} onValueChange={handleOnValueChange} value={value} />
}

export const Default: Story = {
  args: { max: 100, min: 0, step: 1, value: [25, 75] },
  render: args => <ControlledSlider {...args} />,
}
