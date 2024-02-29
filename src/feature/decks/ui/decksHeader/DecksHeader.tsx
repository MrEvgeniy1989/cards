import { Button } from '@/common/components/ui/button'
import { Typography } from '@/common/components/ui/typography'

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
      {/*<AddDeckModal*/}
      {/*  buttonTitle={'Add New Deck'}*/}
      {/*  trigger={*/}
      <Button className={s.button} disabled={isDisabled}>
        Add New Deck
      </Button>
      {/*  }*/}
      {/*/>*/}
    </div>
  )
}
