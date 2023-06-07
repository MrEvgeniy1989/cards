import { createBrowserRouter } from "react-router-dom"
import { Layout } from "@/components/Layout/Layout"
import { paths } from "@/constants"
import { Auth } from "@/features/auth/Auth"
import { Registration } from "@/features/registration/Registration"
import React from "react"
import { ProtectedRoutes } from "@/components/ProtectedRoute/ProtectedRoute"
import { Login } from "@/features/login/Login"
import { Test } from "@/components/Test/Test"

export const router = createBrowserRouter([
  {
    path: paths.PACK_LIST,
    element: <Layout />,
    // element: <Test />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: paths.AUTH,
        element: <Auth />,
        children: [
          // {
          //   path: "/test",
          //   element: <Test />,
          // },
          {
            path: paths.REGISTRATION,
            element: <Registration />,
          },
          {
            path: paths.LOGIN,
            element: <Login />,
          },
          // {
          //   path: paths.SET_NEW_PASSWORD,
          //   element: <NewPassword />,
          // },
          // {
          //   path: paths.FORGOT_PASSWORD,
          //   element: <ForgotPassword />,
          // },
          // {
          //   path: paths.CHECK_EMAIL,
          //   element: <CheckEmail />,
          // },
        ],
      },
      {
        path: "/test",
        element: <ProtectedRoutes />,
        children: [
          {
            index: true,
            element: <Test />,
          },
          // {
          //   path: paths.PACK,
          //   element: <Pack />,
          // },
          // {
          //   path: paths.USER_PROFILE,
          //   element: <UserProfile />,
          // },
          // {
          //   path: paths.LEARN_PACK,
          //   element: <Learn />,
          // },
        ],
      },
    ],
  },
])
