import { Link } from 'react-router-dom'

import { Button } from '@/common/components/ui/button'
import { Typography } from '@/common/components/ui/typography'
import { AddCard } from '@/feature/cards/ui/addCard/AddCard'
import { DeckWithAuthor } from '@/feature/decks/api/decksApi.types'
import { DeckPageDropdown } from '@/pages/deckPage/deckPageDropdown/DeckPageDropdown'

import s from './DeckPageHeader.module.scss'

type Props = {
  deck: DeckWithAuthor
  isNotEmptyCard: boolean
  isOwner: boolean
}
export const DeckPageHeader = ({ deck, isNotEmptyCard, isOwner }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.flexWrapper}>
        <div className={s.deckOwnerWrapper}>
          <Typography as={'h1'} variant={'h1'}>
            {deck?.name}
          </Typography>
          {isOwner && <DeckPageDropdown deck={deck} />}
        </div>
        {isOwner && <AddCard />}
        {!isOwner && isNotEmptyCard && (
          <Button as={Link} to={`/decks/${deck.id}/learn`}>
            <Typography as={'span'} variant={'subtitle2'}>
              Learn Deck
            </Typography>
          </Button>
        )}
      </div>

      {deck.cover && (
        <div className={s.deckImg}>
          <img alt={'Deck image'} src={deck.cover} />
        </div>
      )}
    </div>
  )
}
