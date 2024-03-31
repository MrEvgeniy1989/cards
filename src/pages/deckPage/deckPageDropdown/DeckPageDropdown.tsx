import { useState } from 'react'
import { Link } from 'react-router-dom'

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
import { DeckWithAuthor } from '@/feature/decks/api/decksApi.types'
import { DeleteDeck } from '@/pages/deckPage/deckPageDropdown/deleteDeck/DeleteDeck'
import { EditDeck } from '@/pages/deckPage/deckPageDropdown/editDeck/EditDeck'

import s from './DeckPageDropdown.module.scss'

type Props = {
  deck: DeckWithAuthor
}
export const DeckPageDropdown = ({ deck }: Props) => {
  const [deleteDeckOpen, setDeleteDeckOpen] = useState(false)
  const [editDeckOpen, setEditDeckOpen] = useState(false)

  return (
    <>
      <EditDeck deck={deck} open={editDeckOpen} setOpen={setEditDeckOpen} />
      <DeleteDeck deckId={deck.id} open={deleteDeckOpen} setOpen={setDeleteDeckOpen} />
      <DropdownMenu>
        <DropdownMenuTrigger className={s.triggerBtn}>
          <span></span>
          <span></span>
          <span></span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {deck.cardsCount > 0 && (
            <>
              <DropdownMenuItem asChild>
                <Link className={s.itemLink} to={`/decks/${deck?.id}/learn`}>
                  <PlayIcon />
                  Learn
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}

          <DropdownMenuItem>
            <button className={s.itemBtn} onClick={() => setEditDeckOpen(true)}>
              <EditIcon />
              Edit
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button className={s.itemBtn} onClick={() => setDeleteDeckOpen(true)}>
              <TrashIcon />
              Delete
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
