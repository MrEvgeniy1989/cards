import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { UploadButtonIcon } from '@/assets/icons/uploadButtonIcon'
import { ControlledCheckbox } from '@/common/components/controlled/controlledCheckbox/ControlledCheckbox'
import { ControlledTextField } from '@/common/components/controlled/controlledTextField/controlledTextField'
import { Button } from '@/common/components/ui/button'
import { Modal } from '@/common/components/ui/modal'
import { useCreateDeckMutation } from '@/feature/decks/api/decksApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '@/feature/decks/ui/decksHeader/addDeckModal/addDeckModal.module.scss'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}
export type DeckFormValues = z.infer<typeof addDeckSchema>

const addDeckSchema = z.object({
  isPrivate: z.boolean().default(false),
  name: z.string().min(1, 'Field is required!'),
})

export const AddDeckModal = ({ open, setOpen }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [cover, setCover] = useState<File | null>(null)

  const [createDeck, { isLoading: isDeckBeingCreated }] = useCreateDeckMutation()
  const { control, handleSubmit, setError } = useForm<DeckFormValues>({
    defaultValues: { isPrivate: false, name: '' },
    resolver: zodResolver(addDeckSchema),
  })

  const onClose = () => setOpen(false)

  const onSubmitHandler = (data: DeckFormValues) => {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('isPrivate', `${data.isPrivate}`)
    cover && formData.append('cover', cover)

    searchParams.set('currentPage', '1')
    setSearchParams(searchParams)

    createDeck(formData)
    //   .then(data => {
    //   if (data?.status === 'success') {
    //     setOpen(false)
    //   }
    // })
    setOpen(false)
    // onSubmit(formData)
  }

  return (
    <Modal onOpenChange={setOpen} open={open} title={'Add New Deck'}>
      <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={s.container}>
          <ControlledTextField
            className={s.input}
            control={control}
            label={'Name Pack'}
            name={'name'}
          />
          <Button className={s.buttonUploadImage} fullWidth type={'button'} variant={'secondary'}>
            <UploadButtonIcon />
            Upload Image
          </Button>
          <ControlledCheckbox
            className={s.checkbox}
            control={control}
            label={'Private pack'}
            name={'isPrivate'}
            position={'left'}
          />
          <div className={s.buttonsContainer}>
            <Button onClick={onClose} type={'button'} variant={'secondary'}>
              Cancel
            </Button>
            <Button>Add New Pack</Button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
