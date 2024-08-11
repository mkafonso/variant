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

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Criar novo site</DialogTitle>
        <DialogDescription>
          Crie novo site para gerenciar seus experimentos.
        </DialogDescription>
      </DialogHeader>
      <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-1">
            <Label htmlFor="name">Nome do site</Label>
            <Input
              id="name"
              placeholder="Digite o nome do site"
              onChange={(event) => setName(event.target.value)}
            />
            {error && <span className="text-sm text-rose-500">{error}</span>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="url">URL do site</Label>
            <Input
              id="url"
              placeholder="Digite a url do site"
              onChange={(event) => setName(event.target.value)}
            />
            {error && <span className="text-sm text-rose-500">{error}</span>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="description">Descrição do site</Label>
            <Textarea
              id="description"
              placeholder="Digite a descrição do site"
              className="resize-none"
            />
            <span className="text-xs text-right block text-muted-foreground">
              *Max. 150 caracteres
            </span>
          </div>
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={() => setAddSiteDialog(false)}>
          Cancelar
        </Button>

        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            'Adicionar novo site'
          )}
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
