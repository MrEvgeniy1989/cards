import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/common/components/ui/card'
import { FormValues, LearnForm } from '@/feature/learn/LearnForm'

const meta = {
  component: LearnForm,
  parameters: {
    layout: 'centered',
  },
  title: 'Forms/LearnForm',
} satisfies Meta<typeof LearnForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {} as any,
  render: () => {
    const onSubmit = (data: FormValues) => {
      alert(JSON.stringify(data))
    }

    return (
      <Card style={{ padding: '48px 36px', width: '420px' }}>
        <LearnForm onSubmit={onSubmit} />
      </Card>
    )
  },
}
