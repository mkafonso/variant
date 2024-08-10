import { makeAccount, MemoryAccountsRepository } from '../../__tests__'
import { DeleteAccountService } from './delete-account.service'

describe('DeleteAccountService', () => {
  let accountsRepository: MemoryAccountsRepository
  let service: DeleteAccountService

  beforeEach(() => {
    accountsRepository = new MemoryAccountsRepository()
    service = new DeleteAccountService(accountsRepository)
  })

  it('should delete an session', async () => {
    const account = await makeAccount()
    await accountsRepository.create(account)

    const response = await service.execute({
      accountId: account.id,
      requestedByAccountId: account.id,
    })

    expect(response.message).toBe('account deleted successfully')

    const deletedAccount = await accountsRepository.getById(account.id)
    expect(deletedAccount).toBeNull()
  })

  it('should throw an error if account does not exist', async () => {
    const account = await makeAccount()
    await accountsRepository.create(account)

    try {
      await service.execute({
        accountId: 'account-to-account-not-found',
        requestedByAccountId: account.id,
      })
    } catch (error: any) {
      expect(error.message).toBe('account not found')
    }
  })

  it('should throw an error if user doesnt have permission to perform this action', async () => {
    const account = await makeAccount()
    await accountsRepository.create(account)

    try {
      await service.execute({
        accountId: account.id,
        requestedByAccountId: 'id-de-quem-quer-deletar-conta-do-outro',
      })
    } catch (error: any) {
      expect(error.message).toBe('missing permission')
    }
  })
})
