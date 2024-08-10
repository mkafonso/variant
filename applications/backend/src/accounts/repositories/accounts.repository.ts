import { Account } from '../entities'

export abstract class AccountsRepositoryInterface {
  abstract create(data: Account): Promise<Account>
  abstract getByEmail(email: string): Promise<Account | null>
}
