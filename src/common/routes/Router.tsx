import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { BaseTable } from '@/common/components/ui/baseTable'
import { PrivateRoutes } from '@/common/routes/PrivateRoutes'
import { SignIn } from '@/feature/auth/ui/signIn'
import { DecksTable } from '@/feature/decks/ui/decksTable/DecksTable'

const privateRoutes: RouteObject[] = [
  {
    element: <DecksTable />,
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
