import React from "react"
import { LinearProgress } from "@mui/material"
import { useAppSelector } from "@/app/hooks"
import s from "./Layout.module.css"
import { useDeviceType } from "@/hooks/useDeviceType"
import { MobileHeader } from "@/components/Layout/MobileHeader/MobileHeader"
import { DesktopHeader } from "@/components/Layout/DesktopHeader/DesktopHeader"
import { Outlet } from "react-router-dom"

type PropsType = {}

export const Layout: React.FC<PropsType> = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading)

  const { isDesktop, isMobile } = useDeviceType()

  return (
    <div>
      {isLoading && <LinearProgress />}
      {isMobile && <MobileHeader />}
      {isDesktop && <DesktopHeader />}
      <div className={s.content}>
        <Outlet />
      </div>
      {/*{isMobile && <MobileFooter />}*/}
      {/*{isDesktop && <DesktopFooter />}*/}
    </div>
  )
}
