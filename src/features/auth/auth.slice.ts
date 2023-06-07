import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  AuthApi,
  LoginArgs,
  RegistrationArgs,
  RegistrationResponse,
  UserType,
} from "@/features/auth/auth.api"
import { createAppAsyncThunk } from "@/common"
import { thunkTryCatch } from "@/common/utils/thunk-try-catch"

// type ButtonProps = ComponentPropsWithoutRef<"button">

const THUNK_PREFIXES = {
  REGISTRATION: "auth/registration",
  LOGIN: "auth/login",
}

const registration = createAppAsyncThunk<
  { user: RegistrationResponse },
  RegistrationArgs
>(THUNK_PREFIXES.REGISTRATION, async (arg, thunkAPI) => {
  return thunkTryCatch(
    thunkAPI,
    async () => {
      return await AuthApi.registration(arg)
    },
    { showGlobalError: true },
  )
})

const login = createAppAsyncThunk<{ user: UserType }, LoginArgs>(
  THUNK_PREFIXES.LOGIN,
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const response = await AuthApi.login(arg)
      return { user: response }
    })
  },
)
const slice = createSlice({
  name: "auth",
  initialState: {
    user: null as UserType | null,
    isAuthed: null as boolean | null,
    isLoading: false,
  },
  reducers: {
    setAuthed: (state, action: PayloadAction<{ isAuthed: boolean | null }>) => {
      state.isAuthed = action.payload.isAuthed
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload) state.user = action.payload.user
    })
    // .addCase(login.fulfilled, (state, action) => {
    //   if (action.payload) state.user = action.payload.user
    // })
  },
})

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authThunks = { registration, login }
