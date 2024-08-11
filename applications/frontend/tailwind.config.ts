import sharedConfig from '@variant/tailwind-config'
import { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  presets: [sharedConfig],
}

export default config
