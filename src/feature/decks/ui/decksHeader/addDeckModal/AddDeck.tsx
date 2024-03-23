import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@/common/components/ui/button'
import { Modal } from '@/common/components/ui/modal'
import { useCreateDeckMutation } from '@/feature/decks/api/decksApi'
import { DeckForm } from '@/feature/decks/ui/decksHeader/addDeckModal/deckForm/DeckForm'

import s from '@/feature/decks/ui/decksHeader/addDeckModal/addDeckModal.module.scss'

type Props = {
  isDisabled?: boolean
}

export const AddDeck = ({ isDisabled }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [createDeck, { error, isLoading }] = useCreateDeckMutation()

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const onSubmit = (body: FormData) => {
    createDeck(body)
      .unwrap()
      .then(() => {
        toast.success('Deck added!')
        closeModal()
      })
  }

  return (
    <>
      <Button className={s.button} disabled={isDisabled} onClick={openModal}>
        Add New Deck
      </Button>
      <Modal onOpenChange={setIsOpen} open={isOpen} title={'Add New Deck'}>
        <DeckForm
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
