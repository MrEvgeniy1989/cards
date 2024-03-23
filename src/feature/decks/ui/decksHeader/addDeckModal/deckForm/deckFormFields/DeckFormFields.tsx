import { ChangeEvent, useRef } from 'react'
import { Control } from 'react-hook-form'
import { toast } from 'react-toastify'

import { UploadButtonIcon } from '@/assets/icons/uploadButtonIcon'
import { ControlledTextField } from '@/common/components/controlled/controlledTextField/controlledTextField'
import { Button } from '@/common/components/ui/button'
import { uploadImageSchema } from '@/feature/cards/ui/addCard/cardForm/cardFormField/uploadImageSchema'
import { DeckFormValues } from '@/feature/decks/ui/decksHeader/addDeckModal/deckForm/DeckForm'
import { AddDeckImage } from '@/feature/decks/ui/decksHeader/addDeckModal/deckForm/deckFormFields/addDeckImage/AddDeckImage'
import { ZodError } from 'zod'

import s from '@/feature/decks/ui/decksHeader/addDeckModal/deckForm/deckFormFields/deckFormFields.module.scss'

type Props = {
  className?: string
  control: Control<DeckFormValues>
  error?: string
  imageUrl: null | string | undefined
  label: string
  name: 'isPrivate' | 'name'
  onLoadImage: (data: File) => void
}

export const DeckFormFields = ({
  className,
  control,
  error,
  imageUrl,
  label,
  name,
  onLoadImage,
}: Props) => {
  const fileRef = useRef<HTMLInputElement>(null)
  const buttonUploadText = imageUrl ? 'Change Cover' : ' Add Cover'

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    try {
      uploadImageSchema.parse(file)
      if (file) {
        onLoadImage(file)
      }
    } catch (e) {
      const err = e as Error | ZodError

      if (err instanceof ZodError) {
        toast.error(err.errors[0].message)
      } else {
        toast.error(err.message)
      }
    }
  }

  return (
    <div className={className}>
      <ControlledTextField
        className={s.textField}
        control={control}
        error={error}
        label={label}
        name={name}
      />

      {imageUrl && <AddDeckImage imageUrl={imageUrl} />}

      <Button
        className={s.buttonUploadImage}
        fullWidth
        onClick={() => fileRef.current?.click()}
        type={'button'}
        variant={'secondary'}
      >
        <UploadButtonIcon />
        {buttonUploadText}
      </Button>
      <input className={s.fileInput} onChange={onImageChange} ref={fileRef} type={'file'} />
    </div>
  )
}
