import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '@/common/components/ui/button'
import { Card } from '@/common/components/ui/card'
import { GoBack } from '@/common/components/ui/goBack'
import { Typography } from '@/common/components/ui/typography'
import { FormValues, LearnForm } from '@/feature/learn/LearnForm'

import s from './learnForm.module.scss'

import { useGetDeckInfoQuery, useGetLearnCardQuery, usePostRateCardMutation } from './api/learnApi'
import { LearnImage } from './learnImage/learnIamage'

export const Learn = () => {
  const [showRate, setShowRate] = useState(false)

  const [postRateCard] = usePostRateCardMutation()
  const params = useParams()
  const id = params.id as string

  const { data: pack } = useGetDeckInfoQuery({ id })
  const { data: card } = useGetLearnCardQuery({ id })

  const handleRateCard = async (packId: string, cardId: string, grade: number): Promise<void> => {
    await postRateCard({
      cardId,
      grade,
      packId,
    }).unwrap()
  }

  const onSubmit = async (data: FormValues) => {
    await handleRateCard(id, card!.id, +data.grade)

    setShowRate(false)
  }

  return (
    <>
      <div className={s.goback}>
        <GoBack text={'Back to Previous Page'} />
      </div>

      <Card className={s.content}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          {pack?.name}
        </Typography>

        <Typography className={s.question} variant={'body1'}>
          Question: {card?.question}
        </Typography>
        {card?.questionImg && <LearnImage imageUrl={card?.questionImg} />}
        <Typography className={s.count} variant={'body2'}>
          Количество попыток ответов на вопрос:{card?.shots}
        </Typography>

        {showRate ? (
          <div>
            <Typography className={s.answer} variant={'body1'}>
              Answer: {card?.answer}
            </Typography>
            {card?.answerImg && <LearnImage imageUrl={card?.answerImg} />}
            <Typography className={s.rate} variant={'subtitle1'}>
              Rate yourself:
            </Typography>

            <LearnForm onSubmit={onSubmit} />
          </div>
        ) : (
          <Button fullWidth onClick={() => setShowRate(true)}>
            Show Answer
          </Button>
        )}
      </Card>
    </>
  )
}
