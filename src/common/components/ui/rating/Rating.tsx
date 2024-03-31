import { memo } from 'react'

import { EmptyStarIcon } from '@/assets/icons/emptyStarIcon'
import { StarIcon } from '@/assets/icons/starIcon'
import { clsx } from 'clsx'

import s from './Rating.module.scss'

type RatingProps = {
  className?: string
  rating?: 0 | 1 | 2 | 3 | 4 | 5
}

const stars = [1, 2, 3, 4, 5]

export const Rating = memo((props: RatingProps) => {
  const { className, rating = 0 } = props

  return (
    <div className={clsx(s.root, className)}>
      {stars.map((starNumber, index) =>
        rating >= starNumber ? <StarIcon key={index} /> : <EmptyStarIcon key={index} />
      )}
    </div>
  )
})
