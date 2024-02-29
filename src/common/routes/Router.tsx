import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { BaseTable } from '@/common/components/ui/baseTable'
import { PrivateRoutes } from '@/common/routes/PrivateRoutes'
import { SignIn } from '@/feature/auth/ui/signIn'

const privateRoutes: RouteObject[] = [
  {
    element: <div>Hello</div>,
    path: '/',
  },
]
const publicRoutes: RouteObject[] = [
  {
    element: <SignIn onSubmit={() => {}} />,
    path: '/login',
  },
  {
    element: <BaseTable />,
    path: '/table',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
