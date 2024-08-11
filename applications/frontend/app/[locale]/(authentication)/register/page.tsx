import { getTranslations } from 'next-intl/server'

import { RegisterAccountForm } from '../../../../components/authentication/register-account-form'

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
    title: t('register.seo.title'),
    description: t('register.seo.description'),
  }
}

export default function Page(props: PageProps) {
  const {
    params: { locale },
  } = props

  return <RegisterAccountForm locale={locale} />
}
