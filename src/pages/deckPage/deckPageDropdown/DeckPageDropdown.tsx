import { Link } from 'react-router-dom'

import { EditIcon } from '@/assets/icons/editIcon'
import { PlayIcon } from '@/assets/icons/playIcon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown'
import { DeckWithAuthor } from '@/feature/decks/api/decksApi.types'
import { DeleteDeck } from '@/pages/deckPage/deckPageDropdown/deleteDeck/DeleteDeck'

import s from './DeckPageDropdown.module.scss'

type Props = {
  deck: DeckWithAuthor
}
export const DeckPageDropdown = ({ deck }: Props) => {
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

        <DropdownMenuItem asChild>
          <button className={s.itemBtn}>
            <EditIcon />
            Edit
          </button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <DeleteDeck className={s.itemBtn} deckId={deck.id} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
