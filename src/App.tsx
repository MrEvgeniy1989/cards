import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'

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
      <Input label={'input'} type={'password'} />
    </div>
  )
}
