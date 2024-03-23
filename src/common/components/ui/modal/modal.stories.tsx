import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { UploadButtonIcon } from '@/assets/icons/uploadButtonIcon'
import reactImg from '@/assets/images/reactImg.png'
import { Button } from '@/common/components/ui/button'
import { Checkbox } from '@/common/components/ui/checkbox'
import { Modal } from '@/common/components/ui/modal/modal'

import { MySelect } from '../select'
import { TextField } from '../textField'
import { Typography } from '../typography'

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
    const options = [
      { title: 'Select-box_1', value: 'Select-box_1' },
      { title: 'Select-box_2', value: 'Select-box_2' },
      { title: 'Select-box_3', value: 'Select-box_3' },
      { title: 'Select-box_4', value: 'Select-box_4' },
      { title: 'Select-box_5', value: 'Select-box_5' },
    ]

    return (
      <>
        <Button onClick={() => setOpen(true)} variant={'primary'}>
          Open Modal
        </Button>
        <Modal {...args} onOpenChange={setOpen} open={open}>
          <div style={{ padding: '24px' }}>
            <MySelect label={'Select-box'} options={options} />
            <TextField label={'Input'} />
            <TextField label={'Input'} />
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
              <TextField label={'Question?'} placeholder={'Name'} />
              <div style={{ marginBottom: '12px' }}>
                <img alt={'react'} src={reactImg} style={{ width: '100%' }} />
              </div>
              <Button fullWidth variant={'secondary'}>
                <UploadButtonIcon />
                Change cover
              </Button>
            </div>
            <div>
              <Typography variant={'subtitle2'}>Answer</Typography>
              <TextField label={'Answer?'} placeholder={'Name'} />
              <div style={{ marginBottom: '12px' }}>
                <img alt={'react'} src={reactImg} style={{ width: '100%' }} />
              </div>
              <Button fullWidth variant={'secondary'}>
                <UploadButtonIcon />
                Change cover
              </Button>
              <TextField label={'Input'} />
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
