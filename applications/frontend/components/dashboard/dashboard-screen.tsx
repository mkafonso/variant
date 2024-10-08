'use client'

import { Button } from '@variant/ui/components/button'
import { Dialog } from '@variant/ui/components/dialog'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { AddNewSite } from './add-new-site'
import { DashboardScreenPlaceholder } from './dashboard-screen-placeholder'
import { SiteList } from './site-list'

export function DashboardScreen() {
  const t = useTranslations('dashboard')
  const [addSiteDialog, setAddSiteDialog] = useState(false)

  if (![].length) {
    return <DashboardScreenPlaceholder />
  }

  return (
    <Dialog open={addSiteDialog} onOpenChange={setAddSiteDialog}>
      <div className="w-full space-y-6 container">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              {t('title')}
            </h1>
            <p className="text-sm text-muted-foreground">{t('description')}</p>
          </div>

          <Button onClick={() => setAddSiteDialog(true)} type="submit">
            {t('newProduct')}
          </Button>
        </div>

        <SiteList />
      </div>

      <AddNewSite setAddSiteDialog={setAddSiteDialog} />
    </Dialog>
  )
}
