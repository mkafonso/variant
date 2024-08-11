'use client'

import { Button } from '@variant/ui/components/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@variant/ui/components/card'
import { Dialog } from '@variant/ui/components/dialog'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { AddNewSite } from './add-new-site'

export function DashboardScreen() {
  const t = useTranslations('dashboard')
  const [addSiteDialog, setAddSiteDialog] = useState(false)

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

        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-md bg-zinc-600"></div>
                  <div>
                    <CardTitle className="flex items-end gap-2 text-base">
                      Meu portfólio
                    </CardTitle>
                    <CardDescription>
                      https://github.com/mkafonso
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <AddNewSite setAddSiteDialog={setAddSiteDialog} />
    </Dialog>
  )
}
