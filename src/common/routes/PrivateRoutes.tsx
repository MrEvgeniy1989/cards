import { Navigate, Outlet } from 'react-router-dom'

import { Page } from '@/common/components/ui/page'
import { Spinner } from '@/common/components/ui/spinner/Spinner'
import { useMeQuery } from '@/feature/auth/api/authApi'

export const PrivateRoutes = () => {
  const { isError, isLoading } = useMeQuery()

  if (isLoading) {
    return (
      <Page>
        <Spinner />
      </Page>
    )
  }
  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
