import { Navigate, RouteObject } from 'react-router-dom'

import { CreateNewPasswordPage } from '@/pages/createNewPasswordPage'
import { DecksPage } from '@/pages/decks/DecksPage'
import { ForgotPasswordPage } from '@/pages/forgonPassword'
import { NotFoundPage } from '@/pages/notFoundPage'
import { SignInPage } from '@/pages/signIn'
import { SignUpPage } from '@/pages/signUpPage'

export const privateRoutes: RouteObject[] = [
  { element: <Navigate to={'/decks'} />, path: '/' },
  { element: <DecksPage />, path: '/decks' },
]
export const publicRoutes: RouteObject[] = [
  { element: <SignInPage />, path: '/login' },
  { element: <SignUpPage />, path: '/sign-up' },
  { element: <CreateNewPasswordPage />, path: '/create-new-password/:token' },
  { element: <ForgotPasswordPage />, path: '/forgot-password' },
  { element: <NotFoundPage />, path: '/not-found' },
]
