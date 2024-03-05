import { Navigate, RouteObject } from 'react-router-dom'

import { CreateNewPasswordPage } from '@/pages/createNewPasswordPage'
import { DecksPage } from '@/pages/decks/DecksPage'
import { ForgotPasswordPage } from '@/pages/forgonPassword'
import { LearnPage } from '@/pages/learnPage'
import { NotFoundPage } from '@/pages/notFoundPage'
import { ProfilePage } from '@/pages/profilePage'
import { SignInPage } from '@/pages/signIn'
import { SignUpPage } from '@/pages/signUpPage'

export const privateRoutes: RouteObject[] = [
  { element: <Navigate to={'/decks'} />, path: '/' },
  { element: <DecksPage />, path: '/decks' },
  { element: <ProfilePage />, path: '/profile' },
  { element: <LearnPage />, path: '/decks/:id/learn' },
]
export const publicRoutes: RouteObject[] = [
  { element: <SignInPage />, path: '/login' },
  { element: <SignUpPage />, path: '/sign-up' },
  { element: <CreateNewPasswordPage />, path: '/create-new-password/:token' },
  { element: <ForgotPasswordPage />, path: '/forgot-password' },
  { element: <NotFoundPage />, path: '/not-found' },
]