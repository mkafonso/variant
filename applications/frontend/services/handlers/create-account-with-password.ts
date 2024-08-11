import { api } from '../api-client'

interface CreateAccountWithPasswordRequest {
  name: string
  email: string
  password: string
}

export async function createAccountWithPassword(
  data: CreateAccountWithPasswordRequest,
): Promise<void> {
  await api.post('accounts/register', { json: data })
}
