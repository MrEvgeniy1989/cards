import { useState } from 'react'

import { ImagePreview } from '@/common/components/ui/imagePreview'

import s from './learnImage.module.scss'

type LearnImageProps = {
  imageUrl: string
}

export const LearnImage = ({ imageUrl }: LearnImageProps) => {
  const [image, setShowImage] = useState<boolean>(false)
  const showImage = () => {
    setShowImage(true)
  }
  const hideImage = () => {
    setShowImage(false)
  }

  return (
    <div>
      {image ? (
        <ImagePreview onClose={hideImage} open={image} src={imageUrl} />
      ) : (
        <img alt={''} className={s.learnImage} onClick={showImage} src={imageUrl} />
      )}
    </div>
  )
}
