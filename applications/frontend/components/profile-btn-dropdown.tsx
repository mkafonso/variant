'use client'

import { Button } from '@variant/ui/components/button'
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@variant/ui/components/dropdown-menu'
import { deleteCookie } from 'cookies-next'
import { Moon, Power, Sun } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

type Props = {
  locale: string
}

export function ProfileBtnNavigationDropdown(props: Props) {
  const { setTheme, theme } = useTheme()
  const router = useRouter()
  const t = useTranslations('header')

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  function handleLogout() {
    deleteCookie('variant:token')
    router.push(`${props.locale}/login`)
  }

  return (
    <DropdownMenuContent className="w-56" align="end" forceMount>
      <DropdownMenuItem
        className="flex items-center justify-between"
        onClick={toggleTheme}
      >
        <span>{t('theme')}</span>
        {theme === 'light' ? (
          <Sun className="size-4 text-amber-500" />
        ) : (
          <Moon className="size-4 text-zinc-400" />
        )}
      </DropdownMenuItem>
      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem>{t('linkWebsites')}</DropdownMenuItem>
        <DropdownMenuItem>{t('linkExperiments')}</DropdownMenuItem>
        <DropdownMenuItem>{t('linkSessions')}</DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />

      <DropdownMenuItem
        className="flex items-center justify-between"
        onClick={handleLogout}
      >
        <span>{t('linkLogout')}</span>
        <Power className="size-4 text-red-600 dark:text-red-500" />
      </DropdownMenuItem>
      <DropdownMenuSeparator />

      <DropdownMenuItem>
        <Button className="w-full" size="sm">
          <a
            target="_blank"
            href="https://github.com/mkafonso/variant"
            rel="noopener noreferrer"
          >
            {t('linkGithub')}
          </a>
        </Button>
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}
