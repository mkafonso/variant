import { Header } from '../../../components/header'

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default async function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props

  return (
    <div>
      <Header />
      <main className="pb-4 pt-10">{children}</main>
    </div>
  )
}
