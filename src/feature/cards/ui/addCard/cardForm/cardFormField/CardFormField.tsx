import { ChangeEvent, useRef } from 'react'
import { Control } from 'react-hook-form'
import { toast } from 'react-toastify'

import { UploadButtonIcon } from '@/assets/icons/uploadButtonIcon'
import { ControlledTextField } from '@/common/components/controlled/controlledTextField/controlledTextField'
import { Button } from '@/common/components/ui/button'
import { Typography } from '@/common/components/ui/typography'
import { uploadImageSchema } from '@/feature/cards/ui/addCard/cardForm/cardFormField/uploadImageSchema'
import { CardFormValues } from '@/feature/cards/ui/addCard/cardForm/useCardForm'
import { ZodError } from 'zod'

import s from './CardFormField.module.scss'

type Props = {
  className?: string
  control: Control<CardFormValues>
  error?: string
  imageUrl: null | string | undefined
  label: string
  name: 'answer' | 'question'
  onLoadImage: (data: File) => void
}
export const CardFormField = ({
  className,
  control,
  error,
  imageUrl,
  label,
  name,
  onLoadImage,
}: Props) => {
  const fileRef = useRef<HTMLInputElement>(null)
  const buttonUploadText = imageUrl ? 'Change Image' : ' Add Image'

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
        className={s.field}
        control={control}
        error={error}
        label={label}
        name={name}
      />
      {imageUrl && (
        <div className={s.imageWrapper}>
          <img alt={'Card image'} src={imageUrl} />
        </div>
      )}
      <Button
        fullWidth
        onClick={() => fileRef.current?.click()}
        type={'button'}
        variant={'secondary'}
      >
        <UploadButtonIcon />
        <Typography as={'span'} variant={'subtitle2'}>
          {buttonUploadText}
        </Typography>
      </Button>
      <input className={s.fileInput} onChange={onImageChange} ref={fileRef} type={'file'} />
    </div>
  )
}
