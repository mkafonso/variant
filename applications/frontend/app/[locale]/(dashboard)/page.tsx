import { getTranslations } from 'next-intl/server'

import { DashboardScreen } from '../../../components/dashboard/dashboard-screen'

type PageProps = {
  params: {
    locale: string
  }
}

export async function generateMetadata(props: PageProps) {
  const {
    params: { locale },
  } = props
  const t = await getTranslations({ locale, namespace: 'dashboard' })

  return {
    title: t('seo.title'),
    description: t('seo.description'),
  }
}

export default function Page() {
  return <DashboardScreen />
}
