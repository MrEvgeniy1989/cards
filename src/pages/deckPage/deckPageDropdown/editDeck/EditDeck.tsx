import { useState } from 'react'
import { toast } from 'react-toastify'

import { EditIcon } from '@/assets/icons/edit'
import { Modal } from '@/common/components/ui/modal'
import { useUpdateDeckMutation } from '@/feature/decks/api/decksApi'
import { DeckWithAuthor } from '@/feature/decks/api/decksApi.types'
import { DeckForm } from '@/feature/decks/ui/decksHeader/addDeckModal/deckForm/DeckForm'

type Props = {
  className?: string
  deck: DeckWithAuthor
  setInProgress: (inProgress: boolean) => void
}

export const EditDeck = ({ className, deck, setInProgress }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [updateDeck, { error, isLoading }] = useUpdateDeckMutation()
  const { cover, isPrivate, name } = deck
  const deckValues = { cover, isPrivate, name }

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const onSubmit = (body: FormData) => {
    setInProgress(true)
    updateDeck({ body, deckId: deck.id })
      .unwrap()
      .then(() => {
        toast.success('The deck has been edited!')
        closeModal()
      })
      .catch(error => toast.error(error.data.message))
      .finally(() => setInProgress(false))
  }

  return (
    <>
      <button className={className} onClick={openModal}>
        <EditIcon />
        Edit
      </button>
      <Modal onOpenChange={setIsOpen} open={isOpen} title={'Edit Deck'}>
        <DeckForm
          buttonTitle={'Save changes'}
          closeModal={closeModal}
          disabled={isLoading}
          error={error}
          onSubmit={onSubmit}
          values={deckValues}
        />
      </Modal>
    </>
  )
}
