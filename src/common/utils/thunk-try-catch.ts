import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk"
import { AppDispatch, RootState } from "@/app/store"

type Options = { showGlobalError?: boolean } | undefined

export const thunkTryCatch = async <T>(
  thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>,
  promise: Function,
  options?: Options,
): Promise<T | ReturnType<typeof thunkAPI.rejectWithValue>> => {
  const { showGlobalError = true } = options || {}
  const { rejectWithValue } = thunkAPI
  try {
    return await promise()
  } catch (error) {
    return rejectWithValue({ error, showGlobalError })
  }
}

// type Options = { showGlobalError?: boolean } | undefined
//
// export const thunkTryCatch = async <T>(
//   thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>,
//   promise: () => Promise<T>,
//   options?: Options,
// ): Promise<T | ReturnType<typeof thunkAPI.rejectWithValue>> => {
//   const { showGlobalError = true } = options || {}
//   const { rejectWithValue } = thunkAPI
//   try {
//     return await promise()
//   } catch (error) {
//     return rejectWithValue({ error, showGlobalError })
//   }
// }
//
// const createThunkAction = <A, R, T>(
//   promise: (arg: A) => Promise<R>,
//   transformPromise?: (arg: R) => T,
// ) => {
//   return (arg: A, thunkAPI: any) => {
//     return thunkTryCatch(thunkAPI, () => promise(arg).then(transformPromise))
//   }
// }
