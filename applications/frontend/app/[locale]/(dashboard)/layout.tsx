import { redirect } from 'next/navigation'

import { Header } from '../../../components/header'
import { isAuthenticated } from '../../../utils/authentication'

type DashboardLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function DashboardLayout(props: DashboardLayoutProps) {
  const { children, params } = props

  if (!isAuthenticated()) {
    redirect(`/${params.locale}/login`)
  }

  return (
    <div>
      <Header />
      <main className="pb-4 pt-10">{children}</main>
    </div>
  )
}
