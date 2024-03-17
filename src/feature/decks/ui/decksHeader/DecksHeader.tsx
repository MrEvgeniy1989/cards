import { useState } from 'react'

import { Button } from '@/common/components/ui/button'
import { Typography } from '@/common/components/ui/typography'
import { AddDeckModal } from '@/feature/decks/ui/decksHeader/addDeckModal/AddDeckModal'

import s from '@/feature/decks/ui/decksHeader/decksHeader.module.scss'

type Props = {
  isDisabled?: boolean
}

export const DecksHeader = ({ isDisabled }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={s.root}>
      <Typography as={'h1'} className={s.formHeader} variant={'h1'}>
        Decks list
      </Typography>

      <Button
        className={s.button}
        disabled={isDisabled}
        onClick={() => setOpen(true)}
        variant={'primary'}
      >
        Add New Deck
      </Button>
      <AddDeckModal open={open} setOpen={setOpen} />
    </div>
  )
}
