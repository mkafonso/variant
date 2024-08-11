import '@variant/ui/globals.css'

import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'] })

type RootLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout(props: RootLayoutProps) {
  const { children, params } = props

  return (
    <html lang={params.locale} className="dark">
      <body className={font.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
