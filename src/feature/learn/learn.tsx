import { useState } from 'react'

import questionImg from '@/assets/images/reactImg.png'
import { Button } from '@/common/components/ui/button'
import { Card } from '@/common/components/ui/card'
import { GoBack } from '@/common/components/ui/goBack'
import { Typography } from '@/common/components/ui/typography'

import s from './learnForm.module.scss'

import { FormValues, LearnForm } from './learnForm'

export const Learn = () => {
  const [showRate, setShowRate] = useState(false)

  const onSubmit = async (data: FormValues) => {
    alert(JSON.stringify(data))
    // await requestHandler(async () => {
    //   await rateCard({ packId: id, cardId: card!.id, grade: +data.grade }).unwrap()
    setShowRate(false)
    // })
  }

  return (
    <>
      <div className={s.goback}>
        <GoBack text={'Back to Previous Page'} />
      </div>

      <Card className={s.content}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          Learn {' pack?.name'}
        </Typography>

        <Typography variant={'body1'}>Question:{' card?.question'}</Typography>
        {true && <img alt={'Question Image'} className={s.image} src={questionImg} />}
        <Typography className={s.count} variant={'body2'}>
          Количество попыток ответов на вопрос:{' card?.shots'}
        </Typography>

        {showRate ? (
          <div>
            <Typography className={s.answer} variant={'body1'}>
              Answer: {'card?.answer'}
            </Typography>

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
