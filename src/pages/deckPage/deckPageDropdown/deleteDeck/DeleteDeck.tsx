import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { TrashIcon } from '@/assets/icons/trashIcon'
import { Button } from '@/common/components/ui/button'
import { Modal } from '@/common/components/ui/modal'
import { Typography } from '@/common/components/ui/typography'
import { useDeleteDeckMutation } from '@/feature/decks/api/decksApi'

import s from '@/feature/decks/ui/decksTable/decksTableButtons/deleteDeckButton/deleteDeckButton.module.scss'

type Props = {
  className?: string
  deckId: string
}

export const DeleteDeck = ({ className, deckId }: Props) => {
  const [open, setOpen] = useState(false)
  const [deleteDeck, { isLoading }] = useDeleteDeckMutation()
  const navigate = useNavigate()

  const onDeleteDeck = () => {
    deleteDeck({ id: deckId })
      .unwrap()
      .then(() => {
        toast.success('The deck has been deleted!')
        setOpen(false)
        navigate(-1)
      })
      .catch(error => toast.error(error.data.message))
  }

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        <TrashIcon />
        Delete
      </button>

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
            <Button disabled={isLoading} onClick={onDeleteDeck} variant={'primary'}>
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
