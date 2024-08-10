import { SessionsRepositoryInterface } from '../../repositories'
import { GetOrCreateSessionService } from '../get-or-create-session.service'

export class MakeGetOrCreateSessionService {
  static create(sessionsRepository: SessionsRepositoryInterface) {
    return new GetOrCreateSessionService(sessionsRepository)
  }
}
