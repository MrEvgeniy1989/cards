import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { IconClose } from '@/assets'
import * as Dialog from '@radix-ui/react-dialog'

import s from '@/common/components/ui/modal/modal.module.scss'

import { Typography } from '../typography'

type ModalProps = {
  children: ReactNode
  title?: string
} & ComponentPropsWithoutRef<typeof Dialog.Dialog>
export const Modal = ({ children, title, ...props }: ModalProps) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content className={s.content}>
            <div className={s.header}>
              <Dialog.Title asChild>
                <Typography as={'h3'} variant={'h3'}>
                  {title}
                </Typography>
              </Dialog.Title>
              <Dialog.Close className={s.closeButton}>
                <IconClose />
              </Dialog.Close>
            </div>
            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
