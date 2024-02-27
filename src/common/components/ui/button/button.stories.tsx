import type { Meta, StoryObj } from '@storybook/react'

import { LogoutIcon } from '@/assets/icons/logoutIcon'
import { Button } from '@/common/components/ui/button/index'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    children: [<LogoutIcon key={'primary-logout-icon'} />, 'Primary Button'],
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryWithIcon: Story = {
  args: {
    children: [<LogoutIcon key={'secondary-logout-icon'} />, 'Primary Button'],
    disabled: false,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}
