import '@variant/ui/globals.css'

import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'

const font = Inter({ subsets: ['latin'] })

type RootLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout(props: RootLayoutProps) {
  const { children, params } = props

  const messages = await getMessages()

  return (
    <html lang={params.locale} className="dark" suppressHydrationWarning>
      <body className={font.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
