import { Navigate, RouteObject } from 'react-router-dom'

import { DecksPage } from '@/pages/decks/DecksPage'
import { SignInPage } from '@/pages/signIn'
import { SignUpPage } from '@/pages/signUpPage'

export const privateRoutes: RouteObject[] = [
  { element: <Navigate to={'/decks'} />, path: '/' },
  { element: <DecksPage />, path: '/decks' },
]
export const publicRoutes: RouteObject[] = [
  { element: <SignInPage />, path: '/login' },
  { element: <SignUpPage />, path: '/signup' },
]
