import { redirect } from 'next/navigation'

import { isAuthenticated } from '../../../utils/authentication'

type AuthLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function AuthLayout(props: AuthLayoutProps) {
  const { children, params } = props

  if (isAuthenticated()) {
    redirect(`/${params.locale}`)
  }

  return (
    <div className="mx-auto flex w-full h-screen justify-center items-center sm:w-[350px]">
      {children}
    </div>
  )
}
