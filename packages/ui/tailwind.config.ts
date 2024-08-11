import sharedConfig from '@variant/tailwind-config/tailwind.config'
import { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
}

export default config
