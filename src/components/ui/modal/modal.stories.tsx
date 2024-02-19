import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { IconImage } from '@/assets/icons/iconImage'
import reactImg from '@/assets/images/reactImg.png'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal/modal'
import { MySelect } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

const meta = {
  argTypes: {},
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Modal content',
    open: true,
    title: 'Modal title',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'primary'}>
          Open Modal
        </Button>
        <Modal {...args} onOpenChange={setOpen} open={open}>
          Modal content
        </Modal>
      </>
    )
  },
}

export const ModalWithText: Story = {
  args: {
    children: 'Modal content',
    open: true,
    title: 'Modal title',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'primary'}>
          Open Modal
        </Button>
        <Modal {...args} onOpenChange={setOpen} open={open}>
          <div style={{ padding: '18px 24px' }}>
            <Typography variant={'body1'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
            </Typography>
          </div>
        </Modal>
      </>
    )
  },
}
export const ModalWithForm: Story = {
  args: {
    children: 'Modal content',
    open: true,
    title: 'Modal title',
  },
  render: args => {
    const [open, setOpen] = useState(false)
    const [checked, setChecked] = useState(false)
    const items = ['Select-box_1', 'Select-box_2', 'Select-box_3', 'Select-box_4', 'Select-box_5']

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'primary'}>
          Open Modal
        </Button>
        <Modal {...args} onOpenChange={setOpen} open={open}>
          <div style={{ padding: '24px' }}>
            <MySelect items={items} label={'Select-box'} />
            <Input label={'Input'} />
            <Input label={'Input'} />
            <Checkbox
              checked={checked}
              label={'Check-box'}
              onCheckedChange={() => setChecked(!checked)}
            />
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '30px',
              }}
            >
              <Button variant={'secondary'}>Button Secondary</Button>
              <Button variant={'primary'}>Button Primary</Button>
            </div>
          </div>
        </Modal>
      </>
    )
  },
}
export const ModalWithQuestionAndAnswer: Story = {
  args: {
    children: 'Modal content',
    open: true,
    title: 'Modal title',
  },
  render: args => {
    const [open, setOpen] = useState(false)
    const [checked, setChecked] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'primary'}>
          Open Modal
        </Button>
        <Modal {...args} onOpenChange={setOpen} open={open}>
          <div style={{ padding: '24px' }}>
            <div style={{ marginBottom: '20px' }}>
              <Typography variant={'subtitle2'}>Question</Typography>
              <Input label={'Question?'} placeholder={'Name'} />
              <div style={{ marginBottom: '12px' }}>
                <img alt={'react'} src={reactImg} style={{ width: '100%' }} />
              </div>
              <Button fullWidth variant={'secondary'}>
                <IconImage />
                Change cover
              </Button>
            </div>
            <div>
              <Typography variant={'subtitle2'}>Answer</Typography>
              <Input label={'Answer?'} placeholder={'Name'} />
              <div style={{ marginBottom: '12px' }}>
                <img alt={'react'} src={reactImg} style={{ width: '100%' }} />
              </div>
              <Button fullWidth variant={'secondary'}>
                <IconImage />
                Change cover
              </Button>
              <Input label={'Input'} />
              <Checkbox
                checked={checked}
                label={'Check-box'}
                onCheckedChange={() => setChecked(!checked)}
              />
            </div>
          </div>
        </Modal>
      </>
    )
  },
}
