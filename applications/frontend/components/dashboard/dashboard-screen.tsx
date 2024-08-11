'use client'

import { useTranslations } from 'next-intl'

export function DashboardScreen() {
  const t = useTranslations('authentication')

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {t('login.title')}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t('login.description')}
        </p>
      </div>
    </div>
  )
}
