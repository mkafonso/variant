import { api } from '../api-client'

interface CreateSessionWithPasswordRequest {
  email: string
  password: string
}

interface CreateSessionWithPasswordResponse {
  account: {
    id: string
    name: string
    email: string
  }
}

export async function createSessionWithPassword(
  data: CreateSessionWithPasswordRequest,
): Promise<CreateSessionWithPasswordResponse> {
  const response = await api
    .post('accounts/login', { json: data })
    .json<CreateSessionWithPasswordResponse>()

  return response
}
