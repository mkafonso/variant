import { cookies } from 'next/headers'

export function isAuthenticated() {
  return !!cookies().get('variant:token')?.value
}
