import { useState } from 'react'

import { ImagePreview } from '@/common/components/ui/imagePreview'
import { clsx } from 'clsx'

import s from './Image.module.scss'

type Props = {
  alt?: string
  className?: string
  imageUrl: string
}
export const Image = ({ alt, className, imageUrl }: Props) => {
  const [isShowImage, setIsShowImage] = useState<boolean>(false)
  const showImage = () => {
    setIsShowImage(true)
  }
  const hideImage = () => {
    setIsShowImage(false)
  }

  return (
    <>
      {isShowImage ? (
        <ImagePreview onClose={hideImage} open={isShowImage} src={imageUrl} />
      ) : (
        <img alt={alt} className={clsx(s.img, className)} onClick={showImage} src={imageUrl} />
      )}
    </>
  )
}
