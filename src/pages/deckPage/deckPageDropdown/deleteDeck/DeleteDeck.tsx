import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button } from '@/common/components/ui/button'
import { LinearProgressBar } from '@/common/components/ui/linearProgressBar'
import { Modal } from '@/common/components/ui/modal'
import { Typography } from '@/common/components/ui/typography'
import { useDeleteDeckMutation } from '@/feature/decks/api/decksApi'

import s from '@/feature/decks/ui/decksTable/decksTableButtons/deleteDeckButton/deleteDeckButton.module.scss'

type Props = {
  className?: string
  deckId: string
  open: boolean
  setOpen: (open: boolean) => void
}

export const DeleteDeck = ({ deckId, open, setOpen }: Props) => {
  const [deleteDeck, { isLoading }] = useDeleteDeckMutation()
  const navigate = useNavigate()

  const onDeleteDeck = () => {
    deleteDeck({ id: deckId })
      .unwrap()
      .then(() => {
        toast.success('The deck has been deleted!')
        setOpen(false)
        navigate('/decks?tabValue=my&authorId=26f8392c-af03-445d-9723-57914b88fe56')
      })
      .catch(error => toast.error(error.data.message))
  }

  return (
    <>
      {isLoading && <LinearProgressBar />}
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
