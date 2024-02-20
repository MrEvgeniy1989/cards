import { useState } from 'react'

import { BaseTable } from '@/components/ui/baseTable/baseTable'
import { LoginForm } from '@/components/auth/loginForm'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/textField'
import { Slider } from '@/components/ui/slider'

export function App() {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <Checkbox
        checked={checked}
        label={'Check-box'}
        onCheckedChange={() => {
          setChecked(!checked)
        }}
      />
      <TextField label={'input'} type={'password'} />
      <Slider max={100} value={[25, 75]} />
      <LoginForm />
      <BaseTable />
    </div>
  )
}
