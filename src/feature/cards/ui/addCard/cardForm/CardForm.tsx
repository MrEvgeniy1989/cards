import { useState } from 'react'

import { Button } from '@/common/components/ui/button'
import { Typography } from '@/common/components/ui/typography'
import { CardFormField } from '@/feature/cards/ui/addCard/cardForm/cardFormField/CardFormField'
import { CardFormValues, useCardForm } from '@/feature/cards/ui/addCard/cardForm/useCardForm'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import s from './CardForm.module.scss'

export type CardValues = {
  answer: string
  answerImg: null | string
  question: string
  questionImg: null | string
}
type Props = {
  buttonTitle: string
  cardValues?: CardValues
  closeModal: () => void
  disabled?: boolean
  error?: FetchBaseQueryError | SerializedError | undefined
  onSubmit: (data: FormData) => void
}
export const CardForm = ({ buttonTitle, cardValues, closeModal, disabled, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useCardForm({ answer: cardValues?.answer || '', question: cardValues?.question || '' })

  const [questionImg, setQuestionImg] = useState<File | null>(null)
  const [answerImg, setAnswerImg] = useState<File | null>(null)

  const questionError = errors.question?.message
  const answerError = errors.answer?.message

  const questionImageUrl = questionImg ? URL.createObjectURL(questionImg) : cardValues?.questionImg
  const answerImageUrl = answerImg ? URL.createObjectURL(answerImg) : cardValues?.questionImg

  const submitHandler = (data: CardFormValues) => {
    const formData = new FormData()

    formData.append('question', data.question)
    formData.append('answer', data.answer)
    questionImg && formData.append('questionImg', questionImg)
    answerImg && formData.append('answerImg', answerImg)
    onSubmit(formData)
  }

  const onLoadQuestionImg = (data: File) => {
    setQuestionImg(data)
  }
  const onLoadAnswerImg = (data: File) => {
    setAnswerImg(data)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(submitHandler)}>
      <CardFormField
        className={s.formField}
        control={control}
        error={questionError}
        imageUrl={questionImageUrl}
        label={'Question'}
        name={'question'}
        onLoadImage={onLoadQuestionImg}
      />
      <CardFormField
        className={s.formField}
        control={control}
        error={answerError}
        imageUrl={answerImageUrl}
        label={'Answer'}
        name={'answer'}
        onLoadImage={onLoadAnswerImg}
      />
      <div className={s.buttonsWrapper}>
        <Button onClick={closeModal} type={'reset'} variant={'secondary'}>
          <Typography variant={'subtitle2'}>Cancel</Typography>
        </Button>
        <Button disabled={disabled} type={'submit'}>
          <Typography variant={'subtitle2'}>{buttonTitle}</Typography>
        </Button>
      </div>
    </form>
  )
}
