import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '@/app/styles/index.scss'
import type { Preview } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

const preview: Preview = {
  decorators: [
    Story => (
      <MemoryRouter>
        <div className="dark-theme">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
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
