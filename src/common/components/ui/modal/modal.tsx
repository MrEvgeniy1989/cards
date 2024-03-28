import { ComponentPropsWithoutRef, ReactNode, useContext } from 'react'

import { IconClose } from '@/assets'
import { ThemeContext } from '@/feature/theme/themeContext'
import * as Dialog from '@radix-ui/react-dialog'

import s from '@/common/components/ui/modal/modal.module.scss'

import { Typography } from '../typography'

type ModalProps = {
  children: ReactNode
  title?: string
} & ComponentPropsWithoutRef<typeof Dialog.Dialog>
export const Modal = ({ children, title, ...props }: ModalProps) => {
  const { theme } = useContext(ThemeContext)!

  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content className={s.content}>
            <div
              className={s.header}
              style={{
                backgroundColor: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
              }}
            >
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
