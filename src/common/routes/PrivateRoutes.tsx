import { Navigate, Outlet } from 'react-router-dom'

import { useMeQuery } from '@/feature/auth/api/authApi'

export const PrivateRoutes = () => {
  const { isError } = useMeQuery()

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
