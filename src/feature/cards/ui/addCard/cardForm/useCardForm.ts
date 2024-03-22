import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

const addCardFormSchema = z.object({
  answer: z.string().min(3).trim(),
  question: z.string().min(3).trim(),
})

export type CardFormValues = z.infer<typeof addCardFormSchema>

export const useCardForm = (defaultValues: CardFormValues) =>
  useForm<CardFormValues>({
    defaultValues: {
      answer: defaultValues.answer,
      question: defaultValues.question,
    },
    resolver: zodResolver(addCardFormSchema),
  })
