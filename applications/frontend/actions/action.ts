'use server'

import { HTTPError } from 'ky'
import { getLocale, getTranslations } from 'next-intl/server'
import { z } from 'zod'

import { createAccountWithPassword } from '../services/handlers'

export async function createAccountPasswordAction(_: unknown, data: FormData) {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'error' })

  const schema = z.object({
    name: z.string().min(1, { message: t('requiredFiedError') }),
    email: z.string().email({ message: t('invalidFieldError') }),
    password: z.string().min(8, { message: t('shortPasswordError') }),
  })

  const result = schema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return { success: false, message: null, errors }
  }

  const { name, email, password } = result.data

  try {
    await createAccountWithPassword({
      name,
      email,
      password,
    })
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message } = (await error.response.json()) as unknown as never

      return { success: false, message: t(message), errors: null }
    }

    return { success: false, message: t('internalServerError'), errors: null }
  }

  return { success: true, message: null, errors: null }
}
