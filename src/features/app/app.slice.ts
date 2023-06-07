import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { isAxiosError } from "axios"
import { toast } from "react-toastify"

let initialAppState = {
  error: null as string | null,
  isLoading: true,
  isAppInitialized: false,
}

const slice = createSlice({
  name: "user",
  initialState: initialAppState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error
    },
    setIsAppInitialized: (
      state,
      action: PayloadAction<{ isInitialized: boolean }>,
    ) => {
      state.isAppInitialized = action.payload.isInitialized
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload: { error } }) => {
          state.isLoading = false

          const errorMessage = getErrorMessage(error)
          if (errorMessage === null) return

          toast.error(errorMessage)
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false
        },
      )
  },
})

/* if null is return no message should be show  */
function getErrorMessage(error: unknown): null | string {
  if (isAxiosError(error)) {
    if (
      error?.response?.status === 401 &&
      !error?.request.responseURL.endsWith("/me")
    )
      return null
    return error?.response?.data?.error ?? error.message
  }
  if (error instanceof Error) {
    return `Native error: ${error.message}`
  }
  return JSON.stringify(error)
}

export const appReducer = slice.reducer
export const appActions = slice.actions
