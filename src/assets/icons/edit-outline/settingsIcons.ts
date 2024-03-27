import { ThemeApp } from '@/assets/icons/edit-outline/typeIcons'

export const determineVersion = (version: ThemeApp) => {
  switch (version) {
    case 'dark':
      return '#e5e5e5'
    default:
      return 'black'
  }
}
