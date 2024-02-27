import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from '@/common/components/ui/slider/slider'

const meta = {
  component: Slider,
  parameters: {},
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: [25, 75] },
}
export const ControlledSliderStory = () => {
  const [controlledValue, setControlledValue] = useState([25, 75])

  const handleControlledChange = (newValue: [number, number]) => {
    setControlledValue(newValue)
  }

  return <Slider max={100} onValueChange={handleControlledChange} value={controlledValue} />
}
