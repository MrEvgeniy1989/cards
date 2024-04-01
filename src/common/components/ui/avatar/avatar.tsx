import { FC } from 'react'

import { clsx } from 'clsx'

import s from '@/common/components/ui/avatar/avatar.module.scss'

type AvatarProps = {
  className?: string
  name?: string
  src: string
}
export const Avatar: FC<AvatarProps> = ({ className, name = 'User', src }) => {
  const avatar = clsx(s.avatar, className)

  return <img alt={name} className={avatar} src={src} />
}
