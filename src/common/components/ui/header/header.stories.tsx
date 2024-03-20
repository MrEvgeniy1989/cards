import type { DecoratorFn, Meta, StoryObj } from '@storybook/react'

import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { Header } from '@/common/components/ui/header/index'

const reactRouterDecorator: DecoratorFn = Story => {
  return (
    <MemoryRouter>
      <Routes>
        <Route element={<Story />} path={'/*'} />
      </Routes>
    </MemoryRouter>
  )
}

const meta = {
  argTypes: {
    isLoggedIn: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },

  component: Header,
  decorators: [reactRouterDecorator],
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const IsLoggedIn: Story = {
  args: {
    email: 'yourEmail',
    isLoggedIn: true,
    onLogout: () => {},
    toProfile: () => {},
    userName: 'yourName',
  },
}

export const NoLoggedIn: Story = {
  args: {
    isLoggedIn: false,
  },
}
