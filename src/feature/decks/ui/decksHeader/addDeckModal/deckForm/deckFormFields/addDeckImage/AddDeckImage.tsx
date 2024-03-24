import { useState } from 'react'

import { ImagePreview } from '@/common/components/ui/imagePreview'

import s from '@/feature/decks/ui/decksHeader/addDeckModal/deckForm/deckFormFields/addDeckImage/addDeckImage.module.scss'

type Props = {
  imageUrl: string
}

export const AddDeckImage = ({ imageUrl }: Props) => {
  const [isShowImage, setIsShowImage] = useState<boolean>(false)
  const showImage = () => {
    setIsShowImage(true)
  }
  const hideImage = () => {
    setIsShowImage(false)
  }

  return (
    <div className={s.imageWrapper}>
      {isShowImage ? (
        <ImagePreview onClose={hideImage} open={isShowImage} src={imageUrl} />
      ) : (
        <img alt={'Deck cover'} className={s.learnImage} onClick={showImage} src={imageUrl} />
      )}
    </div>
  )
}
