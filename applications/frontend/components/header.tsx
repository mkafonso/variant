import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { ProfileBtnNavigation } from './profile-btn'

export function Header() {
  const t = useTranslations('header')

  return (
    <header className="container bg-background mx-auto flex items-center justify-between border-b py-4 sticky top-0">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={28}
            height={28}
            alt={t('logo.alt')}
            title={t('logo.title')}
          />
        </Link>

        <span className="font-semibold">{t('logo.title')}</span>
      </div>

      <ProfileBtnNavigation />
    </header>
  )
}
