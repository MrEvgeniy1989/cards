import { Typography } from '@/common/components/ui/typography'
import { AddDeck } from '@/feature/decks/ui/decksHeader/addDeckModal/AddDeck'

import s from '@/feature/decks/ui/decksHeader/decksHeader.module.scss'

type Props = {
  isDisabled?: boolean
}

export const DecksHeader = ({ isDisabled }: Props) => {
  return (
    <div className={s.root}>
      <Typography as={'h1'} className={s.formHeader} variant={'h1'}>
        Decks list
      </Typography>

      <AddDeck isDisabled={isDisabled} />
    </div>
  )
}
