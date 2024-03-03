import { Meta, StoryObj } from '@storybook/react'

import { LinearProgressBar } from './LinearProgressBar'

const meta: Meta<typeof LinearProgressBar> = {
  component: LinearProgressBar,
  tags: ['autodocs'],
  title: 'Components/LinearProgressBar',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
