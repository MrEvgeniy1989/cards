import { useState } from 'react'
import { toast } from 'react-toastify'

import { Trash } from '@/assets/icons/trash'
import { Button } from '@/common/components/ui/button'
import { Modal } from '@/common/components/ui/modal'
import { Typography } from '@/common/components/ui/typography'
import { useDeleteDeckMutation } from '@/feature/decks/api/decksApi'

import s from '@/feature/decks/ui/decksTable/decksTableButtons/deleteDeckButton/deleteDeckButton.module.scss'

type Props = {
  className: string
  deckId: string
  isDisabled: boolean
  isMyDeck: boolean
}

export const DeleteDeckButton = ({ className, deckId, isDisabled, isMyDeck }: Props) => {
  const [open, setOpen] = useState(false)
  const [deleteDeck] = useDeleteDeckMutation()

  const onDeleteDeck = () => {
    deleteDeck({ id: deckId })
      .unwrap()
      .then(() => toast.success('The deck has been deleted!'))
      .catch(error => toast.error(error.data.message))
    setOpen(false)
  }

  return (
    <>
      <Button
        className={className}
        disabled={isDisabled || !isMyDeck}
        onClick={() => setOpen(true)}
        title={isMyDeck ? 'Delete deck' : "You can't delete someone else's deck"}
      >
        <Trash />
      </Button>

      <Modal onOpenChange={setOpen} open={open} title={'Delete Deck'}>
        <div className={s.modalBody}>
          <Typography className={s.textModal} variant={'body1'}>
            Do you really want to remove this Deck? <br />
            All cards in it will be deleted.
          </Typography>
          <div className={s.buttonsContainer}>
            <Button onClick={() => setOpen(false)} variant={'secondary'}>
              <Typography as={'span'} variant={'subtitle2'}>
                Cancel
              </Typography>
            </Button>
            <Button onClick={onDeleteDeck} variant={'primary'}>
              <Typography as={'span'} variant={'subtitle2'}>
                Delete Deck
              </Typography>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
