import { Account } from '../entities'

export abstract class AccountsRepositoryInterface {
  abstract create(data: Account): Promise<Account>
  abstract delete(id: string): Promise<void>
  abstract getByEmail(email: string): Promise<Account | null>
  abstract getById(id: string): Promise<Account | null>
}
