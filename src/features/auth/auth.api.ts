import { AuthInstance } from "@/features/auth/auth.instance"

export const AuthApi = {
  registration: (params: RegistrationArgs) => {
    return AuthInstance.post<RegistrationResponse>("register", params).then(
      (res) => res.data,
    )
  },
  login: (params: LoginArgs) => {
    return AuthInstance.post<UserType>("login", params).then((res) => res.data)
  },
}

// types
export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

// export type RegisterArgs = { email: string; password: string }
export type RegistrationArgs = Pick<LoginArgs, "email" | "password">
export type RegistrationResponse = {
  addedUser: AddedUser
}
export type AddedUser = Omit<UserType, "token" | "tokenDeathTime">
export type UserType = {
  _id: number
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: string
  updated: string
  __v: number
  token: string
  tokenDeathTime: number
}
