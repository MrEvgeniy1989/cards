import { useEffect, useState } from "react"

export const useDeviceType = () => {
  const [isDesktop, setIsDesktop] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDesktop(true)
        setIsMobile(false)
      } else {
        setIsDesktop(false)
        setIsMobile(true)
      }
    }

    window.addEventListener("resize", handleResize)

    // Вызовем handleResize() в первый раз при загрузке страницы
    handleResize()

    // Отписываемся от события resize
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { isDesktop, isMobile }
}
