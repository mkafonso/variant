import { Account } from '../../accounts/entities'

interface MakeAccountParams {
  name?: string
  email?: string
  password?: string
}

export async function makeAccount({
  name = 'Dolores Madrigal',
  email = 'dolores.madrigal@disney.com',
  password = 'password123',
}: MakeAccountParams = {}): Promise<Account> {
  return Account.create(name, email, password)
}
