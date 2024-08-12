import { Button } from '@variant/ui/components/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@variant/ui/components/dialog'
import { Input } from '@variant/ui/components/input'
import { Label } from '@variant/ui/components/label'
import { Textarea } from '@variant/ui/components/textarea'
// import { HTTPError } from 'ky'
import { Loader2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Dispatch, SetStateAction, useState, useTransition } from 'react'

// import { createGroup } from '../services/groups/create-group'

type AddNewSiteProps = {
  setAddSiteDialog: Dispatch<SetStateAction<boolean>>
}

export function AddNewSite(props: AddNewSiteProps) {
  const { setAddSiteDialog } = props
  const [, setName] = useState('')
  const [error] = useState('')
  const [isPending] = useTransition()

  const t = useTranslations('dashboard')

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{t('addNewProductTitle')}</DialogTitle>
        <DialogDescription>{t('addNewProductDescription')}</DialogDescription>
      </DialogHeader>
      <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-1">
            <Label htmlFor="name">{t('addNewProductNameLabel')}</Label>
            <Input
              id="name"
              placeholder={t('addNewProductNamePlaceholder')}
              onChange={(event) => setName(event.target.value)}
            />
            {error && <span className="text-sm text-rose-500">{error}</span>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="url">{t('addNewProductUrlLabel')}</Label>
            <Input
              id="url"
              placeholder={t('addNewProductUrlPlaceholder')}
              onChange={(event) => setName(event.target.value)}
            />
            {error && <span className="text-sm text-rose-500">{error}</span>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="description">
              {t('addNewProductDescriptionLabel')}
            </Label>
            <Textarea
              id="description"
              placeholder={t('addNewProductDescriptionPlaceholder')}
              className="resize-none"
            />
            <span className="text-xs text-right block text-muted-foreground">
              {t('addNewProductDescriptionMaxLength')}
            </span>
          </div>
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={() => setAddSiteDialog(false)}>
          {t('btnAddNewProductCancel')}
        </Button>

        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            t('btnAddNewProductSave')
          )}
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
