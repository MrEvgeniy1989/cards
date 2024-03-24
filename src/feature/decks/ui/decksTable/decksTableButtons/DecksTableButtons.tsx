import { Link } from 'react-router-dom'

import { PlayCircle } from '@/assets/icons/playСircle'
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
          <PlayCircle />
        </span>
      ) : (
        <Button
          aria-disabled={isDisabled}
          as={Link}
          className={s.startLerningLink}
          title={'Start learning'}
          to={`/decks/${deck.id}/learn`}
        >
          <PlayCircle />
        </Button>
      )}

      <EditDeckButton
        className={s.iconButton}
        deck={deck}
        isDisabled={isDisabled}
        isMyDeck={isMyDeck}
      />

      {/*<Button*/}
      {/*  className={s.iconButton}*/}
      {/*  disabled={isDisabled || !isMyDeck}*/}
      {/*  title={isMyDeck ? 'Edit deck' : "You can't edit someone else's deck"}*/}
      {/*>*/}
      {/*  <EditIcon />*/}
      {/*</Button>*/}

      <DeleteDeckButton
        className={s.iconButton}
        deckId={deck.id}
        isDisabled={isDisabled}
        isMyDeck={isMyDeck}
      />
    </>
  )
}
