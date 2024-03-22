import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button } from '@/common/components/ui/button'
import { LinearProgressBar } from '@/common/components/ui/linearProgressBar'
import { Modal } from '@/common/components/ui/modal'
import { Typography } from '@/common/components/ui/typography'
import { useCreateCardMutation } from '@/feature/cards/api/cardsApi'
import { CardForm } from '@/feature/cards/ui/addCard/cardForm/CardForm'

export const AddCard = () => {
  const { id = '' } = useParams<{ id: string }>()
  const [isOpen, setIsOpen] = useState(false)
  const [createCard, { error, isLoading }] = useCreateCardMutation()

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const onSubmit = (body: FormData) => {
    createCard({ body, deckId: id })
      .unwrap()
      .then(() => {
        toast.success('Card added!')
        closeModal()
      })
  }

  return (
    <>
      {isLoading && <LinearProgressBar />}
      <Button onClick={openModal}>
        <Typography as={'span'} variant={'subtitle2'}>
          Add New Card
        </Typography>
      </Button>
      <Modal onOpenChange={setIsOpen} open={isOpen} title={'Add New Card'}>
        <CardForm
          buttonTitle={'Add New Card'}
          closeModal={closeModal}
          disabled={isLoading}
          error={error}
          onSubmit={onSubmit}
        />
      </Modal>
    </>
  )
}
