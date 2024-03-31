import { Link } from 'react-router-dom'

import { PlayIcon } from '@/assets/icons/playIcon'
import { Button } from '@/common/components/ui/button'
import { DeckWithAuthor } from '@/feature/decks/api/decksApi.types'
import { DeleteDeckButton } from '@/feature/decks/ui/decksTable/decksTableButtons/deleteDeckButton/DeleteDeckButton'
import { EditDeckButton } from '@/feature/decks/ui/decksTable/decksTableButtons/editDeckButton/EditDeckButton'

import s from '@/feature/decks/ui/decksTable/decksTable.module.scss'

type Props = {
  deck: DeckWithAuthor
  isDisabled: boolean
  isMyDeck: boolean
}

export const DecksTableButtons = ({ deck, isDisabled, isMyDeck }: Props) => {
  return (
    <>
      {deck.cardsCount < 1 ? (
        <span className={s.disabledLink} title={'This deck is empty.'}>
          <PlayIcon />
        </span>
      ) : (
        <Button
          aria-disabled={isDisabled}
          as={Link}
          className={s.startLerningLink}
          title={'Start learning'}
          to={`/decks/${deck.id}/learn`}
        >
          <PlayIcon className={s.playIcon} />
        </Button>
      )}

      <EditDeckButton
        className={s.iconButton}
        deck={deck}
        isDisabled={isDisabled}
        isMyDeck={isMyDeck}
      />

      <DeleteDeckButton
        className={s.iconButton}
        deckId={deck.id}
        isDisabled={isDisabled}
        isMyDeck={isMyDeck}
      />
    </>
  )
}
