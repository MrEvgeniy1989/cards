import { clsx } from 'clsx'

import s from './LinearProgressBar.module.scss'
type Props = {
  className?: string
}
export const LinearProgressBar = ({ className }: Props) => {
  return (
    <div className={clsx(s.container, className)}>
      <div className={s.progressBar}></div>
    </div>
  )
}
