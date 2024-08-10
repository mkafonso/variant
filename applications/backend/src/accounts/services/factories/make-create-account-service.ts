import { AccountsRepositoryInterface } from '../../repositories'
import { CreateAccountService } from '../create-account.service'

export class MakeCreateAccountService {
  static create(accountsRepository: AccountsRepositoryInterface) {
    return new CreateAccountService(accountsRepository)
  }
}
