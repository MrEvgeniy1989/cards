import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'

import { store } from '@/app/store'
import { Header } from '@/common/components/ui/header/index'

const meta = {
  argTypes: {
    isLoggedIn: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },

  component: Header,
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
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
}

export const NoLoggedIn: Story = {
  args: {
    isLoggedIn: false,
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
}
