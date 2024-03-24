import { toast } from 'react-toastify'

import { LinearProgressBar } from '@/common/components/ui/linearProgressBar'
import { Modal } from '@/common/components/ui/modal'
import { useUpdateDeckMutation } from '@/feature/decks/api/decksApi'
import { DeckWithAuthor } from '@/feature/decks/api/decksApi.types'
import { DeckForm } from '@/feature/decks/ui/decksHeader/addDeckModal/deckForm/DeckForm'

type Props = {
  className?: string
  deck: DeckWithAuthor
  open: boolean
  setOpen: (open: boolean) => void
}

export const EditDeck = ({ deck, open, setOpen }: Props) => {
  const [updateDeck, { error, isLoading }] = useUpdateDeckMutation()
  const { cover, isPrivate, name } = deck
  const deckValues = { cover, isPrivate, name }

  const closeModal = () => setOpen(false)

  const onSubmit = (body: FormData) => {
    updateDeck({ body, deckId: deck.id })
      .unwrap()
      .then(() => {
        toast.success('The deck has been edited!')
        closeModal()
      })
      .catch(error => toast.error(error.data.message))
  }

  return (
    <>
      {isLoading && <LinearProgressBar />}
      <Modal onOpenChange={setOpen} open={open} title={'Edit Deck'}>
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
