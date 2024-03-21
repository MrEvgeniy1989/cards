import { Link } from 'react-router-dom'

import { EditIcon } from '@/assets/icons/edit'
import { PlayCircle } from '@/assets/icons/playСircle'
import { Trash } from '@/assets/icons/trash'
import { Button } from '@/common/components/ui/button'
import { useDeleteDeckMutation } from '@/feature/decks/api/decksApi'
import { DeckWithAuthor } from '@/feature/decks/api/decksApi.types'

import s from '@/feature/decks/ui/decksTable/decksTable.module.scss'

type Props = {
  deck: DeckWithAuthor
  isDisabled: boolean
  isMyDeck: boolean
}

export const DecksTableButtons = ({ deck, isDisabled, isMyDeck }: Props) => {
  const [deleteDeck] = useDeleteDeckMutation()
  const onDeleteDeck = () => deleteDeck({ id: deck.id })

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

      <Button
        className={s.iconButton}
        disabled={isDisabled || !isMyDeck}
        title={isMyDeck ? 'Edit deck' : "You can't edit someone else's deck"}
      >
        <EditIcon />
      </Button>

      <Button
        className={s.iconButton}
        disabled={isDisabled || !isMyDeck}
        onClick={onDeleteDeck}
        title={isMyDeck ? 'Delete deck' : "You can't delete someone else's deck"}
      >
        <Trash />
      </Button>
    </>
  )
}
