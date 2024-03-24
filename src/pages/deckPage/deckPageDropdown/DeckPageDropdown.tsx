import { useState } from 'react'
import { Link } from 'react-router-dom'

import { PlayIcon } from '@/assets/icons/playIcon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown'
import { LinearProgressBar } from '@/common/components/ui/linearProgressBar'
import { DeckWithAuthor } from '@/feature/decks/api/decksApi.types'
import { DeleteDeck } from '@/pages/deckPage/deckPageDropdown/deleteDeck/DeleteDeck'
import { EditDeck } from '@/pages/deckPage/deckPageDropdown/editDeck/EditDeck'

import s from './DeckPageDropdown.module.scss'

type Props = {
  deck: DeckWithAuthor
}
export const DeckPageDropdown = ({ deck }: Props) => {
  const [inProgress, setInProgress] = useState(false)

  return (
    <>
      {inProgress && <LinearProgressBar />}
      <DropdownMenu>
        <DropdownMenuTrigger>
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
            <EditDeck className={s.itemBtn} deck={deck} setInProgress={setInProgress} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <DeleteDeck className={s.itemBtn} deckId={deck.id} setInProgress={setInProgress} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
