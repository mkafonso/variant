'use server'

import { HTTPError } from 'ky'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
import { z } from 'zod'

import { createSessionWithPassword } from '../services/handlers'

export async function createSessionPasswordAction(_: unknown, data: FormData) {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'error' })

  const schema = z.object({
    email: z.string().email({ message: t('invalidFieldError') }),
    password: z.string().min(8, { message: t('shortPasswordError') }),
  })

  const result = schema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { email, password } = result.data

  try {
    const response = await createSessionWithPassword({
      email,
      password,
    })

    cookies().set('variant:token', response.token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 1,
    })
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message } = (await error.response.json()) as unknown as never

      return { success: false, message: t(message), errors: null }
    }

    return { success: false, message: t('internalServerError'), errors: null }
  }

  redirect(`/${locale}`)
}
