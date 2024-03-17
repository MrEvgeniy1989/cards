import { useState } from 'react'

import { Button } from '@/common/components/ui/button'
import { Checkbox } from '@/common/components/ui/checkbox'
import { Modal } from '@/common/components/ui/modal'
import { TextField } from '@/common/components/ui/textField'

import s from '@/feature/decks/ui/decksHeader/addDeckModal/addDeckModal.module.scss'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

export const AddDeckModal = ({ open, setOpen }: Props) => {
  const [checked, setChecked] = useState(false)

  return (
    <Modal onOpenChange={setOpen} open={open} title={'Add New Deck'}>
      <div className={s.container}>
        <TextField className={s.input} label={'Name Pack'} />
        <Button className={s.buttonUploadImage} fullWidth variant={'secondary'}>
          Upload Image
        </Button>
        <Checkbox
          checked={checked}
          className={s.checkbox}
          label={'Private pack'}
          onCheckedChange={() => setChecked(!checked)}
          position={'left'}
        />
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button variant={'primary'}>Add New Pack</Button>
        </div>
      </div>
    </Modal>
  )
}
