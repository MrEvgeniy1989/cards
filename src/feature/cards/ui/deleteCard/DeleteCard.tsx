import { useState } from 'react'
import { toast } from 'react-toastify'

import { Trash } from '@/assets/icons/trash'
import { Button } from '@/common/components/ui/button'
import { LinearProgressBar } from '@/common/components/ui/linearProgressBar'
import { Modal } from '@/common/components/ui/modal'
import { Typography } from '@/common/components/ui/typography'
import { useDeleteCardMutation } from '@/feature/cards/api/cardsApi'

import s from './DeleteCard.module.scss'

type Props = {
  cardId: string
  className?: string
  deckId: string
}

export const DeleteCard = ({ cardId, className, deckId }: Props) => {
  const [deleteCard, { isLoading }] = useDeleteCardMutation()
  const [open, setOpen] = useState(false)

  const onDeleteCard = () => {
    deleteCard({ cardId, deckId })
      .unwrap()
      .then(() => toast.success('Card deleted!'))
      .catch(error => toast.error(error.data.message))
    setOpen(false)
  }

  return (
    <>
      {isLoading && <LinearProgressBar />}
      <Button className={className} onClick={() => setOpen(true)}>
        <Trash />
      </Button>
      <Modal onOpenChange={setOpen} open={open} title={'Delete Card'}>
        <div className={s.modalBody}>
          <Typography className={s.text} variant={'body1'}>
            Do you really want to remove this card?
          </Typography>
          <div className={s.btnsWrapper}>
            <Button onClick={() => setOpen(false)} variant={'secondary'}>
              <Typography as={'span'} variant={'subtitle2'}>
                Cancel
              </Typography>
            </Button>
            <Button onClick={onDeleteCard} variant={'primary'}>
              <Typography as={'span'} variant={'subtitle2'}>
                Delete Card
              </Typography>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
