import { useState } from 'react'

import { LoginForm } from '@/components/auth/loginForm'
import { BaseTable } from '@/components/ui/baseTable/baseTable'
import { Checkbox } from '@/components/ui/checkbox'
import { Header } from '@/components/ui/header'
import { Slider } from '@/components/ui/slider'
import { TextField } from '@/components/ui/textField'

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
      <Header isLoggedIn={false} />
    </div>
  )
}
