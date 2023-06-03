import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
})

export const appReducer = slice.reducer
export const appActions = slice.actions
