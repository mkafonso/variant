import { AccountsRepositoryInterface } from '../../repositories'
import { CreateSessionService } from '../create-session.service'

export class MakeCreateSessionService {
  static create(accountsRepository: AccountsRepositoryInterface) {
    return new CreateSessionService(accountsRepository)
  }
}
