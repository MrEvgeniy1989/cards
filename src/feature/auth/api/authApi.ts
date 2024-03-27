import { baseApi } from '@/common/api/baseApi'
import {
  LoginParams,
  LoginResponse,
  RecoverPasswordParams,
  ResetPasswordParams,
  SignUpParams,
  User,
} from '@/feature/auth/api/auth.types'

const linkForRecoverPassword = `${import.meta.env.VITE_DEPLOY_URL}/create-new-password/##token##`

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginParams>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: 'v1/auth/login',
      }),
    }),
    logout: builder.mutation<void, void>({
      invalidatesTags: ['Me'],
      query: () => ({
        method: 'POST',
        url: 'v1/auth/logout',
      }),
    }),
    me: builder.query<User | null, void>({
      providesTags: ['Me'],
      query: () => 'v1/auth/me',
    }),
    recoverPassword: builder.mutation<void, RecoverPasswordParams>({
      query: body => ({
        body: {
          email: body.email,
          html: `<h1>Hi, ##name##</h1><p>Click <a href="${linkForRecoverPassword}">here</a> to recover your password</p>`,
          subject: 'Recovery Password',
        },
        method: 'POST',
        url: 'v1/auth/recover-password',
      }),
    }),
    resetPassword: builder.mutation<void, ResetPasswordParams>({
      query: ({ password, token }) => ({
        body: { password },
        method: 'POST',
        url: `v1/auth/reset-password/${token}`,
      }),
    }),
    signUp: builder.mutation<User, SignUpParams>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: 'v1/auth/sign-up',
      }),
    }),
    updateProfile: builder.mutation<User, any>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'PATCH',
        url: 'v1/auth/me',
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateProfileMutation,
} = authApi
