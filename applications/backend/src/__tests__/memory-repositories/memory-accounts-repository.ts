import { Account } from '../../accounts/entities'
import { AccountsRepositoryInterface } from '../../accounts/repositories'

export class MemoryAccountsRepository implements AccountsRepositoryInterface {
  private accounts: Map<string, Account> = new Map()

  async create(data: Account): Promise<Account> {
    const newAccount: Account = {
      ...data,
      createdAt: new Date(),
    }

    this.accounts.set(data.id, newAccount)
    return newAccount
  }

  async getByEmail(email: string): Promise<Account | null> {
    for (const account of this.accounts.values()) {
      if (account.email === email) {
        return account
      }
    }

    return null
  }
}
