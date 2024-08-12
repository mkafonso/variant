'use client'

import { Button } from '@variant/ui/components/button'
import { Dialog } from '@variant/ui/components/dialog'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { AddNewSite } from './add-new-site'

export function DashboardScreenPlaceholder() {
  const t = useTranslations('dashboard')
  const [addSiteDialog, setAddSiteDialog] = useState(false)

  return (
    <Dialog open={addSiteDialog} onOpenChange={setAddSiteDialog}>
      <div className="flex container h-[450px] mx-auto shrink-0 items-center justify-center rounded-md border border-dashed">
        <div className="flex flex-col mx-auto max-w-[420px] shrink-0 items-center justify-center">
          <h3 className="mt-4 text-lg font-semibold">
            {t('placeholderTitle')}
          </h3>
          <p className="mb-4 mt-2 text-sm text-center text-muted-foreground">
            {t('placeholderDescription')}
          </p>

          <Button onClick={() => setAddSiteDialog(true)} type="submit">
            {t('newProduct')}
          </Button>
        </div>
      </div>

      <AddNewSite setAddSiteDialog={setAddSiteDialog} />
    </Dialog>
  )
}
