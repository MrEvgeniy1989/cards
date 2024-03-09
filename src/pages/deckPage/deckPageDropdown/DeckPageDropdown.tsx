import { EditIcon } from '@/assets/icons/editIcon'
import { PlayIcon } from '@/assets/icons/playIcon'
import { TrashIcon } from '@/assets/icons/trashIcon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown'

import s from './DeckPageDropdown.module.scss'

export const DeckPageDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={s.triggerBtn}>
          <span></span>
          <span></span>
          <span></span>
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
}
