'use client'

import { Button } from '@variant/ui/components/button'
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@variant/ui/components/dropdown-menu'
import { Moon, Power, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

export function ProfileBtnNavigationDropdown() {
  const { setTheme, theme } = useTheme()

  const t = useTranslations('header')

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
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

      <DropdownMenuItem className="flex items-center justify-between">
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
