import { useState } from 'react'
import { toast } from 'react-toastify'

import { EditIcon } from '@/assets/icons/edit'
import { Button } from '@/common/components/ui/button'
import { LinearProgressBar } from '@/common/components/ui/linearProgressBar'
import { Modal } from '@/common/components/ui/modal'
import { useUpdateCardMutation } from '@/feature/cards/api/cardsApi'
import { Card } from '@/feature/cards/api/cardsApi.types'
import { CardForm } from '@/feature/cards/ui/addCard/cardForm/CardForm'

type Props = {
  card: Card
  className?: string
}
export const EditCard = ({ card, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [updateCard, { error, isLoading }] = useUpdateCardMutation()
  const { answer, answerImg, deckId, id, question, questionImg } = card
  const cardValues = { answer, answerImg, question, questionImg }
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const onSubmit = (body: FormData) => {
    updateCard({ body, cardId: id, deckId })
      .unwrap()
      .then(() => {
        toast.success('Card edited!')
        closeModal()
      })
  }

  return (
    <>
      {isLoading && <LinearProgressBar />}
      <Button className={className} onClick={openModal}>
        <EditIcon />
      </Button>
      <Modal onOpenChange={setIsOpen} open={isOpen} title={'Add New Card'}>
        <CardForm
          buttonTitle={'Save Changes'}
          cardValues={cardValues}
          closeModal={closeModal}
          disabled={isLoading}
          error={error}
          onSubmit={onSubmit}
        />
      </Modal>
    </>
  )
}
