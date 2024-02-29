import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/common/components/layout'
import { PrivateRoutes } from '@/common/routes/PrivateRoutes'
import { DecksPage } from '@/pages/decks/DecksPage'
import { SignInPage } from '@/pages/signIn'
import { SignUpPage } from '@/pages/signUpPage'

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/decks',
  },
]
const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/login',
  },
  {
    element: <SignUpPage />,
    path: '/signup',
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
