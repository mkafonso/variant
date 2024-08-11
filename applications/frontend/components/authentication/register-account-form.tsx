'use client'

import { Button } from '@variant/ui/components/button'
import { Input } from '@variant/ui/components/input'
import { Label } from '@variant/ui/components/label'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useActionState } from 'react'

import { createAccountPasswordAction } from '../../actions'

type PageProps = {
  locale: string
}

export function RegisterAccountForm(props: PageProps) {
  const { locale } = props
  const [state, formAction, isPending] = useActionState(
    createAccountPasswordAction,
    { success: false, message: null, errors: null },
  )

  const t = useTranslations('authentication')

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {t('register.title')}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t('register.description')}
        </p>
      </div>

      <form className="space-y-4" action={formAction}>
        <div className="space-y-1">
          <Label htmlFor="name">{t('register.nameLabel')}</Label>
          <Input
            name="name"
            id="name"
            placeholder={t('register.namePlaceholder')}
          />
          {state.errors?.name && (
            <span className="text-sm text-rose-500">
              {state.errors.name[0]}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="email">{t('register.emailLabel')}</Label>
          <Input
            name="email"
            type="email"
            id="email"
            placeholder={t('register.emailPlaceholder')}
          />
          {state.errors?.email && (
            <span className="text-sm text-rose-500">
              {state.errors.email[0]}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">{t('register.passwordLabel')}</Label>
          <Input
            name="password"
            type="password"
            id="password"
            placeholder={t('register.passwordPlaceholder')}
          />
          {state.errors?.password && (
            <span className="text-sm text-rose-500">
              {state.errors.password[0]}
            </span>
          )}
        </div>

        <Button className="w-full" type="submit" disabled={isPending}>
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            t('register.btnContinueWithEmail')
          )}
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              {t('register.orContinueWith')}
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full"
          type="button"
          disabled={isPending}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-2 h-5 w-5 invert"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          {t('register.btnContinueWithGithub')}
        </Button>

        {!state.success && state.message && (
          <span className="text-sm text-rose-500 block">{state.message}</span>
        )}
      </form>

      <Button asChild variant="link" className="px-0">
        <Link
          href={`/${locale}/login`}
          className="text-sm font-medium !text-muted-foreground hover:underline"
        >
          {t('register.alreadyRegistered')}
        </Link>
      </Button>
    </div>
  )
}
