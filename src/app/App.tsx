import { useState } from 'react'

import { LoginForm, LoginFormValues } from '@/components/auth/loginForm/LoginForm'
import { BaseTable } from '@/components/ui/baseTable/baseTable'
import { Checkbox } from '@/components/ui/checkbox'
import { Header } from '@/components/ui/header'
import { Slider } from '@/components/ui/slider'
import { TextField } from '@/components/ui/textField'

import s from './app.module.scss'

export const App = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div className={s.app}>
      <Header isLoggedIn />
      <Checkbox
        checked={checked}
        label={'Check-box'}
        onCheckedChange={() => {
          setChecked(!checked)
        }}
      />
      <TextField label={'input'} type={'password'} />
      <Slider max={100} value={[25, 75]} />
      <BaseTable />
      <LoginForm onSubmit={(data: LoginFormValues) => console.log(data)} />
    </div>
  )
}
