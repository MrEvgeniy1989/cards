import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'

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
    </div>
  )
}
