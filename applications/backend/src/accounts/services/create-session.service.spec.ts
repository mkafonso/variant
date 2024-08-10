import { makeAccount, MemoryAccountsRepository } from '../../__tests__'
import { CreateSessionService } from './create-session.service'
import { MakeCreateSessionService } from './factories'

describe('CreateSessionService', () => {
  let accountsRepository: MemoryAccountsRepository
  let service: CreateSessionService

  beforeEach(() => {
    accountsRepository = new MemoryAccountsRepository()
    service = MakeCreateSessionService.create(accountsRepository)
  })

  it('should create a new session', async () => {
    const account = await makeAccount()
    await accountsRepository.create(account)

    const response = await service.execute({
      email: account.email,
      password: 'password123', // senha certa -> #confia!
    })

    expect(response.account).not.toBeNull()
    expect(response.account.name).toBe('Dolores Madrigal')
    expect(response.account.email).toBe('dolores.madrigal@disney.com')
  })

  it('should not create a session for an incorrect email', async () => {
    const account = await makeAccount()
    await accountsRepository.create(account)

    try {
      await service.execute({
        email: 'account-not-found@email.com',
        password: account.password,
      })
    } catch (error: any) {
      expect(error.message).toBe('invalid credentials')
    }
  })

  it('should not create a session for an incorrect password', async () => {
    const account = await makeAccount()
    await accountsRepository.create(account)

    try {
      await service.execute({
        email: account.email,
        password: 'wrongPassword',
      })
    } catch (error: any) {
      expect(error.message).toBe('invalid credentials')
    }
  })
})
