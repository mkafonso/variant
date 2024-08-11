import { getTranslations } from 'next-intl/server'

import { LoginAccountForm } from '../../../../components/authentication/login-account-form'

type PageProps = {
  params: {
    locale: string
  }
}

export async function generateMetadata(props: PageProps) {
  const {
    params: { locale },
  } = props
  const t = await getTranslations({ locale, namespace: 'authentication' })

  return {
    title: t('login.seo.title'),
    description: t('login.seo.description'),
  }
}

export default function Page(props: PageProps) {
  const {
    params: { locale },
  } = props

  return <LoginAccountForm locale={locale} />
}
