import { Navigate, RouteObject } from 'react-router-dom'

import { CheckEmailPage } from '@/pages/checkEmailPage'
import { CreateNewPasswordPage } from '@/pages/createNewPasswordPage'
import { DeckPage } from '@/pages/deckPage/DeckPage'
import { DecksPage } from '@/pages/decksPage/DecksPage'
import { ForgotPasswordPage } from '@/pages/forgotPassword'
import { LearnPage } from '@/pages/learnPage'
import { NotFoundPage } from '@/pages/notFoundPage'
import { ProfilePage } from '@/pages/profilePage'
import { SignInPage } from '@/pages/signIn'
import { SignUpPage } from '@/pages/signUpPage'

export const privateRoutes: RouteObject[] = [
  { element: <Navigate to={'/decks'} />, path: '/' },
  { element: <DecksPage />, path: '/decks' },
  { element: <ProfilePage />, path: '/profile' },
  { element: <DeckPage />, path: '/decks/:id/cards' },
  { element: <LearnPage />, path: '/decks/:id/learn' },
]
export const publicRoutes: RouteObject[] = [
  { element: <SignInPage />, path: '/login' },
  { element: <SignUpPage />, path: '/sign-up' },
  { element: <CreateNewPasswordPage />, path: '/create-new-password/:token' },
  { element: <ForgotPasswordPage />, path: '/forgot-password' },
  { element: <CheckEmailPage />, path: '/check-email/:email' },
  { element: <NotFoundPage />, path: '/not-found' },
]
