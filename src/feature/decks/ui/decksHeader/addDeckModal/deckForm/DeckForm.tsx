import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { ControlledCheckbox } from '@/common/components/controlled/controlledCheckbox/ControlledCheckbox'
import { Button } from '@/common/components/ui/button'
import { DeckFormFields } from '@/feature/decks/ui/decksHeader/addDeckModal/deckForm/deckFormFields/DeckFormFields'
import { zodResolver } from '@hookform/resolvers/zod'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { z } from 'zod'

import s from '@/feature/decks/ui/decksHeader/addDeckModal/addDeckModal.module.scss'

type Props = {
  buttonTitle: string
  closeModal: () => void
  disabled?: boolean
  error?: FetchBaseQueryError | SerializedError | undefined
  onSubmit: (data: FormData) => void
  values?: {
    cover?: null | string
    isPrivate?: boolean
    name: string
  }
}

export type DeckFormValues = z.infer<typeof addDeckSchema>

const addDeckSchema = z.object({
  isPrivate: z.boolean().default(false),
  name: z.string().min(1, 'Field is required!'),
})

export const DeckForm = ({ buttonTitle, closeModal, disabled, onSubmit, values }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [cover, setCover] = useState<File | null>(null)

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<DeckFormValues>({
    defaultValues: { isPrivate: values?.isPrivate || false, name: values?.name || '' },
    resolver: zodResolver(addDeckSchema),
  })

  const nameDeckError = errors.name?.message

  const imageUrl = cover ? URL.createObjectURL(cover) : values?.cover

  const onSubmitHandler = (data: DeckFormValues) => {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('isPrivate', `${data.isPrivate}`)
    cover && formData.append('cover', cover)

    searchParams.set('currentPage', '1')
    setSearchParams(searchParams)

    onSubmit(formData)
  }

  const onLoadCover = (data: File) => setCover(data)

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={s.container}>
        <DeckFormFields
          className={s.formField}
          control={control}
          error={nameDeckError}
          imageUrl={imageUrl}
          label={'Name Deck'}
          name={'name'}
          onLoadImage={onLoadCover}
        />

        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Private pack'}
          name={'isPrivate'}
          position={'left'}
        />

        <div className={s.buttonsContainer}>
          <Button onClick={closeModal} type={'button'} variant={'secondary'}>
            Cancel
          </Button>
          <Button disabled={disabled} type={'submit'}>
            {buttonTitle}
          </Button>
        </div>
      </div>
    </form>
  )
}
