import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from '@/feature/profile/ui/personalInformation/PersonalInformation'

const meta = {
  component: PersonalInformation,
  parameters: {},
  tags: ['autodocs'],
  title: 'Profile/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const PersonalInformationStory: Story = {
  args: {
    email: 'j&johnson@gmail.com',
    name: 'Ivan',
  },
}
