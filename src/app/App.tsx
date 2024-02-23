import { useState } from 'react'

import { CheckEmail } from '@/components/auth/checkEmail'
import { ForgotPassword } from '@/components/auth/forgotPassword'
import { SignIn } from '@/components/auth/signIn/SignIn'
import { BaseTable } from '@/components/ui/baseTable/baseTable'
import { Checkbox } from '@/components/ui/checkbox'
import { Header } from '@/components/ui/header'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { TextField } from '@/components/ui/textField'

import s from './app.module.scss'

export const App = () => {
  const [checked, setChecked] = useState(false)
  const [pageSize, setPageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const onChangePageSize = (value: string) => {
    setPageSize(Number(value))
  }

  return (
    <div className={s.app}>
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
      <Header isLoggedIn={false} />
      <SignIn onSubmit={() => {}} />
      <CheckEmail email={'example@mail.com'} />
      <ForgotPassword onSubmit={() => {}} />
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onValueChange={onChangePageSize}
        options={[
          { title: '10', value: '10' },
          { title: '20', value: '20' },
          { title: '30', value: '30' },
          { title: '40', value: '40' },
          { title: '50', value: '50' },
        ]}
        pageSize={pageSize}
        totalCount={155}
        value={pageSize.toString()}
      />
    </div>
  )
}
