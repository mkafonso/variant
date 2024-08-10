import { MemoryAccountsRepository } from '../../__tests__'
import { CreateAccountService } from './create-account.service'
import { MakeCreateAccountService } from './factories'

describe('CreateAccountService', () => {
  let accountsRepository: MemoryAccountsRepository
  let service: CreateAccountService

  beforeEach(() => {
    accountsRepository = new MemoryAccountsRepository()
    service = MakeCreateAccountService.create(accountsRepository)
  })

  it('should create a new account', async () => {
    const data = {
      name: 'Dolores Madrigal',
      email: 'dolores.madrigal@disney.com',
      password: 'password123',
    }

    const account = await service.execute(data)

    expect(account).not.toBeNull()
    expect(account.name).toBe(data.name)
    expect(account.email).toBe(data.email)
  })

  it('should not create a new account with an already taken email', async () => {
    const accountData = {
      name: 'Dolores Madrigal',
      email: 'dolores.madrigal@disney.com',
      password: 'password123',
    }

    await service.execute(accountData)

    try {
      await service.execute({
        name: 'Another User',
        email: 'dolores.madrigal@disney.com',
        password: 'anotherpassword',
      })
    } catch (error: any) {
      expect(error.message).toBe('email already taken')
    }
  })
})
