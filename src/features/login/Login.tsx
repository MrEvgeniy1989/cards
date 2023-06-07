import React from "react"
import { Test } from "@/components/Test/Test"
import { authActions } from "@/features/auth/auth.slice"
import { useAppDispatch } from "@/app/hooks"
import { useNavigate } from "react-router-dom"

export const Login: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const buttonLoginClicked = () => {
    dispatch(authActions.setAuthed({ isAuthed: true }))
    navigate("/test")
  }

  return (
    <div>
      Login
      <button onClick={buttonLoginClicked}>Войти</button>
      <Test />
    </div>
  )
}
