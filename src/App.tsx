import { RouterProvider } from "react-router-dom"
import "./App.css"
import "react-toastify/dist/ReactToastify.css"
import {
  createTheme,
  CssBaseline,
  LinearProgress,
  ThemeProvider,
} from "@mui/material"
import React from "react"
import { ToastContainer } from "react-toastify"
import { router } from "@/common/routes/Routes"
import { useAppSelector } from "@/app/hooks"

const theme = createTheme()

function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isLoading && <LinearProgress />}
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
