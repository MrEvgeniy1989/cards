import { createSlice } from "@reduxjs/toolkit"
import {
  AuthApi,
  LoginArgs,
  RegisterArgs,
  UserType,
} from "@/features/auth/auth.api"
import { createAppAsyncThunk } from "@/common"

// type ButtonProps = ComponentPropsWithoutRef<"button">

const THUNK_PREFIXES = {
  REGISTER: "auth/register",
  LOGIN: "auth/login",
}

const register = createAppAsyncThunk<any, RegisterArgs>(
  THUNK_PREFIXES.REGISTER,
  (arg) => {
    AuthApi.register(arg)
      .then((res) => console.log(res))
      .catch((e) => {
        console.error(e)
      })
  },
)

const login = createAppAsyncThunk<{ user: UserType }, LoginArgs>(
  THUNK_PREFIXES.LOGIN,
  async (arg) => {
    const res = await AuthApi.login(arg)
    return { user: res }
  },
)
const slice = createSlice({
  name: "auth",
  initialState: { user: null as UserType | null, isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload) state.user = action.payload.user
        state.isLoading = false
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const authReducer = slice.reducer
export const authThunks = { register, login }
