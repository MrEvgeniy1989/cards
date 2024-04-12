import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '@/app/styles/index.scss'
import type { Preview } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '../src/common/components/ui/themeProvider/ThemeProvider'

const preview: Preview = {
  decorators: [
    Story => (
      <MemoryRouter>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </MemoryRouter>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'var(--color-dark-900)',
        },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
