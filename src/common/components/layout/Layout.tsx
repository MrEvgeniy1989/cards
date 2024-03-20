import { Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Header } from '@/common/components/ui/header'
import { useLogoutMutation, useMeQuery } from '@/feature/auth/api/authApi'

import 'react-toastify/dist/ReactToastify.css'

import s from './Layout.module.scss'

export const Layout = () => {
  const { data, isError, isLoading } = useMeQuery()
  const isAuthenticated = !isError && !isLoading
  const navigate = useNavigate()
  const [logout] = useLogoutMutation()

  const logoutAndNavigate = async () => {
    await logout()
    navigate('/login')
  }
  const toProfilePage = () => {
    navigate('/profile')
  }

  return (
    <div className={s.layout}>
      <Header
        email={data?.email ?? ''}
        isLoggedIn={isAuthenticated}
        onLogout={logoutAndNavigate}
        toProfile={toProfilePage}
        userName={data?.name ?? ''}
      />
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
