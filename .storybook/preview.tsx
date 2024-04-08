import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '@/app/styles/index.scss'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="light-theme">
        <Story />
        </div>
    ),
    (Story) => (
      <div className="dark-theme">
        <Story />
        </div>
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