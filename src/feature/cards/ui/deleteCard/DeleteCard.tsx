import { useState } from 'react'

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
    setOpen(false)
  }

  return (
    <>
      {/*{isError && toast.error(error && error?.data && error.data.message)}*/}
      {isLoading && <LinearProgressBar />}
      <Button className={className} onClick={() => setOpen(true)}>
        <Trash />
      </Button>
      <Modal onOpenChange={setOpen} open={open} title={'Delete Card'}>
        <div className={s.modalBody}>
          <Typography className={s.text} variant={'body1'}>
            Do you really want to remove Card Name? <br />
            All cards will be deleted.
          </Typography>
          <div className={s.btnsWrapper}>
            <Button onClick={() => setOpen(false)} variant={'secondary'}>
              <Typography variant={'subtitle2'}>Cancel</Typography>
            </Button>
            <Button variant={'primary'}>
              <Typography onClick={onDeleteCard} variant={'subtitle2'}>
                Delete Card
              </Typography>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
