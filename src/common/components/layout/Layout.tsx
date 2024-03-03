import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Header } from '@/common/components/ui/header'

import 'react-toastify/dist/ReactToastify.css'

import s from './Layout.module.scss'

export const Layout = () => {
  return (
    <div className={s.layout}>
      <Header isLoggedIn={false} />
      <main className={s.main}>
        <Outlet />
      </main>
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position={'bottom-left'}
        rtl={false}
        theme={'dark'}
      />
    </div>
  )
}
