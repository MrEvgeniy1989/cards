import { ComponentPropsWithoutRef } from 'react'

export type IconProps = {
  color?: string | undefined
  version?: ThemeApp
} & ComponentPropsWithoutRef<'svg'>
export type ThemeApp = 'dark' | 'light' | 'red'
