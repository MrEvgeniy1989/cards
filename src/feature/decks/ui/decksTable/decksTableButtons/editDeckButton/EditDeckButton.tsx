import { useState } from 'react'
import { toast } from 'react-toastify'

import { EditIcon } from '@/assets/icons/edit'
import { Button } from '@/common/components/ui/button'
import { LinearProgressBar } from '@/common/components/ui/linearProgressBar'
import { Modal } from '@/common/components/ui/modal'
import { useUpdateDeckMutation } from '@/feature/decks/api/decksApi'
import { DeckWithAuthor } from '@/feature/decks/api/decksApi.types'
import { DeckForm } from '@/feature/decks/ui/decksHeader/addDeckModal/deckForm/DeckForm'

type Props = {
  className?: string
  deck: DeckWithAuthor
  isDisabled?: boolean
  isMyDeck?: boolean
}

export const EditDeckButton = ({ className, deck, isDisabled, isMyDeck }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [updateDeck, { error, isLoading }] = useUpdateDeckMutation()
  const { cover, isPrivate, name } = deck
  const deckValues = { cover, isPrivate, name }

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const onSubmit = (body: FormData) => {
    updateDeck({ body, deckId: deck.id })
      .unwrap()
      .then(() => {
        toast.success('Deck edited!')
        closeModal()
      })
  }

  return (
    <>
      {isLoading && <LinearProgressBar />}
      <Button
        className={className}
        disabled={isDisabled || !isMyDeck}
        onClick={openModal}
        title={isMyDeck ? 'Edit deck' : "You can't edit someone else's deck"}
      >
        <EditIcon />
      </Button>
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
