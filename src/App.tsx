import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/textField'

export function App() {
  const [editMode, setEditMode] = useState(false)

  return (
    <div>
      <Checkbox
        checked={editMode}
        label={'Check-box'}
        onChange={() => {
          setEditMode(!editMode)
        }}
      />
      <TextField label={'input'} type={'password'} />
    </div>
  )
}
