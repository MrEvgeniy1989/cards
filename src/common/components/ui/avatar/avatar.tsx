import { FC } from 'react'

type AvatarProps = {
  className?: string
  height?: string
  name?: string
  src: string
  width?: string
}
export const Avatar: FC<AvatarProps> = ({ className, height, name = 'User', src, width }) => {
  const avatarStyle = {
    borderRadius: width && height ? '50%' : '2.25rem',
    height: height ?? '2.25rem',
    width: width ?? '2.25rem',
  }

  return (
    <img
      alt={name}
      className={`${className ?? ''}`}
      src={src}
      style={className ? undefined : avatarStyle}
    />
  )
}
