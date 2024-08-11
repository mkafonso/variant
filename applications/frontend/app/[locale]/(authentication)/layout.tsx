type AuthLayoutProps = {
  children: React.ReactNode
}

export default function AuthLayout(props: AuthLayoutProps) {
  const { children } = props

  return (
    <div className="mx-auto flex w-full h-screen justify-center items-center sm:w-[350px]">
      {children}
    </div>
  )
}
