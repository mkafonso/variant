import { Session } from '../entities'

export abstract class SessionsRepositoryInterface {
  abstract create(data: Session): Promise<Session>

  abstract getById(id: string): Promise<Session | null>
}
