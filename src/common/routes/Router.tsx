import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/common/components/layout'
import { PrivateRoutes } from '@/common/routes/PrivateRoutes'
import { privateRoutes, publicRoutes } from '@/common/routes/routerSettings'

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
    errorElement: <Navigate to={'not-found'} />,
    path: '/',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
