import { useAppSelector } from "@/app/hooks"
import { Outlet, useNavigate } from "react-router-dom"
import React, { useEffect } from "react"
import { paths } from "@/constants"
import { LinearProgress } from "@mui/material"

export const ProtectedRoutes = () => {
  const isAuthed = useAppSelector((state) => state.auth.isAuthed)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthed) {
      navigate(paths.LOGIN)
    }
    if (isAuthed === null) return
  }, [isAuthed, navigate])

  if (isAuthed === null) return <LinearProgress />
  return <Outlet />
}
