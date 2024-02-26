import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

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
