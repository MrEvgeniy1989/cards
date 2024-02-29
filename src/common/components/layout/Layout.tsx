import { Outlet } from 'react-router-dom'

import { Header } from '@/common/components/ui/header'

import s from './Layout.module.scss'

export const Layout = () => {
  return (
    <div className={s.layout}>
      <Header isLoggedIn={false} />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  )
}
