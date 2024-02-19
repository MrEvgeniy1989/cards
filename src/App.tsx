import { useState } from 'react'

import { LoginForm } from '@/components/auth/loginForm'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
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
      <Input label={'input'} type={'password'} />
      <Slider max={100} value={[25, 75]} />
      <LoginForm />
    </div>
  )
}
