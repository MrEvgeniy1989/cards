import type { Meta, StoryObj } from '@storybook/react'

import { EditIcon } from '@/assets/icons/editIcon'
import { LogoutIcon } from '@/assets/icons/logoutIcon'
import { PersonIcon } from '@/assets/icons/personIcon'
import { PlayIcon } from '@/assets/icons/playIcon'
import { TrashIcon } from '@/assets/icons/trashIcon'
import userPhotoSmall from '@/assets/images/userPhotoSmall.png'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './'

const meta = {
  argTypes: {},
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const LearnDropdown: Story = {
  args: {},
  render: () => {
    const btnStyle: any = {
      alignItems: 'center',
      background: 'transparent',
      border: '1px solid white',
      borderRadius: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      height: '24px',
      justifyContent: 'center',
      width: '24px',
    }
    const spanStyle = {
      backgroundColor: '#fff',
      borderRadius: '100%',
      display: 'block',
      height: '2px',
      width: '2px',
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button style={btnStyle}>
            <span style={spanStyle}></span>
            <span style={spanStyle}></span>
            <span style={spanStyle}></span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <PlayIcon />
            Learn
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <EditIcon />
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const HeaderDropdown: Story = {
  args: {},
  render: () => {
    const btnStyle: any = {
      alignItems: 'center',
      background: 'transparent',
      border: 'none',
      borderRadius: '100%',
      display: 'flex',
      height: '36px',
      justifyContent: 'center',
      unset: 'all',
      width: '36px',
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button style={btnStyle}>
            <img src={userPhotoSmall} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <img src={userPhotoSmall} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              Ivan
              <span style={{ color: '#808080', fontSize: '12px', fontWeight: '400' }}>
                j&johnson@gmail.com
              </span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PersonIcon />
            My profile
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogoutIcon />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
