import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { useNavigate } from "react-router-dom"
import React, { useEffect } from "react"
import { appActions } from "@/features/app/app.slice"
import { toast } from "react-toastify"
import { authThunks } from "@/features/auth/auth.slice"
import { paths } from "@/constants"

export const Test = () => {
  // const isLoading = useAppSelector((state) => state.app.isLoading)
  const error = useAppSelector((state) => state.app.error)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }))
    }, 1000)
  }, [dispatch])

  const handleErrorButtonClicked = () => {
    dispatch(appActions.setError({ error: "new error" }))
    toast.error("new error")
  }

  const handleLoginClicked = async () => {
    await dispatch(
      authThunks.login({
        email: "",
        password: "",
        rememberMe: true,
      }),
    ).unwrap()
    navigate(paths.LOGIN)
    toast.success("login success")
  }

  const handleRegistrationClicked = async () => {
    await dispatch(
      authThunks.registration({
        email: "",
        password: "",
      }),
    ).unwrap()
    navigate(paths.REGISTRATION)
    toast.success("registration success")
  }

  return (
    <div>
      <button onClick={handleLoginClicked}>Login</button>
      <button onClick={handleRegistrationClicked}>Register</button>
      <button onClick={handleErrorButtonClicked}>create error</button>
      {!!error && <h2>{error}</h2>}
    </div>
  )
}
