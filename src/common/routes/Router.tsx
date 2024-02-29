import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PrivateRoutes } from '@/common/routes/PrivateRoutes'
import { SignIn } from '@/feature/auth/ui/signIn'
import { DecksPage } from '@/pages/decks/DecksPage'

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
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
