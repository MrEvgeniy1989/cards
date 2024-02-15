import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { TabSwitcher } from '@/components/ui/tabSwitcher'

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
      <TabSwitcher
        buttons={[
          { buttonsName: 'Switcher', isButtonsEnable: true, values: 'tabs1' },
          { buttonsName: 'Switcher', isButtonsEnable: true, values: 'tabs2' },
          { buttonsName: 'Switcher', isButtonsEnable: true, values: 'tabs3' },
          { buttonsName: 'Switcher', isButtonsEnable: true, values: 'tabs4' },
          { buttonsName: 'Switcher', isButtonsEnable: false, values: 'tabs4' },
        ]}
      />
    </div>
  )
}
