import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/common/components/layout'
import { BaseTable } from '@/common/components/ui/baseTable'
import { PrivateRoutes } from '@/common/routes/PrivateRoutes'
import { SignIn } from '@/feature/auth/ui/signIn'
import { DecksTable } from '@/feature/decks/ui/decksTable/DecksTable'
import { SignUpPage } from '@/pages/signUpPage'

const privateRoutes: RouteObject[] = [
  {
    element: <DecksTable />,
    path: '/decks',
  },
]
const publicRoutes: RouteObject[] = [
  {
    element: <SignIn onSubmit={() => {}} />,
    path: '/login',
  },
  {
    element: <SignUpPage />,
    path: '/signup',
  },
  {
    element: <BaseTable />,
    path: '/table',
  },
]

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
    path: '/',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
