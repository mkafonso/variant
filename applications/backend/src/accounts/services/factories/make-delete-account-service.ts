import { AccountsRepositoryInterface } from '../../repositories'
import { DeleteAccountService } from '../delete-account.service'

export class MakeDeleteAccountService {
  static create(accountsRepository: AccountsRepositoryInterface) {
    return new DeleteAccountService(accountsRepository)
  }
}
